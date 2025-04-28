import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { WebpackOptions } from "./types/config";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export const definePlugin = (isDev: boolean) => 
  new webpack.DefinePlugin({
    __IS_DEV__: JSON.stringify(isDev),
  });

export const webpackPlugins = (options: WebpackOptions): webpack.WebpackPluginInstance[] => {
  const { paths, isDev } = options;

  const plugins = [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.public,
      favicon: paths.favicon,
    }),
    new MiniCssExtractPlugin(),
    definePlugin(isDev),
  ];

  if (isDev) {
    plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));
  }

  return plugins;
};
