<script lang="ts">
	import type { CommonComponentParameters } from "../types/CommonComponentParameters";
	import { emptyValue, schemaLabel } from "../types/schema";
	import SubSchemaForm from "../SubSchemaForm.svelte";
	export let params: CommonComponentParameters;
	export let schema: any;
	export let value: any[];
	let { path } = params;

	const onAdd = () => {
		params.pathChanged(path,
		[
			...(value || []),
			emptyValue(schema.items)
		]);
	}

	const onDelete = (idx: number) => () => {
		params.pathChanged(path,
		[
			...value.slice(0, idx),
			...value.slice(idx + 1)
		]);
	};

	const onDuplicate = (idx: number) => () => {
		params.pathChanged(path,
		[
			...value.slice(0, idx),
			value[idx],
			JSON.parse(JSON.stringify(value[idx])),
			...value.slice(idx + 1)
		]);
	};

	const onUp = (idx: number) => () => {
		if (idx > 0) {
			params.pathChanged(path,
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
			params.pathChanged(path,
			[
				...value.slice(0, idx),
				value[idx+1],
				value[idx],
				...value.slice(idx + 2)
			]);
		}
	};
</script>

<fieldset name={path.join('.')} class="array depth-{path.length}">
	<legend>{schemaLabel(schema, path)}</legend>
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
		<button type="button" class="list-control delete" on:click={onDelete(idx)}></button>
		<button type="button" class="list-control duplicate" on:click={onDuplicate(idx)}></button>
		{#if idx > 0}
			<button type="button" class="list-control up" on:click={onUp(idx)}></button>
		{/if}
		{#if idx < (value || []).length - 1}
			<button type="button" class="list-control down" on:click={onDown(idx)}></button>
		{/if}
	</div>
{/each}
<button type="button" class="list-control add" on:click={onAdd}></button>
</fieldset>

<style>
	.list-control {
		background-size: contain;
		background-repeat: no-repeat;
		width: 1.7em;
		height: 1.7em;
		border: none;
	}
	.add {
		background-image: url(/img/add.svg);
	}
	.delete {
		background-image: url(/img/delete.svg);
	}
	.up {
		background-image: url(/img/up.svg);
	}
	.down {
		background-image: url(/img/down.svg);
	}
	.duplicate {
		background-image: url(/img/duplicate.svg);
	}

	.list-item {
		display: flex;
	}

</style>