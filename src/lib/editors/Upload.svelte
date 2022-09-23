<script lang="ts">
import { after, afterLast } from "../utilities";

	import { entries, keys } from "lodash-es";
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";
	import { FileNone, ProgressContext, type CommonComponentParameters } from "../types/CommonComponentParameters";
	import Number from "./Number.svelte";
	import String from "./String.svelte";

	export let params: CommonComponentParameters;
	export let schema: any;
	export let value: any;
	export let highlight = false;

	interface Details {
		mimeType: string;
		size: number;
	}

	// Uplaod holds files locally as a FileList in the input type="files" element until the form is submitted.
	// In JS mode, the SubmitForm will manage sending all the files to appropriate urls via PUT requests, then
	// update the JSON value for the form with the url to which the file was sent. Thumbnails for the FileList
	// stage must be created imperatively, but thumbnails which use the stored urls can be managed by Svelte
	// rendering

	const isMultiple = (schema.multiple as boolean) || false;
	let inp: HTMLInputElement;
	let dropArea: HTMLDivElement;
	let pathProgress = getContext(ProgressContext) as Writable<Record<string, Record<string, number>>>;
	let progress: Record<string, number>;
	$: progress = $pathProgress[params.path.join('.')] || {};
	let renderedThumbnails = [] as (HTMLImageElement | HTMLDivElement)[];
	let details = {} as Record<string, Details>;
	let mode: "uploader" | "link" = "uploader";

	$: {
		// run this to remove any local file thumbnails stored in a FileList once upload is done
		if (value && (value.startsWith('http') || value.startsWith('/')) && renderedThumbnails.length > 0) {
			renderedThumbnails.forEach(rt => rt.remove());
			renderedThumbnails = [];
		}
	}

	const chooseFile = () => {
		if (!isMultiple) {
			if ((inp.files?.length || 0) > 1) {
				alert('Please only upload one file');
				inp.files = null;
				return;
			}
			const file = inp.files?.item(0);
			if (!file) return;
			
			if (schema.warningKb && file.size > schema.warningKb * 1024) {
				alert(`The file is larger than the recommended maximum size of ${schema.warningKb}KB - consider compressing it`);
			}
			if (schema.maximumKb && file.size > schema.maximumKb * 1024) {
				alert(`The file is larger than the allowed maximum of ${schema.maximumKb}KB - please compress it first`);
				inp.files = null;
				return;
			}
			params.pathChanged(params.path, inp.files);
			renderThumbnail(file);
			details[file.name] = {
				mimeType: file.type,
				size: file.size
			}
		}
	}

	const onInput = (ev: any) => {
		chooseFile();
	};

	const dragEnter = (ev: DragEvent) => {
		if (schema.readOnly || ev.dataTransfer?.types[0] !== "Files") return;
		highlight = true;
		ev.preventDefault();
	}

	const dragOver = (ev: DragEvent) => {
		if (schema.readOnly || ev.dataTransfer?.types[0] !== "Files") return;
		ev.preventDefault();
	}

	const dragLeave = (ev: any) => {
		if (schema.readOnly) return;
		highlight = false;
	}

	const renderThumbnail = (file: File) => {
		if (file.type.startsWith('image')) {
			const img = document.createElement("img");
			img.classList.add("sf-upload-thumb");
			(img as any).file = file;
			dropArea.append(img);
			renderedThumbnails.push(img);
			const reader = new FileReader();
			reader.onload = e => { img.src = (e.target!.result as string); };
			reader.readAsDataURL(file);
		} else {
			const div = document.createElement("div");
			div.classList.add("sf-upload-file");
			div.title = file.name;
			div.innerText = afterLast(file.name, ".") || after(file.type, "/");
			dropArea.append(div);
			renderedThumbnails.push(div);
		}
	}

	const drop = (ev: DragEvent) => {
		if (schema.readOnly) return;
		ev.preventDefault();
		highlight = false;
		if (!ev.dataTransfer) return;
		const { files } = ev.dataTransfer;
		inp.files = files;
		chooseFile();
	}

	const deleteUploads = (ev: MouseEvent) => {
		ev.stopPropagation();
		inp.files = null;
		renderedThumbnails.forEach(n => n.remove());
		renderedThumbnails = [];
		details = {};
		value = '';
		params.pathChanged(params.path, FileNone);
		params.pathChanged(params.path, value);
	}

	const changeMode = (ev: MouseEvent) => {
		ev.stopPropagation();
		mode = ( mode === "uploader" ? "link" : "uploader" );
	}

	const openFile = () => {
		if (schema.readOnly) return;
		inp.click();
	}

	const isImage = (url: string) => {
		return ["jpg", "jpeg", "png", "gif", "svg", "ico" ].includes(afterLast(url, '.').toLowerCase());
	}
</script>

<svelte:component this={params.components['fieldWrapper']} {params} {schema}>
	<input bind:this={inp} id={params.path.join('.')} name={params.path.join('.')}
		type="file"
		readonly={schema.readOnly}
		on:input={onInput}
		style="display: none" />
	<div class="sf-drop-area {mode}"
		class:highlight
		tabIndex="0"
		on:dragenter={dragEnter}
		on:dragover={dragOver}
		on:dragleave={dragLeave}
		on:drop={drop}
		on:click={openFile}
		bind:this={dropArea}>
		{#if mode === "uploader" && !(schema.readOnly)}
			<div class="sf-upload-caption">
				Drop files or click to upload
			</div>
		{/if}
		{#if value && isImage(value) && mode === "uploader"}
			<img class="sf-upload-thumb" src={value} alt="upload file"/>
		{/if}
		{#if value && !isImage(value) && mode === "uploader"}
			<div class="sf-upload-file" title={value}>{afterLast(value, ".")}</div>
		{/if}
		{#if mode === "link"}
			<input type="text"
				id={params.path.join('.')}
				name={params.path.join('.')}
				disabled={schema.readOnly}
				class="sf-upload-input"
				value={value || ''}
				on:click|stopPropagation={() => {}}
				on:input={ev => params.pathChanged(params.path, ev.currentTarget.value || undefined)} />
		{/if}
		<div class="sf-upload-controls">
			{#if !(schema.readOnly)}
				<button type="button" class="sf-upload-deleter" on:click={deleteUploads}></button>
			{/if}
			<button type="button"
				class:sf-upload-to-link={mode === "uploader"}
				class:sf-upload-to-uploader={mode === "link"}
				on:click={changeMode}>
			</button>
		</div>
	</div>
	{#if Object.keys(progress).length > 0}
	<div class="sf-progress-bars">
		{#each Object.entries(progress) as [name, percent]}
			<div class="sf-progress-bar">
				<div class="sf-progress-done" style="width: {percent}%"></div>
				{name}
			</div>
		{/each}
	</div>
	{/if}
</svelte:component>