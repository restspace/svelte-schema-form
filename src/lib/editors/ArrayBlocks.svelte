<script lang="ts">
	import type { CommonComponentParameters } from "../types/CommonComponentParameters";
	import { emptyValue, schemaLabel } from "../types/schema";
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
</script>

<div name={params.path.join('.')} class="subset array-blocks depth-{params.path.length}">
	<ol>
		{#each value || [] as item, idx (idx)}
		<li class="array-block">
			<a href={getUrl(item, idx)}>
				<h2>
					{item.name || item.title}
				</h2>
			</a>
		</li>
		{/each}

		{#if !adding}
		<li class="array-block add" on:click={onAdd}>
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