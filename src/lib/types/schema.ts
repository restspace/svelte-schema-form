import { camelToTitle } from "../utilities.js";

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

export function jsonPointerToPath(pointer: string) {
    if (pointer.startsWith('/')) {
        pointer = pointer.substring(1);
    } else if (pointer.startsWith('#/')) {
        pointer = pointer.substring(2);
    } else if (pointer.startsWith('http')) {
        pointer = pointer.split('#/')?.[1] || '';
    }

    const pathEls = [] as string[];
    pointer.split('/').forEach(el => {
        const int = parseInt(el);
        if (isNaN(int)) {
            pathEls.push(`.${el}`);
        } else {
            pathEls.push(`[${el}]`);
        }
    });
    let path = pathEls.join('');
    if (path.startsWith('.')) path = path.substring(1);
    return path;
}