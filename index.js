module.exports = {
  extends: [
    './lib/base',
    './lib/import',
    './lib/react',
    './lib/react-hooks',
  ],
  overrides: [{
    files: ['**/*.ts?(x)'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },

      // typescript-eslint specific options
      warnOnUnsupportedTypeScriptVersion: true,
    },
    extends: [
      'plugin:import/typescript',
      './lib/typescript',
    ],
  }],
}
