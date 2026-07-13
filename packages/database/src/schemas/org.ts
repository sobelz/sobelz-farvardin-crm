import { snakeCase, uuid, text, timestamp } from "drizzle-orm/pg-core";
import { users } from "./user.ts";
export const org = snakeCase.table("org", {
  id: uuid().primaryKey().defaultRandom(),
  name: text(),
  userId: uuid()
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  createAt: timestamp(),
});
