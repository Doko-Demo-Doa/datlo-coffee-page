module.exports = {
  env: {
    node: true,
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:vue/essential',
    '@vue/typescript'
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  }
}