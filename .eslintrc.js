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
  ignorePatterns: ['.eslintrc.js', '.babelrc.js', 'snowpack.config.js', '*.js'],
  plugins: ['functional'],
  extends: [
    'eslint:recommended',
    // @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // @see https://github.com/jonaskello/eslint-plugin-functional
    'plugin:functional/external-recommended',
    'plugin:functional/lite',
    // @see https://github.com/benmosher/eslint-plugin-import
    'plugin:import/errors',
    'plugin:import/typescript',
    // @see https://github.com/sindresorhus/eslint-plugin-unicorn
    'plugin:unicorn/recommended',
  ],
  rules: {
    'functional/no-return-void': 'off',
    'functional/no-throw-statement': 'off',

    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-cycle': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-self-import': 'error',
    'import/no-unused-modules': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external'],
        'newlines-between': 'never',
        alphabetize: { order: 'asc' },
      },
    ],

    'unicorn/filename-case': ['error', { case: 'kebabCase', ignore: ['\\.tsx$'] }],
  },
}
