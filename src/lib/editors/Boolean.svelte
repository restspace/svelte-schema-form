<script lang="ts">
	import type { CommonComponentParameters } from "../types/CommonComponentParameters";
	export let params: CommonComponentParameters;
	export let schema: any;
	export let value: boolean;
	let { components, pathChanged, path } = params;
</script>

<!-- event which calls pathChanged should be after all bindings so 'value' will have been updated -->
<svelte:component this={components['fieldWrapper']} {params} {schema} {value}>
	<input id={path.join('.')} name={path.join('.')}
		type="checkbox" checked={value || false}
		on:change={ev => pathChanged(path, ev.currentTarget.checked)}
	/>
</svelte:component>