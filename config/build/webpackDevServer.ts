import { Configuration } from "webpack-dev-server";
import { WebpackOptions } from "./types/config";

export const webpackDevServer = (options: WebpackOptions): Configuration => {
  const { port, paths } = options;
    return {
      static: paths.public,
      open: true,
      port,
    };
};
