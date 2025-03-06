import webpack from "webpack";
import { WebpackOptions } from "./types/config";


export const webpackResolvers = (options: WebpackOptions): webpack.ResolveOptions => {
    return {
      extensions: ['.tsx', '.ts', '.js'],
      preferAbsolute: true,
      alias: {
        '~': options.paths.src,
      },
    };
};
