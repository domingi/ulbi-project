declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
  }

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;
declare const __PROJECT__: 'dev' | 'storybook' | 'jest';

type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;