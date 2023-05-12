<script lang="ts">

	import type { CommonComponentParameters } from "../types/CommonComponentParameters";
	import SubSchemaForm from "../SubSchemaForm.svelte";
	import { schemaLabel } from "../types/schema";
    import { stringToHtml } from "../utilities.js";
	export let params: CommonComponentParameters;
	export let schema: any;
	export let value: any;

	let propnames: string[];
	$: propNames = Object.keys(schema.properties);
	let collapserOpenState: "open" | "closed" =
		params.path.length === 0 || params.containerParent === "array" || !params.collapsible
		? "open"
		: "closed";

	const toggle = () => {
		collapserOpenState = collapserOpenState === "open" ? "closed" : "open";
	}

	$: legendText = schemaLabel(schema, params.path);
	$: showLegend = params.collapsible || (params.containerParent !== 'array' && !!legendText);
</script>

<fieldset name={params.path.join('.')} class="subset object depth-{params.path.length}">
	{#if showLegend }
	<legend class="subset-label object-label">
		{#if params.collapsible }
		<span class="collapser {collapserOpenState}" on:click={toggle}></span>
		{/if}
		{#if params.containerParent !== "array" || schema.title}
		<span class="subset-label-title object-label-title">{@html stringToHtml(schemaLabel(schema, params.path))}</span>
			{#if schema.description}
			<span class="subset-label-description object-label-description">{@html stringToHtml(schema.description)}</span>
			{/if}
		{/if}
	</legend>
	{/if}

	{#if collapserOpenState === "open"}
	{#each propNames as propName (propName)}
	<SubSchemaForm
		params={{
			...params,
			path: [ ...params.path, propName ],
			required: (schema?.required || []).includes(propName),
			containerParent: "object",
			containerReadOnly: params.containerReadOnly || schema.readOnly || false,
		}}
		value={value?.[propName]}
		bind:schema={schema.properties[propName]}
	/>
	{/each}
	{/if}
</fieldset>