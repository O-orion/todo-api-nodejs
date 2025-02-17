import globals from "globals";
import pluginJs from "@eslint/js";
import airbnbBase from 'eslint-config-airbnb-base';
import prettier from 'eslint-config-prettier';
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginPrettier from "eslint-plugin-prettier";
import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
  airbnbBase,
  prettier,

  {
    plugins: {
      import: eslintPluginImport,
      prettier: eslintPluginPrettier
    },

    languageOptions: { 
      globals: globals.node,
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      "indent": ["error", 2],
      "class-methods-use-this": "off",
      "no-param-reassign": "off",
      "camelcase": "off",
      "no-unused-vars": ["error", { "argsIgnorePattern": "next" }],
      "prettier/prettier": "error",
      "no-console": ["error", { "allow": ["warn", "error", "info", "log"] }],
    },
  },
  pluginJs.configs.recommended,
];