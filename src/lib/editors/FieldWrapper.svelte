<script lang="ts">
	import { schemaLabel } from "../types/schema";
	import type { CommonComponentParameters } from "../types/CommonComponentParameters";
	import { camelToTitle } from "../utilities";

	export let params: CommonComponentParameters;
	export let schema: any;

	const title = schemaLabel(schema, params.path);
	$: error = params.validationErrors[params.path.join('.')];
</script>

{#if params.containerParent !== "array"}
	<label for={params.path.join('.')} class:required={params.required}>
		{title}
		{#if schema.description}
			<span class="info" title={schema.description}></span>
		{/if}
	</label>
{/if}
<slot></slot>
{#if error && params.showErrors}
	<div class="error">{error}</div>
{/if}