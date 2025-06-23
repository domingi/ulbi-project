import { ROUTE_PATHS } from "~/shared/config/routeConfig/routeConfig";
import { HomeIcon } from "~/shared/assets/icons/HomeIcon";
import { AboutIcon } from "~/shared/assets/icons/AboutIcon";

interface SidebarLinkItemsType {
  path: string;
  name: string;
  icon: JSX.Element;
}

export const SidebarLinkItems: SidebarLinkItemsType[] = [
  {
    path: ROUTE_PATHS.main,
    name: 'glavnaya',
    icon: <HomeIcon />,
  },
  {
    path: ROUTE_PATHS.about,
    name: 'o-proekte',
    icon: <AboutIcon />,
  },
  {
    path: ROUTE_PATHS.profile,
    name: 'profile',
    icon: <HomeIcon />,
  },
];
