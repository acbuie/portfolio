// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import expressiveCode from "astro-expressive-code";
import mdx from "@astrojs/mdx";

import icon from "astro-icon";
import rehypeExternalLinks from "rehype-external-links";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

import { ExternalLinkIcon } from "./src/icons/externalLink";

// https://astro.build/config
export default defineConfig({
  site: "https://aidanbuie.com",

  vite: {
    plugins: [tailwindcss()],
  },

  redirects: {
    "/posts": "/blog",
  },

  markdown: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "append",
          content: {
            type: "text",
            value: "#",
          },
          headingProperties: {
            className: [
              "[&>a.anchor-tag]:hidden hover:[&>a.anchor-tag]:inline",
            ],
          },
          properties: {
            className: [
              "anchor-tag ml-2 text-secondary no-underline hover:underline",
            ],
          },
        },
      ],
      [
        rehypeExternalLinks,
        {
          content: () => [ExternalLinkIcon],
          // target: "_blank",
          rel: "noopener noreferrer nofollow",
          properties: {
            className: "external",
          },
          contentProperties: {
            className: "size-4 inline-block",
          },
        },
      ],
    ],
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
