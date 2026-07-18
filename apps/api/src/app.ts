import { serveStatic } from "@hono/node-server/serve-static";
import { cors } from "hono/cors";
import { requestId } from "hono/request-id";

import env from "./config/env.ts";
import createApp from "./lib/create-app.ts";
import { apiErrorHandler } from "./middlewares/apiErrorHandler.ts";
import { logger } from "./middlewares/logger.ts";
import routes from "./routes/index.ts";

const app = createApp();

app.use(
  cors({
    origin: env.FRONTEND_ORIGIN,
    credentials: true,
  }),
);

app.use("/uploads/*", serveStatic({ root: "./src" }));
const API_ROUTE_PREFIX = "/api/v1/";

export const enableRoutes = () => {
  routes.onError(apiErrorHandler);
  app.use(requestId());
  app.use(logger);
  app.basePath(API_ROUTE_PREFIX).route("/", routes);

  app.use("/*", serveStatic({ root: "./public" }));
  app.use("/*", serveStatic({ path: "./public/index.html" }));
};

export default app;
