import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blogs";
import {
  STATIC_INDEXABLE_PATHS,
  absoluteUrl,
  blogPath,
  getIndexableServiceSlugs,
  schemePath,
  servicePath,
} from "@/lib/seo";
import { getIndexableSchemeSlugs } from "@/lib/schemeDesks";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const seen = new Set<string>();
  const entries: MetadataRoute.Sitemap = [];

  const add = (
    path: string,
    options: Pick<MetadataRoute.Sitemap[number], "changeFrequency" | "priority">,
  ) => {
    const url = absoluteUrl(path);
    if (seen.has(url)) return;
    seen.add(url);
    entries.push({ url, lastModified, ...options });
  };

  for (const path of STATIC_INDEXABLE_PATHS) {
    add(path, {
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority: path === "/" ? 1 : path === "/service" || path === "/scheme" ? 0.9 : 0.8,
    });
  }

  for (const slug of getIndexableServiceSlugs()) {
    add(servicePath(slug), { changeFrequency: "monthly", priority: 0.8 });
  }

  for (const slug of getIndexableSchemeSlugs()) {
    add(schemePath(slug), { changeFrequency: "monthly", priority: 0.75 });
  }

  for (const post of blogPosts) {
    add(blogPath(post.slug), { changeFrequency: "monthly", priority: 0.7 });
  }

  return entries;
}
