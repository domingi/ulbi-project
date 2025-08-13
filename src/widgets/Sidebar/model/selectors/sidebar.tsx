import { ROUTE_PATHS } from "~/shared/config/routeConfig/routeConfig";
import { HomeIcon } from "~/shared/assets/icons/HomeIcon";
import { AboutIcon } from "~/shared/assets/icons/AboutIcon";
import { createSelector } from "@reduxjs/toolkit";
import { getAuthData } from "~/entities/User";
import { SidebarLinkItemsType } from "../types/types";

export const getSudebarLinkItems = createSelector(getAuthData, (userData) => {
  const links: SidebarLinkItemsType[] = [
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
      path: ROUTE_PATHS.article,
      name: 'Статья',
      icon: <HomeIcon />,
      isAuthOnly: true,
    },
  ];

  if (userData?.id) {
    links.push(
      {
        path: ROUTE_PATHS.profile + userData.id,
        name: 'profile',
        icon: <HomeIcon />,
        isAuthOnly: true,
      },
      {
        path: ROUTE_PATHS.articleDetails,
        name: 'Детально',
        icon: <HomeIcon />,
        isAuthOnly: true,
      });
  }
  return links;
});