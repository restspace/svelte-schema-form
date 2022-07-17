<script lang="ts">
	import type { CommonComponentParameters } from "./types/CommonComponentParameters";
	import { editorForSchema } from "./types/schema";
	export let params: CommonComponentParameters;
	export let schema: any;
	export let value: any;
	let { components } = params;

	let typeComponent: any;
	const slotName = editorForSchema(schema);
	const component = components[slotName];
</script>

<svelte:component this={component} {params} {value} bind:schema />



