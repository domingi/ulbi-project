import webpack from "webpack";
import { webpackPlugins } from "./webpackPlugins";
import { webpackLoaders } from "./webpackLoaders";
import { webpackResolvers } from "./webpackResolvers";
import { WebpackOptions } from "./types/config";

export const buildWebpackConfig = (options: WebpackOptions): webpack.Configuration => {
  const { mode, paths } = options;
    return {
      mode,
      entry: paths.entry,
      output: {
        filename: '[name].js',
        path: paths.output,
        clean: true,
      },
      plugins: webpackPlugins(options),
      module: {
        rules: webpackLoaders(),
      },
      resolve: webpackResolvers(),
    };
};
