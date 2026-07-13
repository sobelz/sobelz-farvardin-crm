import { snakeCase, uuid, text, timestamp } from "drizzle-orm/pg-core";
export const users = snakeCase.table("users", {
  id: uuid().primaryKey().defaultRandom(),
  fullName: text(),
  createdAt: timestamp(),
});
