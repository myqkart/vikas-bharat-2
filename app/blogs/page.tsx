import type { Metadata } from "next";
import SiteChrome from "@/components/SiteChrome";
import BlogPageHero from "@/components/BlogPageHero";
import BlogPageCatalog from "@/components/BlogPageCatalog";
import FAQ from "@/components/FAQ";
import ServicePageConnect from "@/components/ServicePageConnect";
import { blogFaq } from "@/lib/blogs";

export const metadata: Metadata = {
  title: "Blogs & Guides | VIKASBHART",
  description:
    "Practical guides for Indian founders and MSMEs — loans, GST, Udyam, FSSAI, government schemes and compliance, explained the way we talk on a call.",
};

type PageProps = {
  searchParams: Promise<{ topic?: string }>;
};

export default async function BlogsPage({ searchParams }: PageProps) {
  const { topic } = await searchParams;

  return (
    <SiteChrome>
      <BlogPageHero />
      <BlogPageCatalog initialTopic={topic} />
      <FAQ data={blogFaq} />
      <ServicePageConnect />
    </SiteChrome>
  );
}
