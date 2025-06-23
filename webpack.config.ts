import path from 'path';
import { BuildEnvs, WebpackOptions } from './config/build/types/config';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

export default (env: BuildEnvs) => {
  const options: WebpackOptions = {
    mode: env.mode || 'development',
    port: env.port || 3001,
    paths: {
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      output: path.resolve(__dirname, 'build'),
      public: path.resolve(__dirname, 'public', 'index.html'),
      devServer: path.resolve(__dirname, 'public'),
      src: path.resolve(__dirname, 'src'),
      favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
    },
    isDev: env.mode === 'development',
    apiUrl: env.apiUrl || 'http://localhost:8000',
  }
  return buildWebpackConfig(options);
};
