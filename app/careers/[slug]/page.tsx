import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CareerJobPage from "@/components/CareerJobPage";
import JsonLd from "@/components/JsonLd";
import SiteChrome from "@/components/SiteChrome";
import {
  careerPath,
  careersPage,
  getAllCareerSlugs,
  getCareerRole,
} from "@/lib/careers";
import {
  breadcrumbJsonLd,
  buildMetadata,
  jobPostingJsonLd,
  jsonLdGraph,
  webPageJsonLd,
} from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllCareerSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getCareerRole(slug);
  if (!job) return { title: "Role not found", robots: { index: false } };
  return buildMetadata({
    title: job.seoTitle,
    description: job.seoDescription,
    path: careerPath(slug),
    image: careersPage.image,
    imageAlt: careersPage.imageAlt,
    keywords: [
      job.title,
      job.department,
      "Noida",
      "MSME loans",
      "Vikas Bharat careers",
    ],
  });
}

export default async function CareerRolePage({ params }: PageProps) {
  const { slug } = await params;
  const job = getCareerRole(slug);
  if (!job) notFound();

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Careers", path: "/careers" },
    { name: job.title, path: careerPath(slug) },
  ];

  return (
    <SiteChrome>
      <JsonLd
        data={jsonLdGraph([
          webPageJsonLd({
            path: careerPath(slug),
            title: `${job.seoTitle} | VIKASBHART`,
            description: job.seoDescription,
          }),
          breadcrumbJsonLd(breadcrumbs),
          jobPostingJsonLd(job),
        ])}
      />
      <Breadcrumbs items={breadcrumbs} />
      <CareerJobPage job={job} />
    </SiteChrome>
  );
}
