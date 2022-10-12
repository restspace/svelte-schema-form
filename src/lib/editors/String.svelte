<script lang="ts">
    import { editorForSchema } from "../types/schema";
	import type { CommonComponentParameters } from "../types/CommonComponentParameters";
	export let params: CommonComponentParameters;
	export let schema: any;
	export let value: any;

	let type = "text";
	$: {
		const editor = editorForSchema(schema);
		type = editor === "password" ? "password"
			   : editor === "email" ? "email"
			   : editor === "time" ? "time"
			   : editor === "date-time" ? "datetime-local"
			   : editor === "date" ? "date" : "text";
	}
</script>

<!-- event which calls pathChanged should be after all bindings so 'value' will have been updated -->
<svelte:component this={params.components['fieldWrapper']} {params} {schema}>
	<input id={params.path.join('.')} name={params.path.join('.')}
		type={type} value={value || ''}
		disabled={schema.readOnly || params.containerReadOnly}
		on:input={ev => params.pathChanged(params.path, ev.currentTarget.value || undefined)} />
</svelte:component>