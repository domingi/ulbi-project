import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { WebpackOptions } from "./types/config";


export const webpackPlugins = (options: WebpackOptions): webpack.WebpackPluginInstance[] => {
    const { paths } = options;
    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({ template: paths.public})
      ]
};
