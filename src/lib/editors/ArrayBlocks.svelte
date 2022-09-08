<script lang="ts">
	import type { CommonComponentParameters } from "../types/CommonComponentParameters";
	import { emptyValue } from "../types/schema";
	import SubSchemaForm from "../SubSchemaForm.svelte";
	import _ from "lodash-es";

	export let params: CommonComponentParameters;
	export let schema: any;
	export let value: any[];

	$: value = value || [];

	//check schema
	if (schema.type !== "array" || schema.items.type !== "object") {
		throw new Error('ArrayBlocks editor can only be used on an array with items of type=object');
	}
	
	let adding = false;
	let hovering: number | boolean = false;

	const onAdd = () => {
		params.pathChanged(params.path,
		[
			...(value || []),
			emptyValue(schema.items)
		]);
		adding = true;
	};

	const onAddUpdate = () => {
		const idx = value.length - 1;
		const newPath = [ ...params.path, idx.toString() ];
		params.pathChanged(newPath, value[idx]);
		adding = false;

		// upload any files on the add form
		const doUploads = params.componentContext?.['doUploads'] as (pathPrefix: string) => Promise<void>;
		if (doUploads) {
			doUploads(newPath.join('.'));
		}
	};

	const onDelete = (idx: number) => () => {
		params.pathChanged(params.path,
		[
			...value.slice(0, idx),
			...value.slice(idx + 1)
		]);
	};

	const onDuplicate = (idx: number) => () => {
		params.pathChanged(params.path,
		[
			...value.slice(0, idx),
			value[idx],
			JSON.parse(JSON.stringify(value[idx])),
			...value.slice(idx + 1)
		]);
	};

	const onUp = (idx: number) => () => {
		if (idx > 0) {
			params.pathChanged(params.path,
			[
				...value.slice(0, idx-1),
				value[idx],
				value[idx-1],
				...value.slice(idx + 1)
			]);
		}
	};

	const onDown = (idx: number) => () => {
		if (idx < value.length - 1) {
			params.pathChanged(params.path,
			[
				...value.slice(0, idx),
				value[idx+1],
				value[idx],
				...value.slice(idx + 2)
			]);
		}
	};

	const onDragstart = (i: number) => (ev: DragEvent) => {
		ev.dataTransfer!.effectAllowed = 'move';
		ev.dataTransfer!.dropEffect = 'move';
		ev.dataTransfer!.setData('text/plain', i.toString());
	}

	const onDrop = (i: number) => (ev: DragEvent) => {
		ev.dataTransfer!.dropEffect = 'move'; 
		const start = parseInt(ev.dataTransfer!.getData("text/plain"));

		if (start < i) {
			params.pathChanged(params.path,
			[
				...value.slice(0, start),
				...value.slice(start + 1, i),
				value[start],
				...value.slice(i)
			]);
		} else if (i < start) {
			params.pathChanged(params.path,
			[
				...value.slice(0, i),
				value[start],
				...value.slice(i, start),
				...value.slice(start + 1)
			]);
		}

		hovering = false
	}

	let currentUrl = schema.effectiveUrl || location.href;
	if (currentUrl.includes('#')) currentUrl = currentUrl.split('#')[0];
	if (currentUrl.includes('?')) currentUrl = currentUrl.split('?')[0];

	const getUrl = (item: any, idx: number) => {
		if (currentUrl.endsWith('/')) {
			// we're at the top level, so the schema should have a pathPattern which gives us the next url
			if (!schema.pathPattern) throw new Error('An ArrayBlocks filter on a directory (ending /) needs the schema to have a pathPattern property');
			const pathPattern = schema.pathPattern as string;
			return pathPattern.replace(/\$\{([^}]*)\}/gi, (_substring, p1) => _.get(item, p1.split('.')) || '');
		} else {
			// we're at a lower level, so we use a fragment indicating the . separated path
			return currentUrl + '.' + idx.toString();
		}
	}

	let addItemSchema: any;
	$: {
		const nonArrayProperties = Object.fromEntries(Object.entries(schema.items.properties)
			.filter(([propName, subschema]) => (subschema as { type: string }).type !== 'array'));
		addItemSchema = {
			...schema.items,
			type: "object",
			properties: nonArrayProperties,
			required: schema.items.required?.filter((prop: string) => Object.keys(nonArrayProperties).includes(prop)) || []
		};
	}
	$: lastIdx = (value || []).length;
</script>

<div name={params.path.join('.')} class="subset array-blocks depth-{params.path.length}">
	<ol>
		{#each value || [] as item, idx (item)}
		<li class="array-block"
			style:background-image={item.thumbnail ? `url('${item.thumbnail}')`: ''}
			draggable={true} 
			on:dragstart={onDragstart(idx)}
			on:drop|preventDefault={onDrop(idx)}
			on:dragover|preventDefault={() => false}
			on:dragenter|preventDefault={() => hovering = idx}
			on:dragleave={() => hovering = false}
			class:drag-over={hovering === idx}>
			<a href={getUrl(item, idx)}>
				<h2>
					{item.name || item.title || ''}
				</h2>
			</a>
			<div class="actions">
				<span class="duplicate" on:click={onDuplicate(idx)} title="Duplicate this"></span>
				<span class="delete" on:click={onDelete(idx)} title="Delete this"></span>
			</div>
		</li>
		{/each}

		{#if !adding}
		<li class="array-block add" on:click={onAdd}
			on:drop|preventDefault={onDrop(lastIdx)}
			on:dragover|preventDefault={() => false}
			on:dragenter|preventDefault={() => hovering = lastIdx}
			on:dragleave={() => hovering = false}
			class:drag-over={hovering === lastIdx}>
		</li>
		{/if}
	</ol>
	{#if adding}
	<SubSchemaForm
		params={{
			...params,
			path: [ ...params.path, (value.length - 1).toString() ],
			containerParent: "array"
		}}
		value={value[value.length - 1]}
		bind:schema={addItemSchema}
	/>
	<button type="button" class="submit-button new-item-submit" on:click={onAddUpdate}>Add</button>
	{/if}
</div>