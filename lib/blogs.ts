import generatedPosts from "@/lib/generated/blog-posts.json";
import type { BlogListPost, BlogPost } from "@/lib/blogTypes";

export type { BlogBlock, BlogFaqItem, BlogListPost, BlogPost } from "@/lib/blogTypes";
export { blogFaq, blogsPage } from "@/lib/blogTypes";

export const blogPosts: readonly BlogPost[] = generatedPosts as BlogPost[];

export function toListPost(post: BlogPost): BlogListPost {
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    date: post.date,
    dateIso: post.dateIso,
    readTime: post.readTime,
    image: post.image,
    imageAlt: post.imageAlt,
    featured: post.featured,
    takeaways: post.takeaways,
    relatedHref: post.relatedHref,
    relatedLabel: post.relatedLabel,
  };
}

export const blogCategories = [
  ...new Set(blogPosts.map((post) => post.category)),
];

export function getBlogBySlug(slug: string) {
  const needle = slug.toLowerCase();
  return blogPosts.find((post) => post.slug === needle);
}

export function getAllBlogSlugs() {
  return blogPosts.map((post) => post.slug);
}

export function getFeaturedBlog() {
  return blogPosts.find((post) => post.featured) ?? blogPosts[0];
}

export function getRelatedBlogs(slug: string, limit = 3) {
  const current = getBlogBySlug(slug);
  if (!current) return blogPosts.slice(0, limit);
  const same = blogPosts.filter(
    (post) => post.slug !== slug && post.category === current.category,
  );
  const rest = blogPosts.filter(
    (post) => post.slug !== slug && post.category !== current.category,
  );
  return [...same, ...rest].slice(0, limit);
}

export function countByCategory() {
  return blogCategories
    .map((category) => ({
      category,
      count: blogPosts.filter((post) => post.category === category).length,
    }))
    .sort((a, b) => b.count - a.count || a.category.localeCompare(b.category));
}

export function blogListingStats() {
  const minutes = blogPosts.map((post) => Number.parseInt(post.readTime, 10) || 5);
  const avg = minutes.length
    ? Math.round(minutes.reduce((sum, value) => sum + value, 0) / minutes.length)
    : 5;
  return [
    { value: `${blogPosts.length}`, label: "Guides on the desk" },
    { value: `${blogCategories.length}`, label: "Topics covered" },
    { value: `${avg} min`, label: "Average read" },
    { value: "Free", label: "First consultation" },
  ] as const;
}

export function blogWordCount(post: BlogPost) {
  const chunks: string[] = [post.title, post.excerpt, ...post.takeaways];
  for (const block of post.blocks) {
    if (block.type === "p" || block.type === "h2" || block.type === "h3") chunks.push(block.text);
    if (block.type === "ul" || block.type === "ol") chunks.push(...block.items);
    if (block.type === "steps") {
      for (const item of block.items) chunks.push(item.title, item.body);
    }
    if (block.type === "callout") chunks.push(block.heading, block.text);
    if (block.type === "table") chunks.push(...block.headers, ...block.rows.flat());
    if (block.type === "cards") {
      for (const item of block.items) chunks.push(...Object.values(item));
    }
  }
  return chunks.join(" ").split(/\s+/).filter(Boolean).length;
}
