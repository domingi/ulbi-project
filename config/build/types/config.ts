type WebpackMode = 'production' | 'development';

export interface WebpackOptions {
  mode: WebpackMode;
  port: number,
  paths: {
    entry: string,
    output: string,
    public: string,
    devServer: string,
    src: string,
    favicon: string,
  },
  isDev: boolean,
  apiUrl: string,
}

export interface BuildEnvs {
  mode: WebpackMode;
  port: number,
  apiUrl: string,
}
