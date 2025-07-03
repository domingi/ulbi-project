import { FC, memo, ReactNode } from "react";
import cls from './Sidebar.module.scss';
import { useTranslation } from "react-i18next";
import { APP_LINK_THEME, AppLink } from "~/shared/ui/AppLink";
import { useSelector } from "react-redux";
import { getAuthData } from "~/entities/User";

export interface SidebarLinkProps {
  path: string;
  isCollapsed: boolean;
  name: string;
  icon: ReactNode;
  isAuthOnly?: boolean;
}

export const SidebarLink: FC<SidebarLinkProps> = memo(({ path, isCollapsed, name, icon, isAuthOnly }: SidebarLinkProps) => {
  const { t } = useTranslation('translation');
  const auth = useSelector(getAuthData);

  if (!auth && isAuthOnly) return null;
  return (
    <AppLink to={path} theme={APP_LINK_THEME.MAIN} className={cls.link}>
      {icon}
      {!isCollapsed && <span>{t(name)}</span>}
    </AppLink>
      
  );
});