import { get } from "@exodus/schemasafe/src/pointer.js";
import { jsonPointerToPath } from "./types/schema.js";
import { afterLast } from "./utilities.js";

export function errorMapper(schema: any, value: any, keywordLocation: string, instanceLocation: string): [ string, string ] {
	const location = jsonPointerToPath(instanceLocation);
	const keyword = afterLast(keywordLocation, '/');
	const keyValue = jsonPointerToPath(keywordLocation);
	switch (keyword) {
		case "required":
			return [ location, 'Please enter a value for this item' ];
		case "minimum":
			return [ location, `Please enter a number at least ${keyValue}` ];
		case "maximum":
			return [ location, `Please enter a number at most ${keyValue}` ];
		case "minLength":
			return [ location, `Please enter text of at least ${keyValue} characters` ];
		case "maxLength":
			return [ location, `Please enter text no longer than ${keyValue} characters` ];
		case "pattern":
			return [ location, `Please enter properly formatted value` ];
		case "format":
			const valMap = {
				"date-time": "date and time",
				time: "time",
				date: "date",
				email: "email address",
			} as Record<string, string>;
			return [ location, `Please enter a properly formatted ${valMap[keyValue]}` ];
	}
	return [ location, `Fails to satisfy schema at ${jsonPointerToPath(keywordLocation)}` ];
}