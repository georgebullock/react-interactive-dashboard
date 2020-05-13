module.exports = {
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: 'module'
	},
	extends: ['eslint:recommended', 'plugin:prettier/recommended'],
	rules: {
		'prettier/prettier': 'error',
		'no-console': 'off',
		'no-unused-vars': 'off'
	},
	settings: {},
	env: {
		commonjs: true,
		node: true,
		es6: true,
		jest: true
	},
	overrides: [
		{
			files: '**/*.+(ts|tsx)',
			parser: '@typescript-eslint/parser',
			rules: {
				'@typescript-eslint/explicit-function-return-type': 'error'
			},
			plugins: ['@typescript-eslint/eslint-plugin'],
			extends: [
				'plugin:@typescript-eslint/eslint-recommended',
				'plugin:@typescript-eslint/recommended',
				'eslint-config-prettier/@typescript-eslint'
			]
		}
	]
};
