<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import SubSchemaForm from "./SubSchemaForm.svelte";
	import String from "./editors/String.svelte";
	import FieldWrapper from './editors/FieldWrapper.svelte';
	import ObjectEditor from "./editors/Object.svelte";
	import set from "lodash-es/set";
	import get from "lodash-es/get";
	import { Validator } from "jsonschema";
	import type { CommonComponentParameters } from './types/CommonComponentParameters';
	import Enum from './editors/Enum.svelte';
	import Array from './editors/Array.svelte';
	import { nullOptionalsAllowed } from './utilities';
	import Boolean from './editors/Boolean.svelte';
	import Number from './editors/Number.svelte';

	export let schema: any;
	export let value: any;
	export let dirty: boolean = false;

	const dispatch = createEventDispatcher();

	const pathChanged = (path: string[], val: any) => {
		const curr = get(params.value, path);
		if (val === curr) return;

		dirty = true;

		console.log(`CH path: ${path.join('.')} val: ${JSON.stringify(val)} curr: ${JSON.stringify(curr)}`);

		if (val === undefined && path.length > 0) {
			const pathFront = path.slice(0, -1);
			const parent = pathFront.length ? get(params.value, path.slice(0, -1)) : params.value;
			delete parent[path[path.length - 1]];
		} else {
			set(params.value, path, val);
		}

		const v = new Validator();
		const validatorResult = v.validate(params.value, nullOptionalsAllowed(schema));
		params.validationErrors = Object.fromEntries(validatorResult.errors.map(err => [ err.path.join('.'), err.message ]));

		dispatch('value', {
			path, value: val, errors: params.validationErrors
		});

		console.log(params.validationErrors);
		params = { ...params };
		value = params.value;
		return val;
	};

	let params: CommonComponentParameters = {
		value,
		path: [],
		components: {
			string: String,
			number: Number,
			boolean: Boolean,
			fieldWrapper: FieldWrapper,
			object: ObjectEditor,
			array: Array,
			enum: Enum
		},
		pathChanged,
		validationErrors: {},
		containerParent: "none"
	}
</script>

<SubSchemaForm {params} {value} bind:schema />
params: {JSON.stringify(params)}

<style lang="scss">
	:global {
		.svelte-schema-form {
			fieldset {
				border: none;
				padding: 0;
				margin: 0;
			}

			button {
				background-color: transparent;
			}
		}
	}
</style>