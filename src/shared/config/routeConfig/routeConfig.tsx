import { PathRouteProps } from "react-router-dom";
import { AboutPage } from "~/pages/AboutPage";
import { ArticleDetailsPage } from "~/pages/ArticleDetailsPage";
import { ArticlesPage } from "~/pages/ArticlesPage";
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
    ARTICLE = 'article',
    ARTICLE_DETAILS = 'articleDetails',
    NOT_FOUND = 'notFound',
}

export const ROUTE_PATHS: Record<APP_ROUTES, string> = {
  [APP_ROUTES.MAIN]: '/',
  [APP_ROUTES.ABOUT]: '/about',
  [APP_ROUTES.PROFILE]: '/profile',
  [APP_ROUTES.ARTICLE]: '/article',
  [APP_ROUTES.ARTICLE_DETAILS]: '/articles/',
  [APP_ROUTES.NOT_FOUND]: '*',

};

export const routeConfig: Record<APP_ROUTES, AppPathRouteProps> = {
  [APP_ROUTES.MAIN]: { path: ROUTE_PATHS[APP_ROUTES.MAIN], element: <MainPage /> },
  [APP_ROUTES.ABOUT]: { path: ROUTE_PATHS[APP_ROUTES.ABOUT], element: <AboutPage /> },
  [APP_ROUTES.PROFILE]: { path: ROUTE_PATHS[APP_ROUTES.PROFILE], element: <ProfilePage />, isAuthOnly: true },
  [APP_ROUTES.ARTICLE]: { path: ROUTE_PATHS[APP_ROUTES.ARTICLE], element: <ArticlesPage />, isAuthOnly: true },
  [APP_ROUTES.ARTICLE_DETAILS]: { path: `${ROUTE_PATHS[APP_ROUTES.ARTICLE_DETAILS]}:id`, element: <ArticleDetailsPage />, isAuthOnly: true },
  [APP_ROUTES.NOT_FOUND]: { path: ROUTE_PATHS[APP_ROUTES.NOT_FOUND], element: <NotFoundPage /> },
};