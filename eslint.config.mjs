import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:import/typescript',
      'plugin:jsdoc/recommended',
      'plugin:prefer-arrow/recommended',
      'plugin:unicorn/recommended',
      'plugin:prettier/recommended',
    ],
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'prettier/prettier': 'error',
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
