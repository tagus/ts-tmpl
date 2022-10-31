module.exports = {
  'env': {
    'node': true,
    'browser': true,
    'jest/globals': true,
  },
  'root': true,
  'parser': '@typescript-eslint/parser',
  'plugins': [
    'unicorn',
    '@typescript-eslint',
    'jest',
  ],
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
  },
  'settings': {
    'react': {
      'version': '18',
    },
  },
  'rules': {
    'jsx-quotes': ['error', 'prefer-double'],
    'react/prop-types': ['off'],
    'react/jsx-tag-spacing': ['error', { 'beforeSelfClosing': 'always' }],
    'react/jsx-no-useless-fragment': ['error'],
    '@typescript-eslint/no-non-null-assertion': ['off'],
    '@typescript-eslint/ban-ts-comment': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-unused-vars': ['error'],
    'prefer-arrow-callback': ['error'],
    'no-undef': ['error'],
    'semi': 'off',
    '@typescript-eslint/semi': ['error'],
    '@typescript-eslint/member-delimiter-style': ['error', {
      'multiline': {
        'delimiter': 'semi',
        'requireLast': true,
      },
      'singleline': {
        'delimiter': 'semi',
        'requireLast': false,
      },
      'multilineDetection': 'brackets',
    }],
    'no-duplicate-imports': ['error'],
    'no-unused-vars': 'off',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-multi-spaces': ['error'],
    'camelcase': ['error'],
    'arrow-parens': ['error', 'as-needed'],
    'no-var': ['error'],
    'prefer-const': ['error'],
    'quotes': ['error', 'single'],
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': ['error', 'always'],
    'eol-last': ['error', 'always'],
    'new-cap': ['error', { 'capIsNew': false }],
    'space-before-blocks': ['error'],
    'indent': ['error', 2, {
      'SwitchCase': 1,
      'MemberExpression': 'off',
    }],
    'space-before-function-paren': [
      'error',
      {
        'anonymous': 'never',
        'named': 'never',
        'asyncArrow': 'always',
      },
    ],
    'unicorn/filename-case': [
      'error',
      {
        'cases': {
          'camelCase': true,
          'kebabCase': true,
          'pascalCase': true,
        },
      },
    ],
  },
};
