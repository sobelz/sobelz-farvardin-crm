import { createRouter } from "../lib/create-app.ts";
import authRoute from "./auth.route.ts";
const routes = [authRoute] as const;

const router = createRouter();
routes.forEach((route) => {
  router.route("", route);
});

export default router;
