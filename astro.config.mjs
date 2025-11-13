// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import expressiveCode from "astro-expressive-code";
import mdx from "@astrojs/mdx";

import icon from "astro-icon";

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
        frames: {
          terminalTitlebarBorderBottomColor: ({ theme }) =>
            theme.colors["editorGroupHeader.tabsBorder"],
        },
        borderRadius: "0.75rem",
        borderColor: ({ theme }) => theme.colors["editor.background"],
      },
    }),
    mdx(),
    icon(),
  ],
});
