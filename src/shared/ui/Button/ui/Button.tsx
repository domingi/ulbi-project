import { FC, memo } from 'react';
import cls from './Button.module.scss';
import classNames from '~/shared/lib/classNames/classNames';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'sizeM',
  L = 'sizeL',
  XL = 'sizeXL',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
}

export const Button: FC<ButtonProps> = memo((props: ButtonProps) => {
  const {
    children,
    className,
    theme = ButtonTheme.CLEAR,
    square = false,
    size = ButtonSize.M,
    disabled = false,
    ...otherProps
  } = props;

  const mods = {
    [cls.square]: square,
    [cls.disabled]: disabled,
  };

  return (
    <button {...otherProps} className={classNames(cls.Button, mods, [cls[theme], cls[size], className])}>
      {children}
    </button>
  );
});
