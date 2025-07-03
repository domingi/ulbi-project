import { FC, memo, useState } from "react";
import cls from './Sidebar.module.scss';
import classNames from "~/shared/lib/classNames/classNames";
import { ThemeSwitcher } from "~/shared/ui/ThemeSwitcher";
import { LangSwitcher } from "~/shared/ui/LangSwitcher";
import { Button, ButtonTheme, ButtonSize } from "~/shared/ui/Button";
import { SidebarLinkItems } from "../model/SidebarLinkItems";
import { SidebarLink } from "./SidebarLink";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = memo(({ className }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleSidebar = () => setIsCollapsed(prev => !prev);

  return (
    <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [className])}>
      <div className={cls.links}>
        {SidebarLinkItems.map((item) => (
          <SidebarLink
            path={item.path}
            name={item.name}
            icon={item.icon}
            isCollapsed={isCollapsed}
            key={item.name}
            isAuthOnly={item.isAuthOnly}
          />
        ))}
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
});