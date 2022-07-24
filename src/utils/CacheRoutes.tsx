import {
  useRoutes,
  createRoutesFromChildren,
  RouteObject,
  RoutesProps,
} from "react-router-dom";
import { Location } from "history";
import { useCreateCache } from "./CreateCache";
import React from "react";

interface CacheRouteObject extends RouteObject {
  cache?: boolean;
}

export function useCacheRoutes(
  routes: CacheRouteObject[],
  locationArg?: Partial<Location> | string
): React.ReactElement | null {
  const currentOutlet = useRoutes(routes, locationArg);

  return useCreateCache(currentOutlet);
}

export function CacheRoutes({
  children,
  location,
}: RoutesProps): React.ReactElement | null {
  return useCacheRoutes(createRoutesFromChildren(children), location);
}
