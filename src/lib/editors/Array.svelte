<script lang="ts">
	import type { CommonComponentParameters } from "../types/CommonComponentParameters";
	import { emptyValue, schemaLabel } from "../types/schema";
	import SubSchemaForm from "../SubSchemaForm.svelte";
	export let params: CommonComponentParameters;
	export let schema: any;
	export let value: any[];

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
</script>

<fieldset name={params.path.join('.')} class="array depth-{params.path.length}">
	<legend>{schemaLabel(schema, params.path)}</legend>
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
</fieldset>