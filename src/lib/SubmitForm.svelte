<script lang="ts">
	import SchemaForm from "./SchemaForm.svelte";
	import { createEventDispatcher } from "svelte";
	import type { ValidationErrors } from "./types/CommonComponentParameters";

	export let schema: any;
	export let value: any;
	export let dirty: boolean = false;
	export let action: string = '';
	export let components: Record<string, new (...args: any[]) => any> = {};

	const dispatch = createEventDispatcher();

	let currentErrors = {} as ValidationErrors;
	let showErrors = false;

	const change = (e: CustomEvent) => {
		currentErrors = e.detail.errors;
	};

	const submit = () => {
		if (dirty && Object.keys(currentErrors).length === 0) {
			dispatch('submit', { value });
			dirty = false;
		}
		showErrors = true;
	};
</script>

<form class='svelte-schema-form' {action} class:dirty>
	<SchemaForm bind:schema {value} on:value={change} bind:dirty {showErrors} {components} />
	<div class="button-container">
		<button type={action ? "submit" : "button"} class="submit-button" on:click={submit} class:dirty={dirty}>Submit</button>
	</div>
</form>