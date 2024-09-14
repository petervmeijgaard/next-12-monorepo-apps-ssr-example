import type { Context } from "@acme/types";

type Todo = object;

export const loader = async ({ res }: Context) => {
	const todos = (await fetch("https://jsonplaceholder.typicode.com/todos").then(
		(res) => res.json(),
	)) as Array<Todo>;

	if (!todos.length) {
		res.statusCode = 404;
	}

	return { todos };
};
