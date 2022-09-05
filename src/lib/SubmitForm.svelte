<script lang="ts">
	import SchemaForm from "./SchemaForm.svelte";
	import { createEventDispatcher, setContext } from "svelte";
	import { ProgressContext, type ValidationErrors } from "./types/CommonComponentParameters";
	import { substituteProperties } from "./utilities";
	import { writable } from "svelte/store";
	import set from "lodash-es/set";
import String from "./editors/String.svelte";

	export let schema: any;
	export let value: any;
	export let uploadFiles: Record<string, FileList> = {};
	export let uploadBaseUrl: string = '';
	export let uploadNamePattern: string = '';
	export let dirty: boolean = false;
	export let action: string = '';
	export let components: Record<string, new (...args: any[]) => any> = {};
	export let collapsible: boolean = false;

	const dispatch = createEventDispatcher();
	let pathProgress = writable({} as Record<string, Record<string, number>>);
	setContext(ProgressContext, pathProgress);

	let currentErrors = {} as ValidationErrors;
	let showErrors = false;

	const change = (e: CustomEvent) => {
		currentErrors = e.detail.errors;
		dispatch('value', {
			path: e.detail.path, value: e.detail.value, errors: e.detail.errors
		});
	};

	const progress = (path: string, name: string, percent: number) => {
		let newVal: Record<string, number>;
		if (percent === -1) {
			delete ($pathProgress[path] || {})[name];
			newVal = { ...$pathProgress[path] };
		} else {
			newVal = { ...($pathProgress[path] || {}), [name]: percent };
		}
		$pathProgress = { ...$pathProgress, [path]: newVal };
	};

	const submit = async () => {
		if (dirty && Object.keys(currentErrors).length === 0) {
			if (Object.keys(uploadFiles).length > 0 && uploadBaseUrl) {
				const itemNamePattern = uploadNamePattern || schema.pathPattern;
				if (!itemNamePattern) {
					alert('No uploadNamePattern given or pathPattern property on schema to determine file save url base');
					return;
				}
				const itemName = substituteProperties(itemNamePattern, value);

				const uploadPromises = Object.entries(uploadFiles).flatMap(([path, files]) => {
					const pathPromises = [] as Promise<void>[];
					for (let i = 0; i < files.length; i++) {
						const file = files[i];
						const destinationUrl = uploadBaseUrl
							+ (uploadBaseUrl.endsWith('/') ? '' : '/')
							+ itemName + '/'
							+ path + '/'
							+ file.name;
						
						const itemPromise = new Promise<[string, string]>((resolve, reject) => {
							try {
								const xhr = new XMLHttpRequest();
								xhr.upload.onprogress = (ev: ProgressEvent) => progress(path, file.name, ev.loaded / ev.total * 100.0);
								xhr.upload.onloadend = (ev: ProgressEvent) => {
									progress(path, file.name, xhr.status === 200 || xhr.status === 0 ? -1 : -xhr.status);
									resolve([ path, destinationUrl ]);
								}
								xhr.withCredentials = true;
								xhr.open("PUT", destinationUrl);
								xhr.send(file);
							} catch(err) {
								reject(err);
							}
						}).then(([ path, destinationUrl ]) => {
							// update the state to remove the upload file
							set(value, path.split('.'), destinationUrl);
							value = { ...value };
							delete uploadFiles[path];
						});;
						pathPromises.push(itemPromise);
					}
					return pathPromises;
				});

				await Promise.all(uploadPromises);
			}
			dispatch('submit', { value });
			dirty = false;
		}
		showErrors = true;
	};
</script>

<form class='svelte-schema-form' {action} class:dirty>
	<SchemaForm bind:schema {value} on:value={change} bind:dirty bind:uploadFiles {showErrors} {components} {collapsible} />
	<div class="button-container">
		<button type={action ? "submit" : "button"} class="submit-button" on:click={submit} class:dirty={dirty}>Submit</button>
	</div>
</form>