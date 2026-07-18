import { v } from "@sobelz-farvardin-crm/shared/validations";

const EnvSchema = v.object({
  VITE_APP_PORT: v.pipe(
    v.string(),
    v.nonEmpty(),
    v.transform((value) => parseInt(value, 10)),
    v.number(),
    v.integer(),
    v.minValue(3000),
  ),
  VITE_APP_BACKEND_URL: v.pipe(v.string(), v.url()),
  VITE_CAPTCHA_SITE_KEY: v.pipe(v.string(), v.nonEmpty()),
});

type Env = v.InferOutput<typeof EnvSchema>;

const ENV = (envs: unknown = import.meta.env): Env => {
  try {
    const env = v.parse(EnvSchema, envs);
    return env;
  } catch (error) {
    console.error(error);
    throw new Error("env error");
  }
};

export default ENV;
