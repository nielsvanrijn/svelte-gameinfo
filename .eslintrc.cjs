module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	plugins: [
        'svelte3',
        '@typescript-eslint',
        'customsvelte'
    ],
	ignorePatterns: ['*.cjs'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3', rules: this.ruels }],
	settings: {
		'svelte3/typescript': () => require('typescript')
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
    rules: {
        'indent': ['error', 4],
        '@typescript-eslint/indent': ['error', 4],
        'quotes': ['error', 'single'],
        'customsvelte/svelte-script-order': 'error'
    },
};