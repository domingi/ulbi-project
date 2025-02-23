
import path from "path";
import webpack from "webpack";


export const webpackLoaders = (): webpack.RuleSetRule[] => {
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: path.resolve(__dirname, "node_modules"),
  };
    return [tsLoader];
};
