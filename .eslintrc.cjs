/* eslint-env node */
module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    'semi': ['error', 'never'],
    'quotes': [2, 'single'],
    'no-console': 1,
    'indent': ['error', 2],
  }
}