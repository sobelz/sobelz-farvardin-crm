import { v } from "@sobelz-farvardin-crm/shared/schema";

const EnvSchema = v.object({
  MODE: v.optional(
    v.pipe(v.string(), v.picklist(["development", "production", "test", "seed"])),
    "development",
  ),
  PORT: v.optional(
    v.pipe(
      v.string(),
      v.nonEmpty(),
      v.transform((value) => parseInt(value, 10)),
      v.number(),
      v.integer(),
      v.minValue(3000),
    ),
    "3000",
  ),
  DB_URL: v.pipe(v.string(), v.nonEmpty()),
  DB_NAME: v.pipe(v.string(), v.nonEmpty()),
  BETTER_AUTH_SECRET: v.pipe(v.string(), v.minLength(10), v.nonEmpty()),
});

type Env = v.InferOutput<typeof EnvSchema>;

const ENV = (): Env => {
  try {
    const env = v.parse(EnvSchema, process.env);
    return env;
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default ENV();
