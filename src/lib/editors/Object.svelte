<script lang="ts">

	import type { CommonComponentParameters } from "../types/CommonComponentParameters";
	import SubSchemaForm from "../SubSchemaForm.svelte";
	export let params: CommonComponentParameters;
	export let schema: any;
	export let value: any;
	let { components, path } = params;

	let propNames = Object.keys(schema.properties);
</script>

<fieldset name={path.join('.')} class="object depth-{path.length}">
{#each propNames as propName (propName)}
	<svelte:component this={SubSchemaForm}
		params={{
			...params,
			path: [ ...params.path, propName ],
			required: (schema?.required || []).includes(propName),
			containerParent: "object"
		}}
		value={value[propName]}
		bind:schema={schema.properties[propName]}
	/>
{/each}
</fieldset>