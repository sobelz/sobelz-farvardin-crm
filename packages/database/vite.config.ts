import { defineConfig } from "vite-plus";

export default defineConfig({
  pack: {
    exports: true,
    entry: {
      index: "src/index.ts",
      schema: "src/schema.ts",
    },
  },
  lint: {
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  fmt: {},
});
