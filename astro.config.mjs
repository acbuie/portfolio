// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

import icon from "astro-icon";
import rehypeExternalLinks from "rehype-external-links";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

// https://astro.build/config
export default defineConfig({
  site: "https://aidanbuie.com",

  vite: {
    plugins: [tailwindcss()],
  },

  prefetch: {
    prefetchAll: true,
  },

  // redirects: {
  //   "/posts": "/blog",
  // },

  markdown: {
    shikiConfig: {
      theme: "gruvbox-dark-soft",
    },

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
          rel: "noopener noreferrer nofollow",
          properties: {
            className: "external",
          },
        },
      ],
    ],
  },

  integrations: [
    mdx(),
    icon({
      iconDir: "src/assets/icons",
    }),
  ],

  fonts: [
    {
      provider: fontProviders.local(),
      name: "Gaya",
      cssVariable: "--font-gaya",
      options: {
        variants: [
          {
            style: "normal",
            src: ["./src/assets/fonts/gaya-regular.woff2"],
          },
          {
            style: "italic",
            src: ["./src/assets/fonts/gaya-italic.woff2"],
          },
        ],
      },
    },
    {
      provider: fontProviders.fontsource(),
      name: "Encode Sans",
      cssVariable: "--font-encode-sans",
    },
  ],
});
