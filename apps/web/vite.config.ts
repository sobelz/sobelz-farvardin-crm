import path from "node:path";
import { defineConfig, loadEnv } from "vite-plus";
import react from "@vitejs/plugin-react";
import { lazyPlugins } from "vite-plus";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";
import ENV from "./src/config/env.ts";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    server: {
      cors: false,
      port: ENV(env).VITE_APP_PORT,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    lint: {
      plugins: ["react", "typescript", "oxc"],
      rules: {
        "react/rules-of-hooks": "error",
        "react/only-export-components": [
          "warn",
          {
            allowConstantExport: true,
          },
        ],
        "vite-plus/prefer-vite-plus-imports": "error",
      },
      options: {
        typeAware: true,
        typeCheck: true,
      },
      jsPlugins: [
        {
          name: "vite-plus",
          specifier: "vite-plus/oxlint-plugin",
        },
      ],
    },
    plugins: lazyPlugins(() => [react(), svgr(), tailwindcss()]),
  };
});
