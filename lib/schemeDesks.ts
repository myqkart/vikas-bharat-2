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
  sssFaq,
  sssPage,
  equityLinkedSeedFaq,
  equityLinkedSeedPage,
  evolveTechFaq,
  evolveTechPage,
  gvflFaq,
  gvflPage,
  horizonFundFaq,
  horizonFundPage,
  marineVentureFaq,
  marineVenturePage,
  matrixCapitalFaq,
  matrixCapitalPage,
  techEquityFaq,
  techEquityPage,
  udyogFundingFaq,
  udyogFundingPage,
  vcFundStFaq,
  vcFundStPage,
  ventureFundMahaFaq,
  ventureFundMahaPage,
  ventureFundingChallengeFaq,
  ventureFundingChallengePage,
  equityElevatorFaq,
  equityElevatorPage,
  deepTechFaq,
  deepTechPage,
  newVentureFaq,
  newVenturePage,
  ratanFundingFaq,
  ratanFundingPage,
  investmentReadinessFaq,
  investmentReadinessPage,
  technovibeFaq,
  technovibePage,
  ventureTechFaq,
  ventureTechPage,
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
  sss: {
    title: `Startup Support Scheme (SSS) | ${site.companyName}`,
    description:
      "Startup Support Scheme (SSS) — equity, debt or equity-linked funding from ₹25 lakh to ₹1 crore for DPIIT-recognised tech startups, with mentorship and growth support.",
    hero: {
      data: sssPage,
      images: {
        primary: photos.schemeStartup,
        secondary: photos.schemePitch,
        circle: photos.schemeSeed,
        secondaryAlt: "Founders pitching for Startup Support Scheme funding",
        circleAlt: "Early-stage startup preparing an SSS equity file",
      },
      whatsappText:
        "Hi, I want to check eligibility for the Startup Support Scheme (SSS).",
    },
    unlock: {
      data: sssPage.unlock,
      image: {
        src: photos.schemeStartup,
        alt: "Technology startup team exploring SSS equity funding",
      },
    },
    sections: [
      {
        type: "services",
        data: sssPage.benefits,
        sectionId: "sss-benefits",
      },
      {
        type: "categories",
        data: sssPage.eligibility,
        sectionId: "sss-eligibility",
      },
      { type: "process", data: sssPage.process, sectionId: "sss-process" },
      {
        type: "documents",
        data: sssPage.documents,
        sectionId: "sss-documents",
        whatsappText:
          "Hi, please send me the Startup Support Scheme (SSS) documents checklist.",
      },
    ],
    faq: sssFaq,
  },
  "equity-linked-seed": {
    title: `Equity Linked Seed Fund | ${site.companyName}`,
    description:
      "Equity Linked Seed Fund — up to ₹30 lakh grant/equity-linked support, capped ~10% stake, and pre-Series A pathways for DPIIT-recognised innovative startups.",
    hero: {
      data: equityLinkedSeedPage,
      images: {
        primary: photos.schemeSeed,
        secondary: photos.schemePitch,
        circle: photos.schemeStartup,
        secondaryAlt: "Founders pitching for Equity Linked Seed Fund support",
        circleAlt: "Startup team reviewing an equity-linked seed file",
      },
      whatsappText:
        "Hi, I want to check eligibility for the Equity Linked Seed Fund.",
    },
    unlock: {
      data: equityLinkedSeedPage.unlock,
      image: {
        src: photos.schemeSeed,
        alt: "Early-stage founders preparing an Equity Linked Seed Fund application",
      },
    },
    sections: [
      {
        type: "services",
        data: equityLinkedSeedPage.benefits,
        sectionId: "els-benefits",
      },
      {
        type: "categories",
        data: equityLinkedSeedPage.objectives,
        sectionId: "els-objectives",
      },
      {
        type: "categories",
        data: equityLinkedSeedPage.focus,
        sectionId: "els-focus",
      },
      {
        type: "categories",
        data: equityLinkedSeedPage.eligibility,
        sectionId: "els-eligibility",
      },
      {
        type: "process",
        data: equityLinkedSeedPage.process,
        sectionId: "els-process",
      },
      {
        type: "documents",
        data: equityLinkedSeedPage.documents,
        sectionId: "els-documents",
        whatsappText:
          "Hi, please send me the Equity Linked Seed Fund documents checklist.",
      },
    ],
    faq: equityLinkedSeedFaq,
  },
  "horizon-fund": {
    title: `Horizon Fund | ${site.companyName}`,
    description:
      "Horizon Fund equity investment for revenue-generating growth-stage startups, with initial and follow-up capital, mentorship and investor access.",
    hero: {
      data: horizonFundPage,
      images: { primary: photos.schemeVc, secondary: photos.schemePitch, circle: photos.schemeStartup, secondaryAlt: "Horizon Fund startup pitch", circleAlt: "Growth-stage startup team" },
      whatsappText: "Hi, I want to check eligibility for the Horizon Fund.",
    },
    unlock: { data: horizonFundPage.unlock, image: { src: photos.schemeVc, alt: "Horizon Fund growth-stage investment" } },
    sections: [
      { type: "services", data: horizonFundPage.benefits, sectionId: "horizon-benefits" },
      { type: "categories", data: horizonFundPage.eligibility, sectionId: "horizon-eligibility" },
      { type: "process", data: horizonFundPage.process, sectionId: "horizon-process" },
      { type: "documents", data: horizonFundPage.documents, sectionId: "horizon-documents", whatsappText: "Hi, please send me the Horizon Fund documents checklist." },
    ],
    faq: horizonFundFaq,
  },
  gvfl: {
    title: `GVFL Scheme | ${site.companyName}`,
    description: "GVFL equity and quasi-equity support for innovative, growth-stage businesses with scalable execution plans.",
    hero: {
      data: gvflPage,
      images: { primary: photos.credentialGrowth, secondary: photos.schemePitch, circle: photos.schemeStartup, secondaryAlt: "GVFL investment pitch", circleAlt: "GVFL startup founders" },
      whatsappText: "Hi, I want to check eligibility for GVFL funding.",
    },
    unlock: { data: gvflPage.unlock, image: { src: photos.credentialGrowth, alt: "GVFL equity funding support" } },
    sections: [
      { type: "services", data: gvflPage.benefits, sectionId: "gvfl-benefits" },
      { type: "categories", data: gvflPage.eligibility, sectionId: "gvfl-eligibility" },
      { type: "process", data: gvflPage.process, sectionId: "gvfl-process" },
      { type: "documents", data: gvflPage.documents, sectionId: "gvfl-documents", whatsappText: "Hi, please send me the GVFL documents checklist." },
    ],
    faq: gvflFaq,
  },
  "evolve-tech": {
    title: `Evolve-Tech Funding 2.0 | ${site.companyName}`,
    description: "Evolve-Tech Funding 2.0 offers seed equity capital, mentorship and investor-readiness support for MVP-stage technology startups.",
    hero: {
      data: evolveTechPage,
      images: { primary: photos.schemeStartup, secondary: photos.schemePitch, circle: photos.schemeSeed, secondaryAlt: "Evolve-Tech investor pitch", circleAlt: "Technology startup founders" },
      whatsappText: "Hi, I want to check eligibility for Evolve-Tech Funding 2.0.",
    },
    unlock: { data: evolveTechPage.unlock, image: { src: photos.schemeStartup, alt: "Evolve-Tech startup funding" } },
    sections: [
      { type: "services", data: evolveTechPage.benefits, sectionId: "evolve-tech-benefits" },
      { type: "categories", data: evolveTechPage.eligibility, sectionId: "evolve-tech-eligibility" },
      { type: "process", data: evolveTechPage.process, sectionId: "evolve-tech-process" },
      { type: "documents", data: evolveTechPage.documents, sectionId: "evolve-tech-documents", whatsappText: "Hi, please send me the Evolve-Tech Funding documents checklist." },
    ],
    faq: evolveTechFaq,
  },
  "venture-tech": {
    title: `Venture Tech Funding | ${site.companyName}`,
    description: "Chiratae Sonic Venture Tech Funding for early-stage disruptive tech startups with seed capital up to ₹18 crore.",
    hero: {
      data: ventureTechPage,
      images: { primary: photos.schemeLab, secondary: photos.schemePitch, circle: photos.schemeTech, secondaryAlt: "Venture Tech Funding founder pitch", circleAlt: "Disruptive tech startup team" },
      whatsappText: "Hi, I want to check eligibility for Venture Tech Funding.",
    },
    unlock: { data: ventureTechPage.unlock, image: { src: photos.schemeLab, alt: "Venture Tech Funding Chiratae Sonic support" } },
    sections: [
      { type: "services", data: ventureTechPage.benefits, sectionId: "venture-tech-benefits" },
      { type: "categories", data: ventureTechPage.eligibility, sectionId: "venture-tech-eligibility" },
      { type: "process", data: ventureTechPage.process, sectionId: "venture-tech-process" },
      { type: "documents", data: ventureTechPage.documents, sectionId: "venture-tech-documents", whatsappText: "Hi, please send me the Venture Tech Funding documents checklist." },
    ],
    faq: ventureTechFaq,
  },
  "marine-venture": {
    title: `Marine Venture | ${site.companyName}`,
    description: "Marine Venture provides equity-led capital, incubation and specialist mentorship for maritime, shipping and ocean-tech startups.",
    hero: {
      data: marineVenturePage,
      images: { primary: photos.schemeMarine, secondary: photos.schemePitch, circle: photos.schemeStartup, secondaryAlt: "Marine Venture maritime technology pitch", circleAlt: "Ocean-tech startup team" },
      whatsappText: "Hi, I want to check eligibility for Marine Venture.",
    },
    unlock: { data: marineVenturePage.unlock, image: { src: photos.schemeMarine, alt: "Marine Venture maritime startup support" } },
    sections: [
      { type: "services", data: marineVenturePage.benefits, sectionId: "marine-benefits" },
      { type: "categories", data: marineVenturePage.eligibility, sectionId: "marine-eligibility" },
      { type: "process", data: marineVenturePage.process, sectionId: "marine-process" },
      { type: "documents", data: marineVenturePage.documents, sectionId: "marine-documents", whatsappText: "Hi, please send me the Marine Venture documents checklist." },
    ],
    faq: marineVentureFaq,
  },
  "matrix-capital": {
    title: `Matrix Capital Fellowship | ${site.companyName}`,
    description: "Matrix Capital Fellowship offers ambitious global technology founders capital pathways, elite mentorship and investor exposure.",
    hero: {
      data: matrixCapitalPage,
      images: { primary: photos.aboutTeam, secondary: photos.schemePitch, circle: photos.schemeStartup, secondaryAlt: "Matrix Capital Fellowship founder pitch", circleAlt: "Global technology founders" },
      whatsappText: "Hi, I want to check eligibility for the Matrix Capital Fellowship.",
    },
    unlock: { data: matrixCapitalPage.unlock, image: { src: photos.aboutTeam, alt: "Matrix Capital Fellowship founder mentorship" } },
    sections: [
      { type: "services", data: matrixCapitalPage.benefits, sectionId: "matrix-benefits" },
      { type: "categories", data: matrixCapitalPage.eligibility, sectionId: "matrix-eligibility" },
      { type: "process", data: matrixCapitalPage.process, sectionId: "matrix-process" },
      { type: "documents", data: matrixCapitalPage.documents, sectionId: "matrix-documents", whatsappText: "Hi, please send me the Matrix Capital Fellowship documents checklist." },
    ],
    faq: matrixCapitalFaq,
  },
  "tech-equity": {
    title: `Tech Equity Program | ${site.companyName}`,
    description: "Global acceleration, funding and mentorship for early-stage Web3, blockchain and AI startups.",
    hero: { data: techEquityPage, images: { primary: photos.schemeLab, secondary: photos.schemePitch, circle: photos.schemeTech, secondaryAlt: "Tech Equity Program founder pitch", circleAlt: "Web3 startup team" }, whatsappText: "Hi, I want to check eligibility for the Tech Equity Program." },
    unlock: { data: techEquityPage.unlock, image: { src: photos.schemeLab, alt: "Tech Equity Program startup accelerator" } },
    sections: [{ type: "services", data: techEquityPage.benefits, sectionId: "tech-equity-benefits" }, { type: "categories", data: techEquityPage.eligibility, sectionId: "tech-equity-eligibility" }, { type: "process", data: techEquityPage.process, sectionId: "tech-equity-process" }, { type: "documents", data: techEquityPage.documents, sectionId: "tech-equity-documents", whatsappText: "Hi, please send me the Tech Equity Program documents checklist." }],
    faq: techEquityFaq,
  },
  "udyog-funding": {
    title: `Udyog Funding | ${site.companyName}`,
    description: "Global startup competition and SAFE investment pathway for founders pursuing international growth.",
    hero: { data: udyogFundingPage, images: { primary: photos.serviceGrowth, secondary: photos.schemePitch, circle: photos.schemeStartup, secondaryAlt: "Udyog Funding global pitch", circleAlt: "Global startup founders" }, whatsappText: "Hi, I want to check eligibility for Udyog Funding." },
    unlock: { data: udyogFundingPage.unlock, image: { src: photos.serviceGrowth, alt: "Udyog Funding global startup competition" } },
    sections: [{ type: "services", data: udyogFundingPage.benefits, sectionId: "udyog-benefits" }, { type: "categories", data: udyogFundingPage.eligibility, sectionId: "udyog-eligibility" }, { type: "process", data: udyogFundingPage.process, sectionId: "udyog-process" }, { type: "documents", data: udyogFundingPage.documents, sectionId: "udyog-documents", whatsappText: "Hi, please send me the Udyog Funding documents checklist." }],
    faq: udyogFundingFaq,
  },
  "vc-fund-st": {
    title: `VC Fund for ST | ${site.companyName}`,
    description: "Institutional capital and incubation support for eligible Scheduled Tribe entrepreneurs.",
    hero: { data: vcFundStPage, images: { primary: photos.schemeStandup, secondary: photos.schemePitch, circle: photos.schemeStartup, secondaryAlt: "VC Fund for ST investment pitch", circleAlt: "ST entrepreneur startup team" }, whatsappText: "Hi, I want to check eligibility for VC Fund for ST." },
    unlock: { data: vcFundStPage.unlock, image: { src: photos.schemeStandup, alt: "VC Fund for ST entrepreneur support" } },
    sections: [{ type: "services", data: vcFundStPage.benefits, sectionId: "vc-st-benefits" }, { type: "categories", data: vcFundStPage.eligibility, sectionId: "vc-st-eligibility" }, { type: "process", data: vcFundStPage.process, sectionId: "vc-st-process" }, { type: "documents", data: vcFundStPage.documents, sectionId: "vc-st-documents", whatsappText: "Hi, please send me the VC Fund for ST documents checklist." }],
    faq: vcFundStFaq,
  },
  "venture-fund": {
    title: `Venture Fund (MH) | ${site.companyName}`,
    description: "Maharashtra equity funding and institutional guidance for eligible innovation-led startups.",
    hero: { data: ventureFundMahaPage, images: { primary: photos.schemeVc, secondary: photos.schemePitch, circle: photos.schemeStartup, secondaryAlt: "Maharashtra Venture Fund pitch", circleAlt: "Maharashtra startup team" }, whatsappText: "Hi, I want to check eligibility for Venture Fund (MH)." },
    unlock: { data: ventureFundMahaPage.unlock, image: { src: photos.schemeVc, alt: "Maharashtra Venture Fund startup support" } },
    sections: [{ type: "services", data: ventureFundMahaPage.benefits, sectionId: "venture-mh-benefits" }, { type: "categories", data: ventureFundMahaPage.eligibility, sectionId: "venture-mh-eligibility" }, { type: "process", data: ventureFundMahaPage.process, sectionId: "venture-mh-process" }, { type: "documents", data: ventureFundMahaPage.documents, sectionId: "venture-mh-documents", whatsappText: "Hi, please send me the Venture Fund documents checklist." }],
    faq: ventureFundMahaFaq,
  },
  "venture-challenge": {
    title: `Venture Funding Challenge | ${site.companyName}`,
    description: "Seed capital and hybrid incubation by Shiv Nadar AIC for innovation-led Indian startups.",
    hero: { data: ventureFundingChallengePage, images: { primary: photos.credentialGrowth, secondary: photos.schemePitch, circle: photos.schemeLab, secondaryAlt: "Venture Funding Challenge pitch", circleAlt: "Incubation programme founders" }, whatsappText: "Hi, I want to check eligibility for the Venture Funding Challenge." },
    unlock: { data: ventureFundingChallengePage.unlock, image: { src: photos.credentialGrowth, alt: "Venture Funding Challenge incubation support" } },
    sections: [{ type: "services", data: ventureFundingChallengePage.benefits, sectionId: "venture-challenge-benefits" }, { type: "categories", data: ventureFundingChallengePage.eligibility, sectionId: "venture-challenge-eligibility" }, { type: "process", data: ventureFundingChallengePage.process, sectionId: "venture-challenge-process" }, { type: "documents", data: ventureFundingChallengePage.documents, sectionId: "venture-challenge-documents", whatsappText: "Hi, please send me the Venture Funding Challenge documents checklist." }],
    faq: ventureFundingChallengeFaq,
  },
  "equity-elevator": {
    title: `Equity Elevator | ${site.companyName}`,
    description: "International equity funding up to ₹4 crore with Silicon Valley mentorship for tech startups.",
    hero: { data: equityElevatorPage, images: { primary: photos.schemePitch, secondary: photos.schemeStartup, circle: photos.schemeLab, secondaryAlt: "Equity Elevator founder mentorship", circleAlt: "Tech startup acceleration team" }, whatsappText: "Hi, I want to check eligibility for Equity Elevator." },
    unlock: { data: equityElevatorPage.unlock, image: { src: photos.schemePitch, alt: "Equity Elevator international funding" } },
    sections: [{ type: "services", data: equityElevatorPage.benefits, sectionId: "equity-elevator-benefits" }, { type: "categories", data: equityElevatorPage.eligibility, sectionId: "equity-elevator-eligibility" }, { type: "process", data: equityElevatorPage.process, sectionId: "equity-elevator-process" }, { type: "documents", data: equityElevatorPage.documents, sectionId: "equity-elevator-documents", whatsappText: "Hi, please send me the Equity Elevator documents checklist." }],
    faq: equityElevatorFaq,
  },
  "deep-tech": {
    title: `Deep Tech Funding | ${site.companyName}`,
    description: "IIT Tirupati TIH deep-tech grant support up to ₹1 crore for academia–startup collaborations.",
    hero: { data: deepTechPage, images: { primary: photos.schemeLab, secondary: photos.schemeTech, circle: photos.schemeStartup, secondaryAlt: "Deep tech research collaboration", circleAlt: "Early-stage deep-tech founders" }, whatsappText: "Hi, I want to check eligibility for Deep Tech Funding." },
    unlock: { data: deepTechPage.unlock, image: { src: photos.schemeLab, alt: "Deep Tech Funding research support" } },
    sections: [{ type: "services", data: deepTechPage.benefits, sectionId: "deep-tech-benefits" }, { type: "categories", data: deepTechPage.eligibility, sectionId: "deep-tech-eligibility" }, { type: "process", data: deepTechPage.process, sectionId: "deep-tech-process" }, { type: "documents", data: deepTechPage.documents, sectionId: "deep-tech-documents", whatsappText: "Hi, please send me the Deep Tech Funding documents checklist." }],
    faq: deepTechFaq,
  },
  "new-venture": {
    title: `New Venture Program | ${site.companyName}`,
    description: "EmTek Industry 4.0 New Venture Program with funding, lab access and mentorship up to ₹30 lakh.",
    hero: { data: newVenturePage, images: { primary: photos.schemeStartup, secondary: photos.schemePitch, circle: photos.schemeLab, secondaryAlt: "New Venture Program pitch", circleAlt: "Industry 4.0 startup team" }, whatsappText: "Hi, I want to check eligibility for the New Venture Program." },
    unlock: { data: newVenturePage.unlock, image: { src: photos.schemeStartup, alt: "New Venture Program Industry 4.0 support" } },
    sections: [{ type: "services", data: newVenturePage.benefits, sectionId: "new-venture-benefits" }, { type: "categories", data: newVenturePage.eligibility, sectionId: "new-venture-eligibility" }, { type: "process", data: newVenturePage.process, sectionId: "new-venture-process" }, { type: "documents", data: newVenturePage.documents, sectionId: "new-venture-documents", whatsappText: "Hi, please send me the New Venture Program documents checklist." }],
    faq: newVentureFaq,
  },
  "ratan-funding": {
    title: `Ratan Funding | ${site.companyName}`,
    description: "Ratan Tata Innovation Hub seed support up to ₹30 lakh for validated prototype startups.",
    hero: { data: ratanFundingPage, images: { primary: photos.schemePitch, secondary: photos.schemeStartup, circle: photos.schemeSeed, secondaryAlt: "Ratan Funding founder pitch", circleAlt: "Early-stage startup founders" }, whatsappText: "Hi, I want to check eligibility for Ratan Funding." },
    unlock: { data: ratanFundingPage.unlock, image: { src: photos.schemePitch, alt: "Ratan Funding seed support" } },
    sections: [{ type: "services", data: ratanFundingPage.benefits, sectionId: "ratan-benefits" }, { type: "categories", data: ratanFundingPage.eligibility, sectionId: "ratan-eligibility" }, { type: "process", data: ratanFundingPage.process, sectionId: "ratan-process" }, { type: "documents", data: ratanFundingPage.documents, sectionId: "ratan-documents", whatsappText: "Hi, please send me the Ratan Funding documents checklist." }],
    faq: ratanFundingFaq,
  },
  "investment-readiness": {
    title: `Investment Readiness Accelerator (IRA) 2.0 | ${site.companyName}`,
    description: "ISB I-Venture IRA 2.0 prepares Seed to Series A startups for investor meetings and fundraising.",
    hero: { data: investmentReadinessPage, images: { primary: photos.schemeVc, secondary: photos.schemePitch, circle: photos.schemeStartup, secondaryAlt: "Investment readiness pitch coaching", circleAlt: "Founders preparing for Demo Day" }, whatsappText: "Hi, I want to check eligibility for IRA 2.0." },
    unlock: { data: investmentReadinessPage.unlock, image: { src: photos.schemeVc, alt: "Investment Readiness Accelerator support" } },
    sections: [{ type: "services", data: investmentReadinessPage.benefits, sectionId: "ira-benefits" }, { type: "categories", data: investmentReadinessPage.eligibility, sectionId: "ira-eligibility" }, { type: "process", data: investmentReadinessPage.process, sectionId: "ira-process" }, { type: "documents", data: investmentReadinessPage.documents, sectionId: "ira-documents", whatsappText: "Hi, please send me the IRA 2.0 documents checklist." }],
    faq: investmentReadinessFaq,
  },
  technovibe: {
    title: `TechnoVibe Funding | ${site.companyName}`,
    description: "Tiered blockchain grants up to ₹10 lakh for governance, supply chain and healthcare solutions.",
    hero: { data: technovibePage, images: { primary: photos.schemeTech, secondary: photos.schemeLab, circle: photos.schemeStartup, secondaryAlt: "Blockchain startup technical review", circleAlt: "TechnoVibe founder team" }, whatsappText: "Hi, I want to check eligibility for TechnoVibe Funding." },
    unlock: { data: technovibePage.unlock, image: { src: photos.schemeTech, alt: "TechnoVibe blockchain funding" } },
    sections: [{ type: "services", data: technovibePage.benefits, sectionId: "technovibe-benefits" }, { type: "categories", data: technovibePage.eligibility, sectionId: "technovibe-eligibility" }, { type: "process", data: technovibePage.process, sectionId: "technovibe-process" }, { type: "documents", data: technovibePage.documents, sectionId: "technovibe-documents", whatsappText: "Hi, please send me the TechnoVibe documents checklist." }],
    faq: technovibeFaq,
  },
};

desks["startup-india-seed-debt"] = desks["seed-fund"];

export function getSchemeDesk(slug: string) {
  return desks[slug] ?? null;
}

export function getAllSchemeDeskSlugs() {
  return Object.keys(desks);
}
