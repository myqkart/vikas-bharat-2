import GrantPageHero from "@/components/GrantPageHero";
import GrantPageUnlock from "@/components/GrantPageUnlock";
import GrantPageCategories from "@/components/GrantPageCategories";
import GrantPageServices from "@/components/GrantPageServices";
import GrantPageProcess from "@/components/GrantPageProcess";
import GrantPageDocuments from "@/components/GrantPageDocuments";
import FAQ from "@/components/FAQ";
import RelatedDesks from "@/components/RelatedDesks";
import ServicePageConnect from "@/components/ServicePageConnect";
import type { RelatedLink } from "@/lib/seo";
import type { ServiceDesk } from "@/lib/serviceDesks";

export default function ServiceDeskPage({
  desk,
  relatedHeading,
  relatedSub,
  relatedItems = [],
}: {
  desk: ServiceDesk;
  relatedHeading?: string;
  relatedSub?: string;
  relatedItems?: RelatedLink[];
}) {
  return (
    <>
      <GrantPageHero
        data={desk.hero.data}
        images={desk.hero.images}
        whatsappText={desk.hero.whatsappText}
      />
      <GrantPageUnlock data={desk.unlock.data} image={desk.unlock.image} />
      {desk.sections.map((section) => {
        if (section.type === "categories") {
          return (
            <GrantPageCategories
              key={section.sectionId ?? section.data.heading}
              data={section.data}
              sectionId={section.sectionId}
            />
          );
        }
        if (section.type === "services") {
          return (
            <GrantPageServices
              key={section.sectionId ?? section.data.heading}
              data={section.data}
              sectionId={section.sectionId}
            />
          );
        }
        if (section.type === "process") {
          return (
            <GrantPageProcess
              key={section.sectionId ?? section.data.heading}
              data={section.data}
              sectionId={section.sectionId}
            />
          );
        }
        return (
          <GrantPageDocuments
            key={section.sectionId ?? section.data.heading}
            data={section.data}
            sectionId={section.sectionId}
            whatsappText={section.whatsappText}
          />
        );
      })}
      <FAQ data={desk.faq} />
      <RelatedDesks
        heading={relatedHeading ?? "Related desks"}
        sub={relatedSub}
        items={relatedItems}
      />
      <ServicePageConnect />
    </>
  );
}
