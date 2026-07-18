import type { RouteObject } from "react-router";

import { redirect } from "react-router";

import AuthLayout from "@/layouts/authLayout";

export const AuthRoutes: RouteObject = {
  path: "auth",
  children: [
    {
      index: true,
      loader: () => redirect("/auth/login"),
    },
    {
      Component: AuthLayout,
      children: [
        {
          path: "login",
          lazy: async () => {
            const { default: Component } = await import("./login");
            return { Component };
          },
        },
      ],
    },
  ],
};
