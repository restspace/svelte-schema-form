export type ValidationErrors = Record<string, string>;

export const FileNone = Symbol();
export const ProgressContext = Symbol();

export interface CommonComponentParameters {
	path: string[];
	pathChanged: (path: string[], val: any, op?: string) => boolean,
	components: Record<string, new (...args: any[]) => any>,
	componentContext?: Record<string, unknown>,
	value: any,
	validationErrors: ValidationErrors,
	required?: boolean,
	containerParent: "none" | "array" | "object",
	containerReadOnly: boolean,
	showErrors: boolean,
	collapsible: boolean,
	idx: number
}

export interface SchemaFormEvent {
	path: string[],
	value: any,
	errors: ValidationErrors,
	pathValue?: any,
	op?: string
}

export const childComponentParameters = (params: CommonComponentParameters, propName: string) => {
	return {
		...params,
		path: [ ...params.path, propName ]
	};
}

/*
export const valuePath = (value: any, path: string[]) => {
	if (path.length === 0) {
		return value;
	} else {
		return valuePath(value[path[0]], path.slice(1));
	}
}

export const schemaPath = (schema: any, path: string[]) => {
	if (path.length === 0 && schema.type === "array") {
		return schema.items;
	} else if (path.length === 0) {
		return schema;
	} else if (schema.type === "array") {
		return schemaPath(schema.items, path);
	} else if (schema.type === "object") {
		return schemaPath(schema.properties[path[0]], path.slice(1));
	} else {
		throw new Error('path not present in schema');
	}
}
*/