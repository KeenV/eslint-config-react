module.exports = {
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      globalReturn: false,
      jsx: true
    }
  },
  extends: [
    'eslint:recommended',
  ],
  rules: {
    // Possible Problems
    'no-use-before-define': [
      'error', {
        functions: false,
        classes: true,
        variables: true,
      },
    ],
    // Suggestions
    'block-scoped-var': 'error',
    camelcase: 'off',
    'consistent-return': 'error',
    curly: ['error', 'multi-line'],
    'default-case': ['error', { commentPattern: '^no default$' }],
    'default-case-last': 'error',
    'default-case-last': 'error',
    'default-param-last': 'error',
    'new-cap': ['error', { newIsCap: true, capIsNew: false, properties: true }],
    'no-alert': 'warn',
    'no-caller': 'error',
    'no-confusing-arrow': ['error', {
      allowParens: true,
    }],
    'no-console': 'warn',
    'no-empty': 'warn',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'no-unused-expressions': [
      'error', {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': ['error', {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    }],
    'no-useless-return': 'error',
    'no-var': 'error',
    'object-shorthand': ['error', 'always', {
      ignoreConstructors: false,
      avoidQuotes: true,
    }],
    'one-var': ['error', { initialized: 'never' }],
    'prefer-arrow-callback': ['error', {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    }],
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    }],
    'quote-props': ['error', 'as-needed'],
    // require `await` in `async function` (note: this is a horrible rule that should never be used)
    'require-await': 'off',
    strict: ['error', 'never'],
    'symbol-description': 'error',
    yoda: ['error', 'never'],
    // Layout & Formatting
    'array-bracket-newline': ['warn', 'consistent'],
    'array-bracket-spacing': ['warn', 'never'],
    'array-element-newline': ['warn', 'consistent'],
    'arrow-parens': ['warn', 'as-needed', {
      requireForBlockBody: true,
    }],
    'arrow-spacing': ['warn', { before: true, after: true }],
    'block-spacing': ['warn', 'always'],
    'brace-style': ['warn', '1tbs', { allowSingleLine: true }],
    'comma-dangle': [
      'warn', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'comma-spacing': ['warn', { before: false, after: true }],
    'comma-style': ['warn', 'last'],
    'computed-property-spacing': ['warn', 'never'],
    'dot-location': ['warn', 'property'],
    'eol-last': ['warn', 'always'],
    'func-call-spacing': ['warn', 'never'],
    'function-call-argument-newline': ['warn', 'consistent'],
    'function-paren-newline': ['warn', 'consistent'],
    'implicit-arrow-linebreak': ['warn', 'beside'],
    indent: [
      'warn', 2, {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 1,
        FunctionDeclaration: { parameters: 1, body: 1 },
        FunctionExpression: { parameters: 1, body: 1 },
        CallExpression: { arguments: 1 },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoreComments: false,
        ignoredNodes: ['TemplateLiteral *', 'JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
        offsetTernaryExpressions: true,
      },
    ],
    'jsx-quotes': ['warn', 'prefer-single'],
    'key-spacing': ['warn', { beforeColon: false, afterColon: true }],
    'keyword-spacing': ['warn', { before: true, after: true }],
    // 'line-comment-position': ['off', {
    //   position: 'above',
    //   ignorePattern: '',
    //   applyDefaultPatterns: true,
    // }],
    'linebreak-style': ['warn', 'unix'],
    // 'lines-around-comment': 'off',
    'lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }],
    // 'max-lines': ['off', {
    //   max: 300,
    //   skipBlankLines: true,
    //   skipComments: true
    // }],
    'max-statements-per-line': ['warn', { max: 1 }],
    // 'multiline-ternary': ['off', 'never'],
    'new-parens': 'warn',
    'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 4 }],
    'no-extra-parens': ['warn', 'all', {
      conditionalAssign: true,
      nestedBinaryExpressions: false,
      returnAssign: false,
      ignoreJSX: 'all', // delegate to eslint-plugin-react
      enforceForArrowConditionals: false,
    }],
    'no-mixed-spaces-and-tabs': 'warn',
    'no-multi-spaces': 'warn',
    'no-multiple-empty-lines': ['warn', { max: 1, maxBOF: 0, maxEOF: 0 }],
    'no-tabs': 'warn',
    'no-trailing-spaces': 'warn',
    'no-whitespace-before-property': 'warn',
    'nonblock-statement-body-position': ['warn', 'beside', { overrides: {} }],
    'object-curly-newline': ['warn', { multiline: true, consistent: true }],
    'object-curly-spacing': ['warn', 'always'],
    'object-property-newline': ['warn', { allowMultiplePropertiesPerLine: true }],
    'operator-linebreak': ['warn', 'before', { overrides: { '=': 'none' } }],
    'padded-blocks': ['warn', {
      blocks: 'never',
      classes: 'never',
      switches: 'never',
    }, {
      allowSingleLineBlocks: true,
    }],
    // 'padding-line-between-statements': 'off',
    quotes: ['warn', 'single', { avoidEscape: true }],
    'rest-spread-spacing': ['warn', 'never'],
    semi: ['warn', 'never'],
    'semi-spacing': ['warn', { before: false, after: true }],
    'semi-style': ['warn', 'last'],
    'space-before-blocks': 'warn',
    'space-before-function-paren': ['warn', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }],
    'space-in-parens': ['warn', 'never'],
    'space-infix-ops': 'warn',
    'space-unary-ops': ['warn', {
      words: true,
      nonwords: false,
      overrides: {
      },
    }],
    'switch-colon-spacing': ['warn', { after: true, before: false }],
    'template-curly-spacing': ['warn', 'never'],
    'template-tag-spacing': ['warn', 'never'],
    'unicode-bom': ['warn', 'never'],
    'wrap-iife': ['warn', 'inside', { functionPrototypeMethods: true }],
    'yield-star-spacing': ['warn', 'after']
  }
}