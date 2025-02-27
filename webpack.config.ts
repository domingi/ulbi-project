import path from 'path';
import { BuildEnvs, WebpackOptions } from './config/build/types/config';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

export default (env:BuildEnvs) => {
  const options: WebpackOptions = {
    mode: env.mode || 'development',
    port: env.port || 3001,
    paths: {
      entry: path.resolve(__dirname, 'src', 'index.ts'),
      output: path.resolve(__dirname, 'build'),
      public: path.resolve(__dirname, 'public', 'index.html'),
    },
    isDev: env.mode === 'development',
  }
  return buildWebpackConfig(options);
};
