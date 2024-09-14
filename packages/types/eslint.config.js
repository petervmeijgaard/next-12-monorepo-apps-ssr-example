import { base } from "@acme/eslint-config";

/** @type {import("eslint").Linter.Config[]} */
export default [
	...base,
	{
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			parserOptions: {
				project: "./tsconfig.json",
			},
		},
	},
	{
		ignores: ["coverage", ".turbo", "node_modules", "dist"],
	},
];
