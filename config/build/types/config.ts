type WebpackMode = 'production' | 'development';

export interface WebpackOptions {
  mode: WebpackMode;
  port: number,
  paths: {
    entry: string,
    output: string,
    public: string,
    src: string,
  },
  isDev: boolean,
}

export interface BuildEnvs {
  mode: WebpackMode;
  port: number,
}
