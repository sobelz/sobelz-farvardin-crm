import { defineConfig } from "drizzle-kit";

import env from "./src/config/env.ts";

export default defineConfig({
  out: "./src/db/drizzle/migrations",
  schema: "./src/db/drizzle/schemas.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DB_URL,
  },
  migrations: {
    table: "__drizzle_migrations__",
    schema: "migrations",
  },
  verbose: true,
});
