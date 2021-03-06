module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'airbnb', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'no-unused-vars': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    // 'no-shadow': ['error', { allow: ['state'] }],
    // 'no-shadow': ['error', { allow: ['done'] }],
    'no-else-return': ['error', { allowElseIf: false }],
    'react/prop-types': 0,
    'prefer-destructuring': [
      'error',
      {
        array: false,
        object: false,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
  },
};
