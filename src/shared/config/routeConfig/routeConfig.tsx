import { PathRouteProps } from "react-router-dom";
import { AboutPage } from "~/pages/AboutPage";
import { MainPage } from "~/pages/MainPage";

enum APP_ROUTES {
    MAIN = 'main',
    ABOUT = 'about',
}

const ROUTE_PATHS: Record<APP_ROUTES, string> = {
  [APP_ROUTES.MAIN]: '/',
  [APP_ROUTES.ABOUT]: '/about',
};

export const routeConfig: Record<APP_ROUTES, PathRouteProps> = {
  [APP_ROUTES.MAIN]: { path: ROUTE_PATHS[APP_ROUTES.MAIN], element: <MainPage /> },
  [APP_ROUTES.ABOUT]: { path: ROUTE_PATHS[APP_ROUTES.ABOUT], element: <AboutPage /> },
};