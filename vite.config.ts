import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_REPOSITORY?.split("/").pop() || "./",
  resolve: { alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }] }
});