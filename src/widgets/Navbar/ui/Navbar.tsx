import { FC } from "react";
import cls from './Navbar.module.scss';
import { Link } from "react-router-dom";
import classNames from "~/shared/lib/classNames/classNames";
import { APP_LINK_THEME, AppLink } from "~/shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div>СУПЕР ПРОЕКТ</div>
            <div className={classNames(cls.links)}>
                <AppLink to="/" theme={APP_LINK_THEME.MAIN} className={classNames(cls.main)}>Главная</AppLink>
                <AppLink to="/about" theme={APP_LINK_THEME.MAIN}>О проекте</AppLink>
            </div>
        </div>
    );
};
