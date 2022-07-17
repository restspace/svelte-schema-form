<script lang="ts">
	import type { CommonComponentParameters } from "../types/CommonComponentParameters";
	export let params: CommonComponentParameters;
	export let schema: any;
	export let value: any;
	let { components, pathChanged, path } = params;
	let { enum: enumVals } = schema as { enum: string[] };
</script>

<!-- event which calls pathChanged should be after all bindings so 'value' will have been updated -->
<svelte:component this={components['fieldWrapper']} {params} {schema} {value}>
	<select id={path.join('.')}
		name={path.join('.')}
		value={value} 
		on:change={ev => pathChanged(path, ev.currentTarget.value || undefined)}>
		<option></option>
		{#each enumVals as enumVal (enumVal)}
		<option>{enumVal}</option>
		{/each}
	</select>
</svelte:component>