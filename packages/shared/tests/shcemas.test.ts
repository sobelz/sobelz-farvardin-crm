import { describe, expect, it } from "vite-plus/test";
import { v } from "../src/validations/index.ts";

const NameSchema = v.object({
  name: v.pipe(v.string(), v.nonEmpty()),
});
describe("valibot test messages", () => {
  it("shuld return the correct message for empty input", () => {
    const result = v.safeParse(NameSchema, { name: "" });
    expect(result.success).toBe(false);
    expect(result.issues?.[0].message).toBe("این فیلد الزامی است.");
  });
  it("shuld return the correct message for invalid input", () => {
    const result = v.safeParse(NameSchema, { name: 123 });
    expect(result.success).toBe(false);
    expect(result.issues?.[0].message).toBe("مقدار باید متن باشد.");
  });
});
