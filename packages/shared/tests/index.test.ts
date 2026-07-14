import { expect, test, vi } from "vite-plus/test";
import { hello } from "../src/index.ts";

test("hello logs its greeting", () => {
  const log = vi.spyOn(console, "log").mockImplementation(() => undefined);

  hello();

  expect(log).toHaveBeenCalledWith("hello");
  log.mockRestore();
});
