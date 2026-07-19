import type { RouteObject } from "react-router";
export const OrganizationRoutes: RouteObject = {
  path: "organizations",
  children: [
    {
      index: true,
      lazy: async () => {
        const { default: Component } = await import(".");
        return { Component };
      },
    },
    {
      path: "add",
      lazy: async () => {
        const { default: Component } = await import("./add");
        return { Component };
      },
    },
  ],
};
