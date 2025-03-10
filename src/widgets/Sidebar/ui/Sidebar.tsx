import { FC, useState } from "react";
import cls from './Sidebar.module.scss';
import classNames from "~/shared/lib/classNames/classNames";
import { ThemeSwitcher } from "~/shared/ui/ThemeSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({className}: SidebarProps) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const toggleSidebar = () => setIsCollapsed(prev => !prev);

  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [])}>
        <button onClick={toggleSidebar}>Toggle sidebar</button>
        <div className={cls.switcher}><ThemeSwitcher /></div>
    </div>
  );
};