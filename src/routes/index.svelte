<script lang="ts">
	import { SubmitForm, Layout as FormLayout } from "svelte-schema-form";

	const schema = {
		type: "object",
		properties: {
			something: { type: "string", maxLength: 5, description: "description for something" },
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
		},
		required: [ "amount" ]
	}
	const value = { something: "abc" };

	const submit = (e: CustomEvent) => {
		alert('submit ' + JSON.stringify(e.detail.value));
	};
</script>

<FormLayout />
<SubmitForm {schema} {value} on:submit={submit} />