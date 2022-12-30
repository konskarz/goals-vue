import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  // build: { outDir: "../goals_project/goals/static/vue", emptyOutDir: true },
  // server: { proxy: { "/api": "http://localhost:8000" } },
  plugins: [
    vue({ template: { transformAssetUrls } }),
    quasar(),
    VitePWA({
      // useCredentials: true,
      registerType: "autoUpdate",
      devOptions: { enabled: true },
      injectRegister: "inline",
      workbox: { globPatterns: ["**/*.{js,css,html,ico,png,svg}"] },
      includeAssets: [
        "icons/favicon.ico",
        "icons/apple-icon-120x120.png",
        "icons/safari-pinned-tab.svg",
      ],
      manifest: {
        name: "LifeTrackerBuddy",
        short_name: "goals",
        description: "An application to manage OKRs",
        theme_color: "#027be3",
        orientation: "portrait",
        background_color: "#ffffff",
        icons: [
          {
            src: "icons/icon-128x128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "icons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
