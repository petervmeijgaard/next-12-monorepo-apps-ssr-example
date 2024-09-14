import type { ApplicationEntry } from "@acme/types";

export type LinkEntry = {
	content: string;
	href: string;
	id: string;
	type: "link";
};

export type Entry = ApplicationEntry | LinkEntry;

export type Data = Array<Entry>;

export { type ApplicationEntry };
