<script lang="ts">
	import type { CommonComponentParameters } from "../types/CommonComponentParameters.js";
	export let params: CommonComponentParameters;
	export let schema: any;
	export let value: any;
</script>

<!-- event which calls pathChanged should be after all bindings so 'value' will have been updated -->
<svelte:component this={params.components['fieldWrapper']} {params} {schema}>
	<textarea
        id={params.path.join('.')}
        name={params.path.join('.')}
        disabled={schema.readOnly || params.containerReadOnly}
        on:input={ev => params.pathChanged(params.path, ev.currentTarget.value || undefined)}
    >{value || ''}</textarea>
</svelte:component>

<style>
    textarea {
        background-color: white;
    }
</style>