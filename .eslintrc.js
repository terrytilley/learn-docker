module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  rules: {
    'no-console': 0,
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        useTabs: false,
        endOfLine: 'lf',
        singleQuote: true,
        bracketSpacing: true,
        trailingComma: 'es5',
      },
    ],
  },
};