import type { Context } from "@acme/types";

type User = object;

export const loader = async ({ res }: Context) => {
	const users = (await fetch("https://jsonplaceholder.typicode.com/users").then(
		(res) => res.json(),
	)) as Array<User>;

	if (!users.length) {
		res.statusCode = 404;
	}

	return {
		users,
	};
};
