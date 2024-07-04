import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import react from "eslint-plugin-react";
import reactRefresh from "eslint-plugin-react-refresh";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-plugin-prettier";
import { configs as ReactQueryConfigs, rules as ReactQueryRules } from '@tanstack/eslint-plugin-query';
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["**/dist", "**/vite.config.ts", "**/.prettierrc.cjs", "**/.stylelintrc.cjs", "**/eslint.config.mjs"],
}, ...fixupConfigRules(compat.extends(
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier",
    "plugin:@tanstack/eslint-plugin-query/recommended",
)), {
    plugins: {
        react: fixupPluginRules(react),
        "react-refresh": reactRefresh,
        "@typescript-eslint": fixupPluginRules(typescriptEslint),
        prettier,
        '@tanstack/eslint-plugin-query': { rules: ReactQueryRules, configs: ReactQueryConfigs },
    },

    languageOptions: {
        globals: {
            ...globals.browser,
        },

        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },

            project: ["./tsconfig.json", "./tsconfig.node.json"],
            tsconfigRootDir: "/home/moray/src/vite-react-base",
        },
    },

    rules: {
        // Enforcing this can cause problems with tree-shaking
        'import/prefer-default-export': 'off',
        // Let prettier do it's thing
        "prettier/prettier": "error",
        // Vite requires this
        "react-refresh/only-export-components": ["warn", {
            allowConstantExport: true,
        }],
        // Vite handles JSX automatically without the need for importing React
        "react/react-in-jsx-scope": "off",
        "react/jsx-uses-react": "off",
        // If you're using TypeScript properly, you **shouldn't** need to enforce this
        'react/require-default-props': 'off',

        '@tanstack/eslint-plugin-query/exhaustive-deps': 'error',
        '@tanstack/eslint-plugin-query/no-rest-destructuring': 'warn',
        '@tanstack/eslint-plugin-query/stable-query-client': 'error',
        // Current W3C guidance is that `for` is the preferred way to associate labels with controls
        'jsx-a11y/label-has-associated-control': ['error', {
          labelComponents: [],
          labelAttributes: [],
          controlComponents: [],
          assert: 'htmlFor',
          depth: 25
        }],
    },
}];