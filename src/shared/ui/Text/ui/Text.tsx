import { FC, memo } from "react";
import cls from './Text.module.scss';
import classNames from "~/shared/lib/classNames/classNames";

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme,
}

export const Text: FC<TextProps> = memo((props: TextProps) => {
  const { 
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
  } = props;

  return (
    <div className={classNames(cls.primary, {}, [className, cls[theme]])}>
      {title && (<p className={cls.title}>{title}</p>)}
      {text && (<p className={cls.text}>{text}</p>)}
    </div>
  );
});