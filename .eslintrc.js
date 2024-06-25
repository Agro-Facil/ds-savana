module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['unused-imports', '@typescript-eslint', 'prettier'],
  extends: [
    'expo',
    'plugin:prettier/recommended',
    'universe/native',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  rules: {
    'unused-imports/no-unused-imports': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    'prettier/prettier': 'error',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
  },
  ignorePatterns: [
    'node_modules/',
    'build/',
    'dist/',
    'patches/',
    'assets/',
    'android/',
    'ios/',
    '.expo/',
    '.eslintrc.js',
    'scripts/',
    'tsconfig.json',
    '*.js',
    '*.json',
    '*.ts',
  ],
};
