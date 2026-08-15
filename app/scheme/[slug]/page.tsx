import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteChrome from "@/components/SiteChrome";
import ServiceDeskPage from "@/components/ServiceDeskPage";
import { site } from "@/lib/content";
import {
  getAllSchemeDeskSlugs,
  getSchemeDesk,
} from "@/lib/schemeDesks";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSchemeDeskSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const desk = getSchemeDesk(slug);
  if (!desk) return { title: site.companyName };
  return { title: desk.title, description: desk.description };
}

export default async function SchemeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const desk = getSchemeDesk(slug);
  if (!desk) notFound();

  return (
    <SiteChrome>
      <ServiceDeskPage desk={desk} />
    </SiteChrome>
  );
}
