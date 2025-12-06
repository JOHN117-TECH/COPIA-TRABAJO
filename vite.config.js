import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  maxConcurrency: 20,
  pool: "vmThreads",
  poolOptions: {
    threads: {
      singleThread: true,
    },
  },
  isolate: false, // only safe with the poolOptions above
  css: false,
  deps: {
    optimizer: {
      web: {
        enabled: true,
      },
    },
  },
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    setupFiles: ["./vitest-setup.js"],
  },
});
