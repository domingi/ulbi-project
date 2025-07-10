import { FC, memo } from 'react';
import cls from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';
import classNames from '~/shared/lib/classNames/classNames';

export enum APP_LINK_THEME {
    MAIN = 'main',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    theme?: APP_LINK_THEME;
}

export const AppLink: FC<AppLinkProps> = memo((props: AppLinkProps) => {
  const {
    children,
    to,
    theme = APP_LINK_THEME.MAIN,
    className,
    ...otherProps
  } = props;
  return (
    <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps} replace>
      {children}
    </Link>
  );
});
