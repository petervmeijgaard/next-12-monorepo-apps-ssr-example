import type { ApplicationEntry } from "@acme/types";

import { CorrectApplication, useApplicationData } from "@acme/applications";

export function Application({ id }: ApplicationEntry) {
	const data = useApplicationData(id);

	return <CorrectApplication {...data} />;
}
