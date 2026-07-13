import * as v from "valibot";

export const ContactSchema = v.object({
  name: v.string(),
});
export const Test = v.string();
export const name = v.number();
export type ContactInput = v.InferOutput<typeof ContactSchema>;
