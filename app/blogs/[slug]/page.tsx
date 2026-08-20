import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import SiteChrome from "@/components/SiteChrome";
import BlogArticlePage from "@/components/BlogArticlePage";
import FinalCTA from "@/components/FinalCTA";
import JsonLd from "@/components/JsonLd";
import {
  blogWordCount,
  getAllBlogSlugs,
  getBlogBySlug,
  getRelatedBlogs,
  toListPost,
} from "@/lib/blogs";
import {
  SITE_NAME,
  articleJsonLd,
  blogPath,
  breadcrumbJsonLd,
  buildMetadata,
  faqJsonLd,
  jsonLdGraph,
  metaDescription,
  parseDisplayDate,
  webPageJsonLd,
} from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: "Guide not found", robots: { index: false } };
  const published = parseDisplayDate(post.date) ?? post.dateIso;
  return {
    ...buildMetadata({
      title: post.title,
      description: post.excerpt,
      path: blogPath(slug),
      image: post.image,
      imageAlt: post.imageAlt,
      type: "article",
      publishedTime: published,
      modifiedTime: published,
      keywords: [post.category, "MSME", "Vikas Bharat", "India", post.title],
    }),
    authors: [{ name: SITE_NAME }],
    category: post.category,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const description = metaDescription(post.excerpt);
  const related = getRelatedBlogs(slug, 3);
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Blogs & Guides", path: "/blogs" },
    { name: post.title, path: blogPath(slug) },
  ];

  return (
    <SiteChrome>
      <JsonLd
        data={jsonLdGraph([
          webPageJsonLd({
            path: blogPath(slug),
            title: `${post.title} | VIKASBHART`,
            description,
          }),
          breadcrumbJsonLd(breadcrumbs),
          articleJsonLd({
            slug,
            title: post.title,
            description,
            image: post.image,
            date: post.date,
            modified: post.date,
            category: post.category,
            keywords: [post.category, "MSME", "Vikas Bharat"],
            wordCount: blogWordCount(post),
          }),
          faqJsonLd(post.faqs),
        ])}
      />
      <Breadcrumbs items={breadcrumbs} />
      <BlogArticlePage post={post} related={related.map(toListPost)} />
      <FinalCTA />
    </SiteChrome>
  );
}
