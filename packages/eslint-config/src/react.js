import { fixupPluginRules } from "@eslint/compat";
import importX from "eslint-plugin-import-x";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
	importX.flatConfigs.react,
	{
		files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
		...react.configs.flat.recommended,
		...react.configs.flat["jsx-runtime"],
	},
	{
		files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
		languageOptions: {
			globals: {
				...globals.serviceworker,
				...globals.browser,
			},
		},
		plugins: {
			"react-hooks": fixupPluginRules(reactHooks),
		},
		rules: {
			...reactHooks.configs.recommended.rules,
		},
		settings: {
			react: {
				version: "detect",
			},
		},
	},
];
