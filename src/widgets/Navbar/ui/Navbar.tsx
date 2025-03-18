import { FC } from "react";
import cls from './Navbar.module.scss';
import classNames from "~/shared/lib/classNames/classNames";
import { APP_LINK_THEME, AppLink } from "~/shared/ui/AppLink/AppLink";
import { ROUTE_PATHS } from "~/shared/config/routeConfig/routeConfig";
import { useTranslation } from "react-i18next";

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({className}: NavbarProps) => {
  const { t } = useTranslation('translation');

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={classNames(cls.links)}>
        <AppLink to={ROUTE_PATHS.main} theme={APP_LINK_THEME.MAIN} className={classNames(cls.main)}>{t('glavnaya')}</AppLink>
        <AppLink to={ROUTE_PATHS.about} theme={APP_LINK_THEME.MAIN}>{t('o-proekte')}</AppLink>
      </div>
    </div>
  );
};
