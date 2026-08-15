import {
  grantFaq,
  grantPage,
  loanFaq,
  loanPage,
  nbfcFaq,
  nbfcPage,
  registrationFaq,
  registrationPage,
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
};

export function getServiceDesk(slug: string) {
  return desks[slug] ?? null;
}

export function getAllServiceDeskSlugs() {
  return Object.keys(desks);
}
