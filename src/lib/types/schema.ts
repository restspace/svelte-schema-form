import { camelToTitle } from "$lib/utilities";

export function editorForSchema(schema: any): string {
	let type = schema['type'];
    if (schema['enum'])
        type = "enum";
    if (schema['format'])
        type += "-" + schema['format'];
    if (schema['hidden'])
        type = "hidden";
    if (schema['editor'])
        type = schema['editor'];
    switch (type) {
        case "string-date-time":
        case "string-date":
        case "string-time":
        case "string-email":
        case "string-password":
        case "number-currency":
            return schema['format'];
        default:
            return type;
    }
}

export function emptyValue(schema: any): any {
    switch (schema['type'] || '') {
        case 'object': return {};
        case 'array': return [];
        default: return null;
    }
}

export function schemaLabel(schema: any, path: string[]): string {
    return schema.title || camelToTitle(path.slice(-1)?.[0] || '');
}