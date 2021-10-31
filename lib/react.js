module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
  ],
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  rules: {
    'react/display-name': 'warn',
    'react/jsx-boolean-value': ['warn', 'never'],
    'react/jsx-closing-bracket-location': ['warn', 'tag-aligned'],
    'react/jsx-curly-newline': ['warn', {
      multiline: 'consistent',
      singleline: 'consistent',
    }],
    'react/jsx-curly-spacing': ['warn', { when: 'never', allowMultiline: true }],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-indent': ['warn', 2],
    'react/jsx-indent-props': ['warn', 2],
    'react/jsx-max-props-per-line': ['warn', { maximum: 1, when: 'multiline' }],
    'react/jsx-one-expression-per-line': ['warn', { allow: 'single-child' }],
    'react/jsx-pascal-case': ['error', {
      allowAllCaps: true,
      ignore: [],
    }],
    'react/jsx-props-no-multi-spaces': 'warn',
    'react/jsx-tag-spacing': ['warn', { beforeSelfClosing: 'always' }],
    'react/jsx-wrap-multilines': ['warn', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
    }],
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
}
