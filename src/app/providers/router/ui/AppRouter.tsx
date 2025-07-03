import { useSelector } from "react-redux";
import { Suspense, useMemo } from "react"
import { Route, Routes } from "react-router-dom"
import { routeConfig } from "~/shared/config/routeConfig/routeConfig"
import { PageLoader } from "~/widgets/PageLoader";
import { getAuthData } from "~/entities/User";

export const AppRouter = () => {
  const auth = useSelector(getAuthData);

  const routes = useMemo(() => {
    const filteredByAuthRoutes = Object.values(routeConfig).filter((route) => {
      if (!auth && route.isAuthOnly) return false;
      return true;
    });
    return <>
      {filteredByAuthRoutes.map(({ path, element }) => (
        <Route path={path} element={element} key={path} />
      ))}
    </>
  }, [auth]);

  return (
    <div className="page-wrapper">
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {routes}
        </Routes>
      </Suspense>
    </div>
  );
};
