import { FC, memo, ReactNode } from "react";
import cls from './Sidebar.module.scss';
import { useTranslation } from "react-i18next";
import { APP_LINK_THEME, AppLink } from "~/shared/ui/AppLink";

export interface SidebarLinkProps {
  path: string;
  isCollapsed: boolean;
  name: string;
  icon: ReactNode;
}

export const SidebarLink: FC<SidebarLinkProps> = memo(({ path, isCollapsed, name, icon }: SidebarLinkProps) => {
  const { t } = useTranslation('translation');

  return (
    <AppLink to={path} theme={APP_LINK_THEME.MAIN} className={cls.link}>
      {icon}
      {!isCollapsed && <span>{t(name)}</span>}
    </AppLink>
      
  );
});