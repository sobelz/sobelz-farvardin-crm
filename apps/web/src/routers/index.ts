import { createBrowserRouter } from "react-router";

import DashboardLayout from "@/layouts/dashboard";
import { ProtectedRoute, RedirectIfIsLoggedIn } from "@/pages/auth/protected";
import { AuthRoutes } from "@/pages/auth/routes";

import App from "../App";
import { DashboardRoutes } from "@/pages/main/dashboard/route";
import { OrganizationRoutes } from "@/pages/main/organizations/route";

export default createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        Component: ProtectedRoute,
        children: [
          {
            Component: DashboardLayout,
            children: [DashboardRoutes, OrganizationRoutes],
          },
        ],
      },
      {
        Component: RedirectIfIsLoggedIn,
        children: [AuthRoutes],
      },
    ],
  },
]);
