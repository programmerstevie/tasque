/* eslint-env node */

/** @type {import("prettier").Config} */
module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  svelteStrictMode: true,
  plugins: ['prettier-plugin-svelte'],
};
