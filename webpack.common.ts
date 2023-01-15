import * as path from 'path';
import type { Configuration } from 'webpack';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';

const config: Configuration = {
	context: path.resolve(__dirname, './src'),
	entry: { app: './index.ts' },
	module: {
		rules: [
			{ test: /\.ts?$/, use: 'ts-loader', exclude: /node_modules/ },
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	plugins: [
		new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'index.html'),
			title: 'Webpack Typescript Starter',
			filename: 'index.html',
			chunks: ['vendors', 'app'],
		}),
		new MiniCssExtractPlugin({
			filename: 'style.css',
			chunkFilename: 'style.css',
		}),
	],
	output: {
		filename: '[name].js',
		chunkFilename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
	},
};

export default config;
