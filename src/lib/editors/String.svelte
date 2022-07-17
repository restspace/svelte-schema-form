<script lang="ts">
	import type { CommonComponentParameters } from "../types/CommonComponentParameters";
	export let params: CommonComponentParameters;
	export let schema: any;
	export let value: any;
	let { components, pathChanged, path } = params;
</script>

<!-- event which calls pathChanged should be after all bindings so 'value' will have been updated -->
<svelte:component this={components['fieldWrapper']} {params} {schema} {value}>
	<input id={path.join('.')} name={path.join('.')} type="text" value={value || ''} on:input={ev => pathChanged(path, ev.currentTarget.value || undefined)} />
</svelte:component>