const isTest = String(process.env.NODE_ENV) === 'test';

module.exports = {
	presets: [
		['@babel/preset-env', { modules: isTest ? 'commonjs' : false }],
		'@babel/preset-react',
		'@babel/preset-flow'
	],
	plugins: ['@babel/plugin-proposal-class-properties']
};
