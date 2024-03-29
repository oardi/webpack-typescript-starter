module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: 'tsconfig.json',
	},
	plugins: ['@typescript-eslint'],
	rules: {
		camelcase: 'error',
		'consistent-return': 'error',
		curly: 'error',
		'default-case': 'error',
		eqeqeq: 'error',
		'no-promise-executor-return': 'error',
		'no-unused-expressions': 'off',
		'no-unreachable': 'error',
		'object-shorthand': ['error', 'never'],
		'require-await': 'off',
		semi: 'error',
		'@typescript-eslint/array-type': 'error',
		'@typescript-eslint/await-thenable': 'error',
		'@typescript-eslint/ban-types': 'error',
		'@typescript-eslint/consistent-generic-constructors': 'error',
		'@typescript-eslint/consistent-type-imports': 'error',
		'@typescript-eslint/explicit-function-return-type': 'error',
		'@typescript-eslint/no-empty-interface': 'error',
		'@typescript-eslint/no-empty-function': 'error',
		'@typescript-eslint/no-explicit-any': 'error',
		'@typescript-eslint/no-floating-promises': ['error', { ignoreIIFE: true }],
		'@typescript-eslint/no-inferrable-types': 0,
		'@typescript-eslint/no-non-null-assertion': 'error',
		'@typescript-eslint/no-unused-expressions': [
			'error',
			{
				allowTernary: true,
				allowShortCircuit: true,
			},
		],
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				varsIgnorePattern: '^T',
				argsIgnorePattern: '^T',
			},
		],
		'@typescript-eslint/no-var-requires': 'error',
		'@typescript-eslint/require-await': 'error',
		'@typescript-eslint/typedef': [
			'error',
			{
				arrayDestructuring: false,
				arrowParameter: false,
				memberVariableDeclaration: true,
				objectDestructuring: false,
				parameter: true,
				propertyDeclaration: true,
				variableDeclaration: true,
				variableDeclarationIgnoreFunction: true,
			},
		],
	},
	ignorePatterns: ['node_modules'],
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			excludedFiles: '*.test.js',
			rules: {
				quotes: ['error', 'single', { allowTemplateLiterals: true }],
			},
		},
	],
};
