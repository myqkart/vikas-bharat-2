import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteChrome from "@/components/SiteChrome";
import BlogArticlePage from "@/components/BlogArticlePage";
import FinalCTA from "@/components/FinalCTA";
import { getAllBlogSlugs, getBlogBySlug } from "@/lib/blogs";
import { site } from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: site.companyName };
  return {
    title: `${post.title} | VIKASBHART`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  return (
    <SiteChrome>
      <BlogArticlePage post={post} />
      <FinalCTA />
    </SiteChrome>
  );
}
