import { defineRelations } from "drizzle-orm";
import * as schema from "./schema.ts";

export const relations = defineRelations(schema, (r) => ({
  users: {
    org: r.many.org({
      from: r.users.id,
      to: r.org.userId,
    }),
  },
  org: {
    user: r.one.users({
      from: r.users.id,
      to: r.org.userId,
      optional: false,
    }),
  },
}));
