import {
	type ApplicationName,
	isCorrectApplicationName,
} from "@acme/applications";

import type { ApplicationEntry, Entry } from "../types.js";

import { isApplicationEntry } from "./isApplicationEntry.js";

export const isNamedApplicationEntry = (
	entry: Entry,
): entry is ApplicationEntry<ApplicationName> => {
	return isApplicationEntry(entry) && isCorrectApplicationName(entry.name);
};
