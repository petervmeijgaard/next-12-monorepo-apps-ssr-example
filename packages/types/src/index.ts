import type { GetServerSidePropsContext } from "next";

export type Response = GetServerSidePropsContext["res"];

export type Request = GetServerSidePropsContext["req"];

export type Loader = (request: Request, response: Response) => void;

export type InferLoaderProps<T extends (...args: never) => unknown> = Awaited<
	ReturnType<T>
>;

export type ApplicationEntry<T extends string = string> = {
	id: string;
	name: T;
	type: "application";
};

export type Context = GetServerSidePropsContext;
