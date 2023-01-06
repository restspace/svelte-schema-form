<script lang="ts">
    import { editorForSchema } from "../types/schema.js";
	import type { CommonComponentParameters } from "../types/CommonComponentParameters.js";
	export let params: CommonComponentParameters;
	export let schema: any;
	export let value: any;

	let type = "text";
	let context = params.componentContext;
    const currencySymbol = (context && context['currencySymbol'] as string) || '$';
	let formatCurrency: (value?: number) => string;
    if (context && context['formatCurrency']) {
		formatCurrency = context['formatCurrency'] as (value?: number) => string;
	} else {
		formatCurrency = (value?: number) => {
			if (!value && value !== 0) return '';
			return value === Math.round(value) ? `${currencySymbol}${value}` : `${currencySymbol}${value.toFixed(2)}`;
		}
	}
	let holdString = '';

	const onInput = (ev: Event & { currentTarget: EventTarget & HTMLInputElement }) => {
		let str = ev.currentTarget.value;
        if (str === '' || str == currencySymbol) {
            holdString = '';
            params.pathChanged(params.path, null);
        } else {
            const numStr = str.replace(currencySymbol, '');
            const num = parseFloat(numStr);
            const fmt = formatCurrency(num);
            const fmtNoSymbol = fmt.replace(currencySymbol, '');
            holdString = fmt === str || fmtNoSymbol === str ? '' : str;
            if (!isNaN(num)) {
                params.pathChanged(params.path, num);
            }
        }
	}

	$: formattedString = holdString ? holdString : formatCurrency(value || '');
</script>

<!-- event which calls pathChanged should be after all bindings so 'value' will have been updated -->
<svelte:component this={params.components['fieldWrapper']} {params} {schema}>
	<input id={params.path.join('.')} name={params.path.join('.')} class="currency"
		type={type} value={formattedString}
		disabled={schema.readOnly || params.containerReadOnly}
		on:input={onInput} />
</svelte:component>