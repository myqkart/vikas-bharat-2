import { photos } from "./photos";

export const site = {
  companyName: "VIKASBHART",
  tagline: "Sapno Se Safalta Tak",
  logo: "/brand/vikas-bharat-logo.png",
  whatsappNumber: "91XXXXXXXXXX",
  phoneNumber: "1800-XXX-XXXX",
  email: "hello@vikasbhart.in",
  offices: [
    {
      city: "Ahmedabad",
      address: "CG Road, Navrangpura — Business desk & walk-ins",
    },
    {
      city: "Jaipur",
      address: "C-Scheme — Loans, MSME & scheme desk",
    },
    {
      city: "Delhi NCR",
      address: "Gurugram Sector 44 — Startup & compliance desk",
    },
    {
      city: "Hyderabad",
      address: "Banjara Hills — South India operations",
    },
  ] as const,
  social: [
    { label: "WhatsApp", href: "https://wa.me/91XXXXXXXXXX" },
    { label: "Instagram", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "LinkedIn", href: "#" },
  ] as const,
  resources: [
    { label: "MSME / Udyam guide", href: "/services/registration" },
    { label: "GST registration help", href: "/services/registration" },
    { label: "FSSAI licence path", href: "/services/certificate" },
  ] as const,
  disclaimer:
    "We are a private consultancy and are not affiliated with any Government department or agency. All payments must be made only to our official company account.",
} as const;

export const navigation = [
  { label: "Startup", href: "/#services", icon: "rocket", section: "services" },
  { label: "Support", href: "/#how-it-works", icon: "handshake", section: "how-it-works" },
  { label: "Growth", href: "/#stories", icon: "trending", section: "stories" },
  { label: "Sustain", href: "/#resources", icon: "shield", section: "resources" },
] as const;

export const hero = {
  eyebrow: "VIKASBHART",
  headline: "Sapno Se Safalta Tak",
  subhead:
    "We help Indian startups and MSMEs grow, succeed, and contribute to an Atmanirbhar Bharat.",
  primaryCta: "Free Check on WhatsApp",
  secondaryCta: "Call an Expert",
  image: {
    src: photos.heroShopkeeper,
    alt: "Small shop owner smiling in front of their store",
  },
  secondaryImage: {
    src: photos.heroMeeting,
    alt: "Consultant reviewing loan and scheme documents with a business owner",
  },
  floatingProof: "3,000+ businesses helped",
  microcopy: [
    "No fees for the first call",
    "Hindi & English support",
    "Pan-India desk",
  ] as const,
  benefits: [
    {
      title: "Money pathways",
      text: "Bank loans, NBFC credit, and government subsidies matched to your business type.",
    },
    {
      title: "Licences done right",
      text: "FSSAI, ISO, BIS, GST, trademark — filed with clear timelines and status updates.",
    },
    {
      title: "One desk for everything",
      text: "Registration, funding, compliance, and growth advice without juggling five agencies.",
    },
  ],
  highlights: [
    { value: "2.45L+", label: "DPIIT startups" },
    { value: "4,567", label: "80 IAC Tax Exemption" },
    { value: "₹200 Cr", label: "Startup turnover cap" },
    { value: "4 cities", label: "Office presence" },
  ],
} as const;

export const trustBadges = [
  {
    label: "MSME Registered",
    image: photos.badgeMsme,
    alt: "MSME registration certificate badge",
  },
  {
    label: "ISO 9001:2015",
    image: photos.badgeIso,
    alt: "ISO 9001:2015 quality certification badge",
  },
  {
    label: "Govt. Scheme Partner",
    image: photos.badgeGovt,
    alt: "Government scheme partner badge",
  },
  {
    label: "5.0 Google Rating",
    image: photos.badgeRating,
    alt: "5.0 star Google rating badge",
  },
] as const;

export const passbook = {
  title: "Our Ledger",
  subtitle:
    "Real outcomes from registrations, loans, and scheme filings — stamped in plain numbers so you can trust the desk before you dial.",
  body: "We track every rupee sanctioned, every licence issued, and every first reply. These figures update from live case work across Ahmedabad, Jaipur, Delhi NCR, and Hyderabad.",
  stats: [
    { value: "₹480Cr+", label: "Money Delivered", stamp: "PAID" },
    { value: "12,000+", label: "Businesses Helped", stamp: "DONE" },
    { value: "48 hrs", label: "First Reply Time", stamp: "FAST" },
    { value: "95%", label: "Applications Approved", stamp: "OK" },
  ],
  extras: [
    { label: "DPIT-recognised startups", value: "2,45,430" },
    { label: "PAN India 80 IAC tax exemption", value: "4,567" },
    { label: "Startup turnover threshold", value: "₹200 Cr" },
  ],
} as const;

/** Official Startup India / DPIIT snapshot (static public figures) */
export const startupIndia = {
  id: "startup-india",
  eyebrow: "Startup India · DPIIT",
  heading: "Recognition numbers that matter.",
  sub: "Live snapshot founders ask about first — recognition scale, tax relief, and the revised turnover ceiling.",
  notice:
    "Pursuant to DPIIT Gazette Notification 108(E) dated 4 February 2026, the turnover threshold for Startup recognition has been revised from ₹100 crore to ₹200 crore. DPIIT-recognised startups should log in to the Startup India portal and download their updated Startup Recognition certificate.",
  stats: [
    {
      value: "2,45,430",
      label: "DPIIT Recognised Startups",
      stamp: "DPIIT",
    },
    {
      value: "4,567",
      label: "80 IAC Tax Exemption",
      stamp: "TAX",
    },
    {
      value: "₹200 Cr",
      label: "Startup turnover threshold",
      stamp: "NEW",
    },
  ],
} as const;

/** MSME counts by state / UT — mapped to @svg-maps/india location ids */
export const network = {
  id: "network",
  headingLead: "We have the",
  headingStrong: "Strongest network of",
  headingAccent: "MSME guidance",
  headingEnd: "in India",
  sub: "Providing support across the nation — hover any state for MSME counts.",
  cta: "Share Your Business Plan Today",
  ctaHref: `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent("Hi, I want to share my business plan.")}`,
  moreLabel: "and 100+ more",
  totalLabel: "Total MSMEs across India",
  totalCount: 78_302_882,
  /** SVG coords on @svg-maps/india viewBox (0 0 612 696) */
  metros: [
    { id: "delhi", name: "Delhi NCR", x: 187, y: 205, office: true, label: "right" },
    { id: "jaipur", name: "Jaipur", x: 155, y: 235, office: true, label: "right" },
    { id: "ahmedabad", name: "Ahmedabad", x: 88, y: 300, office: true, label: "right" },
    { id: "mumbai", name: "Mumbai", x: 118, y: 405, office: false, label: "right" },
    { id: "hyderabad", name: "Hyderabad", x: 228, y: 455, office: true, label: "right" },
    { id: "bengaluru", name: "Bengaluru", x: 185, y: 555, office: false, label: "right" },
    { id: "chennai", name: "Chennai", x: 248, y: 585, office: false, label: "left" },
    { id: "kolkata", name: "Kolkata", x: 415, y: 320, office: false, label: "left" },
  ] as const,
  partners: [
    "MSME India",
    "Udyam",
    "Mudra",
    "PMEGP",
    "Startup India",
    "Stand-Up India",
    "GST Network",
    "FSSAI",
    "ISO",
    "BIS",
  ] as const,
  states: [
    { rank: 1, id: "mh", name: "Maharashtra", count: 10_144_478 },
    { rank: 2, id: "up", name: "Uttar Pradesh", count: 8_603_272 },
    { rank: 3, id: "tn", name: "Tamil Nadu", count: 6_227_609 },
    { rank: 4, id: "wb", name: "West Bengal", count: 5_310_326 },
    { rank: 5, id: "ka", name: "Karnataka", count: 4_991_314 },
    { rank: 6, id: "mp", name: "Madhya Pradesh", count: 4_827_725 },
    { rank: 7, id: "rj", name: "Rajasthan", count: 4_446_338 },
    { rank: 8, id: "gj", name: "Gujarat", count: 4_369_973 },
    { rank: 9, id: "br", name: "Bihar", count: 4_273_285 },
    { rank: 10, id: "ap", name: "Andhra Pradesh", count: 3_928_602 },
    { rank: 11, id: "tg", name: "Telangana", count: 3_833_083 },
    { rank: 12, id: "or", name: "Odisha", count: 2_437_145 },
    { rank: 13, id: "pb", name: "Punjab", count: 2_137_630 },
    { rank: 14, id: "hr", name: "Haryana", count: 2_018_439 },
    { rank: 15, id: "kl", name: "Kerala", count: 1_842_567 },
    { rank: 16, id: "jh", name: "Jharkhand", count: 1_558_451 },
    { rank: 17, id: "as", name: "Assam", count: 1_512_853 },
    { rank: 18, id: "dl", name: "Delhi", count: 1_468_297 },
    { rank: 19, id: "ct", name: "Chhattisgarh", count: 1_348_345 },
    { rank: 20, id: "jk", name: "Jammu & Kashmir", count: 851_815 },
    { rank: 21, id: "ut", name: "Uttarakhand", count: 649_476 },
    { rank: 22, id: "hp", name: "Himachal Pradesh", count: 343_104 },
    { rank: 23, id: "tr", name: "Tripura", count: 314_007 },
    { rank: 24, id: "mn", name: "Manipur", count: 178_102 },
    { rank: 25, id: "ga", name: "Goa", count: 130_080 },
    { rank: 26, id: "py", name: "Puducherry", count: 108_206 },
    { rank: 27, id: "ch", name: "Chandigarh", count: 81_054 },
    { rank: 28, id: "nl", name: "Nagaland", count: 74_746 },
    { rank: 29, id: "ml", name: "Meghalaya", count: 74_087 },
    { rank: 30, id: "mz", name: "Mizoram", count: 52_518 },
    { rank: 31, id: "ar", name: "Arunachal Pradesh", count: 48_870 },
    { rank: 32, id: "sk", name: "Sikkim", count: 36_269 },
    {
      rank: 33,
      id: "dn",
      name: "Dadra & Nagar Haveli and Daman & Diu",
      count: 35_889,
      aliasIds: ["dd"] as const,
    },
    { rank: 34, id: "an", name: "Andaman & Nicobar Islands", count: 22_212 },
    { rank: 35, id: "la", name: "Ladakh", count: 20_264 },
    { rank: 36, id: "ld", name: "Lakshadweep", count: 2_451 },
  ],
} as const;

export const missionTrees = {
  id: "vision",
  eyebrow: "The Ink Compass",
  heading: "Spin the seal. Lock a mandate.",
  sub: "Four living mandates orbit the VIKASBHART seal. Scroll to spin the instrument — when a ring locks at the meridian, support blooms outward from the center.",
  hubLabel: "VIKASBHART",
  hubTagline: "Sapno Se Safalta Tak",
  trees: [
    {
      id: "core-mission",
      root: "Core Mission",
      blurb: "Why we exist — Bharat-first growth for startups & MSMEs.",
      accent: "marigold" as const,
      children: [
        "Atmanirbhar Bharat",
        "MSME Empowerment",
        "Nation Building",
        "Viksit Bharat Vision",
      ],
    },
    {
      id: "funding",
      root: "Funding Assistance",
      blurb: "Money pathways we open — grants, loans, subsidies, reports.",
      accent: "success" as const,
      children: [
        "Government Grants",
        "Seed Fund Support",
        "Business Loan Assistance",
        "Subsidy Consulting",
        "Project Report Preparation",
        "Scheme Eligibility Assessment",
      ],
    },
    {
      id: "process",
      root: "Our Process",
      blurb: "How your file moves — guided, documented, on time.",
      accent: "indigo" as const,
      children: [
        "Expert Guidance",
        "End-to-End Support",
        "Documentation Assistance",
        "Dedicated Consultants",
        "Transparent Workflow",
        "Timely Execution",
      ],
    },
    {
      id: "benefits",
      root: "Key Benefits",
      blurb: "What you walk away with — credibility and sustainable growth.",
      accent: "ink" as const,
      children: [
        "Professional Credibility",
        "Economic Growth Partner",
        "Modern Corporate Tone",
        "Sustainable Business Building",
      ],
    },
  ],
} as const;

export const about = {
  id: "about",
  eyebrow: "About Bharosa",
  heading: "Built for dukaan owners, not dashboards.",
  body: "Bharosa Business Suvidha started as a walk-in help desk for first-time entrepreneurs who were stuck between bank queues, portal logins, and Hindi-English form language. Today we are a multi-city consultancy covering company incorporation, MSME/Udyam, GST, government schemes, loans, licences, and growth advisory — still explained with pictures and phone calls, not jargon.",
  mission:
    "Make capital, compliance, and licences reachable for every serious small business in India.",
  vision:
    "A Bharat where opening a shop or startup never fails because of paperwork confusion.",
  values: [
    {
      title: "Clear speech",
      text: "We explain eligibility in Hindi and English before we ask for a single document.",
    },
    {
      title: "Proof over promises",
      text: "Stamped outcomes, case timelines, and WhatsApp updates you can forward to family.",
    },
    {
      title: "No hidden desks",
      text: "One accountable team from first call to money-in-account or licence-in-hand.",
    },
    {
      title: "Respect for small scale",
      text: "Kirana, tailoring, hardware, food, and first-time founders get the same care as larger MSMEs.",
    },
  ],
  milestones: [
    { year: "2018", text: "Help desk opens in Ahmedabad for MSME filings." },
    { year: "2020", text: "Scheme matching desk screens 50+ central & state schemes." },
    { year: "2023", text: "Crossed ₹300Cr cumulative funding facilitated." },
    { year: "2026", text: "Four-city presence; 3,000+ businesses supported." },
  ],
  images: {
    team: {
      src: photos.aboutTeam,
      alt: "Bharosa consultants with small business clients",
    },
    office: {
      src: photos.aboutOffice,
      alt: "Walk-in business help desk office",
    },
    mission: {
      src: photos.aboutMission,
      alt: "Mission visual — growth for Indian MSMEs",
    },
  },
  certifications: [
    "ISO 9001:2015 process quality",
    "MSME registered consultancy",
    "Bank & NBFC partner desk",
    "Scheme documentation specialists",
  ],
} as const;

export const services = {
  eyebrow: "What We Do",
  heading: "Ek jagah, har madad.",
  sub: "Everything your business needs under one roof — registration, funding, licences, growth, and legal — with bilingual guidance and WhatsApp-first updates.",
  overview:
    "Whether you are registering a private limited company, applying for a Mudra loan, claiming a PMEGP subsidy, or renewing FSSAI, our desk maps the path, collects the right papers, and follows up with banks and portals until the outcome is real.",
  categories: [
    {
      title: "Registration & tax",
      text: "Company, LLP, proprietorship, MSME/Udyam, GST, and basic compliance calendars.",
    },
    {
      title: "Capital & schemes",
      text: "Bank/NBFC loans, collateral-light products, and central/state subsidies matched to your profile.",
    },
    {
      title: "Licences & marks",
      text: "FSSAI, ISO, BIS, trade licences, and trademark filing with clear document checklists.",
    },
  ],
  comparison: [
    {
      feature: "Document checklist in Hindi + English",
      us: true,
      diy: false,
      generic: "Sometimes",
    },
    {
      feature: "Scheme + loan match in one desk",
      us: true,
      diy: false,
      generic: false,
    },
    {
      feature: "WhatsApp status until money/licence lands",
      us: true,
      diy: false,
      generic: "Rare",
    },
    {
      feature: "Walk-in offices in 4 cities",
      us: true,
      diy: false,
      generic: false,
    },
  ],
  items: [
    {
      title: "Start a Business",
      subtitle: "Company / Dukaan register karo",
      image: photos.serviceRegistration,
      slug: "registration",
      aspectRatio: "4 / 5",
      summary:
        "Incorporate a company or LLP, register a proprietorship dukaan, get MSME/Udyam, and activate GST with a single coordinated filing plan.",
      benefits: [
        "Name approval & incorporation filing",
        "Udyam / MSME certificate for scheme eligibility",
        "GST registration with return calendar basics",
        "Bank KYC pack prepared for account opening",
      ],
      documents: [
        "PAN & Aadhaar of promoters",
        "Address proof of business premises",
        "Passport photos & specimen signatures",
        "Partnership deed / MoA-AoA drafts (as applicable)",
      ],
      timeline: "7–21 working days depending on structure",
      faqs: [
        {
          q: "Private limited vs proprietorship — which is faster?",
          a: "Proprietorship + GST is usually faster for a single-owner dukaan. Private limited suits fundraising and larger contracts.",
        },
        {
          q: "Do I need Udyam if I already have GST?",
          a: "Yes for most MSME schemes and many bank products — Udyam is the key eligibility proof.",
        },
      ],
      includes: [
        { label: "Company / dukaan register", icon: "building" as const },
        { label: "MSME / Udyam", icon: "store" as const },
        { label: "GST setup", icon: "file" as const },
      ],
    },
    {
      title: "Get a Loan",
      subtitle: "Bank se paisa dilwao",
      image: photos.serviceLoan,
      slug: "loan",
      aspectRatio: "4 / 5",
      summary:
        "We match you to Mudra, Stand-Up India, working-capital, and NBFC products — then prepare the file banks actually accept.",
      benefits: [
        "Lender shortlist based on turnover & collateral",
        "CMA / basic projections where required",
        "Application follow-up until sanction",
        "Disbursement checklist for account credit",
      ],
      documents: [
        "KYC + business registration proofs",
        "Bank statements (6–12 months)",
        "ITR / GST returns where available",
        "Quotations / project cost sheet",
      ],
      timeline: "3–8 weeks typical for MSME tickets",
      faqs: [
        {
          q: "Can I get a loan without collateral?",
          a: "Often yes under Mudra and select NBFC products — eligibility depends on business vintage and cash flows.",
        },
      ],
      includes: [
        { label: "Bank / NBFC match", icon: "rupee" as const },
        { label: "Paperwork handled", icon: "file" as const },
        { label: "Follow-up till money lands", icon: "check" as const },
      ],
    },
    {
      title: "Government Grant",
      subtitle: "Sarkar se muft paisa",
      image: photos.serviceGrant,
      slug: "grant",
      aspectRatio: "4 / 5",
      summary:
        "PMEGP, seed funds, and state subsidies — we check fit, prepare DPR-style packs, and track portal status.",
      benefits: [
        "Eligibility screen across 120+ schemes",
        "Project report support",
        "Portal filing & query handling",
        "Subsidy claim follow-up",
      ],
      documents: [
        "Udyam / business proof",
        "Project cost & quotations",
        "Own contribution proof",
        "Category certificates (if claiming reserved benefits)",
      ],
      timeline: "4–12 weeks depending on scheme queue",
      faqs: [
        {
          q: "Is subsidy free money?",
          a: "Subsidy reduces your project cost or loan burden when approved — it is not instant cash without a viable project.",
        },
      ],
      includes: [
        { label: "Scheme match", icon: "clipboard" as const },
        { label: "Application filing", icon: "file" as const },
        { label: "Subsidy follow-up", icon: "rupee" as const },
      ],
    },
    {
      title: "Licence & Certificate",
      subtitle: "FSSAI, ISO, GST wagera",
      image: photos.serviceCertificate,
      slug: "certificate",
      aspectRatio: "4 / 5",
      summary:
        "Food, quality, and trade licences that unlock marketplaces, tenders, and buyer trust.",
      benefits: [
        "FSSAI basic / state / central guidance",
        "ISO documentation coaching",
        "BIS pathway overview",
        "Trademark search & filing support",
      ],
      documents: [
        "Business identity & address proofs",
        "Product / process list",
        "Label / packaging samples (FSSAI)",
        "Quality manual inputs (ISO)",
      ],
      timeline: "1–6 weeks by licence type",
      faqs: [
        {
          q: "Do online sellers need FSSAI?",
          a: "Most food sellers do — we map the correct category before you pay any portal fee.",
        },
      ],
      includes: [
        { label: "FSSAI", icon: "check" as const },
        { label: "ISO / BIS", icon: "clipboard" as const },
        { label: "GST & trade licences", icon: "file" as const },
      ],
    },
    {
      title: "Grow Your Business",
      subtitle: "Naye customer, naya branch",
      image: photos.serviceGrowth,
      slug: "growth",
      aspectRatio: "4 / 5",
      summary:
        "Local marketing plans, branch feasibility, and funding for expansion once your core licence and GST are stable.",
      benefits: [
        "Customer acquisition playbooks for local trade",
        "Second-unit / franchise readiness check",
        "Working-capital sizing",
        "Digital listing hygiene (maps, catalogues)",
      ],
      documents: [
        "Current sales snapshot",
        "Rent / property options for expansion",
        "Staff & inventory estimates",
      ],
      timeline: "Advisory sprints of 2–4 weeks",
      faqs: [
        {
          q: "Do you run ads for me?",
          a: "We set strategy and checklists; media buying can be coordinated with your preferred vendor.",
        },
      ],
      includes: [
        { label: "Naye customers", icon: "growth" as const },
        { label: "Marketing help", icon: "handshake" as const },
        { label: "Naya branch planning", icon: "store" as const },
      ],
    },
    {
      title: "Legal Help",
      subtitle: "Kaagaz aur kanoon ki madad",
      image: photos.serviceLegal,
      slug: "legal",
      aspectRatio: "4 / 5",
      summary:
        "Agreements, compliance calendars, and notices — practical legal support so small teams do not miss deadlines.",
      benefits: [
        "Vendor & partner agreement templates reviewed",
        "Basic labour & shop act orientation",
        "Notice & reply coordination",
        "Annual compliance reminders",
      ],
      documents: [
        "Existing contracts",
        "Company / firm papers",
        "Notice copies (if any)",
      ],
      timeline: "Depends on matter — first review in 48–72 hrs",
      faqs: [
        {
          q: "Is this a law firm?",
          a: "We are a consultancy desk that coordinates with qualified professionals where courtroom or complex counsel is needed.",
        },
      ],
      includes: [
        { label: "Contracts & kaagaz", icon: "file" as const },
        { label: "Compliance checks", icon: "clipboard" as const },
        { label: "Legal guidance", icon: "scale" as const },
      ],
    },
  ],
} as const;

export function getServiceBySlug(slug: string) {
  return services.items.find((item) => item.slug === slug);
}

export function getAllServiceSlugs() {
  return services.items.map((item) => item.slug);
}

export const howItWorks = {
  eyebrow: "The Process",
  heading: "4 kadam, poora kaam.",
  sub: "You just show up. We handle the rest — from a 2-minute discovery call to money or licence in hand.",
  diagram: {
    src: photos.processDiagram,
    alt: "Four-step process diagram from call to disbursement",
  },
  steps: [
    {
      title: "Tell Us About You",
      caption: "2-minute call. No forms.",
      detail:
        "Share business type, city, turnover band, and what you need — loan, licence, registration, or subsidy. We reply on WhatsApp with a simple checklist.",
      image: photos.stepCall,
    },
    {
      title: "We Find Your Match",
      caption: "We check 120+ schemes for you.",
      detail:
        "Our desk screens loans and government schemes against your eligibility, then ranks the top 2–3 realistic options with timelines.",
      image: photos.stepMatch,
    },
    {
      title: "We Do the Paperwork",
      caption: "You just sign. We handle the rest.",
      detail:
        "We assemble KYC, statements, quotations, and portal forms. You review and sign — we file and track queries.",
      image: photos.stepPaperwork,
    },
    {
      title: "Money in Your Account",
      caption: "We follow up until it's done.",
      detail:
        "Sanction, disbursement, licence download, or GST live — we stay on the case until the outcome is in your hands.",
      image: photos.stepMoney,
    },
  ],
} as const;

export const caseStudies = {
  eyebrow: "Case Studies",
  heading: "Challenge → solution → paisa.",
  sub: "Short stories from food, hardware, and tailoring businesses — what blocked them, what we filed, and what landed.",
  items: [
    {
      name: "Ritu Sharma",
      business: "Saanvi Food Works",
      image: photos.caseFood,
      challenge: "Needed working capital + FSSAI clarity for marketplace listing.",
      solution: "Mudra file + FSSAI state licence + GST hygiene check.",
      process: "Call → document pack → bank file → licence parallel track.",
      outcome: "₹22L sanctioned in 6 weeks; listings unblocked.",
      metrics: ["₹22L loan", "FSSAI live", "6 weeks"],
      quote:
        "I only signed papers. They did everything else. ₹22 lakh in 6 weeks.",
    },
    {
      name: "Manoj Verma",
      business: "Verma Hardware",
      image: photos.caseHardware,
      challenge: "Did not know a subsidy existed for expansion machinery.",
      solution: "PMEGP eligibility screen + project cost sheet + bank liaison.",
      process: "Scheme match → DPR lite → agency & bank coordination.",
      outcome: "₹8L subsidy component approved alongside term loan.",
      metrics: ["₹8L subsidy", "Machine upgrade", "New SKUs"],
      quote:
        "I didn't know I could get a govt. subsidy. They found it for me.",
    },
    {
      name: "Asha Devi",
      business: "Asha Tailoring",
      image: photos.caseTailoring,
      challenge: "First-time borrower scared of English forms and hidden fees.",
      solution: "Hindi walkthrough + Mudra Kishor path + Udyam fresh filing.",
      process: "Udyam → checklist on WhatsApp → branch visit with us.",
      outcome: "₹5L loan for machines and festival inventory.",
      metrics: ["₹5L loan", "Udyam done", "Hindi-first"],
      quote: "Sab kuch Hindi mein samjhaya. Bahut aasan tha.",
    },
  ],
} as const;

export const testimonials = {
  eyebrow: "Real People",
  heading: "Unki kahani, unki zubaani.",
  sub: "Ratings, business types, and rupee outcomes from founders who look like our visitors — not stock models.",
  items: [
    {
      name: "Ritu Sharma",
      role: "Founder, Saanvi Food Works",
      businessType: "Food manufacturing",
      rating: 5,
      quote:
        "I only signed papers. They did everything else. ₹22 lakh in 6 weeks.",
      badge: "₹22L sanctioned",
      image: photos.personRitu,
    },
    {
      name: "Manoj Verma",
      role: "Owner, Verma Hardware",
      businessType: "Retail / hardware",
      rating: 5,
      quote:
        "I didn't know I could get a govt. subsidy. They found it for me.",
      badge: "₹8L subsidy",
      image: photos.personManoj,
    },
    {
      name: "Asha Devi",
      role: "Founder, Asha Tailoring",
      businessType: "Services / garments",
      rating: 5,
      quote: "Sab kuch Hindi mein samjhaya. Bahut aasan tha.",
      badge: "₹5L loan",
      image: photos.personAsha,
    },
  ],
} as const;

export const resources = {
  id: "resources",
  eyebrow: "Guides & SEO desk",
  heading: "Topics founders search for — explained clearly.",
  sub: "Deep dives on registration, GST, MSME/Udyam, loans, schemes, and licences so you can learn before you call.",
  topics: [
    {
      title: "Business & company registration",
      text: "Private limited, LLP, and proprietorship paths — when each makes sense for a dukaan or startup.",
      image: photos.seoCompany,
      href: "/services/registration",
    },
    {
      title: "GST registration",
      text: "Thresholds, document list, and how GST links to loans and marketplace onboarding.",
      image: photos.seoGst,
      href: "/services/registration",
    },
    {
      title: "MSME / Udyam registration",
      text: "Why Udyam unlocks schemes, priority sector lending, and tender preferences.",
      image: photos.seoUdyam,
      href: "/services/registration",
    },
    {
      title: "FSSAI licence",
      text: "Basic vs state vs central — mapped to your food business model.",
      image: photos.seoFssai,
      href: "/services/certificate",
    },
    {
      title: "ISO certification",
      text: "ISO 9001 documentation coaching for buyer and tender readiness.",
      image: photos.seoIso,
      href: "/services/certificate",
    },
    {
      title: "Trademark registration",
      text: "Name/logo search and filing support so your brand is protected early.",
      image: photos.seoTrademark,
      href: "/services/legal",
    },
  ],
} as const;

export const faq = {
  heading: "Sawal jo har founder poochta hai",
  sub: "Eligibility, fees, timelines, and small-business fit — answered without legal fog.",
  items: [
    {
      question: "Kya main eligible hoon?",
      answer:
        "Bas 2 minute ka call karo, hum free mein bata denge. Hum business type, city, turnover band, aur documents dekh kar 2–3 realistic options shortlist karte hain — loan, subsidy, ya licence.",
    },
    {
      question: "Kitna paisa lagega hume?",
      answer:
        "Pehli baat-cheet bilkul free hai. Koi hidden charge nahi. Agar aap case proceed karte ho to fees clear WhatsApp summary mein likh kar bhejte hain — pehle kaam, phir paisa clarity.",
    },
    {
      question: "Kitna time lagega?",
      answer:
        "Zyadatar funding case mein 4–8 hafte, scheme ke hisaab se. Registration aur FSSAI aksar 1–3 hafte. Portal queries aur bank holidays timeline badha sakte hain — hum weekly status dete hain.",
    },
    {
      question: "Kya mera business chhota hai to bhi help milegi?",
      answer:
        "Haan! Chhoti dukaan se lekar badi company tak, sabko madad milti hai. Kirana, tailoring, hardware, tiffin, and first-time founders hamare common clients hain.",
    },
    {
      question: "Kya aap government office ho?",
      answer:
        "Nahi. Hum private consultancy hain. Hum forms, banks, aur portals par aapke saath kaam karte hain — kisi bhi sarkari department ka hissa nahi.",
    },
    {
      question: "Documents kaise bheju?",
      answer:
        "WhatsApp par checklist milti hai. Clear photos / PDFs kaafi hain. Originals sirf bank ya department ke demand par.",
    },
  ],
} as const;

export const finalCta = {
  heading: "Aaj hi shuru karo.",
  sub: "Ek free call. Koi obligation nahi. Eligibility, scheme fit, aur next documents — 2 minute mein clear.",
  primary: "WhatsApp Par Baat Karo",
  secondary: "1800-XXX-XXXX",
} as const;

export const footer = {
  companyName: site.companyName,
  tagline: site.tagline,
  overview:
    "Pan-India business help desk for registration, GST, MSME/Udyam, loans, government schemes, FSSAI, ISO, and growth advisory — bilingual and WhatsApp-first.",
  offices: site.offices,
  disclaimer: site.disclaimer,
  map: { src: photos.footerCity, alt: "Map of Bharosa office cities" },
} as const;
