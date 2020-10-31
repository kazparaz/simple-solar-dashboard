module.exports = {
  env: {
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  ignorePatterns: ['.eslintrc.js', '.babelrc.js', 'snowpack.config.js'],
  plugins: ['functional'],
  settings: {},
  extends: [
    'eslint:recommended',
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // https://github.com/jonaskello/eslint-plugin-functional
    'plugin:functional/external-recommended',
    'plugin:functional/lite',
  ],
  rules: {
    // https://github.com/jonaskello/eslint-plugin-functional/blob/master/docs/rules/no-return-void.md
    'functional/no-return-void': 'off',
    'functional/no-throw-statement': 'off',
  },
}
