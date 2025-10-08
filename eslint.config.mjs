import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";

export default defineConfig([
	{
		files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
		languageOptions: {
			globals: globals.browser,
		},
		extends: [js.configs.recommended],
	},

	...tseslint.configs.recommended,
	{
		files: ["**/*.{jsx,tsx}"],
		plugins: {react: pluginReact, "react-hooks": pluginReactHooks},
		extends: [pluginReact.configs.flat.recommended],
		settings: {react: { version: "detect" }},
		rules: {
			"react/react-in-jsx-scope": "off",
			"react/display-name": "warn",
			"react-hooks/rules-of-hooks": "error",
			"react-hooks/exhaustive-deps": "warn",
		},
	},

	{
		files: ["**/*.{js,ts,jsx,tsx}"],
		rules: {
			"@typescript-eslint/no-explicit-any": "warn",
			"@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_|^ignored|^unused|^__" }],
		},
	},
	{
		files: [
			"**/jest.config.{js,ts,mjs,cjs}",
			"**/jest.setup.{js,ts,mjs,cjs}",
			"**/vite.config.{js,ts,mjs,cjs}",
			"**/webpack.config.{js,ts,mjs,cjs}",
		],
		languageOptions: {
			globals: {...globals.node},
			sourceType: "commonjs",
		},
		rules: {
			"no-undef": "off",
			"@typescript-eslint/no-require-imports": "off",
		},
	},
]);
