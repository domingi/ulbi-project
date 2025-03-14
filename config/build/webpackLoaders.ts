
import path from "path";
import webpack from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { WebpackOptions } from "./types/config";

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

    return [babelLoader, tsLoader, scssLoader, svgLoader];
};
