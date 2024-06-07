// import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';

export default [
  // { languageOptions: { globals: globals.browser } },
  { ignores: ['**/node_modules', '**/dist', '.git/**'] },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    rules: {
      'no-var': 'error'
    }
  }
];
