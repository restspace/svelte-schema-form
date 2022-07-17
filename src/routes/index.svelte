<script lang="ts">
	import SubmitForm from "svelte-schema-form/SubmitForm.svelte";
	const schema = {
		type: "object",
		properties: {
			something: { type: "string", maxLength: 5 },
			amount: { type: "number" },
			choose: { type: "string", enum: [ "a", "b", "c" ] },
			checkThis: { type: "boolean" },
			things: {
				type: "array",
				items: {
					type: "string"
				}
			},
			complicatedThings: {
				type: "array",
				items: {
					type: "object",
					properties: {
						p1: { type: "string" },
						p2: { type: "string" }
					}
				}
			}
		}
	}
	const value = { something: "abc" };

	const submit = (e: CustomEvent) => {
		alert('submit ' + JSON.stringify(e.detail.value));
	};
</script>

<svelte:head>
	<link rel="stylesheet" href="/css/layout.css"/>
</svelte:head>
<SubmitForm {schema} {value} on:submit={submit} />