import { createRouter } from "../lib/create-app.ts";

const routes = [] as const;

const router = createRouter();
routes.forEach((route) => {
  router.route("", route);
});

export default router;
