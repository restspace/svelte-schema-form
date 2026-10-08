<script lang="ts">
	import { tick } from "svelte";
	import type { CommonComponentParameters } from "../types/CommonComponentParameters";

	interface OptionVal {
		id: string;
		text: string;
		image: string;
	}

	export let params: CommonComponentParameters;
	export let schema: any;
	export let value: any;

	let inputState: "showing-value" | "searching" = "showing-value";
	let match = '';
	let dropdownState: "open" | "closed" = "closed";
	let selected: OptionVal | undefined = undefined;
	let options = [] as OptionVal[];
	let url: string;
	let timerHandle: any = null;

	$: url = schema['url'] || '';
	$: readOnly = params.containerReadOnly || schema.readOnly || false;

	let input: HTMLInputElement;

	const searchRequest = (match: string) => {
		if (url) {
			if (timerHandle) {
				clearTimeout(timerHandle);
			}
			const urlWithMatch = new URL(url, location.href);
			if (match) urlWithMatch.searchParams.append("match", match);
			timerHandle = setTimeout(() => fetch(urlWithMatch.toString(), { credentials: 'include' })
				.then(resp => resp.json())
				.then((items: string[] | OptionVal[]) => {
					if (items.length > 0 && !(typeof items[0] === 'object')) {
						options = (items as string[]).map(s => ({ id: s, text: s, image: '' }));
					} else {
						options = items as OptionVal[];
					}
					dropdownState = "open";
				}),
				100); 
		}
	}

	const toggleDropDown = async () => {
		dropdownState = dropdownState === "open" ? "closed" : "open";
		if (dropdownState === "open") {
			inputState = "searching";
			await tick();
			input.focus();
		}
	};

	const handleSelect = (item: OptionVal) => () => {
		if (readOnly) return;
		value = item.id;
		params.pathChanged(params.path, item.id);
		inputState = "showing-value";
		dropdownState = "closed";
	};

	const keyup = (ev: KeyboardEvent) => {
		searchRequest((ev.currentTarget as HTMLInputElement)?.value);
	}

	$: selected = options.find(opt => opt.id === value);
	$: inputState = selected ? inputState : "searching";
</script>

<!-- event which calls pathChanged should be after all bindings so 'value' will have been updated -->
<svelte:component this={params.components['fieldWrapper']} {params} {schema}>
	<div class="sf-autocomplete" class:readonly={readOnly}>
		<div class="sf-selected-item input" on:click={toggleDropDown}>
			{#if inputState === "searching"}
				<input type="text" bind:value={match} on:keyup={keyup} bind:this={input}/>
			{:else}
				{#if selected?.image}
					<img src={selected.image} alt={selected.text}/>
				{/if}
				{selected?.text || ''}
			{/if}
		</div>

		<div style:display={dropdownState === "open" ? 'block' : 'none'} class="sf-items">
			{#each options as item (item.id)}
				<div on:click={handleSelect(item)} class:selected={value === item.text}>
					{#if item.image}
						<img src={item.image} alt={item.text}/>
					{/if}
					{item.text}
				</div>
			{/each}
		</div>
	</div>
</svelte:component>