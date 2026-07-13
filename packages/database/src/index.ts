import { drizzle } from "drizzle-orm/node-postgres";
import { relations } from "./relations.ts";
type CreateDatabaseOptions = {
  connectionString: string;
  maxConnections?: number;
};

export const createDatabase = ({ connectionString }: CreateDatabaseOptions) => {
  if (!connectionString) {
    throw new Error("Database connection string is required");
  }

  const db = drizzle(connectionString, { relations });

  return db;
};
