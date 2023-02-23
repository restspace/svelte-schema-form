import { sveltekit } from "@sveltejs/kit/vite";
import type { UserConfig } from "vite";
import path from "path";
import stdLibBrowser from "node-stdlib-browser";
import { createRequire } from "module";
import inject from "@rollup/plugin-inject";

const require = createRequire(import.meta.url);

const config: UserConfig = {
  plugins: [
    sveltekit(),
    {
      ...inject({
        global: [
          require.resolve("node-stdlib-browser/helpers/esbuild/shim"),
          "global",
        ],
        process: [
          require.resolve("node-stdlib-browser/helpers/esbuild/shim"),
          "process",
        ],
        Buffer: [
          require.resolve("node-stdlib-browser/helpers/esbuild/shim"),
          "Buffer",
        ],
      }),
      enforce: "post",
    },
  ],
  resolve: {
    alias: { ...stdLibBrowser, "svelte-schema-form": path.resolve("src/lib") },
  },
  optimizeDeps: {
    include: ["buffer", "process"],
  },
};

export default config;
