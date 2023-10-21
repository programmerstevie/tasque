/* eslint-env node */

/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:svelte/recommended',
  ],
  parserOptions: {
    project: ['./tsconfig.eslint.json', './tsconfig.json'],
    // tsconfigRootDir: __dirname,
    extraFileExtensions: ['.svelte'], // This is a required setting in `@typescript-eslint/parser` v4.24.0.
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['warn', 'single', { avoidEscape: true }],
    eqeqeq: ['warn', 'always'],
    indent: ['warn', 2, { SwitchCase: 1 }],
  },
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: {
          // Specify a parser for each lang.
          ts: '@typescript-eslint/parser',
          js: 'espree',
          typescript: '@typescript-eslint/parser',
        },
      },
    },
    {
      files: ['src/preload/**/*.ts', 'src/main/**/*.ts'],
      env: {
        node: true,
      },
    },
  ],
};
