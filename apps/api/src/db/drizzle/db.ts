import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { relations } from "./relations.ts";
import env from "../../config/env.ts";

export const db = drizzle(env.DB_URL, { relations });
