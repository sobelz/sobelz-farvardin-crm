import * as v from "valibot";

export const CreateContact = v.object({
  name: v.string(),
});

export const ContactSchema = CreateContact;
export const Test = v.string();
export const name = v.number();
export type ContactInput = v.InferOutput<typeof ContactSchema>;

export const valibot = v;
