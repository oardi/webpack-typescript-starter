import { merge } from 'webpack-merge';
import type { Configuration } from 'webpack';
import common from './webpack.common';
import 'webpack-dev-server';

const config: Configuration = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		open: true,
		hot: true,
		port: 8080,
	},
});

export default config;
