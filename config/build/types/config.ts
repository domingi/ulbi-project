type WebpackMode = 'production' | 'development';

export interface WebpackOptions {
  mode: WebpackMode;
  paths: {
    entry: string,
    output: string,
    public: string,
  }
}
