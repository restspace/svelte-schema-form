<script lang="ts">
	import type { CommonComponentParameters } from "../types/CommonComponentParameters";
	import { emptyValue, schemaLabel } from "../types/schema";
	import SubSchemaForm from "../SubSchemaForm.svelte";
	export let params: CommonComponentParameters;
	export let schema: any;
	export let value: any[];

	let collapserOpenState: "open" | "closed" = params.path.length === 0 || !params.collapsible ? "open" : "closed";

	const toggle = () => {
		collapserOpenState = collapserOpenState === "open" ? "closed" : "open";
	}

	const onAdd = () => {
		params.pathChanged(params.path,
		[
			...(value || []),
			emptyValue(schema.items)
		]);
	}

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

	$: legendText = schemaLabel(schema, params.path);
</script>

<fieldset name={params.path.join('.')} class="subset array depth-{params.path.length}">
	{#if params.collapsible || legendText}
	<legend class="subset-label array-label">
		{#if params.collapsible }
		<span class="collapser {collapserOpenState}" on:click={toggle}></span>
		{/if}
		<span class="subset-label-title object-label-title">{legendText}</span>
		{#if schema.description}
		<span class="subset-label-description object-label-description">{schema.description}</span>
		{/if}
	</legend>
	{/if}

	{#if collapserOpenState === "open"}
		{#each value || [] as item, idx (idx)}
		<svelte:component this={SubSchemaForm}
			params={{
				...params,
				path: [ ...params.path, idx.toString() ],
				containerParent: "array"
			}}
			value={item}
			bind:schema={schema.items}
		/>
		<div class="list-controls">
			<button type="button" class="list-control delete" title="delete" on:click={onDelete(idx)}></button>
			<button type="button" class="list-control duplicate" title="duplicate" on:click={onDuplicate(idx)}></button>
			{#if idx > 0}
				<button type="button" class="list-control up" title="move up" on:click={onUp(idx)}></button>
			{/if}
			{#if idx < (value || []).length - 1}
				<button type="button" class="list-control down" title="move down" on:click={onDown(idx)}></button>
			{/if}
		</div>
		{/each}
	<button type="button" class="list-control add" title="add item" on:click={onAdd}></button>
	{/if}
</fieldset>