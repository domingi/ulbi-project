import type { StorybookConfig } from '@storybook/react-webpack5';
import { scssLoader } from '../build/loaders/scssLoader';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';

const config: StorybookConfig = {
  stories: [
    "../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  staticDirs: ['../../public'],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    '@storybook/addon-styling-webpack'
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  webpackFinal: async (config) => {
    config.module.rules.push(scssLoader(true));
    config.plugins.push(new MiniCssExtractPlugin());
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve(__dirname, '../../src'),
    };
    return config;
  },
};
export default config;