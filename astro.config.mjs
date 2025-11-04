// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import expressiveCode from "astro-expressive-code";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://aidanbuie.com",

  vite: {
    plugins: [tailwindcss()],
  },

  redirects: {
    "/posts": "/blog",
  },

  integrations: [
    expressiveCode({
      themes: ["gruvbox-dark-soft", "gruvbox-light-soft"],
      styleOverrides: {
        borderWidth: "0px",
      },
    }),
    mdx(),
  ],
});
