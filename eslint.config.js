import ts from 'typescript-eslint';
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import roblox from '@acopier/eslint-plugin-roblox-ts';

const config = ts.config({
  extends: [js.configs.recommended, ...ts.configs.strictTypeChecked, prettier],
  languageOptions: {
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      project: true,
    },
  },
  ignores: ['/dist'],
  plugins: {
    /* eslint-disable @typescript-eslint/no-unsafe-assignment */
    roblox,
  },
});

export default config;
