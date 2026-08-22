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
    "On-site openings at our Noida desk across the MSME loan funnel — sales, relationships, partners, credit, processing and project delivery, from first lead to disbursement.",
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
    slug: "relationship-manager-business-loans",
    title: "Relationship Manager – Business Loans",
    department: "Relationships",
    jobType: "Relationships",
    type: "Full-time",
    workMode: "On-site",
    ...onSiteLocation,
    experience: "2–5 years",
    summary:
      "Own the customer after the first conversation — convert warm MSME leads, keep files moving, and turn disbursed loans into repeat and referral business.",
    overview:
      "We are looking for a Relationship Manager for business loans who can take qualified MSME customers from interest to application and stay with them through processing. This is a conversion and portfolio role: you already know how to talk to business owners, you follow up without being asked, and you protect the relationship after disbursement.",
    responsibilities: [
      "Take over qualified MSME and business-loan leads and convert them into complete applications.",
      "Meet or call business owners to understand working capital, expansion, machinery and cash-cycle needs.",
      "Explain product fit, eligibility, documents, tenure and next steps in plain language.",
      "Keep the customer informed while credit, operations and lenders review the file.",
      "Chase pending KYC, bank statements, GST and other documents without dropping the relationship.",
      "Build a book of MSME customers for top-up, repeat and referral business.",
      "Coordinate with sales, credit and loan processing so the file does not stall between desks.",
      "Handle post-disbursement queries and introduce the next suitable product only when it is relevant.",
      "Maintain accurate CRM notes on conversations, promises and application status.",
      "Hit conversion and portfolio-quality targets, not just raw meeting counts.",
    ],
    requirements: [
      "2–5 years in relationship management, business-loan sales, banking, NBFC or MSME-facing financial services.",
      "Comfortable owning a customer from first meeting through disbursement.",
      "Strong follow-up, negotiation and plain-language product explanation.",
      "Experience with MSME or business loan products is preferred.",
      "Willingness to meet customers at the Sector 63 desk and, when needed, at their place of business.",
      "Fluent Hindi and English. Basic Excel and CRM comfort.",
    ],
    preferred: [
      "An existing book of MSME, trader or CA relationships in Noida / NCR.",
      "Experience handing files to credit and operations without losing the customer.",
    ],
    youWillDoWell: [
      "Convert warm leads without overselling.",
      "Keep customers informed when a file is pending.",
      "Earn referrals after a clean disbursement.",
      "Work with credit and operations as one desk, not as opposing teams.",
    ],
    compensation:
      "Competitive salary + performance-based incentives. Final compensation will depend on experience, skills, and performance.",
    seoTitle: "Relationship Manager Business Loans Jobs in Noida",
    seoDescription:
      "Join Vikas Bharat as a Relationship Manager for business loans at our Sector 63, Noida desk. Convert MSME customers, own the file through processing, and grow repeat loan relationships.",
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
      "Join Vikas Bharat as a Loan Processing & Sales Operations Executive at our Sector 63, Noida desk. Keep MSME loan applications moving from documents through processing and disbursement.",
  },
  {
    slug: "credit-analyst-msme-loans",
    title: "Credit Analyst – MSME Loans",
    department: "Credit",
    jobType: "Credit",
    type: "Full-time",
    workMode: "On-site",
    ...onSiteLocation,
    experience: "1–4 years",
    summary:
      "Read the business, not only the form — assess MSME applications, flag risk, and help the desk decide what can go to a lender with a straight face.",
    overview:
      "We are looking for a Credit Analyst for MSME loans who can review applications, bank statements, GST, bureau data and a simple business story, then write a clear view for the team. You are not a sales closer. You protect file quality so that what we send to banks and NBFCs is honest, complete and defensible.",
    responsibilities: [
      "Assess MSME and business-loan applications for eligibility, capacity and basic risk.",
      "Review KYC, Udyam, GST returns, bank statements, bureau reports and use-of-funds notes.",
      "Identify missing, inconsistent or high-risk information and send a precise query list.",
      "Prepare a short credit note: strengths, concerns, recommended structure or decline rationale.",
      "Coordinate with sales, relationship managers and loan processing without delaying the file.",
      "Stay current on product eligibility, lender grids and scheme-linked loan conditions we actually use.",
      "Flag cases that need a senior review instead of pushing a weak file forward.",
      "Maintain confidential, accurate records of assessments and decisions.",
      "Support the desk with simple portfolio observations — repeat delays, document gaps, common decline reasons.",
      "Never invent eligibility. If the unit does not fit, say so early.",
    ],
    requirements: [
      "1–4 years in credit, underwriting, loan operations, banking, NBFC or MSME financial analysis.",
      "Comfort reading bank statements, GST and basic financials for small businesses.",
      "Strong attention to detail and written English for credit notes.",
      "Ability to explain a yes/no in plain language to a sales colleague.",
      "On-site at the Noida desk. Fluent Hindi and English. Strong Excel.",
    ],
    preferred: [
      "Hands-on MSME, working-capital or CGTMSE / bank-loan file experience.",
      "Familiarity with bureau reports and lender eligibility grids.",
    ],
    youWillDoWell: [
      "Spot a weak file before it wastes a lender slot.",
      "Write short, usable credit notes.",
      "Hold the line on risk without blocking every case.",
      "Work with sales as a partner, not as a wall.",
    ],
    compensation:
      "Competitive salary. Final compensation will depend on experience, skills, and performance.",
    seoTitle: "Credit Analyst MSME Loans Jobs in Noida",
    seoDescription:
      "Join Vikas Bharat as a Credit Analyst for MSME loans at our Sector 63, Noida desk. Assess applications, bank statements and GST, and write a clear credit view before files go to lenders.",
  },
  {
    slug: "channel-partner-executive-msme-loans",
    title: "Channel Partner Executive – MSME Loans",
    department: "Partnerships",
    jobType: "Partnerships",
    type: "Full-time",
    workMode: "On-site",
    ...onSiteLocation,
    experience: "1–4 years",
    summary:
      "Build a partner desk — DSAs, CAs, consultants and referral sources who send MSME loan cases, then keep those relationships active.",
    overview:
      "We are looking for a Channel Partner Executive who can find, onboard and run a network of DSAs, chartered accountants, consultants and other referral partners for MSME loans. Direct hunting is a different role. Here you grow a channel: more good files in, fewer dead partners, clear communication on case status.",
    responsibilities: [
      "Identify and onboard DSAs, CA firms, consultants, and other MSME referral partners in Noida / NCR.",
      "Explain products, eligibility, documents and payout process so partners can brief their clients correctly.",
      "Collect partner-originated leads and convert them into complete applications with the sales and processing desks.",
      "Keep partners updated on case status, pending documents and lender decisions.",
      "Track partner productivity: who sends files, who only talks, who needs a refresh.",
      "Organise periodic partner meetings or desk visits at Sector 63.",
      "Coordinate with sales, credit and operations so partner cases are not treated as second-class files.",
      "Maintain partner records, agreements and communication logs.",
      "Protect compliance: no unofficial fees, no misleading eligibility claims through the channel.",
      "Hit channel-sourced application and conversion targets.",
    ],
    requirements: [
      "1–4 years in channel sales, DSA management, partner acquisition, banking, NBFC or MSME financial distribution.",
      "Comfortable meeting CAs, consultants and local business networks.",
      "Clear Hindi and English. Organised follow-up and CRM habits.",
      "Willingness to travel locally in Noida / NCR for partner meetings.",
      "Understanding of MSME or business-loan products is preferred.",
    ],
    preferred: [
      "An existing DSA, CA or consultant network in NCR.",
      "Experience running partner payouts or channel MIS.",
    ],
    youWillDoWell: [
      "Turn a CA introduction into a complete file.",
      "Keep partners informed without overpromising.",
      "Drop inactive partners instead of inflating the list.",
      "Bring channel cases into the same process as direct sales.",
    ],
    compensation:
      "Competitive salary + performance-based incentives. Final compensation will depend on experience, skills, and performance.",
    seoTitle: "Channel Partner Executive MSME Loans Jobs in Noida",
    seoDescription:
      "Join Vikas Bharat as a Channel Partner Executive for MSME loans at our Sector 63, Noida desk. Build DSA, CA and referral partner relationships that send complete business-loan files.",
  },
  {
    slug: "projects-manager",
    title: "Projects Manager",
    department: "Projects",
    jobType: "Projects",
    type: "Full-time",
    workMode: "On-site",
    ...onSiteLocation,
    experience: "2–5 years",
    summary:
      "Own MSME loan and scheme files as projects — timelines, owners, pending documents, and a clear path from kickoff to disbursement or a documented close.",
    overview:
      "We are looking for a Projects Manager to run MSME loan and related scheme files as live projects, not as a loose pile of WhatsApp threads. You sit between sales, relationships, credit and processing: you know who owns the next action, what is pending, and when a file is stuck. This is not a sales closer and not a credit analyst. You keep the desk honest on delivery.",
    responsibilities: [
      "Take assigned MSME loan, documentation and scheme files and run them as projects with a start, owners and a target close.",
      "Build a simple tracker: customer, product, pending documents, credit status, lender, next action and date.",
      "Run a daily or weekly desk huddle so sales, credit and processing are looking at the same list.",
      "Escalate stalled files early — missing KYC, silent customer, lender query, internal delay.",
      "Coordinate with Relationship Managers and Loan Processing so customers hear one status, not three.",
      "Protect scope: if a case needs a different product or is not eligible, get that written and closed.",
      "Prepare a short weekly MIS for the desk — inflows, pending, disbursed, declined, ageing.",
      "Standardise checklists for common file types (working capital, machinery, scheme-linked) without inventing a bureaucracy.",
      "Keep customer and partner communication professional when chasing pending items.",
      "Never promise a disbursement date the file cannot support.",
    ],
    requirements: [
      "2–5 years in project coordination, loan operations, case management, banking, NBFC, MSME consulting or a delivery-facing operations role.",
      "Comfortable running a tracker, chasing owners, and reporting status without drama.",
      "Strong written and spoken Hindi and English.",
      "Excel / Google Sheets and basic CRM discipline.",
      "On-site at the Sector 63, Noida desk. Willing to sit with walk-in files, not only a remote dashboard.",
    ],
    preferred: [
      "Hands-on MSME loan, KYC or government-scheme file experience.",
      "Experience coordinating across sales, credit and operations in a small team.",
    ],
    youWillDoWell: [
      "Turn a messy file into a dated action list.",
      "Make pending items visible instead of hoping they move.",
      "Hold the line on timelines without bullying the customer.",
      "Leave the desk with fewer surprises at month-end.",
    ],
    compensation:
      "Competitive salary. Final compensation will depend on experience, skills, and performance.",
    seoTitle: "Projects Manager MSME Loans Jobs in Noida",
    seoDescription:
      "Join Vikas Bharat as a Projects Manager at our Sector 63, Noida desk. Run MSME loan and scheme files as projects — owners, pending documents, timelines and a clean close.",
  },
];

export type CareerRoleSlug = (typeof careerRoles)[number]["slug"];

const LEGACY_CAREER_SLUGS: Record<string, CareerRoleSlug> = {
  sales: "msme-loan-sales-executive",
  admin: "loan-processing-sales-operations-executive",
  relationship: "relationship-manager-business-loans",
  credit: "credit-analyst-msme-loans",
  channel: "channel-partner-executive-msme-loans",
  projects: "projects-manager",
};

export const careerFaq = {
  heading: "Before You Apply",
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
        "Loan-product experience is preferred, not mandatory. Banking, NBFC, fintech, insurance, credit, channel, project-delivery or financial-services backgrounds are a strong match.",
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
    {
      question: "How do I apply from this page?",
      answer:
        "Open the role, tap Apply, and send your resume through the form. You can also WhatsApp the desk if you want to confirm the opening is still live.",
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

export function getRelatedCareerRoles(slug: string, limit = 3) {
  const resolved = resolveCareerSlug(slug);
  return careerRoles.filter((role) => role.slug !== resolved).slice(0, limit);
}
