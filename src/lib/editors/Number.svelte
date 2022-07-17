<script lang="ts">
	import type { CommonComponentParameters } from "../types/CommonComponentParameters";
	export let params: CommonComponentParameters;
	export let schema: any;
	export let value: any;
	let { components, pathChanged, path } = params;
</script>

<!-- event which calls pathChanged should be after all bindings so 'value' will have been updated -->
<svelte:component this={components['fieldWrapper']} {params} {schema} {value}>
	<input id={path.join('.')} name={path.join('.')}
		type="number" value={value}
		on:input={ev => {
			let val = parseFloat(ev.currentTarget.value);
			pathChanged(path, isNaN(val) ? undefined : val);
		}}
	/>
</svelte:component>