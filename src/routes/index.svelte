<script lang="ts">
	import { SubmitForm } from "svelte-schema-form";
	import "svelte-schema-form/css/layout.scss";
	import "svelte-schema-form/css/basic-skin.scss";

	let schema: any = {
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
			},
			"obj": {
				"type": "object",
				"properties": {
					"xyz": {
						"type": "string"
					}
				}
			},
			"aFile": {
				"type": "string",
				"editor": "upload"
			}
		},
		required: [ "amount" ],
		pathPattern: "item_${amount}"
	};
	let jsonInvalid = false;

	let value = { };
	let valueJson = '';
	let collapsible = false;

	const schemaUpdate = (ev: any) => {
		const newSchema = ev.currentTarget.value;
		try {
			schema = JSON.parse(newSchema);
			jsonInvalid = false;
		} catch {
			jsonInvalid = true;
		}
	}

	const submit = (e: CustomEvent) => {
		valueJson = JSON.stringify(e.detail.value, undefined, 2).trim();
	};
</script>

<div class="container">
	<div class="schema" class:jsonInvalid>
		<div class="control">
			<input type="checkbox" id="collapsible" bind:checked={collapsible} />
			<label for="collapsible">Collapsible</label>
		</div>
		<textarea id="schema" on:keyup={schemaUpdate}>{JSON.stringify(schema, undefined, 2)}</textarea>
	</div>
	<div class="form">
		<SubmitForm {schema} {value} on:submit={submit} uploadBaseUrl="https://restspace.local:3131/files" {collapsible} />
	</div>
	<div class="output">
		<pre>
			{valueJson}
		</pre>
	</div>
</div>

<style>
	* {
		box-sizing: border-box;
	}

	.container {
		display: flex;
		position: relative;
	}
	.schema, .form, .output {
		width: 32%;
		border: solid 1px black;
		height: 99vh;
		position: relative;
	}
	.schema {
		border: none;
		display: flex;
		flex-direction: column;
	}
	.form, .output {
		margin-left: 1%;
		padding: 1em;
	}
	#schema {
		width: 100%;
		height: 100%;
		gap: 1em;
	}
	.schema.jsonInvalid #schema {
		color: darkred;
	}

	#collapsible {
		margin-bottom: 6px;
	}
	
	.control {
		margin-bottom: 6px;
	}
</style>