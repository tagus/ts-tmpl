/* eslint-disable */

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: {
		index: path.resolve(__dirname, 'src', 'index.ts'),
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		libraryTarget: 'umd',
		library: 'TsTmpl',
		umdNamedDefine: true,
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			}
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js'],
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
	plugins: [
		new CleanWebpackPlugin(),
	],
};
