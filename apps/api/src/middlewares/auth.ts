import { createMiddleware } from "hono/factory";

import type { AuthVariables } from "../types/hono.ts";

import { auth } from "../lib/auth.ts";
import { AppError } from "../types/hono.ts";

export const authenticationMiddleware = createMiddleware<AuthVariables>(async (c, next) => {
  const userSession = await auth.api.getSession({
    headers: c.req.raw.headers,
  });

  if (!userSession) {
    throw new AppError("Unauthorized", "no-access");
  }

  c.set("session", userSession.session);
  c.set("user", userSession.user);
  return next();
});
