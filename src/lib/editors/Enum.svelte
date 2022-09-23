<script lang="ts">
	import type { CommonComponentParameters } from "../types/CommonComponentParameters";
	export let params: CommonComponentParameters;
	export let schema: any;
	export let value: any;
	let enumVals: string[];
	let enumText: string[]
	$: enumVals = schema.enum;
	$: enumText = schema.enumText || schema.enum;
</script>

<!-- event which calls pathChanged should be after all bindings so 'value' will have been updated -->
<svelte:component this={params.components['fieldWrapper']} {params} {schema}>
	<select id={params.path.join('.')}
		name={params.path.join('.')}
		value={value} 
		disabled={schema.readOnly}
		on:change={ev => params.pathChanged(params.path, ev.currentTarget.value || undefined)}>
		<option></option>
		{#each enumVals as enumVal, idx}
		<option value={enumVal}>{(enumText || [])[idx]}</option>
		{/each}
	</select>
</svelte:component>