import { PathRouteProps } from "react-router-dom";
import { AboutPage } from "~/pages/AboutPage";
import { MainPage } from "~/pages/MainPage";
import { NotFoundPage } from "~/pages/NotFoundPage";
import { ProfilePage } from "~/pages/ProfilePage";

interface AppPathRouteProps extends PathRouteProps {
  isAuthOnly?: boolean;
}

export enum APP_ROUTES {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    NOT_FOUND = 'notFound',
}

export const ROUTE_PATHS: Record<APP_ROUTES, string> = {
  [APP_ROUTES.MAIN]: '/',
  [APP_ROUTES.ABOUT]: '/about',
  [APP_ROUTES.PROFILE]: '/profile',
  [APP_ROUTES.NOT_FOUND]: '*',

};

export const routeConfig: Record<APP_ROUTES, AppPathRouteProps> = {
  [APP_ROUTES.MAIN]: { path: ROUTE_PATHS[APP_ROUTES.MAIN], element: <MainPage /> },
  [APP_ROUTES.ABOUT]: { path: ROUTE_PATHS[APP_ROUTES.ABOUT], element: <AboutPage /> },
  [APP_ROUTES.PROFILE]: { path: ROUTE_PATHS[APP_ROUTES.PROFILE], element: <ProfilePage />, isAuthOnly: true },
  [APP_ROUTES.NOT_FOUND]: { path: ROUTE_PATHS[APP_ROUTES.NOT_FOUND], element: <NotFoundPage /> },
};