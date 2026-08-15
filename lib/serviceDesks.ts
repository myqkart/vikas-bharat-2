import {
  grantFaq,
  grantPage,
  loanFaq,
  loanPage,
  nbfcFaq,
  nbfcPage,
  registrationFaq,
  registrationPage,
  opcFaq,
  opcPage,
  startupFaq,
  startupPage,
  certificateFaq,
  certificatePage,
  growthFaq,
  growthPage,
  maFaq,
  maPage,
  marketingFaq,
  marketingPage,
  legalFaq,
  legalPage,
  fundingFaq,
  fundingPage,
  site,
} from "@/lib/content";
import { photos } from "@/lib/photos";

type HeroData = {
  eyebrow: string;
  heading: string;
  kicker: string;
  intro: string;
  cta: string;
  imageAlt: string;
  stats: readonly { value: string; label: string }[];
};

type UnlockData = {
  eyebrow: string;
  heading: string;
  paragraphs: readonly string[];
  benefitsHeading: string;
  benefits: readonly string[];
};

type ListBlock = {
  eyebrow: string;
  heading: string;
  sub: string;
  leftHeading: string;
  rightHeading: string;
  items: readonly { title: string; text: string; icon: string }[];
};

type CardBlock = {
  eyebrow: string;
  heading: string;
  sub: string;
  items: readonly { title: string; text: string; icon: string }[];
};

type ProcessData = {
  eyebrow: string;
  heading: string;
  sub: string;
  steps: readonly { title: string; text: string }[];
};

type DocumentsData = {
  eyebrow: string;
  heading: string;
  note: string;
  items: readonly string[];
  cta: string;
};

type FaqData = {
  heading: string;
  sub: string;
  items: readonly { question: string; answer: string }[];
};

export type DeskSection =
  | { type: "categories"; data: ListBlock; sectionId?: string }
  | { type: "services"; data: CardBlock; sectionId?: string }
  | { type: "process"; data: ProcessData; sectionId?: string }
  | {
      type: "documents";
      data: DocumentsData;
      sectionId?: string;
      whatsappText?: string;
    };

export type ServiceDesk = {
  title: string;
  description: string;
  hero: {
    data: HeroData;
    images: {
      primary: string;
      secondary: string;
      circle: string;
      secondaryAlt: string;
      circleAlt: string;
    };
    whatsappText?: string;
  };
  unlock: {
    data: UnlockData;
    image?: { src: string; alt: string };
  };
  sections: DeskSection[];
  faq: FaqData;
};

const desks: Record<string, ServiceDesk> = {
  grant: {
    title: `Government Grants | ${site.companyName}`,
    description:
      "Access non-repayable government funding with specialised grants consultancy — scheme identification, eligibility, proposals, documentation and follow-up for MSMEs and startups.",
    hero: {
      data: grantPage,
      images: {
        primary: photos.serviceGrant,
        secondary: photos.schemeSeed,
        circle: photos.schemePmegp,
        secondaryAlt: "Startup seed and grant documentation",
        circleAlt: "Manufacturing unit eligible for grant support",
      },
    },
    unlock: { data: grantPage.unlock },
    sections: [
      { type: "categories", data: grantPage.categories },
      { type: "services", data: grantPage.services },
      { type: "process", data: grantPage.process },
      { type: "documents", data: grantPage.documents },
    ],
    faq: grantFaq,
  },
  loan: {
    title: `Business Loans | ${site.companyName}`,
    description:
      "Get access to government-backed loans, bank and NBFC financing, and expert financial guidance to grow your MSME or startup.",
    hero: {
      data: loanPage,
      images: {
        primary: photos.serviceLoan,
        secondary: photos.schemeMudra,
        circle: photos.schemeGuarantee,
        secondaryAlt: "MUDRA and working-capital documentation",
        circleAlt: "Collateral-free CGTMSE credit support",
      },
      whatsappText: "Hi, I want to start my business loan funding journey.",
    },
    unlock: {
      data: loanPage.unlock,
      image: {
        src: photos.aboutServiceLoans,
        alt: "Advisor matching a founder to business loan options",
      },
    },
    sections: [
      { type: "categories", data: loanPage.categories, sectionId: "loan-products" },
      { type: "services", data: loanPage.services, sectionId: "loan-why-choose" },
      { type: "process", data: loanPage.process, sectionId: "loan-process" },
      {
        type: "documents",
        data: loanPage.documents,
        sectionId: "loan-documents",
        whatsappText: "Hi, please send me the business loan documents checklist.",
      },
      { type: "categories", data: loanPage.schemes, sectionId: "loan-schemes" },
    ],
    faq: loanFaq,
  },
  nbfc: {
    title: `NBFC Financing Solutions | ${site.companyName}`,
    description:
      "Banks said no — or just too slow? Faster NBFC approvals, flexible eligibility, and specialised products from a 25+ partner network — working capital, machinery, LAP and invoice discounting.",
    hero: {
      data: nbfcPage,
      images: {
        primary: photos.aboutServiceNbf,
        secondary: photos.serviceLoan,
        circle: photos.schemeMudra,
        secondaryAlt: "Working-capital and NBFC documentation",
        circleAlt: "Faster disbursement for MSME financing",
      },
      whatsappText: "Hi, I want NBFC loan options for my business.",
    },
    unlock: {
      data: nbfcPage.unlock,
      image: {
        src: photos.aboutServiceLoans,
        alt: "Advisor matching a founder to NBFC partners",
      },
    },
    sections: [
      { type: "categories", data: nbfcPage.categories, sectionId: "nbfc-products" },
      { type: "categories", data: nbfcPage.audience, sectionId: "nbfc-audience" },
      { type: "process", data: nbfcPage.process, sectionId: "nbfc-process" },
      { type: "services", data: nbfcPage.services, sectionId: "nbfc-why-choose" },
      { type: "services", data: nbfcPage.ecosystem, sectionId: "nbfc-ecosystem" },
    ],
    faq: nbfcFaq,
  },
  registration: {
    title: `Business Registration Services | ${site.companyName}`,
    description:
      "End-to-end business registration for Private Limited, LLP, OPC and Partnership — name reservation, MCA filing, PAN, GST, Udyam and post-incorporation compliance.",
    hero: {
      data: registrationPage,
      images: {
        primary: photos.serviceRegistration,
        secondary: photos.seoCompany,
        circle: photos.aboutServiceRegistration,
        secondaryAlt: "Company incorporation and MCA documentation",
        circleAlt: "Founder completing business registration",
      },
      whatsappText: "Hi, I want to start business registration for my company.",
    },
    unlock: {
      data: registrationPage.unlock,
      image: {
        src: photos.aboutServiceRegistration,
        alt: "Advisor explaining business structure options",
      },
    },
    sections: [
      {
        type: "categories",
        data: registrationPage.categories,
        sectionId: "registration-structures",
      },
      {
        type: "services",
        data: registrationPage.services,
        sectionId: "registration-desk",
      },
      {
        type: "categories",
        data: registrationPage.eligibility,
        sectionId: "registration-eligibility",
      },
      {
        type: "process",
        data: registrationPage.process,
        sectionId: "registration-process",
      },
      {
        type: "documents",
        data: registrationPage.documents,
        sectionId: "registration-documents",
        whatsappText:
          "Hi, please send me the business registration documents checklist.",
      },
    ],
    faq: registrationFaq,
  },
  opc: {
    title: `One Person Company (OPC) | ${site.companyName}`,
    description:
      "Register a One Person Company in India with limited liability, a mandatory nominee, and end-to-end MCA filing — DSC, SPICe+, COI, PAN and TAN.",
    hero: {
      data: opcPage,
      images: {
        primary: photos.aboutServiceRegistration,
        secondary: photos.seoCompany,
        circle: photos.faqFounder,
        secondaryAlt: "MCA incorporation documents for OPC",
        circleAlt: "Solo founder registering a One Person Company",
      },
      whatsappText: "Hi, I want to check eligibility for OPC registration.",
    },
    unlock: {
      data: opcPage.unlock,
      image: {
        src: photos.faqFounder,
        alt: "Solo founder reviewing One Person Company options",
      },
    },
    sections: [
      { type: "services", data: opcPage.services, sectionId: "opc-services" },
      { type: "services", data: opcPage.drawbacks, sectionId: "opc-drawbacks" },
      {
        type: "categories",
        data: opcPage.eligibility,
        sectionId: "opc-eligibility",
      },
      { type: "categories", data: opcPage.benefits, sectionId: "opc-benefits" },
      { type: "services", data: opcPage.whyChoose, sectionId: "opc-why-choose" },
      {
        type: "services",
        data: opcPage.postIncorporation,
        sectionId: "opc-after-coi",
      },
      { type: "process", data: opcPage.process, sectionId: "opc-process" },
      {
        type: "documents",
        data: opcPage.documents,
        sectionId: "opc-documents",
        whatsappText: "Hi, please send me the OPC registration documents checklist.",
      },
    ],
    faq: opcFaq,
  },
  startup: {
    title: `Startup India Certification | ${site.companyName}`,
    description:
      "DPIIT Startup India recognition — eligibility, innovation narrative, portal filing and post-recognition guidance for 80-IAC, SISFS and government procurement.",
    hero: {
      data: startupPage,
      images: {
        primary: photos.schemeStartup,
        secondary: photos.schemeSeed,
        circle: photos.schemePitch,
        secondaryAlt: "Startup team preparing DPIIT recognition documents",
        circleAlt: "Founder pitching for Startup India recognition",
      },
      whatsappText:
        "Hi, I want to check eligibility for Startup India / DPIIT recognition.",
    },
    unlock: {
      data: startupPage.unlock,
      image: {
        src: photos.schemePitch,
        alt: "Founder reviewing Startup India recognition options",
      },
    },
    sections: [
      {
        type: "services",
        data: startupPage.services,
        sectionId: "startup-services",
      },
      {
        type: "services",
        data: startupPage.features,
        sectionId: "startup-features",
      },
      {
        type: "categories",
        data: startupPage.eligibility,
        sectionId: "startup-eligibility",
      },
      {
        type: "categories",
        data: startupPage.benefits,
        sectionId: "startup-benefits",
      },
      {
        type: "process",
        data: startupPage.process,
        sectionId: "startup-process",
      },
      {
        type: "documents",
        data: startupPage.documents,
        sectionId: "startup-documents",
        whatsappText:
          "Hi, please send me the Startup India recognition documents checklist.",
      },
    ],
    faq: startupFaq,
  },
  certificate: {
    title: `Certifications & Compliance | ${site.companyName}`,
    description:
      "End-to-end ISO 9001/14001/27001, BIS CRS and FSSAI support — accredited audits, BIS lab coordination, FoSCoS filings and post-approval surveillance.",
    hero: {
      data: certificatePage,
      images: {
        primary: photos.serviceCertificate,
        secondary: photos.aboutCertIso,
        circle: photos.aboutCertFssai,
        secondaryAlt: "ISO quality management documentation and audit pack",
        circleAlt: "FSSAI licence documents for a food business",
      },
      whatsappText:
        "Hi, I want to check eligibility for ISO, BIS CRS or FSSAI certification.",
    },
    unlock: {
      data: certificatePage.unlock,
      image: {
        src: photos.aboutCertBis,
        alt: "BIS CRS and certification files ready for lab testing",
      },
    },
    sections: [
      {
        type: "categories",
        data: certificatePage.eligibility,
        sectionId: "certificate-eligibility",
      },
      {
        type: "services",
        data: certificatePage.whyChoose,
        sectionId: "certificate-why-choose",
      },
      {
        type: "process",
        data: certificatePage.process,
        sectionId: "certificate-process",
      },
      {
        type: "documents",
        data: certificatePage.documents,
        sectionId: "certificate-documents",
        whatsappText:
          "Hi, please send me the ISO / BIS CRS / FSSAI documents checklist.",
      },
    ],
    faq: certificateFaq,
  },
  growth: {
    title: `Growth Strategy Services | ${site.companyName}`,
    description:
      "Data-driven growth strategy for startups and MSMEs — market expansion, revenue optimization, operational scaling and implementation roadmaps.",
    hero: {
      data: growthPage,
      images: {
        primary: photos.serviceGrowth,
        secondary: photos.aboutServiceMarketing,
        circle: photos.credentialGrowth,
        secondaryAlt: "Team reviewing a market expansion plan",
        circleAlt: "Founder and advisor agreeing a growth roadmap",
      },
      whatsappText:
        "Hi, I want to check eligibility for growth strategy consulting.",
    },
    unlock: {
      data: growthPage.unlock,
      image: {
        src: photos.schemePitch,
        alt: "Founder mapping growth opportunities with an advisor",
      },
    },
    sections: [
      {
        type: "categories",
        data: growthPage.eligibility,
        sectionId: "growth-eligibility",
      },
      {
        type: "services",
        data: growthPage.services,
        sectionId: "growth-services",
      },
      {
        type: "process",
        data: growthPage.process,
        sectionId: "growth-process",
      },
      {
        type: "documents",
        data: growthPage.documents,
        sectionId: "growth-documents",
        whatsappText:
          "Hi, please send me the growth strategy briefing checklist.",
      },
    ],
    faq: growthFaq,
  },
  ma: {
    title: `Mergers & Acquisitions Advisory | ${site.companyName}`,
    description:
      "Structured M&A advisory for MSMEs and startups — buy-side and sell-side, valuation, due diligence, deal structuring and 100-day integration planning.",
    hero: {
      data: maPage,
      images: {
        primary: photos.credentialGrowth,
        secondary: photos.serviceLegal,
        circle: photos.heroMeeting,
        secondaryAlt: "Legal and financial documents for an MSME transaction",
        circleAlt: "Founders reviewing an acquisition mandate",
      },
      whatsappText:
        "Hi, I want to discuss a mergers and acquisitions mandate.",
    },
    unlock: {
      data: maPage.unlock,
      image: {
        src: photos.aboutWhyDesk,
        alt: "Advisor walking an MSME founder through an M&A mandate",
      },
    },
    sections: [
      { type: "services", data: maPage.services, sectionId: "ma-services" },
      { type: "process", data: maPage.process, sectionId: "ma-process" },
    ],
    faq: maFaq,
  },
  marketing: {
    title: `Marketing & Branding Services | ${site.companyName}`,
    description:
      "Marketing and branding for MSMEs and startups — brand identity, digital strategy, content, performance campaigns, websites and measurable reporting.",
    hero: {
      data: marketingPage,
      images: {
        primary: photos.aboutServiceMarketing,
        secondary: photos.serviceGrowth,
        circle: photos.schemePitch,
        secondaryAlt: "Team reviewing a digital marketing campaign plan",
        circleAlt: "Founder aligning brand messaging with an advisor",
      },
      whatsappText:
        "Hi, I want to get started with marketing and branding services.",
    },
    unlock: {
      data: marketingPage.unlock,
      image: {
        src: photos.credentialGrowth,
        alt: "Advisor mapping brand and growth marketing for an MSME",
      },
    },
    sections: [
      {
        type: "categories",
        data: marketingPage.eligibility,
        sectionId: "marketing-eligibility",
      },
      {
        type: "services",
        data: marketingPage.services,
        sectionId: "marketing-services",
      },
      {
        type: "process",
        data: marketingPage.process,
        sectionId: "marketing-process",
      },
      {
        type: "documents",
        data: marketingPage.documents,
        sectionId: "marketing-documents",
        whatsappText:
          "Hi, please send me the marketing and branding briefing checklist.",
      },
    ],
    faq: marketingFaq,
  },
  legal: {
    title: `Legal Consultancy | ${site.companyName}`,
    description:
      "Legal consultancy for MSMEs and startups — contracts, corporate governance, HR compliance, IP, fundraising documents and ongoing regulatory support.",
    hero: {
      data: legalPage,
      images: {
        primary: photos.serviceLegal,
        secondary: photos.aboutServiceLegal,
        circle: photos.faqDocuments,
        secondaryAlt: "Corporate and contract files for MSME legal review",
        circleAlt: "Founder reviewing legal documentation with an advisor",
      },
      whatsappText:
        "Hi, I want to talk about legal consultancy for my business.",
    },
    unlock: {
      data: legalPage.unlock,
      image: {
        src: photos.seoTrademark,
        alt: "Contracts and IP papers prepared for legal review",
      },
    },
    sections: [
      { type: "services", data: legalPage.cover, sectionId: "legal-cover" },
      {
        type: "services",
        data: legalPage.services,
        sectionId: "legal-services",
      },
      {
        type: "categories",
        data: legalPage.eligibility,
        sectionId: "legal-eligibility",
      },
      {
        type: "process",
        data: legalPage.process,
        sectionId: "legal-process",
      },
      {
        type: "documents",
        data: legalPage.documents,
        sectionId: "legal-documents",
        whatsappText:
          "Hi, please send me the legal consultancy documents checklist.",
      },
    ],
    faq: legalFaq,
  },
  funding: {
    title: `Funding Instruments | ${site.companyName}`,
    description:
      "Funding instruments for startups and MSMEs — government grants, bank and NBFC debt, VC, angels and international capital, matched to structure and stage.",
    hero: {
      data: fundingPage,
      images: {
        primary: photos.serviceLoan,
        secondary: photos.schemeVc,
        circle: photos.serviceGrant,
        secondaryAlt: "Investor and founder reviewing a funding term sheet",
        circleAlt: "Government grant and scheme documents",
      },
      whatsappText:
        "Hi, I want to check which funding instruments fit my business.",
    },
    unlock: {
      data: fundingPage.unlock,
      image: {
        src: photos.aboutServiceLoans,
        alt: "Advisor mapping capital options for an MSME founder",
      },
    },
    sections: [
      { type: "services", data: fundingPage.types, sectionId: "funding-types" },
      {
        type: "services",
        data: fundingPage.government,
        sectionId: "funding-government",
      },
      {
        type: "categories",
        data: fundingPage.access,
        sectionId: "funding-access",
      },
      {
        type: "services",
        data: fundingPage.private,
        sectionId: "funding-private",
      },
      {
        type: "services",
        data: fundingPage.international,
        sectionId: "funding-international",
      },
      {
        type: "process",
        data: fundingPage.process,
        sectionId: "funding-process",
      },
    ],
    faq: fundingFaq,
  },
};

export function getServiceDesk(slug: string) {
  return desks[slug] ?? null;
}

export function getAllServiceDeskSlugs() {
  return Object.keys(desks);
}
