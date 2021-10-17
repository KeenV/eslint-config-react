module.exports = {
  extends: [
    'plugin:import/recommended',
  ],
  rules: {
    'import/no-absolute-path': 'error',
    'import/no-self-import': 'error',
    'import/no-cycle': 'error',
    'import/no-useless-path-segments': 'error',
    'import/first': 'warn',
    'import/extensions': ['warn', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
    }],
    'import/order': ['warn', { groups: [['builtin', 'external', 'internal']] }],
    'import/newline-after-import': 'warn',
    'import/no-named-default': 'error',
  },
  settings: {
    'import/extensions': [
      '.js',
      '.mjs',
      '.jsx',
    ],
  },
}
