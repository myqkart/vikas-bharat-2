import {
  ahidfFaq,
  ahidfPage,
  cgssFaq,
  cgssPage,
  cgtmseFaq,
  cgtmsePage,
  naifFaq,
  naifPage,
  pmegpFaq,
  pmegpPage,
  sisfsFaq,
  sisfsPage,
  ublFaq,
  ublPage,
  rdifFaq,
  rdifPage,
  site,
} from "@/lib/content";
import { photos } from "@/lib/photos";
import type { ServiceDesk } from "@/lib/serviceDesks";

const desks: Record<string, ServiceDesk> = {
  naif: {
    title: `NAIF Scheme (AIF) | ${site.companyName}`,
    description:
      "Agriculture Infrastructure Fund (AIF / NAIF) — loans up to ₹2 Crore per project, 3% interest subvention for 7 years, and 100% CGTMSE cover for post-harvest agri infrastructure.",
    hero: {
      data: naifPage,
      images: {
        primary: photos.schemeAgri,
        secondary: photos.schemeHorticulture,
        circle: photos.schemeGuarantee,
        secondaryAlt: "Horticulture and cold-chain infrastructure for AIF",
        circleAlt: "CGTMSE credit guarantee documents for an AIF loan",
      },
      whatsappText:
        "Hi, I want to check eligibility for the NAIF / AIF scheme.",
    },
    unlock: {
      data: naifPage.unlock,
      image: {
        src: photos.schemeAgri,
        alt: "Agri infrastructure project under the Agriculture Infrastructure Fund",
      },
    },
    sections: [
      {
        type: "services",
        data: naifPage.benefits,
        sectionId: "naif-benefits",
      },
      {
        type: "categories",
        data: naifPage.eligibility,
        sectionId: "naif-eligibility",
      },
      { type: "process", data: naifPage.process, sectionId: "naif-process" },
      {
        type: "documents",
        data: naifPage.documents,
        sectionId: "naif-documents",
        whatsappText:
          "Hi, please send me the AIF / NAIF documents and DPR checklist.",
      },
    ],
    faq: naifFaq,
  },
  cgtmse: {
    title: `CGTMSE Loan Scheme | ${site.companyName}`,
    description:
      "CGTMSE collateral-free loans for micro and small enterprises — cover up to ₹500 Lakhs, 75–85% guarantee, and hybrid security through scheduled banks.",
    hero: {
      data: cgtmsePage,
      images: {
        primary: photos.schemeGuarantee,
        secondary: photos.serviceLoan,
        circle: photos.aboutServiceLoans,
        secondaryAlt: "MSME loan documents prepared for CGTMSE cover",
        circleAlt: "Founder reviewing a collateral-free credit file",
      },
      whatsappText: "Hi, I want to apply for a CGTMSE collateral-free loan.",
    },
    unlock: {
      data: cgtmsePage.unlock,
      image: {
        src: photos.schemeGuarantee,
        alt: "Credit guarantee papers for a CGTMSE MSME loan",
      },
    },
    sections: [
      {
        type: "services",
        data: cgtmsePage.features,
        sectionId: "cgtmse-features",
      },
      {
        type: "categories",
        data: cgtmsePage.benefits,
        sectionId: "cgtmse-benefits",
      },
      {
        type: "categories",
        data: cgtmsePage.focus,
        sectionId: "cgtmse-focus",
      },
      {
        type: "categories",
        data: cgtmsePage.eligibility,
        sectionId: "cgtmse-eligibility",
      },
      {
        type: "process",
        data: cgtmsePage.process,
        sectionId: "cgtmse-process",
      },
      {
        type: "documents",
        data: cgtmsePage.documents,
        sectionId: "cgtmse-documents",
        whatsappText:
          "Hi, please send me the CGTMSE loan documents checklist.",
      },
    ],
    faq: cgtmseFaq,
  },
  pmegp: {
    title: `PMEGP Scheme | ${site.companyName}`,
    description:
      "Prime Minister's Employment Generation Programme — up to 35% subsidy for new manufacturing and service units, implemented through KVIC, KVIBs and DICs.",
    hero: {
      data: pmegpPage,
      images: {
        primary: photos.schemePmegp,
        secondary: photos.schemeStandup,
        circle: photos.schemeGuarantee,
        secondaryAlt: "New manufacturing unit eligible for PMEGP subsidy",
        circleAlt: "Margin money and subsidy documents for PMEGP",
      },
      whatsappText: "Hi, I want to check eligibility for the PMEGP scheme.",
    },
    unlock: {
      data: pmegpPage.unlock,
      image: {
        src: photos.schemePmegp,
        alt: "Founder setting up a new unit under PMEGP",
      },
    },
    sections: [
      {
        type: "services",
        data: pmegpPage.benefits,
        sectionId: "pmegp-benefits",
      },
      {
        type: "categories",
        data: pmegpPage.eligibility,
        sectionId: "pmegp-eligibility",
      },
      { type: "process", data: pmegpPage.process, sectionId: "pmegp-process" },
      {
        type: "documents",
        data: pmegpPage.documents,
        sectionId: "pmegp-documents",
        whatsappText: "Hi, please send me the PMEGP documents checklist.",
      },
    ],
    faq: pmegpFaq,
  },
  ahidf: {
    title: `AHIDF Scheme | ${site.companyName}`,
    description:
      "Animal Husbandry Infrastructure Development Fund — up to 90% loan cover, 3% interest subvention for 8 years, and 25% NABARD guarantee for dairy, meat, feed and allied units.",
    hero: {
      data: ahidfPage,
      images: {
        primary: photos.schemeHorticulture,
        secondary: photos.schemeAgri,
        circle: photos.schemeGuarantee,
        secondaryAlt: "Agri and dairy infrastructure for AHIDF financing",
        circleAlt: "NABARD credit guarantee papers for an AHIDF loan",
      },
      whatsappText: "Hi, I want to check eligibility for the AHIDF scheme.",
    },
    unlock: {
      data: ahidfPage.unlock,
      image: {
        src: photos.schemeHorticulture,
        alt: "Animal husbandry infrastructure project under AHIDF",
      },
    },
    sections: [
      {
        type: "services",
        data: ahidfPage.benefits,
        sectionId: "ahidf-benefits",
      },
      {
        type: "categories",
        data: ahidfPage.eligibility,
        sectionId: "ahidf-eligibility",
      },
      { type: "process", data: ahidfPage.process, sectionId: "ahidf-process" },
      {
        type: "documents",
        data: ahidfPage.documents,
        sectionId: "ahidf-documents",
        whatsappText: "Hi, please send me the AHIDF documents checklist.",
      },
    ],
    faq: ahidfFaq,
  },
  cgss: {
    title: `CGSS Scheme | ${site.companyName}`,
    description:
      "Credit Guarantee Scheme for Startups — collateral-free loans up to ₹20 crore for DPIIT-recognised startups, with 85%/75% NCGTC cover and no equity dilution.",
    hero: {
      data: cgssPage,
      images: {
        primary: photos.schemeSeed,
        secondary: photos.schemeStartup,
        circle: photos.schemeGuarantee,
        secondaryAlt: "Startup team preparing a CGSS loan file",
        circleAlt: "NCGTC credit guarantee documents for CGSS",
      },
      whatsappText: "Hi, I want to apply for a CGSS startup loan.",
    },
    unlock: {
      data: cgssPage.unlock,
      image: {
        src: photos.schemeVc,
        alt: "Founder reviewing collateral-free CGSS debt options",
      },
    },
    sections: [
      {
        type: "services",
        data: cgssPage.benefits,
        sectionId: "cgss-benefits",
      },
      {
        type: "categories",
        data: cgssPage.features,
        sectionId: "cgss-features",
      },
      {
        type: "categories",
        data: cgssPage.focus,
        sectionId: "cgss-focus",
      },
      {
        type: "categories",
        data: cgssPage.eligibility,
        sectionId: "cgss-eligibility",
      },
      { type: "process", data: cgssPage.process, sectionId: "cgss-process" },
      {
        type: "documents",
        data: cgssPage.documents,
        sectionId: "cgss-documents",
        whatsappText: "Hi, please send me the CGSS loan documents checklist.",
      },
    ],
    faq: cgssFaq,
  },
  "seed-fund": {
    title: `Startup India Seed Fund (SISFS) | ${site.companyName}`,
    description:
      "Startup India Seed Fund Scheme — grants up to ₹20 lakh for PoC, prototype and trials, and up to ₹50 lakh as debt or convertible for market entry, via DPIIT incubators.",
    hero: {
      data: sisfsPage,
      images: {
        primary: photos.schemeSeed,
        secondary: photos.schemeStartup,
        circle: photos.schemePitch,
        secondaryAlt: "Startup team preparing a SISFS incubator application",
        circleAlt: "Founders reviewing a SISFS pitch and milestone plan",
      },
      whatsappText:
        "Hi, I want to check eligibility for the Startup India Seed Fund (SISFS).",
    },
    unlock: {
      data: sisfsPage.unlock,
      image: {
        src: photos.schemeSeed,
        alt: "Early-stage founders preparing a Startup India Seed Fund application",
      },
    },
    sections: [
      {
        type: "services",
        data: sisfsPage.whyChoose,
        sectionId: "sisfs-benefits",
      },
      {
        type: "categories",
        data: sisfsPage.eligibility,
        sectionId: "sisfs-eligibility",
      },
      { type: "process", data: sisfsPage.process, sectionId: "sisfs-process" },
      {
        type: "documents",
        data: sisfsPage.documents,
        sectionId: "sisfs-documents",
        whatsappText:
          "Hi, please send me the Startup India Seed Fund (SISFS) documents checklist.",
      },
    ],
    faq: sisfsFaq,
  },
  "unsecured-business-loan": {
    title: `Unsecured Business Loans | ${site.companyName}`,
    description:
      "Collateral-free unsecured business loans up to ₹50 Lakhs for MSMEs and startups — lender matching, documentation and fast approval without pledging assets.",
    hero: {
      data: ublPage,
      images: {
        primary: photos.serviceLoan,
        secondary: photos.aboutServiceLoans,
        circle: photos.schemeGuarantee,
        secondaryAlt: "Founder reviewing unsecured business loan options",
        circleAlt: "Credit and KYC documents for a collateral-free loan",
      },
      whatsappText:
        "Hi, I want to check eligibility for an unsecured business loan.",
    },
    unlock: {
      data: ublPage.unlock,
      image: {
        src: photos.serviceLoan,
        alt: "MSME owner preparing a collateral-free business loan application",
      },
    },
    sections: [
      {
        type: "services",
        data: ublPage.whyChoose,
        sectionId: "ubl-benefits",
      },
      {
        type: "categories",
        data: ublPage.eligibility,
        sectionId: "ubl-eligibility",
      },
      { type: "process", data: ublPage.process, sectionId: "ubl-process" },
      {
        type: "documents",
        data: ublPage.documents,
        sectionId: "ubl-documents",
        whatsappText:
          "Hi, please send me the unsecured business loan documents checklist.",
      },
    ],
    faq: ublFaq,
  },
  rdif: {
    title: `RDIF Scheme | ${site.companyName}`,
    description:
      "Research Development and Innovation Fund (RDIF) — up to 50% project cost cover, concessional 3–4% interest, and 12–15 year tenure for deep-tech and strategic R&D via DST/TDB.",
    hero: {
      data: rdifPage,
      images: {
        primary: photos.schemeLab,
        secondary: photos.schemeStartup,
        circle: photos.schemePitch,
        secondaryAlt: "Startup team preparing an RDIF R&D proposal",
        circleAlt: "Founders reviewing TRL and DPR documents for RDIF",
      },
      whatsappText: "Hi, I want to check eligibility for the RDIF Scheme.",
    },
    unlock: {
      data: rdifPage.unlock,
      image: {
        src: photos.schemeLab,
        alt: "Lab and deep-tech R&D work eligible for RDIF funding",
      },
    },
    sections: [
      {
        type: "services",
        data: rdifPage.benefits,
        sectionId: "rdif-benefits",
      },
      {
        type: "categories",
        data: rdifPage.eligibility,
        sectionId: "rdif-eligibility",
      },
      {
        type: "categories",
        data: rdifPage.focus,
        sectionId: "rdif-focus",
      },
      {
        type: "categories",
        data: rdifPage.funding,
        sectionId: "rdif-funding",
      },
      { type: "process", data: rdifPage.process, sectionId: "rdif-process" },
      {
        type: "documents",
        data: rdifPage.documents,
        sectionId: "rdif-documents",
        whatsappText: "Hi, please send me the RDIF documents and DPR checklist.",
      },
    ],
    faq: rdifFaq,
  },
};

desks["startup-india-seed-debt"] = desks["seed-fund"];

export function getSchemeDesk(slug: string) {
  return desks[slug] ?? null;
}

export function getAllSchemeDeskSlugs() {
  return Object.keys(desks);
}
