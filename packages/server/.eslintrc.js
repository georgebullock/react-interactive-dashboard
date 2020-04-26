module.exports = {
	parserOptions: {
		ecmaVersion: 2019
	},
	extends: ['eslint:recommended', 'plugin:prettier/recommended'],
	rules: {
		'prettier/prettier': 'error',
		'no-console': 'off'
	},
	settings: {},
	env: {
		commonjs: true,
		node: true,
		es6: true,
		jest: true
	}
};
