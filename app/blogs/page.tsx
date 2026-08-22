import type { Metadata } from "next";
import SiteChrome from "@/components/SiteChrome";
import BlogPageHero from "@/components/BlogPageHero";
import BlogPageCatalog from "@/components/BlogPageCatalog";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import RelatedDesks from "@/components/RelatedDesks";
import ServicePageConnect from "@/components/ServicePageConnect";
import {
  blogFaq,
  blogListingStats,
  blogPosts,
  blogsPage,
  countByCategory,
  getFeaturedBlog,
  toListPost,
} from "@/lib/blogs";
import {
  blogPath,
  breadcrumbJsonLd,
  buildMetadata,
  faqJsonLd,
  itemListJsonLd,
  jsonLdGraph,
  webPageJsonLd,
} from "@/lib/seo";

const title = "Blogs & Guides";
const description = blogsPage.intro;
const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Blogs & Guides", path: "/blogs" },
];

export const dynamic = "force-static";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/blogs",
  image: getFeaturedBlog()?.image,
  imageAlt: blogsPage.imageAlt,
});

export default function BlogsPage() {
  const featured = getFeaturedBlog();
  return (
    <SiteChrome>
      <JsonLd
        data={jsonLdGraph([
          webPageJsonLd({
            path: "/blogs",
            title: `${title} | VIKASBHART`,
            description,
            type: "CollectionPage",
          }),
          breadcrumbJsonLd(breadcrumbs),
          faqJsonLd(blogFaq.items),
          itemListJsonLd(
            blogPosts.map((post) => ({
              name: post.title,
              path: blogPath(post.slug),
            })),
          ),
        ])}
      />
      <Breadcrumbs items={breadcrumbs} />
      <BlogPageHero stats={blogListingStats()} />
      <BlogPageCatalog
        posts={blogPosts.map(toListPost)}
        topics={countByCategory()}
        featured={featured ? toListPost(featured) : undefined}
      />
      <RelatedDesks
        heading="Visit a Desk from These Guides"
        sub="Every topic we write about maps to a live Vikas Bharat desk — read, then talk to someone."
        items={[
          {
            href: "/about",
            title: "About Us",
            text: "Who we are, the Noida walk-in desk, and how we work with founders.",
          },
          {
            href: "/contact",
            title: "Contact",
            text: "WhatsApp, call or walk in — first review is free.",
          },
          {
            href: "/services/loan",
            title: "Business Loans",
            text: "Mudra, CGTMSE and bank files handled from one desk.",
          },
          {
            href: "/scheme",
            title: "Government Schemes",
            text: "Browse subsidies and eligibility before you send documents.",
          },
        ]}
      />
      <FAQ data={blogFaq} />
      <ServicePageConnect />
    </SiteChrome>
  );
}
