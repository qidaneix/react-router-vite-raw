import {
  useRoutes,
  createRoutesFromChildren,
  RouteObject,
  RoutesProps,
  matchRoutes,
  useLocation,
  UNSAFE_NavigationContext,
  UNSAFE_RouteContext,
} from "react-router-dom";
import { Location } from "history";
import { useCreateCache } from "./CreateCache";
import React from "react";

interface CacheRouteObject extends RouteObject {
  children?: CacheRouteObject[];
  cache?: boolean;
}

export function useCacheRoutes(
  routes: CacheRouteObject[],
  locationArg?: Partial<Location> | string
): React.ReactElement | null {
  const currentOutlet = useRoutes(routes, locationArg);
  const location = useLocation();
  const { basename } = React.useContext(UNSAFE_NavigationContext);
  const RouteContext = React.useContext(UNSAFE_RouteContext);
  console.log("matchRoutes", matchRoutes(routes, location, basename));
  console.log("RouteContext", RouteContext);
  return useCreateCache(currentOutlet);
}

export function CacheRoutes({
  children,
  location,
}: RoutesProps): React.ReactElement | null {
  return useCacheRoutes(createRoutesFromChildren(children), location);
}
