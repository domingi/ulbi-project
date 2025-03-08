import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { WebpackOptions } from "./types/config";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';


export const webpackPlugins = (options: WebpackOptions): webpack.WebpackPluginInstance[] => {
    const { paths } = options;
    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
          template: paths.public,
          favicon: paths.favicon,
        }),
        new MiniCssExtractPlugin(),
      ]
};
