<script lang="ts">
import { schemaLabel } from "$lib/types/schema";

	import type { CommonComponentParameters } from "../types/CommonComponentParameters";
	import { camelToTitle } from "../utilities";
	export let params: CommonComponentParameters;
	export let schema: any;
	let { path, containerParent } = params;

	const title = schemaLabel(schema, path);
	$: error = params.validationErrors[path.join('.')];
</script>

{#if containerParent !== "array"}
	<label for={path.join('.')}>{title}</label>
{/if}
<slot></slot>
{#if error}
	<div class="error">{error}</div>
{/if}