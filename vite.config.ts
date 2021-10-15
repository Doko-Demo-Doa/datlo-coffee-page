import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import ViteFonts from "vite-plugin-fonts";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/assets/css/colors";
          @import "./src/assets/css/common";
        `,
      },
    },
  },
  plugins: [
    vue(),
    ViteFonts({
      google: {
        families: [
          "Ephesis",
          "Festive",
          "Roboto",
          "Italianno",
          "Dancing Script",
          "Source Serif Pro",
        ],
      },
    }),
  ],
});
