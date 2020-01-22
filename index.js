module.exports = {
  extends: ['eslint:recommended'].concat([
    './rules/style',
    './rules/variables'
  ].map(require.resolve)),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
};