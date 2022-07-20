<script lang="ts">

	import type { CommonComponentParameters } from "../types/CommonComponentParameters";
	import SubSchemaForm from "../SubSchemaForm.svelte";
import { schemaLabel } from "$lib/types/schema";
	export let params: CommonComponentParameters;
	export let schema: any;
	export let value: any;

	let propnames: string[];
	$: propNames = Object.keys(schema.properties);
</script>

<fieldset name={params.path.join('.')} class="object depth-{params.path.length}">
	{#if params.containerParent !== "array"}
	<legend>{schemaLabel(schema, params.path)}</legend>
	{/if}
{#each propNames as propName (propName)}
	<SubSchemaForm
		params={{
			...params,
			path: [ ...params.path, propName ],
			required: (schema?.required || []).includes(propName),
			containerParent: "object"
		}}
		value={value?.[propName]}
		bind:schema={schema.properties[propName]}
	/>
{/each}
</fieldset>