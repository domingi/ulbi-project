import MiniCssExtractPlugin from 'mini-css-extract-plugin';


export const scssLoader = (isDev: boolean) => ({
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
});