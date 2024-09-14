import type { InferLoaderProps } from "@acme/types";

import type { loader } from "../utils/loader.js";

type Props = {
	foo: string;
} & InferLoaderProps<typeof loader>;

export function ProductDetailPage({ foo, todos }: Props) {
	return <pre>{JSON.stringify({ foo, todos: todos.length }, null, 2)}</pre>;
}
