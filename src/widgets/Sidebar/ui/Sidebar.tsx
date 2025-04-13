import { FC, useState } from "react";
import cls from './Sidebar.module.scss';
import classNames from "~/shared/lib/classNames/classNames";
import { ThemeSwitcher } from "~/shared/ui/ThemeSwitcher";
import { LangSwitcher } from "~/shared/ui/LangSwitcher";
import { useTranslation } from "react-i18next";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }: SidebarProps) => {
  const { t } = useTranslation('translation');

  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleSidebar = () => setIsCollapsed(prev => !prev);

  return (
    <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [])}>
      <button data-testid="sidebar-toggle" onClick={toggleSidebar}>{t('pereklyuchit-saidbar')}</button>
      <div className={cls.switcher}><ThemeSwitcher /></div>
      <div><LangSwitcher /></div>
    </div>
  );
};