import { useSelector } from "react-redux";
import {
  useLocation,
  Navigate,
} from "react-router-dom";
import { getAuthData } from "~/entities/User";
import { ROUTE_PATHS } from "~/shared/config/routeConfig/routeConfig";

export function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useSelector(getAuthData);
  const location = useLocation();

  if (!auth) {
    return <Navigate to={ROUTE_PATHS.main} state={{ from: location }} replace />;
  }

  return children;
}