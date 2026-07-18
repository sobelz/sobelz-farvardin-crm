import { v } from "../../lib/valibot.ts";

export const LoginSchema = v.object({
  email: v.pipe(v.string(), v.nonEmpty(), v.email()),
  password: v.pipe(v.string(), v.nonEmpty()),
  turnstileToken: v.pipe(v.string(), v.nonEmpty()),
});
