export const upTo = (str: string, match: string, start?: number) => {
    const pos = str.indexOf(match, start);
    return pos < 0 ? str.substring(start || 0) : str.substring(start || 0, pos);
}

export const upToLast = (str: string, match: string, end?: number) => {
    const pos = str.lastIndexOf(match, end);
    return pos < 0 ? str.substring(0, end || str.length) : str.substring(0, pos);
}

export const after = (str: string, match: string, start?: number) => {
    const pos = str.indexOf(match, start);
    return pos < 0 ? '' : str.substring(pos + match.length);
}

export const afterLast = (str: string, match: string, end?: number) => {
    const pos = str.lastIndexOf(match, end);
    return pos < 0 ? '' : str.substring(pos + match.length, end || str.length);
}

export function camelToWords(camel: string): string {
    camel = camel.trim();
    const words: string[] = [];
    let start = 0;
    for (let end = 1; end < camel.length; end++) {
        if ('A' <= camel[end] && camel[end] <= 'Z') {
            words.push(camel.substring(start, end).toLowerCase());
            start = end;
        }
    }
    words.push(camel.substring(start, camel.length).toLowerCase());

    return words.join(' ');
}

export function camelToTitle(camel: string): string {
    return camelToWords(camel).replace(/[a-z]/i, (ltr) => ltr.toUpperCase())
}

/** manipulate the schema to allow any optional property to have a null value
 * which is appropriate for form input */
 export function nullOptionalsAllowed(schema: object): object {
    if (schema === null || schema === undefined) schema = {};
    let newSchema = deepCopy(schema);
    nullOptionalsAllowedApply(newSchema);
    return newSchema;
}

function nullOptionalsAllowedApply(schema: object) {
    let req : Array<string> = schema['required'] || [];
    if (schema['$ref']) return;
    switch (schema['type']) {
        case 'object':
            const properties = schema['properties'] || {};
            for (let prop in properties) {
                if (req.indexOf(prop) < 0) {
                    nullOptionalsAllowedApply(schema['properties'][prop]);
                }
            }
            break;
        case 'array':
            const items = schema['items'] || {};
            nullOptionalsAllowedApply(items);
            if (items['oneOf'] && !(items['oneOf'] as any[]).some(subschema => subschema["type"] == "null")) {
                items['oneOf'].push({ type: 'null' });
            }
            break;
        default:
            if (Array.isArray(schema['type'])) {
                if (schema['type'].indexOf('null') < 0) {
                    schema['type'].push('null');
                }
            } else if (schema['type'] != 'null') {
                schema['type'] = [schema['type'], 'null'];
            }
            break;
    }
    if (schema['definitions']) {
        for (let defn in schema['definitions']) {
            nullOptionalsAllowedApply(schema['definitions'][defn]);
        }
    }
}

export function deepCopy(obj: object): object {
    var copy;

    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = deepCopy(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = deepCopy(obj[attr]);
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
}

let incrVal = 0;
export const incr = () => incrVal++;