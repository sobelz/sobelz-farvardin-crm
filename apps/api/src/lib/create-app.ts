import type { Env, Hono } from "hono";

import { createFactory } from "hono/factory";

import type { AuthVariables } from "../types/hono.ts";

export const factory = createFactory<AuthVariables>();

export const createRouter = () => {
  return factory.createApp({
    strict: false,
  });
};

export const createGroupRoutes = <T extends Env>(path: string, router: Hono<T>) => {
  const h = createRouter();
  return h.route(path, router);
};

const createApp = () => {
  const app = createRouter();
  return app;
};

export default createApp;
