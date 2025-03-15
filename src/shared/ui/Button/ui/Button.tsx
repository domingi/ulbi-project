import { FC } from 'react';
import cls from './Button.module.scss';
import classNames from '~/shared/lib/classNames/classNames';

export enum ButtonTheme {
    CLEAR = 'clear',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const {
    children,
    className,
    theme = ButtonTheme.CLEAR,
    ...otherProps
  } = props;
  return (
    <button {...otherProps} className={classNames(cls.Button, {}, [cls[theme], className])}>
      {children}
    </button>
  );
};
