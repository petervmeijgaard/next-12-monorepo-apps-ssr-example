import { type Context, useContext } from "react";

export function useSafeContext<T>(context: Context<T>) {
	const value = useContext(context);

	if (value === undefined) {
		throw new Error("This context must be used within a Provider");
	}

	return value;
}
