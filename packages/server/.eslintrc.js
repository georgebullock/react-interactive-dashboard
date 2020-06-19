module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: 'module'
	},
	plugins: ['@typescript-eslint', 'prettier'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'prettier'
	],
	rules: {
		'prettier/prettier': 'error',
		'no-console': 'off',
		'no-unused-vars': 'off',
		'@typescript-eslint/explicit-function-return-type': 'error',
		'space-before-function-paren': 'off'
	},
	settings: {},
	env: {
		commonjs: true,
		node: true,
		es6: true,
		jest: true
	}
};
