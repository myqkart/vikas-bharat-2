import { photos } from "@/lib/photos";
import { site } from "@/lib/content";

const office = site.offices[0];

export const careersOffice = {
  city: office.city,
  region: "Uttar Pradesh",
  postalCode: "201301",
  streetAddress: "1st floor, F-5, C Block, Sector 63",
  address: office.address,
  mapsUrl: office.mapsUrl,
  shortLabel: "Sector 63, Noida",
} as const;

const onSiteLocation = {
  location: careersOffice.address,
  locationCity: careersOffice.city,
  locationRegion: careersOffice.region,
  locationPostalCode: careersOffice.postalCode,
  locationStreet: careersOffice.streetAddress,
} as const;

export const careersPage = {
  eyebrow: "Join the desk",
  heading: "Work with Vikas Bharat",
  intro:
    "On-site openings at our Noida desk for people who can talk to MSME founders, build a loan pipeline, and keep applications moving from enquiry to disbursement.",
  locationLabel: careersOffice.shortLabel,
  mapsUrl: careersOffice.mapsUrl,
  applyEmail: site.email,
  datePosted: "2026-08-18",
  image: photos.credentialTeam,
  imageAlt: "Vikas Bharat advisors working with MSME founders",
} as const;

export type CareerRole = {
  slug: string;
  title: string;
  department: string;
  jobType: string;
  type: string;
  workMode: string;
  location: string;
  locationCity: string;
  locationRegion: string;
  locationPostalCode: string;
  locationStreet: string;
  experience: string;
  summary: string;
  overview: string;
  responsibilities: readonly string[];
  requirements: readonly string[];
  preferred?: readonly string[];
  youWillDoWell?: readonly string[];
  compensation: string;
  seoTitle: string;
  seoDescription: string;
};

export const careerRoles: readonly CareerRole[] = [
  {
    slug: "msme-loan-sales-executive",
    title: "MSME Loan Sales Executive",
    department: "Sales",
    jobType: "Sales",
    type: "Full-time",
    workMode: "On-site",
    ...onSiteLocation,
    experience: "1–3 years",
    summary:
      "Help businesses discover suitable financing — generate leads, explain MSME loan products, and convert qualified prospects into applications.",
    overview:
      "We are looking for an energetic and target-oriented MSME Loan Sales Executive to help businesses discover suitable financing solutions. The candidate will be responsible for generating leads, understanding business funding requirements, explaining loan products, coordinating with customers and internal teams, and converting qualified prospects into successful loan applications.",
    responsibilities: [
      "Generate and qualify leads for MSME and business loan products.",
      "Connect with business owners and understand their financial requirements.",
      "Explain suitable loan products, eligibility criteria, documentation, interest rates, tenure, and other relevant terms.",
      "Follow up with prospective customers through calls, WhatsApp, email, and meetings.",
      "Maintain regular communication with leads throughout the sales cycle.",
      "Coordinate with loan processing, credit, and operations teams.",
      "Collect and verify basic customer and business information.",
      "Track leads, follow-ups, conversions, and application status.",
      "Achieve monthly sales and conversion targets.",
      "Maintain accurate records in the CRM or internal sales system.",
      "Build long-term relationships with business owners and customers.",
      "Stay updated on MSME loan products, market conditions, and competitor offerings.",
    ],
    requirements: [
      "1–3 years of experience in sales, banking, NBFC, fintech, financial services, insurance, or a related field.",
      "Experience in business loans, MSME loans, personal loans, or financial products is preferred.",
      "Strong communication and interpersonal skills.",
      "Comfortable speaking with business owners and decision-makers.",
      "Good negotiation and follow-up skills.",
      "Target-oriented and self-motivated.",
      "Basic knowledge of MS Excel, CRM tools, and digital communication platforms.",
      "Ability to work independently as well as with a team.",
      "Fluency in English and Hindi; Gujarati is a strong advantage.",
    ],
    youWillDoWell: [
      "Build strong customer relationships.",
      "Convert qualified leads into applications.",
      "Maintain a consistent sales pipeline.",
      "Communicate financial products clearly and responsibly.",
      "Work toward ambitious but achievable targets.",
    ],
    compensation:
      "Competitive salary + performance-based incentives. Final compensation will depend on experience, skills, and performance.",
    seoTitle: "MSME Loan Sales Executive Jobs in Noida",
    seoDescription:
      "Join Vikas Bharat as an MSME Loan Sales Executive at our Sector 63, Noida desk. Explore the role, responsibilities, requirements, and career opportunities with our growing financial services team.",
  },
  {
    slug: "business-development-executive-msme-loans",
    title: "Business Development Executive – MSME Loans",
    department: "Business Development",
    jobType: "Business Development",
    type: "Full-time",
    workMode: "On-site",
    ...onSiteLocation,
    experience: "1–4 years",
    summary:
      "Identify MSME funding opportunities, meet entrepreneurs in the field, and convert relationships into a lasting loan pipeline.",
    overview:
      "We are looking for a Business Development Executive who can identify new business opportunities and build a strong customer pipeline for our MSME loan products. This role is ideal for someone who enjoys meeting entrepreneurs, understanding business needs, building relationships, and converting opportunities into long-term customer relationships.",
    responsibilities: [
      "Identify and develop new business opportunities in the MSME segment.",
      "Generate leads through field visits, referrals, networking, digital channels, partnerships, and other sources.",
      "Research and identify businesses that may require working capital, business expansion, equipment finance, or other funding solutions.",
      "Meet business owners and understand their financial requirements.",
      "Present appropriate loan solutions based on customer needs and eligibility.",
      "Build and maintain a healthy sales pipeline.",
      "Conduct regular follow-ups with prospective customers.",
      "Coordinate with sales, credit, operations, and loan processing teams.",
      "Assist customers throughout the loan application journey.",
      "Maintain accurate records of leads, opportunities, meetings, and conversions.",
      "Develop relationships with local business communities, accountants, consultants, and referral partners.",
      "Achieve monthly business development and revenue targets.",
      "Monitor market trends and competitor activities.",
    ],
    requirements: [
      "1–4 years of experience in business development, sales, banking, NBFC, fintech, financial services, or related industries.",
      "Experience with MSME/business loan products is preferred.",
      "Strong business communication and relationship-building skills.",
      "Confident in meeting and communicating with business owners.",
      "Strong lead-generation and negotiation abilities.",
      "Good understanding of sales funnels and conversion processes.",
      "Willingness to travel locally for client meetings when required.",
      "Self-driven, proactive, and comfortable working with targets.",
      "Fluency in English and Hindi; Gujarati is a strong advantage.",
    ],
    preferred: [
      "Existing network among MSMEs, traders, entrepreneurs, CA firms, consultants, or business communities.",
      "Experience working with financial products or lending platforms.",
    ],
    compensation:
      "Competitive salary + performance-based incentives. Final compensation will depend on experience, skills, and performance.",
    seoTitle: "Business Development Executive MSME Loans Jobs in Noida",
    seoDescription:
      "Join Vikas Bharat as a Business Development Executive for MSME loans at our Sector 63, Noida desk. Explore the role, responsibilities, requirements, and career opportunities with our growing financial services team.",
  },
  {
    slug: "loan-processing-sales-operations-executive",
    title: "Loan Processing & Sales Operations Executive",
    department: "Sales Operations",
    jobType: "Operations",
    type: "Full-time",
    workMode: "On-site",
    ...onSiteLocation,
    experience: "1–3 years",
    summary:
      "Keep MSME loan files moving — documents, follow-ups, CRM updates, and coordination from submission through processing.",
    overview:
      "We are looking for a detail-oriented Loan Processing & Sales Operations Executive to support our sales team and ensure that MSME loan applications move smoothly from initial submission to final processing. The role requires strong coordination, documentation, follow-up, and communication skills.",
    responsibilities: [
      "Coordinate with customers after lead generation and during the loan application process.",
      "Collect required customer and business documents.",
      "Review documents for completeness and basic accuracy.",
      "Maintain and update loan application records.",
      "Coordinate with sales, credit, banking partners, and internal operations teams.",
      "Track application progress from submission to approval and disbursement.",
      "Follow up with customers for pending documents and information.",
      "Follow up with relevant teams regarding application status.",
      "Identify missing or incomplete information and coordinate for resolution.",
      "Maintain accurate records of applications, documents, approvals, rejections, and disbursements.",
      "Update CRM and internal systems regularly.",
      "Prepare basic reports related to sales and loan applications.",
      "Ensure timely communication with customers regarding application requirements and status.",
      "Support the sales team with operational and administrative activities.",
      "Maintain confidentiality of customer and financial information.",
    ],
    requirements: [
      "1–3 years of experience in loan processing, sales coordination, banking, NBFC, fintech, financial services, or related operations.",
      "Experience with business/MSME loans is preferred.",
      "Strong attention to detail.",
      "Good documentation and organizational skills.",
      "Strong follow-up and coordination abilities.",
      "Comfortable working with Excel, CRM systems, email, and digital documentation.",
      "Good written and verbal communication skills.",
      "Ability to manage multiple applications and priorities simultaneously.",
      "Fluency in English and Hindi; Gujarati is a strong advantage.",
    ],
    preferred: [
      "Experience with loan applications, KYC documentation, banking processes, NBFC operations, or financial documentation.",
      "Knowledge of MSME/business loan processes.",
    ],
    compensation:
      "Competitive salary. Final compensation will depend on experience, skills, and performance.",
    seoTitle: "Loan Processing & Sales Operations Executive Jobs in Noida",
    seoDescription:
      "Join Vikas Bharat as a Loan Processing & Sales Operations Executive at our Sector 63, Noida desk. Explore the role, responsibilities, requirements, and career opportunities with our growing financial services team.",
  },
];

export type CareerRoleSlug = (typeof careerRoles)[number]["slug"];

const LEGACY_CAREER_SLUGS: Record<string, CareerRoleSlug> = {
  sales: "msme-loan-sales-executive",
  admin: "loan-processing-sales-operations-executive",
};

export const careerFaq = {
  heading: "Before you apply",
  sub: "Short answers on location, interviews and how we review resumes.",
  items: [
    {
      question: "Are these roles only in Noida?",
      answer:
        "Yes. These openings are on-site at our desk — 1st floor, F-5, C Block, Sector 63, Noida. Remote-only applications are not a fit for these roles.",
    },
    {
      question: "Do I need prior MSME loan experience?",
      answer:
        "Loan-product experience is preferred, not mandatory. Banking, NBFC, fintech, insurance or financial-services sales and operations backgrounds are a strong match.",
    },
    {
      question: "What file should I upload?",
      answer:
        "A PDF resume, up to 5 MB. DOC or DOCX is also fine. Name the file with your name.",
    },
    {
      question: "How soon will you reply?",
      answer:
        "If your profile matches, we aim to call or email within a few business days. If you do not hear back, the role may have been filled.",
    },
  ],
} as const;

export function careerPath(slug: string) {
  return `/careers/${resolveCareerSlug(slug)}`;
}

export function resolveCareerSlug(slug: string) {
  return LEGACY_CAREER_SLUGS[slug] ?? slug;
}

export function getCareerRole(slug: string) {
  const resolved = resolveCareerSlug(slug);
  return careerRoles.find((role) => role.slug === resolved) ?? null;
}

export function getAllCareerSlugs() {
  return careerRoles.map((role) => role.slug);
}

export function getRelatedCareerRoles(slug: string, limit = 2) {
  const resolved = resolveCareerSlug(slug);
  return careerRoles.filter((role) => role.slug !== resolved).slice(0, limit);
}
