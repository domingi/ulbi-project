import { Configuration } from "webpack-dev-server";
import { WebpackOptions } from "./types/config";

export const webpackDevServer = (options: WebpackOptions): Configuration => {
  const { port, paths } = options;
  return {
    static: paths.devServer,
    open: true,
    port,
    historyApiFallback: true,
    hot: true,
  };
};
