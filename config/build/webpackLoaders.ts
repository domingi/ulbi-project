
import path from "path";
import webpack from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { WebpackOptions } from "./types/config";

export const webpackLoaders = (options: WebpackOptions): webpack.RuleSetRule[] => {
  const { isDev } = options;

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: path.resolve(__dirname, "node_modules"),
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? MiniCssExtractPlugin.loader : "style-loader",
      {
        loader: "css-loader",
        options: {
          modules: { 
            auto: /\.module\.\w+$/i,
            localIdentName: isDev ? 
              "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  };

    return [tsLoader, scssLoader];
};
