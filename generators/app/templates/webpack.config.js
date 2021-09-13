/* eslint-disable unicorn/prefer-module */
// @ts-check
/** @typedef {import('webpack').Configuration} WebpackConfig **/
const path = require('path');

module.exports = /** @type WebpackConfig */ {
	target: 'node',
	entry: './src/index.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
		libraryTarget: 'commonjs2',
		devtoolModuleFilenameTemplate: '../[resource-path]',
	},
	devtool: 'source-map',
	externals: {
		vscode: 'commonjs vscode',
	},
	resolve: {
		extensions: ['.ts', 'js', 'json'],
	},
	module: {
		rules: [
			{
				test: /\.ts$/i,
				exclude: /node_modules/i,
				use: [
					{
						loader: 'ts-loader',
						options: {
							compilerOptions: {
								module: 'es6',
							},
						},
					},
				],
			},
		],
	},
};
