/** @type {import('prettier').Config} */
module.exports = {
  printWidth: 80,
  tabWidth: 2,
  plugins: ["prettier-plugin-svelte", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.svelte",
      options: {
        parser: "svelte",
      },
    },
  ],
};
