import { FC, useState } from "react";
import cls from './Sidebar.module.scss';
import classNames from "~/shared/lib/classNames/classNames";
import { ThemeSwitcher } from "~/shared/ui/ThemeSwitcher";
import { LangSwitcher } from "~/shared/ui/LangSwitcher";
import { useTranslation } from "react-i18next";
import { Button } from "~/shared/ui/Button";
import { ButtonSize, ButtonTheme } from "~/shared/ui/Button/ui/Button";
import { APP_LINK_THEME, AppLink } from "~/shared/ui/AppLink";
import { ROUTE_PATHS } from "~/shared/config/routeConfig/routeConfig";
import { HomeIcon } from "~/shared/assets/icons/HomeIcon";
import { AboutIcon } from "~/shared/assets/icons/AboutIcon";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }: SidebarProps) => {
  const { t } = useTranslation('translation');

  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleSidebar = () => setIsCollapsed(prev => !prev);

  return (
    <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [])}>
      <div className={cls.links}>
        <AppLink to={ROUTE_PATHS.main} theme={APP_LINK_THEME.MAIN} className={cls.link}>
          <HomeIcon />  
          {!isCollapsed && <span>{t('glavnaya')}</span>}
        </AppLink>
        <AppLink to={ROUTE_PATHS.about} theme={APP_LINK_THEME.MAIN} className={cls.link}>
          <AboutIcon />
          {!isCollapsed && <span>{t('o-proekte')}</span>}
        </AppLink>
      </div>
      <Button
        data-testid="sidebar-toggle"
        className={cls.collapsedBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        onClick={toggleSidebar}
        square
        size={ButtonSize.L}
      >
        {isCollapsed ? '>' : '<'}
      </Button>
      <div className={cls.switcher}>
        <ThemeSwitcher />
        <LangSwitcher short={isCollapsed} className={cls.lang} />
      </div>
    </div>
  );
};