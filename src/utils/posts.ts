import type { CollectionEntry } from "astro:content";

export function arrangePostCollection(
  rawPosts: CollectionEntry<"blogPosts">[],
) {
  const posts = rawPosts.reduce(
    (groups: { [key: string]: CollectionEntry<"blogPosts">[] }, post) => {
      const year = post.data.pubDate.getFullYear();
      if (!groups[year]) {
        groups[year] = [];
      }
      groups[year].push(post);
      return groups;
    },
    {},
  );

  // Convert to array of objs, sorting by date
  return Object.keys(posts)
    .map((year) => {
      return {
        year,
        posts: posts[year].sort(
          (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
        ),
      };
    })
    .sort((a, b) => parseInt(b.year) - parseInt(a.year));
}

export function getTags(rawPosts: CollectionEntry<"blogPosts">[]) {
  return [...new Set(rawPosts.map((post) => post.data.tags).flat())];
}
