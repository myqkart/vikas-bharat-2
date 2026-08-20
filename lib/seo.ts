import type { Metadata } from "next";
import { SCHEME_TO_SERVICE_PATHS } from "@/lib/canonical-routes";
import { servicePage, schemePage, site } from "@/lib/content";
import { photos } from "@/lib/photos";
import {
  getAllServiceDeskSlugs,
  getServiceDesk,
} from "@/lib/serviceDesks";
import {
  getCanonicalSchemeSlug,
  getIndexableSchemeSlugs,
  getSchemeDesk,
} from "@/lib/schemeDesks";
import {
  careerPath,
  careersOffice,
  careersPage,
  getAllCareerSlugs,
  type CareerRole,
} from "@/lib/careers";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://vikas-bharat.com"
).replace(/\/+$/, "");

export const SITE_NAME = site.companyName;
export const SITE_TAGLINE = site.tagline;
export const DEFAULT_LOCALE = "en_IN";
export const DEFAULT_LANGUAGE = "en-IN";

export const DEFAULT_TITLE =
  "VIKASBHART | Startup & MSME Consulting — Sapno Se Safalta Tak";

export const DEFAULT_DESCRIPTION =
  "Vikas Bharat helps Indian startups and MSMEs with registrations, loans, government schemes, certifications and growth advisory — Sapno Se Safalta Tak.";

export const DEFAULT_OG_IMAGE = photos.seoCompany;
export const DEFAULT_OG_ALT =
  "Vikas Bharat advisors helping Indian founders with registration, funding and government schemes";

export const BRAND_LOGO_PATH = site.logo;
export const BRAND_MARK_PATH = site.logoMark;

export { SCHEME_CANONICAL_ALIASES, SCHEME_TO_SERVICE_PATHS } from "@/lib/canonical-routes";

export const STATIC_INDEXABLE_PATHS = [
  "/",
  "/about",
  "/service",
  "/scheme",
  "/blogs",
  "/contact",
  "/careers",
] as const;

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export type RelatedLink = {
  href: string;
  title: string;
  text: string;
  image?: string;
};

const TITLE_SUFFIXES = [
  ` | ${SITE_NAME}`,
  " | VIKASBHART",
  " | Vikas Bharat",
] as const;

export function normalizePath(path: string): string {
  if (!path || path === "/") return "/";
  const trimmed = path.trim();
  const withSlash = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  const noQuery = withSlash.split("?")[0]?.split("#")[0] ?? "/";
  const collapsed = noQuery.replace(/\/{2,}/g, "/");
  if (collapsed.length > 1 && collapsed.endsWith("/")) {
    return collapsed.slice(0, -1);
  }
  return collapsed || "/";
}

export function absoluteUrl(path = "/"): string {
  const normalized = normalizePath(path);
  return normalized === "/" ? SITE_URL : `${SITE_URL}${normalized}`;
}

export function shortTitle(title: string): string {
  let value = title.replace(/\s+/g, " ").trim();
  for (const suffix of TITLE_SUFFIXES) {
    if (value.endsWith(suffix)) {
      value = value.slice(0, -suffix.length).trim();
    }
  }
  return value;
}

export function truncateMeta(value: string, max = 160): string {
  const text = value.replace(/\s+/g, " ").trim();
  if (text.length <= max) return text;
  const sliced = text.slice(0, max - 1);
  const lastSpace = sliced.lastIndexOf(" ");
  return `${(lastSpace > 80 ? sliced.slice(0, lastSpace) : sliced).trimEnd()}…`;
}

export function metaDescription(
  ...candidates: Array<string | null | undefined>
): string {
  for (const candidate of candidates) {
    if (candidate == null) continue;
    const text = String(candidate).replace(/\s+/g, " ").trim();
    if (!text || text === "undefined" || text === "null") continue;
    return truncateMeta(text);
  }
  return DEFAULT_DESCRIPTION;
}

export function metaImage(src?: string | null): string {
  if (!src || src === "undefined" || src === "null") return DEFAULT_OG_IMAGE;
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  if (src.startsWith("/")) return absoluteUrl(src);
  return DEFAULT_OG_IMAGE;
}

const MONTH_INDEX: Record<string, number> = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11,
};

export function parseDisplayDate(value: string): string | undefined {
  const text = value.trim();
  if (!text) return undefined;
  const parsed = Date.parse(text);
  if (!Number.isNaN(parsed)) return new Date(parsed).toISOString();

  const match = text.match(/^(\d{1,2})\s+([A-Za-z]{3,9})\s+(\d{4})$/);
  if (!match) return undefined;
  const day = Number(match[1]);
  const month = MONTH_INDEX[match[2].slice(0, 3).toLowerCase()];
  const year = Number(match[3]);
  if (!day || month == null || !year) return undefined;
  const date = new Date(Date.UTC(year, month, day));
  if (Number.isNaN(date.getTime())) return undefined;
  return date.toISOString();
}

export function officePostalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: careersOffice.streetAddress,
    addressLocality: careersOffice.city,
    addressRegion: careersOffice.region,
    postalCode: careersOffice.postalCode,
    addressCountry: "IN",
  };
}

type BuildMetadataInput = {
  title: string;
  description?: string | null;
  path: string;
  image?: string | null;
  imageAlt?: string | null;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  keywords?: string | string[];
  noIndex?: boolean;
  absoluteTitle?: boolean;
};

export function buildMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
  type = "website",
  publishedTime,
  modifiedTime,
  keywords,
  noIndex = false,
  absoluteTitle = false,
}: BuildMetadataInput): Metadata {
  const pageTitle = absoluteTitle ? title.trim() : shortTitle(title);
  const desc = metaDescription(description);
  const canonical = normalizePath(path);
  const ogImage = metaImage(image);
  const ogTitle = absoluteTitle ? pageTitle : `${pageTitle} | ${SITE_NAME}`;
  const ogAlt = imageAlt?.trim() || ogTitle;

  return {
    title: absoluteTitle ? { absolute: pageTitle } : pageTitle,
    description: desc,
    keywords,
    alternates: { canonical },
    robots: noIndex
      ? { index: false, follow: true }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      type,
      locale: DEFAULT_LOCALE,
      url: canonical,
      siteName: SITE_NAME,
      title: ogTitle,
      description: desc,
      images: [
        {
          url: ogImage,
          alt: ogAlt,
          width: 1200,
          height: 630,
        },
      ],
      ...(type === "article"
        ? {
            publishedTime,
            modifiedTime: modifiedTime ?? publishedTime,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: desc,
      images: [ogImage],
    },
  };
}

export function servicePath(slug: string): string {
  return `/services/${slug}`;
}

export function schemePath(slug: string): string {
  return `/scheme/${getCanonicalSchemeSlug(slug)}`;
}

export function blogPath(slug: string): string {
  return `/blogs/${slug}`;
}

export function getSchemePageHref(id: string): string | null {
  const serviceHref = SCHEME_TO_SERVICE_PATHS[id];
  if (serviceHref) return serviceHref;
  const canonical = getCanonicalSchemeSlug(id);
  if (getSchemeDesk(canonical) || getSchemeDesk(id)) return schemePath(canonical);
  return null;
}

export function getIndexableServiceSlugs(): string[] {
  return [...new Set(getAllServiceDeskSlugs())].sort();
}

export function getRelatedServiceLinks(
  slug: string,
  limit = 4,
): RelatedLink[] {
  const currentPath = servicePath(slug);
  return servicePage.catalog.items
    .filter((item) => item.href !== currentPath)
    .slice(0, limit)
    .map((item) => ({
      href: item.href,
      title: item.title,
      text: item.text,
      image: item.image,
    }));
}

export function getRelatedSchemeLinks(
  slug: string,
  limit = 4,
): RelatedLink[] {
  const canonical = getCanonicalSchemeSlug(slug);
  const items = schemePage.catalog.items;
  const current = items.find((item) => item.id === canonical || item.id === slug);
  const filters = new Set(current?.filters ?? []);
  const indexable = new Set(getIndexableSchemeSlugs());

  const scored = items
    .filter((item) => {
      const itemCanonical = getCanonicalSchemeSlug(item.id);
      return (
        indexable.has(itemCanonical) &&
        itemCanonical !== canonical &&
        !SCHEME_TO_SERVICE_PATHS[item.id]
      );
    })
    .map((item) => ({
      item,
      overlap: item.filters.filter((filter) => filters.has(filter)).length,
      featured: "featured" in item && item.featured ? 1 : 0,
    }))
    .sort((a, b) => b.overlap - a.overlap || b.featured - a.featured);

  const seen = new Set<string>();
  const related: RelatedLink[] = [];
  for (const { item } of scored) {
    const href = schemePath(item.id);
    if (seen.has(href)) continue;
    seen.add(href);
    related.push({
      href,
      title: item.title,
      text: item.text,
      image: item.image,
    });
    if (related.length >= limit) break;
  }
  return related;
}

export function getRelatedServiceLinksForScheme(slug: string): RelatedLink[] {
  const canonical = getCanonicalSchemeSlug(slug);
  const current = schemePage.catalog.items.find(
    (item) => item.id === canonical || item.id === slug,
  );
  const filters = [...(current?.filters ?? [])] as string[];
  const links: RelatedLink[] = [];

  if (filters.includes("Loan") || filters.includes("Debt")) {
    const desk = getServiceDesk("loan");
    if (desk) {
      links.push({
        href: "/services/loan",
        title: shortTitle(desk.title),
        text: desk.description,
        image: desk.hero.images.primary,
      });
    }
  }
  if (filters.includes("Grant") || filters.includes("Subsidy")) {
    const desk = getServiceDesk("grant");
    if (desk) {
      links.push({
        href: "/services/grant",
        title: shortTitle(desk.title),
        text: desk.description,
        image: desk.hero.images.primary,
      });
    }
  }
  if (filters.includes("Certificate")) {
    const desk = getServiceDesk("certificate");
    if (desk) {
      links.push({
        href: "/services/certificate",
        title: shortTitle(desk.title),
        text: desk.description,
        image: desk.hero.images.primary,
      });
    }
  }
  if (links.length === 0) {
    const desk = getServiceDesk("funding");
    if (desk) {
      links.push({
        href: "/services/funding",
        title: shortTitle(desk.title),
        text: desk.description,
        image: desk.hero.images.primary,
      });
    }
  }
  return links.slice(0, 2);
}

export function getIndexableUrls() {
  const urls = STATIC_INDEXABLE_PATHS.map((path) => absoluteUrl(path));
  for (const slug of getIndexableServiceSlugs()) {
    urls.push(absoluteUrl(servicePath(slug)));
  }
  for (const slug of getIndexableSchemeSlugs()) {
    urls.push(absoluteUrl(schemePath(slug)));
  }
  for (const slug of getAllCareerSlugs()) {
    urls.push(absoluteUrl(careerPath(slug)));
  }
  return [...new Set(urls)];
}

export function organizationJsonLd() {
  const office = site.offices[0];
  return {
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: ["Vikas Bharat", "VikasBhart"],
    legalName: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(BRAND_LOGO_PATH),
    },
    image: absoluteUrl(BRAND_MARK_PATH),
    description: DEFAULT_DESCRIPTION,
    slogan: SITE_TAGLINE,
    email: site.email,
    telephone: site.phoneNumber,
    sameAs: site.social.map((item) => item.href),
    areaServed: { "@type": "Country", name: "India" },
    hasMap: office?.mapsUrl,
    address: office ? officePostalAddress() : undefined,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: site.phoneNumber,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    inLanguage: DEFAULT_LANGUAGE,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function itemListJsonLd(
  items: Array<{ name: string; path: string }>,
) {
  if (!items.length) return null;
  return {
    "@type": "ItemList",
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };
}

export function webPageJsonLd({
  path,
  title,
  description,
  type = "WebPage",
}: {
  path: string;
  title: string;
  description: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
}) {
  return {
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: title,
    description,
    inLanguage: DEFAULT_LANGUAGE,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
  };
}

export function faqJsonLd(
  items: readonly { question: string; answer: string }[],
) {
  if (!items.length) return null;
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serviceJsonLd({
  slug,
  name,
  description,
  image,
}: {
  slug: string;
  name: string;
  description: string;
  image?: string;
}) {
  return {
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(servicePath(slug)),
    image: metaImage(image),
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "India" },
    serviceType: name,
  };
}

export function schemeServiceJsonLd({
  slug,
  name,
  description,
  image,
}: {
  slug: string;
  name: string;
  description: string;
  image?: string;
}) {
  return {
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(schemePath(slug)),
    image: metaImage(image),
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "India" },
    serviceType: "Government scheme advisory",
  };
}

export function jobPostingJsonLd(role: CareerRole) {
  return {
    "@type": "JobPosting",
    title: role.title,
    description: [role.overview, ...role.responsibilities].join(" "),
    identifier: {
      "@type": "PropertyValue",
      name: SITE_NAME,
      value: role.slug,
    },
    datePosted: careersPage.datePosted,
    employmentType: "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      sameAs: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(BRAND_LOGO_PATH),
      },
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: role.locationStreet,
        addressLocality: role.locationCity,
        addressRegion: role.locationRegion,
        postalCode: role.locationPostalCode,
        addressCountry: "IN",
      },
    },
    applicantLocationRequirements: {
      "@type": "Country",
      name: "India",
    },
    url: absoluteUrl(careerPath(role.slug)),
    directApply: true,
  };
}

export function articleJsonLd({
  slug,
  title,
  description,
  image,
  date,
}: {
  slug: string;
  title: string;
  description: string;
  image?: string;
  date?: string;
}) {
  const iso = date ? parseDisplayDate(date) : undefined;
  const imageUrl = metaImage(image);
  return {
    "@type": "Article",
    headline: title,
    description,
    url: absoluteUrl(blogPath(slug)),
    image: {
      "@type": "ImageObject",
      url: imageUrl,
    },
    datePublished: iso,
    dateModified: iso,
    author: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${absoluteUrl(blogPath(slug))}#webpage`,
    },
    inLanguage: DEFAULT_LANGUAGE,
  };
}

export function jsonLdGraph(nodes: Array<unknown>) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.filter(
      (node): node is Record<string, unknown> =>
        Boolean(node) && typeof node === "object",
    ),
  };
}
