/* eslint-disable */

const path = require('path');

module.exports = {
	entry: {
		index: path.resolve(__dirname, 'src', 'index.ts'),
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		libraryTarget : 'umd',
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
	},
};
