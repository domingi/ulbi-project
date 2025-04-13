
import path from "path";
import webpack from "webpack";
import { WebpackOptions } from "./types/config";
import { scssLoader } from "./loaders/scssLoader";

export const webpackLoaders = (options: WebpackOptions): webpack.RuleSetRule[] => {
  const { isDev } = options;

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const babelLoader = {
    test: /\.m?ts$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-env']
      }
    }
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: path.resolve(__dirname, "node_modules"),
  };


  return [babelLoader, tsLoader, scssLoader(isDev), svgLoader];
};
