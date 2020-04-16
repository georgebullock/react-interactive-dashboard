module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
  },
  extends: ["eslint:recommended", "eslint-config-prettier"],
  rules: {
    "no-console": "off",
  },
  settings: {},
  env: {
    commonjs: true,
    node: true,
    es6: true,
    jest: true,
  },
};
