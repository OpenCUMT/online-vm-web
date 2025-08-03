// @ts-check

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  base: "/vm",
  server: {
    port: 4321,
  },
  vite: {
    plugins: [
      // biome-ignore lint/suspicious/noExplicitAny: The tailwindcss plugin has type mismatches.
      tailwindcss() as any,
    ],
    server: {
      // proxy: {
      //   "/runtime": {
      //     target: "https://ctf.cumt.edu.cn/vm",
      //     changeOrigin: true,
      //     ws: true,
      //   }
      // }
    },
  },
});
