<script lang="ts">
	import type { CommonComponentParameters } from "../types/CommonComponentParameters";
	import { emptyValue, schemaLabel } from "../types/schema";
	import SubSchemaForm from "../SubSchemaForm.svelte";
    import { stringToHtml } from "../utilities";
    import { arrayDelete, arrayAdd, arrayUp, arrayDown, arrayDuplicate } from "../arrayOps";
	export let params: CommonComponentParameters;
	export let schema: any;
	export let value: any[];

	$: value = value || [];
	$: itemSchema = schema.items || {};
	$: listFields = Object.entries(itemSchema.properties).map(([propName, propSchema]) =>
        schemaLabel(propSchema as object, [...params.path, "0", propName]));

	let collapserOpenState: "open" | "closed" = params.path.length === 0 || !params.collapsible ? "open" : "closed";
	let selectedIdx = -1;
	let mode: "list" | "detail" = "list";

	//check schema
	if (schema.type !== "array" || schema.items.type !== "object") {
		throw new Error('ListDetail editor can only be used on an array with items of type=object');
	}

	const toggle = () => {
		collapserOpenState = collapserOpenState === "open" ? "closed" : "open";
	}

	const onSelect = (idx: number) => () => {
		mode = "detail";
		selectedIdx = (idx === selectedIdx ? -1 : idx);
	}

	$: legendText = schemaLabel(schema, params.path);
	$: showWrapper = (value && value.length > 0) || schema.emptyDisplay !== false;
	$: emptyText = (!value || value.length === 0) && typeof schema.emptyDisplay === 'string' && schema.emptyDisplay;
	$: readOnly = params.containerReadOnly || schema.readOnly || false;
	$: controls = schema.controls === undefined ? (readOnly ? '' : 'add, reorder, delete, duplicate') : schema.controls;
</script>

{#if showWrapper}
<fieldset name={params.path.join('.')} class="subset array list-detail depth-{params.path.length}">
	{#if params.collapsible || legendText}
	<legend class="subset-label array-label">
		{#if params.collapsible }
		<span class="collapser {collapserOpenState}" on:click={toggle}></span>
		{/if}
		<span class="subset-label-title object-label-title">{@html stringToHtml(legendText)}</span>
		{#if schema.description}
		<span class="subset-label-description object-label-description">{@html stringToHtml(schema.description)}</span>
		{/if}
	</legend>
	{/if}

	{#if collapserOpenState === "open"}
		{#if !emptyText}
			<div class="table-container" style:grid-template-columns={mode === "list" ? "repeat(2, auto) 50px" : null}>
			{#if mode === "list"}
				{#each listFields as fieldName}
					<div class="heading">{fieldName}</div>
				{/each}
				{#if !readOnly}
					<div class="buttons-header">&nbsp;</div>
				{/if}
				{#each value || [] as item, idx (idx)}
					<div class="row-wrapper" class:selected={idx === selectedIdx} on:click={onSelect(idx)}>
					{#each Object.keys(itemSchema.properties) as propName}
						<div class="item">{item[propName] === undefined ? '\u00A0' : item[propName]}</div>
					{/each}
					</div>
					{#if !readOnly}
					<div class="array-buttons">
						<div class="row-buttons">
							{#if controls.includes('delete')}
							<button type="button" class="list-control delete" title="delete" on:click={arrayDelete(idx, params, value)}></button>
							{/if}
							{#if controls.includes('duplicate')}
							<button type="button" class="list-control duplicate" title="duplicate" on:click={arrayDuplicate(idx, params, value)}></button>
							{/if}
							{#if controls.includes('reorder') && idx > 0}
								<button type="button" class="list-control up" title="move up" on:click={arrayUp(idx, params, value)}></button>
							{/if}
							{#if controls.includes('reorder') && idx < (value || []).length - 1}
								<button type="button" class="list-control down" title="move down" on:click={arrayDown(idx, params, value)}></button>
							{/if}
						</div>
					</div>
					{/if}
				{/each}
			{:else}
				<button class="to-list" type="button" on:click={() => mode = "list"}>List</button>
				<div class="element">
					<SubSchemaForm
						params={{
							...params,
							path: [ ...params.path, selectedIdx.toString() ],
							containerParent: "array",
							containerReadOnly: params.containerReadOnly || schema.readOnly || false
						}}
						value={value[selectedIdx]}
						bind:schema={schema.items}
					/>
				</div>
			{/if}
			</div>
		{:else}
			<div class="emptyText">{emptyText}</div>
		{/if}
		{#if controls.includes('add')}
		<button type="button" class="list-control add" title="add item" on:click={arrayAdd(schema, params, value)}></button>
		{/if}
	{/if}
</fieldset>
{/if}