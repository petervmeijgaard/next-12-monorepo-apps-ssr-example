import type { InferLoaderProps } from "@acme/types";

import type { loader } from "../utils/loader.js";

export function ProductListingPage({ users }: InferLoaderProps<typeof loader>) {
	return <pre>{JSON.stringify({ users: users.length }, null, 2)}</pre>;
}
