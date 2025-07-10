import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { routeConfig } from "~/shared/config/routeConfig/routeConfig"
import { PageLoader } from "~/widgets/PageLoader";
import { RequireAuth } from "./RequireAuth";

export const AppRouter = () => {

  return (
    <div className="page-wrapper">
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {Object.values(routeConfig).map(({ path, element, isAuthOnly }) => (
            <Route
              path={path}
              element={isAuthOnly ? (<RequireAuth>{element as JSX.Element}</RequireAuth>) : element}
              key={path}
            />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
};
