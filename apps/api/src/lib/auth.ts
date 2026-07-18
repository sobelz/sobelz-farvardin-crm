import { betterAuth } from "better-auth";
import { drizzleAdapter } from "@better-auth/drizzle-adapter";
import { db } from "#/db/drizzle/db";
import { organization, admin } from "better-auth/plugins";
import * as schema from "#/db/drizzle/schemas";
export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  experimental: { joins: true },
  plugins: [organization(), admin()],
});
