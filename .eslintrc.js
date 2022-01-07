module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'next',
    'plugin:cypress/recommended',
  ],
  plugins: ['prettier', 'cypress'],
  rules: {
    'prettier/prettier': 'error',
  },
  overrides: [
    {
      files: ['cypress/plugins/**/*.js', 'cypress/support/**/*.ts'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
      },
    },
  ],
};
