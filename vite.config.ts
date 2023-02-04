import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  appType: "spa",
  clearScreen: false,
  logLevel: "info",
  plugins: [react()],
  resolve: {
    extensions: [".mjs", ".js", ".mts", ".ts", ".jsx", ".tsx", ".json"],
  },
  server: {
    port: 8080,
    open: true,
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    sourcemap: true, // prd では不要
    emptyOutDir: true,
  },
});
