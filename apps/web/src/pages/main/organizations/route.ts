import type { RouteObject } from "react-router";
export const OrganizationRoutes: RouteObject = {
  path: "organizations",
  lazy: async () => {
    const { default: Component } = await import(".");
    return { Component };
  },
};
