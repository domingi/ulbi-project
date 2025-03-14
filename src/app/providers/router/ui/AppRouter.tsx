import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { routeConfig } from "~/shared/config/routeConfig/routeConfig"

export const AppRouter = () => {
  return (
    <div className="page-wrapper">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {Object.values(routeConfig).map(({ path, element }) => (
            <Route path={path} element={element} key={path} />
          ))}
        </Routes>
      </Suspense>
    </div>

  );
};
