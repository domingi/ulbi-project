import path from 'path';
import { WebpackOptions } from './config/build/types/config';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

const options: WebpackOptions = {
  mode: 'development',
  paths: {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: path.resolve(__dirname, 'build'),
    public: path.resolve(__dirname, 'public', 'index.html'),
  }
}

const config = buildWebpackConfig(options);

export default config;
