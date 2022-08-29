import * as path from "path";
import { Configuration } from 'webpack';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config: Configuration = {
	context: path.resolve(__dirname, './src'),
	entry: { app: './index.ts' },
	module: {
		rules: [{ test: /\.ts?$/, use: 'ts-loader', exclude: /node_modules/ }], // do not forget to change/install your own TS loader
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	plugins: [
		new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "src", "index.html"),
			title: 'Webpack Typescript Starter',
			filename: "index.html",
			chunks: ['vendors', 'app'],
		})
	],
	output: {
		filename: '[name].js',
		chunkFilename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
};

export default config;
