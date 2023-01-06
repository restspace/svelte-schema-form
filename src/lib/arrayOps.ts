import type { CommonComponentParameters } from "./types/CommonComponentParameters.js";
import { emptyValue } from "./types/schema.js";

export const arrayAdd = (schema: any, params: CommonComponentParameters, value: any[]) => () => {
	params.pathChanged(params.path,
	[
		...(value || []),
		emptyValue(schema.items)
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