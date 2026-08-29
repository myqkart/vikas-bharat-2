import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import SiteChrome from "@/components/SiteChrome";
import { gmailComposeHref, site } from "@/lib/content";
import {
  legalContact,
  legalPaths,
  type LegalBlock,
  type LegalDocument as LegalDocumentContent,
} from "@/lib/legal";
import {
  breadcrumbJsonLd,
  jsonLdGraph,
  webPageJsonLd,
} from "@/lib/seo";

function ContactDetails() {
  return (
    <ul className="mt-3 space-y-1.5 text-sm font-semibold text-ink sm:text-base">
      <li>
        Email:{" "}
        <a
          href={gmailComposeHref(legalContact.email)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo underline-offset-2 hover:underline"
        >
          {legalContact.email}
        </a>
      </li>
      <li>
        Phone:{" "}
        <a
          href={`tel:${site.phoneNumber}`}
          className="text-indigo underline-offset-2 hover:underline"
        >
          {legalContact.phone}
        </a>
      </li>
      <li>Registered Office: {legalContact.address}</li>
    </ul>
  );
}

function Block({ block }: { block: LegalBlock }) {
  if (block.type === "p") {
    return <p>{block.text}</p>;
  }
  if (block.type === "list") {
    return (
      <ul className="list-disc space-y-2 pl-5 marker:text-marigold">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  return <ContactDetails />;
}

export default function LegalDocument({
  document,
}: {
  document: LegalDocumentContent;
}) {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: document.title, path: document.path },
  ];

  return (
    <SiteChrome>
      <JsonLd
        data={jsonLdGraph([
          webPageJsonLd({
            path: document.path,
            title: `${document.title} | VIKASBHART`,
            description: document.description,
          }),
          breadcrumbJsonLd(breadcrumbs),
        ])}
      />
      <Breadcrumbs items={breadcrumbs} />
      <article className="px-5 pb-16 pt-[max(6.5rem,calc(env(safe-area-inset-top)+4.75rem))] sm:px-8 lg:pb-24 lg:pt-32">
        <div className="mx-auto max-w-[800px]">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate">
            Legal
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl">
            {document.title}
          </h1>
          {document.intro.length > 0 ? (
            <div className="mt-6 space-y-4 text-base leading-relaxed text-charcoal sm:text-lg">
              {document.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ) : null}

          <div className="mt-10 space-y-10">
            {document.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-4 text-base leading-relaxed text-charcoal">
                  {section.blocks.map((block, index) => (
                    <Block
                      key={`${section.heading}-${block.type}-${index}`}
                      block={block}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>

          <nav
            aria-label="Other legal pages"
            className="mt-14 flex flex-wrap gap-x-5 gap-y-2 border-t border-border/70 pt-6 text-sm font-semibold text-slate"
          >
            {legalPaths.map((item) =>
              item.href === document.path ? null : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-indigo"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
        </div>
      </article>
    </SiteChrome>
  );
}
