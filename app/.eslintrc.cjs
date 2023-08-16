/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:svelte/prettier",
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    extraFileExtensions: [".svelte"],
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  overrides: [
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  ],
  rules: {},
  ignorePatterns: ["node_modules/", ".vscode/", "public/", "dist/", "build/"],
};
