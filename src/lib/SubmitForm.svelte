<script lang="ts">
	import SchemaForm from "./SchemaForm.svelte";
	import { createEventDispatcher } from "svelte";
	import type { ValidationErrors } from "./types/CommonComponentParameters";

	export let schema: any;
	export let value: any;
	export let dirty: boolean = false;
	export let action: string = '';

	const dispatch = createEventDispatcher();

	let currentErrors = {} as ValidationErrors;

	const change = (e: CustomEvent) => {
		currentErrors = e.detail.errors;
	};

	const submit = () => {
		if (dirty && Object.keys(currentErrors).length === 0) {
			dispatch('submit', { value });
			dirty = false;
		}
	};
</script>

<form class='svelte-schema-form' {action}>
	<SchemaForm bind:schema {value} on:value={change} bind:dirty />
	<div class="sf-button-container">
		<button type={action ? "submit" : "button"} on:click={submit} class:dirty={dirty}>Submit</button>
	</div>
</form>