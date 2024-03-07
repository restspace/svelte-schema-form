import type { CommonComponentParameters } from "./types/CommonComponentParameters";
import { emptyValue } from "./types/schema";

export const arrayAdd = (schema: any, params: CommonComponentParameters, value: any[]) => () => {
	params.pathChanged(params.path,
	[
		...(value || []),
		emptyValue(schema.items)
	]);
}

export const arrayFill = (schema: any, params: CommonComponentParameters, value: any[]) => () => {
	const val = value || [];
	if (typeof schema.minItems !== 'number' || val.length >= schema.minItems) return;
	const addValues = new Array(schema.minItems - val.length).fill(emptyValue(schema.items));

	params.pathChanged(params.path,
	[
		...val,
		...addValues
	]);
}

export const arrayDelete = (idx: number, params: CommonComponentParameters, value: any[]) => () => {
	params.pathChanged(params.path,
	[
		...value.slice(0, idx),
		...value.slice(idx + 1)
	], "delete");
};

export const arrayDuplicate = (idx: number, params: CommonComponentParameters, value: any[]) => () => {
	params.pathChanged(params.path,
	[
		...value.slice(0, idx),
		value[idx],
		JSON.parse(JSON.stringify(value[idx])),
		...value.slice(idx + 1)
	], "duplicate");
};

export const arrayUp = (idx: number, params: CommonComponentParameters, value: any[]) => () => {
	if (idx > 0) {
		params.pathChanged(params.path,
		[
			...value.slice(0, idx-1),
			value[idx],
			value[idx-1],
			...value.slice(idx + 1)
		], "up");
	}
};

export const arrayDown = (idx: number, params: CommonComponentParameters, value: any[]) => () => {
	if (idx < value.length - 1) {
		params.pathChanged(params.path,
		[
			...value.slice(0, idx),
			value[idx+1],
			value[idx],
			...value.slice(idx + 2)
		], "down");
	}
};