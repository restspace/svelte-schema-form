<script lang="ts">
	import type { CommonComponentParameters } from "../types/CommonComponentParameters";
	export let params: CommonComponentParameters;
	export let schema: any;
	export let value: boolean;
</script>

<!-- event which calls pathChanged should be after all bindings so 'value' will have been updated -->
<svelte:component this={params.components['fieldWrapper']} {params} {schema}>
	<input id={params.path.join('.')} name={params.path.join('.')}
		type="checkbox" checked={value || false}
		disabled={schema.readOnly || params.containerReadOnly}
		on:change={ev => params.pathChanged(params.path, ev.currentTarget.checked)}
	/>
</svelte:component>