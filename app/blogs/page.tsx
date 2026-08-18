import type { Metadata } from "next";
import SiteChrome from "@/components/SiteChrome";
import BlogPageHero from "@/components/BlogPageHero";
import BlogPageCatalog from "@/components/BlogPageCatalog";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import ServicePageConnect from "@/components/ServicePageConnect";
import { blogFaq, blogPosts, blogsPage, getFeaturedBlog } from "@/lib/blogs";
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

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/blogs",
  image: getFeaturedBlog()?.image,
  imageAlt: blogsPage.imageAlt,
});

export default function BlogsPage() {
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
      <BlogPageHero />
      <BlogPageCatalog />
      <FAQ data={blogFaq} />
      <ServicePageConnect />
    </SiteChrome>
  );
}
