import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        additionalData: `@use "${path.join(__dirname, "src/styles/_mantine").replace(/\\/g, "/")}" as mantine;`,
      },
    },
  },
});
