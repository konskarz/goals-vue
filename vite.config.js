import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";
import { VitePWA } from "vite-plugin-pwa";
import VitePWAConfig from "./vite.pwa.config";

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  // build: { outDir: "../goals_project/goals/static/vue", emptyOutDir: true },
  // server: { proxy: { "/api": "http://localhost:8000" } },
  plugins: [
    vue({ template: { transformAssetUrls } }),
    quasar(),
    VitePWA(VitePWAConfig),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
