import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { routeConfig } from "~/shared/config/routeConfig/routeConfig"
import { PageLoader } from "~/widgets/PageLoader";

export const AppRouter = () => {
  return (
    <div className="page-wrapper">
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {Object.values(routeConfig).map(({ path, element }) => (
            <Route path={path} element={element} key={path} />
          ))}
        </Routes>
      </Suspense>
    </div>

  );
};
