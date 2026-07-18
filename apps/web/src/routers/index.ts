import { createBrowserRouter } from "react-router";

import DashboardLayout from "@/layouts/dashboard";
import { ProtectedRoute, RedirectIfIsLoggedIn } from "@/pages/auth/protected";
import { AuthRoutes } from "@/pages/auth/routes";

import App from "../App";

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
            children: [],
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
