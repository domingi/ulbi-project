import { FC } from 'react';
import cls from './Button.module.scss';
import { Link, LinkProps } from 'react-router-dom';
import classNames from '~/shared/lib/classNames/classNames';
import { THEMES, useTheme } from '~/app/providers/ThemeProvider';
import LightIcon from './assets/themeLightIcon.svg';
import DarkIcon from './assets/themeDarkIcon.svg';

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
