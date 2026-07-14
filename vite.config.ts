import { defineConfig } from "vite-plus";

export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt: {},
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    options: { typeAware: true, typeCheck: true },
  },
  run: {
    tasks: {
      dev: {
        command: [
          "vp run --filter @sobelz-farvardin-crm/database --filter @sobelz-farvardin-crm/shared build",
          "vp run --parallel --filter @sobelz-farvardin-crm/database --filter @sobelz-farvardin-crm/shared --filter @sobelz-farvardin-crm/api --filter @sobelz-farvardin-crm/web dev",
        ],
        cache: false,
      },

      build: {
        command: "vp run -r build",
      },

      check: {
        command: "vp check",
      },

      test: {
        command: "vp test",
      },
    },
    cache: true,
  },
});
