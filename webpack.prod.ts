import { merge } from 'webpack-merge';
import type { Configuration } from 'webpack';
import common from './webpack.common';

const config: Configuration = merge(common, {
	mode: 'production',
});

export default config;
