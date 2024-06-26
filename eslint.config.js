import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: [
      'docs/*',
      'public/*',
      '.vscode/*',
    ],
  },
  {
    rules: {
      'curly': ['error', 'all'],
      'antfu/consistent-list-newline': 'off',
      'style/jsx-one-expression-per-line': 'off',
    },
  },
  {
    files: ['src/components/demo/*.ts'],
    rules: {
      'no-undef': 'off',
      'no-alert': 'off',
    },
  },
  {
    files: ['src/components/install/*.ts'],
    rules: {
      'unused-imports/no-unused-vars': 'off',
    },
  },
)
