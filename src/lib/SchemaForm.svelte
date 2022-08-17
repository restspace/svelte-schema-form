<script lang="ts">
	import { createEventDispatcher, onMount } from "svelte";
	import SubSchemaForm from "./SubSchemaForm.svelte";
	import String from "./editors/String.svelte";
	import FieldWrapper from './editors/FieldWrapper.svelte';
	import ObjectEditor from "./editors/Object.svelte";
	import set from "lodash-es/set";
	import get from "lodash-es/get";
	import { validator } from "@exodus/schemasafe";
	import { FileNone, type CommonComponentParameters, type ValidationErrors } from './types/CommonComponentParameters';
	import Enum from './editors/Enum.svelte';
	import Array from './editors/Array.svelte';
	import { incr, nullOptionalsAllowed } from './utilities';
	import Boolean from './editors/Boolean.svelte';
	import Number from './editors/Number.svelte';
	import { errorMapper } from "./errorMapper";
	import Upload from "./editors/Upload.svelte";

	export let schema: any;
	export let value: any;
	export let uploadFiles: Record<string, FileList> = {};
	export let dirty: boolean = false;
	export let showErrors: boolean = true;
	export let components: Record<string, new (...args: any[]) => any> = {};

	const dispatch = createEventDispatcher();

	let validationErrors = {} as ValidationErrors;

	const revalidate = () => {
		const validate = validator(nullOptionalsAllowed(schema), { includeErrors: true, allErrors: true, allowUnusedKeywords: true });
		const validatorResult = validate(value);
		validationErrors = Object.fromEntries(
			(validate.errors || []).map(ve => errorMapper(schema, value, ve.keywordLocation, ve.instanceLocation))
		);
	}

	onMount(() => {
		revalidate();
		if (Object.keys(validationErrors).length > 0) {
			// set initial errors
			dispatch('value', {
				path: [], value, errors: validationErrors
			});
		}
	});

	let params: CommonComponentParameters;
	$: params = {
		value,
		files: uploadFiles,
		path: [],
		components: Object.assign({
			string: String,
			number: Number,
			boolean: Boolean,
			fieldWrapper: FieldWrapper,
			object: ObjectEditor,
			array: Array,
			enum: Enum,
			upload: Upload
		}, components),
		pathChanged,
		validationErrors,
		containerParent: "none",
		showErrors,
		idx: incr()
	};

	const pathChanged = (path: string[], val: any) => {
		if (val instanceof FileList) {
			uploadFiles[path.join('.')] = val;
			dirty = true;
			return val;
		} else if (val === FileNone) {
			delete uploadFiles[path.join('.')];
			dirty = true;
			return val;
		}

		const curr = get(params.value, path);
		if (val === curr) return;

		dirty = true;

		if (val === undefined && path.length > 0) {
			const pathFront = path.slice(0, -1);
			const parent = pathFront.length ? get(params.value, path.slice(0, -1)) : params.value;
			delete parent[path[path.length - 1]];
		} else {
			set(params.value, path, val);
		}

		revalidate();

		dispatch('value', {
			path, value: val, errors: validationErrors
		});

		console.log(`dispatch value path: ${path.join('.')} val: ${val}, errors: ${JSON.stringify(validationErrors)}`);
		value = params.value;
		return val;
	};
</script>

<SubSchemaForm {params} {value} bind:schema />