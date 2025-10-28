import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogPosts = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "src/content/blog",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updateDate: z.coerce.date().optional(),
    tags: z.array(z.string()).max(3, "Must have 3 or fewer tags."),
  }),
});

export const collections = { blogPosts };
