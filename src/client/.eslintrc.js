module.exports = {
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
		'plugin:jest-dom/recommended'
	],
	plugins: ['prettier', 'jest-dom'],
	rules: {
		'no-console': 'off',
		'react/react-in-jsx-scope': 'off'
	},
	settings: {
		react: {
			pragma: 'react',
			version: 'detect'
		}
	},
	env: {
		browser: true,
		node: true,
		jest: true
	},
	overrides: [
		{
			files: '**/*.+(ts|tsx)',
			parser: '@typescript-eslint/parser',
			parserOptions: {
				project: './tsconfig.json'
			},
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
