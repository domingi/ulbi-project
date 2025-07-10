import webpack from "webpack";
import { webpackPlugins } from "./webpackPlugins";
import { webpackLoaders } from "./webpackLoaders";
import { webpackResolvers } from "./webpackResolvers";
import { WebpackOptions } from "./types/config";
import { webpackDevServer } from "./webpackDevServer";


export const buildWebpackConfig = (options: WebpackOptions): webpack.Configuration => {
  const { mode, paths, isDev } = options;
  return {
    mode,
    devtool: isDev ? 'inline-source-map' : undefined,
    entry: paths.entry,
    output: {
      filename: '[name].js',
      path: paths.output,
      clean: true,
      publicPath: '/',
    },
    plugins: webpackPlugins(options),
    module: {
      rules: webpackLoaders(options),
    },
    resolve: webpackResolvers(options),
    devServer: isDev ? webpackDevServer(options) : undefined,
  };
};
