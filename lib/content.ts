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
  { label: "About Us", href: "/about", icon: "users" },
  { label: "Service", href: "/service", icon: "briefcase" },
  { label: "Scheme", href: "/scheme", icon: "landmark" },
  { label: "Blogs", href: "/blogs", icon: "book" },
  { label: "Contact us", href: "/contact", icon: "mail" },
] as const;

export const servicesMegaMenu = {
  funding: {
    title: "Business Funding",
    items: [
      {
        title: "Grants",
        description: "Government Schemes",
        href: "/services/grant",
        icon: "grant" as const,
      },
      {
        title: "Loans",
        description: "Bank Financing",
        href: "/services/loan",
        icon: "loan" as const,
      },
      {
        title: "NBFC",
        description: "Alternative Funding",
        href: "/services/loan",
        icon: "nbfc" as const,
      },
    ],
  },
  services: {
    title: "Our Services",
    items: [
      {
        title: "Business Registration",
        description: "Company & OPC formation",
        href: "/services/registration",
        icon: "registration" as const,
      },
      {
        title: "Certifications & Compliance",
        description: "ISO, BIS CRS & FSSAI",
        href: "/services/certificate",
        icon: "certificate" as const,
      },
      {
        title: "Growth Strategy",
        description: "Business expansion planning",
        href: "/services/growth",
        icon: "growth" as const,
      },
      {
        title: "M&A Advisory",
        description: "Merger & acquisition support",
        href: "/service",
        icon: "ma" as const,
      },
      {
        title: "Marketing & Branding",
        description: "Digital marketing solutions",
        href: "/services/growth",
        icon: "marketing" as const,
      },
      {
        title: "Legal Consultancy",
        description: "Legal advice & documentation",
        href: "/services/legal",
        icon: "legal" as const,
      },
    ],
  },
  cta: {
    label: "View All Services",
    href: "/service",
  },
} as const;

export const servicePage = {
  eyebrow: "Services",
  brand: "VIKASBHART",
  heading: "Our Services",
  intro:
    "We are a business consulting and growth advisory firm dedicated to empowering MSMEs and startups in India. We provide end-to-end support across compliance, strategy, finance, legal, and growth—helping businesses build strong foundations, stay compliant, and scale sustainably.",
  cta: "Check Your Eligibility",
  image: photos.serviceRegistration,
  imageAlt: "Advisor reviewing business registration and funding options with a founder",
  stats: [
    { value: "95%+", label: "Success Rate" },
    { value: "20,000+", label: "Businesses Helped" },
    { value: "₹500CR+", label: "Funding Secured" },
    { value: "500+", label: "Funding Schemes" },
  ] as const,
  funding: {
    eyebrow: "Capital Pathways",
    heading: "Grow With Vikas Bharat",
    sub: "Access Grants, Loans And NBFC Solutions",
    items: [
      {
        title: "Government Grants",
        text: "We identify which government grants and subsidies your business qualifies for, prepare the application, file on official portals, and follow through until the money reaches you — with full documentation support.",
        href: "/services/grant",
        image: photos.serviceGrant,
        icon: "grant" as const,
      },
      {
        title: "Business Loan Services",
        text: "We compare 25+ lenders — banks, NBFCs, and government schemes — to find the right loan for your business, handle the paperwork, and stay with your application through to approval and disbursement.",
        href: "/services/loan",
        image: photos.serviceLoan,
        icon: "loan" as const,
      },
      {
        title: "NBFC Financing Solutions",
        text: "When you need faster approval or a loan product banks do not offer, we match you to the right NBFC from our network of 25+ partners — working capital, machinery, LAP, or invoice discounting.",
        href: "/services/loan",
        image: photos.aboutServiceNbf,
        icon: "nbfc" as const,
      },
    ],
  },
  catalog: {
    eyebrow: "Full Desk",
    heading: "Our Services",
    sub: "Everything your business needs under one roof — from first filing to scale.",
    items: [
      {
        title: "Business Registration Services",
        text: "Business Registration Services for fast, easy and compliant company setup.",
        href: "/services/registration",
        icon: "registration" as const,
        image: photos.serviceRegistration,
      },
      {
        title: "One Person Company Registration",
        text: "Start a One Person Company with limited liability, nominee handling and end-to-end MCA filings.",
        href: "/services/registration",
        icon: "opc" as const,
        image: photos.aboutServiceRegistration,
      },
      {
        title: "Startup India Certification",
        text: "DPIIT Startup India recognition — eligibility review, pitch writeup and portal filing support.",
        href: "/services/registration",
        icon: "startup" as const,
        image: photos.schemeSeed,
      },
      {
        title: "Certifications & Compliance",
        text: "Certifications & Compliance services to ensure legal & regulatory business readiness.",
        href: "/services/certificate",
        icon: "certificate" as const,
        image: photos.serviceCertificate,
      },
      {
        title: "Growth Strategy Services",
        text: "Growth Strategy to scale revenue, market reach, & profitability fast.",
        href: "/services/growth",
        icon: "growth" as const,
        image: photos.serviceGrowth,
      },
      {
        title: "Mergers & Acquisitions",
        text: "Expert Mergers & Acquisitions support for seamless business expansion & deals.",
        href: "/services/growth",
        icon: "ma" as const,
        image: photos.credentialGrowth,
      },
      {
        title: "Marketing & Branding Services",
        text: "Marketing & Branding Services to boost visibility, trust and customer growth fast.",
        href: "/services/growth",
        icon: "marketing" as const,
        image: photos.aboutServiceMarketing,
      },
      {
        title: "Legal Consultancy",
        text: "Legal Consultancy for reliable compliance & business protection.",
        href: "/services/legal",
        icon: "legal" as const,
        image: photos.serviceLegal,
      },
      {
        title: "Funding Instruments",
        text: "Match the right funding instrument — equity, debt, grants or hybrids — to your stage and goals.",
        href: "/services/loan",
        icon: "funding" as const,
        image: photos.serviceLoan,
      },
    ],
  },
  connect: {
    eyebrow: "Talk To Us",
    heading: "Connect With Us",
    sub: "Starting Or Expanding Your Business?",
    body: "Contact us for expert consultancy on company registration or migration and access India's top MSME funding schemes. We offer personalized services to help you secure the resources needed for growth.",
    newCustomer: {
      label: "New To Us?",
      title: "Request Call Back",
      text: "We will be happy to address your queries over a call.",
      cta: "Click Here",
    },
    existingCustomer: {
      label: "Existing Customer?",
      title: "Request Call Back",
      text: "We will be happy to address your queries over a call.",
      cta: "Click Here",
    },
    tollFree: {
      label: "Connect Toll-Free",
      text: "Connect with us toll-free for expert guidance and support",
      number: "1800 296 1424",
      href: "tel:18002961424",
    },
  },
} as const;

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
  sub: "Four living mandates orbit the VIKASBHART seal. When a ring locks at the meridian, support blooms outward from the center.",
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
  eyebrow: "01 / Company Introduction",
  heading: "Who we are. What we do. Who we help.",
  body: "Vikas Bharat is a pan-India business help desk for startups and MSMEs — registration, funding, certifications, and growth support explained in clear Hindi and English.",
  whoWeAre: {
    title: "Who We Are",
    text: "A walk-in consultancy built for founders and shop owners who need capital, licences, and compliance without portal jargon.",
  },
  whatWeDo: {
    title: "What We Do",
    text: "We map the right grant, loan, registration, or certification path — then handle documentation, filing, and follow-up until the outcome is stamped.",
  },
  whoWeHelp: {
    title: "Who We Help",
    text: "First-time entrepreneurs, MSMEs, retailers, manufacturers, and growing startups across India who want one accountable desk.",
  },
  mission:
    "Make capital, compliance, and licences reachable for every serious small business in India.",
  vision:
    "A Bharat where opening a shop or startup never fails because of paperwork confusion.",
  values: [
    {
      title: "Trust",
      text: "Clear advice before any document is collected — eligibility first, paperwork second.",
    },
    {
      title: "Transparency",
      text: "Fees, timelines, and next steps shared in writing on WhatsApp so nothing stays hidden.",
    },
    {
      title: "Customer First",
      text: "Your business type and city drive the plan — not a one-size template.",
    },
    {
      title: "Integrity",
      text: "Private consultancy honesty: we never claim to be a government office.",
    },
    {
      title: "Excellence",
      text: "Filings screened for compliance so you do not file twice or miss a query.",
    },
    {
      title: "Growth",
      text: "Every case aims at the next stage — sanction, licence live, or expansion-ready.",
    },
  ],
  servicesOverview: [
    {
      title: "Grants",
      text: "Central and state subsidy pathways matched to your profile.",
      imageKey: "aboutServiceGrants" as const,
    },
    {
      title: "Business Registration",
      text: "Company, LLP, proprietorship, MSME/Udyam, and GST setup.",
      imageKey: "aboutServiceRegistration" as const,
    },
    {
      title: "Certification & Compliance",
      text: "ISO, BIS/CRS, FSSAI, ZED, and related compliance filings.",
      imageKey: "aboutServiceCerts" as const,
    },
    {
      title: "Loans & Funding",
      text: "Bank and NBFC credit products with document-ready files.",
      imageKey: "aboutServiceLoans" as const,
    },
    {
      title: "Marketing & Branding",
      text: "Brand basics and go-to-market support for growing desks.",
      imageKey: "aboutServiceMarketing" as const,
    },
    {
      title: "Legal Consultancy",
      text: "Agreements, compliance reviews, and founder legal guidance.",
      imageKey: "aboutServiceLegal" as const,
    },
    {
      title: "NBF / Financial Solutions",
      text: "NBFC pathways and structured financial solutions for MSMEs.",
      imageKey: "aboutServiceNbf" as const,
    },
  ],
  process: [
    {
      title: "Consultation",
      text: "Share your business need on a free discovery call.",
    },
    {
      title: "Solution Mapping",
      text: "We shortlist realistic grants, loans, or licences for you.",
    },
    {
      title: "Documentation",
      text: "WhatsApp checklist — only the papers that matter.",
    },
    {
      title: "Application / Execution",
      text: "We prepare and file; you review and sign.",
    },
    {
      title: "Follow-Up",
      text: "Portal and bank queries tracked until progress is clear.",
    },
    {
      title: "Results",
      text: "Sanction, licence, or registration — outcome in your hands.",
    },
  ],
  certifications: [
    {
      title: "ISO Certifications",
      text: "Quality and process certifications for business credibility.",
      imageKey: "aboutCertIso" as const,
    },
    {
      title: "BIS / CRS",
      text: "Bureau of Indian Standards and CRS compliance support.",
      imageKey: "aboutCertBis" as const,
    },
    {
      title: "FSSAI",
      text: "Food business licences with clear document paths.",
      imageKey: "aboutCertFssai" as const,
    },
    {
      title: "Tax Exemption – Section 80-IAC",
      text: "Startup tax exemption pathway guidance where eligible.",
      imageKey: "aboutCertTax" as const,
    },
    {
      title: "ZED Certification",
      text: "Zero Defect Zero Effect certification support for MSMEs.",
      imageKey: "aboutCertZed" as const,
    },
    {
      title: "Other Certifications",
      text: "Additional trade and industry certifications as needed.",
      imageKey: "aboutCertOther" as const,
    },
  ],
  whyChoose: [
    {
      title: "Expert Guidance",
      text: "Scheme and funding advisors who explain options in plain language.",
    },
    {
      title: "End-to-End Support",
      text: "From first call to stamped outcome — one accountable team.",
    },
    {
      title: "Transparent Process",
      text: "Clear steps, written fee summaries, and weekly status updates.",
    },
    {
      title: "Multiple Business Solutions",
      text: "Grants, loans, registration, certifications, legal, and more — one desk.",
    },
    {
      title: "Dedicated Support",
      text: "WhatsApp-first follow-ups so you always know what happens next.",
    },
    {
      title: "Growth-Focused Approach",
      text: "Every filing is aimed at unlocking the next stage of your business.",
    },
  ],
  faqCategories: [
    {
      id: "general",
      title: "General Questions",
      items: [
        {
          q: "What does Vikas Bharat do?",
          a: "We help startups and MSMEs with registration, funding, certifications, compliance, and growth support under one desk.",
        },
        {
          q: "Are you a government office?",
          a: "No. We are a private consultancy. We work with you on forms, banks, and portals — we are not a government department.",
        },
      ],
    },
    {
      id: "funding",
      title: "Funding Questions",
      items: [
        {
          q: "Can I get a loan without collateral?",
          a: "Often yes under Mudra and select NBFC products — eligibility depends on business vintage and cash flows.",
        },
        {
          q: "How long does funding usually take?",
          a: "Most funding cases take about 4–8 weeks depending on the product, bank queries, and document readiness.",
        },
      ],
    },
    {
      id: "registration",
      title: "Registration Questions",
      items: [
        {
          q: "Do I need Udyam if I already have GST?",
          a: "Yes for most MSME schemes and many bank products — Udyam is key eligibility proof.",
        },
        {
          q: "Which structure should I choose?",
          a: "Proprietorship is often faster for a single-owner shop. Private limited suits fundraising and larger contracts.",
        },
      ],
    },
    {
      id: "certification",
      title: "Certification Questions",
      items: [
        {
          q: "Which certifications do you support?",
          a: "ISO, BIS/CRS, FSSAI, ZED, Section 80-IAC pathways, and other trade certifications as needed.",
        },
        {
          q: "How do I know which certificate I need?",
          a: "A short consultation maps your industry and sales channel to the right licence set — no guesswork filing.",
        },
      ],
    },
    {
      id: "digital",
      title: "Digital Solution Questions",
      items: [
        {
          q: "Do you help with digital / branding needs?",
          a: "Yes — marketing and branding support sits alongside registration and funding so growth is not left for later.",
        },
        {
          q: "Can updates happen on WhatsApp?",
          a: "Yes. Checklists, fee summaries, and status updates are shared on WhatsApp by default.",
        },
      ],
    },
    {
      id: "process",
      title: "Process Questions",
      items: [
        {
          q: "What are the steps after I contact you?",
          a: "Consultation → solution mapping → documentation → application/execution → follow-up → results.",
        },
        {
          q: "Is the first consultation free?",
          a: "Yes. The first call is free with no obligation — we clarify fit before any paid work begins.",
        },
      ],
    },
  ],
  images: {
    team: {
      src: photos.aboutTeam,
      alt: "Vikas Bharat consultants with small business clients",
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
} as const;

/** About page — Certifications & Recognition (real credentials only) */
export const aboutCredentials = {
  id: "credentials",
  section: "06",
  eyebrow: "CREDENTIALS",
  headingLead: "Proof that travels",
  headingAccent: "with every file.",
  hindi: "मान्यता एवं प्रमाण",
  sub: "The same stamps, registries, and partner desks we cite when a founder asks why our filings hold — ISO process quality, MSME registration, bank liaison, and scheme documentation.",
  founded: "2016",
  certifications: [
    {
      id: "iso",
      num: "01",
      name: "ISO 9001:2015",
      authority: "Process quality systems",
      detail: "ISO 9001:2015 process quality — documented workflows for filings, follow-ups, and client status.",
      status: "VERIFIED",
      tag: "CERTIFIED",
      image: photos.serviceCertificate,
      detailImage: photos.badgeIso,
    },
    {
      id: "msme",
      num: "02",
      name: "MSME Registered",
      authority: "MSME / Udyam consultancy",
      detail: "MSME registered consultancy — Udyam-ready guidance for scheme eligibility and bank desks.",
      status: "ACTIVE",
      tag: "REGISTERED",
      image: photos.badgeMsme,
      detailImage: photos.seoUdyam,
    },
    {
      id: "bank",
      num: "03",
      name: "Bank & NBFC Partner Desk",
      authority: "Partner bank recognition",
      detail: "Bank & NBFC partner desk — liaison with branch managers for Mudra, CGTMSE, and collateral-light products.",
      status: "LIAISON",
      tag: "PARTNER",
      image: photos.serviceLoan,
      detailImage: photos.badgeGovt,
    },
    {
      id: "schemes",
      num: "04",
      name: "Scheme Documentation",
      authority: "Central & state scheme portals",
      detail: "Scheme documentation specialists — checklists and DPRs matched to Mudra, PMEGP, Startup India, and Stand-Up India pathways.",
      status: "SPECIALIST",
      tag: "SCHEMES",
      image: photos.stepMatch,
      detailImage: photos.schemeMudra,
    },
  ],
  recognition: [
    {
      id: "govt",
      label: "Government Scheme Partner",
      text: "Direct pathway guidance for official subsidy and credit programmes.",
      image: photos.badgeGovt,
    },
    {
      id: "rating",
      label: "5.0 Google Rating",
      text: "Client-reviewed desk presence across our walk-in cities.",
      image: photos.badgeRating,
    },
    {
      id: "cities",
      label: "Four-City Help Desk",
      text: "Ahmedabad, Jaipur, Delhi NCR, and Hyderabad — real rooms, not call centres only.",
      image: photos.aboutOffice,
    },
    {
      id: "msme-reg",
      label: "MSME Registration",
      text: "Udyam registration support so founders carry formal eligibility proof.",
      image: photos.seoUdyam,
    },
  ],
  affiliations: [
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

/** About page — Customer Success Stories (editorial human impact) */
export const aboutStories = {
  id: "customer-stories",
  section: "07",
  eyebrow: "HUMAN IMPACT",
  headingLead: "Real people.",
  headingAccent: "Real transform.",
  hindi: "Unki kahani, unki zubaani.",
  sub: "Short stories from food, hardware, and tailoring businesses — what blocked them, what we filed, and what landed.",
  continuity: "FROM PROOF → PEOPLE",
  exitLabel: "TRUST · HUMAN IMPACT · MOMENTUM",
  exitLead: "Every file has a face.",
  exitAccent: "Every outcome has a name.",
  items: [
    {
      id: "ritu",
      num: "01",
      name: "Ritu Sharma",
      business: "Saanvi Food Works",
      businessType: "Food manufacturing",
      loanType: "Mudra Finance",
      challenge: "Needed working capital + FSSAI clarity for marketplace listing.",
      solution: "Mudra file + FSSAI state licence + GST hygiene check.",
      process: "Call → document pack → bank file → licence parallel track.",
      outcome: "₹22L sanctioned in 6 weeks; listings unblocked.",
      metrics: ["₹22L loan", "FSSAI live", "6 weeks"],
      quote:
        "I only signed papers. They did everything else. ₹22 lakh in 6 weeks.",
      portrait: photos.personRitu,
      businessImage: photos.caseFood,
      challengeImage: photos.storyFoodPrep,
      outcomeImage: photos.storyFoodMarket,
      layout: "portrait-lead" as const,
    },
    {
      id: "manoj",
      num: "02",
      name: "Manoj Verma",
      business: "Verma Hardware",
      businessType: "Retail / hardware",
      loanType: "PMEGP Subsidy",
      challenge: "Did not know a subsidy existed for expansion machinery.",
      solution: "PMEGP eligibility screen + project cost sheet + bank liaison.",
      process: "Scheme match → DPR lite → agency & bank coordination.",
      outcome: "₹8L subsidy component approved alongside term loan.",
      metrics: ["₹8L subsidy", "Machine upgrade", "New SKUs"],
      quote:
        "I didn't know I could get a govt. subsidy. They found it for me.",
      portrait: photos.personManoj,
      businessImage: photos.caseHardware,
      challengeImage: photos.storyHardwareShop,
      outcomeImage: photos.storyHardwareMachine,
      layout: "business-canvas" as const,
    },
    {
      id: "asha",
      num: "03",
      name: "Asha Devi",
      business: "Asha Tailoring",
      businessType: "Services / garments",
      loanType: "Mudra Kishor",
      challenge: "First-time borrower scared of English forms and hidden fees.",
      solution: "Hindi walkthrough + Mudra Kishor path + Udyam fresh filing.",
      process: "Udyam → checklist on WhatsApp → branch visit with us.",
      outcome: "₹5L loan for machines and festival inventory.",
      metrics: ["₹5L loan", "Udyam done", "Hindi-first"],
      quote: "Sab kuch Hindi mein samjhaya. Bahut aasan tha.",
      portrait: photos.personAsha,
      businessImage: photos.caseTailoring,
      challengeImage: photos.storyTailorWork,
      outcomeImage: photos.storyTailorDetail,
      layout: "voice-first" as const,
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

export const serviceFaq = {
  heading: "Sawal jo har founder poochta hai",
  sub: "Common questions about registration, funding, compliance and how Vikas Bharat works.",
  items: [
    {
      question: "Which business structure is best for my startup?",
      answer:
        "The ideal business structure depends on factors such as the number of owners, liability protection needs, funding sources and scalability. A Private Limited Company suits startups seeking investment, an LLP works well for professional partnerships and a Proprietorship is ideal for solo consultants.",
    },
    {
      question: "How long does business registration take in India?",
      answer:
        "Registration timelines vary by structure — a Private Limited Company typically takes 7–15 working days, an LLP 10–20 days and a One Person Company 5–10 days. With Vikas Bharat's expert guidance, documentation is streamlined for faster, first-time approvals.",
    },
    {
      question: "What are the costs involved in business registration?",
      answer:
        "Costs depend on the business structure, state and company type. Government fees range from ₹1,000 to ₹7,000. Vikas Bharat offers transparent, budget-aligned pricing with professional support to minimise errors and ensure smooth approval.",
    },
    {
      question: "Can foreign nationals register a business in India?",
      answer:
        "Yes, foreign nationals can register a company in India. At least one Indian resident director is required for a Private Limited Company. Our team handles FDI compliance, RBI regulations and all documentation for seamless foreign-owned business setup.",
    },
    {
      question: "What compliance requirements follow after registration?",
      answer:
        "Post-registration businesses must file GST returns, annual ROC filings, income tax returns and maintain statutory books. Vikas Bharat provides ongoing compliance support to ensure your business meets all regulatory obligations without missing deadlines.",
    },
    {
      question: "Can I convert from one business structure to another later?",
      answer:
        "Yes — common conversions include Proprietorship to Pvt Ltd, LLP to Pvt Ltd and Pvt Ltd to Public Ltd. Vikas Bharat manages the full conversion process, including legal documentation, ROC filings and regulatory compliance, with minimal disruption to your operations.",
    },
    {
      question: "How do I start the registration or funding process with Vikas Bharat?",
      answer:
        "Submit your basic business details through our website for a free eligibility assessment. Our advisors craft a custom action plan — whether for registration, compliance or funding — within 48 hours.",
    },
    {
      question: "Is Vikas Bharat a reliable partner for business advisory?",
      answer:
        "DPIIT-recognised since 2023, with a proven track record of ₹500Cr*+ in facilitated funding, 20,000+ businesses supported and transparent client testimonials — Vikas Bharat is India's trusted MSME growth partner.",
    },
  ],
} as const;

/** About page — FAQ (editorial clarity index) */
export const aboutFaq = {
  id: "faq",
  section: "08",
  eyebrow: "CLARITY",
  headingLead: "Questions",
  headingAccent: "before you begin.",
  hindi: "Sawal jo har founder poochta hai.",
  sub: "Eligibility, fees, timelines, and small-business fit — answered without legal fog.",
  continuity: "FROM PEOPLE → CLARITY",
  indexLabel: "CLARITY INDEX",
  answerLabel: "ANSWER",
  questionLabel: "QUESTION",
  exitLabel: "CLARITY · CONFIDENCE · NEXT STEP",
  exitLead: "Still unsure?",
  exitAccent: "Ek free call.",
  exitSub:
    "Eligibility, scheme fit, aur next documents — 2 minute mein clear. Koi obligation nahi.",
  ctaPrimary: "WhatsApp Par Baat Karo",
  ctaSecondary: "Call an Expert",
  items: [
    {
      id: "eligible",
      num: "01",
      tag: "Eligibility",
      question: "Kya main eligible hoon?",
      display: ["Kya main", "eligible hoon?"],
      answer:
        "Bas 2 minute ka call karo, hum free mein bata denge. Hum business type, city, turnover band, aur documents dekh kar 2–3 realistic options shortlist karte hain — loan, subsidy, ya licence.",
      note: "FREE CHECK · 2 MIN",
      image: photos.faqConsult,
      imageAlt: "Advisor reviewing eligibility with a founder",
    },
    {
      id: "fees",
      num: "02",
      tag: "Fees",
      question: "Kitna paisa lagega hume?",
      display: ["Kitna paisa", "lagega hume?"],
      answer:
        "Pehli baat-cheet bilkul free hai. Koi hidden charge nahi. Agar aap case proceed karte ho to fees clear WhatsApp summary mein likh kar bhejte hain — pehle kaam, phir paisa clarity.",
      note: "FIRST CALL FREE",
      image: photos.faqFounder,
      imageAlt: "Founder reviewing a clear fee summary",
    },
    {
      id: "timeline",
      num: "03",
      tag: "Timeline",
      question: "Kitna time lagega?",
      display: ["Kitna time", "lagega?"],
      answer:
        "Zyadatar funding case mein 4–8 hafte, scheme ke hisaab se. Registration aur FSSAI aksar 1–3 hafte. Portal queries aur bank holidays timeline badha sakte hain — hum weekly status dete hain.",
      note: "WEEKLY STATUS",
      image: photos.stepMatch,
      imageAlt: "Team tracking application timelines",
    },
    {
      id: "small-biz",
      num: "04",
      tag: "Fit",
      question: "Kya mera business chhota hai to bhi help milegi?",
      display: ["Chhota business", "bhi chalega?"],
      answer:
        "Haan! Chhoti dukaan se lekar badi company tak, sabko madad milti hai. Kirana, tailoring, hardware, tiffin, and first-time founders hamare common clients hain.",
      note: "DUKAAN → COMPANY",
      image: photos.faqShop,
      imageAlt: "Small shop owner at their counter",
    },
    {
      id: "govt",
      num: "05",
      tag: "Who we are",
      question: "Kya aap government office ho?",
      display: ["Kya aap", "government office ho?"],
      answer:
        "Nahi. Hum private consultancy hain. Hum forms, banks, aur portals par aapke saath kaam karte hain — kisi bhi sarkari department ka hissa nahi.",
      note: "PRIVATE CONSULTANCY",
      image: photos.credentialTeam,
      imageAlt: "Private consultancy desk at work",
    },
    {
      id: "documents",
      num: "06",
      tag: "Documents",
      question: "Documents kaise bheju?",
      display: ["Documents", "kaise bheju?"],
      answer:
        "WhatsApp par checklist milti hai. Clear photos / PDFs kaafi hain. Originals sirf bank ya department ke demand par.",
      note: "WHATSAPP CHECKLIST",
      image: photos.faqDocuments,
      imageAlt: "Documents and checklist ready to share",
    },
    {
      id: "collateral",
      num: "07",
      tag: "Loans",
      question: "Collateral ke bina loan mil sakta hai?",
      display: ["Collateral ke bina", "loan mil sakta hai?"],
      answer:
        "Often yes under Mudra and select NBFC products — eligibility depends on business vintage and cash flows.",
      note: "MUDRA · NBFC PATHS",
      image: photos.serviceLoan,
      imageAlt: "Loan paperwork review for MSME funding",
    },
    {
      id: "udyam",
      num: "08",
      tag: "Registration",
      question: "GST hai to bhi Udyam chahiye?",
      display: ["GST hai to bhi", "Udyam chahiye?"],
      answer:
        "Yes for most MSME schemes and many bank products — Udyam is the key eligibility proof.",
      note: "UDYAM UNLOCKS SCHEMES",
      image: photos.seoUdyam,
      imageAlt: "MSME Udyam registration desk",
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
