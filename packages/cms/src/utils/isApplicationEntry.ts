import type { ApplicationEntry } from "@acme/types";

import type { Entry } from "../types.js";

export const isApplicationEntry = (entry: Entry): entry is ApplicationEntry => {
	return entry.type === "application";
};
