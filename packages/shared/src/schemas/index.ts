import { v } from "../lib/valibot.ts";

export const CreateContact = v.object({
  name: v.string(),
});

export const ContactSchema = CreateContact;
export const Test = v.string();
export const name = v.number();
export type ContactInput = v.InferOutput<typeof ContactSchema>;

export { v };
