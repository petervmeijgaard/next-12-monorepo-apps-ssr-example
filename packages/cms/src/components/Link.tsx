import type { LinkEntry } from "../types.js";

export function Link({ content, href }: LinkEntry) {
	return <a href={href}>{content}</a>;
}
