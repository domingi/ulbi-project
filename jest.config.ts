/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';

const config: Config = {
  clearMocks: true,
  globals: {
    __IS_DEV__: true,
    __API__: '',
    __PROJECT__: 'jest',
  },
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  rootDir: './',
  setupFilesAfterEnv: ['<rootDir>/config/jest/jestSetup.ts'],
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/config/jest/__mocks__/svg.tsx',
    "~/(.*)": "<rootDir>/src/$1"
  },
  testPathIgnorePatterns: [
    "\\\\node_modules\\\\"
  ],
  coveragePathIgnorePatterns: [
    "\\\\node_modules\\\\"
  ],
  testEnvironment: "jsdom",
  moduleDirectories: [
    'node_modules',
  ],
  modulePaths: [
    '<rootDir>src',
  ],
};

export default config;
