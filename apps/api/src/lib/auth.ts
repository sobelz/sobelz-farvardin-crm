import { betterAuth } from "better-auth";
import { drizzleAdapter } from "@better-auth/drizzle-adapter";
import { db } from "#/db/drizzle/db";
import { organization, admin, captcha } from "better-auth/plugins";
import * as schema from "#/db/drizzle/schemas";
import env from "../config/env.ts";
export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  trustedOrigins: [env.FRONTEND_ORIGIN],
  emailAndPassword: {
    enabled: true,
    disableSignUp: true,
  },
  plugins: [
    organization(),
    admin(),
    captcha({
      provider: "cloudflare-turnstile",
      secretKey: env.CAPTCHA_SECRET_KEY,
    }),
  ],
});
