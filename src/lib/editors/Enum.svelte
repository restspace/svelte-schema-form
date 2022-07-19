<script lang="ts">
	import type { CommonComponentParameters } from "../types/CommonComponentParameters";
	export let params: CommonComponentParameters;
	export let schema: any;
	export let value: any;
	let { enum: enumVals } = schema as { enum: string[] };
</script>

<!-- event which calls pathChanged should be after all bindings so 'value' will have been updated -->
<svelte:component this={params.components['fieldWrapper']} {params} {schema}>
	<select id={params.path.join('.')}
		name={params.path.join('.')}
		value={value} 
		on:change={ev => params.pathChanged(params.path, ev.currentTarget.value || undefined)}>
		<option></option>
		{#each enumVals as enumVal (enumVal)}
		<option>{enumVal}</option>
		{/each}
	</select>
</svelte:component>