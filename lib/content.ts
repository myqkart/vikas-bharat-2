import { photos } from "./photos";

export const site = {
  companyName: "VIKASBHART",
  tagline: "Sapno Se Safalta Tak",
  logo: "/brand/vikas-bharat-logo.png",
  logoMark: "/brand/vikas-bharat-mark.png",
  whatsappNumber: "919319592924",
  phoneNumber: "+919319592924",
  phoneDisplay: "+91 93195 92924",
  email: "contact@vikas-bharat.com",
  emails: [
    { label: "Support", address: "support@vikas-bharat.com" },
    { label: "Information", address: "info@vikas-bharat.com" },
    { label: "Contact", address: "contact@vikas-bharat.com" },
  ] as const,
  mapsUrl: "https://maps.app.goo.gl/DdMwhQSm3zzrxeTHA?g_st=ic",
  offices: [
    {
      city: "Noida",
      address:
        "1st floor, F-5, C Block, Sector 63, Noida, Hazratpur Wajidpur, Uttar Pradesh 201301",
      mapsUrl: "https://maps.app.goo.gl/DdMwhQSm3zzrxeTHA?g_st=ic",
    },
  ] as const,
  social: [
    { label: "WhatsApp", href: "https://wa.me/919319592924" },
    { label: "Instagram", href: "https://www.instagram.com/vikasbharatservice/" },
    { label: "Facebook", href: "https://www.facebook.com/vikasbharatconsulting" },
  ] as const,
  resources: [
    { label: "MSME / Udyam guide", href: "/services/registration" },
    { label: "GST registration help", href: "/services/registration" },
    { label: "FSSAI licence path", href: "/services/certificate" },
  ] as const,
  disclaimer:
    "We are a private consultancy and are not affiliated with any Government department or agency. All payments must be made only to our official company account.",
} as const;

export function gmailComposeHref(email: string) {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
}

export const navigation = [
  { label: "About Us", href: "/about", icon: "users" },
  { label: "Service", href: "/service", icon: "briefcase" },
  { label: "Scheme", href: "/scheme", icon: "landmark" },
  { label: "Blogs", href: "/blogs", icon: "book" },
  { label: "Careers", href: "/careers", icon: "sparkles" },
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
        href: "/services/nbfc",
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
        href: "/services/ma",
        icon: "ma" as const,
      },
      {
        title: "Marketing & Branding",
        description: "Digital marketing solutions",
        href: "/services/marketing",
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
        href: "/services/nbfc",
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
        href: "/services/opc",
        icon: "opc" as const,
        image: photos.aboutServiceRegistration,
      },
      {
        title: "Startup India Certification",
        text: "DPIIT Startup India recognition — eligibility review, pitch writeup and portal filing support.",
        href: "/services/startup",
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
        href: "/services/ma",
        icon: "ma" as const,
        image: photos.credentialGrowth,
      },
      {
        title: "Marketing & Branding Services",
        text: "Marketing & Branding Services to boost visibility, trust and customer growth fast.",
        href: "/services/marketing",
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
        href: "/services/funding",
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
      label: "Call or WhatsApp",
      text: "Connect with us on call or WhatsApp for expert guidance and support",
      number: site.phoneDisplay,
      href: `tel:${site.phoneNumber}`,
    },
  },
} as const;

export const schemePage = {
  eyebrow: "Government Schemes",
  heading: "All Government Schemes & Programs",
  intro:
    "Comprehensive guide to 50+ government funding schemes, subsidies, tax benefits and support programs for startups, MSMEs and entrepreneurs across India.",
  cta: "Check Your Eligibility",
  imageAlt: "Advisor matching a founder to government funding schemes",
  stats: [
    { value: "50+", label: "Schemes Covered" },
    { value: "95%", label: "Success Rate" },
    { value: "20K+", label: "Businesses Helped" },
  ] as const,
  catalog: {
    eyebrow: "Scheme Desk",
    heading: "Top Government Schemes",
    sub: "Direct government-backed programs with dedicated portals and implementation frameworks",
    searchPlaceholder: "What are you looking for?",
    filters: ["Debt", "Equity", "Grant", "Certificate", "Loan", "Subsidy"] as const,
    defaultFilter: "Debt" as const,
    exploreCta: "Explore More Opportunities",
    collapseCta: "Show Featured Schemes",
    showMoreCta: "Show More",
    showMoreSub: "View remaining schemes in this filter",
    previewCount: 5,
    empty: "No schemes match that search. Try another keyword or filter.",
    items: [
      {
        id: "naif",
        title: "NAIF Scheme",
        text: "National Agriculture Infra Financing Facility for agri infrastructure projects",
        filters: ["Debt", "Subsidy"] as const,
        featured: true,
        image: photos.schemeAgri,
        icon: "agri" as const,
      },
      {
        id: "cgtmse",
        title: "CGTMSE",
        text: "Credit Guarantee Fund Trust for Micro and Small Enterprises - Collateral-free credit",
        filters: ["Debt"] as const,
        featured: true,
        image: photos.schemeGuarantee,
        icon: "shield" as const,
      },
      {
        id: "pmegp",
        title: "PMEGP",
        text: "Prime Minister's Employment Generation Programme - Up to 35% subsidy for new ventures",
        filters: ["Debt"] as const,
        featured: true,
        image: photos.schemePmegp,
        icon: "factory" as const,
      },
      {
        id: "ahidf",
        title: "AHIDF Scheme",
        text: "Agricultural and Horticultural Infrastructure Development Fund to support infrastructure projects in agriculture, boosting food production, storage, and distribution.",
        filters: ["Debt"] as const,
        featured: true,
        image: photos.schemeHorticulture,
        icon: "leaf" as const,
      },
      {
        id: "cgss",
        title: "CGSS Scheme",
        text: "Credit Guarantee Scheme for Startups, offering collateral-free loans to startups, enabling them to access the capital needed for growth and expansion.",
        filters: ["Debt"] as const,
        featured: true,
        image: photos.schemeSeed,
        icon: "rocket" as const,
      },
      {
        id: "mudra",
        title: "Mudra Loans (PMMY)",
        text: "Pradhan Mantri Mudra Yojana - Loans up to ₹20 lakh for micro enterprises",
        filters: ["Loan"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeMudra,
        icon: "wallet" as const,
      },
      {
        id: "msme-loan",
        title: "MSME Loan",
        text: "Collateral-free loans for micro, small and medium enterprises with government backing",
        filters: ["Loan"] as const,
        featured: false,
        filterOnly: true,
        image: photos.serviceLoan,
        icon: "landmark" as const,
      },
      {
        id: "nbfc",
        title: "NBFC",
        text: "Non-Banking Financial Company loans for quick business financing solutions",
        filters: ["Loan"] as const,
        featured: false,
        filterOnly: true,
        image: photos.aboutServiceNbf,
        icon: "wallet" as const,
      },
      {
        id: "business-loan-services",
        title: "Business Loan Services",
        text: "Access to a variety of business loans designed to help startups, MSMEs, and established companies with funding for expansion, working capital, and equipment purchase.",
        filters: ["Loan"] as const,
        featured: false,
        filterOnly: true,
        image: photos.aboutServiceLoans,
        icon: "factory" as const,
      },
      {
        id: "standup",
        title: "Stand-Up India",
        text: "Explore Stand-Up India scheme eligibility, benefits, required documents and application process. Learn how to apply for bank loans for women and SC/ST entrepreneurs.",
        filters: ["Loan"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeStandup,
        icon: "users" as const,
      },
      {
        id: "seed-fund",
        title: "Seed Fund",
        text: "Startup India Seed Fund - Grants up to ₹20L for proof of concept and prototype",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeSeed,
        icon: "sprout" as const,
      },
      {
        id: "zed",
        title: "ZED Certification",
        text: "Zero Defect Zero Effect certification with subsidy support — quality, process and export readiness for MSMEs.",
        filters: [] as const,
        featured: false,
        image: photos.aboutCertZed,
        icon: "badge" as const,
      },
      {
        id: "clcss",
        title: "CLCSS Subsidy",
        text: "Credit Linked Capital Subsidy Scheme — capital support for technology upgradation of micro and small units.",
        filters: [] as const,
        featured: false,
        image: photos.serviceGrant,
        icon: "percent" as const,
      },
      {
        id: "sss",
        title: "SSS Scheme",
        text: "Startup Support Scheme providing equity investment for early-stage startups",
        filters: ["Equity"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeStartup,
        icon: "rocket" as const,
      },
      {
        id: "equity-linked-seed",
        title: "Equity Linked Seed Fund",
        text: "Seed funding through equity participation for innovative startups",
        filters: ["Equity"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeSeed,
        icon: "sprout" as const,
      },
      {
        id: "horizon-fund",
        title: "Horizon Fund",
        text: "Long-term equity investment fund for high-growth potential ventures",
        filters: ["Equity"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeVc,
        icon: "compass" as const,
      },
      {
        id: "equity-elevator",
        title: "Equity Elevator",
        text: "Progressive equity funding program to elevate startup growth — international equity-based funding up to ₹4 Crore for tech startups with mentorship, networking, and expert guidance.",
        filters: ["Equity"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemePitch,
        icon: "elevator" as const,
      },
      {
        id: "gvfl",
        title: "GVFL",
        text: "Gujarat Venture Finance Limited - Equity and quasi-equity investments",
        filters: ["Equity"] as const,
        featured: false,
        filterOnly: true,
        image: photos.credentialGrowth,
        icon: "landmark" as const,
      },
      {
        id: "evolve-tech",
        title: "Evolve-Tech Funding 2.0",
        text: "Learn how Evolve-Tech Funding supports startups with up to ₹25L for equity, key eligibility criteria, and documents required to get funded.",
        filters: ["Equity"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeTech,
        icon: "cpu" as const,
      },
      {
        id: "venture-tech",
        title: "Venture Tech Funding",
        text: "Chiratae Sonic Venture Tech Funding for early-stage disruptive tech startups — seed investment up to ₹18 Crore with 48-hour initial response, Demo Day and mentorship.",
        filters: ["Equity"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeLab,
        icon: "cpu" as const,
      },
      {
        id: "marine-venture",
        title: "Marine Venture",
        text: "Apply for Marine Venture 2026 to get equity funding, mentorship, and incubation support for innovative maritime startups in AI, automation, decarbonization, and blockchain solutions.",
        filters: ["Equity"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeMarine,
        icon: "waves" as const,
      },
      {
        id: "matrix-capital",
        title: "Matrix Capital Fellowship",
        text: "Discover the Matrix Capital Fellowship Scheme 2026. Learn about eligibility, funding up to ₹4.52 Crore, mentorship, focus areas including AI, FinTech, MedTech, and required documents.",
        filters: ["Equity"] as const,
        featured: false,
        filterOnly: true,
        image: photos.aboutTeam,
        icon: "grid" as const,
      },
      {
        id: "tech-equity",
        title: "Tech Equity Program",
        text: "Discover the Tech Equity Program Scheme, an elite global startup accelerator for blockchain, Web3 & AI companies offering funding up to ₹4.15 Cr, mentorship, and access to global investors.",
        filters: ["Equity"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeLab,
        icon: "circuit" as const,
      },
      {
        id: "udyog-funding",
        title: "Udyog Funding",
        text: "Master Udyog Funding (Pitch by Deel). Learn about eligibility, $1 Million SAFE investment, global focus areas, required documents, and expert application tips.",
        filters: ["Equity"] as const,
        featured: false,
        filterOnly: true,
        image: photos.serviceGrowth,
        icon: "factory" as const,
      },
      {
        id: "vc-fund-st",
        title: "VC Fund for ST",
        text: "Explore the VC Fund for ST scheme details. Secure equity and debt funding up to ₹5 Crore with elite incubation support for Scheduled Tribe entrepreneurs.",
        filters: ["Equity"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeStandup,
        icon: "users" as const,
      },
      {
        id: "venture-fund",
        title: "Venture Fund",
        text: "Secure up to ₹5 Crore in equity funding with Venture Fund (MH). Learn about eligibility, focus sectors, required documents, and expert application tips.",
        filters: ["Equity"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeVc,
        icon: "wallet" as const,
      },
      {
        id: "venture-challenge",
        title: "Venture Funding Challenge",
        text: "Master the Venture Funding Challenge by Shiv Nadar AIC. Learn about eligibility, funding up to ₹1 Crore, focus areas, required documents, and expert tips.",
        filters: ["Equity"] as const,
        featured: false,
        filterOnly: true,
        image: photos.credentialGrowth,
        icon: "trophy" as const,
      },
      {
        id: "deep-tech",
        title: "Deep Tech Funding",
        text: "Explore the Deep Tech Funding scheme by IIT Tirupati TIH, offering up to ₹1 crore for early-stage tech research, prototype development, and commercialization.",
        filters: ["Equity"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeLab,
        icon: "cpu" as const,
      },
      {
        id: "new-venture",
        title: "New Venture Program",
        text: "Explore the New Venture Program 2025 by EmTek in Bhubaneswar. Learn about eligibility, benefits, focus areas, and the application process for early-stage startups in Industry 4.0 technologies.",
        filters: ["Equity"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeStartup,
        icon: "rocket" as const,
      },
      {
        id: "ratan-funding",
        title: "Ratan Funding",
        text: "Discover the Ratan Funding Scheme 2026 by Ratan Tata Innovation Hub. Learn about funding up to ₹30 Lakhs, eligibility criteria, mentorship, and application documents.",
        filters: ["Equity"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemePitch,
        icon: "wallet" as const,
      },
      {
        id: "investment-readiness",
        title: "Investment Readiness Accelerator (IRA) 2.0",
        text: "ISB I-Venture's IRA 2.0 prepares Seed to Series A startups for investor meetings through pitch coaching, financial modelling, and VC network access.",
        filters: ["Equity"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeVc,
        icon: "compass" as const,
      },
      {
        id: "technovibe",
        title: "TechnoVibe Funding",
        text: "Unlock up to ₹10 Lakhs in tiered grants for your blockchain startup. Explore focus areas in governance, supply chain, and healthcare.",
        filters: ["Equity"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeTech,
        icon: "circuit" as const,
      },
      {
        id: "act-grant",
        title: "Act Grant",
        text: "Atal Community Innovation Center grants for social innovation projects",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.aboutTeam,
        icon: "users" as const,
      },
      {
        id: "mahila-empowerment",
        title: "Mahila Empowerment Scheme",
        text: "Grants up to ₹15 Lakhs for women-led startups and entrepreneurs",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeStandup,
        icon: "users" as const,
      },
      {
        id: "spark-grant",
        title: "Spark Grant",
        text: "Innovation grants for technology-driven startup ideas and prototypes",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeStartup,
        icon: "rocket" as const,
      },
      {
        id: "tide-2",
        title: "TIDE 2.0 Scheme",
        text: "Technology Incubation and Development of Entrepreneurs program",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeTech,
        icon: "cpu" as const,
      },
      {
        id: "rkvy-raftaar",
        title: "RKVY Raftaar",
        text: "Rashtriya Krishi Vikas Yojana for agri-startups and innovation",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeAgri,
        icon: "agri" as const,
      },
      {
        id: "nidhi-prayas",
        title: "Nidhi Prayas",
        text: "Grant support for students and faculty to convert ideas into prototypes",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeLab,
        icon: "sprout" as const,
      },
      {
        id: "government-grants",
        title: "Government Grants",
        text: "Financial support programs by the government to help startups, MSMEs, and innovators scale their business without repayment obligations.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.aboutServiceGrants,
        icon: "landmark" as const,
      },
      {
        id: "meity-genesis-eir",
        title: "MeitY GENESIS EIR",
        text: "Entrepreneur-in-Residence support under MeitY GENESIS to help technology innovators build and launch deep-tech startups.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeTech,
        icon: "cpu" as const,
      },
      {
        id: "agri-business-grants",
        title: "Agri Business Grants",
        text: "Funding support for agriculture-based startups, agri-processing units, and rural enterprises to strengthen the agri value chain.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeHorticulture,
        icon: "leaf" as const,
      },
      {
        id: "social-impact",
        title: "Social Impact Innovation Scheme",
        text: "Grants supporting startups and organizations creating innovative solutions that improve social welfare and community development.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.aboutIntroCrowd,
        icon: "users" as const,
      },
      {
        id: "mobility-innovation",
        title: "Mobility Innovation Program",
        text: "Funding initiative for startups developing smart mobility, EV technologies, and next-generation transportation solutions.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemePitch,
        icon: "compass" as const,
      },
      {
        id: "great-scheme",
        title: "GREAT Scheme",
        text: "Global Research and Entrepreneurship Assistance Technology scheme supporting research-driven startups and innovative technology projects.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeLab,
        icon: "circuit" as const,
      },
      {
        id: "uyegp",
        title: "UYEGP Scheme",
        text: "Unemployed Youth Employment Generation Programme providing financial assistance for youth to start new businesses.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeMudra,
        icon: "wallet" as const,
      },
      {
        id: "venture-tech-funding",
        title: "Venture Tech Funding",
        text: "Technology-focused funding program supporting innovative startups working in AI, software, hardware, and emerging technologies.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeTech,
        icon: "cpu" as const,
      },
      {
        id: "cybersecurity-fund",
        title: "Cybersecurity Fund",
        text: "Funding initiative supporting cybersecurity startups and innovations to strengthen digital infrastructure and data protection.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeGuarantee,
        icon: "shield" as const,
      },
      {
        id: "art-program",
        title: "ART Program",
        text: "Accelerator program supporting research, technology development, and innovative startup solutions across multiple industries.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemePitch,
        icon: "trophy" as const,
      },
      {
        id: "agri-sure-fund",
        title: "Agri Sure Fund",
        text: "Investment support program focused on strengthening agricultural startups and sustainable farming innovations.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeAgri,
        icon: "agri" as const,
      },
      {
        id: "grant-for-ventures",
        title: "Grant for Ventures",
        text: "Government grants designed to support early-stage startups and entrepreneurs developing innovative business ideas.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeStartup,
        icon: "rocket" as const,
      },
      {
        id: "growth-grant",
        title: "Growth Grant",
        text: "Financial assistance aimed at helping startups and MSMEs scale operations, expand markets, and accelerate growth.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.serviceGrowth,
        icon: "elevator" as const,
      },
      {
        id: "brightpath-ventures",
        title: "Brightpath Ventures",
        text: "Startup support program offering mentorship, funding access, and strategic guidance for high-potential entrepreneurs.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeVc,
        icon: "compass" as const,
      },
      {
        id: "health-accelerator",
        title: "Health Accelerator Scheme",
        text: "Program supporting healthcare startups working on medical technology, digital health, and innovative healthcare services.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.aboutCertFssai,
        icon: "badge" as const,
      },
      {
        id: "startup-accelerator",
        title: "Startup Accelerator Scheme",
        text: "Acceleration program designed to support startups with funding access, mentorship, and market expansion opportunities.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeSeed,
        icon: "rocket" as const,
      },
      {
        id: "startup-spark",
        title: "Startup Spark Scheme",
        text: "Early-stage startup support initiative helping innovators transform ideas into viable businesses.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeStartup,
        icon: "sprout" as const,
      },
      {
        id: "horizon-fund-scheme",
        title: "Horizon Fund Scheme",
        text: "Funding program supporting research-driven startups and advanced technology innovations with global impact potential.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeVc,
        icon: "compass" as const,
      },
      {
        id: "leap-fund-scheme",
        title: "Leap Fund Scheme",
        text: "Investment support for startups aiming to scale rapidly through innovation, technology development, and market expansion.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemePitch,
        icon: "elevator" as const,
      },
      {
        id: "hp-udgam",
        title: "HP Udgam Scheme",
        text: "Startup support initiative by Himachal Pradesh government encouraging entrepreneurship and business growth in the state.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.footerCity,
        icon: "landmark" as const,
      },
      {
        id: "defence-scheme",
        title: "Defence Scheme",
        text: "Funding and support program for startups developing technologies for defence, aerospace, and national security sectors.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.aboutCertZed,
        icon: "shield" as const,
      },
      {
        id: "government-grants-guide",
        title: "Government Grants Guide",
        text: "An overview of how government grants work for startups and MSMEs — eligibility, application process and expert support.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.faqDocuments,
        icon: "percent" as const,
      },
      {
        id: "aditi-defence",
        title: "Aditi Defence 4.0 Challenge",
        text: "Aditi Defence 4.0 by DIO & Ministry of Defence offers grant funding up to ₹25 Crore for Indian startups and MSMEs developing advanced defence and dual-use technologies.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.aboutCertZed,
        icon: "trophy" as const,
      },
      {
        id: "aerospace-defence",
        title: "Aerospace Defence Fund",
        text: "Explore the Aerospace Defence Fund 2026, offering up to ₹25 Cr funding, mentorship, and incubation support for innovative Indian defence startups.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeLab,
        icon: "compass" as const,
      },
      {
        id: "agri-startup-shitij",
        title: "Agri Startup Fund (SHITIJ 2.0)",
        text: "Discover how the Agri Startup Fund (SHITIJ 2.0) supports innovative agri-tech startups with incubation, mentoring, market access, and funding opportunities.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeAgri,
        icon: "agri" as const,
      },
      {
        id: "agri-tech-fund",
        title: "Agri-Tech Fund Assistance",
        text: "Learn everything about the Agri-Tech Fund Assistance Scheme, including eligibility, benefits, funding up to ₹35 lakh, and incubation support through SmartAgri CoE.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeHorticulture,
        icon: "leaf" as const,
      },
      {
        id: "agrinext",
        title: "AgriNext",
        text: "Learn how AgriNext supports agri-tech startups in Kerala with up to ₹25 Lakhs in grants, incubation support, pilot opportunities, and strategic scaling.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeAgri,
        icon: "agri" as const,
      },
      {
        id: "loreal-green",
        title: "L'Oréal Green Sciences Incubator",
        text: "Get equity-free funding up to €100,000 (~₹90 Lakhs) through L'Oréal Green Sciences Incubator for sustainable beauty, green chemistry, and biotech innovations.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeLab,
        icon: "leaf" as const,
      },
      {
        id: "csr-fund",
        title: "CSR Fund",
        text: "Discover the CSR Fund 2026 by Draper Richards Kaplan Foundation. Learn about eligibility, funding up to ₹2.63 Cr, mentorship, and document requirements for NGOs and mission-driven startups.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.credentialGrowth,
        icon: "users" as const,
      },
      {
        id: "cybersecurity-karnataka",
        title: "Cybersecurity Incentive Policy Karnataka",
        text: "Learn about internship incentives, R&D funding, and eligibility criteria for Karnataka-based cybersecurity startups under the Cybersecurity Incentive Policy.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeTech,
        icon: "shield" as const,
      },
      {
        id: "early-stage-grant",
        title: "Early-Stage Startup Grant",
        text: "Discover details, eligibility, and application process for the Early-Stage Startup Grant to grow your startup with funding, mentoring, and incubation.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeSeed,
        icon: "sprout" as const,
      },
      {
        id: "elevate-nxt",
        title: "ELEVATE NxT",
        text: "Learn everything about the ELEVATE NxT 2026 scheme in Karnataka – eligibility, benefits, funding support, mentorship, and documents required for startups.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeStartup,
        icon: "elevator" as const,
      },
      {
        id: "empowersphere",
        title: "EmpowerSphere Skilling & Livelihood Futures",
        text: "Apply for EmpowerSphere Skilling & Livelihood Futures 2026 to receive grants up to ₹12.5 Lakh, mentorship, and ecosystem support for social impact startups in India.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.aboutTeam,
        icon: "users" as const,
      },
      {
        id: "fintech-challenge",
        title: "Fintech Startup Challenge Scheme",
        text: "Discover everything about the Fintech Startup Challenge 2025, including eligibility, funding benefits, focus areas, and required documents. Apply now to scale your fintech solutions with expert mentorship and funding support.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeTax,
        icon: "wallet" as const,
      },
      {
        id: "fund-sc-youth",
        title: "Fund for SC Youth 2.0",
        text: "Learn about the Fund for SC Youth 2.0, a government-backed initiative providing grants up to ₹30 Lakhs, mentorship, and incubation to empower SC entrepreneurs across India.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeStandup,
        icon: "users" as const,
      },
      {
        id: "fund-for-up",
        title: "Fund for UP",
        text: "Explore the Fund for UP Scheme details. Get insights into the seed grant, marketing capital top-ups, and milestone-linked funding for Uttar Pradesh startups.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.footerCity,
        icon: "landmark" as const,
      },
      {
        id: "msme-certification",
        title: "MSME Certification",
        text: "Get your Micro, Small, and Medium Enterprise (MSME) certified to access government schemes, funding opportunities, and other benefits designed for business growth.",
        filters: ["Certificate"] as const,
        featured: false,
        filterOnly: true,
        image: photos.aboutServiceCerts,
        icon: "badge" as const,
      },
      {
        id: "business-registration",
        title: "Business Registration",
        text: "Easily register your business with the government, ensuring legal compliance and access to essential services, funding, and tax benefits.",
        filters: ["Certificate"] as const,
        featured: false,
        filterOnly: true,
        image: photos.aboutServiceRegistration,
        icon: "factory" as const,
      },
      {
        id: "certs-compliance",
        title: "Certifications and Compliance",
        text: "Comprehensive services to help your business meet regulatory requirements, obtain necessary certifications, and ensure compliance with industry standards.",
        filters: ["Certificate"] as const,
        featured: false,
        filterOnly: true,
        image: photos.aboutCertIso,
        icon: "badge" as const,
      },
      {
        id: "iso-certification",
        title: "ISO Certification",
        text: "Achieve ISO certification for your business, demonstrating commitment to quality, safety, and environmental standards that boost credibility and global competitiveness.",
        filters: ["Certificate"] as const,
        featured: false,
        filterOnly: true,
        image: photos.aboutCertIso,
        icon: "badge" as const,
      },
      {
        id: "startup-india-cert",
        title: "Startup India Certification & Registration",
        text: "Register your startup under the Startup India initiative to unlock government benefits, funding opportunities, and tax exemptions designed for new ventures.",
        filters: ["Certificate"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeSeed,
        icon: "rocket" as const,
      },
      {
        id: "tax-exemption",
        title: "Tax Exemption",
        text: "Explore tax exemption schemes for startups and MSMEs to reduce financial burden and maximize profits while complying with government regulations.",
        filters: ["Certificate"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeTax,
        icon: "percent" as const,
      },
      {
        id: "startup-india-eligibility",
        title: "Startup India Scheme Eligibility",
        text: "Understand Startup India scheme eligibility, new turnover limits, deep tech startup benefits, cooperative inclusion, and updated DPIIT recognition rules — plus how to apply for funding, tax benefits, and other support programs.",
        filters: ["Certificate"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeStartup,
        icon: "rocket" as const,
      },
      {
        id: "tax-exemption-certificate",
        title: "Tax Exemption Certificate",
        text: "Complete guide to obtaining a tax exemption certificate under Section 80IAC. Eligibility, documents and application process for DPIIT-recognized startups and businesses.",
        filters: ["Certificate"] as const,
        featured: false,
        filterOnly: true,
        image: photos.aboutCertTax,
        icon: "percent" as const,
      },
      {
        id: "semiconductor",
        title: "Semiconductor Scheme",
        text: "Government initiative to support the semiconductor industry with funding, infrastructure, and research grants to promote growth and technological advancements in India.",
        filters: ["Subsidy"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeTech,
        icon: "circuit" as const,
      },
      {
        id: "twees",
        title: "TWEES Scheme",
        text: "Tamil Nadu Women Employment and Entrepreneurship Scheme — loans up to ₹10 Lakh with 25% subsidy (max ₹2 Lakh) for women and transgender entrepreneurs.",
        filters: ["Subsidy"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeStandup,
        icon: "users" as const,
      },
      {
        id: "maharashtra-govt",
        title: "Maharashtra Government Scheme",
        text: "Various funding and support schemes by the Maharashtra Government to encourage local businesses, startups, and MSMEs to expand and innovate within the state.",
        filters: ["Subsidy"] as const,
        featured: false,
        filterOnly: true,
        image: photos.footerCity,
        icon: "landmark" as const,
      },
      {
        id: "cold-storage-subsidy",
        title: "Cold Storage Subsidy Scheme",
        text: "Explore the Cold Storage Subsidy Scheme details. Get insights into capital subsidies, interest subvention, and the step-by-step process for agro-entrepreneurs.",
        filters: ["Subsidy"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeHorticulture,
        icon: "leaf" as const,
      },
      {
        id: "pm-kusum",
        title: "PM KUSUM Scheme",
        text: "Complete guide on PM KUSUM Scheme covering eligibility, components A, B & C, subsidy details, documents required, and how farmers can benefit from solar irrigation.",
        filters: ["Subsidy"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeSolar,
        icon: "agri" as const,
      },
      {
        id: "startup-india-seed-debt",
        title: "Startup India Seed Fund",
        text: "Seed funding initiative under Startup India to provide financial support to early-stage startups, helping them bring their ideas to market and scale up operations.",
        filters: ["Debt"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeSeed,
        icon: "sprout" as const,
      },
      {
        id: "unsecured-business-loan",
        title: "Unsecured Business Loan",
        text: "Access business loans without the need for collateral, allowing startups and small businesses to secure funding based on their financial performance and business potential.",
        filters: ["Debt"] as const,
        featured: false,
        filterOnly: true,
        image: photos.serviceLoan,
        icon: "wallet" as const,
      },
      {
        id: "rdif",
        title: "RDIF Scheme",
        text: "Explore the Research Development and Innovation Fund (RDIF) Scheme 2026, including eligibility, funding options, focus sectors, and expert guidance.",
        filters: ["Debt"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeLab,
        icon: "cpu" as const,
      },
    ],
  },
  strip: [
    { value: "₹50Cr+", label: "Total Funding Disbursed Annually" },
    { value: "50L+", label: "Entrepreneurs Supported" },
    { value: "500+", label: "Schemes & Programs Available" },
  ] as const,
  specialized: {
    eyebrow: "Beyond Portals",
    heading: "Specialized Funding Schemes",
    sub: "Expert-assisted programs and funding mechanisms to help you access government benefits",
    items: [
      {
        title: "NAIFF Funding",
        text: "Government-backed funding support to scale MSMEs and startups",
        href: "/scheme/naif",
        image: photos.schemeAgri,
        icon: "naiff" as const,
      },
      {
        title: "Tax Exemption Benefits",
        text: "Income tax, GST & compliance exemptions for eligible businesses",
        href: "/services/legal",
        image: photos.schemeTax,
        icon: "tax" as const,
      },
      {
        title: "Seed Funding",
        text: "Early-stage capital support for innovative startups",
        href: "/scheme/seed-fund",
        image: photos.schemeSeed,
        icon: "seed" as const,
      },
      {
        title: "Venture Capital Support",
        text: "Equity & VC access for high-growth potential ventures",
        href: "/services/growth",
        image: photos.schemeVc,
        icon: "vc" as const,
      },
    ],
  },
} as const;

export const schemeFaq = {
  heading: "Scheme questions, answered",
  sub: "Eligibility, documents, and how we match you to the right government program.",
  items: [
    {
      question: "How do I know which scheme I am eligible for?",
      answer:
        "Share your business type, city, turnover band and existing registrations on WhatsApp. We screen 50+ central and state schemes and shortlist 2–3 realistic options with timelines — usually within 48 hours.",
    },
    {
      question: "Do I need Udyam / MSME registration first?",
      answer:
        "Yes for most MSME schemes and many bank products — Udyam is the key eligibility proof. If you do not have it yet, we file Udyam first and then map the right loan, subsidy or guarantee scheme.",
    },
    {
      question: "How long does a scheme application take?",
      answer:
        "Most funding cases take 4–12 weeks depending on the scheme queue, bank processing and portal queries. Certification schemes are often faster. We send a weekly status so you always know where the file stands.",
    },
    {
      question: "Is Vikas Bharat a government office?",
      answer:
        "No. We are a private consultancy. We prepare documentation, file on official portals and coordinate with banks and agencies — we are not affiliated with any government department.",
    },
    {
      question: "What documents do I need to start?",
      answer:
        "Typically PAN, Aadhaar, Udyam, GST (if registered), bank statements and a brief project note. We send a scheme-specific checklist after the eligibility call so you only collect what is actually required.",
    },
  ],
} as const;

export const grantPage = {
  eyebrow: "Government Schemes • Non-Repayable Funding",
  heading: "Government Grants",
  kicker: "MSME • Startup India • DPIIT • Sector-Specific Schemes",
  intro:
    "Access non-repayable government funding with Vikas Bharat’s specialized grants consultancy — scheme identification, eligibility assessment, application development, documentation support and follow-up to maximise your chances of securing government financial assistance.",
  cta: "Start Funding Journey",
  imageAlt: "Advisor preparing a government grant application with a founder",
  stats: [
    { value: "₹500Cr+", label: "Grants Secured" },
    { value: "50+", label: "Schemes Covered" },
    { value: "85%", label: "Success Rate" },
    { value: "100%", label: "Documentation Support" },
  ] as const,
  unlock: {
    eyebrow: "Non-Repayable Capital",
    heading: "Unlock Government Funding for Your Business",
    paragraphs: [
      "Government grants are an excellent source of non-repayable funding that can help businesses grow without incurring debt. These grants cover a wide range of areas, including research and development, manufacturing and export promotion, providing crucial support to startups and MSMEs.",
      "Vikas Bharat specialises in connecting businesses with suitable government funding programs, streamlining the complex application process and developing proposals that align with the goals of each scheme. Our expertise boosts your chances of approval while ensuring full compliance with grant requirements.",
    ],
    benefitsHeading: "Key Benefits",
    benefits: [
      "Non-repayable funding",
      "Targeted sector support",
      "Subsidies for capital expenditure and tech upgrades",
      "Focus on job creation and export promotion",
    ],
  },
  categories: {
    eyebrow: "Grant Map",
    heading: "Major Grant Categories We Cover",
    sub: "Central and sector programs we screen against your business model, location and stage.",
    leftHeading: "Who Can Apply?",
    rightHeading: "What Makes Us Different",
    items: [
      {
        title: "Startup India Seed Fund",
        text: "Financial assistance for early-stage startups for proof of concept, prototype development, product trials.",
        icon: "seed" as const,
      },
      {
        title: "MSME Technology Upgradation Schemes",
        text: "Capital subsidies for modernization and technology enhancement of manufacturing units.",
        icon: "tech" as const,
      },
      {
        title: "PMEGP (Prime Minister's Employment Generation Programme)",
        text: "Subsidies for new manufacturing, services, or trading micro-enterprises.",
        icon: "factory" as const,
      },
      {
        title: "Export Promotion Capital Goods (EPCG)",
        text: "Duty exemptions for capital goods imports for export-oriented businesses.",
        icon: "export" as const,
      },
      {
        title: "Biotechnology Industry Research Assistance Council (BIRAC) Grants",
        text: "Funding for biotech startups and innovation projects.",
        icon: "lab" as const,
      },
      {
        title: "Design-Led Manufacturing Scheme",
        text: "Support for domestic manufacturing of telecom and networking products.",
        icon: "chip" as const,
      },
      {
        title: "SIDBI Funds",
        text: "Special focus on MSMEs in priority sectors including manufacturing and service enterprises.",
        icon: "landmark" as const,
      },
      {
        title: "National Initiative for Developing and Harnessing Innovations (NIDHI)",
        text: "Support for tech-based startups and innovation.",
        icon: "rocket" as const,
      },
      {
        title: "Agriculture Processing and Rural Development Grants",
        text: "Funding for food processing and agribusiness ventures.",
        icon: "agri" as const,
      },
      {
        title: "Textile Sector Schemes",
        text: "Support for technical textiles, apparel manufacturing and textile park development.",
        icon: "textile" as const,
      },
    ],
  },
  services: {
    eyebrow: "Grants Desk",
    heading: "Our Grants Consultancy Services",
    sub: "End-to-end support from first scheme match to post-approval reporting.",
    items: [
      {
        title: "Scheme Identification",
        text: "Research and identify relevant grant programs aligned with your business model, industry, location and growth objectives.",
        icon: "search" as const,
      },
      {
        title: "Eligibility Assessment",
        text: "Conduct thorough evaluation of your business against scheme criteria to determine qualification and prepare a compliance roadmap.",
        icon: "clipboard" as const,
      },
      {
        title: "Strategic Application Planning",
        text: "Develop application strategies that highlight alignment between your business objectives and scheme priorities.",
        icon: "map" as const,
      },
      {
        title: "Proposal Development",
        text: "Create compelling proposals including project plans, impact assessments and implementation roadmaps tailored to scheme requirements.",
        icon: "file" as const,
      },
      {
        title: "Documentation Support",
        text: "Prepare comprehensive documentation packages including business plans, financial projections and supporting evidence.",
        icon: "folder" as const,
      },
      {
        title: "Application Submission",
        text: "Handle timely submission with proper formatting, organisation and adherence to all procedural requirements.",
        icon: "send" as const,
      },
      {
        title: "Interview & Presentation Support",
        text: "Prepare for and participate in evaluation interviews, presentations and clarification sessions with funding authorities.",
        icon: "mic" as const,
      },
      {
        title: "Post-Approval Compliance",
        text: "Ensure adherence to grant terms, reporting requirements and utilisation guidelines to prevent complications.",
        icon: "shield" as const,
      },
    ],
  },
  process: {
    eyebrow: "How We File",
    heading: "Our Grant Application Process",
    sub: "A structured approach to maximise your grant approval chances.",
    steps: [
      {
        title: "Initial Consultation",
        text: "Understand your business model, objectives and funding requirements through comprehensive discussion.",
      },
      {
        title: "Scheme Research",
        text: "Identify all relevant government schemes and grants matching your business profile and requirements.",
      },
      {
        title: "Eligibility Analysis",
        text: "Assess qualification potential for identified schemes and determine documentation needs.",
      },
      {
        title: "Application Strategy",
        text: "Develop compelling narratives that align your business with scheme objectives and highlight potential impact.",
      },
      {
        title: "Documentation Preparation",
        text: "Create comprehensive application packages with all required forms, business plans and supporting documents.",
      },
    ],
  },
  documents: {
    eyebrow: "Paperwork",
    heading: "Required Documents",
    note: "Documentation requirements vary significantly between grant schemes. Our team provides customised checklists specific to your target schemes after initial assessment.",
    items: [
      "Business registration certificates (Incorporation Certificate, MSME Registration, etc.)",
      "Financial statements for the past 2–3 years (as applicable)",
      "Cost estimates and quotations for proposed expenditures",
      "Industry-specific certifications and licenses",
      "Bank statements and existing financing documentation",
      "PAN, GST registration and other tax-related documents",
      "Detailed project report with implementation plan and timelines",
      "Land and building ownership/lease documents (where applicable)",
      "Promoter profiles with identification and address proofs",
      "Employment and skill development plans (for relevant schemes)",
    ],
    cta: "Download For More",
  },
} as const;

export const grantFaq = {
  heading: "Grant questions, answered",
  sub: "Eligibility, timelines, coverage and what happens after a grant is sanctioned.",
  items: [
    {
      question: "Which businesses qualify for government grants in India?",
      answer:
        "Grant eligibility varies by scheme, but generally focuses on registered entities including MSMEs, startups recognised by DPIIT, manufacturing units, export-oriented businesses and innovative enterprises.",
    },
    {
      question: "How long does the government grant application process take?",
      answer:
        "The total process from initiation to fund receipt generally spans 4–9 months, with smaller grants having faster processing times than larger funding programs.",
    },
    {
      question: "What costs are typically covered by government grants?",
      answer:
        "Grant coverage typically includes capital expenditure, infrastructure development, R&D activities, technology acquisition, quality certification, marketing and export promotion, and skill development.",
    },
    {
      question: "What are the common reasons for grant application rejection?",
      answer:
        "Common rejection factors include incomplete documentation, misalignment between project and scheme objectives, unrealistic financial projections, insufficient innovation, and lack of promoter experience.",
    },
    {
      question: "Are there any obligations after receiving a government grant?",
      answer:
        "Yes. Post-approval obligations typically include maintaining specific business operations for a minimum period, implementing the project according to the approved plan, and submitting periodic progress and financial reports.",
    },
    {
      question: "Can Vikas Bharat guarantee grant approval?",
      answer:
        "We cannot guarantee approval — final decisions rest with government authorities. Our specialised desk is built to improve success probability. The grants practice cites an 85% success rate on files we prepare and follow through.",
    },
  ],
} as const;

export const loanPage = {
  eyebrow: "Business Loans • Bank & NBFC Financing",
  heading: "Business Loans",
  kicker: "MSME • Startup • Working Capital • Equipment Financing",
  intro:
    "Get access to government-backed loans, funding options, and expert financial guidance to grow your business.",
  cta: "Start Your Funding Journey",
  imageAlt: "Advisor reviewing business loan options with a founder",
  stats: [
    { value: "₹500Cr+", label: "Funding Facilitated" },
    { value: "20,000+", label: "Businesses Supported" },
    { value: "25+", label: "Banks & NBFCs" },
    { value: "100%", label: "Expert Guidance" },
  ] as const,
  unlock: {
    eyebrow: "Funding Highlights",
    heading: "MSME financing, under one desk",
    paragraphs: [
      "Vikas Bharat is built around funding experience and MSME financing — government-backed loans, bank products and NBFC options matched to your stage and cash-flow need.",
      "We evaluate your profile, shortlist lenders, prepare the file, and stay with the application through verification until disbursement.",
    ],
    benefitsHeading: "What you get",
    benefits: [
      "Access to multiple financing options",
      "Expert funding guidance",
      "Government-backed schemes",
      "Bank and NBFC financing",
    ],
  },
  categories: {
    eyebrow: "Loan Map",
    heading: "Business Financing Solutions",
    sub: "Multiple forms of business financing for MSMEs and growing businesses.",
    leftHeading: "Core Loan Products",
    rightHeading: "Government-Backed Products",
    items: [
      {
        title: "Term Loans",
        text: "Business loans designed for long-term investments, expansion, infrastructure and other major business requirements.",
        icon: "landmark" as const,
      },
      {
        title: "Working Capital Loans",
        text: "Financing to manage day-to-day business expenses, inventory, salaries, supplier payments and cash-flow requirements.",
        icon: "wallet" as const,
      },
      {
        title: "Equipment Financing",
        text: "Funding for purchasing machinery, equipment and technology required for business expansion or modernization.",
        icon: "tech" as const,
      },
      {
        title: "Government Scheme Loans",
        text: "Access financing through government-supported programs designed specifically for MSMEs, startups and entrepreneurs.",
        icon: "factory" as const,
      },
      {
        title: "MUDRA Loans",
        text: "Government-backed financing for micro and small businesses, with loans available up to ₹20 lakh.",
        icon: "seed" as const,
      },
      {
        title: "CGTMSE Loans",
        text: "Collateral-free financing under the Credit Guarantee Fund Trust for Micro and Small Enterprises, with funding available up to ₹10 crore.",
        icon: "shield" as const,
      },
      {
        title: "Sector-Specific Loans",
        text: "Specialized financing options designed around specific industries, business models and government priorities.",
        icon: "rocket" as const,
      },
    ],
  },
  services: {
    eyebrow: "Why This Desk",
    heading: "Why Choose Vikas Bharat for Business Loans?",
    sub: "From eligibility to disbursement — a file that is matched, prepared and followed.",
    items: [
      {
        title: "Multiple Funding Options",
        text: "Access financing from banks, NBFCs and government-backed schemes based on your business requirements.",
        icon: "wallet" as const,
      },
      {
        title: "Better Loan Matching",
        text: "We evaluate your business profile and identify financing options that match your eligibility and funding needs.",
        icon: "search" as const,
      },
      {
        title: "Documentation Support",
        text: "Assistance with preparing financial statements, business documents, applications and other lender requirements.",
        icon: "folder" as const,
      },
      {
        title: "Faster Processing",
        text: "Structured documentation and application support helps reduce unnecessary delays during the loan process.",
        icon: "zap" as const,
      },
      {
        title: "Expert Financial Guidance",
        text: "Professional guidance throughout the funding journey, from eligibility assessment to loan disbursement.",
        icon: "users" as const,
      },
    ],
  },
  process: {
    eyebrow: "How We File",
    heading: "Our Business Loan Process",
    sub: "A structured path from first assessment to money in the account.",
    steps: [
      {
        title: "Business Assessment",
        text: "Understand your business, financial position, funding requirement and growth objectives.",
      },
      {
        title: "Eligibility Analysis",
        text: "Evaluate your business against available loan programs, lender requirements and government schemes.",
      },
      {
        title: "Loan Selection",
        text: "Identify suitable banks, NBFCs and government financing options based on your profile.",
      },
      {
        title: "Documentation",
        text: "Prepare and organize the required financial, business and compliance documentation.",
      },
      {
        title: "Application Submission",
        text: "Submit the loan application to the appropriate lender with the required supporting information.",
      },
      {
        title: "Verification & Approval",
        text: "Coordinate with lenders during verification, clarification and approval stages.",
      },
      {
        title: "Loan Disbursement",
        text: "Complete the final formalities and facilitate disbursement of the approved funding.",
      },
    ],
  },
  documents: {
    eyebrow: "Paperwork",
    heading: "Documents Required",
    note: "Typical documentation is listed below. Our team sends a lender-specific checklist after the eligibility assessment so you only collect what is actually required.",
    items: [
      "Business registration documents",
      "PAN and GST registration",
      "Udyam/MSME registration",
      "Bank statements",
      "Income tax returns",
      "Audited financial statements",
      "Profit & loss statements",
      "Balance sheets",
      "Business plan/project report",
      "KYC documents",
      "Address proof",
      "Details of existing loans",
      "Collateral documents where applicable",
    ],
    cta: "Download For More",
  },
  schemes: {
    eyebrow: "Scheme Desk",
    heading: "Government-Backed Loan Schemes",
    sub: "Financing programs available to Indian MSMEs and businesses.",
    leftHeading: "Micro & MSME",
    rightHeading: "Startup & Sector",
    items: [
      {
        title: "MUDRA / PMMY",
        text: "Loans for micro enterprises and small businesses, with financing available up to ₹10 lakh.",
        icon: "seed" as const,
      },
      {
        title: "CGTMSE",
        text: "Collateral-free credit support for eligible MSMEs, with coverage for loans up to ₹2 crore.",
        icon: "shield" as const,
      },
      {
        title: "Startup India Schemes",
        text: "Funding assistance and financing opportunities designed for eligible startups.",
        icon: "rocket" as const,
      },
      {
        title: "SIDBI Financing",
        text: "Specialized financial assistance for MSMEs and businesses through SIDBI programs.",
        icon: "landmark" as const,
      },
      {
        title: "Sector-Specific Government Schemes",
        text: "Financing programs designed for businesses operating in priority sectors.",
        icon: "factory" as const,
      },
    ],
  },
} as const;

export const loanFaq = {
  heading: "Loan questions, answered",
  sub: "Product types, timelines, rates, collateral and eligibility for MSME financing.",
  items: [
    {
      question: "What types of business loans are available for MSMEs in India?",
      answer:
        "MSMEs in India can access multiple financing options including term loans, working capital loans, equipment financing, MUDRA loans up to ₹10 lakhs, collateral-free financing under CGTMSE schemes up to ₹2 crores and specialized sector-specific loan schemes.",
    },
    {
      question: "How long does the business loan approval process take?",
      answer:
        "Small-ticket working capital loans through NBFCs can be approved within 2–3 days. Standard bank term loans typically require 2–4 weeks. Government scheme loans such as PMMY may require 3–5 weeks because of additional verification processes.",
    },
    {
      question: "What interest rates can I expect for business loans?",
      answer:
        "Current business loan interest rates typically range from 9–18%. Banks: approximately 9–14% for secured loans. NBFCs: approximately 12–18%. Government schemes such as PMMY: approximately 8–11% for eligible businesses.",
    },
    {
      question: "What collateral is required for business loans?",
      answer:
        "Small working-capital loans under ₹10 lakhs are often available without collateral. Loans under CGTMSE can be availed up to ₹2 crores without collateral. For standard term loans, lenders typically require collateral coverage of approximately 100–125% of the loan value.",
    },
    {
      question: "How can I improve my business loan eligibility?",
      answer:
        "Maintain a credit score above 700, keep business documentation and registrations up to date, demonstrate steady revenue growth, maintain audited financial statements, keep a clean banking history, and prepare a detailed business plan.",
    },
    {
      question: "Can startups and new businesses get loans without significant operating history?",
      answer:
        "Yes, although options are more limited. New businesses can explore Startup India programs, SIDBI startup assistance, and specialized NBFC startup lending. Depending on the lender, collateral, higher equity contribution and personal guarantees may be required.",
    },
  ],
} as const;

export const nbfcPage = {
  eyebrow: "Alternative Financing • Flexible Funding",
  heading: "NBFC Financing Solutions",
  kicker: "Quick Disbursement • Flexible Eligibility • Specialized Products",
  intro:
    "Banks said no — or just too slow? NBFCs offer faster approvals, flexible eligibility, and loan products that banks don’t provide. Vikas Bharat finds the right NBFC for your business and handles everything from application to disbursement.",
  cta: "Get NBFC Loan Options",
  imageAlt: "Advisor matching a founder to NBFC financing partners",
  stats: [
    { value: "24–72hrs", label: "Disbursement Time" },
    { value: "₹1Cr+", label: "Funding Available" },
    { value: "25+", label: "NBFC Partners" },
    { value: "Flexible", label: "Eligibility Criteria" },
  ] as const,
  unlock: {
    eyebrow: "Faster Capital",
    heading: "NBFC Financing Solutions",
    paragraphs: [
      "When you need faster approval or a loan product banks do not offer, we match you to the right NBFC from our network of 25+ partners — working capital, machinery, LAP, or invoice discounting.",
      "Vikas Bharat helps businesses identify suitable financing based on their business model, financial profile and funding requirements — across banks, NBFCs, government schemes and specialised products.",
    ],
    benefitsHeading: "Why Choose NBFC Financing?",
    benefits: [
      "Faster approval compared with traditional banks",
      "Flexible eligibility criteria",
      "Specialized loan products",
      "Customized financing solutions",
      "Faster disbursement",
      "Financing for businesses that may not fit traditional bank criteria",
    ],
  },
  categories: {
    eyebrow: "Product Desk",
    heading: "NBFC Loan Products",
    sub: "Specialised financing products that banks often do not offer — matched to your purpose and cash flow.",
    leftHeading: "Working Capital & Growth",
    rightHeading: "Asset & Invoice Finance",
    items: [
      {
        title: "Working Capital Loans",
        text: "Short-term financing to manage operational expenses, inventory, payroll, supplier payments and cash-flow requirements.",
        icon: "wallet" as const,
      },
      {
        title: "Business Term Loans",
        text: "Structured financing for business expansion, equipment purchases, infrastructure and long-term investments.",
        icon: "landmark" as const,
      },
      {
        title: "Loan Against Property",
        text: "Financing against residential or commercial property for businesses requiring larger-ticket funding.",
        icon: "factory" as const,
      },
      {
        title: "Invoice Discounting",
        text: "Convert outstanding invoices into immediate working capital instead of waiting for customers to make payments.",
        icon: "file" as const,
      },
      {
        title: "Machinery Finance",
        text: "Funding specifically designed for purchasing machinery, equipment and business assets.",
        icon: "tech" as const,
      },
    ],
  },
  audience: {
    eyebrow: "Fit Check",
    heading: "Who Can Benefit From NBFC Financing?",
    sub: "NBFC financing is positioned for businesses that need speed, flexibility, or a product banks do not underwrite.",
    leftHeading: "When banks are too slow",
    rightHeading: "When the product must fit",
    items: [
      {
        title: "Faster loan approval",
        text: "Need a sanction without the typical bank queue and committee cycle.",
        icon: "rocket" as const,
      },
      {
        title: "Urgent working capital",
        text: "Inventory, payroll or supplier payments that cannot wait on a 2–4 week bank file.",
        icon: "wallet" as const,
      },
      {
        title: "Bank eligibility gaps",
        text: "Difficulty meeting traditional bank criteria — vintage, collateral or CIBIL band.",
        icon: "shield" as const,
      },
      {
        title: "Unconventional cash flows",
        text: "Inconsistent or seasonal revenue that cash-flow underwriting can still support.",
        icon: "seed" as const,
      },
      {
        title: "Specialized products",
        text: "Invoice discounting, machinery finance or LAP structured around the actual use of funds.",
        icon: "tech" as const,
      },
      {
        title: "Larger-ticket financing",
        text: "Bigger tickets where property-backed or specialised NBFC products are a better match.",
        icon: "landmark" as const,
      },
      {
        title: "Invoice-based financing",
        text: "Unlock cash against receivables instead of waiting on customer payment cycles.",
        icon: "file" as const,
      },
      {
        title: "Flexible repayment",
        text: "Structures that can flex with seasonality, collections and growth plans.",
        icon: "factory" as const,
      },
    ],
  },
  services: {
    eyebrow: "Why This Desk",
    heading: "Benefits of Choosing Vikas Bharat",
    sub: "A 25+ NBFC network, product matching, and a file that is prepared and followed to disbursement.",
    items: [
      {
        title: "25+ NBFC Network",
        text: "Access a network of more than 25 NBFC partners to find a suitable financing option.",
        icon: "wallet" as const,
      },
      {
        title: "Faster Processing",
        text: "NBFCs can provide faster approvals and disbursement compared with traditional bank financing.",
        icon: "zap" as const,
      },
      {
        title: "Product Matching",
        text: "We match businesses with appropriate products such as working capital, machinery finance, LAP and invoice discounting.",
        icon: "search" as const,
      },
      {
        title: "Documentation Support",
        text: "Assistance throughout the documentation and application process.",
        icon: "folder" as const,
      },
      {
        title: "Better Financing Structure",
        text: "Support in selecting and structuring financing according to the business requirement.",
        icon: "map" as const,
      },
    ],
  },
  ecosystem: {
    eyebrow: "Financing Desk",
    heading: "Business Financing Support",
    sub: "We help you identify suitable financing based on your business model, financial profile and funding requirements.",
    items: [
      {
        title: "Banks",
        text: "Term loans, working capital and scheme-linked bank products when the file fits a branch underwriting path.",
        icon: "landmark" as const,
      },
      {
        title: "NBFCs",
        text: "Faster, more flexible partners for cash-flow, invoice, machinery and property-backed tickets.",
        icon: "wallet" as const,
      },
      {
        title: "Government schemes",
        text: "MUDRA, CGTMSE and other backed programs where eligibility and documentation can unlock cheaper capital.",
        icon: "clipboard" as const,
      },
      {
        title: "Specialized products",
        text: "Invoice discounting, LAP and machinery finance structured around the actual use of funds.",
        icon: "zap" as const,
      },
    ],
  },
  process: {
    eyebrow: "How We File",
    heading: "Our NBFC Financing Process",
    sub: "From first assessment to funds in the account — matched, documented and followed.",
    steps: [
      {
        title: "Business Assessment",
        text: "Understand your business profile, financial position, funding requirement and purpose of the loan.",
      },
      {
        title: "Eligibility Evaluation",
        text: "Assess your financials, credit profile, revenue, business vintage and funding requirements.",
      },
      {
        title: "NBFC Matching",
        text: "Match your business with suitable NBFC partners and financing products.",
      },
      {
        title: "Documentation",
        text: "Collect and organize financial, business, KYC and supporting documents.",
      },
      {
        title: "Application & Verification",
        text: "Submit the application and coordinate with the NBFC during verification and underwriting.",
      },
      {
        title: "Approval",
        text: "Complete lender requirements and obtain the final sanction.",
      },
      {
        title: "Disbursement",
        text: "Complete the final formalities and receive the approved funds.",
      },
    ],
  },
} as const;

export const nbfcFaq = {
  heading: "NBFC questions, answered",
  sub: "How NBFC loans differ from banks, what happens after a rejection, products and disbursement speed.",
  items: [
    {
      question: "What is the difference between an NBFC loan and a bank loan?",
      answer:
        "Both are business loans, but NBFCs are faster to approve, more flexible on eligibility, and offer products like invoice discounting that most banks don't. The trade-off is interest rates that are typically 1–4% higher than PSU bank rates.",
    },
    {
      question: "Can I get an NBFC loan if my bank loan application was rejected?",
      answer:
        "Yes, in many cases. NBFCs use different credit models. Some focus more on your cash flows than your CIBIL score, while others accept lower scores such as 650+ that banks would reject.",
    },
    {
      question: "What NBFC loan products are available for MSMEs?",
      answer:
        "Common NBFC products for MSMEs include working capital loans, term loans, Loan Against Property (LAP), invoice discounting and machinery finance. Vikas Bharat matches businesses with the appropriate product based on their funding purpose.",
    },
    {
      question: "How long does it take to get an NBFC loan disbursed?",
      answer:
        "Most NBFC loans disburse within 24–72 hours after complete documentation. Some fintechs in our network can disburse working-capital loans the same day for pre-approved profiles.",
    },
  ],
} as const;

export const registrationPage = {
  eyebrow: "Business Incorporation • Legal Entity",
  heading: "Business Registration Services",
  kicker: "Private Limited • LLP • OPC • Partnership",
  intro:
    "Get your business legally registered with Vikas Bharat’s end-to-end business registration services, offering quick and efficient processes for various business types. We provide expert documentation, compliance support, and post-registration assistance to help you establish your business identity properly.",
  cta: "Start Registration",
  imageAlt: "Advisor preparing company incorporation documents with a founder",
  stats: [
    { value: "48HRS", label: "Average Processing" },
    { value: "100%", label: "Online Process" },
    { value: "95%", label: "Success Rate" },
    { value: "20K+", label: "Businesses Registered" },
  ] as const,
  unlock: {
    eyebrow: "Why It Matters",
    heading: "Why the Right Registration Matters",
    paragraphs: [
      "Registering your business is the first real step from idea to operation. A registered company can open a current account, sign contracts, hire employees on a payroll, apply for government schemes and loans, and raise funding from investors. An unregistered business cannot do most of these things legally.",
      "The structure you choose — Private Limited Company, LLP, OPC, or partnership — determines your tax treatment, how much personal liability you carry, what compliance you are required to file every year, and how easy it is to bring in investors later. Getting this right from day one saves significant cost and paperwork down the road.",
      "Vikas Bharat handles the entire process — name reservation, DSC, MCA filing, Certificate of Incorporation, PAN, GST registration, and Udyam registration if applicable. You get a complete, operational business entity with a compliance calendar so nothing falls through the cracks.",
    ],
    benefitsHeading: "Key Benefits",
    benefits: [
      "Legal recognition & credibility",
      "Asset protection",
      "Access to funding",
      "Compliance & tax benefits",
    ],
  },
  categories: {
    eyebrow: "Entity Desk",
    heading: "Our Business Registration Services",
    sub: "A range of registration options so your business is legally recognised, protected, and ready for growth.",
    leftHeading: "Company & LLP",
    rightHeading: "Simpler structures & MSME",
    items: [
      {
        title: "Private Limited Company",
        text: "Ideal for scalable businesses with limited liability protection, offering easier access to funding.",
        icon: "landmark" as const,
      },
      {
        title: "Limited Liability Partnership (LLP)",
        text: "Combines the flexibility of a partnership with corporate liability protection and tax benefits.",
        icon: "shield" as const,
      },
      {
        title: "One Person Company (OPC)",
        text: "Perfect for solopreneurs to gain corporate identity and limited liability while maintaining full control.",
        icon: "seed" as const,
      },
      {
        title: "Sole Proprietorship",
        text: "The simplest business structure for individual entrepreneurs looking to operate with minimal regulatory requirements.",
        icon: "wallet" as const,
      },
      {
        title: "Partnership Firm",
        text: "Traditional structure for multiple owners with shared responsibility, suitable for service-based businesses.",
        icon: "factory" as const,
      },
      {
        title: "MSME Registration",
        text: "Official Udyam registration for micro, small and medium enterprises to access schemes, subsidies and priority sector lending.",
        icon: "rocket" as const,
      },
    ],
  },
  services: {
    eyebrow: "What We File",
    heading: "What Vikas Bharat Handles for You",
    sub: "Name to DSC, MCA filing, and post-incorporation setup — in one engagement.",
    items: [
      {
        title: "Name & Digital Signature",
        text: "Company name search, reservation on the MCA portal, and DSC (Digital Signature Certificate) for all directors.",
        icon: "search" as const,
      },
      {
        title: "Incorporation Filing",
        text: "MOA, AOA, SPICe+ form preparation and MCA submission. We track the application and respond to queries from the Registrar of Companies.",
        icon: "file" as const,
      },
      {
        title: "Post-Incorporation Setup",
        text: "Certificate of Incorporation, PAN, TAN, current account opening kit, and a compliance calendar covering annual ROC filings and board meetings.",
        icon: "folder" as const,
      },
      {
        title: "Add-On Registrations",
        text: "GST registration, Udyam (MSME) registration, DPIIT Startup recognition, and IEC (Import Export Code) — handled together.",
        icon: "clipboard" as const,
      },
    ],
  },
  eligibility: {
    eyebrow: "Who Can Apply",
    heading: "Eligibility Criteria for Business Registration",
    sub: "To apply for any of the business structures mentioned, you must meet the following criteria.",
    leftHeading: "By structure",
    rightHeading: "Common requirements",
    items: [
      {
        title: "Private Limited Company",
        text: "At least two directors (one Indian resident) and two shareholders.",
        icon: "landmark" as const,
      },
      {
        title: "LLP",
        text: "Two designated partners with at least one Indian resident.",
        icon: "shield" as const,
      },
      {
        title: "OPC",
        text: "Single director and shareholder with Indian citizenship and residency.",
        icon: "seed" as const,
      },
      {
        title: "Sole Proprietorship",
        text: "Any individual over 18 years with a valid Indian address.",
        icon: "wallet" as const,
      },
      {
        title: "Partnership Firm",
        text: "Minimum two partners with no upper limit on the maximum number.",
        icon: "factory" as const,
      },
      {
        title: "Valid Identity & Address",
        text: "PAN, Aadhaar, etc. for all directors and partners.",
        icon: "file" as const,
      },
      {
        title: "Registered Office Proof",
        text: "Utility bill, rent agreement, or NOC.",
        icon: "tech" as const,
      },
      {
        title: "DSC",
        text: "Digital Signature Certificate for all directors/partners (except sole proprietorships).",
        icon: "rocket" as const,
      },
      {
        title: "Business Name",
        text: "Unique name that does not infringe on existing trademarks.",
        icon: "chip" as const,
      },
    ],
  },
  process: {
    eyebrow: "How We File",
    heading: "Simple Application Process",
    sub: "Five steps from structure advice to a live, compliant entity.",
    steps: [
      {
        title: "Business Structure Consultation",
        text: "We analyze your business needs and recommend the most suitable legal structure.",
      },
      {
        title: "Name Reservation",
        text: "We assist in selecting and registering a unique business name.",
      },
      {
        title: "Documentation Preparation",
        text: "We prepare all required documents like MOA, AOA, LLP Agreement, or Partnership Deed.",
      },
      {
        title: "Government Filing",
        text: "We handle the submission of all paperwork to relevant authorities for successful registration.",
      },
      {
        title: "Post-Registration Support",
        text: "Assistance with PAN/TAN registration, bank account opening, GST registration, and other compliance requirements.",
      },
    ],
  },
  documents: {
    eyebrow: "Paperwork",
    heading: "Required Documents for Registration",
    note: "Exact papers depend on the structure you choose. After the consultation we send a checklist so you only collect what MCA or the registrar actually needs.",
    items: [
      "PAN Card & Aadhaar Card of all directors/partners/proprietors",
      "Passport-size photographs of all directors/partners",
      "Director Identification Number (DIN) for company directors",
      "LLP Agreement for Limited Liability Partnerships",
      "Proof of registered office (utility bill, rent agreement, or NOC)",
      "Digital Signature Certificate (DSC) for all directors/partners",
      "MOA & AOA for companies",
      "Bank statements / utility bills as address proof",
    ],
    cta: "Download For More",
  },
} as const;

export const registrationFaq = {
  heading: "Registration questions, answered",
  sub: "Structure choice, timelines, cost, foreign founders, compliance and conversion.",
  items: [
    {
      question: "Which business structure is best for my startup?",
      answer:
        "The ideal business structure depends on the number of owners, liability protection needs, funding sources, and scalability. For small businesses or solo entrepreneurs, a Sole Proprietorship or One Person Company (OPC) might be suitable. For scalable ventures seeking funding, a Private Limited Company or Limited Liability Partnership (LLP) is usually the better fit.",
    },
    {
      question: "How long does business registration take in India?",
      answer:
        "The business registration process in India typically takes 7 to 15 days. This includes document verification, name approval, and the final filing with the Registrar of Companies or relevant authority. First-structure consultancy is usually turned around within 48 hours so the file can start moving.",
    },
    {
      question: "What are the costs involved in business registration?",
      answer:
        "Costs vary by structure and state. Private Limited Company registration typically ranges from ₹6,000 to ₹30,000 depending on the filing path. LLP and Sole Proprietorship registrations are usually less expensive. Additional costs may include stamp duty, GST registration, and documentation charges. We share a clear fee summary before any filing starts.",
    },
    {
      question: "Can foreign nationals register a business in India?",
      answer:
        "Yes. Foreign nationals can set up a Private Limited Company or an LLP in India, but they must have a minimum of one Indian resident director or partner.",
    },
    {
      question: "What compliance requirements follow after registration?",
      answer:
        "After registering, you typically need to file annual returns with the Registrar of Companies (ROC), complete GST registration and returns where applicable, maintain financial records and file income tax returns, and obtain licences based on activity (for example FSSAI for food businesses, ISO for manufacturing). We issue a compliance calendar with the incorporation pack.",
    },
    {
      question: "Can I convert from one business structure to another later?",
      answer:
        "Yes. For example, you can convert a Sole Proprietorship into a Private Limited Company or an LLP if the business grows and needs a more formal structure and liability protection. The conversion path depends on the target structure and involves specific legal procedures — we map that before you file.",
    },
  ],
} as const;

export const opcPage = {
  eyebrow: "OPC • Solo Founder",
  heading: "One Person Company (OPC)",
  kicker: "Registration – Fast Process in India",
  intro:
    "Register your One Person Company (OPC) in India with a fast and simple process. Enjoy limited liability, complete control, and expert support to get started today.",
  cta: "Check Your Eligibility",
  imageAlt: "Solo founder completing One Person Company registration",
  stats: [
    { value: "1", label: "Director & Member" },
    { value: "₹1L+", label: "Authorised Capital" },
    { value: "₹2Cr", label: "Turnover Conversion Cap" },
    { value: "1", label: "Mandatory Nominee" },
  ] as const,
  unlock: {
    eyebrow: "Why OPC",
    heading: "What is a One Person Company?",
    paragraphs: [
      "OPC gives limited liability while allowing a single shareholder — with a mandatory nominee for continuity. Turnover thresholds trigger mandatory conversion to private limited beyond prescribed limits.",
      "The concept of a One Person Company was introduced under the Companies Act, 2013, enabling a single individual to establish a company with limited liability protection. As per Section 2(62), an OPC can be formed with only one director and one member — and both roles can be filled by the same individual.",
    ],
    benefitsHeading: "Why founders pick OPC",
    benefits: [
      "Single promoter + nominee",
      "Limited liability",
      "Easier compliance vs Pvt Ltd",
      "Separate legal entity",
    ],
  },
  services: {
    eyebrow: "OPC Desk",
    heading: "OPC Services",
    sub: "Eligibility, incorporation, compliance and scheme positioning — in one file.",
    items: [
      {
        title: "Eligibility",
        text: "Citizenship, nominee and sector checks before you file.",
        icon: "search" as const,
      },
      {
        title: "Incorporation",
        text: "Name, DSC, SPICe+ and Certificate of Incorporation.",
        icon: "file" as const,
      },
      {
        title: "Compliance",
        text: "AGM, filings and conversion triggers once the company is live.",
        icon: "clipboard" as const,
      },
      {
        title: "Grants",
        text: "Positioning for startup schemes post-incorporation.",
        icon: "wallet" as const,
      },
    ],
  },
  drawbacks: {
    eyebrow: "Know The Limits",
    heading: "Drawbacks of OPC Registration",
    sub: "OPC is built for a solo founder. These limits matter before you file.",
    items: [
      {
        title: "Limited to Small Businesses",
        text: "OPCs can only have one member, limiting their ability to raise substantial equity capital from multiple partners.",
        icon: "users" as const,
      },
      {
        title: "Business Restrictions",
        text: "Activities like financial investments and charitable endeavours are not permissible.",
        icon: "shield" as const,
      },
      {
        title: "Taxation",
        text: "Unlike a proprietorship, an OPC is taxed at corporate rates. However, you can explore tax exemptions for startups.",
        icon: "landmark" as const,
      },
    ],
  },
  eligibility: {
    eyebrow: "Who Can File",
    heading: "Eligibility Criteria for OPC Registration",
    sub: "Before you register an OPC online, ensure you meet the following criteria.",
    leftHeading: "Who can incorporate",
    rightHeading: "Limits & conversion",
    items: [
      {
        title: "Indian Citizen & NRI",
        text: "Only a natural person who is an Indian citizen, whether residing in India or abroad, can incorporate an OPC (Companies (Incorporation) 2nd Amendment Rules, 2021).",
        icon: "seed" as const,
      },
      {
        title: "Minimum Authorised Capital",
        text: "The OPC must have a minimum authorised capital of ₹1,00,000.",
        icon: "wallet" as const,
      },
      {
        title: "Nominee Requirement",
        text: "The founder must appoint a nominee during registration who will take over in case of death or incapacity.",
        icon: "users" as const,
      },
      {
        title: "Exclusions",
        text: "Banking, insurance and NBFC financial activities cannot be registered as OPCs.",
        icon: "shield" as const,
      },
      {
        title: "Conversion Requirement",
        text: "If paid-up capital exceeds ₹50 lakh or annual turnover exceeds ₹2 crore, the OPC must convert into a private limited company.",
        icon: "rocket" as const,
      },
      {
        title: "One OPC Per Individual",
        text: "An individual can establish only one OPC, and OPCs cannot have a minor as a member.",
        icon: "factory" as const,
      },
    ],
  },
  benefits: {
    eyebrow: "What You Unlock",
    heading: "Benefits of Registering an OPC",
    sub: "Corporate advantages of a private company, without a second shareholder.",
    leftHeading: "Legal & capital",
    rightHeading: "Control & continuity",
    items: [
      {
        title: "Separate Legal Entity",
        text: "The promoter is shielded from personal liability.",
        icon: "shield" as const,
      },
      {
        title: "Easy Access to Funding",
        text: "Better access to angel investors, venture funding and loans than a proprietorship.",
        icon: "wallet" as const,
      },
      {
        title: "Simplified Compliance",
        text: "Fewer regulatory requirements compared with a private limited company.",
        icon: "clipboard" as const,
      },
      {
        title: "Simple Formation",
        text: "One member and one nominee — no complex shareholder agreements.",
        icon: "seed" as const,
      },
      {
        title: "Efficient Management",
        text: "Decision-making is quick, and management remains conflict-free.",
        icon: "zap" as const,
      },
      {
        title: "Perpetual Succession",
        text: "The company continues operations even in the event of the founder’s death.",
        icon: "rocket" as const,
      },
      {
        title: "Credit Eligibility",
        text: "Easier to apply for collateral-light business loans and Mudra products.",
        icon: "landmark" as const,
      },
    ],
  },
  whyChoose: {
    eyebrow: "Why This Desk",
    heading: "Why Choose Vikas Bharat for OPC Registration?",
    sub: "From name reservation to post-incorporation funding — step-by-step, without the MCA fog.",
    items: [
      {
        title: "Expert Guidance",
        text: "From name reservation to MSME growth advisory, our desk offers step-by-step assistance.",
        icon: "search" as const,
      },
      {
        title: "Clear Fees",
        text: "Competitive pricing with a written summary before any MCA filing starts.",
        icon: "wallet" as const,
      },
      {
        title: "Full Compliance",
        text: "We ensure legal requirements are met so the file does not stall on a query.",
        icon: "clipboard" as const,
      },
      {
        title: "End-to-End Support",
        text: "Help raising funds in India after incorporation — schemes, loans and NBFC paths.",
        icon: "map" as const,
      },
    ],
  },
  postIncorporation: {
    eyebrow: "After COI",
    heading: "Post-Incorporation Formalities for OPC",
    sub: "After your OPC is registered, these legal formalities keep the company in good standing.",
    items: [
      {
        title: "Bank Account",
        text: "Open a corporate current account with the incorporation kit.",
        icon: "wallet" as const,
      },
      {
        title: "Auditor Appointment",
        text: "Appoint a statutory auditor within 30 days of incorporation.",
        icon: "users" as const,
      },
      {
        title: "MSME Registration",
        text: "File Udyam / MSME certification for scheme and subsidy eligibility.",
        icon: "clipboard" as const,
      },
      {
        title: "Annual Filings",
        text: "File annual returns and financial statements with the MCA.",
        icon: "file" as const,
      },
    ],
  },
  process: {
    eyebrow: "How We File",
    heading: "OPC Registration Steps",
    sub: "Six steps from DSC to Certificate of Incorporation, PAN and TAN.",
    steps: [
      {
        title: "Obtain Digital Signature Certificate (DSC)",
        text: "Get DSC for the director and nominee.",
      },
      {
        title: "Apply for Director Identification Number (DIN)",
        text: "Apply for DIN through the MCA portal.",
      },
      {
        title: "Name Reservation",
        text: "Reserve a unique company name via RUN (Reserve Unique Name) on MCA.",
      },
      {
        title: "Draft the MOA and AOA",
        text: "Prepare the Memorandum and Articles of Association.",
      },
      {
        title: "Submit SPICe+ Forms",
        text: "File the SPICe+ form with all required documents on the MCA portal.",
      },
      {
        title: "Receive Certificate of Incorporation",
        text: "Receive the COI, PAN and TAN from the Registrar of Companies.",
      },
    ],
  },
  documents: {
    eyebrow: "Paperwork",
    heading: "Documents Required for One Person Company",
    note: "Director and nominee papers are both required. After eligibility we send a file-specific checklist so you only collect what MCA needs.",
    items: [
      "PAN Card & Aadhaar Card of the director and nominee",
      "Address proof — latest bank statement, electricity bill or telephone bill",
      "Office proof — rental agreement or ownership proof (NOC from owner)",
      "MOA & AOA — Memorandum of Association and Articles of Association",
      "Declaration by director (INC-9) and nominee consent (DIR-2)",
      "Professional declaration by a CA / CS / Advocate",
    ],
    cta: "Download For More",
  },
} as const;

export const opcFaq = {
  heading: "OPC questions, answered",
  sub: "How OPC differs from proprietorship, capital, NRIs, documents, grants and conversion.",
  items: [
    {
      question: "What is an OPC, and how does it differ from a proprietorship?",
      answer:
        "An OPC is a separate legal entity with limited liability, whereas in a sole proprietorship the owner and business are the same, leading to unlimited personal liability.",
    },
    {
      question: "What is the primary objective of OPC registration?",
      answer:
        "To encourage individual entrepreneurs to enter the organised sector with the protection of limited liability.",
    },
    {
      question: "What is the minimum capital for one person company registration?",
      answer:
        "The minimum authorised capital is ₹1,00,000, though there is no mandatory minimum paid-up capital requirement currently.",
    },
    {
      question: "Can an NRI register an OPC?",
      answer:
        "Yes. As per the 2021 amendments, NRIs are eligible to register a One Person Company in India.",
    },
    {
      question: "How many OPCs can an individual establish?",
      answer:
        "An individual can be a member/director of only one OPC at a time.",
    },
    {
      question: "What are the key documents required for one person company?",
      answer:
        "PAN, Aadhaar, proof of registered office, MoA, AoA, and nominee consent.",
    },
    {
      question: "Can an OPC apply for government grants?",
      answer:
        "Yes. Once incorporated, you can apply for programmes such as MeitY Genesis EIR and NIDHI PRAYAS, subject to scheme eligibility.",
    },
    {
      question: "What happens if the turnover exceeds ₹2 Crores?",
      answer:
        "The OPC must mandatorily convert into a Private Limited Company or a Public Limited Company.",
    },
  ],
} as const;

export const startupPage = {
  eyebrow: "Startup India • DPIIT Recognition",
  heading: "Startup India Certification",
  kicker: "How to Apply • Benefits • Eligibility",
  intro:
    "DPIIT recognition is the gateway to tax holidays, compliance relaxations, and government funding schemes like SISFS. Vikas Bharat prepares your application and handles the portal filing end-to-end.",
  cta: "Contact Us",
  imageAlt: "Founder reviewing DPIIT Startup India recognition documents",
  stats: [
    { value: "3 Years", label: "Income Tax Holiday" },
    { value: "80-IAC", label: "Tax Exemption Section" },
    { value: "₹945Cr", label: "SISFS Corpus Unlocked" },
    { value: "10 Days", label: "Typical Recognition Time" },
  ] as const,
  unlock: {
    eyebrow: "What You Unlock",
    heading: "What DPIIT Startup Recognition Gives You",
    paragraphs: [
      "DPIIT Startup India recognition is an official certificate from the Department for Promotion of Industry and Internal Trade that confirms your business qualifies as a startup under India's Startup India policy. It is free to apply for and unlocks a significant set of benefits that are not available to ordinary registered companies.",
      "The most valuable benefit is the Section 80-IAC income tax exemption — recognised startups can claim a 100% tax holiday for any 3 consecutive years out of their first 10 years of operation. DPIIT recognition is also the prerequisite for the Startup India Seed Fund Scheme (SISFS), which provides up to ₹20 lakh in grants and ₹50 lakh in convertible debt to early-stage startups.",
    ],
    benefitsHeading: "Why founders apply",
    benefits: [
      "3-year income tax holiday under Section 80-IAC",
      "50% patent fee rebate and fast-track IPR examination",
      "Access to SISFS and government procurement programs",
      "Self-certification under labour and environmental laws",
      "₹200 Cr turnover cap and 10-year recognition for regular startups; ₹300 Cr and 20 years for deep tech",
      "GeM seller registration with relaxations in prior experience, turnover and EMD",
    ],
  },
  services: {
    eyebrow: "Recognition Desk",
    heading: "How Vikas Bharat Helps You Get Recognised",
    sub: "Eligibility, innovation narrative, portal filing and post-recognition orientation — in one file.",
    items: [
      {
        title: "Eligibility Assessment",
        text: "We check your entity age (must be under 10 years), legal structure (Pvt Ltd, LLP, or Partnership), annual turnover, and whether your product or service can be described as innovative — the key DPIIT criterion.",
        icon: "search" as const,
      },
      {
        title: "Innovation Narrative",
        text: "DPIIT assesses your innovation, scalability, and social or employment impact. We help you frame your business in language that aligns with DPIIT's evaluation criteria — without misrepresenting what you do.",
        icon: "file" as const,
      },
      {
        title: "Portal Filing & Tracking",
        text: "We complete your application on the Startup India portal (startupindia.gov.in), upload all required documents, and track the application status. Most applications receive recognition within 7–10 working days.",
        icon: "clipboard" as const,
      },
      {
        title: "Post-Recognition Orientation",
        text: "After recognition, we walk you through the 80-IAC tax exemption application, Angel Tax exemption under 56(2)(viib), and how to apply for SISFS through an approved incubator.",
        icon: "map" as const,
      },
    ],
  },
  features: {
    eyebrow: "Certificate Highlights",
    heading: "Key Features of the Startup India Certificate",
    sub: "Tax, funding, IPR, a faster exit path, and lighter compliance — once DPIIT recognises you.",
    items: [
      {
        title: "Income Tax Exemptions",
        text: "Tax-free operations for up to 3 consecutive years.",
        icon: "landmark" as const,
      },
      {
        title: "Funding Access",
        text: "Priority access to the ₹10,000 crore Fund of Funds managed by SIDBI.",
        icon: "wallet" as const,
      },
      {
        title: "Faster Exit",
        text: "A 90-day fast-track insolvency process for startups to wind up operations if needed.",
        icon: "zap" as const,
      },
      {
        title: "Intellectual Property (IPR)",
        text: "Fast-tracked patent applications and an 80% rebate on filing fees.",
        icon: "shield" as const,
      },
      {
        title: "Regulatory Ease",
        text: "Self-certification under labour and environmental laws.",
        icon: "clipboard" as const,
      },
    ],
  },
  eligibility: {
    eyebrow: "Who Qualifies",
    heading: "Eligibility Criteria for Startup India Registration",
    sub: "To qualify, your business must meet DPIIT parameters so the ecosystem stays focused on high-impact ventures.",
    leftHeading: "Entity & age",
    rightHeading: "Innovation & scale",
    items: [
      {
        title: "Business Type",
        text: "Private Limited Company, LLP, or Partnership Firm.",
        icon: "factory" as const,
      },
      {
        title: "Business Age",
        text: "Must be less than 10 years old from the date of incorporation or registration.",
        icon: "seed" as const,
      },
      {
        title: "Annual Turnover",
        text: "Must not have exceeded ₹200 crore in any previous financial year (revised from ₹100 crore under DPIIT Gazette Notification 108(E) dated 4 February 2026).",
        icon: "wallet" as const,
      },
      {
        title: "Innovation Stage",
        text: "Working toward innovation, development, or improvement of products or services.",
        icon: "chip" as const,
      },
      {
        title: "Scalability",
        text: "Must have high potential for employment generation or wealth creation.",
        icon: "rocket" as const,
      },
    ],
  },
  benefits: {
    eyebrow: "What You Unlock",
    heading: "Benefits of Startup India Registration",
    sub: "The certificate is a strategic advantage — tax, capital, IP, tenders and lighter compliance.",
    leftHeading: "Tax & capital",
    rightHeading: "IP, tenders & compliance",
    items: [
      {
        title: "Tax Exemptions",
        text: "Eligible for exemption from income tax under Section 80-IAC for 3 years within the first 10 years of incorporation.",
        icon: "landmark" as const,
      },
      {
        title: "Funding Support",
        text: "Access to seed-stage funding through schemes like SISFS, NIDHI PRAYAS and related startup programmes.",
        icon: "wallet" as const,
      },
      {
        title: "IPR Benefits",
        text: "Fast-track processing of patent applications and an 80% rebate, along with a 50% rebate on trademark filings.",
        icon: "shield" as const,
      },
      {
        title: "Self-certification",
        text: "Startups can self-certify compliance for labour and environmental laws for a period of 3 to 5 years.",
        icon: "clipboard" as const,
      },
      {
        title: "Easier Public Procurement",
        text: "Exemption from prior experience and earlier turnover requirements when bidding for government tenders.",
        icon: "file" as const,
      },
      {
        title: "Debt Access",
        text: "Easier access to collateral-light credit via guarantee schemes such as CGTMSE.",
        icon: "seed" as const,
      },
    ],
  },
  process: {
    eyebrow: "How DPIIT Recognition Works",
    heading: "How DPIIT Recognition Works",
    sub: "Four steps from eligibility check to certificate — then 80-IAC, SISFS and procurement.",
    steps: [
      {
        title: "Eligibility Check",
        text: "We verify your incorporation date, legal structure, turnover, and innovation angle to confirm you qualify before applying.",
      },
      {
        title: "Application Preparation",
        text: "We prepare the startup description, supporting documents, and pitch materials aligned with DPIIT's evaluation criteria.",
      },
      {
        title: "Portal Submission",
        text: "We file your application on the Startup India portal and handle any queries or additional document requests from DPIIT.",
      },
      {
        title: "Certificate & Next Steps",
        text: "You receive your DPIIT recognition certificate. We then guide you through 80-IAC filing, SISFS application, and any relevant government procurement registrations.",
      },
    ],
  },
  documents: {
    eyebrow: "Paperwork",
    heading: "Documents Required for Startup India Registration",
    note: "There is no fixed deadline — the window stays open year-round. The sooner you file, the sooner tax holidays and scheme access can start. After eligibility we send a file-specific checklist.",
    items: [
      "Certificate of Incorporation — proof of formation (Pvt Ltd, LLP, or Partnership)",
      "Pitch deck — problem, solution, and innovation factor",
      "Detailed project report — scalability and employment generation",
      "MSME / Udyam certificate, if already obtained",
      "Financial records — ITR for the last two years or audited balance sheets (if applicable)",
      "Founder profiles — resumes showing technical and managerial expertise",
      "Patent / trademark filings, if already applied for",
    ],
    cta: "Download For More",
  },
} as const;

export const startupFaq = {
  heading: "Startup India questions, answered",
  sub: "Recognition, documents, tax holidays, timelines and what happens if DPIIT asks for more papers.",
  items: [
    {
      question: "What is the Startup India Registration?",
      answer:
        "Startup India Registration is a government certification from DPIIT that lets eligible startups access financial benefits, tax exemptions, and regulatory ease.",
    },
    {
      question: "How do I apply for the Startup India Registration?",
      answer:
        "You apply through the official Startup India portal by filling out the application and submitting the necessary documents. Vikas Bharat prepares the file and handles portal filing end-to-end.",
    },
    {
      question: "What are the benefits of the Startup India Registration?",
      answer:
        "Benefits include tax exemptions, funding opportunities, intellectual property (IPR) support, self-certification, and public procurement opportunities.",
    },
    {
      question: "What documents are required for the Startup India Registration?",
      answer:
        "Typically incorporation documents, a pitch deck, a detailed project report, financials (ITR or audited statements where applicable), founder profiles, Udyam if available, and IPR filings if you already have them.",
    },
    {
      question: "How long does it take to get the Startup India Registration?",
      answer:
        "Most applications receive recognition within 7–10 working days, though it can take a few weeks depending on documents submitted and any DPIIT queries.",
    },
    {
      question: "How can Vikas Bharat help with my Startup India Registration?",
      answer:
        "We check eligibility, frame the innovation narrative, prepare documents, file on the Startup India portal, and guide you on 80-IAC, SISFS and related next steps after recognition.",
    },
    {
      question: "What are the tax benefits available under the Startup India scheme?",
      answer:
        "Recognised startups can claim a 100% income tax holiday under Section 80-IAC for any 3 consecutive years out of the first 10 years of incorporation, subject to a separate 80-IAC application.",
    },
    {
      question: "What if my application for Startup India Registration is rejected?",
      answer:
        "If the application is rejected, our team helps you understand the reasons, correct the file, and re-submit.",
    },
  ],
} as const;

export const certificatePage = {
  eyebrow: "ISO · BIS CRS · FSSAI",
  heading: "Certifications & Compliance",
  kicker: "ISO 9001/14001/27001 • BIS CRS • FSSAI",
  intro:
    "End-to-end support for ISO certification, BIS Compulsory Registration Scheme for electronics/IT products, and FSSAI registration/licenses for food businesses with accredited audits, BIS lab coordination, and portal filings.",
  cta: "Check Your Eligibility",
  imageAlt: "Advisor preparing ISO, BIS CRS and FSSAI certification files",
  stats: [
    { value: "3 Years", label: "ISO Certificate Validity" },
    { value: "3 Tracks", label: "ISO • BIS CRS • FSSAI" },
    { value: "₹12L", label: "FSSAI Basic Threshold" },
    { value: "1–5 Yrs", label: "FSSAI Licence Validity" },
  ] as const,
  unlock: {
    eyebrow: "What's Covered",
    heading: "What certifications are covered?",
    paragraphs: [
      "ISO certification helps organizations demonstrate conformity to international management system standards such as ISO 9001 (QMS), ISO 14001 (EMS), ISO 27001 (ISMS), ISO 45001 (OHSMS), and ISO 22000 (FSMS), issued by accredited certification bodies after audits.",
      "BIS CRS is mandatory registration for notified electronics and IT products, requiring product testing in BIS-recognized laboratories and issuance of a unique R-number. FSSAI licensing is mandatory for food businesses, with Basic registration up to ₹12 lakh turnover and State/Central licenses based on higher turnover or multi-state operations.",
    ],
    benefitsHeading: "Three tracks, one desk",
    benefits: [
      "ISO audits by accredited bodies for recognized certificates",
      "BIS CRS for notified electronics/IT with BIS lab testing",
      "FSSAI Basic/State/Central mapped to turnover and scope",
      "Digital filings via official portals for faster compliance",
    ],
  },
  eligibility: {
    eyebrow: "Who Qualifies",
    heading: "Eligibility Criteria",
    sub: "Who can apply, and the conditions that keep a certificate or licence valid.",
    leftHeading: "Who Can Apply?",
    rightHeading: "Conditions",
    items: [
      {
        title: "ISO",
        text: "Any organization implementing the required management system and seeking accredited certification. Internal processes must meet the standard before external audits.",
        icon: "seed" as const,
      },
      {
        title: "BIS CRS",
        text: "Manufacturer of a product notified under CRS; foreign manufacturers require an Authorized Indian Representative. Testing must be done in BIS-recognized laboratories before registration.",
        icon: "chip" as const,
      },
      {
        title: "FSSAI",
        text: "All food business operators — Basic up to ₹12 lakh turnover, State or Central above thresholds or for multi-state operations.",
        icon: "agri" as const,
      },
      {
        title: "ISO Audit Path",
        text: "Certification typically follows internal audit and management review before Stage 1 and Stage 2 audits. Certificates are issued by accredited registrars and are generally valid for three years with surveillance.",
        icon: "clipboard" as const,
      },
      {
        title: "BIS R-Number",
        text: "BIS CRS grants an R-number after lab testing and document scrutiny; only notified products are covered.",
        icon: "factory" as const,
      },
      {
        title: "FSSAI Validity",
        text: "Licence category depends on turnover and scope; validity is 1–5 years with prescribed fee slabs. Continuous adherence is mandatory for certificate and licence validity.",
        icon: "wallet" as const,
      },
    ],
  },
  whyChoose: {
    eyebrow: "Why This Desk",
    heading: "Why Choose Vikas Bharat for Certification Support?",
    sub: "Accredited ISO path, BIS lab coordination, and FSSAI FoSCoS filings — without juggling three vendors.",
    items: [
      {
        title: "Accredited ISO Path",
        text: "Guidance for ISO 9001/14001/27001/45001/22000 through Stage 1 and Stage 2 audits by accredited registrars.",
        icon: "shield" as const,
      },
      {
        title: "BIS CRS Registrations",
        text: "End-to-end BIS CRS support including BIS-recognized lab testing and registration for notified electronics/IT products.",
        icon: "clipboard" as const,
      },
      {
        title: "FSSAI Licensing",
        text: "Correct license mapping (Basic/State/Central) based on turnover and business model with FoSCoS filings.",
        icon: "file" as const,
      },
      {
        title: "Efficient Workflows",
        text: "Structured gap analysis, documentation toolkits, and coordinated filings across ISO, BIS, and FSSAI.",
        icon: "zap" as const,
      },
      {
        title: "Scalable Coverage",
        text: "From single-site ISO scope to multi-product BIS CRS and multi-state FSSAI operations.",
        icon: "map" as const,
      },
      {
        title: "Post-Approval Support",
        text: "Surveillance audit planning, renewals, scope additions, and labeling/marking compliance.",
        icon: "users" as const,
      },
    ],
  },
  process: {
    eyebrow: "How We File",
    heading: "Simple Application Process",
    sub: "Structured steps across ISO, BIS CRS, and FSSAI for smooth certification.",
    steps: [
      {
        title: "Assessment",
        text: "Select the applicable path (ISO/BIS/FSSAI), perform gap analysis, and finalise scope and standards, products or licenses.",
      },
      {
        title: "Documentation",
        text: "Prepare ISO policies/SOPs and records; compile the BIS CRS dossier and product samples; assemble FSSAI KYC and forms.",
      },
      {
        title: "Audit / Testing & Filing",
        text: "Undergo ISO Stage 1/2 audits; conduct BIS lab testing and submit the CRS application; file the FSSAI application on FoSCoS.",
      },
      {
        title: "Approval / Certification",
        text: "Receive the ISO certificate, BIS CRS registration with R-number, and FSSAI licence as applicable; plan surveillance and renewals.",
      },
      {
        title: "Compliance Maintenance",
        text: "Maintain ongoing compliance, handle surveillance audits, regulatory updates, product changes, and timely renewals.",
      },
    ],
  },
  documents: {
    eyebrow: "Paperwork",
    heading: "Required Documents",
    note: "ISO, BIS and FSSAI can run in parallel. After eligibility we send a file-specific checklist so you only collect what the auditor, BIS lab or FoSCoS portal needs.",
    items: [
      "ISO: quality / environmental / information security policies, SOPs, records, internal audit and management review",
      "BIS CRS: test reports from BIS-recognized labs, manufacturer details, product labels/markings, conformity documents",
      "FSSAI: entity proof, premises proof, KYC, product/category details, and supplementary documents per activity",
      "Authorizations: Authorized Indian Representative (for foreign BIS applicants) and board resolutions as required",
      "Operational proofs: process flow, layout (as applicable), prior approvals for specific categories",
    ],
    cta: "Download For More",
  },
} as const;

export const certificateFaq = {
  heading: "Certification questions, answered",
  sub: "Which ISO to pick, who needs BIS CRS, FSSAI thresholds, validity and whether you can file all three together.",
  items: [
    {
      question: "Which ISO standard should be chosen?",
      answer:
        "ISO 9001 for quality (QMS), ISO 14001 for environment (EMS), ISO 27001 for information security (ISMS), ISO 45001 for OH&S, and ISO 22000 for food safety (FSMS) are commonly selected based on business priorities and regulatory needs.",
    },
    {
      question: "Who needs BIS CRS registration?",
      answer:
        "Manufacturers of electronics/IT products notified under the Compulsory Registration Scheme must test in BIS-recognized labs and obtain BIS registration; foreign manufacturers must appoint an Authorized Indian Representative.",
    },
    {
      question: "FSSAI registration vs license thresholds?",
      answer:
        "Basic registration applies up to ₹12 lakh turnover; State license applies above ₹12 lakh up to state thresholds; Central license applies to larger or multi-state operations and certain categories such as importers.",
    },
    {
      question: "How long is ISO certification valid?",
      answer:
        "ISO certificates are typically valid for three years with periodic surveillance audits, after successful Stage 1 and Stage 2 certification audits by an accredited registrar.",
    },
    {
      question: "Can ISO, BIS, and FSSAI be pursued together?",
      answer:
        "Yes. Parallel tracks are feasible: ISO management system implementation and audits can run alongside BIS CRS testing/registration and FSSAI filings through their respective digital portals.",
    },
  ],
} as const;

export const growthPage = {
  eyebrow: "Strategic Growth • Business Scaling",
  heading: "Growth Strategy Services",
  kicker: "Market Expansion • Revenue Optimization • Business Scaling",
  intro:
    "Transform your business trajectory with Vikas Bharat's data-driven growth strategy services designed to boost your market position, identify new revenue opportunities, and create practical, scalable roadmaps. Our growth strategy consulting helps MSMEs and startups achieve sustainable expansion through targeted interventions and measurable outcomes.",
  cta: "Check Your Eligibility",
  imageAlt: "Advisor mapping a growth strategy with an MSME founder",
  stats: [
    { value: "40%", label: "Avg. Revenue Growth" },
    { value: "12mo", label: "Implementation Plan" },
    { value: "3X", label: "Customer Acquisition" },
    { value: "85%", label: "Success Rate" },
  ] as const,
  unlock: {
    eyebrow: "Why Growth Strategy",
    heading: "Accelerate Your Business Growth",
    paragraphs: [
      "Growth strategy in strategic management is the backbone of long-term business success. A solid growth plan helps expand your market reach, optimise revenue streams, and strengthen operational capacity. Effective growth strategy management requires deep market analysis, competitive benchmarking, and identification of sustainable growth paths.",
      "Vikas Bharat's growth strategy consulting blends market insights with operational expertise to create clear, actionable roadmaps tailored for startups and MSMEs. Our approach focuses on scalable expansion aligned with your business vision, financial strength, and current market opportunities.",
    ],
    benefitsHeading: "What the engagement covers",
    benefits: [
      "Market expansion planning",
      "Revenue optimization",
      "Operational scaling",
      "Implementation roadmaps",
    ],
  },
  eligibility: {
    eyebrow: "Fit Check",
    heading: "Is Growth Strategy Service Right for You?",
    sub: "Built for founders who have a live business and are ready to commit time, data and decisions.",
    leftHeading: "Who Can Apply?",
    rightHeading: "Conditions",
    items: [
      {
        title: "Established businesses",
        text: "12+ months of revenue history and a working operating rhythm.",
        icon: "factory" as const,
      },
      {
        title: "Validated startups",
        text: "Startups with validated business models, not still hunting for product-market fit.",
        icon: "seed" as const,
      },
      {
        title: "Growth plateau",
        text: "Companies stuck in a growth plateau who need a structured next move.",
        icon: "landmark" as const,
      },
      {
        title: "Funding-ready",
        text: "Businesses preparing for funding rounds who need a defensible growth plan.",
        icon: "wallet" as const,
      },
      {
        title: "Scale-minded founders",
        text: "Entrepreneurs wanting to scale operations sustainably, not just spend more on ads.",
        icon: "rocket" as const,
      },
      {
        title: "Time & resources",
        text: "Willingness to commit time and resources to the engagement.",
        icon: "clipboard" as const,
      },
      {
        title: "Data access",
        text: "Access to financial data and customer metrics so recommendations are grounded.",
        icon: "file" as const,
      },
      {
        title: "Decision-makers",
        text: "Support from key decision-makers who can approve and execute the plan.",
        icon: "users" as const,
      },
      {
        title: "Realistic timelines",
        text: "Realistic expectations on timelines and outcomes — typical implementation is 6–12 months.",
        icon: "zap" as const,
      },
      {
        title: "Open to adjustment",
        text: "Openness to feedback and strategic adjustments as results come in.",
        icon: "shield" as const,
      },
    ],
  },
  services: {
    eyebrow: "Growth Desk",
    heading: "Our Growth Strategy Services",
    sub: "From market opportunity to an implementation roadmap you can actually run.",
    items: [
      {
        title: "Market Opportunity Analysis",
        text: "Identify untapped segments, emerging trends, and potential expansion areas using in-depth market research.",
        icon: "search" as const,
      },
      {
        title: "Strategic Direction Planning",
        text: "Define growth objectives, build core strategies, and design initiatives aligned with your long-term business capabilities.",
        icon: "map" as const,
      },
      {
        title: "Revenue Optimization",
        text: "Improve your business model using pricing strategies, monetization methods, customer retention, and new revenue streams.",
        icon: "wallet" as const,
      },
      {
        title: "Market Expansion Planning",
        text: "Create effective strategies for entering new markets, geographical expansion, and wider customer reach.",
        icon: "send" as const,
      },
      {
        title: "Operational Scaling Framework",
        text: "Develop systems and processes that help your business scale efficiently while maintaining quality and cost control.",
        icon: "users" as const,
      },
      {
        title: "Growth Implementation Roadmap",
        text: "Turn strategy into execution with timelines, milestones, responsibilities, budgets, and performance indicators.",
        icon: "clipboard" as const,
      },
    ],
  },
  process: {
    eyebrow: "How We Work",
    heading: "Our Growth Strategy Process",
    sub: "A structured approach to accelerate your business growth.",
    steps: [
      {
        title: "Discovery & Analysis",
        text: "Comprehensive business assessment, market research, competitor analysis, and identification of growth opportunities.",
      },
      {
        title: "Strategy Development",
        text: "Creation of custom growth strategies with objectives, market approach, revenue models, and resource needs.",
      },
      {
        title: "Implementation Planning",
        text: "Detailed action plans including timelines, responsibilities, KPIs, and budgets.",
      },
      {
        title: "Execution Support",
        text: "Hands-on support during implementation with check-ins, adjustments, and strategic guidance.",
      },
      {
        title: "Performance Tracking",
        text: "Establish monitoring systems, measure results, and refine strategy based on insights.",
      },
    ],
  },
  documents: {
    eyebrow: "What We'll Need From You",
    heading: "What We'll Need From You",
    note: "Share what you already have. After the fit check we send a file-specific list so you are not rebuilding a data room from scratch.",
    items: [
      "Business profile (vision, mission, offerings)",
      "Marketing materials and customer acquisition channels",
      "Team structure and resource allocation",
      "Market information and competitive landscape",
      "Customer data (segments, retention, feedback)",
      "Financial statements (1–3 years)",
      "Product/service portfolio with pricing",
      "Current business challenges and growth objectives",
      "Previous growth initiatives and outcomes",
    ],
    cta: "Download For More",
  },
} as const;

export const growthFaq = {
  heading: "Growth strategy questions, answered",
  sub: "What the engagement covers, who it is for, how it fits strategic management, and how long implementation takes.",
  items: [
    {
      question: "What are growth strategy services?",
      answer:
        "Growth strategy services help businesses identify new market opportunities, optimize revenue, and scale operations using structured strategic management frameworks.",
    },
    {
      question: "Why do businesses need growth strategy consulting?",
      answer:
        "Consulting helps businesses overcome stagnation, plan expansion, improve profitability, and build long-term competitive advantage.",
    },
    {
      question: "How does growth strategy fit into strategic management?",
      answer:
        "Growth strategy in strategic management focuses on creating long-term plans that expand market share, increase revenue, and strengthen operational capacity.",
    },
    {
      question: "What industries can benefit from growth strategy management?",
      answer:
        "All industries including manufacturing, retail, technology, services, D2C, and MSMEs can benefit from structured growth strategy management.",
    },
    {
      question: "How long does it take to implement a growth strategy?",
      answer:
        "Implementation typically takes 6–12 months depending on the industry, business model, and strategic goals.",
    },
  ],
} as const;

export const maPage = {
  eyebrow: "M&A • Transactions",
  heading: "Mergers & Acquisitions",
  kicker: "Advisory for MSMEs & Startups",
  intro:
    "Whether you are looking to acquire a competitor, sell your business to a strategic buyer, or bring in a financial investor — Vikas Bharat provides structured advisory from target identification through to deal closing.",
  cta: "Contact Us",
  imageAlt: "Advisors reviewing an MSME merger and acquisition file",
  stats: [
    { value: "2 Sides", label: "Buy-Side & Sell-Side" },
    { value: "3–8x", label: "Typical EBITDA Multiple" },
    { value: "3–6 mo", label: "Typical Close Timeline" },
    { value: "100-Day", label: "Integration Plan" },
  ] as const,
  unlock: {
    eyebrow: "Not Just Corporates",
    heading: "M&A for Businesses That Are Not Large Corporates",
    paragraphs: [
      "Mergers and acquisitions are not just for large companies. MSMEs and growing startups increasingly use M&A to acquire a competitor or supplier, bring in a strategic investor who adds distribution or technology, exit a business they have built, or merge with a complementary business to grow faster together.",
      "The challenge for MSMEs is that M&A is complex and unfamiliar. Most founders do not know how to value a business, what due diligence involves, how to structure a deal so it is tax-efficient, or what a Share Purchase Agreement (SPA) should cover. Getting these details wrong can make an otherwise good deal very expensive.",
      "Vikas Bharat provides advisory at each stage of the M&A process — helping you decide whether to buy or build, identifying and approaching targets or buyers, coordinating financial and legal due diligence, structuring the deal, and supporting post-deal integration planning.",
    ],
    benefitsHeading: "What a mandate can cover",
    benefits: [
      "Buy-side and sell-side advisory",
      "Valuation and due diligence",
      "SHA / SPA deal documents",
      "100-day integration plan",
    ],
  },
  services: {
    eyebrow: "M&A Desk",
    heading: "What Vikas Bharat's M&A Advisory Covers",
    sub: "From buy-vs-build to closing and a 100-day integration plan — without treating you like a large corporate.",
    items: [
      {
        title: "Buy vs Build Analysis",
        text: "We help you decide whether acquiring a business makes more sense than building the capability yourself — with a clear financial case and risk assessment for both options.",
        icon: "search" as const,
      },
      {
        title: "Financial Due Diligence",
        text: "We review the target's financials, tax position, contracts, and operational risks to identify red flags before you commit. For sell-side mandates, we prepare your business for buyer due diligence.",
        icon: "clipboard" as const,
      },
      {
        title: "Valuation",
        text: "We provide valuation analysis using revenue multiples, EBITDA multiples, and DCF approaches — giving you a realistic price range to negotiate from, whether buying or selling.",
        icon: "wallet" as const,
      },
      {
        title: "Deal Structuring",
        text: "We advise on share purchase vs asset purchase, slump sale, earn-outs, and share swap structures — choosing the most tax-efficient approach for your situation.",
        icon: "landmark" as const,
      },
      {
        title: "Documentation Support",
        text: "We coordinate with legal counsel on the term sheet, Share Purchase Agreement (SPA), representations and warranties, and conditions precedent.",
        icon: "file" as const,
      },
      {
        title: "Integration Planning",
        text: "For acquisitions, we help build a 100-day integration plan covering team, systems, customers, and compliance — so the deal value is not lost in a messy transition.",
        icon: "map" as const,
      },
    ],
  },
  process: {
    eyebrow: "How a Mandate Runs",
    heading: "How an M&A Engagement Works",
    sub: "Four steps from mandate and goals through identification, diligence, structuring and close.",
    steps: [
      {
        title: "Mandate & Goals",
        text: "We understand whether you are buying or selling, your sector, ticket size, and what a successful outcome looks like for you.",
      },
      {
        title: "Target / Buyer Identification",
        text: "We identify and shortlist acquisition targets or potential acquirers/investors aligned with your strategic goals.",
      },
      {
        title: "Due Diligence & Valuation",
        text: "We coordinate financial, tax, and operational due diligence and provide a valuation range to anchor your negotiations.",
      },
      {
        title: "Structuring & Closing",
        text: "We advise on deal structure, support documentation with legal counsel, and help manage conditions precedent through to closing.",
      },
    ],
  },
} as const;

export const maFaq = {
  heading: "M&A questions, answered",
  sub: "Valuation, due diligence, share vs asset purchase, and how long a typical MSME deal takes to close.",
  items: [
    {
      question: "How is a business valued for an M&A deal?",
      answer:
        "Business valuation depends on the sector and stage. Profitable MSMEs are typically valued at 3–8x EBITDA (earnings before interest, tax, depreciation, and amortisation). Revenue-stage startups are valued at 1–5x annual revenue depending on growth rate and sector. Asset-heavy businesses (manufacturing, real estate) may also use net asset value. Vikas Bharat provides a valuation range based on comparable transactions and your business's specific financials.",
    },
    {
      question: "What is due diligence and why does it matter?",
      answer:
        "Due diligence is the process of verifying everything the seller claims about their business before you agree to buy. It covers financial statements, tax history, contracts, liabilities, legal disputes, intellectual property ownership, and customer concentration. Skipping due diligence or doing it poorly is the most common way buyers end up overpaying or inheriting problems they did not know about.",
    },
    {
      question: "Should I do a share purchase or asset purchase?",
      answer:
        "A share purchase means you buy the company itself — including all its liabilities, contracts, and history. An asset purchase means you buy specific assets (machinery, customer list, brand, IP) without taking on the company entity. Asset purchases are cleaner for the buyer (you only take what you want) but may have tax disadvantages for the seller. The right structure depends on your specific situation — Vikas Bharat advises based on both parties' tax and legal positions.",
    },
    {
      question: "How long does an M&A deal take to close?",
      answer:
        "MSME M&A deals typically take 3–6 months from initial agreement in principle to final closing. This covers due diligence (4–8 weeks), negotiation and documentation (4–6 weeks), regulatory approvals if required, and closing formalities. Complex deals, those requiring NCLT approval, or those with multiple acquirers can take longer.",
    },
  ],
} as const;

export const marketingPage = {
  eyebrow: "Digital Marketing • Brand Development",
  heading: "Marketing & Branding Services",
  kicker: "Identity Development • Digital Strategy • Content Marketing • Growth Solutions",
  intro:
    "Establish a powerful market presence with Vikas Bharat's comprehensive marketing and branding services designed specifically for MSMEs and startups to build recognition, engage audiences, and drive sustainable business growth through strategic marketing initiatives.",
  cta: "Get Started",
  imageAlt: "Advisor reviewing a brand and digital marketing plan with a founder",
  stats: [
    { value: "₹100+", label: "Brand Identities" },
    { value: "300%", label: "Avg. Traffic Growth" },
    { value: "40%", label: "Lead Conversion" },
    { value: "ROI+", label: "Measurable Results" },
  ] as const,
  unlock: {
    eyebrow: "Why Marketing",
    heading: "Strategic Marketing for Business Growth",
    paragraphs: [
      "Effective marketing and branding are critical differentiators that help businesses stand out in competitive markets. From establishing a compelling brand identity to implementing targeted digital campaigns, strategic marketing builds credibility, attracts customers, and drives business growth.",
      "Vikas Bharat provides tailored marketing and branding solutions that align with your business objectives and budget constraints. Our approach combines creative brand development with data-driven marketing strategies to create meaningful connections with your target audience and generate measurable business results.",
    ],
    benefitsHeading: "What the engagement covers",
    benefits: [
      "Brand identity development",
      "Digital strategy and content",
      "Performance campaigns",
      "Analytics and reporting",
    ],
  },
  eligibility: {
    eyebrow: "Fit Check",
    heading: "Is Our Marketing Service Right For You?",
    sub: "Built for founders who want a marketing system, not one-off posts.",
    leftHeading: "Who Can Apply?",
    rightHeading: "Conditions",
    items: [
      {
        title: "Brand refresh or launch",
        text: "Startups and MSMEs looking to establish or refresh their brand identity in the market.",
        icon: "seed" as const,
      },
      {
        title: "Digital presence & leads",
        text: "Businesses seeking to increase their digital presence and generate quality leads online.",
        icon: "rocket" as const,
      },
      {
        title: "Growth plateau",
        text: "Companies experiencing growth plateaus that need strategic marketing interventions.",
        icon: "landmark" as const,
      },
      {
        title: "New products or markets",
        text: "Organizations looking to launch new products or enter new market segments.",
        icon: "factory" as const,
      },
      {
        title: "Sustainable systems",
        text: "Businesses ready to invest in sustainable marketing systems rather than ad-hoc efforts.",
        icon: "zap" as const,
      },
      {
        title: "Clear objectives",
        text: "Clear business objectives and target audience understanding (or willingness to develop these).",
        icon: "clipboard" as const,
      },
      {
        title: "Realistic budget",
        text: "Realistic budget allocation for marketing activities based on business stage and goals.",
        icon: "wallet" as const,
      },
      {
        title: "3–6 month commitment",
        text: "Commitment to consistent marketing efforts over at least 3–6 months for measurable results.",
        icon: "users" as const,
      },
      {
        title: "Collaboration",
        text: "Capacity to collaborate on strategy development and provide timely feedback.",
        icon: "file" as const,
      },
      {
        title: "Measure what matters",
        text: "Willingness to measure and track performance metrics to evaluate marketing effectiveness.",
        icon: "shield" as const,
      },
    ],
  },
  services: {
    eyebrow: "Marketing Desk",
    heading: "Our Marketing & Branding Services",
    sub: "Identity, messaging, SEO, social, paid, web, collaterals and reporting — in one desk.",
    items: [
      {
        title: "Brand Identity Development",
        text: "Create compelling brand identities including logo design, color schemes, typography, and visual guidelines that reflect your business values.",
        icon: "zap" as const,
      },
      {
        title: "Brand Messaging & Positioning",
        text: "Develop clear brand messaging, unique value propositions, and market positioning strategies that resonate with target audiences.",
        icon: "mic" as const,
      },
      {
        title: "SEO & Content Marketing",
        text: "Improve online visibility through search engine optimization, keyword research, and strategic content creation that drives organic traffic.",
        icon: "search" as const,
      },
      {
        title: "Social Media Marketing",
        text: "Build engaging social presence through platform-specific strategies, content calendars, community management, and targeted campaigns.",
        icon: "send" as const,
      },
      {
        title: "Performance Marketing",
        text: "Drive conversions with targeted paid campaigns across Google, social platforms, and display networks with ROI-focused optimization.",
        icon: "wallet" as const,
      },
      {
        title: "Website Development & UX",
        text: "Create responsive, conversion-optimized websites with user-friendly interfaces, clear information architecture, and compelling visuals.",
        icon: "file" as const,
      },
      {
        title: "Marketing Collaterals",
        text: "Design professional business materials including brochures, presentations, product catalogs, and sales enablement tools.",
        icon: "folder" as const,
      },
      {
        title: "Analytics & Reporting",
        text: "Track marketing performance with customized dashboards and regular reports highlighting key metrics, insights, and optimization opportunities.",
        icon: "clipboard" as const,
      },
    ],
  },
  process: {
    eyebrow: "How We Work",
    heading: "Our Marketing & Branding Process",
    sub: "A structured approach to build your brand and grow your market presence.",
    steps: [
      {
        title: "Discovery & Analysis",
        text: "Understand your business objectives, analyse current market position, and identify target audiences and competitive landscape.",
      },
      {
        title: "Strategy Development",
        text: "Create comprehensive marketing strategy with channel selection, messaging framework, and tactical implementation plans.",
      },
      {
        title: "Content Creation",
        text: "Produce high-quality content assets including website copy, blogs, social media content, videos, and marketing collaterals.",
      },
      {
        title: "Campaign Implementation",
        text: "Execute multi-channel marketing campaigns across selected platforms with continuous optimisation for performance.",
      },
      {
        title: "Measurement & Optimisation",
        text: "Track key performance indicators, analyse results, and refine strategies for improved ROI and business impact.",
      },
    ],
  },
  documents: {
    eyebrow: "What We'll Need From You",
    heading: "What We'll Need From You",
    note: "Share what you already have. After the fit check we send a file-specific list so you are not rebuilding a brand kit from scratch.",
    items: [
      "Business profile and overview including vision, mission, and core offerings",
      "Current brand materials and marketing assets (if available)",
      "Information about target audience and ideal customer profiles",
      "Details about competitors and current market positioning",
      "Marketing objectives, priorities, and key performance indicators",
      "Budget parameters and timeline expectations",
      "Product/service information and unique selling propositions",
      "Access to existing analytics platforms (Google Analytics, social media insights, etc.)",
    ],
    cta: "Download For More",
  },
} as const;

export const marketingFaq = {
  heading: "Marketing questions, answered",
  sub: "Timelines, budgets, in-house vs partner work, collaborating with your team, and how we measure performance.",
  items: [
    {
      question: "How long does it take to see results from marketing efforts?",
      answer:
        "The timeline for marketing results varies by channel and objective. Brand development typically requires 4–6 weeks for completion. SEO efforts generally show initial improvements in 3–4 months with significant results in 6–12 months. Social media marketing can generate engagement within weeks but building substantial followings takes 3–6 months. Paid campaigns can deliver immediate traffic but conversion optimization typically requires 1–2 months of testing and refinement.",
    },
    {
      question: "What makes Vikas Bharat's marketing services different?",
      answer:
        "Our approach is specifically tailored for Indian MSMEs and startups, focusing on cost-effective strategies with measurable business impact. Unlike agencies that provide generic solutions, we create customized marketing frameworks based on your specific growth stage, industry dynamics, and budget considerations. We combine creative brand development with data-driven marketing execution, providing both strategic guidance and tactical implementation support.",
    },
    {
      question: "How much should my business budget for marketing?",
      answer:
        "Effective marketing budgets typically range from 5–15% of revenue depending on business stage, industry, and growth objectives. Early-stage startups often allocate higher percentages (10–15%) to establish market presence, while established businesses may operate at 5–8%. We develop scalable marketing plans with options for different budget levels, prioritizing high-impact activities and gradually expanding as results generate returns.",
    },
    {
      question: "Do you handle all marketing activities in-house?",
      answer:
        "We manage strategy development, campaign planning, and performance analysis in-house with our core team. For specialized execution like advanced video production or niche industry content, we collaborate with vetted partners while maintaining project management and quality control. This hybrid approach ensures expertise across all channels while keeping overall costs manageable for our clients.",
    },
    {
      question: "Can you work with our existing marketing team?",
      answer:
        "Yes, we frequently collaborate with in-house marketing resources. Our services can range from strategic guidance and planning to filling specific capability gaps or handling complete execution. We adapt our involvement based on your existing team's strengths, providing training and knowledge transfer to build internal capabilities while delivering immediate marketing results.",
    },
    {
      question: "How do you measure marketing performance?",
      answer:
        "We establish clear KPIs aligned with your business objectives before beginning any marketing activities. These typically include metrics across the full marketing funnel — from awareness (traffic, impressions, reach) to engagement (click rates, time on site, social interactions) to conversion (leads, sales, ROI). We provide regular performance reports with actionable insights and optimization recommendations.",
    },
  ],
} as const;

export const legalPage = {
  eyebrow: "Legal • Compliance",
  heading: "Legal Consultancy",
  kicker: "For MSMEs & Startups",
  intro:
    "Navigating the legal landscape can be complex, but with Vikas Bharat's legal consultancy services, you can get the right advice for business registration, compliance, contracts, and intellectual property protection.",
  cta: "Talk to Us",
  imageAlt: "Advisor reviewing contracts and compliance papers with a founder",
  stats: [
    { value: "5000+", label: "Legal Consultations" },
    { value: "100%", label: "Compliance Assurance" },
    { value: "24/7", label: "Legal Support" },
    { value: "98%", label: "Client Satisfaction" },
  ] as const,
  unlock: {
    eyebrow: "Why Legal Support",
    heading: "Why Legal Support Matters for Small Businesses",
    paragraphs: [
      "Most MSMEs and startups run on informal agreements, verbal understandings, and templates downloaded from the internet. This works fine until it doesn't — a client disputes a payment, a vendor defaults, a co-founder leaves, or an investor asks to see your legal house in order before writing a cheque.",
      "Good legal documentation does three things: it prevents disputes from happening, it makes disputes easier to resolve when they do happen, and it makes your business look credible to banks, investors, and enterprise clients. A vendor contract that clearly states payment terms, deliverables, and penalty clauses saves far more money than the legal cost of drafting it.",
      "Vikas Bharat coordinates with experienced partner counsel across commercial contracts, corporate governance, HR and labour compliance, and fundraising documentation. We manage the process — you don't need to find or brief a lawyer yourself.",
    ],
    benefitsHeading: "What we put in order",
    benefits: [
      "Commercial contracts",
      "Corporate governance",
      "HR and labour compliance",
      "Fundraising documents",
    ],
  },
  cover: {
    eyebrow: "Legal Desk",
    heading: "Legal Services We Cover",
    sub: "The contracts and compliance files MSMEs actually need — drafted clearly, not in legalese.",
    items: [
      {
        title: "Commercial Contracts",
        text: "Customer agreements, vendor MSAs, SaaS/service terms, NDA templates, and platform agreements — drafted clearly so both parties know exactly what is agreed.",
        icon: "file" as const,
      },
      {
        title: "Corporate & Governance",
        text: "Board resolutions, shareholder agreements, cap table documentation, ROC compliance, and corporate secretarial work for Private Limited companies and LLPs.",
        icon: "clipboard" as const,
      },
      {
        title: "HR & Labour Compliance",
        text: "Employment contracts, POSH (Prevention of Sexual Harassment) policy and compliance, state shop and establishment registrations, and PF/ESIC compliance.",
        icon: "users" as const,
      },
      {
        title: "Fundraising Documents",
        text: "Term sheets, Shareholder Agreements (SHA), SAFE notes, due diligence preparation, and representation letters for investors and grant committees.",
        icon: "wallet" as const,
      },
    ],
  },
  services: {
    eyebrow: "Full Scope",
    heading: "Our Comprehensive Legal Consultancy Services",
    sub: "Structure, compliance, contracts, IP and filings — coordinated with partner counsel.",
    items: [
      {
        title: "Business Structure Advisory",
        text: "Choosing the right business structure is crucial for future growth. We offer expert guidance on the most suitable structure for your needs — whether it's a Private Limited, LLP, OPC, or Sole Proprietorship.",
        icon: "search" as const,
      },
      {
        title: "Regulatory Compliance Management",
        text: "Stay compliant with industry regulations and avoid costly penalties. Our business compliance services cover licenses, permits, filings, and ongoing regulatory adherence.",
        icon: "shield" as const,
      },
      {
        title: "Contract Development and Negotiation",
        text: "We help you draft, review, and negotiate business contracts, including agreements with vendors, partners, and employees — clear, legally-binding documents that mitigate risk.",
        icon: "file" as const,
      },
      {
        title: "Intellectual Property Protection",
        text: "Secure your brand and ideas with trademark registration, copyright protection, and patent filings. We help you prevent infringement and safeguard your business assets.",
        icon: "zap" as const,
      },
      {
        title: "Legal Due Diligence",
        text: "We assist in registering your firm with comprehensive documentation support and smooth coordination with the approving authorities.",
        icon: "map" as const,
      },
    ],
  },
  eligibility: {
    eyebrow: "Who It's For",
    heading: "Who Should Seek Legal Consultancy?",
    sub: "Founders who need a legal foundation — and are ready to implement it.",
    leftHeading: "Who should apply",
    rightHeading: "Conditions",
    items: [
      {
        title: "Startups and Early-Stage Businesses",
        text: "Establishing a solid legal foundation for growth.",
        icon: "seed" as const,
      },
      {
        title: "Growing MSMEs",
        text: "Facing new compliance requirements, expansion challenges, or regulatory changes.",
        icon: "factory" as const,
      },
      {
        title: "Negotiating with Clients/Vendors",
        text: "Engaged in contracts, deals, or partnerships that need to be watertight.",
        icon: "landmark" as const,
      },
      {
        title: "Protecting Intellectual Property",
        text: "Safeguarding brand names and inventions.",
        icon: "chip" as const,
      },
      {
        title: "Facing Regulatory Issues",
        text: "Needing assistance with industry-specific compliance.",
        icon: "shield" as const,
      },
      {
        title: "Clear Business Objectives",
        text: "Clear business objectives and legal priorities to enable focused legal advice.",
        icon: "clipboard" as const,
      },
      {
        title: "Complete Documentation",
        text: "Complete business documentation for assessment and strategy development.",
        icon: "file" as const,
      },
      {
        title: "Willingness to Implement",
        text: "Willingness to implement recommended legal protections and compliance practices.",
        icon: "users" as const,
      },
      {
        title: "Ongoing Compliance Commitment",
        text: "Commitment to maintaining ongoing legal compliance and transparency about potential legal concerns.",
        icon: "wallet" as const,
      },
    ],
  },
  process: {
    eyebrow: "How We Work",
    heading: "Our Legal Consultancy Process",
    sub: "From first conversation to implementation, training and ongoing advisory.",
    steps: [
      {
        title: "Initial Consultation",
        text: "Discuss your business model, objectives, and legal needs to tailor the consultancy process.",
      },
      {
        title: "Legal Assessment",
        text: "Review your current legal framework, documents, and practices to identify potential gaps or risks.",
      },
      {
        title: "Strategy Development",
        text: "Create customized legal strategies to address immediate concerns and establish long-term compliance.",
      },
      {
        title: "Implementation",
        text: "Execute legal strategies, including drafting necessary documents and filings for business formation.",
      },
      {
        title: "Review & Training",
        text: "Provide training on legal compliance practices to ensure your business stays aligned with ongoing legal obligations.",
      },
      {
        title: "Ongoing Support",
        text: "Offer continuous advisory services, updates on regulatory changes, and proactive legal management.",
      },
    ],
  },
  documents: {
    eyebrow: "Paperwork",
    heading: "Required Documents for Legal Services",
    note: "When engaging in legal consultancy, have these ready for review. After the first call we send a file-specific list so you only share what the matter needs.",
    items: [
      "Business registration documents — MOA, AOA, Certificate of Incorporation, etc.",
      "Existing contracts and agreements — vendor and partnership agreements, employment contracts",
      "Operational licenses and permits — business licenses, GST registration",
      "Intellectual property documentation — trademark, patent, or copyright filings",
      "Employment contracts and HR policies — for labour-law compliance",
      "Compliance filings and regulatory submissions — tax filings, regulatory filings",
    ],
    cta: "Download For More",
  },
} as const;

export const legalFaq = {
  heading: "Legal questions, answered",
  sub: "How this desk differs from a law firm, when to stay on a retainer, industry rules, disputes and cross-border work.",
  items: [
    {
      question: "What makes Vikas Bharat's legal services different from traditional law firms?",
      answer:
        "Vikas Bharat offers business-focused legal advice tailored for startups and MSMEs, without the use of complex legal jargon, making it more accessible and actionable. We coordinate with experienced partner counsel — you don't need to find or brief a lawyer yourself.",
    },
    {
      question: "How can proper legal consultation save my business money?",
      answer:
        "Proper legal consultation helps prevent costly mistakes and ensures that your business stays compliant, avoiding penalties and lawsuits that could drain resources.",
    },
    {
      question: "Do I need ongoing legal services or just one-time consultation?",
      answer:
        "While one-time consultations are available, ongoing legal services are often crucial for continuous compliance and for dealing with evolving regulations.",
    },
    {
      question: "How do you handle specialized industry regulations?",
      answer:
        "We provide industry-specific legal services, ensuring compliance with the latest regulations in your sector, whether it's food safety or manufacturing standards.",
    },
    {
      question: "What is your approach to dispute resolution?",
      answer:
        "Our approach includes mediation, negotiation, and arbitration, and we only opt for litigation when necessary to resolve legal disputes effectively.",
    },
    {
      question: "Can you help with international business legal considerations?",
      answer:
        "Yes, we provide international business law services that help businesses navigate cross-border operations, ensuring compliance with global trade regulations.",
    },
  ],
} as const;

export const fundingPage = {
  eyebrow: "Funding Guide • Capital Options",
  heading: "Funding Instruments",
  kicker: "for Startups & Businesses",
  intro:
    "Government grants, business loans, investor funding, and international capital — explained by business type and growth stage, so you know exactly which options are right for your situation.",
  cta: "Check Your Eligibility",
  imageAlt: "Advisor mapping grants, loans and investor options for a founder",
  stats: [
    { value: "3", label: "Funding Categories" },
    { value: "₹490Cr+", label: "Genesis Fund" },
    { value: "50+", label: "Schemes Covered" },
    { value: "100%", label: "Expert Guidance" },
  ] as const,
  unlock: {
    eyebrow: "The Basics",
    heading: "What Are Funding Instruments?",
    paragraphs: [
      "Funding instruments are financial tools that businesses use to raise capital. They fall into two broad categories: debt-based funding, where you borrow money and repay it over time, typically with interest; and equity-based funding, where you offer ownership shares in exchange for capital.",
      "These sources can come from government schemes, private investors, or international funding routes, depending on the nature and stage of the business. Vikas Bharat maps the options by structure (Pvt Ltd vs LLP) and growth stage so you are not applying to the wrong desk.",
    ],
    benefitsHeading: "Three source types",
    benefits: [
      "Government funding",
      "Private funding",
      "International funding",
      "Matched to stage and structure",
    ],
  },
  types: {
    eyebrow: "At a Glance",
    heading: "Types of Funding Instruments",
    sub: "Grants, bank debt, VC, angels, NBFCs and international capital — each with a different fit.",
    items: [
      {
        title: "Government Grants",
        text: "Non-repayable funding from central and state schemes — SISFS, RKVY, Genesis Fund (₹490Cr for tech startups), MSME subsidies.",
        icon: "landmark" as const,
      },
      {
        title: "MSME & Bank Loans",
        text: "Term loans and working capital from scheduled banks with CGTMSE or MUDRA collateral-free options for eligible businesses.",
        icon: "wallet" as const,
      },
      {
        title: "Venture Capital",
        text: "Equity investment from registered VCFs and AIFs for startups that can grow fast and are targeting large markets.",
        icon: "zap" as const,
      },
      {
        title: "Angel Investment",
        text: "Early-stage equity from HNIs and angel networks — ideal for pre-revenue or seed-stage businesses needing mentorship alongside capital.",
        icon: "users" as const,
      },
      {
        title: "NBFC Financing",
        text: "Flexible debt options from NBFCs for businesses that may not meet traditional bank criteria — faster processing with competitive rates.",
        icon: "send" as const,
      },
      {
        title: "International Funding",
        text: "Foreign venture capital and institutional investor routes for startups targeting global markets, subject to FEMA and RBI regulations.",
        icon: "map" as const,
      },
    ],
  },
  government: {
    eyebrow: "Government Funding",
    heading: "1. Government Funding Instruments",
    sub: "Non-refundable grants, bank debt, and government-backed equity — with different rules for Pvt Ltd vs LLP.",
    items: [
      {
        title: "Non-Refundable Grants",
        text: "Financial assistance from government bodies that does not need to be repaid — typically for innovation, R&D, green energy or export promotion. Both Private Ltd and LLP companies can apply if the project matches the scheme. Grants come with strict compliance and reporting requirements.",
        icon: "wallet" as const,
      },
      {
        title: "Debt-Based Funding (Banking)",
        text: "Loans and credit facilities from public sector banks or financial institutions. Both Pvt Ltd and LLP companies qualify; the bank assesses creditworthiness, collateral and the business plan. Examples: term loans, overdraft, cash credit, Mudra loans.",
        icon: "clipboard" as const,
      },
      {
        title: "Equity-Based Funding (Investors)",
        text: "Government-backed Fund of Funds that invest via VC or PE rather than directly. Primarily for Private Ltd companies that can issue equity. LLPs cannot issue equity and are typically excluded from pure equity schemes.",
        icon: "file" as const,
      },
    ],
  },
  access: {
    eyebrow: "Structure Matters",
    heading: "Funding Source Access for Pvt Ltd vs LLPs",
    sub: "The instrument you can use often depends on whether you can issue equity.",
    leftHeading: "Equity & debt",
    rightHeading: "Grants",
    items: [
      {
        title: "Equity Funding (VC, Angel, PE)",
        text: "Private Ltd: excellent access (can issue shares). LLP: none or extremely limited — cannot issue equity.",
        icon: "rocket" as const,
      },
      {
        title: "Debt Funding (Bank Loans, NBFCs)",
        text: "Private Ltd: good access based on credit score and collateral. LLP: good access on the same basis.",
        icon: "wallet" as const,
      },
      {
        title: "Grants / Government Schemes",
        text: "Private Ltd: good access based on project and innovation. LLP: good access on the same basis.",
        icon: "seed" as const,
      },
    ],
  },
  private: {
    eyebrow: "Private Funding",
    heading: "2. Private Funding Instruments",
    sub: "Non-government, domestic debt and equity — from friends and family through to professional VCs.",
    items: [
      {
        title: "Private Loan",
        text: "Typically from friends, family or HNIs who are not professional lenders — often trust-based with flexible terms. Both Pvt Ltd and LLP can use this; Pvt Ltd companies must comply with Company Law on loans from directors/shareholders, while LLPs often receive loans from partners.",
        icon: "users" as const,
      },
      {
        title: "Institutional Loan",
        text: "Debt from private sector banks, NBFCs or specialised institutions. Available to both Pvt Ltd and LLP — similar to government debt, often processed faster and potentially at higher interest rates.",
        icon: "wallet" as const,
      },
      {
        title: "Venture Capital (VC)",
        text: "Equity from professional firms investing in high-growth startups in exchange for a stake, expecting a large return on sale or IPO. Exclusively for Private Ltd companies. LLPs cannot raise funding directly from VCs.",
        icon: "zap" as const,
      },
      {
        title: "Angel Investors",
        text: "Affluent individuals who provide seed capital for convertible debt or equity, often with mentorship. Usually invest in Private Ltd companies. LLPs may receive loans but not equity investments.",
        icon: "search" as const,
      },
    ],
  },
  international: {
    eyebrow: "Cross-Border Capital",
    heading: "3. International Funding Instruments",
    sub: "Capital from outside India for companies with high scalability — FEMA and RBI rules apply.",
    items: [
      {
        title: "Foreign Venture Capital",
        text: "Foreign VC funds invest in high-growth Private Ltd companies, bringing global networks as well as capital. Strictly for Private Ltd. Raising from international VCs requires FEMA and FDI compliance.",
        icon: "map" as const,
      },
      {
        title: "Institutional Investors & ECB",
        text: "PE funds, pension funds or sovereign wealth funds invest in established Private Ltd companies. External Commercial Borrowings (ECB) are also available to both LLPs and Pvt Ltd companies, subject to regulatory compliance.",
        icon: "landmark" as const,
      },
    ],
  },
  process: {
    eyebrow: "How We Match You",
    heading: "How We Match You to the Right Instrument",
    sub: "Share your business stage and capital need — we map the most suitable instruments and follow through.",
    steps: [
      {
        title: "Profile Assessment",
        text: "Evaluate your business stage, sector, structure (Pvt Ltd vs LLP) and capital requirement.",
      },
      {
        title: "Instrument Mapping",
        text: "Identify eligible grants, loan schemes and investor categories — with pros and cons for each.",
      },
      {
        title: "Documentation",
        text: "Prepare applications, business plan, financials and any required compliance documents.",
      },
      {
        title: "Application & Follow-through",
        text: "Submit to the right portals and stakeholders, track status and respond to queries.",
      },
    ],
  },
} as const;

export const fundingFaq = {
  heading: "Funding instrument questions, answered",
  sub: "Debt vs equity, VC vs angels, convertible notes, crowdfunding, and what startups can actually access.",
  items: [
    {
      question: "What are funding instruments?",
      answer:
        "Funding instruments are financial tools used by businesses to acquire capital, including debt-based (loans) and equity-based (shares) funding options.",
    },
    {
      question: "What are the different types of funding instruments?",
      answer:
        "The main types are government funding, private funding, and international funding, each with its own set of tools like grants, loans, venture capital, and angel investments.",
    },
    {
      question: "What is the difference between debt and equity funding instruments?",
      answer:
        "Debt funding involves borrowing money that must be repaid with interest. Equity funding involves selling a portion of the company in exchange for capital.",
    },
    {
      question: "How do venture capital and angel investment instruments work?",
      answer:
        "Both involve providing equity in exchange for capital, but VCs typically invest larger sums and require clear exit strategies, while angel investors often invest smaller amounts in the early stages and provide mentorship.",
    },
    {
      question: "What is a convertible note and how does it work as a funding instrument?",
      answer:
        "A convertible note is a form of short-term debt that converts into equity when the company raises a subsequent round of funding.",
    },
    {
      question: "How does crowdfunding work as a funding instrument?",
      answer:
        "Crowdfunding allows businesses to raise small amounts of money from a large number of people, typically via online platforms.",
    },
    {
      question: "What funding instruments are available for startups and small businesses?",
      answer:
        "Startups and small businesses can access government grants, bank loans, venture capital, angel investments, and more.",
    },
  ],
} as const;

export const naifPage = {
  eyebrow: "Agriculture Infrastructure Fund • AIF / NAIF",
  heading: "NAIF Scheme (AIF)",
  kicker: "Loan, Eligibility & How to Apply",
  intro:
    "The Agriculture Infrastructure Fund (AIF), also called NAIF, funds post-harvest infrastructure like cold storage, warehouses and processing units. Loans up to ₹2 Crore per project at an effective ~9% rate, 3% interest subvention for 7 years, and 100% credit guarantee via CGTMSE — so no collateral required.",
  cta: "Check Your Eligibility",
  imageAlt: "Agri infrastructure project eligible for AIF / NAIF financing",
  stats: [
    { value: "₹2 Cr", label: "Max Loan Per Project" },
    { value: "3%", label: "Interest Subvention p.a." },
    { value: "7 Yrs", label: "Subvention Duration" },
    { value: "1.5L+", label: "Projects Sanctioned" },
  ] as const,
  unlock: {
    eyebrow: "What It Is",
    heading: "What is the Agriculture Infrastructure Fund (AIF / NAIF Scheme)?",
    paragraphs: [
      "The Agriculture Infrastructure Fund (AIF) — referred to as NAIF in some government documents — is a central sector scheme of the Ministry of Agriculture & Farmers Welfare, launched in May 2020 with a total corpus of ₹1 Lakh Crore. It provides medium to long-term debt financing for post-harvest management infrastructure and community farming assets.",
      "As of January 2026, over 1,50,431 projects have been sanctioned with ₹80,224 crore in loans, and ₹49,841 crore has already been disbursed across more than 1.13 lakh projects — mobilising a total investment of ₹1,27,508 crore across India. The scheme runs through FY 2032–33.",
      "What makes AIF different from most government loan schemes is the combination: the government pays the full CGTMSE guarantee fee on your behalf, so lenders need no collateral on loans up to ₹2 Crore, and the 3% subvention directly reduces your EMI burden for seven years.",
    ],
    benefitsHeading: "Why founders apply",
    benefits: [
      "Loan up to ₹2 Crore per project; can borrow more without subvention",
      "3% interest subvention for 7 years — effective rate ~9% p.a.",
      "100% credit guarantee by CGTMSE — no collateral required",
      "Moratorium on principal: 6 months to 2 years",
    ],
  },
  benefits: {
    eyebrow: "Key Benefits",
    heading: "Key Benefits of the AIF / NAIF Scheme",
    sub: "Subvention, CGTMSE cover, a principal moratorium, and a 60-day lender decision — on the agriinfra portal.",
    items: [
      {
        title: "3% Interest Subvention for 7 Years",
        text: "The government credits 3% subvention directly against your loan account, reducing the effective borrowing cost to approximately 9% per annum for the full 7-year duration. Interest is charged from disbursement day one — including during the moratorium period.",
        icon: "wallet" as const,
      },
      {
        title: "100% Collateral-Free Guarantee via CGTMSE",
        text: "Credit guarantee for loans up to ₹2 Crore is provided by CGTMSE with 100% coverage. The government bears the guarantee fee. FPOs additionally qualify for guarantee through NABSanrakshan (post August 2024).",
        icon: "shield" as const,
      },
      {
        title: "Moratorium of 6 Months to 2 Years",
        text: "Principal repayment is deferred for 6 months to 2 years from first disbursement, aligned with the project's cash flow ramp-up. Interest, including the subvention component, applies from disbursement date.",
        icon: "clipboard" as const,
      },
      {
        title: "Up to 25 Projects Per Applicant",
        text: "A single entity can avail AIF benefits for up to 25 individual projects across different locations. State agencies, national/state federations of cooperatives, FPO federations and SHG federations are exempt from this cap.",
        icon: "users" as const,
      },
      {
        title: "Online Application with 60-Day Decision",
        text: "Applications are submitted entirely online through agriinfra.dac.gov.in — no physical forms or branch visits needed. Lenders must communicate their sanction decision within 60 days of application.",
        icon: "search" as const,
      },
      {
        title: "Broad Project Coverage — Expanded August 2024",
        text: "The Union Cabinet expanded eligible project types in August 2024 to include integrated primary-and-secondary processing units, PM-KUSUM solar convergence, and a broader set of community farming assets including precision farming equipment and renewable energy infrastructure.",
        icon: "zap" as const,
      },
    ],
  },
  eligibility: {
    eyebrow: "Who Can Apply",
    heading: "Who Can Apply for the AIF / NAIF Scheme?",
    sub: "AIF covers 17 entity types. The project must be a viable agriculture-sector activity, and a minimum promoter contribution of 10% of total project cost is required.",
    leftHeading: "Farmers, FPOs & groups",
    rightHeading: "Enterprises & public bodies",
    items: [
      {
        title: "Farmers & Agri-Entrepreneurs",
        text: "Individual farmers with land ownership or a registered lease of at least 7 years, and agri-entrepreneurs setting up eligible infrastructure, can apply directly through the portal.",
        icon: "agri" as const,
      },
      {
        title: "FPOs & Federations",
        text: "Registered FPOs and their federations are a primary target group. FPOs also benefit from the NABSanrakshan guarantee (in addition to CGTMSE).",
        icon: "seed" as const,
      },
      {
        title: "Cooperatives & PACS",
        text: "Primary Agricultural Credit Societies, marketing cooperatives, multipurpose cooperatives, and their state and national federations are eligible. State federations are exempt from the 25-project cap.",
        icon: "factory" as const,
      },
      {
        title: "SHGs",
        text: "Women-led SHGs and SHG federations engaged in agri-linked activities can access AIF loans for community-level post-harvest and processing infrastructure.",
        icon: "users" as const,
      },
      {
        title: "MSMEs, Startups & Companies",
        text: "MSME-registered agri-processing and cold chain businesses, DPIIT-recognised agri startups, and private limited companies or LLPs with agriculture-sector projects are eligible.",
        icon: "rocket" as const,
      },
      {
        title: "APMCs, State Agencies & PPP",
        text: "Agricultural Produce Market Committees (added February 2021), state agencies, and projects under central or state government PPP frameworks qualify, and are exempt from the 25-project ceiling.",
        icon: "landmark" as const,
      },
    ],
  },
  process: {
    eyebrow: "How to Apply",
    heading: "How to Apply for the AIF / NAIF Scheme",
    sub: "Five steps from agriinfra.dac.gov.in to disbursement and 3% subvention on your loan account.",
    steps: [
      {
        title: "Register on agriinfra.dac.gov.in",
        text: "Create an account on the official Agriculture Infrastructure Fund portal. The entire application process — from submission to sanction communication — is online.",
      },
      {
        title: "Prepare a Detailed Project Report (DPR)",
        text: "Draft a DPR covering the project type, location, technical design, cost breakup, land details, revenue model and cash flow projections. This is the lender's primary basis for appraisal.",
      },
      {
        title: "Submit Application with Supporting Documents",
        text: "Upload the DPR, KYC, entity registration, land/lease papers and financial statements. The Project Management Unit (PMU) reviews and forwards to the lending institution.",
      },
      {
        title: "Lender Appraisal — 60-Day Decision",
        text: "The lender conducts a site visit plus technical and financial appraisal, and must communicate a decision within 60 days. CGTMSE cover applies automatically for loans up to ₹2 Crore.",
      },
      {
        title: "Loan Sanction, Disbursement & Subvention",
        text: "The sanctioned loan is disbursed in tranches linked to project milestones. The 3% interest subvention is credited by the government directly to your loan account.",
      },
    ],
  },
  documents: {
    eyebrow: "Paperwork",
    heading: "Documents Required for AIF Loan Application",
    note: "Most AIF rejections and delays come down to a weak DPR or missing documents — not the project itself. Vikas Bharat helps agri-entrepreneurs and FPOs structure the DPR, identify the right lending partner, and move through the CGTMSE guarantee process. After eligibility we send a file-specific checklist.",
    items: [
      "Detailed Project Report (DPR) — technical specifications, location, cost estimates, revenue projections and operational plan",
      "KYC — Aadhaar and PAN of all promoters, directors or authorised signatories",
      "Entity registration — incorporation, partnership deed, FPO/cooperative certificate, Udyam, or equivalent",
      "Land ownership or a registered lease of at least 7 years covering the project site",
      "Financial statements — audited last 2–3 years, or projected financials for new entities",
      "Bank statements — last 6–12 months for the entity and promoters",
      "GST certificate (if applicable) and latest ITRs of the entity and key promoters",
    ],
    cta: "Download For More",
  },
} as const;

export const naifFaq = {
  heading: "AIF / NAIF questions, answered",
  sub: "NAIF vs AIF, the ₹2 Crore cap, moratorium interest, collateral, project limits, August 2024 changes and why files stall.",
  items: [
    {
      question: "What is the difference between NAIF and AIF?",
      answer:
        "They refer to the same scheme. AIF is the official name — Agriculture Infrastructure Fund. NAIF (National Agri Infra Financing Facility) is an alternate abbreviation used in some government communications and media. The portal is agriinfra.dac.gov.in and the administering ministry is the Ministry of Agriculture & Farmers Welfare.",
    },
    {
      question: "Can I take a loan larger than ₹2 Crore under this scheme?",
      answer:
        "Yes. The scheme does not cap the loan amount — borrowers can apply for whatever the project requires. However, the 3% interest subvention and the CGTMSE credit guarantee both apply only on the portion up to ₹2 Crore. The amount above ₹2 Crore is financed at the lender's standard rate with normal collateral requirements.",
    },
    {
      question: "Is interest charged during the moratorium period?",
      answer:
        "Yes, interest is payable from the date of first disbursement — including during the moratorium period. The moratorium applies only to principal repayment. The 3% subvention does apply to this interest during the moratorium phase.",
    },
    {
      question: "Do I need to arrange collateral for an AIF loan?",
      answer:
        "For loans up to ₹2 Crore, no collateral is required. CGTMSE provides 100% credit guarantee and the government pays the guarantee fee on your behalf. The lender cannot ask for third-party collateral or guarantors for this portion of the loan.",
    },
    {
      question: "How many projects can a single entity apply for?",
      answer:
        "A single entity can avail AIF benefits for up to 25 projects across different locations — each eligible for its own ₹2 Crore loan with the 3% subvention. This cap does not apply to state agencies, national/state federations of cooperatives, federations of FPOs, or federations of SHGs.",
    },
    {
      question: "What changed after the August 2024 Cabinet expansion?",
      answer:
        "The Union Cabinet approved significant changes in August 2024: integrated primary-plus-secondary processing units became eligible as a single project; the PM-KUSUM Component-A solar scheme was made convergent with AIF; Panchayats were added as eligible beneficiaries; and the range of community farming assets was broadened to include more precision farming and renewable energy infrastructure. Standalone secondary processing units remain ineligible.",
    },
    {
      question: "How long does the loan approval process take?",
      answer:
        "The AIF guidelines require lenders to communicate their sanction decision within 60 days of application. In practice, having a complete DPR and clean documentation significantly reduces the actual turnaround. The PMU verification step typically runs in parallel during the first 30 days.",
    },
    {
      question: "What is the most common reason applications get delayed?",
      answer:
        "An incomplete or poorly structured Detailed Project Report. Lenders cannot appraise the loan without credible technical specifications, realistic cost estimates and a clear revenue model. The second most common issue is unclear land documents — make sure land ownership or lease tenure covers at least 7 years from application date.",
    },
  ],
} as const;

export const cgtmsePage = {
  eyebrow: "CGTMSE • Collateral-Free Credit",
  heading: "CGTMSE Loan Scheme",
  kicker: "Eligibility, Benefits and How to Apply",
  intro:
    "Apply for the CGTMSE Loan Scheme and get up to ₹500 Lakhs in collateral-free funding. Learn about eligibility, benefits, interest rates, and documents required for the CGTMSE loan.",
  cta: "Apply Now",
  imageAlt: "Advisor reviewing a collateral-free CGTMSE loan file with an MSME founder",
  stats: [
    { value: "₹5 Cr", label: "Max Loan Cover" },
    { value: "75–85%", label: "Guarantee Cover" },
    { value: "0", label: "Collateral Needed" },
    { value: "1%", label: "Interest Subsidy (eligible)" },
  ] as const,
  unlock: {
    eyebrow: "What It Is",
    heading: "What is the CGTMSE Loan Scheme?",
    paragraphs: [
      "CGTMSE stands for Credit Guarantee Fund Trust for Micro and Small Enterprises. It was established to facilitate collateral-free loans to Micro and Small Enterprises (MSEs), enabling them to grow, scale, and overcome financial barriers in their early stages.",
      "The scheme is managed by a trust which is a joint initiative of the Government of India and the Small Industries Development Bank of India (SIDBI). Banks and financial institutions receive a credit guarantee for the loans they offer to MSEs — which reduces lender risk and helps founders access a without-security business loan.",
      "The scheme is a permanent government initiative and operates on a rolling basis. You can apply at any time through a scheduled commercial bank, RRB, or NSIC.",
    ],
    benefitsHeading: "Why founders apply",
    benefits: [
      "No need to pledge property or machinery",
      "Cover up to ₹500 Lakhs through eligible banks",
      "Guarantee cover ranging from 75% to 85%",
      "Hybrid security — partial collateral plus CGTMSE for the rest",
    ],
  },
  features: {
    eyebrow: "Key Features",
    heading: "Key Features of the CGTMSE Loan Scheme",
    sub: "Collateral-free limits, government-backed norms, and guarantee cover for manufacturing, services and trading.",
    items: [
      {
        title: "Collateral-free loans",
        text: "No need to pledge property or machinery.",
        icon: "shield" as const,
      },
      {
        title: "Loan Limits",
        text: "Up to ₹500 Lakhs for public and private sector banks.",
        icon: "wallet" as const,
      },
      {
        title: "CGTMSE guidelines",
        text: "Follows government-backed norms so MSEs can actually access the cover.",
        icon: "clipboard" as const,
      },
      {
        title: "Broad Scope",
        text: "Includes manufacturing, services and trading businesses.",
        icon: "landmark" as const,
      },
      {
        title: "Security",
        text: "The trust provides a guarantee cover ranging from 75% to 85% of the loan amount.",
        icon: "users" as const,
      },
    ],
  },
  benefits: {
    eyebrow: "What You Unlock",
    heading: "Benefits of the CGTMSE Loan Scheme",
    sub: "Built for owners who lack assets to pledge — with extra cover for micro units and women-led businesses.",
    leftHeading: "Amount & rate",
    rightHeading: "Cover & flexibility",
    items: [
      {
        title: "Loan Amount",
        text: "Access up to ₹500 Lakhs for a CGTMSE loan, including new businesses.",
        icon: "wallet" as const,
      },
      {
        title: "No Collateral",
        text: "A without-security business loan, easing the entry barrier for innovators.",
        icon: "shield" as const,
      },
      {
        title: "Interest Rate",
        text: "Highly competitive bank rates, often including an interest subsidy of up to 1% for eligible MSMEs.",
        icon: "landmark" as const,
      },
      {
        title: "Guarantee Coverage",
        text: "The trust guarantees up to 85% for Micro Enterprises (up to ₹5 Lakhs) and 75% for others.",
        icon: "clipboard" as const,
      },
      {
        title: "Support for Women",
        text: "Higher guarantee coverage for women-led startups.",
        icon: "users" as const,
      },
      {
        title: "Hybrid Security",
        text: "Startups can provide partial collateral and use CGTMSE for the remaining portion.",
        icon: "seed" as const,
      },
    ],
  },
  focus: {
    eyebrow: "Sectors",
    heading: "Focus Areas of the CGTMSE Loan Scheme",
    sub: "Open to a wide range of sectors. Women entrepreneurs can also combine CGTMSE with other women-focused schemes.",
    leftHeading: "Industry & trade",
    rightHeading: "Services & social",
    items: [
      {
        title: "Manufacturing",
        text: "Units producing goods, including those needing ISO certification.",
        icon: "factory" as const,
      },
      {
        title: "Services",
        text: "IT services, logistics, consulting, and legal consultancy firms.",
        icon: "chip" as const,
      },
      {
        title: "Trading",
        text: "Retail or wholesale trading, e-commerce, and supply chain distribution.",
        icon: "wallet" as const,
      },
      {
        title: "Agriculture",
        text: "Agri-businesses, food processing, and allied agri services.",
        icon: "agri" as const,
      },
      {
        title: "Education & Healthcare",
        text: "Private schools, medical service providers, and diagnostic centres.",
        icon: "lab" as const,
      },
    ],
  },
  eligibility: {
    eyebrow: "Who Qualifies",
    heading: "Eligibility Criteria for the CGTMSE Loan Scheme",
    sub: "Meet these requirements so the file reaches an eligible lender in the right shape.",
    leftHeading: "Entity & age",
    rightHeading: "Sector & lender",
    items: [
      {
        title: "Business Type",
        text: "Private Limited Companies, Partnerships, LLPs and MSMEs.",
        icon: "factory" as const,
      },
      {
        title: "Startup Age",
        text: "The business should ideally be less than 10 years old.",
        icon: "seed" as const,
      },
      {
        title: "Target Sector",
        text: "Manufacturing, services and trading (retail/wholesale).",
        icon: "landmark" as const,
      },
      {
        title: "MSME Status",
        text: "Must have valid MSME / Udyam certification.",
        icon: "clipboard" as const,
      },
      {
        title: "Lender Type",
        text: "Must apply through scheduled commercial banks, RRBs, or NSIC.",
        icon: "wallet" as const,
      },
      {
        title: "Business Stage",
        text: "Early-stage or growth-stage businesses with a viable business plan.",
        icon: "rocket" as const,
      },
    ],
  },
  process: {
    eyebrow: "How to Apply",
    heading: "How to Apply for the CGTMSE Loan Scheme",
    sub: "Five steps from documents to disbursement through your bank — there is no fixed application deadline.",
    steps: [
      {
        title: "Gather Required Documents",
        text: "Compile KYC, MSME registration, project report and financial statements.",
      },
      {
        title: "Submit Your Application",
        text: "Apply through your scheduled commercial bank or eligible lender under CGTMSE.",
      },
      {
        title: "Review & Evaluation",
        text: "The lender assesses creditworthiness with guarantee cover from CGTMSE.",
      },
      {
        title: "Interview & Selection",
        text: "Additional diligence or interviews as per bank policy.",
      },
      {
        title: "Loan Disbursement",
        text: "Sanction and disbursement to your business account upon approval.",
      },
    ],
  },
  documents: {
    eyebrow: "Paperwork",
    heading: "Documents Required for the CGTMSE Loan Application",
    note: "There is no application deadline — CGTMSE runs year-round. After eligibility we send a file-specific checklist. Vikas Bharat helps you structure the DPR and choose an eligible lender.",
    items: [
      "Business registration — Certificate of Incorporation, Partnership Deed, or LLP Agreement",
      "DPIIT recognition certificate, if available, for faster processing",
      "Udyam / MSME registration certificate",
      "Pitch deck / DPR explaining the business model and growth strategy",
      "Financial statements — audited balance sheets and P&L for the past 2 years (if applicable)",
      "Bank statements — last 6–12 months of the primary business account",
      "KYC — PAN and Aadhaar of all directors and partners",
      "Technology description / roadmap for tech-driven startups",
    ],
    cta: "Download For More",
  },
} as const;

export const cgtmseFaq = {
  heading: "CGTMSE questions, answered",
  sub: "Full form, loan limit, interest, new businesses, and the papers lenders ask for first.",
  items: [
    {
      question: "What is the CGTMSE Loan Scheme?",
      answer:
        "The CGTMSE Loan Scheme provides collateral-free loans to MSEs, where the government trust acts as a guarantor for the borrower.",
    },
    {
      question: "What is the CGTMSE loan full form?",
      answer:
        "It stands for Credit Guarantee Fund Trust for Micro and Small Enterprises.",
    },
    {
      question: "How much funding is available?",
      answer:
        "Eligible MSMEs can secure up to ₹500 Lakhs through scheduled commercial banks.",
    },
    {
      question: "What is the CGTMSE loan interest rate?",
      answer:
        "The interest rate depends on the bank's base rate, but often includes a 1% subsidy for eligible businesses under the CGTMSE scheme for MSMEs.",
    },
    {
      question: "Are new businesses eligible?",
      answer:
        "Yes. CGTMSE loans for new businesses are a primary focus of the trust to encourage entrepreneurship.",
    },
    {
      question: "What documents are required for a CGTMSE loan?",
      answer:
        "KYC, business registration, MSME / Udyam certification, a project report (DPR) and financial statements.",
    },
  ],
} as const;

export const pmegpPage = {
  eyebrow: "PMEGP • Credit-Linked Subsidy",
  heading: "PMEGP Scheme",
  kicker: "Eligibility, Subsidy and How to Apply",
  intro:
    "The Prime Minister's Employment Generation Programme (PMEGP) provides up to 35% government subsidy on project costs for new manufacturing and service enterprises. Learn who qualifies and how to apply.",
  cta: "Check Your Eligibility",
  imageAlt: "New micro-enterprise founder reviewing a PMEGP subsidy application",
  stats: [
    { value: "₹25L", label: "Max Loan (Mfg)" },
    { value: "₹10L", label: "Max Loan (Service)" },
    { value: "35%", label: "Max Subsidy" },
    { value: "18+", label: "Minimum Age" },
  ] as const,
  unlock: {
    eyebrow: "What It Is",
    heading: "What is the PMEGP Scheme?",
    paragraphs: [
      "The Prime Minister's Employment Generation Programme (PMEGP) is a credit-linked subsidy scheme implemented by the Ministry of MSME through the Khadi and Village Industries Commission (KVIC). It aims to generate employment by helping individuals set up new micro-enterprises.",
      "Under PMEGP, new manufacturing units can avail of project funding up to ₹25 Lakhs and service-sector enterprises up to ₹10 Lakhs. The government provides a subsidy of 15% to 35% of the project cost depending on the applicant category and location, while the applicant contributes 5% to 10% as their own margin money.",
      "PMEGP is available across all states and union territories of India and is administered through KVIC, State Khadi and Village Industries Boards (KVIBs), and District Industries Centres (DICs). It does not support expansion of existing units — only new enterprises qualify.",
    ],
    benefitsHeading: "Why founders apply",
    benefits: [
      "Up to 35% subsidy for rural special categories",
      "Own contribution of only 5–10%",
      "New manufacturing up to ₹25 Lakhs, services up to ₹10 Lakhs",
      "Implemented by KVIC, KVIBs and DICs nationwide",
    ],
  },
  benefits: {
    eyebrow: "Key Benefits",
    heading: "Key Benefits of PMEGP",
    sub: "Rural and urban subsidy slabs, low margin money, and government-backed bank credit for new units.",
    items: [
      {
        title: "High Subsidy for Rural Areas",
        text: "Rural applicants from general categories get 25% subsidy; SC/ST/Women/Minorities/Ex-servicemen and Differently Abled in rural areas get 35% subsidy.",
        icon: "wallet" as const,
      },
      {
        title: "Urban Subsidies Available",
        text: "Urban general category applicants receive 15% subsidy; special categories (SC/ST/Women etc.) get 25% subsidy.",
        icon: "landmark" as const,
      },
      {
        title: "Low Own Contribution",
        text: "General category beneficiaries contribute only 10% of the project cost; special categories contribute just 5%.",
        icon: "users" as const,
      },
      {
        title: "No Collateral for Small Loans",
        text: "Projects up to ₹10 Lakhs under manufacturing and ₹5 Lakhs under service sector typically don't require collateral.",
        icon: "shield" as const,
      },
      {
        title: "Wide Sector Coverage",
        text: "Covers manufacturing, food processing, textile, handicrafts, agro-based industries, bio-technology and service sectors.",
        icon: "zap" as const,
      },
      {
        title: "Government-Backed Credit",
        text: "Bank loan component is backed by the government subsidy, improving approval chances significantly.",
        icon: "clipboard" as const,
      },
    ],
  },
  eligibility: {
    eyebrow: "Who Qualifies",
    heading: "PMEGP Eligibility Criteria",
    sub: "Only new enterprises are eligible — existing businesses cannot apply for PMEGP expansion.",
    leftHeading: "Applicant rules",
    rightHeading: "Category & exclusions",
    items: [
      {
        title: "Age",
        text: "Minimum 18 years of age at the time of application.",
        icon: "seed" as const,
      },
      {
        title: "Education",
        text: "8th standard pass is mandatory for projects costing above ₹10 Lakhs.",
        icon: "file" as const,
      },
      {
        title: "New Units Only",
        text: "Only new businesses qualify. Existing units, upgrades or expansions are not eligible.",
        icon: "factory" as const,
      },
      {
        title: "Special Categories",
        text: "SC/ST, Women, Ex-servicemen, Differently Abled, NER residents, Minorities and Hill/Border area residents get higher subsidies.",
        icon: "users" as const,
      },
      {
        title: "Institutions",
        text: "Self Help Groups (SHGs), Charitable Trusts, and Institutions registered under Societies Registration Act 1860 are also eligible.",
        icon: "landmark" as const,
      },
      {
        title: "No Prior Beneficiary",
        text: "Applicants who have already availed of government subsidy under any other scheme are not eligible.",
        icon: "shield" as const,
      },
    ],
  },
  process: {
    eyebrow: "How to Apply",
    heading: "How to Apply for PMEGP",
    sub: "Six steps from the KVIC e-portal to bank sanction and subsidy credit after production starts.",
    steps: [
      {
        title: "Register on PMEGP Portal",
        text: "Create an account on the official PMEGP e-Portal (kviconline.gov.in) and fill in your personal and enterprise details.",
      },
      {
        title: "Prepare Your Project Report",
        text: "Draft a detailed project report covering business plan, investment plan, employment projection and market feasibility.",
      },
      {
        title: "Submit Application Online",
        text: "Upload all required documents and submit your application online through the PMEGP portal.",
      },
      {
        title: "Interview by Task Force",
        text: "A Task Force committee (KVIC/KVIB/DIC) reviews your application and conducts an interview or field visit.",
      },
      {
        title: "Bank Sanction & Margin Money",
        text: "After committee approval, the bank sanctions the loan. You deposit your margin money contribution.",
      },
      {
        title: "Subsidy Credited",
        text: "Once the unit starts production, the subsidy amount is credited to your loan account by the bank within 3 years.",
      },
    ],
  },
  documents: {
    eyebrow: "Paperwork",
    heading: "Documents Required for PMEGP",
    note: "Have these ready before applying on kviconline.gov.in. Vikas Bharat guides you from document preparation to bank sanction so the subsidy file does not stall on a weak DPR.",
    items: [
      "Identity proof — Aadhaar, PAN, or Voter ID",
      "Address proof — bank passbook, electricity bill, or Aadhaar",
      "Detailed Project Report with cost estimates, revenue projections and market analysis",
      "Educational certificate — 8th standard or higher (mandatory for projects above ₹10 Lakhs)",
      "Caste/category certificate if claiming special category subsidy",
      "Udyam registration or proof of new enterprise intent",
      "Recent passport-size photographs of the applicant",
    ],
    cta: "Download For More",
  },
} as const;

export const pmegpFaq = {
  heading: "PMEGP questions, answered",
  sub: "Who implements it, new units only, margin money, and how long approval usually takes.",
  items: [
    {
      question: "What is PMEGP?",
      answer:
        "PMEGP (Prime Minister's Employment Generation Programme) is a government subsidy scheme that helps new businesses get funding of up to ₹25 Lakhs (manufacturing) or ₹10 Lakhs (service) with 15–35% government subsidy.",
    },
    {
      question: "Who implements PMEGP?",
      answer:
        "PMEGP is implemented at the national level by KVIC (Khadi and Village Industries Commission) and at the state/district level by KVIBs and DICs.",
    },
    {
      question: "Can an existing business apply for PMEGP?",
      answer:
        "No. PMEGP is only for new enterprises. Existing units looking to expand or upgrade are not eligible for PMEGP funding.",
    },
    {
      question: "What is the margin money contribution?",
      answer:
        "General category applicants must contribute 10% of the project cost as margin money. Special category beneficiaries (SC/ST, women, minorities etc.) contribute only 5%.",
    },
    {
      question: "How long does PMEGP approval take?",
      answer:
        "Typically 30–90 days from the date of complete application submission, subject to document verification, task force interview and bank processing.",
    },
  ],
} as const;

export const ahidfPage = {
  eyebrow: "AHIDF • Animal Husbandry Infrastructure",
  heading: "AHIDF Scheme",
  kicker: "Eligibility, Subsidy & How to Apply",
  intro:
    "Get up to 90% loan coverage with 3% interest subvention for dairy, meat processing, feed manufacturing, and allied infrastructure projects.",
  cta: "Check Your Eligibility",
  imageAlt: "Dairy and animal-husbandry infrastructure eligible for AHIDF financing",
  stats: [
    { value: "90%", label: "Loan Coverage" },
    { value: "3%", label: "Interest Subvention" },
    { value: "25%", label: "NABARD Guarantee" },
    { value: "2 Yrs", label: "Principal Moratorium" },
  ] as const,
  unlock: {
    eyebrow: "What It Is",
    heading: "What is the AHIDF Scheme?",
    paragraphs: [
      "India's animal husbandry sector is evolving rapidly, and AHIDF — the Animal Husbandry Infrastructure Development Fund — aims to create modern infrastructure in dairy, meat processing, feed manufacturing and allied sectors.",
      "Eligible entities can access loan plus subsidy support, including startups, MSMEs, FPOs, private companies, Section 8 companies and individual entrepreneurs. MSMEs can also avail 25% credit guarantee support via NABARD, so collateral is not mandatory for all applicants.",
    ],
    benefitsHeading: "Why founders apply",
    benefits: [
      "Up to 90% of project cost as loan cover",
      "3% interest subvention for up to 8 years",
      "25% credit guarantee through NABARD",
      "2-year moratorium on principal",
    ],
  },
  benefits: {
    eyebrow: "Key Benefits",
    heading: "Key Benefits & Subsidy Breakdown",
    sub: "Loan cover, subvention, NABARD guarantee and a principal holiday — for dairy, meat, feed and allied units.",
    items: [
      {
        title: "Loan Coverage",
        text: "Up to 90% of project cost.",
        icon: "wallet" as const,
      },
      {
        title: "Interest Subvention",
        text: "3% interest subvention for up to 8 years.",
        icon: "landmark" as const,
      },
      {
        title: "Credit Guarantee",
        text: "25% guarantee through NABARD. Collateral is not mandatory for all applicants.",
        icon: "shield" as const,
      },
      {
        title: "Moratorium",
        text: "2 years on principal repayment.",
        icon: "clipboard" as const,
      },
    ],
  },
  eligibility: {
    eyebrow: "Who Qualifies",
    heading: "AHIDF Scheme Eligibility",
    sub: "Applicant types on the left; the project categories AHIDF typically covers on the right.",
    leftHeading: "Applicant types",
    rightHeading: "Projects covered",
    items: [
      {
        title: "FPOs",
        text: "Farmer Producer Organisations setting up dairy, feed or processing infrastructure.",
        icon: "seed" as const,
      },
      {
        title: "Private Companies & MSMEs",
        text: "Private limited companies and Udyam-registered MSMEs in animal husbandry value chains.",
        icon: "factory" as const,
      },
      {
        title: "Startups, Section 8 & Individuals",
        text: "Startups, Section 8 companies and individual entrepreneurs are eligible to apply.",
        icon: "rocket" as const,
      },
      {
        title: "Dairy & Ice Cream",
        text: "Dairy plants and ice cream units.",
        icon: "agri" as const,
      },
      {
        title: "Meat, Feed & Fodder",
        text: "Meat processing units, feed plants and fodder plants.",
        icon: "lab" as const,
      },
      {
        title: "Vaccines & By-products",
        text: "Veterinary vaccine units and by-product conversion units.",
        icon: "chip" as const,
      },
    ],
  },
  process: {
    eyebrow: "How to Apply",
    heading: "How to Apply for AHIDF Scheme",
    sub: "Six steps from project-type check to bank sanction and interest subvention approval.",
    steps: [
      {
        title: "Check Eligibility & Project Type",
        text: "Verify if your project falls under eligible categories.",
      },
      {
        title: "Prepare DPR & Financial Model",
        text: "Create a detailed project report with financial projections.",
      },
      {
        title: "Register on AHIDF Portal",
        text: "Create an account on the official AHIDF application portal.",
      },
      {
        title: "Upload Documents & Submit Application",
        text: "Fill the application form and upload all required documents.",
      },
      {
        title: "Bank Appraisal",
        text: "The bank conducts technical and financial appraisal.",
      },
      {
        title: "Loan Sanction & Interest Subvention Approval",
        text: "Final loan sanction with AHIDF benefits.",
      },
    ],
  },
  documents: {
    eyebrow: "Paperwork",
    heading: "Documents Required for AHIDF Loan",
    note: "Keep these ready before portal filing. Vikas Bharat sends a file-specific AHIDF checklist so lender review goes smoothly.",
    items: [
      "Detailed Project Report (DPR)",
      "Machinery layout and process flow",
      "Project viability and financial projections",
      "SWOT analysis",
      "Land title or lease agreement",
      "Applicant Aadhaar and PAN",
      "Incorporation or partnership documents",
      "Udyam registration (if MSME)",
      "Audited accounts and financial statements",
    ],
    cta: "Download For More",
  },
} as const;

export const ahidfFaq = {
  heading: "AHIDF questions, answered",
  sub: "Who can apply, what the subsidy actually is, collateral, covered projects and whether individuals qualify.",
  items: [
    {
      question: "Who is eligible for the AHIDF scheme?",
      answer:
        "FPOs, private companies, MSMEs, startups, Section 8 companies, and individual entrepreneurs.",
    },
    {
      question: "What subsidy is available under AHIDF?",
      answer:
        "The support is 3% interest subvention, plus credit guarantee coverage and a reduced margin contribution.",
    },
    {
      question: "Is collateral required under AHIDF?",
      answer:
        "Not mandatory for all applicants. MSMEs can avail 25% credit guarantee support via NABARD.",
    },
    {
      question: "What projects are covered?",
      answer:
        "Dairy plants, ice cream units, feed plants, meat processing units, veterinary vaccine units, fodder plants, and by-product conversion units.",
    },
    {
      question: "Can individuals apply for AHIDF?",
      answer:
        "Yes. Individual entrepreneurs and startups are eligible.",
    },
  ],
} as const;

export const cgssPage = {
  eyebrow: "CGSS • Credit Guarantee for Startups",
  heading: "CGSS Scheme",
  kicker: "Eligibility, Benefits, and How To Apply For Startups",
  intro:
    "Learn about the CGSS Scheme — a government-backed initiative that offers collateral-free loans to startups in India. Get details on eligibility, loan limits, focus areas, and documents required to apply.",
  cta: "Apply Now",
  imageAlt: "DPIIT-recognised startup reviewing a CGSS collateral-free loan file",
  stats: [
    { value: "₹20 Cr", label: "Max Loan Cover" },
    { value: "85%", label: "Guarantee up to ₹10 Cr" },
    { value: "75%", label: "Guarantee ₹10–20 Cr" },
    { value: "10 Yrs", label: "Max Startup Age" },
  ] as const,
  unlock: {
    eyebrow: "What It Is",
    heading: "What is the CGSS Scheme?",
    paragraphs: [
      "The Credit Guarantee Scheme for Startups (CGSS) is a government-backed initiative that offers collateral-free loans to recognised startups. Under this scheme, the government acts as a guarantor for a significant portion of the loan amount.",
      "This reduces the risk for lenders — including banks and NBFCs — making them more willing to provide large-scale capital to young companies. The loan can go up to ₹20 crore, making it one of the most substantial debt-based schemes available for entrepreneurs today.",
    ],
    benefitsHeading: "Why founders apply",
    benefits: [
      "Collateral-free — no land, property or inventory pledge",
      "Cover up to ₹20 crore with NCGTC backing",
      "85% guarantee up to ₹10 crore; 75% between ₹10–20 crore",
      "Debt route — no equity dilution",
    ],
  },
  benefits: {
    eyebrow: "What You Unlock",
    heading: "Benefits of the CGSS Scheme",
    sub: "High-ticket startup debt with NCGTC cover, so you can scale without giving up equity.",
    items: [
      {
        title: "Large-Scale Debt",
        text: "High-ticket startup loan coverage under a government-backed structure.",
        icon: "wallet" as const,
      },
      {
        title: "NCGTC Guarantee",
        text: "Guarantee support lowers lender risk and improves sanction probability.",
        icon: "shield" as const,
      },
      {
        title: "No Equity Dilution",
        text: "The debt route allows founders to retain ownership.",
        icon: "users" as const,
      },
      {
        title: "Growth Support",
        text: "Use for expansion, working capital, and market entry.",
        icon: "zap" as const,
      },
      {
        title: "Mentorship Ecosystem",
        text: "Access to startup advisory and support channels.",
        icon: "map" as const,
      },
    ],
  },
  features: {
    eyebrow: "Key Features",
    heading: "Key Features of the CGSS Scheme",
    sub: "Limits, guarantee slabs, sector breadth, and extra priority for women-led and North-East startups.",
    leftHeading: "Cover & limits",
    rightHeading: "Who it favours",
    items: [
      {
        title: "Collateral-free",
        text: "No need to pledge land, property, or inventory.",
        icon: "shield" as const,
      },
      {
        title: "High Loan Limits",
        text: "Funding available up to ₹20 crore.",
        icon: "wallet" as const,
      },
      {
        title: "Guarantee Coverage",
        text: "85% guarantee on loans up to ₹10 crore and 75% for loans between ₹10 crore and ₹20 crore.",
        icon: "clipboard" as const,
      },
      {
        title: "Broad Eligibility",
        text: "Open to a wide array of sectors, including tech and manufacturing.",
        icon: "factory" as const,
      },
      {
        title: "Special Priority",
        text: "Additional support for women-led startups and startups in the North-East.",
        icon: "users" as const,
      },
    ],
  },
  focus: {
    eyebrow: "Champion Sectors",
    heading: "Focus Areas of the CGSS Scheme",
    sub: "CGSS is inclusive, with a tailored push for certain champion sectors.",
    leftHeading: "Tech & climate",
    rightHeading: "Health & manufacturing",
    items: [
      {
        title: "Technology & Innovation",
        text: "Cutting-edge domains such as AI, blockchain, and IoT.",
        icon: "chip" as const,
      },
      {
        title: "Agri-tech & Clean-tech",
        text: "Sustainable agriculture and resource management solutions.",
        icon: "agri" as const,
      },
      {
        title: "Healthcare & Biotech",
        text: "Innovations in medical technology and pharmaceuticals.",
        icon: "lab" as const,
      },
      {
        title: "Renewable Energy",
        text: "Solar, wind, and sustainable power generation.",
        icon: "seed" as const,
      },
      {
        title: "Manufacturing",
        text: "Small and medium-scale units looking to adopt modern production techniques.",
        icon: "factory" as const,
      },
    ],
  },
  eligibility: {
    eyebrow: "Who Qualifies",
    heading: "Eligibility Criteria for the CGSS Scheme",
    sub: "Startups must meet defined legal, innovation, and compliance conditions.",
    leftHeading: "Entity & recognition",
    rightHeading: "Age, turnover & credit",
    items: [
      {
        title: "Business Type",
        text: "Private Limited Companies, LLPs, or Partnerships.",
        icon: "factory" as const,
      },
      {
        title: "DPIIT Recognition",
        text: "A valid DPIIT Startup Recognition Certificate is required.",
        icon: "rocket" as const,
      },
      {
        title: "Startup Age",
        text: "Company age should be below 10 years from incorporation.",
        icon: "seed" as const,
      },
      {
        title: "Revenue Limit",
        text: "Annual turnover should not exceed ₹100 crore.",
        icon: "wallet" as const,
      },
      {
        title: "Innovation Factor",
        text: "Technology-driven, innovative, or scalable business model.",
        icon: "chip" as const,
      },
      {
        title: "Credit Standing",
        text: "No default history with banks or financial institutions.",
        icon: "shield" as const,
      },
    ],
  },
  process: {
    eyebrow: "How to Apply",
    heading: "How to Apply for the CGSS Loan Scheme",
    sub: "Five steps through an eligible bank or NBFC. There is no fixed deadline — CGSS runs on a rolling basis.",
    steps: [
      {
        title: "Prepare Your Documents",
        text: "Compile DPIIT recognition, incorporation papers, pitch deck, DPR, financials and founder KYC.",
      },
      {
        title: "Submit Your Application",
        text: "Apply through a Member Lending Institution (scheduled bank or eligible NBFC) under CGSS.",
      },
      {
        title: "Evaluation & Review",
        text: "The lender assesses creditworthiness with NCGTC guarantee cover.",
      },
      {
        title: "Interview & Selection",
        text: "Additional diligence or founder interviews as per lender policy.",
      },
      {
        title: "Loan Disbursement",
        text: "Sanction and disbursement to your business account upon approval.",
      },
    ],
  },
  documents: {
    eyebrow: "Paperwork",
    heading: "Documents Required for the CGSS Loan Application",
    note: "There is no fixed deadline, but banks have quarterly CGSS disbursement targets. After eligibility we send a file-specific checklist. Vikas Bharat helps you make the file bank-ready.",
    items: [
      "DPIIT Recognition Certificate — proof of recognised startup status",
      "Incorporation documents — entity registration and constitutional records",
      "MSME / Udyam certificate where applicable",
      "Professional pitch deck — problem, solution, and growth roadmap",
      "Audited financials — balance sheet and P&L",
      "Detailed Project Report — 3–5 year strategy and forecast",
      "Founder KYC — Aadhaar, PAN, and address proof",
      "Technology readiness proof — evidence of product or prototype maturity",
    ],
    cta: "Download For More",
  },
} as const;

export const cgssFaq = {
  heading: "CGSS questions, answered",
  sub: "Guarantee slabs, who qualifies, documents, and how CGSS differs from CGTMSE.",
  items: [
    {
      question: "What is the CGSS Loan Scheme?",
      answer:
        "It is a credit guarantee program where the government guarantees loans up to ₹20 crore for startups, allowing them to borrow without collateral.",
    },
    {
      question: "What are the CGSS scheme details regarding guarantee cover?",
      answer:
        "The scheme provides an 85% guarantee for loans up to ₹10 crore and a 75% guarantee for loans between ₹10 crore and ₹20 crore.",
    },
    {
      question: "Who is eligible for CGSS scheme?",
      answer:
        "DPIIT-recognized startups that are less than 10 years old with a turnover of less than ₹100 crore and have no history of default.",
    },
    {
      question: "What documents are required for CGSS scheme?",
      answer:
        "DPIIT certificate, MSME certificate, audited financials, pitch deck, detailed project report, and KYC of founders.",
    },
    {
      question: "How is this different from a CGTMSE loan?",
      answer:
        "While both are collateral-free, the CGTMSE loan scheme is for all MSMEs up to ₹5 crore, whereas the CGSS loan is specifically for recognised startups up to ₹20 crore.",
    },
  ],
} as const;

export const sisfsPage = {
  eyebrow: "SISFS • Startup India Seed Fund",
  heading: "Startup India Seed Fund (SISFS)",
  kicker: "Grants up to ₹20L • Investment up to ₹50L",
  intro:
    "Access milestone-based grants for proof of concept and debt/convertible funding for market entry and scale through DPIIT’s incubator-led Startup India Seed Fund Scheme.",
  cta: "Check Your Eligibility",
  imageAlt: "Early-stage founders preparing a Startup India Seed Fund application",
  stats: [
    { value: "₹20L", label: "Max Grant (PoC / Prototype / Trials)" },
    { value: "₹50L", label: "Max Debt / Convertible" },
    { value: "60d", label: "First Grant Instalment Window" },
    { value: "0%", label: "Collateral / Guarantee Required" },
  ] as const,
  unlock: {
    eyebrow: "What It Is",
    heading: "What is SISFS?",
    paragraphs: [
      "The Startup India Seed Fund Scheme provides early-stage startups with financial assistance for proof of concept, prototype development, product trials, market entry and commercialisation via an incubator-driven process administered by DPIIT.",
      "Startups may receive up to ₹20 lakh as a grant for PoC, prototype and product trials, and up to ₹50 lakh as investment through convertible debentures or debt/debt-linked instruments for market entry and scaling.",
    ],
    benefitsHeading: "Why founders apply",
    benefits: [
      "DPIIT-recognised startup and ≤2 years at application",
      "≤₹10 lakh prior government funding (certain supports excluded)",
      "≥51% shareholding by Indian promoters at application",
      "Milestone-based disbursement and incubator agreement",
    ],
  },
  whyChoose: {
    eyebrow: "SISFS Desk",
    heading: "Why Choose Our SISFS Support?",
    sub: "Incubator selection, milestone structure and a compliance-ready file — so the first instalment is not stuck on paperwork.",
    items: [
      {
        title: "Non-Dilutive Grants",
        text: "Milestone-based grants up to ₹20 lakh for PoC, prototyping and product trials via empanelled incubators.",
        icon: "wallet" as const,
      },
      {
        title: "Unsecured Debt / Convertibles",
        text: "Up to ₹50 lakh with interest not exceeding the repo rate, tenure ≤60 months, up to 12 months moratorium and no promoter or third-party guarantee.",
        icon: "shield" as const,
      },
      {
        title: "Time-Bound Release",
        text: "First grant instalment to selected startups within 60 days from application receipt, subject to incubator milestones.",
        icon: "clipboard" as const,
      },
      {
        title: "Sector Priorities",
        text: "Preference for tech-led innovations in impact sectors like healthcare, agri/food, energy, mobility and more.",
        icon: "zap" as const,
      },
      {
        title: "Incubator-Led Execution",
        text: "Selection, agreements, milestone tracking and fund release are executed by recognised incubators.",
        icon: "users" as const,
      },
      {
        title: "Compliance-Ready",
        text: "Support for utilisation certificates, progress reporting and adherence to scheme conditions.",
        icon: "map" as const,
      },
    ],
  },
  eligibility: {
    eyebrow: "Who Qualifies",
    heading: "Eligibility Criteria",
    sub: "DPIIT recognition, age, shareholding and prior-funding caps — plus the conditions that govern how money can be used.",
    leftHeading: "Who Can Apply?",
    rightHeading: "Conditions",
    items: [
      {
        title: "DPIIT & Age",
        text: "DPIIT-recognised startup incorporated not more than 2 years before the application date.",
        icon: "rocket" as const,
      },
      {
        title: "Technology in Core",
        text: "Technology used in the core product, service, business model or delivery methodology.",
        icon: "chip" as const,
      },
      {
        title: "Priority Sectors",
        text: "Preference for solutions in listed priority sectors such as healthcare, agri/food, energy and mobility.",
        icon: "seed" as const,
      },
      {
        title: "Prior Funding Cap",
        text: "Not received more than ₹10 lakh monetary support from other Central/State schemes (with specified exceptions).",
        icon: "wallet" as const,
      },
      {
        title: "Indian Shareholding",
        text: "At least 51% shareholding by Indian promoters at the time of application.",
        icon: "users" as const,
      },
      {
        title: "Grant Use",
        text: "Grant strictly for PoC, prototype and trials — not for creation of facilities.",
        icon: "clipboard" as const,
      },
      {
        title: "Debt / Convertible Terms",
        text: "Interest ≤ repo rate, tenure ≤60 months, moratorium up to 12 months, unsecured, no guarantees.",
        icon: "landmark" as const,
      },
      {
        title: "Milestone Agreement",
        text: "Milestone-based disbursement under a legal agreement with the incubator.",
        icon: "file" as const,
      },
      {
        title: "Company Account",
        text: "Funds are credited to the company bank account with periodic utilisation reporting.",
        icon: "shield" as const,
      },
      {
        title: "Once Per Category",
        text: "Seed support can be availed once in each category (grant and debt/convertible) as per the scheme.",
        icon: "factory" as const,
      },
    ],
  },
  process: {
    eyebrow: "How to Apply",
    heading: "Simple Application Process",
    sub: "Five steps from the SISFS portal to milestone disbursement and utilisation reporting.",
    steps: [
      {
        title: "Apply on Portal",
        text: "Submit the application on the Startup India Seed Fund portal and select preferred incubators.",
      },
      {
        title: "Evaluation",
        text: "Incubators assess eligibility, tech readiness, market fit and alignment with sector priorities.",
      },
      {
        title: "Agreement & Milestones",
        text: "If selected, sign a legal agreement defining milestones and permitted use of funds.",
      },
      {
        title: "Disbursement & Reporting",
        text: "Receive milestone-linked tranches; submit progress updates and utilisation certificates.",
      },
      {
        title: "Follow-up & Support",
        text: "After disbursement, regular follow-ups help ensure milestones are met and challenges are addressed.",
      },
    ],
  },
  documents: {
    eyebrow: "Paperwork",
    heading: "Required Documents",
    note: "Prepare a compliant application, select aligned incubators and structure milestones so disbursement is not delayed. Vikas Bharat sends a file-specific SISFS checklist after eligibility.",
    items: [
      "DPIIT recognition proof and Certificate of Incorporation",
      "Company bank account details for fund receipt",
      "Declaration on prior government funding within the ₹10 lakh limit, as applicable",
      "Shareholding details evidencing ≥51% Indian promoter ownership at application",
      "Interim/final utilisation certificates and progress reports as per milestones",
    ],
    cta: "Download For More",
  },
} as const;

export const sisfsFaq = {
  heading: "SISFS questions, answered",
  sub: "Grant vs debt, collateral, who can apply, how money is released, and whether you can apply twice.",
  items: [
    {
      question: "How much funding is available under SISFS?",
      answer:
        "Up to ₹20 lakh as a grant for PoC/prototype/product trials and up to ₹50 lakh as investment via convertible debentures or debt/debt-linked instruments for market entry and scaling.",
    },
    {
      question: "Is equity or collateral required?",
      answer:
        "Grants are non-dilutive and debt/convertible funding is unsecured with no promoter or third-party guarantees. Interest is capped at not more than the prevailing repo rate, with tenure up to 60 months and a possible moratorium up to 12 months.",
    },
    {
      question: "Who can apply to SISFS?",
      answer:
        "DPIIT-recognized startups incorporated not more than 2 years before application that use technology in their core and meet shareholding and prior-funding conditions are eligible to apply via the portal.",
    },
    {
      question: "How are funds disbursed?",
      answer:
        "Funds are released by incubators in milestone-based tranches to the company’s bank account. The first grant instalment must be released within 60 days from receipt of application, followed by progress and utilization reporting.",
    },
    {
      question: "What compliance requirements follow after registration?",
      answer:
        "Startups must maintain utilization certificates, milestone evidence and reporting as stipulated by DPIIT and the empanelled incubator.",
    },
    {
      question: "Can a startup receive support more than once?",
      answer:
        "A startup can receive seed support once in each category — once as a grant and once as debt/convertible — subject to selections and scheme provisions.",
    },
  ],
} as const;

export const ublPage = {
  eyebrow: "Business Financing • Unsecured Loans",
  heading: "Unsecured Business Loans",
  kicker: "Collateral-Free Funding for MSMEs",
  intro:
    "Access up to ₹50 Lakhs in collateral-free business loans for your MSME or startup. Vikas Bharat helps you identify the right lender, prepare documentation and secure fast approval without putting your assets at risk.",
  cta: "Check Your Eligibility",
  imageAlt: "MSME owner reviewing a collateral-free unsecured business loan file",
  stats: [
    { value: "₹50L", label: "Loan Up To" },
    { value: "0", label: "Collateral Required" },
    { value: "48hrs", label: "Approval Target" },
    { value: "50+", label: "Lender Network" },
  ] as const,
  unlock: {
    eyebrow: "What It Is",
    heading: "What are Unsecured Business Loans?",
    paragraphs: [
      "An unsecured business loan is financing where the borrower does not need to pledge collateral — such as property, machinery or inventory. Approval is based on creditworthiness, cash flow, profitability and overall financial health.",
      "These loans suit MSMEs and startups with steady revenue or a strong plan but limited assets to pledge. They are offered by commercial banks, NBFCs and fintech lenders. Typical amounts range from ₹1 Lakh to ₹50 Lakhs with tenures of 12 to 60 months.",
    ],
    benefitsHeading: "Why founders apply",
    benefits: [
      "No pledge of property, machinery or inventory",
      "Approvals often within 48–72 hours with complete docs",
      "Use for working capital, inventory, equipment or expansion",
      "Debt route — no equity dilution",
    ],
  },
  whyChoose: {
    eyebrow: "Loan Desk",
    heading: "Why Choose an Unsecured Business Loan?",
    sub: "Speed, flexibility and asset protection — matched to the right bank, NBFC or fintech lender.",
    items: [
      {
        title: "No Collateral Required",
        text: "Your personal and business assets remain fully protected — no pledge of property, machinery or inventory.",
        icon: "shield" as const,
      },
      {
        title: "Fast Processing",
        text: "Documentation is minimal and approvals are typically faster than secured loans — often within 48–72 hours.",
        icon: "zap" as const,
      },
      {
        title: "Flexible Usage",
        text: "Use the loan for working capital, inventory purchase, equipment, marketing, salary or business expansion.",
        icon: "wallet" as const,
      },
      {
        title: "Preserves Equity",
        text: "Unlike equity financing, unsecured loans do not dilute ownership — you retain full control of your business.",
        icon: "users" as const,
      },
      {
        title: "Multiple Lender Options",
        text: "Access a wide network of public banks, private banks, NBFCs and fintech lenders with competitive interest rates.",
        icon: "landmark" as const,
      },
      {
        title: "Builds Credit Profile",
        text: "Timely repayment helps establish or improve your business credit score for future financing.",
        icon: "clipboard" as const,
      },
    ],
  },
  eligibility: {
    eyebrow: "Who Qualifies",
    heading: "Unsecured Business Loan Eligibility",
    sub: "Criteria vary by lender, but these are common requirements across most banks and NBFCs.",
    leftHeading: "Business Profile",
    rightHeading: "Credit & Compliance",
    items: [
      {
        title: "Business Age",
        text: "Minimum 1–3 years of operation (varies by lender; some fintechs accept 6 months).",
        icon: "rocket" as const,
      },
      {
        title: "Annual Turnover",
        text: "Minimum annual turnover of ₹5–10 Lakhs required by most lenders.",
        icon: "wallet" as const,
      },
      {
        title: "Business Type",
        text: "Proprietorships, partnerships, LLPs, Private Limited Companies and MSMEs are all eligible.",
        icon: "factory" as const,
      },
      {
        title: "Credit Score",
        text: "A CIBIL score of 700+ is preferred; some NBFCs accept scores from 650.",
        icon: "clipboard" as const,
      },
      {
        title: "GST Registration",
        text: "Active GST registration and regular filing history is typically required.",
        icon: "file" as const,
      },
      {
        title: "No Active Default",
        text: "No current NPA status or recent loan defaults with any financial institution.",
        icon: "shield" as const,
      },
    ],
  },
  process: {
    eyebrow: "How to Apply",
    heading: "How to Apply with Vikas Bharat",
    sub: "Five steps from a free eligibility check to disbursement in your business account.",
    steps: [
      {
        title: "Free Eligibility Check",
        text: "Submit your basic business details. Our advisors assess eligibility across 50+ lenders within 24 hours.",
      },
      {
        title: "Document Collection",
        text: "We guide you through the exact documents required and help you prepare a strong financial profile.",
      },
      {
        title: "Lender Matching",
        text: "We match you with the best lender based on your profile, loan requirement and competitive interest rates.",
      },
      {
        title: "Application Filing",
        text: "Our team files the application on your behalf, reducing errors and improving approval chances.",
      },
      {
        title: "Approval & Disbursement",
        text: "Once approved, funds are disbursed directly to your business account — typically within 48–72 hours.",
      },
    ],
  },
  documents: {
    eyebrow: "Paperwork",
    heading: "Documents Required",
    note: "Keep these ready for a smooth application. Vikas Bharat sends a lender-specific checklist after eligibility.",
    items: [
      "Identity proof — PAN and Aadhaar of all directors, partners or proprietor",
      "Business proof — Udyam Registration, GST certificate or incorporation certificate",
      "Bank statements — last 6–12 months of business bank statements",
      "ITR & financials — last 1–2 years of ITR, balance sheet and profit & loss statement",
      "Address proof — office lease agreement, utility bill or property documents",
      "Business vintage proof — trade license, shop establishment certificate or registration showing business age",
    ],
    cta: "Download For More",
  },
} as const;

export const ublFaq = {
  heading: "Unsecured loan questions, answered",
  sub: "Loan limits, interest rates, startups, fees and how long approval usually takes.",
  items: [
    {
      question: "What is the maximum loan amount for an unsecured business loan?",
      answer:
        "Most lenders offer unsecured business loans up to ₹50 Lakhs. Some fintech NBFCs can go higher depending on your business profile and revenue.",
    },
    {
      question: "What interest rate can I expect on an unsecured business loan?",
      answer:
        "Interest rates typically range from 12% to 24% per annum depending on your credit score, business vintage, turnover and lender type. Banks generally offer lower rates than NBFCs.",
    },
    {
      question: "Can a startup get an unsecured business loan?",
      answer:
        "Yes, some NBFCs and fintech lenders offer unsecured loans to startups with as little as 6 months of operation, provided they show adequate monthly revenue.",
    },
    {
      question: "Does Vikas Bharat charge a fee for loan assistance?",
      answer:
        "Vikas Bharat works on a transparent advisory model. Our fee structure is shared upfront before any service begins. There are no hidden charges.",
    },
    {
      question: "How long does it take to get an unsecured business loan?",
      answer:
        "With complete documentation, approvals typically happen in 48–72 hours from bank/NBFC submission. Vikas Bharat’s pre-checks further reduce processing time.",
    },
  ],
} as const;

export const rdifPage = {
  eyebrow: "RDIF • Research Development & Innovation Fund",
  heading: "RDIF Scheme",
  kicker: "Eligibility, Benefits, Funding & How to Apply",
  intro:
    "India’s Research Development and Innovation Fund — long-term, concessional capital for startups and MSMEs building strategic and deep-tech innovations.",
  cta: "Check Your Eligibility",
  imageAlt: "Researchers and founders reviewing an RDIF deep-tech funding proposal",
  stats: [
    { value: "₹1L Cr", label: "Total Fund Size" },
    { value: "50%", label: "Max Project Cost Cover" },
    { value: "3–4%", label: "Concessional Interest" },
    { value: "15 Yrs", label: "Max Repayment Tenure" },
  ] as const,
  unlock: {
    eyebrow: "What It Is",
    heading: "What is the RDIF?",
    paragraphs: [
      "The RDIF (Research Development and Innovation Fund) is a flagship Department of Science and Technology (DST) initiative to strengthen India’s research ecosystem. It is a central pillar of Atmanirbhar Bharat, aimed at increasing private-sector investment in R&D.",
      "Managed by Focused Research Organisations such as the Technology Development Board (TDB), the fund supports technology-intensive projects that traditional banks may consider too risky — with lower interest rates and longer tenures than a typical unsecured business loan. The overall outlay is ₹1 lakh crore over six years.",
    ],
    benefitsHeading: "Why founders apply",
    benefits: [
      "Up to 50% of assessed project cost as funding support",
      "Concessional interest typically 3%–4% per annum",
      "Repayment horizon of 12–15 years",
      "Implemented through TDB and DST",
    ],
  },
  benefits: {
    eyebrow: "What You Unlock",
    heading: "Benefits of the RDIF Scheme",
    sub: "Patient capital, lower interest burden and government validation for deep-tech and strategic R&D.",
    items: [
      {
        title: "Patient Capital",
        text: "Repayment periods up to 15 years allow startups to focus on R&D without immediate cash-flow pressure.",
        icon: "wallet" as const,
      },
      {
        title: "Low Interest Burden",
        text: "Interest rates are significantly lower than private NBFC or typical unsecured business loans.",
        icon: "landmark" as const,
      },
      {
        title: "Validation Seal",
        text: "Government backing acts as a quality signal that can improve attractiveness for further venture funding.",
        icon: "shield" as const,
      },
      {
        title: "Global Market Entry",
        text: "Facilitation pathways aligned with export and international deployment of Indian tech.",
        icon: "zap" as const,
      },
      {
        title: "Technical Support",
        text: "Access to government labs and the wider incubation-centre network in India.",
        icon: "users" as const,
      },
    ],
  },
  eligibility: {
    eyebrow: "Who Qualifies",
    heading: "RDIF Eligibility Criteria",
    sub: "Capital is directed toward legally sound entities with high technical potential and strategic focus.",
    leftHeading: "Entity & Location",
    rightHeading: "Tech & Ownership",
    items: [
      {
        title: "Entity Status",
        text: "Must be a registered Private Limited Company, LLP or Partnership.",
        icon: "factory" as const,
      },
      {
        title: "HQ in India",
        text: "Registered global headquarters and principal place of business must be in India.",
        icon: "landmark" as const,
      },
      {
        title: "Startup / MSME",
        text: "Must hold a valid Startup India registration certificate or be a registered MSME.",
        icon: "rocket" as const,
      },
      {
        title: "Technology Readiness",
        text: "Proposed technology must generally be at TRL 4 or higher (prototype validation).",
        icon: "lab" as const,
      },
      {
        title: "Indian Control",
        text: "Entity must be controlled by resident Indian citizens as per FDI policies.",
        icon: "users" as const,
      },
      {
        title: "Strategic Focus",
        text: "Projects must align with national priorities such as AI, deep tech or climate energy.",
        icon: "chip" as const,
      },
    ],
  },
  focus: {
    eyebrow: "Sectors",
    heading: "Strategic Focus Areas for Funding",
    sub: "Sectors critical for national growth and economic resilience — prime candidates for RDIF support.",
    leftHeading: "Deep Tech & Climate",
    rightHeading: "AI, Bio & Strategic",
    items: [
      {
        title: "Deep Technology",
        text: "Robotics, semiconductor-related designs and quantum computing.",
        icon: "chip" as const,
      },
      {
        title: "Energy & Climate",
        text: "Solar innovations, green hydrogen and battery storage.",
        icon: "zap" as const,
      },
      {
        title: "Artificial Intelligence",
        text: "AI for healthcare, agriculture and smart infrastructure.",
        icon: "tech" as const,
      },
      {
        title: "Biotechnology",
        text: "Biopharmaceuticals, medical devices and genomics.",
        icon: "lab" as const,
      },
      {
        title: "Digital Economy",
        text: "Fintech, agri-tech platforms and SaaS for digital public infrastructure.",
        icon: "seed" as const,
      },
      {
        title: "Strategic Tech",
        text: "Technologies for national security and import substitution.",
        icon: "shield" as const,
      },
    ],
  },
  funding: {
    eyebrow: "How Money Flows",
    heading: "Funding Structure Under RDIF",
    sub: "Three flexible modes of support to suit different business stages.",
    leftHeading: "Debt-Led",
    rightHeading: "Hybrid",
    items: [
      {
        title: "Long-Term R&D Loan",
        text: "Soft loan covering up to 50% of project cost, tenure 12–15 years, interest as low as about 3%.",
        icon: "wallet" as const,
      },
      {
        title: "Loan + Equity",
        text: "For high-growth ventures, TDB can mix debt and equity — equity typically capped at 25% shareholding.",
        icon: "landmark" as const,
      },
      {
        title: "Venture Debt + Deferred Equity",
        text: "Debt that can convert to equity later, helping founders keep higher ownership in early growth stages.",
        icon: "rocket" as const,
      },
    ],
  },
  process: {
    eyebrow: "How to Apply",
    heading: "How to Apply: Step-by-Step",
    sub: "A rigorous technical and financial evaluation from self-audit to milestone-based sanction.",
    steps: [
      {
        title: "Self-Audit",
        text: "Verify your entity meets RDIF eligibility for TRL level and sector focus.",
      },
      {
        title: "Technical Drafting",
        text: "Prepare your Detailed Project Report (DPR) and TRL assessment.",
      },
      {
        title: "Online Submission",
        text: "Submit your proposal via the official TDB or DST innovation portal.",
      },
      {
        title: "Technical Screening",
        text: "A committee of scientists and industry experts reviews technological novelty.",
      },
      {
        title: "Due Diligence",
        text: "Financial and legal audits of the startup are conducted.",
      },
      {
        title: "Sanction",
        text: "Funding is approved and tranches are released based on R&D milestones.",
      },
    ],
  },
  documents: {
    eyebrow: "Paperwork",
    heading: "Documents Required for RDIF",
    note: "Prepare a comprehensive professional file for evaluation. Vikas Bharat sends a file-specific RDIF checklist after eligibility.",
    items: [
      "Incorporation proof — Certificate of Incorporation, MoA and AoA",
      "DPIIT / Startup India recognition certificate (or MSME registration, as applicable)",
      "Detailed Project Report (DPR) covering R&D scope, TRL level and startup health",
      "Audited financials — balance sheets and P&L for the last 3 years (as applicable)",
      "TRL assessment — independent or self-certified proof of TRL 4 or above",
      "Business plan with financial projections",
      "IP documentation — patents filed or trademarks obtained (if any)",
      "Promoter KYC — Aadhaar, PAN and DIN of primary directors",
    ],
    cta: "Download For More",
  },
} as const;

export const rdifFaq = {
  heading: "RDIF questions, answered",
  sub: "Fund size, loan vs grant, eligibility, documents, Mudra overlap and repayment tenure.",
  items: [
    {
      question: "What is the RDIF Scheme?",
      answer:
        "It is a ₹1 Lakh Crore government fund (Research Development and Innovation Fund) aimed at providing long-term, low-interest funding for tech-led innovation in India.",
    },
    {
      question: "Is the RDIF a grant or a loan?",
      answer:
        "It primarily offers long-term soft loans, though it can include equity participation. It is not a direct grant like NIDHI PRAYAS.",
    },
    {
      question: "What is the RDIF eligibility for startups?",
      answer:
        "DPIIT-recognised Indian companies with technology generally at TRL 4 or above, HQ in India, and alignment with strategic focus sectors are eligible, subject to scheme guidelines.",
    },
    {
      question: "What are the key documents required for RDIF?",
      answer:
        "Detailed Project Report (DPR), TRL assessment, audited financials, and Startup India / DPIIT certificate (or MSME registration where applicable).",
    },
    {
      question: "Can I apply for the RDIF if I already have a Mudra loan?",
      answer:
        "Yes, but RDIF is intended for high-value research projects that typically exceed the limits of the Mudra loan scheme.",
    },
    {
      question: "How long is the repayment tenure?",
      answer:
        "Repayment can be spread over 12 to 15 years, providing significant financial flexibility for R&D-heavy ventures.",
    },
  ],
} as const;

export const sssPage = {
  eyebrow: "SSS • Startup Support Scheme",
  heading: "Startup Support Scheme (SSS)",
  kicker: "How To Apply, Benefits & Eligibility",
  intro:
    "Apply for the Startup Support Scheme (SSS) and get financial assistance of ₹25 Lakh to ₹1 Crore — plus mentorship and market connections for technology-driven startups.",
  cta: "Check Your Eligibility",
  imageAlt: "Founders preparing a Startup Support Scheme equity funding application",
  stats: [
    { value: "₹25L", label: "Min Funding Support" },
    { value: "₹1 Cr", label: "Max Funding Support" },
    { value: "10 Yrs", label: "Max Business Age" },
    { value: "DPIIT", label: "Recognition Required" },
  ] as const,
  unlock: {
    eyebrow: "What It Is",
    heading: "What is the Startup Support Scheme (SSS)?",
    paragraphs: [
      "The Startup Support Scheme (SSS) provides financial backing and mentorship for startups in technology and innovation domains. Unlike a purely debt-based unsecured business loan, SSS focuses on a longer-term partnership with the innovator.",
      "It assists early-stage startups from idea through scale-up. With funding from ₹25 lakh to ₹1 crore, SSS gives technology-driven startups the capital, mentorship and connections they need to build products and bring them to market.",
    ],
    benefitsHeading: "Why founders apply",
    benefits: [
      "Equity, debt or equity-linked support up to ₹1 crore",
      "Structured mentorship and growth advisory",
      "Support from idea / PoC through scale-up stages",
      "Networking with investors and industry partners",
    ],
  },
  benefits: {
    eyebrow: "What You Unlock",
    heading: "Benefits of the Startup Support Scheme (SSS)",
    sub: "Capital plus mentorship, product support and market pathways — not just a cheque.",
    items: [
      {
        title: "Funding Support",
        text: "Startups can avail up to ₹1 crore in equity-based investment, debt or equity-linked instruments.",
        icon: "wallet" as const,
      },
      {
        title: "Mentorship & Advisory",
        text: "Access structured mentorship and growth advisory sessions with industry experts and investors.",
        icon: "users" as const,
      },
      {
        title: "Product Development",
        text: "Support for product development, including testing, trials and market-entry strategies.",
        icon: "zap" as const,
      },
      {
        title: "Business Growth",
        text: "Accelerate growth through collaborations, market access and commercialisation pathways.",
        icon: "landmark" as const,
      },
      {
        title: "Networking",
        text: "Build relationships with venture funding partners and industry professionals.",
        icon: "send" as const,
      },
    ],
  },
  eligibility: {
    eyebrow: "Who Qualifies",
    heading: "Eligibility Criteria for SSS",
    sub: "DPIIT recognition, age, stage and an innovation-led model in tech-focused sectors.",
    leftHeading: "Entity & Registration",
    rightHeading: "Stage & Focus",
    items: [
      {
        title: "Business Type",
        text: "Proprietorship, Partnership, LLP, Private Limited Company, NGO or Individual.",
        icon: "factory" as const,
      },
      {
        title: "DPIIT Recognition",
        text: "Must have Startup India recognition via DPIIT.",
        icon: "rocket" as const,
      },
      {
        title: "Business Age",
        text: "Incorporated within the last 10 years from the date of registration.",
        icon: "clipboard" as const,
      },
      {
        title: "Stage of Business",
        text: "Idea, PoC, Prototype, MVP or Scale-up stage.",
        icon: "seed" as const,
      },
      {
        title: "Focus Areas",
        text: "Technology or innovation-driven sectors such as healthcare, fintech, IoT and more.",
        icon: "chip" as const,
      },
      {
        title: "Innovation Factor",
        text: "Must have an innovative technology idea or a disruptive business model.",
        icon: "tech" as const,
      },
    ],
  },
  process: {
    eyebrow: "How to Apply",
    heading: "How to Apply for the Startup Support Scheme (SSS)",
    sub: "Five steps from eligibility check to acceptance and funding initiation.",
    steps: [
      {
        title: "Check Eligibility",
        text: "Verify whether your startup falls under the eligible business, registration and stage criteria.",
      },
      {
        title: "Gather Documents",
        text: "Collect incorporation, DPIIT, pitch deck, financial records and innovation-proof documents.",
      },
      {
        title: "Submit the Application",
        text: "Submit your filled application with the complete set of required documents.",
      },
      {
        title: "Evaluation",
        text: "Your application is reviewed and evaluated as per the scheme guidelines.",
      },
      {
        title: "Acceptance & Funding",
        text: "Upon approval, acceptance is processed and funding support is initiated for eligible startups.",
      },
    ],
  },
  documents: {
    eyebrow: "Paperwork",
    heading: "Documents Required for SSS",
    note: "Keep these ready for submission and verification. Vikas Bharat sends a file-specific SSS checklist after eligibility.",
    items: [
      "Incorporation proof — Certificate of Incorporation, Partnership Deed or LLP Agreement",
      "DPIIT certificate — mandatory Startup India recognition",
      "Startup pitch deck or business plan outlining goals and milestones",
      "Financial records — audited balance sheets, P&L and bank statements for 1–2 years (as applicable)",
      "Technology description — MVP demo, photos or technical whitepapers as evidence of innovation",
      "Founder profiles — bios and CVs of core team members",
      "MSME details — copy of Udyam / MSME certification (if available)",
    ],
    cta: "Download For More",
  },
} as const;

export const sssFaq = {
  heading: "SSS questions, answered",
  sub: "What SSS is, who qualifies, how much funding you can get, and which documents matter.",
  items: [
    {
      question: "What is the Startup Support Scheme (SSS)?",
      answer:
        "The SSS scheme provides seed-style funding of up to ₹1 crore, mentorship and business development support for early-stage startups in India.",
    },
    {
      question: "What are the eligibility criteria for the SSS?",
      answer:
        "The startup must be technology or innovation-driven, incorporated within the last 10 years, and recognised by DPIIT. Eligible stages range from idea and PoC through MVP and scale-up.",
    },
    {
      question: "How much funding is available under the SSS?",
      answer:
        "The scheme offers support from about ₹25 lakh up to ₹1 crore in equity-based investment, debt or equity-linked / milestone-linked instruments.",
    },
    {
      question: "What documents are required for the SSS application?",
      answer:
        "DPIIT certificate, incorporation documents, financial statements, a pitch deck or business plan, and technical proof of concept or innovation evidence.",
    },
  ],
} as const;

export const equityLinkedSeedPage = {
  eyebrow: "Equity Linked Seed Fund Guide",
  heading: "Equity Linked Seed Fund",
  kicker: "Eligibility, Benefits, and How to Apply",
  intro:
    "Discover everything you need to know about the Equity Linked Seed Fund — eligibility, benefits, focus sectors and documents required to apply for funding for your innovative startup.",
  cta: "Check Your Eligibility",
  imageAlt: "Founders preparing an Equity Linked Seed Fund application",
  stats: [
    { value: "₹30L", label: "Max Grant Support" },
    { value: "10%", label: "Max Equity Stake" },
    { value: "₹3 Cr", label: "Pre-Series A Pathway" },
    { value: "5 Yrs", label: "Max Startup Age" },
  ] as const,
  unlock: {
    eyebrow: "What It Is",
    heading: "What is the Equity Linked Seed Fund?",
    paragraphs: [
      "The Equity Linked Seed Fund is a government-backed initiative designed to support early-stage startups with innovative technologies. It helps founders overcome initial financial challenges and move from concept to commercialisation.",
      "Support comes as equity or equity-linked investments, so startups can grow and develop products while retaining meaningful ownership. The fund targets breakthrough solutions across sectors such as biotech, agritech, healthcare and food processing.",
    ],
    benefitsHeading: "Why founders apply",
    benefits: [
      "Up to ₹30 lakh in grant support for early-stage startups",
      "Equity or equity-linked investment with max ~10% stake",
      "Pathway to up to ₹3 crore pre-Series A funding",
      "Mentorship, networking and market access",
    ],
  },
  benefits: {
    eyebrow: "What You Unlock",
    heading: "Benefits of the Equity Linked Seed Fund",
    sub: "Grant capital, capped equity participation, pre-Series A pathways and hands-on guidance.",
    items: [
      {
        title: "Grant Support",
        text: "Up to ₹30 lakhs in grant support for early-stage startups.",
        icon: "wallet" as const,
      },
      {
        title: "Equity-Based Investment",
        text: "Investment via equity or equity-linked instruments, with equity stake typically capped at about 10%.",
        icon: "users" as const,
      },
      {
        title: "Pre-Series A Funding",
        text: "Pathway to up to ₹3 crore in pre-Series A funding from investors and venture capitalists.",
        icon: "landmark" as const,
      },
      {
        title: "Financial Flexibility",
        text: "Funds can be used for product development, testing, marketing, team building and more.",
        icon: "zap" as const,
      },
      {
        title: "Mentorship & Guidance",
        text: "Access to industry experts, investors and mentors who guide startups in scaling operations.",
        icon: "mic" as const,
      },
      {
        title: "Networking & Market Access",
        text: "Opportunities to connect with customers, investors and partners for market expansion.",
        icon: "send" as const,
      },
    ],
  },
  objectives: {
    eyebrow: "Purpose",
    heading: "Key Objectives of the Fund",
    sub: "Bridge early-stage capital gaps and accelerate tech-led innovation toward market scale.",
    leftHeading: "Innovation & Capital",
    rightHeading: "Scale & Ecosystem",
    items: [
      {
        title: "Sector Innovation",
        text: "Support innovation in biotechnology, agriculture, healthcare and environmental sustainability.",
        icon: "lab" as const,
      },
      {
        title: "Early-Stage Capital",
        text: "Fund startups not yet ready to attract angel investors or venture capital on their own.",
        icon: "seed" as const,
      },
      {
        title: "Product Scale-Up",
        text: "Enable startups to scale products and services to meet market demand.",
        icon: "rocket" as const,
      },
      {
        title: "Funding Bridge",
        text: "Act as a bridge between early-stage funding and larger investments in the startup ecosystem.",
        icon: "landmark" as const,
      },
    ],
  },
  focus: {
    eyebrow: "Sectors",
    heading: "Focus Sectors",
    sub: "Technology-driven solutions across biotech, agri, health, food, cleantech and fintech.",
    leftHeading: "Life & Agri",
    rightHeading: "Health & Digital",
    items: [
      {
        title: "Biotech",
        text: "Drug discovery, biosimilars, regenerative medicine and biopharma innovations.",
        icon: "lab" as const,
      },
      {
        title: "Agritech",
        text: "Precision farming, farm management tools and agri-value chains.",
        icon: "agri" as const,
      },
      {
        title: "HealthTech",
        text: "Medical devices, digital health, telemedicine, IoT healthcare and remote monitoring.",
        icon: "chip" as const,
      },
      {
        title: "Food Processing",
        text: "Sustainable food processing, packaging and food-security innovations.",
        icon: "seed" as const,
      },
      {
        title: "CleanTech",
        text: "Renewable energy, waste management and environmental sustainability technologies.",
        icon: "zap" as const,
      },
      {
        title: "Fintech",
        text: "Financial technologies, payments systems and digital banking solutions.",
        icon: "wallet" as const,
      },
    ],
  },
  eligibility: {
    eyebrow: "Who Qualifies",
    heading: "Eligibility Criteria",
    sub: "Private limited, DPIIT-recognised, Indian-owned startups with innovative tech and early-stage economics.",
    leftHeading: "Entity & Ownership",
    rightHeading: "Stage & Economics",
    items: [
      {
        title: "Business Type",
        text: "Must be a Private Limited Company registered under the Companies Act, 2013.",
        icon: "factory" as const,
      },
      {
        title: "Indian Ownership",
        text: "At least 51% Indian ownership (excluding OCI/PIO).",
        icon: "users" as const,
      },
      {
        title: "DPIIT Recognition",
        text: "Must be DPIIT-recognised as a Startup India entity.",
        icon: "rocket" as const,
      },
      {
        title: "Technology & Innovation",
        text: "Focus on innovative technologies and commercialisation of new products.",
        icon: "tech" as const,
      },
      {
        title: "Age of Startup",
        text: "In existence for up to 5 years from the date of incorporation.",
        icon: "clipboard" as const,
      },
      {
        title: "Turnover Cap",
        text: "Annual turnover must not exceed ₹25 crore in any financial year.",
        icon: "wallet" as const,
      },
    ],
  },
  process: {
    eyebrow: "How to Apply",
    heading: "How to Apply for the Equity Linked Seed Fund",
    sub: "Five steps from document prep to disbursement — applications typically run on a rolling basis.",
    steps: [
      {
        title: "Prepare Documents",
        text: "Gather incorporation papers, DPIIT proof, pitch deck, financials, founder profiles and innovation evidence.",
      },
      {
        title: "Submit Application",
        text: "Apply through the official fund channel with a complete, compliance-ready file.",
      },
      {
        title: "Evaluation Process",
        text: "Your innovation, market readiness and financials are reviewed against scheme guidelines.",
      },
      {
        title: "Interview & Pitch",
        text: "Shortlisted teams present to the evaluation panel or investment committee.",
      },
      {
        title: "Disbursement & Support",
        text: "On approval, funding is disbursed and mentorship / market-access support begins.",
      },
    ],
  },
  documents: {
    eyebrow: "Paperwork",
    heading: "Documents Required",
    note: "Prepare a complete equity-ready file. Vikas Bharat sends a checklist tailored to your sector after eligibility.",
    items: [
      "Company registration documents — Certificate of Incorporation, MoA and AoA",
      "DPIIT recognition proof as a Startup India entity",
      "Pitch deck or business plan with market opportunity and growth strategy",
      "Financial statements — balance sheet, P&L and fund utilisation breakdown",
      "Founders’ information — resumes and background of the core team",
      "Innovation proof — technology, IP or market-readiness evidence",
    ],
    cta: "Download For More",
  },
} as const;

export const equityLinkedSeedFaq = {
  heading: "Equity Linked Seed Fund questions, answered",
  sub: "What the fund is, how much you can raise, who qualifies, and which documents matter.",
  items: [
    {
      question: "What is the Equity Linked Seed Fund?",
      answer:
        "It is a government-backed initiative that provides early-stage startups with innovative technologies funding through equity or equity-linked instruments, plus mentorship and market support.",
    },
    {
      question: "What is the maximum funding available under the Equity Linked Seed Fund?",
      answer:
        "Startups can receive up to ₹30 lakhs in grant / equity-linked support under the scheme, with pathways toward larger pre-Series A capital of up to about ₹3 crore.",
    },
    {
      question: "Who is eligible to apply for the Equity Linked Seed Fund?",
      answer:
        "DPIIT-recognised Private Limited Companies with at least 51% Indian ownership, up to 5 years old, turnover not exceeding ₹25 crore, and a focus on innovative technology commercialisation.",
    },
    {
      question: "What documents are required to apply?",
      answer:
        "Company registration documents, DPIIT proof, pitch deck or business plan, financials, founder profiles, and proof of technology or innovation.",
    },
    {
      question: "Is there a deadline to apply?",
      answer:
        "The fund generally operates on a rolling application basis. Specific windows may be announced periodically — check the official portal or ask Vikas Bharat for the latest cycle dates.",
    },
  ],
} as const;

const equityFundingFaq = (
  name: string,
  funding: string,
  eligibility: string,
  documents: string,
) => ({
  heading: `${name} questions, answered`,
  sub: "Funding, eligibility, documents and the application process.",
  items: [
    {
      question: `What is ${name}?`,
      answer: `${name} provides equity-led capital and strategic support to qualifying innovation-driven startups.`,
    },
    {
      question: "What funding support is available?",
      answer: funding,
    },
    {
      question: "Who is eligible to apply?",
      answer: eligibility,
    },
    {
      question: "What documents are required?",
      answer: documents,
    },
  ],
});

export const horizonFundPage = {
  eyebrow: "Startup Funding • Horizon Fund",
  heading: "Horizon Fund",
  kicker: "Equity Funding for Revenue-Generating Startups",
  intro:
    "Growth-stage, revenue-generating startups can access equity investment, mentorship and global network support to scale their next milestone.",
  cta: "Check Your Eligibility",
  imageAlt: "Growth-stage startup founders presenting to Horizon Fund investors",
  stats: [
    { value: "USD 100K", label: "Initial Investment" },
    { value: "USD 250K", label: "Follow-Up Potential" },
    { value: "₹2 Cr", label: "Approx. Total Scale Capital" },
    { value: "Rolling", label: "Application Basis" },
  ],
  unlock: {
    eyebrow: "What It Is",
    heading: "What is the Horizon Fund?",
    paragraphs: [
      "The Horizon Fund is an equity investment initiative for revenue-generating startups at growth stage. It is sector-agnostic, with a preference for technology-driven, scalable solutions.",
      "Initial investment can reach USD 100,000 (about ₹83 lakh), with follow-up investment up to USD 250,000 based on progress and achieved milestones.",
    ],
    benefitsHeading: "Why founders apply",
    benefits: [
      "Equity capital without EMI pressure",
      "Initial and follow-up growth funding",
      "Mentorship from industry leaders",
      "Access to global investors and corporate partners",
    ],
  },
  benefits: {
    eyebrow: "What You Unlock",
    heading: "Benefits of the Horizon Fund",
    sub: "Capital, mentor support and investor access for startups that have moved beyond the earliest stage.",
    items: [
      { title: "Seed-to-Scale Capital", text: "Potential investment of up to about ₹2 crore across initial and follow-up rounds.", icon: "wallet" as const },
      { title: "No Debt Burden", text: "Equity funding avoids monthly repayment pressure and supports reinvestment.", icon: "shield" as const },
      { title: "Expert Mentorship", text: "Guidance from industry leaders and growth advisors.", icon: "users" as const },
      { title: "Global Network", text: "Access to international investors and corporate partners.", icon: "send" as const },
      { title: "Tax Benefits", text: "Potential access to relevant state-level startup incentives.", icon: "landmark" as const },
    ],
  },
  eligibility: {
    eyebrow: "Who Qualifies",
    heading: "Horizon Fund Eligibility",
    sub: "Evidence of revenue, market traction, compliance and a credible growth plan are central to review.",
    leftHeading: "Business & Traction",
    rightHeading: "Compliance & Execution",
    items: [
      { title: "Registered Entity", text: "Partnership, LLP or Private Limited Company.", icon: "factory" as const },
      { title: "Revenue Generation", text: "Demonstrable market traction and active revenue.", icon: "wallet" as const },
      { title: "Growth Stage", text: "A scalable venture focused on expansion and viability.", icon: "rocket" as const },
      { title: "India Operations", text: "Operating in India, with valid MSME certification where applicable.", icon: "landmark" as const },
      { title: "Compliance", text: "Up-to-date financial records and tax compliance.", icon: "shield" as const },
      { title: "Use of Funds", text: "Capital allocated toward product expansion, commercialisation or scale.", icon: "zap" as const },
    ],
  },
  process: {
    eyebrow: "How to Apply",
    heading: "How to Apply",
    sub: "Prepare an investor-ready file, submit, and progress through review and selection.",
    steps: [
      { title: "Prepare Documents", text: "Compile financials, traction evidence, pitch deck and business plan." },
      { title: "Submit Application", text: "Share a complete application through the designated channel." },
      { title: "Review & Evaluation", text: "The team reviews market potential, execution readiness and compliance." },
      { title: "Interview & Selection", text: "Shortlisted founders discuss the business with the investment team." },
      { title: "Funding & Mentorship", text: "Selected ventures receive investment support and strategic guidance." },
    ],
  },
  documents: {
    eyebrow: "Paperwork",
    heading: "Documents Required",
    note: "Vikas Bharat provides a funding-readiness checklist after the initial eligibility review.",
    items: [
      "Company registration documents and DPIIT recognition",
      "Professional pitch deck and comprehensive business plan",
      "Latest audited financials and projections",
      "Technology description, PoC and customer-traction evidence",
      "Founder CVs and MSME certificate, where applicable",
    ],
    cta: "Download For More",
  },
} as const;

export const gvflPage = {
  eyebrow: "GVFL • Equity & Quasi-Equity",
  heading: "GVFL Scheme",
  kicker: "Equity & Quasi-Equity for Growth-Stage Businesses",
  intro: "GVFL supports innovative growth-stage businesses with equity and quasi-equity capital, investor readiness and strategic execution guidance.",
  cta: "Check Your Eligibility",
  imageAlt: "Founders preparing a GVFL equity investment proposal",
  stats: [
    { value: "Equity", label: "Investment Route" },
    { value: "Quasi", label: "Equity-Linked Options" },
    { value: "Growth", label: "Stage Focus" },
    { value: "India", label: "Innovation-Led Entities" },
  ],
  unlock: {
    eyebrow: "What It Is",
    heading: "What is GVFL?",
    paragraphs: [
      "GVFL (Gujarat Venture Finance Limited) supports growth-stage businesses through equity and quasi-equity investments.",
      "The programme backs innovation, expansion plans and scalable execution with suitable capital support, evaluation and long-term partnership.",
    ],
    benefitsHeading: "Why founders apply",
    benefits: ["Equity and quasi-equity structures", "Investor-readiness support", "Growth-stage focus", "Strategic execution guidance"],
  },
  benefits: {
    eyebrow: "What You Unlock",
    heading: "Benefits of GVFL Equity Support",
    sub: "Investor readiness and flexible capital structures for businesses with measurable scale potential.",
    items: [
      { title: "Equity / Quasi-Equity", text: "Support through equity-linked and quasi-equity structures based on evaluation.", icon: "wallet" as const },
      { title: "Investor Readiness", text: "Guidance to articulate traction, business narrative and growth plans.", icon: "clipboard" as const },
      { title: "Growth Stage Focus", text: "Support for businesses with clear milestones and expansion potential.", icon: "rocket" as const },
      { title: "Strategic Guidance", text: "Mentorship that improves commercialisation and operational planning.", icon: "users" as const },
      { title: "Long-Term Partnership", text: "Capital support designed for sustainable growth, not short-term fixes.", icon: "landmark" as const },
    ],
  },
  eligibility: {
    eyebrow: "Who Qualifies",
    heading: "GVFL Eligibility Criteria",
    sub: "Innovation, scale potential, compliance and an execution-ready team guide investment review.",
    leftHeading: "Business & Growth",
    rightHeading: "Execution & Compliance",
    items: [
      { title: "Innovation-Led Entity", text: "A registered company or entity with an innovative product or service.", icon: "factory" as const },
      { title: "Scalable Stage", text: "Growth-stage venture with measurable milestones and expansion potential.", icon: "rocket" as const },
      { title: "Clear Differentiator", text: "Technology, business-model innovation or market validation.", icon: "tech" as const },
      { title: "Legal Compliance", text: "Relevant registrations and legal requirements for fundraising.", icon: "shield" as const },
      { title: "Team Capability", text: "Founding team ready to execute the stated milestones.", icon: "users" as const },
      { title: "Growth Use", text: "Capital allocated toward product expansion, commercialisation or scale.", icon: "zap" as const },
    ],
  },
  process: horizonFundPage.process,
  documents: {
    eyebrow: "Paperwork",
    heading: "Documents Required for GVFL",
    note: "Prepare an investor-ready file; Vikas Bharat can share a tailored GVFL checklist.",
    items: ["Pitch deck / executive summary", "Business plan and growth strategy", "Incorporation / registration proof", "Financial statements", "Cap table / shareholding details", "Product, technology or market-validation proof", "Founder and team bios"],
    cta: "Download For More",
  },
} as const;

export const evolveTechPage = {
  eyebrow: "Evolve-Tech Funding 2.0",
  heading: "Evolve-Tech Funding 2.0",
  kicker: "Equity Funding & Mentorship for Tech Startups",
  intro: "A structured entry point for technology-enabled startups with an MVP to secure seed capital, expert feedback and investor readiness.",
  cta: "Check Your Eligibility",
  imageAlt: "Technology founders preparing an Evolve-Tech Funding pitch",
  stats: [
    { value: "₹25L", label: "Seed Investment" },
    { value: "5%", label: "Typical Equity Exchange" },
    { value: "7–8 Wks", label: "Evaluation Cycle" },
    { value: "MVP", label: "Minimum Product Stage" },
  ],
  unlock: {
    eyebrow: "What It Is",
    heading: "What is Evolve-Tech Funding 2.0?",
    paragraphs: [
      "Evolve-Tech Funding 2.0 is an equity-based programme for technology-enabled startups. Instead of immediate debt, investors take a small ownership stake in exchange for capital and long-term support.",
      "It helps founders bridge the gap between early traction and larger Series A rounds through professional evaluation, seed funding and high-level mentorship.",
    ],
    benefitsHeading: "Why founders apply",
    benefits: ["Up to ₹25 lakh seed investment", "Typically around 5% equity", "7–8 week structured evaluation", "Sector-agnostic technology focus"],
  },
  benefits: {
    eyebrow: "What You Unlock",
    heading: "Benefits of Evolve-Tech Funding 2.0",
    sub: "Seed capital, investor-readiness feedback and mentor access for MVP-stage startups.",
    items: [
      { title: "Immediate Capital", text: "Up to ₹25 lakh for team expansion, product refinement and early marketing.", icon: "wallet" as const },
      { title: "Investor Readiness", text: "Feedback on pitch decks, valuation and unit economics for future rounds.", icon: "clipboard" as const },
      { title: "Expert Mentorship", text: "Guidance to refine growth strategy and navigate market-entry hurdles.", icon: "users" as const },
      { title: "Global Exposure", text: "Visibility and introductions to potential B2B and ecosystem partners.", icon: "send" as const },
    ],
  },
  eligibility: {
    eyebrow: "Who Qualifies",
    heading: "Evolve-Tech Eligibility",
    sub: "Legally compliant, technology-enabled startups with a working prototype or MVP.",
    leftHeading: "Entity & Product",
    rightHeading: "Stage & Commitment",
    items: [
      { title: "Legal Structure", text: "Private Limited Company, LLP or Partnership.", icon: "factory" as const },
      { title: "Startup India", text: "Valid Startup India registration certificate.", icon: "rocket" as const },
      { title: "Technology Startup", text: "Technology-enabled business seeking private equity funding.", icon: "tech" as const },
      { title: "MVP / Prototype", text: "Pre-revenue or early-revenue venture with a working product sample.", icon: "chip" as const },
      { title: "Founder Commitment", text: "Founders available for the 7–8 week evaluation process.", icon: "users" as const },
      { title: "Compliance", text: "Adherence to applicable MSME guidelines for small and micro units.", icon: "shield" as const },
    ],
  },
  process: {
    eyebrow: "Evaluation Journey",
    heading: "How the Evaluation Process Works",
    sub: "A milestone-based selection journey from initial screening to equity agreement.",
    steps: [
      { title: "Initial Screening", text: "Submit a pitch deck and basic application documents." },
      { title: "Detailed Review", text: "The team evaluates technical architecture, market validation and founders." },
      { title: "Expert Interaction", text: "Domain specialists stress-test the business and execution plan." },
      { title: "Investment Committee Pitch", text: "Shortlisted founders present to the final decision panel." },
      { title: "Disbursement", text: "Successful startups sign an equity agreement and receive funds." },
    ],
  },
  documents: {
    eyebrow: "Paperwork",
    heading: "Documents Required",
    note: "Vikas Bharat sends a focused Evolve-Tech funding file checklist after eligibility.",
    items: ["Company deck, website link and product demo/photos", "Startup India / DPIIT certificate", "Founder CVs and role details", "Audited financials, P&L and cash-flow reports", "Cap table / shareholding pattern", "Udyam / MSME certificate and latest audit / MIS reports"],
    cta: "Download For More",
  },
} as const;

export const marineVenturePage = {
  eyebrow: "Marine Venture • USHUS Program",
  heading: "Marine Venture",
  kicker: "Funding, Mentorship & Incubation for Maritime Startups",
  intro: "Marine Venture supports maritime innovators with equity-led capital, specialist mentorship and structured incubation to commercialise ocean-tech solutions.",
  cta: "Check Your Eligibility",
  imageAlt: "Maritime technology founders preparing a Marine Venture proposal",
  stats: [
    { value: "24 Mo", label: "Incubation Roadmap" },
    { value: "₹1 Cr", label: "Related Hub Grant Potential" },
    { value: "51%", label: "Minimum Indian Ownership" },
    { value: "MVP", label: "Minimum Product Stage" },
  ],
  unlock: {
    eyebrow: "What It Is",
    heading: "What is Marine Venture?",
    paragraphs: [
      "Marine Venture 2026, under the USHUS Program, is a collaboration between IIMK LIVE and Cochin Shipyard Ltd. for technology-driven startups in maritime and allied sectors.",
      "It connects high-potential founders with industrial scale, equity-led partnerships, incubation and specialised mentorship for digital transformation and decarbonisation.",
    ],
    benefitsHeading: "Why founders apply",
    benefits: ["Equity investment based on startup readiness", "24-month structured incubation", "Shipyard pilot opportunities", "Investor demo days and mentorship"],
  },
  benefits: {
    eyebrow: "What You Unlock",
    heading: "Benefits of Marine Venture",
    sub: "Capital, incubation and real-world maritime testing support for ocean-tech innovators.",
    items: [
      { title: "Financial Support", text: "Equity investment based on startup readiness and related prototyping-grant pathways.", icon: "wallet" as const },
      { title: "24-Month Incubation", text: "A long-term, structured roadmap delivered through IIMK LIVE.", icon: "map" as const },
      { title: "Elite Mentorship", text: "Guidance from maritime veterans and growth-advisory experts.", icon: "users" as const },
      { title: "Shipyard Collaboration", text: "Opportunity to pilot technology in real-world shipyard environments.", icon: "landmark" as const },
      { title: "Investor Demo Days", text: "Direct pitching opportunities to VCs and angel investors in venture tech.", icon: "send" as const },
    ],
  },
  eligibility: {
    eyebrow: "Who Qualifies",
    heading: "Marine Venture Eligibility",
    sub: "DPIIT-recognised maritime innovators with an MVP, Indian control and a technology-centred model.",
    leftHeading: "Entity & Ownership",
    rightHeading: "Sector & Product",
    items: [
      { title: "DPIIT Startup", text: "DPIIT-recognised startup registered in India.", icon: "rocket" as const },
      { title: "Indian Ownership", text: "Indian promoters must hold at least 51% ownership at application.", icon: "users" as const },
      { title: "Legal Entity", text: "Registered as a Private Limited Company or LLP.", icon: "factory" as const },
      { title: "Maritime Focus", text: "Maritime, shipping, logistics or allied ocean-tech sector.", icon: "landmark" as const },
      { title: "MVP Stage", text: "Functional MVP or post-MVP product stage.", icon: "chip" as const },
      { title: "Technology Central", text: "Technology is central to the product, service or business model.", icon: "tech" as const },
    ],
  },
  process: {
    eyebrow: "How to Apply",
    heading: "Marine Venture Application Process",
    sub: "A structured USHUS submission journey from documentation through onboarding.",
    steps: [
      { title: "Documentation", text: "Prepare the technical, legal and commercial application file." },
      { title: "Portal Submission", text: "Submit the complete proposal through the designated programme channel." },
      { title: "Preliminary Screening", text: "The team assesses eligibility, sector fit and startup readiness." },
      { title: "Technical Evaluation", text: "Experts review technology, TRL, maritime relevance and pilot potential." },
      { title: "Final Pitch", text: "Shortlisted founders present to the programme and industry panel." },
      { title: "Onboarding", text: "Selected ventures begin incubation, mentorship and funding discussions." },
    ],
  },
  documents: {
    eyebrow: "Paperwork",
    heading: "Documents Required",
    note: "Vikas Bharat can help prepare the technical and compliance file needed for Marine Venture review.",
    items: ["Certificate of Incorporation, MoA and AoA", "DPIIT / Startup India certificate", "CS/CA-certified ownership proof showing ≥51% Indian ownership", "Maritime pitch deck and technical whitepaper / TRL proof", "Audited financials and cap table", "Pilot MoUs or customer-interest letters", "MSME certificate, where applicable"],
    cta: "Download For More",
  },
} as const;

export const matrixCapitalPage = {
  eyebrow: "Matrix Capital Fellowship",
  heading: "Matrix Capital Fellowship",
  kicker: "Elite Global Funding & Founder Mentorship",
  intro: "An ultra-selective, borderless fellowship for ambitious technology founders, combining bespoke mentorship with access to significant global capital.",
  cta: "Check Your Eligibility",
  imageAlt: "Global technology founders preparing a Matrix Capital Fellowship application",
  stats: [
    { value: "₹4.52 Cr", label: "Potential Capital Support" },
    { value: "0.1%", label: "Acceptance Rate" },
    { value: "€2M", label: "Max Traction-Track ARR" },
    { value: "Global", label: "Borderless Fellowship" },
  ],
  unlock: {
    eyebrow: "What It Is",
    heading: "What is the Matrix Capital Fellowship?",
    paragraphs: [
      "The Matrix Capital Fellowship, also known as the EWOR Fellowship, is an elite acceleration initiative combining direct financial investment and bespoke mentorship for globally scalable technology ventures.",
      "Rather than a rigid curriculum, fellows have intensive weekly sparring sessions with experienced builders to stress-test the business model and growth strategy.",
    ],
    benefitsHeading: "Why founders apply",
    benefits: ["Ideation and traction tracks", "Potential capital up to ₹4.52 crore", "Weekly sparring with unicorn founders", "Global investor-network access"],
  },
  benefits: {
    eyebrow: "What You Unlock",
    heading: "Benefits of the Matrix Capital Fellowship",
    sub: "Founder-favourable capital, high-touch mentorship and exposure to global investors.",
    items: [
      { title: "Capital Support", text: "Potential direct investment up to ₹4.52 crore through EWOR and affiliate funds.", icon: "wallet" as const },
      { title: "Unicorn-Founder Mentorship", text: "Weekly one-to-one sparring sessions with experienced global operators.", icon: "users" as const },
      { title: "Grand Pitch", text: "Exposure to hundreds of active global investors through the fellowship network.", icon: "send" as const },
      { title: "Platform Perks", text: "Potential cloud credits and access to talent and founder networks.", icon: "zap" as const },
    ],
  },
  eligibility: {
    eyebrow: "Who Qualifies",
    heading: "Fellowship Eligibility",
    sub: "A borderless programme for exceptional builders at ideation or early-traction stage.",
    leftHeading: "Founder & Stage",
    rightHeading: "Scope & Readiness",
    items: [
      { title: "Founder Quality", text: "Exceptional execution ability and ambition to build a global technology venture.", icon: "users" as const },
      { title: "Ideation to Traction", text: "From no formal company through startups with up to €2M ARR.", icon: "rocket" as const },
      { title: "Legal Status", text: "Open to individuals, teams and registered Private Limited Companies or LLPs.", icon: "factory" as const },
      { title: "Growth Mindset", text: "Resilience and commitment to a globally scalable high-growth model.", icon: "zap" as const },
      { title: "Borderless", text: "Founders from India, Europe and the US can apply.", icon: "landmark" as const },
      { title: "Startup Recognition", text: "Startup India recognition is advisable for Indian applicants.", icon: "clipboard" as const },
    ],
  },
  process: {
    eyebrow: "How to Apply",
    heading: "Matrix Fellowship Application Process",
    sub: "Select a track and progress through a highly selective assessment journey.",
    steps: [
      { title: "Track Selection", text: "Choose Ideation Mode or Traction Mode based on venture maturity." },
      { title: "Documentation", text: "Prepare founder portfolio, video introduction and venture materials." },
      { title: "Portal Application", text: "Submit a complete application through the fellowship portal." },
      { title: "Preliminary Assessment", text: "The team evaluates founder profile, ambition and venture potential." },
      { title: "Interview Rounds", text: "Shortlisted founders participate in high-intensity interview and sparring rounds." },
      { title: "Funding & Sparring", text: "Selected fellows access capital pathways and ongoing mentor sessions." },
    ],
  },
  documents: {
    eyebrow: "Paperwork",
    heading: "Documents Required",
    note: "Your application must demonstrate an exceptional founder profile and a globally scalable opportunity.",
    items: ["Founder portfolio, GitHub repository, personal site or professional profile", "Pitch deck with MVP validation and three-year projections for Traction Mode", "Short video introduction", "Incorporation and MSME documents, if applicable", "Financials, cap table and ARR proof for Traction Mode", "Technical whitepaper for deep-tech ventures"],
    cta: "Download For More",
  },
} as const;

export const horizonFundFaq = equityFundingFaq("Horizon Fund", "Initial investment can reach USD 100,000, followed by up to USD 250,000 based on milestones.", "Revenue-generating growth-stage startups registered as a Partnership, LLP or Private Limited Company with strong traction and compliance readiness.", "Pitch deck, business plan, audited financials, customer-traction proof, founder CVs and company registration papers.");
export const gvflFaq = equityFundingFaq("GVFL", "GVFL assesses equity and quasi-equity support based on business readiness and evaluation outcomes.", "Registered innovation-led businesses at a scalable stage with a compliant legal structure and credible execution plan.", "Pitch deck, business plan, registration proof, financial statements, cap table and market-validation evidence.");
export const evolveTechFaq = equityFundingFaq("Evolve-Tech Funding 2.0", "The programme offers seed investment up to ₹25 lakh, typically in exchange for about 5% equity, subject to committee terms.", "Technology-enabled startups with Startup India recognition, a working prototype or MVP, and founders available for the 7–8 week review.", "Company deck, DPIIT certificate, founder CVs, financial records, cap table, MSME certificate and product demo.");
export const marineVentureFaq = equityFundingFaq("Marine Venture", "Support is equity-led and linked to startup readiness, with related hub initiatives offering prototyping grant pathways.", "DPIIT-recognised Indian maritime, shipping, logistics or ocean-tech startups with an MVP and at least 51% Indian ownership.", "DPIIT certificate, ownership proof, maritime pitch deck, technical whitepaper, financials, cap table and pilot letters.");
export const matrixCapitalFaq = equityFundingFaq("Matrix Capital Fellowship", "Fellows may access up to ₹4.52 crore in investment support, subject to programme and investment terms.", "Exceptional global founders from ideation stage through ventures with up to €2M ARR; Indian applicants may apply.", "Founder portfolio, pitch deck, video introduction, financials and cap table for traction-stage applicants, plus technical whitepaper for deep-tech.");

const createEquityProgramme = (config: {
  name: string;
  eyebrow: string;
  kicker: string;
  intro: string;
  funding: string;
  eligibility: string;
  benefits: readonly string[];
  documents: readonly string[];
  process: readonly { title: string; text: string }[];
}) => ({
  eyebrow: config.eyebrow,
  heading: config.name,
  kicker: config.kicker,
  intro: config.intro,
  cta: "Check Your Eligibility",
  imageAlt: `${config.name} founders preparing an investment application`,
  stats: [
    { value: config.funding, label: "Funding Potential" },
    { value: "Equity", label: "Investment Route" },
    { value: "Startup", label: "Stage Focus" },
    { value: "India", label: "Application Access" },
  ],
  unlock: {
    eyebrow: "Programme Overview",
    heading: `What is ${config.name}?`,
    paragraphs: [
      config.intro,
      "The programme combines capital support with founder guidance, investor readiness and a structured review process for qualifying ventures.",
    ],
    benefitsHeading: "Why founders apply",
    benefits: config.benefits,
  },
  benefits: {
    eyebrow: "What You Unlock",
    heading: `Benefits of ${config.name}`,
    sub: "Capital and strategic support to help innovative ventures build, validate and scale.",
    items: config.benefits.map((title, index) => ({
      title,
      text: [
        "Investment support aligned to startup readiness and programme evaluation.",
        "Specialist guidance to sharpen the business model and execution plan.",
        "Access to relevant founder, mentor and investor networks.",
        "Structured support for product validation and commercialisation.",
      ][index % 4],
      icon: (["wallet", "users", "send", "rocket"][index % 4]) as "wallet" | "users" | "send" | "rocket",
    })),
  },
  eligibility: {
    eyebrow: "Who Qualifies",
    heading: `${config.name} Eligibility`,
    sub: config.eligibility,
    leftHeading: "Entity & Stage",
    rightHeading: "Readiness & Compliance",
    items: [
      { title: "Registered Entity", text: "A legally registered startup or business structure specified by the programme.", icon: "factory" as const },
      { title: "Innovation", text: "A technology-led, scalable or high-impact solution.", icon: "tech" as const },
      { title: "Product Readiness", text: "A PoC, prototype, MVP or early market traction, as applicable.", icon: "chip" as const },
      { title: "Founder Commitment", text: "A committed team ready to engage throughout the selection process.", icon: "users" as const },
      { title: "Compliance", text: "Complete registrations, financial records and applicable statutory compliance.", icon: "shield" as const },
      { title: "Growth Plan", text: "A credible use-of-funds plan and a pathway to scale.", icon: "rocket" as const },
    ],
  },
  process: {
    eyebrow: "How to Apply",
    heading: `${config.name} Application Process`,
    sub: "Prepare a complete investor-ready file and progress through review, pitch and selection.",
    steps: config.process,
  },
  documents: {
    eyebrow: "Paperwork",
    heading: "Documents Required",
    note: "Vikas Bharat can help organise a complete, application-ready documentation file.",
    items: config.documents,
    cta: "Download For More",
  },
} as const);

export const techEquityPage = createEquityProgramme({
  name: "Tech Equity Program",
  eyebrow: "Global Startup Accelerator",
  kicker: "Global Acceleration for Web3, Blockchain & AI",
  intro: "Alliance's Tech Equity Program supports early-stage technical founders building in blockchain, Web3 and AI through a hybrid 10-week acceleration journey, capital and international exposure.",
  funding: "Up to ₹4.15 Cr",
  eligibility: "Early-stage global startups, including Indian entities, with technical or visionary founders building in Blockchain, Web3 or AI. Teams should be working full-time and may apply from ideation through pre-revenue stages.",
  benefits: ["Up to ₹4.15 crore funding", "Web3 and AI specialist mentorship", "Global Demo Day exposure", "International investor network", "Regulatory and tokenomics guidance"],
  documents: ["Startup profile and product vision", "Founder CVs demonstrating technical expertise", "Company incorporation proof", "Startup India certificate, where applicable", "Burn rate, runway and prior-funding snapshot", "Technology roadmap, TRL proof or MVP demo"],
  process: [
    { title: "Preparation", text: "Refine the technology narrative, product roadmap and founder profile." },
    { title: "Online Submission", text: "Submit the application and supporting documents through the programme channel." },
    { title: "Interview", text: "Shortlisted founders discuss vision, technical depth and execution potential." },
    { title: "Acceptance", text: "Selected teams receive cohort confirmation and investment terms." },
    { title: "Scaling", text: "Join hybrid acceleration, mentorship and global Demo Day preparation." },
  ],
});

export const udyogFundingPage = createEquityProgramme({
  name: "Udyog Funding",
  eyebrow: "Global Startup Competition",
  kicker: "SAFE Investment for Global Startup Growth",
  intro: "Udyog Funding is a global startup competition that helps high-potential ventures progress from regional innovation to international market access through founder-friendly SAFE investment.",
  funding: "Up to $1M",
  eligibility: "Pre-Seed, Seed or Series A startups with at least one full-time founder, a working MVP and early traction. Prior external funding should not exceed $3 million.",
  benefits: ["Regional SAFE investment up to $50,000", "Global SAFE investment up to $1 million", "Global mentor and investor network", "Startup tool and cloud-credit perks", "International brand visibility"],
  documents: ["Founder CVs and profiles", "Certificate of Incorporation and PAN", "DPIIT / Startup India certificate", "Comprehensive pitch deck", "MVP traction, user or pilot evidence", "Burn rate, runway and prior-funding snapshot", "Product demo and MSME certificate, where applicable"],
  process: [
    { title: "Preparation", text: "Complete registration, confirm eligibility and prepare an investor-ready pitch." },
    { title: "Online Registration", text: "Submit the application through the designated competition portal." },
    { title: "Regional Evaluation", text: "Experts review the product, traction and global expansion potential." },
    { title: "Regional Finals", text: "Shortlisted startups pitch for regional SAFE investment." },
    { title: "Global Finale", text: "Regional winners compete for the global investment opportunity." },
  ],
});

export const vcFundStPage = createEquityProgramme({
  name: "VC Fund for ST",
  eyebrow: "Tribal Entrepreneurship • Venture Capital",
  kicker: "Institutional Capital for Scheduled Tribe Entrepreneurs",
  intro: "The Ministry of Tribal Affairs' VC Fund for ST supports Scheduled Tribe entrepreneurs through equity and debt-linked capital, incubation support and long-term growth guidance.",
  funding: "₹10L–₹5 Cr",
  eligibility: "The lead applicant must be an Indian Scheduled Tribe entrepreneur, with at least 51% ST ownership and control in a DPIIT-recognised Private Limited Company. The venture must meet applicable operating-history and compliance conditions.",
  benefits: ["Funding from ₹10 lakh to ₹5 crore", "Up to 75% project-cost support", "4% coupon rate; 3.75% for eligible women and differently-abled founders", "Up to 10-year tenure and 36-month moratorium", "Incubation and prototype-refinement support"],
  documents: ["Aadhaar, PAN and valid ST certificate", "Certificate of Incorporation, MoA and AoA", "DPIIT recognition certificate", "CA-certified shareholding proof showing ≥51% ST ownership", "Detailed Project Report and three-year projections", "Audited financials and bank statements", "TBI selection letter, if applicable", "Udyam / MSME certificate"],
  process: [
    { title: "Self-Audit", text: "Verify ST ownership, entity structure, operating history and eligibility." },
    { title: "Technical Drafting", text: "Prepare a bankable DPR with social impact, innovation and financial projections." },
    { title: "Portal Submission", text: "Submit a complete application through official IFCI or Ministry channels." },
    { title: "Preliminary Review", text: "The committee assesses financial viability, innovation and compliance." },
    { title: "Investment Committee Pitch", text: "Shortlisted founders present their venture and funding plan." },
    { title: "Due Diligence", text: "The fund verifies legal, tax, financial and ownership records." },
  ],
});

export const ventureFundMahaPage = createEquityProgramme({
  name: "Venture Fund (MH)",
  eyebrow: "Venture Fund • Maharashtra",
  kicker: "Maharashtra Startup Equity Funding",
  intro: "Managed by IDBI Capital with Maharashtra State Innovation Society, Venture Fund (MH) provides equity capital and institutional guidance to innovative Maharashtra startups.",
  funding: "Up to ₹5 Cr",
  eligibility: "DPIIT-recognised Private Limited Companies headquartered and primarily operating in Maharashtra, with a proven MVP or early revenue, clean financial records and an innovation-led scalable model.",
  benefits: ["Up to ₹5 crore equity investment", "No monthly EMI burden", "IDBI Capital mentorship and investor readiness", "Corporate and institutional network access", "Follow-on funding potential"],
  documents: ["Certificate of Incorporation, MoA and AoA", "DPIIT Startup Recognition certificate", "Investor-ready pitch deck", "Audited financials, where applicable", "Innovation and scalability project proposal", "Founder and key-team profiles", "Udyam / MSME certificate", "Patent or trademark documentation, where applicable"],
  process: [
    { title: "Self-Audit", text: "Confirm Maharashtra headquarters, Private Limited structure and DPIIT status." },
    { title: "Technical Drafting", text: "Prepare a detailed investment narrative and use-of-funds plan." },
    { title: "Portal Submission", text: "Submit the completed funding application and supporting file." },
    { title: "Preliminary Screening", text: "The investment team assesses fit, traction and potential." },
    { title: "Due Diligence", text: "Financial, legal and commercial details are reviewed." },
    { title: "Investment Committee Pitch", text: "Shortlisted founders present to the investment panel." },
  ],
});

export const ventureFundingChallengePage = createEquityProgramme({
  name: "Venture Funding Challenge",
  eyebrow: "Shiv Nadar AIC • Startup Acceleration",
  kicker: "Seed Funding & Hybrid Incubation for Innovation-Led Startups",
  intro: "The Venture Funding Challenge by Shiv Nadar AIC provides seed-stage capital, expert mentorship and a nine-month hybrid incubation programme for high-potential technology ventures.",
  funding: "₹5L–₹1 Cr",
  eligibility: "Early-stage or scaling Indian startups incorporated as a Private Limited Company, LLP or Partnership, with at least a PoC or working prototype, a committed founding team and a scalable technology or research-led solution.",
  benefits: ["Funding from ₹5 lakh to ₹1 crore", "Nine-month hybrid incubation", "One-to-one founder and academic mentorship", "University lab and ecosystem access", "Curated investor Demo Days", "Market-validation support"],
  documents: ["Certificate of Incorporation, MoA and AoA", "DPIIT / Startup India recognition", "Comprehensive pitch deck", "Prototype, PoC or TRL evidence", "Current financials and three-year projections", "Founder and technical-team CVs", "Udyam / MSME certificate", "Patent or trademark documents, if applicable"],
  process: [
    { title: "Self-Audit", text: "Confirm entity eligibility, prototype readiness and founder commitment." },
    { title: "Technical Preparation", text: "Prepare a concise technical narrative, pitch and validation evidence." },
    { title: "Online Submission", text: "Submit the application and complete supporting file." },
    { title: "Preliminary Review", text: "The programme evaluates innovation, market potential and readiness." },
    { title: "Interview & Presentation", text: "Shortlisted founders present their technology and scale plan." },
    { title: "Selection & Funding", text: "Selected startups enter hybrid incubation and funding discussions." },
  ],
});

export const equityElevatorPage = createEquityProgramme({
  name: "Equity Elevator",
  eyebrow: "Global Tech Accelerator",
  kicker: "International Equity Funding & Silicon Valley Mentorship",
  intro: "Equity Elevator is an international equity-based acceleration programme offering up to ₹4 crore for early- and growth-stage tech startups, with one-to-one mentorship from San Francisco industry leaders.",
  funding: "Up to ₹4 Cr",
  eligibility: "Registered Private Limited Companies, LLPs or Partnerships building tech-driven solutions with high IP potential, Startup India eligibility, and a clear global or multi-regional scaling strategy. At least one founder must join all 1:1 sessions.",
  benefits: ["Equity investment up to ₹4 crore", "1:1 San Francisco mentorship", "Global networking and ecosystem access", "No debt burden", "Support across DeepTech, HealthTech, GreenTech, FinTech and mobility"],
  documents: ["Company profile or website overview", "Detailed pitch deck", "Product demo video (up to 2 minutes)", "Founder vision video (about 1 minute)", "Auditor-certified cap table and 12-month projections", "Certificate of Incorporation and MSME certificate", "TRL proof (TRL 4+ preferred)"],
  process: [
    { title: "Preparation", text: "Assemble the pitch, product narrative, videos and financial file." },
    { title: "Portal Submission", text: "Submit a complete application through the programme channel." },
    { title: "Preliminary Screening", text: "Reviewers assess innovation quality, team velocity and scale potential." },
    { title: "Technical Due Diligence", text: "Technology, market and compliance details are examined in depth." },
    { title: "Selection & Funding", text: "Selected startups receive investment terms and mentorship onboarding." },
  ],
});

export const deepTechPage = createEquityProgramme({
  name: "Deep Tech Funding",
  eyebrow: "IIT Tirupati TIH • NM-ICPS",
  kicker: "Up to ₹1 Crore for Research-to-Prototype Deep Tech",
  intro: "Deep Tech Funding under IIT Tirupati TIH supports academia–industry–startup collaborations advancing technologies from TRL 2–4 to TRL 5–6 in PNT, Earth Observation, Digital Twin and subsurface intelligence.",
  funding: "Up to ₹1 Cr",
  eligibility: "Indian nationals with a Principal Investigator affiliated to a recognised Indian academic or research institution. Startup-only proposals are not allowed — academia–industry–startup collaboration is required, with a 12–18 month project timeline aligned to focus domains.",
  benefits: ["Grant support up to ₹1 crore", "Milestone-linked tranche release", "DST and industry mentorship", "IP and commercialisation assistance", "Access to elite research labs and validation facilities"],
  documents: ["Detailed project proposal with TRL entry and exit points", "Prototype roadmap and timeline", "IP filing strategy", "Commercial deployment pathway", "PI and startup team CVs", "MSME certification for the industrial partner", "Collaboration letters or MoUs from partners"],
  process: [
    { title: "Partner Up", text: "Secure an academic PI and industry or startup collaboration partners." },
    { title: "Technical Drafting", text: "Prepare the TRL narrative, roadmap and collaboration file." },
    { title: "Portal Submission", text: "Submit the complete proposal through the official TIH channel." },
    { title: "Evaluation", text: "Experts assess technical feasibility, impact and delivery readiness." },
    { title: "Funding Disbursement", text: "Approved projects receive milestone-linked grant support." },
    { title: "Execution & Monitoring", text: "Teams execute over 12–18 months with progress reviews." },
  ],
});

export const newVenturePage = createEquityProgramme({
  name: "New Venture Program",
  eyebrow: "EmTek CoE • Industry 4.0",
  kicker: "Up to ₹30 Lakh for Early-Stage Industry 4.0 Startups",
  intro: "The New Venture Program by EmTek’s Centre of Excellence in Industry 4.0, Bhubaneswar, accelerates early-stage startups working on AI, blockchain, robotics, cybersecurity and related deep-tech solutions with funding, lab access and mentorship.",
  funding: "Up to ₹30L",
  eligibility: "Indian entrepreneurs and DPIIT-recognised startups registered as Private Limited Companies, LLPs, Partnerships or MSMEs, building scalable Industry 4.0 solutions across ideation to early scaling stages.",
  benefits: ["Grants up to ₹30 lakh", "Industry and academic mentorship", "CoE lab and incubation infrastructure", "Business-model and GTM refinement", "Prototype-to-product assistance", "Investor and stakeholder networking", "IP patent advisory"],
  documents: ["Completed application form", "Project proposal or business plan", "Business model and market analysis", "Prototype or demo, if available", "Company registration and eligibility proof"],
  process: [
    { title: "Prepare Documents", text: "Gather the proposal, business model, demo and registration proofs." },
    { title: "Submit Application", text: "Apply through the official New Venture Program portal." },
    { title: "Review & Shortlisting", text: "Experts assess innovation fit, feasibility and commercial potential." },
    { title: "Interview / Pitch", text: "Shortlisted teams present to the selection panel." },
    { title: "Final Selection", text: "Selected startups enrol for funding, lab access and mentorship." },
  ],
});

export const ratanFundingPage = createEquityProgramme({
  name: "Ratan Funding",
  eyebrow: "Ratan Tata Innovation Hub",
  kicker: "Up to ₹30 Lakh Seed Support for Validated Prototypes",
  intro: "Ratan Funding is a flagship incubation and acceleration initiative for early-stage startups with validated prototypes or MVPs, helping founders reach investor readiness with founder-friendly capital and mentorship.",
  funding: "Up to ₹30L",
  eligibility: "Startups with a validated prototype or functional MVP, registered as Private Limited, LLP or OPC, holding Startup India recognition, with a full-time founding team and a scalable technology-driven solution.",
  benefits: ["Seed support up to ₹30 lakh", "One-to-one industry mentorship", "Investor Demo Day access", "Global exposure pathways", "Regulatory and compliance guidance"],
  documents: ["Certificate of Incorporation and MSME certificate", "GST and tax documents, if applicable", "Pitch deck covering problem, solution, market and traction", "Audited statements or six months of bank statements", "TRL or prototype evidence", "Founder bios and portfolios", "Patent or trademark documents, if any"],
  process: [
    { title: "Documentation", text: "Assemble incorporation, pitch, TRL and financial proofs." },
    { title: "Portal Entry", text: "Create or complete the application on the programme portal." },
    { title: "Document Upload", text: "Upload the full supporting file for screening." },
    { title: "Preliminary Screening", text: "The team reviews readiness, innovation and founder commitment." },
    { title: "Pitch Session", text: "Shortlisted founders present to mentors and evaluators." },
    { title: "Funding & Mentorship", text: "Selected startups receive capital pathways and ongoing guidance." },
  ],
});

export const investmentReadinessPage = createEquityProgramme({
  name: "Investment Readiness Accelerator (IRA) 2.0",
  eyebrow: "ISB I-Venture Accelerator",
  kicker: "Prepare Seed to Series A Startups for Investor Meetings",
  intro: "IRA 2.0 by ISB I-Venture helps early-to-growth startups become investor-ready through pitch coaching, financial modelling, one-to-one mentorship, compliance gap closure and a curated Demo Day with VC and angel networks.",
  funding: "Accelerator",
  eligibility: "DPIIT-recognised Private Limited Companies or LLPs at early-to-growth stage with a deployed product or MVP, measurable traction, active fundraising intent within 6–12 months, and at least one full-time founder participating.",
  benefits: ["Pitch-deck refinement with investor feedback", "Financial model and valuation workshops", "One-to-one domain mentorship", "Demo Day and warm investor introductions", "Compliance and legal gap closure", "Open across FinTech, HealthTech, DeepTech, SaaS and more"],
  documents: ["Company Incorporation Certificate (Pvt Ltd / LLP)", "DPIIT Recognition Certificate", "Pitch deck with problem, solution, market, traction and team", "Three-year financial projections and current statements", "Cap table", "Founder and leadership biographies", "MVP or product proof", "Udyam / MSME certificate"],
  process: [
    { title: "Eligibility Verification", text: "Confirm stage, traction, DPIIT status and documentation readiness." },
    { title: "Document Preparation", text: "Finalise pitch deck, financial model, cap table and certificates." },
    { title: "Online Application", text: "Submit the complete application through the IRA 2.0 portal." },
    { title: "Screening & Shortlisting", text: "ISB I-Venture evaluates innovation, market potential and fundraising readiness." },
    { title: "Program Participation", text: "Attend workshops, mentoring and financial modelling clinics." },
    { title: "Investor Connection", text: "Pitch at Demo Day and begin active fundraising conversations." },
  ],
});

export const technovibePage = createEquityProgramme({
  name: "TechnoVibe Funding",
  eyebrow: "Blockchain India Challenge",
  kicker: "Tiered Grants up to ₹10 Lakh for Blockchain Startups",
  intro: "TechnoVibe Funding supports blockchain-based solutions for governance, supply chains, healthcare, education and sustainability through non-dilutive, stage-wise grants from prototype to deployment.",
  funding: "Up to ₹10L",
  eligibility: "DPIIT-recognised or early-stage Indian-majority Private Limited Companies or LLPs with a proprietary blockchain solution at prototype, MVP or pilot-ready stage. Individual innovators may apply but must incorporate during the programme.",
  benefits: ["Prototype grant of ₹1.5 lakh", "MVP grant of ₹4 lakh", "Deployment grant of ₹10 lakh", "Government pilot collaboration pathways", "Blockchain specialist mentorship", "VC and ecosystem visibility"],
  documents: ["DPIIT Recognition Certificate", "Technical whitepaper on blockchain architecture", "Comprehensive pitch deck", "Team CVs highlighting blockchain expertise", "Six months of bank statements and ITR, if applicable", "Prototype or MVP proof (demo or repository)", "Certificate of Incorporation, MoA and AoA"],
  process: [
    { title: "Portal Registration", text: "Register on the official TechnoVibe application channel." },
    { title: "Prepare the Pitch", text: "Finalise the whitepaper, pitch deck and stage-fit narrative." },
    { title: "Document Upload", text: "Upload incorporation, DPIIT and technical evidence." },
    { title: "Technical Screening", text: "Experts review architecture quality, originality and public-use fit." },
    { title: "Presentation", text: "Shortlisted teams present to the evaluation panel." },
    { title: "Grant Approval", text: "Selected startups receive stage-linked grant disbursement." },
  ],
});

export const ventureTechPage = createEquityProgramme({
  name: "Venture Tech Funding",
  eyebrow: "Chiratae Sonic Programme",
  kicker: "Up to ₹18 Crore Seed Capital for Disruptive Tech Startups",
  intro: "Venture Tech Funding through Chiratae Sonic provides rapid seed and growth capital for early-stage technology startups with a valid prototype or market validation, covering AI, climate-tech, biotech, robotics, quantum and space.",
  funding: "Up to ₹18 Cr",
  eligibility: "Early-stage technology startups registered under the Companies Act 2013, with a valid prototype or market validation, committed founders, and a focus on disruptive domains such as AI/ML, biotech, energy, quantum, robotics or space tech.",
  benefits: ["Seed funding up to USD 2 million (~₹18 crore)", "Initial application response within 48 hours", "Demo Day and curated investor visibility", "Mentorship and networking from Chiratae partners", "Expert-led go-to-market strategy support"],
  documents: ["Executive summary / pitch deck", "Business plan with financial projections", "Product or technology description with prototype or MVP proof", "Founding team bios", "Market and competitor analysis", "Current traction metrics, if available", "Incorporation certificate, tax filings and IP documents, if applicable"],
  process: [
    { title: "Prepare Documents", text: "Assemble the pitch deck, business plan, product proof and compliance file." },
    { title: "Submit Application", text: "Apply through the Chiratae Sonic / Venture Tech Funding channel." },
    { title: "Evaluation Process", text: "The team reviews technology depth, market potential and founder readiness." },
    { title: "Interview & Pitch", text: "Shortlisted startups present to investors and programme partners." },
    { title: "Funding & Mentorship", text: "Selected ventures receive investment terms and ongoing ecosystem support." },
  ],
});

export const techEquityFaq = equityFundingFaq("Tech Equity Program", "Selected participants may receive up to $500,000 (about ₹4.15 crore), subject to programme terms.", "Early-stage global Blockchain, Web3 and AI startups with technical or visionary founders; existing traction is not mandatory.", "Startup profile, founder backgrounds, incorporation proof, funding snapshot and product roadmap or MVP demo.");
export const udyogFundingFaq = equityFundingFaq("Udyog Funding", "Regional winners may receive up to $50,000 and the global champion up to $1 million through SAFE investment.", "Pre-Seed to Series A startups with a full-time founder, working MVP, early traction and less than $3 million in prior external funding.", "Founder profiles, incorporation proof, pitch deck, traction evidence, financial snapshot and product demo.");
export const vcFundStFaq = equityFundingFaq("VC Fund for ST", "The fund provides ₹10 lakh to ₹5 crore, subject to project evaluation and fund terms.", "DPIIT-recognised Private Limited Companies with at least 51% ownership and control by Scheduled Tribe entrepreneurs.", "ST certificate, incorporation documents, DPIIT proof, shareholding certificate, DPR, financials and bank statements.");
export const ventureFundMahaFaq = equityFundingFaq("Venture Fund (MH)", "Eligible startups can receive up to ₹5 crore in equity financing.", "DPIIT-recognised Private Limited Companies headquartered and operating primarily in Maharashtra, with an MVP or early revenue.", "Pitch deck, DPIIT certificate, financials, founder bios, innovation proposal and relevant IP documents.");
export const ventureFundingChallengeFaq = equityFundingFaq("Venture Funding Challenge", "Selected startups may receive ₹5 lakh to ₹1 crore based on project maturity and technical evaluation.", "Early-stage Indian startups with a PoC or working prototype, scalable technology or research solution and committed founders.", "Incorporation papers, DPIIT proof, pitch deck, prototype evidence, financial projections and team profiles.");
export const equityElevatorFaq = equityFundingFaq("Equity Elevator", "Selected startups can receive an equity investment of up to ₹4 crore (about $500,000).", "Early- or growth-stage tech startups registered as Private Limited, LLP or Partnership with MVP or early-revenue traction and a global scaling vision.", "Company profile, pitch deck, founder and product videos, financials and TRL evidence.");
export const deepTechFaq = equityFundingFaq("Deep Tech Funding", "Selected projects can receive up to ₹1 crore in grant-in-aid support.", "Indian collaborative proposals with an academic Principal Investigator; startup-only applications are not eligible.", "Project proposal, prototype roadmap, IP plan and collaboration letters from partners.");
export const newVentureFaq = equityFundingFaq("New Venture Program", "Selected startups may receive up to ₹30 lakh to support prototype development and scaling.", "Indian Industry 4.0 startups registered as Private Limited, LLP, Partnership or MSME entities.", "Application form, project proposal, business model, registration proof and prototype or demo if available.");
export const ratanFundingFaq = equityFundingFaq("Ratan Funding", "Selected startups can receive up to ₹30 lakh in milestone-linked grants or seed capital.", "DPIIT / Startup India recognised startups with a validated prototype or MVP and a full-time founding team.", "Incorporation papers, pitch deck, TRL evidence, financials and founder profiles.");
export const investmentReadinessFaq = equityFundingFaq("Investment Readiness Accelerator (IRA) 2.0", "IRA 2.0 does not invest capital directly — it prepares startups to raise Seed to Series A funding from external investors.", "DPIIT-recognised Pvt Ltd or LLP startups with a deployed product or MVP, traction and fundraising intent within 6–12 months.", "Pitch deck, financial model, cap table, DPIIT certificate, incorporation papers and product proof.");
export const technovibeFaq = equityFundingFaq("TechnoVibe Funding", "Startups can access up to ₹10 lakh across Prototype (₹1.5L), MVP (₹4L) and Deployment (₹10L) stages.", "DPIIT-recognised or early-stage Indian blockchain startups (Pvt Ltd or LLP) with proprietary technology at prototype to pilot stage.", "DPIIT certificate, technical whitepaper, pitch deck, TRL proof and incorporation documents.");
export const ventureTechFaq = equityFundingFaq("Venture Tech Funding", "Selected startups may receive seed funding up to USD 2 million (about ₹18 crore), subject to evaluation and investment terms.", "Early-stage Companies Act startups with a prototype or market validation in disruptive tech domains such as AI, biotech, energy, quantum, robotics or space.", "Pitch deck, business plan, product description, founder bios, market analysis, traction proof and incorporation papers.");

const subsidySchemeFaq = (
  name: string,
  funding: string,
  eligibility: string,
  documents: string,
) => ({
  heading: `${name} questions, answered`,
  sub: "Subsidy support, eligibility, documents and the application process.",
  items: [
    {
      question: `What is ${name}?`,
      answer: `${name} provides government-backed subsidy or incentive support to qualifying applicants under its guidelines.`,
    },
    {
      question: "What subsidy or financial support is available?",
      answer: funding,
    },
    {
      question: "Who is eligible to apply?",
      answer: eligibility,
    },
    {
      question: "What documents are required?",
      answer: documents,
    },
  ],
});

const createSubsidyProgramme = (config: {
  name: string;
  eyebrow: string;
  kicker: string;
  intro: string;
  funding: string;
  routeLabel?: string;
  eligibility: string;
  benefits: readonly string[];
  documents: readonly string[];
  process: readonly { title: string; text: string }[];
}) => ({
  eyebrow: config.eyebrow,
  heading: config.name,
  kicker: config.kicker,
  intro: config.intro,
  cta: "Check Your Eligibility",
  imageAlt: `${config.name} applicants preparing a subsidy application`,
  stats: [
    { value: config.funding, label: "Subsidy Potential" },
    { value: config.routeLabel ?? "Subsidy", label: "Support Route" },
    { value: "Eligible", label: "Applicant Focus" },
    { value: "India", label: "Application Access" },
  ],
  unlock: {
    eyebrow: "Scheme Overview",
    heading: `What is ${config.name}?`,
    paragraphs: [
      config.intro,
      "Vikas Bharat helps you check fit, prepare documents and structure a complete subsidy-ready application file.",
    ],
    benefitsHeading: "Why applicants apply",
    benefits: config.benefits,
  },
  benefits: {
    eyebrow: "What You Unlock",
    heading: `Benefits of ${config.name}`,
    sub: "Capital support and incentives that reduce project cost and improve bankability.",
    items: config.benefits.map((title, index) => ({
      title,
      text: [
        "Subsidy or incentive support aligned to scheme guidelines and project evaluation.",
        "Lower effective project cost through capital or interest benefits.",
        "Structured documentation support for banks, boards and implementing agencies.",
        "Guidance to keep the file compliant through approval and disbursement.",
      ][index % 4],
      icon: (["wallet", "zap", "shield", "send"][index % 4]) as "wallet" | "zap" | "shield" | "send",
    })),
  },
  eligibility: {
    eyebrow: "Who Qualifies",
    heading: `${config.name} Eligibility`,
    sub: config.eligibility,
    leftHeading: "Applicant Profile",
    rightHeading: "Project & Compliance",
    items: [
      { title: "Eligible Applicant", text: "Individuals, enterprises or organisations covered under the scheme guidelines.", icon: "users" as const },
      { title: "Project Fit", text: "A project aligned to the scheme’s sector, capacity and end-use requirements.", icon: "factory" as const },
      { title: "Location / Domicile", text: "Location or domicile conditions as specified for the scheme or component.", icon: "landmark" as const },
      { title: "Financial Closure", text: "Bank or NBFC sanction and promoter contribution where required.", icon: "wallet" as const },
      { title: "Compliance", text: "Registrations, land, tax and statutory clearances as applicable.", icon: "shield" as const },
      { title: "Documentation", text: "A complete DPR and supporting file ready for agency and lender review.", icon: "chip" as const },
    ],
  },
  process: {
    eyebrow: "How to Apply",
    heading: `${config.name} Application Process`,
    sub: "Prepare a complete file, submit through the official channel and progress through review to subsidy release.",
    steps: config.process,
  },
  documents: {
    eyebrow: "Paperwork",
    heading: "Documents Required",
    note: "Vikas Bharat can help organise a complete, subsidy-ready documentation file.",
    items: config.documents,
    cta: "Download For More",
  },
} as const);

export const coldStorageSubsidyPage = createSubsidyProgramme({
  name: "Cold Storage Subsidy Scheme",
  eyebrow: "NHB • MIDH • Agro Infrastructure",
  kicker: "Capital Subsidy & Interest Support for Cold Storage Units",
  intro: "The Cold Storage Subsidy Scheme, implemented through NHB and MIDH, supports construction and modernisation of multi-chamber, energy-efficient cold storage for fruits, vegetables, spices and onions — typically from 251 MT to 20,000 MT capacity.",
  funding: "Up to 50%",
  eligibility: "Individual entrepreneurs, farmers, FPOs, cooperatives and MSMEs registered as Private Limited, LLP or Partnership, with land ownership or a registered lease of at least 15 years, term-loan financial closure, and primary use for horticulture commodities within 251–20,000 MT capacity.",
  benefits: [
    "Capital subsidy of 35–50% of project cost (higher in Gujarat and hilly/scheduled areas)",
    "3% interest subvention on term loans up to ₹2 crore",
    "100% CGTMSE-style guarantee cover pathways for eligible loans up to ₹2 crore",
    "State incentives such as electricity bill reimbursement in select states",
    "Support for energy-efficient and multi-commodity storage designs",
  ],
  documents: [
    "Detailed Project Report (DPR) with technical and financial plans",
    "Land ownership title or registered long-term lease",
    "Bank or NBFC sanction letter for financial closure",
    "Civil drawings, site plan and machinery layout",
    "Aadhaar and PAN of promoters or directors",
    "Certificate of Incorporation, MoA and AoA",
    "GST registration and Udyam / MSME certificate",
    "Pollution control and electricity department NOCs",
  ],
  process: [
    { title: "Technical Planning", text: "Finalise capacity, technology (RCS/PEB), commodity mix and cost estimates." },
    { title: "Secure Funding", text: "Obtain term-loan sanction and close promoter contribution." },
    { title: "Online Registration", text: "Submit the application with DPR and supporting documents on the official portal." },
    { title: "In-Principle Approval", text: "Implementing agency reviews technical and financial eligibility." },
    { title: "Inspection & Release", text: "After verification and commissioning milestones, subsidy is released as per guidelines." },
  ],
});

export const pmKusumPage = createSubsidyProgramme({
  name: "PM KUSUM Scheme",
  eyebrow: "MNRE • Solar Agriculture",
  kicker: "Solar Pumps, Decentralised Plants & Grid Solarisation",
  intro: "PM KUSUM (Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan) helps farmers shift to solar power through decentralised plants on barren land (Component A), standalone solar pumps (Component B), and solarisation of grid-connected pumps (Component C).",
  funding: "Up to 60–80%",
  eligibility: "Eligibility varies by component: individual farmers, FPOs, cooperatives, panchayats and water user associations for Component A; farmers in off-grid or weak-grid areas for Component B; and farmers with existing grid-connected pumps for Component C, as per state policy.",
  benefits: [
    "Subsidy up to 60% (30% Central + 30% State) in most regions, and up to 80% in special regions",
    "Component A: decentralised solar plants on barren land (target 10,000 MW)",
    "Component B: standalone off-grid solar agricultural pumps",
    "Component C: solarisation of existing grid-connected pumps",
    "Income opportunity by selling surplus power to the grid under Components A and C",
  ],
  documents: [
    "Aadhaar and identity proof",
    "Land ownership proof (especially for Component A)",
    "Bank account details (passbook or cancelled cheque)",
    "Detailed Project Report for larger plants",
    "Consent letter from the concerned DISCOM",
    "State portal registration and application forms",
  ],
  process: [
    { title: "Portal Registration", text: "Register on the state renewable energy / PM KUSUM portal." },
    { title: "Proposal Submission", text: "Upload documents, technical details and component selection." },
    { title: "Technical Evaluation", text: "DISCOM and MNRE-linked agencies verify feasibility and policy fit." },
    { title: "Installation", text: "Commissioning is completed through approved vendors." },
    { title: "Subsidy Disbursement", text: "Subsidy is released after successful installation and verification." },
  ],
});

export const tweesPage = createSubsidyProgramme({
  name: "TWEES Scheme",
  eyebrow: "Tamil Nadu • Women & Transgender Entrepreneurs",
  kicker: "Loans up to ₹10 Lakh with 25% Government Subsidy",
  intro: "TWEES (Tamil Nadu Women Employment and Entrepreneurship Scheme) provides collateral-free loan support up to ₹10 lakh with a 25% government subsidy (capped at ₹2 lakh) for women and transgender entrepreneurs setting up or expanding micro and small businesses.",
  funding: "25% / ₹2L",
  routeLabel: "Loan + Subsidy",
  eligibility: "Women and transgender residents of Tamil Nadu aged 18–55 with a valid ration card, proposing manufacturing, service or trading projects (large agriculture projects are excluded), and able to contribute at least 5% of project cost. Priority is given to SC/ST, BPL, widows and differently-abled applicants.",
  benefits: [
    "Loan assistance up to ₹10 lakh through empanelled banks",
    "25% subsidy on project cost, capped at ₹2 lakh",
    "No collateral or asset security requirement",
    "Interest-free or low-interest terms as per government norms",
    "Support for manufacturing, services and trading micro-enterprises",
  ],
  documents: [
    "Aadhaar Card",
    "Ration Card",
    "Bank passbook (first page)",
    "Passport-size photographs",
    "Detailed Project Report",
    "Vendor quotations with GST",
    "Community / caste certificate, if applicable",
    "Educational certificates, if applicable",
    "BPL, widow or disability certificate for priority categories",
  ],
  process: [
    { title: "Project Planning", text: "Define the business activity, cost estimates and market plan." },
    { title: "Document Compilation", text: "Assemble identity, domicile, DPR and quotation files." },
    { title: "Bank Submission", text: "Submit the application through an empanelled nationalised or cooperative bank." },
    { title: "Verification & Interview", text: "Bank and scheme authorities verify eligibility and project viability." },
    { title: "Loan & Subsidy Release", text: "Approved cases receive loan disbursement with subsidy credit as per norms." },
  ],
});

export const semiconductorPage = createSubsidyProgramme({
  name: "Semiconductor Scheme",
  eyebrow: "India Semiconductor Mission • Deep Tech",
  kicker: "Fab, Packaging, Design & Accelerator Incentives",
  intro: "India’s Semiconductor Scheme ecosystem — anchored by the India Semiconductor Mission — supports chip manufacturing, display fabs, compound semiconductors, packaging, design-linked incentives and accelerator programmes such as Semiconductor Future 2025 (Bharat Byte) with Cadence, AIC IIT Delhi, FITT-IIT Delhi and AIM–NITI Aayog.",
  funding: "Up to 50%",
  eligibility: "Manufacturing companies, packaging units, design startups, early-stage deep-tech ventures, student teams, researchers and individual innovators applying under relevant ISM tracks or accelerator windows such as Semiconductor Future 2025.",
  benefits: [
    "Up to 50% capital subsidy for semiconductor and display fabs",
    "30–50% incentives for compound semiconductors and packaging",
    "Design Linked Incentive (DLI) support up to ₹30 crore per company",
    "Access to EDA tools, mentorship and incubation under accelerator tracks",
    "Milestone-linked disbursement for approved projects",
  ],
  documents: [
    "Detailed Project Report with capex and technical architecture",
    "Company incorporation and promoter KYC",
    "Technology roadmap and product or design plan",
    "Financial projections and funding plan",
    "IP, team profiles and prior work evidence for design / startup tracks",
    "Declarations and forms required by the official ISM or accelerator portal",
  ],
  process: [
    { title: "Check Programme Fit", text: "Identify the relevant ISM track or accelerator and confirm category eligibility." },
    { title: "Prepare DPR", text: "Build the project report, capex plan, architecture and milestones." },
    { title: "Submit Application", text: "Apply through official channels with complete documentation." },
    { title: "Evaluation & Review", text: "Expert committees complete technical and financial review." },
    { title: "Approval & Disbursement", text: "Receive sanction and milestone-linked incentive support." },
  ],
});

export const maharashtraGovtPage = createSubsidyProgramme({
  name: "Maharashtra Government Schemes",
  eyebrow: "State Funding • Grants, Equity & Loans",
  kicker: "Agri-Sure, Startup Agro, Venture Fund & Cluster Support",
  intro: "Maharashtra Government Schemes are state-backed grants, equity and loan instruments for Maharashtra-based startups and MSMEs — including Agri-Sure Fund, Startup Agro Fund, Venture Fund (MH) and Cluster Development Program pathways.",
  funding: "Up to ₹5 Cr+",
  routeLabel: "Grant / Equity",
  eligibility: "Maharashtra-based Private Limited Companies, LLPs and other eligible organisations — typically with MVP or early-stage readiness — applying to sector-aligned programmes such as AgriTech, clean energy, healthcare and industrial clusters. Specific funds may require DPIIT recognition, operating history or self-contribution.",
  benefits: [
    "Agri-Sure Fund support up to ₹1 crore for AgriTech startups",
    "Startup Agro Fund grants from ₹20 lakh to ₹1 crore for sustainable agriculture ventures",
    "Venture Fund (MH) equity investment up to ₹5 crore for priority-sector startups",
    "Cluster Development Program equity pathways from ₹25 lakh upward",
    "Mentorship, networking and market-readiness support across programmes",
  ],
  documents: [
    "Certificate of Incorporation (Pvt Ltd / LLP)",
    "Pitch deck covering business model, traction and problem–solution fit",
    "Audited financial statements, ITR and revenue projections",
    "Business plan",
    "DPIIT / Startup India recognition certificate, where required",
    "GST registration and Udyam / MSME certificate",
  ],
  process: [
    { title: "Prepare Documents", text: "Assemble incorporation, pitch, financials and compliance proofs." },
    { title: "Validate Eligibility", text: "Match your venture to the right Maharashtra fund or programme." },
    { title: "Submit Application", text: "Apply through the relevant state or partner portal." },
    { title: "Evaluation", text: "Programme teams assess innovation fit, readiness and scale potential." },
    { title: "Selection & Support", text: "Selected applicants receive grant, equity or advisory support as applicable." },
  ],
});

export const coldStorageSubsidyFaq = subsidySchemeFaq(
  "Cold Storage Subsidy Scheme",
  "Capital subsidy typically ranges from 35% to 50% of project cost depending on capacity and location, with interest subvention of about 3% on eligible term loans up to ₹2 crore.",
  "Entrepreneurs, farmers, FPOs, cooperatives and MSMEs with eligible cold-storage projects of 251–20,000 MT, land rights and bank financial closure.",
  "DPR, land documents, bank sanction letter, civil drawings, KYC, incorporation papers, GST/MSME proofs and statutory NOCs.",
);

export const pmKusumFaq = subsidySchemeFaq(
  "PM KUSUM Scheme",
  "Most regions offer up to 60% subsidy (30% Central + 30% State) for solar pumps, rising to about 80% in special regions as per prevailing guidelines.",
  "Farmers, FPOs, cooperatives, panchayats and water user associations — depending on Component A, B or C and state policy.",
  "Aadhaar, land ownership proof, bank details, DPR for larger plants and DISCOM consent where required.",
);

export const tweesFaq = subsidySchemeFaq(
  "TWEES Scheme",
  "Loans up to ₹10 lakh with 25% subsidy on project cost, capped at ₹2 lakh, generally without collateral.",
  "Women and transgender residents of Tamil Nadu aged 18–55 with a valid ration card and a manufacturing, service or trading project.",
  "Aadhaar, ration card, bank passbook, photographs, DPR, vendor quotations and category certificates if applicable.",
);

export const semiconductorFaq = subsidySchemeFaq(
  "Semiconductor Scheme",
  "Fab and display projects may receive up to 50% capital subsidy; packaging and compound semiconductor incentives often range 30–50%; Design Linked Incentive support can reach up to ₹30 crore per company.",
  "Manufacturers, packaging units, design startups, researchers and deep-tech innovators applying under relevant ISM or accelerator tracks.",
  "DPR, incorporation and KYC, technology roadmap, financial plan, team or IP evidence and portal-specific declarations.",
);

export const maharashtraGovtFaq = subsidySchemeFaq(
  "Maharashtra Government Schemes",
  "Support ranges by programme — for example Agri-Sure up to ₹1 crore, Startup Agro grants ₹20 lakh–₹1 crore, and Venture Fund (MH) equity up to ₹5 crore.",
  "Maharashtra-based startups and eligible entities meeting the specific fund’s stage, sector and registration requirements.",
  "Incorporation certificate, pitch deck, financials, business plan, DPIIT proof where required, and GST/MSME documents.",
);

const loanSchemeFaq = (
  name: string,
  funding: string,
  eligibility: string,
  documents: string,
) => ({
  heading: `${name} questions, answered`,
  sub: "Loan amount, eligibility, documents and the application process.",
  items: [
    {
      question: `What is ${name}?`,
      answer: `${name} provides debt financing for qualifying micro, small or growing businesses under lender and scheme guidelines.`,
    },
    {
      question: "What loan support is available?",
      answer: funding,
    },
    {
      question: "Who is eligible to apply?",
      answer: eligibility,
    },
    {
      question: "What documents are required?",
      answer: documents,
    },
  ],
});

const createLoanProgramme = (config: {
  name: string;
  eyebrow: string;
  kicker: string;
  intro: string;
  funding: string;
  routeLabel?: string;
  eligibility: string;
  benefits: readonly string[];
  documents: readonly string[];
  process: readonly { title: string; text: string }[];
}) => ({
  eyebrow: config.eyebrow,
  heading: config.name,
  kicker: config.kicker,
  intro: config.intro,
  cta: "Check Your Eligibility",
  imageAlt: `${config.name} applicants preparing a loan application`,
  stats: [
    { value: config.funding, label: "Loan Potential" },
    { value: config.routeLabel ?? "Loan", label: "Support Route" },
    { value: "MSME", label: "Business Focus" },
    { value: "India", label: "Application Access" },
  ],
  unlock: {
    eyebrow: "Scheme Overview",
    heading: `What is ${config.name}?`,
    paragraphs: [
      config.intro,
      "Vikas Bharat helps you check fit, prepare documents and structure a lender-ready loan file.",
    ],
    benefitsHeading: "Why applicants apply",
    benefits: config.benefits,
  },
  benefits: {
    eyebrow: "What You Unlock",
    heading: `Benefits of ${config.name}`,
    sub: "Affordable credit and structured support to start, expand or stabilise your business.",
    items: config.benefits.map((title, index) => ({
      title,
      text: [
        "Loan support aligned to scheme or lender guidelines and business readiness.",
        "Faster, clearer documentation for bank or NBFC underwriting.",
        "Guidance on collateral-free or government-backed pathways where available.",
        "Support through appraisal, sanction and disbursement follow-up.",
      ][index % 4],
      icon: (["wallet", "zap", "shield", "send"][index % 4]) as "wallet" | "zap" | "shield" | "send",
    })),
  },
  eligibility: {
    eyebrow: "Who Qualifies",
    heading: `${config.name} Eligibility`,
    sub: config.eligibility,
    leftHeading: "Applicant Profile",
    rightHeading: "Business & Compliance",
    items: [
      { title: "Eligible Borrower", text: "Individuals or businesses covered under the loan scheme or lender policy.", icon: "users" as const },
      { title: "Business Activity", text: "A viable manufacturing, service, trading or allied activity as permitted.", icon: "factory" as const },
      { title: "Credit Standing", text: "Clean repayment history with no active defaults, as required by lenders.", icon: "shield" as const },
      { title: "Financial Capacity", text: "Turnover, vintage or cash-flow profile matching the loan product.", icon: "wallet" as const },
      { title: "Registrations", text: "Udyam, GST and entity documents as applicable to the loan type.", icon: "landmark" as const },
      { title: "Documentation", text: "A complete KYC, DPR and financial file ready for lender review.", icon: "chip" as const },
    ],
  },
  process: {
    eyebrow: "How to Apply",
    heading: `${config.name} Application Process`,
    sub: "Prepare a complete file, submit to the right lender channel and progress through appraisal to disbursement.",
    steps: config.process,
  },
  documents: {
    eyebrow: "Paperwork",
    heading: "Documents Required",
    note: "Vikas Bharat can help organise a complete, lender-ready documentation file.",
    items: config.documents,
    cta: "Download For More",
  },
} as const);

export const mudraPage = createLoanProgramme({
  name: "Mudra Loans (PMMY)",
  eyebrow: "Pradhan Mantri Mudra Yojana",
  kicker: "Collateral-Free Micro Loans up to ₹20 Lakh",
  intro: "Mudra Loans under Pradhan Mantri Mudra Yojana (PMMY) provide collateral-free credit to micro and small businesses through banks, RRBs, small finance banks and NBFCs — across Shishu (up to ₹50,000), Kishore (₹50,001–₹5 lakh) and Tarun (₹5–₹20 lakh) categories.",
  funding: "Up to ₹20L",
  eligibility: "Indian citizens running or proposing non-farm micro enterprises as Proprietorship, Partnership, LLP or Private Limited, typically under about 7 years old with turnover generally not exceeding ₹25 lakh, and with no default history at any bank or financial institution.",
  benefits: [
    "Collateral-free loans up to ₹20 lakh",
    "Three staged categories: Shishu, Kishore and Tarun",
    "Competitive interest versus informal credit",
    "Generally no processing fee for Shishu category",
    "Mudra Card for flexible working-capital withdrawals",
    "Coverage across manufacturing, services, trading, transport and agri-allied activities",
  ],
  documents: [
    "Identity proof — Aadhaar, PAN or Voter ID",
    "Address proof — bank statement, electricity bill or Aadhaar",
    "Detailed Project Report / business profile",
    "Udyam registration and entity documents (Partnership Deed / Incorporation)",
    "Latest ITR, balance sheet and P&L for Kishore and Tarun",
    "Caste certificate if applying under special category pathways",
    "Quotations for machinery or assets to be financed",
  ],
  process: [
    { title: "Prepare Documents", text: "Compile KYC, business plan, registration and financials for your Mudra category." },
    { title: "Choose Lender Channel", text: "Apply via the Mudra portal or an authorised bank, MFI or NBFC branch." },
    { title: "Submit Application", text: "Complete the form and attach the supporting document file." },
    { title: "Loan Review", text: "The lender evaluates creditworthiness and business viability." },
    { title: "Disbursement", text: "On approval, funds are credited to your business account." },
  ],
});

export const msmeLoanPage = createLoanProgramme({
  name: "MSME Loan",
  eyebrow: "Bank & NBFC Credit for MSMEs",
  kicker: "Loans from ₹50,000 to ₹5 Crore with CGTMSE Pathways",
  intro: "MSME Loans help micro, small and medium enterprises fund expansion, equipment and working capital through banks and NBFCs — often at rates from about 7–12% p.a., with collateral-free options under CGTMSE and related government-backed programmes.",
  funding: "₹50K–₹5 Cr",
  eligibility: "Udyam-registered MSMEs and eligible new or expanding units in manufacturing, services or trading that meet lender turnover, vintage and credit norms. New businesses can also access pathways such as Mudra Shishu and PMEGP where eligible.",
  benefits: [
    "Loan amounts typically from ₹50,000 to ₹5 crore depending on product",
    "Collateral-free options under CGTMSE for eligible units",
    "Interest rates often in the 7–12% p.a. band by lender",
    "Working capital, term loan and equipment finance coverage",
    "Links to subsidy-backed routes such as PMEGP where applicable",
    "Faster digital and 59-minute loan products at select lenders",
  ],
  documents: [
    "Identity proof of directors / partners / proprietor",
    "Address proof — utility bills, rent agreement or bank statement",
    "Udyam registration, GST certificate and Startup India proof if applicable",
    "Last 6–12 months bank statements, ITR and audited financials",
    "Detailed Project Report or growth plan",
    "Founder / promoter profiles and CVs",
  ],
  process: [
    { title: "Eligibility Check", text: "Confirm Udyam status, loan purpose and lender fit." },
    { title: "Prepare File", text: "Assemble KYC, financials, DPR and registration proofs." },
    { title: "Lender Matching", text: "Shortlist bank or NBFC products aligned to amount and tenure." },
    { title: "Application & Appraisal", text: "Submit the file and complete credit evaluation." },
    { title: "Sanction & Disbursement", text: "Accept terms and receive funds as per sanctioned structure." },
  ],
});

export const standupPage = createLoanProgramme({
  name: "Stand-Up India",
  eyebrow: "Women & SC/ST Entrepreneurship",
  kicker: "Bank Loans from ₹10 Lakh to ₹1 Crore",
  intro: "Stand-Up India facilitates bank loans for women entrepreneurs and SC/ST borrowers to set up greenfield enterprises or expand existing businesses through scheduled commercial banks, with structured appraisal and documentation support.",
  funding: "₹10L–₹1 Cr",
  eligibility: "Women entrepreneurs and SC/ST borrowers with a viable greenfield or expansion plan, applying through participating scheduled commercial banks and meeting KYC, category and bank appraisal requirements.",
  benefits: [
    "Bank loans typically from ₹10 lakh to ₹1 crore",
    "Focus on women and SC/ST entrepreneurs",
    "Supports both new enterprises and expansion cases",
    "Government-backed facilitation through commercial banks",
    "Clear documentation pathway for faster bank processing",
  ],
  documents: [
    "Identity proof (Aadhaar / PAN) of applicant(s)",
    "Address proof",
    "Business plan / project report for greenfield or expansion",
    "Caste / category proof for eligible SC/ST applicants",
    "Bank account details and KYC documents",
    "Business registration documents, if applicable",
    "Financial statements for existing businesses, if applicable",
  ],
  process: [
    { title: "Prepare Business Plan", text: "Define the enterprise objective, cost and funding need." },
    { title: "Choose Eligible Bank", text: "Apply through a scheduled commercial bank participating in Stand-Up India." },
    { title: "Submit Application", text: "Provide identity, KYC, category proof and project documents." },
    { title: "Bank Appraisal", text: "The bank evaluates viability, compliance and repayment capacity." },
    { title: "Sanction & Disbursement", text: "On approval, funds are released as per sanctioned terms." },
  ],
});

export const mudraFaq = loanSchemeFaq(
  "Mudra Loans (PMMY)",
  "Collateral-free loans up to ₹20 lakh across Shishu (up to ₹50,000), Kishore (₹50,001–₹5 lakh) and Tarun (₹5–₹20 lakh).",
  "Indian micro and small non-farm businesses — typically Proprietorship, Partnership, LLP or Pvt Ltd — with clean credit history and activity in manufacturing, services, trading or allied sectors.",
  "KYC, address proof, DPR/business profile, Udyam or entity documents, financials for higher categories, and asset quotations where needed.",
);

export const msmeLoanFaq = loanSchemeFaq(
  "MSME Loan",
  "Typical ticket sizes range from ₹50,000 to ₹5 crore depending on the bank/NBFC product, with many collateral-free options under CGTMSE.",
  "Udyam-registered MSMEs and eligible new or expanding units that meet lender credit, vintage and financial norms.",
  "KYC, address proof, Udyam/GST documents, bank statements, ITR/financials, DPR and promoter profiles.",
);

export const standupFaq = loanSchemeFaq(
  "Stand-Up India",
  "Eligible borrowers can typically access bank loans from ₹10 lakh to ₹1 crore for greenfield or expansion projects.",
  "Women entrepreneurs and SC/ST borrowers with a viable business plan applying through participating scheduled commercial banks.",
  "Identity and address proof, business plan, category certificate where applicable, KYC, and registration or financial documents if already operating.",
);


const grantSchemeFaq = (
  name: string,
  funding: string,
  eligibility: string,
  documents: string,
) => ({
  heading: `${name} questions, answered`,
  sub: "Grant support, eligibility, documents and the application process.",
  items: [
    {
      question: `What is ${name}?`,
      answer: `${name} provides non-dilutive or grant-linked support to qualifying innovators, startups or organisations under its programme guidelines.`,
    },
    {
      question: "What funding support is available?",
      answer: funding,
    },
    {
      question: "Who is eligible to apply?",
      answer: eligibility,
    },
    {
      question: "What documents are required?",
      answer: documents,
    },
  ],
});

const createGrantProgramme = (config: {
  name: string;
  eyebrow: string;
  kicker: string;
  intro: string;
  funding: string;
  routeLabel?: string;
  eligibility: string;
  benefits: readonly string[];
  documents: readonly string[];
  process: readonly { title: string; text: string }[];
}) => ({
  eyebrow: config.eyebrow,
  heading: config.name,
  kicker: config.kicker,
  intro: config.intro,
  cta: "Check Your Eligibility",
  imageAlt: `${config.name} applicants preparing a grant application`,
  stats: [
    { value: config.funding, label: "Grant Potential" },
    { value: config.routeLabel ?? "Grant", label: "Support Route" },
    { value: "Startup", label: "Applicant Focus" },
    { value: "India", label: "Application Access" },
  ],
  unlock: {
    eyebrow: "Scheme Overview",
    heading: `What is ${config.name}?`,
    paragraphs: [
      config.intro,
      "Vikas Bharat helps you check fit, prepare documents and structure a complete grant-ready application file.",
    ],
    benefitsHeading: "Why applicants apply",
    benefits: config.benefits,
  },
  benefits: {
    eyebrow: "What You Unlock",
    heading: `Benefits of ${config.name}`,
    sub: "Grant support and guidance to help innovators build, validate and scale.",
    items: config.benefits.map((title, index) => ({
      title,
      text: [
        "Grant or incentive support aligned to scheme guidelines and project evaluation.",
        "Mentorship and ecosystem guidance to sharpen the execution plan.",
        "Structured documentation support for portals and implementing agencies.",
        "Pathways to pilots, market access and follow-on opportunities.",
      ][index % 4],
      icon: (["wallet", "users", "send", "shield"][index % 4]) as "wallet" | "users" | "send" | "shield",
    })),
  },
  eligibility: {
    eyebrow: "Who Qualifies",
    heading: `${config.name} Eligibility`,
    sub: config.eligibility,
    leftHeading: "Applicant Profile",
    rightHeading: "Project & Compliance",
    items: [
      { title: "Eligible Applicant", text: "Individuals, startups or organisations covered under the scheme guidelines.", icon: "users" as const },
      { title: "Project Fit", text: "A project aligned to the scheme sector, stage and impact requirements.", icon: "factory" as const },
      { title: "Innovation Focus", text: "A technology-led, scalable or high-impact solution where required.", icon: "chip" as const },
      { title: "Stage Readiness", text: "Idea, prototype, MVP or early traction as specified by the programme.", icon: "rocket" as const },
      { title: "Compliance", text: "Registrations, KYC and statutory documents as applicable.", icon: "shield" as const },
      { title: "Documentation", text: "A complete proposal and supporting file ready for agency review.", icon: "clipboard" as const },
    ],
  },
  process: {
    eyebrow: "How to Apply",
    heading: `${config.name} Application Process`,
    sub: "Prepare a complete file, submit through the official channel and progress through review to grant support.",
    steps: config.process,
  },
  documents: {
    eyebrow: "Paperwork",
    heading: "Documents Required",
    note: "Vikas Bharat can help organise a complete, grant-ready documentation file.",
    items: config.documents,
    cta: "Download For More",
  },
} as const);

export const actGrantPage = createGrantProgramme({
  name: "ACT Grants",
  eyebrow: "Social Innovation Grant",
  kicker: "Non-Repayable Grants for Social Entrepreneurs",
  intro: "The ACT Grant programme supports social entrepreneurs who are building technology-led solutions to real social problems — in areas like education, health, climate action, and women's entrepreneurship. Unlike a business loan, this is a grant — the money does not have to be repaid and you do not give up any ownership of your organisation in exchange.",
  funding: "₹5L–₹50L",
  eligibility: "Gender Eligibility: Open to women entrepreneurs and gender-diverse leadership teams.; Target Sectors: Education, Health, Environment, or Women Entrepreneurship.; Stage of Startup: Primarily early-stage with a viable MVP (Minimum Viable Product).; Technology Focus: Technology-driven solution with potential for large-scale impact.; Geography: Targeted towards Indian startups solving Indian social challenges.",
  benefits: ["Non-Repayable Financial Assistance", "Seed Funding", "Elite Mentorship", "Networking", "Demo Day Exposure", "MSME Support"],
  documents: ["Business Profile — Company website link, product/service details and pitch deck.", "Founder & Team Details — CVs highlighting experience and roles.", "Financial Proof — Last 6 months of bank statements and ITR (if applicable).", "Registration Proof — MSME Certification and DPIIT Recognition.", "Innovation Narrative — Proof of Concept (PoC) or working prototype demo.", "Compliance Docs — Proof of business registration (Pvt Ltd/LLP)."],
  process: [
    { title: "Drafting the Plan", text: "2" },
    { title: "Document Compilation", text: "3" },
    { title: "Portal Submission", text: "4" },
    { title: "Selection & Mentorship", text: "5" },
    { title: "Technical Evaluation", text: "1" },
    { title: "Drafting the Plan", text: "2" },
  ],
});
export const actGrantFaq = grantSchemeFaq(
  "ACT Grants",
  "Selected applicants may receive support of about ₹5L–₹50L, subject to evaluation and scheme guidelines.",
  "Gender Eligibility: Open to women entrepreneurs and gender-diverse leadership teams.; Target Sectors: Education, Health, Environment, or Women Entrepreneurship.; Stage of Startup: Primarily early-stage with a viable MVP (Minimum Viable Product).; Technology Focus: Technology-driv",
  "Business Profile — Company website link, product/service details and pitch deck., Founder & Team Details — CVs highlighting experience and roles., Financial Proof — Last 6 months of bank statements and ITR (if applicable)., Registration Proof — MSME Certification and DPIIT Recognition..",
);

export const mahilaEmpowermentPage = createGrantProgramme({
  name: "Mahila Empowerment Scheme",
  eyebrow: "Women Entrepreneurship",
  kicker: "Grants for Women-Led Startups",
  intro: "Grant funding up to INR 15 Lakhs to help with operational costs, product development, marketing and scaling activities. Work out of fully-equipped incubation centres and co-working spaces, with access to shared resources and a community of other founders.",
  funding: "Up to ₹15L",
  eligibility: "The Mahila Empowerment Scheme is open to women entrepreneurs across India. Here is who qualifies:; Women Entrepreneurs: The scheme gives priority to women-led startups across India.; Business Types: Private Limited Companies (PVT LTD), Limited Liability Partnerships (LLP), Partnership Firms and individuals running entrepreneurial ventures are all eligible.; Clear Business Model: Applicants should have a clear busines",
  benefits: ["Grant or incentive support under scheme guidelines", "Mentorship and ecosystem guidance", "Structured application and documentation support", "Market access and incubation pathways"],
  documents: ["Incorporation / registration proof", "KYC of founders or promoters", "Pitch deck or detailed project proposal", "Financial statements where applicable", "DPIIT / Udyam certificate if required"],
  process: [
    { title: "Register Online", text: "Create an account on the Startup Yogdan portal and complete your basic profile." },
    { title: "Submit Business Plan", text: "Upload a detailed business plan including your vision, mission, market analysis and financial projections." },
    { title: "Provide Documentation", text: "Submit necessary documents including business registration, PAN, Aadhar and other relevant certificates." },
    { title: "Preliminary Screening", text: "Your application will undergo an initial screening to ensure eligibility criteria are met." },
    { title: "Final Selection & Grant Disbursement", text: "Shortlisted candidates will be invited for a pitch presentation, followed by final selection and grant disbursement." },
    { title: "Register Online", text: "Create an account on the Startup Yogdan portal and complete your basic profile." },
  ],
});
export const mahilaEmpowermentFaq = grantSchemeFaq(
  "Mahila Empowerment Scheme",
  "Selected applicants may receive support of about Up to ₹15L, subject to evaluation and scheme guidelines.",
  "The Mahila Empowerment Scheme is open to women entrepreneurs across India. Here is who qualifies:; Women Entrepreneurs: The scheme gives priority to women-led startups across India.; Business Types: Private Limited Companies (PVT LTD), Limited Liability Partnerships (LLP), Partne",
  "Incorporation / registration proof, KYC of founders or promoters, Pitch deck or detailed project proposal, Financial statements where applicable.",
);

export const sparkGrantPage = createGrantProgramme({
  name: "Spark Grant",
  eyebrow: "Women Founders",
  kicker: "Innovation Grants for Women Entrepreneurs",
  intro: "If you are a woman entrepreneur or a startup with an innovative idea, the Spark Grant is a government-backed, equity-free funding scheme that provides up to ₹88 Lakhs to help you build and grow your business in high-growth sectors like AI, SaaS, HealthTech and more. With the Spark Grant, you keep full ownership of your business while getting the financial support you need to grow further.",
  funding: "Up to ₹88L",
  eligibility: "The Spark Grant is open to a wide range of entrepreneurs, provided they meet the following requirements:; Registered Business: Must be a registered for-profit entity, such as a Proprietorship, LLP, Pvt Ltd, Partnership, etc.; At Least One Woman Founder: The business must have at least one woman founder or co-founder. Individual women entrepreneurs planning to start a venture can also apply.; Innovative and Scalable I",
  benefits: ["Non-Dilutive Funding", "Eligibility for All for-Profit Entities", "Sector Agnostic", "Equity-Free Funding", "Women Empowerment", "Diverse Sectors"],
  documents: ["Keep the following ready before you apply (as typically requested for incubator-led grants):", "-   Certificate of incorporation / partnership deed and business registration proof", "-   Proof of women founder/co-founder identity and shareholding — -   Pitch deck, business plan and financial projections", "-   Bank account details and KYC for the applying entity — -   Sector-specific technical or product roadmap (where applicable)"],
  process: [
    { title: "Ensure Eligibility", text: "Confirm sector fit, women-founder requirement and registration status." },
    { title: "Prepare Your Application", text: "Compile business plan, traction metrics and funding ask." },
    { title: "Provide References or Testimonials", text: "Add credible references that support your application." },
    { title: "Submit Your Application", text: "Submit through the designated incubator or portal as announced." },
    { title: "Grant Selection Process", text: "Evaluation, interviews and milestone-based disbursement as per program rules." },
    { title: "Ensure Eligibility", text: "Confirm sector fit, women-founder requirement and registration status." },
  ],
});
export const sparkGrantFaq = grantSchemeFaq(
  "Spark Grant",
  "Selected applicants may receive support of about Up to ₹88L, subject to evaluation and scheme guidelines.",
  "The Spark Grant is open to a wide range of entrepreneurs, provided they meet the following requirements:; Registered Business: Must be a registered for-profit entity, such as a Proprietorship, LLP, Pvt Ltd, Partnership, etc.; At Least One Woman Founder: The business must have at ",
  "Keep the following ready before you apply (as typically requested for incubator-led grants):, -   Certificate of incorporation / partnership deed and business registration proof, -   Proof of women founder/co-founder identity and shareholding — -   Pitch deck, business plan and financial projections, -   Bank account details and KYC for the applying entity — -   Sector-specific technical or product roadmap (where applicable).",
);

export const tide2Page = createGrantProgramme({
  name: "TIDE 2.0 Scheme",
  eyebrow: "MeitY • Tech Incubation",
  kicker: "Technology Incubation for Tech Startups",
  intro: "TIDE 2.0 (Technology Incubation and Development of Entrepreneurs) is a flagship program under MeitY. The scheme aims to promote technology-driven innovation and entrepreneurship in India by providing a structured framework for growth. Through this program, startups in technology-related sectors get access to funding, mentorship, incubation, and networking support to scale their tech solutions.",
  funding: "Up to ₹7L",
  eligibility: "Startup Stage: Revenue stage or market-ready prototype/MVP with traction.; Entity Type: Private Limited Company, LLP, Partnership, or Sole Proprietorship.; Registration: Indian-incorporated entity with Startup India recognition.; Founder’s Commitment: Founders/co-founders must work full-time on the business.; Tech Focus: Deep-tech or emerging sectors.",
  benefits: ["Financial Grant Support", "Expert Mentoring", "Lab and Workspace Access", "Market Access"],
  documents: ["-   Company Profile", "-   Founders’ Information — -   DPIIT / Startup India Recognition Certificate", "-   Business Plan", "-   TRL Evidence", "-   Financial Documents", "-   IP Documents"],
  process: [
    { title: "Portal Entry", text: "2" },
    { title: "Fill Application", text: "3" },
    { title: "Document Upload", text: "4" },
    { title: "Funding & Onboarding", text: "5" },
    { title: "Pitch Session", text: "1" },
    { title: "Portal Entry", text: "2" },
  ],
});
export const tide2Faq = grantSchemeFaq(
  "TIDE 2.0 Scheme",
  "Selected applicants may receive support of about Up to ₹7L, subject to evaluation and scheme guidelines.",
  "Startup Stage: Revenue stage or market-ready prototype/MVP with traction.; Entity Type: Private Limited Company, LLP, Partnership, or Sole Proprietorship.; Registration: Indian-incorporated entity with Startup India recognition.; Founder’s Commitment: Founders/co-founders must wo",
  "-   Company Profile, -   Founders’ Information — -   DPIIT / Startup India Recognition Certificate, -   Business Plan, -   TRL Evidence.",
);

export const rkvyRaftaarPage = createGrantProgramme({
  name: "RKVY RAFTAAR",
  eyebrow: "Agri Innovation",
  kicker: "Agri-Startup Incubation & Grants",
  intro: "The RKVY RAFTAAR scheme is a flagship initiative to foster agri-entrepreneurship and commercialization of agricultural innovations. For founders exploring startup funding in India, it provides grants, mentorship, and networking at different growth stages.",
  funding: "Up to ₹25L",
  eligibility: "Applicants must meet the specific RKVY RAFTAAR eligibility requirements, with priority for startups beyond concept stage.; Startup Type: Must be a DPIIT-recognized Indian startup under Startup India.; Prototype Requirement: Minimum Viable Product (MVP) or working prototype is required.; Focus Areas: Startup should work in agriculture or allied sectors.; Business Stage: Idea-stage innovators or seed-stage startups wit",
  benefits: ["Grant Support", "Milestone-linked Funding", "Mentorship & Training", "Networking Opportunities", "Waste to Wealth", "Market Access & Visibility"],
  documents: ["Preparing your file correctly is essential. Here are the mandatory documents for submission:", "Company Registration — Certificate of Incorporation (Pvt Ltd or LLP).", "DPIIT Recognition — Startup India recognition status.", "MSME Certificate — MSME certificate for additional government support.", "Pitch Deck — Technology, TRL level, and market potential details.", "TRL Proof — Prototype photos, demo videos, or test reports.", "Founders' CVs — Relevant founder and core team credentials.", "Financials — Bank statements and tax filings, where applicable."],
  process: [
    { title: "Prepare Documents", text: "2" },
    { title: "Submit Application", text: "3" },
    { title: "Evaluation Process", text: "4" },
    { title: "Funding & Support", text: "5" },
    { title: "Interview & Selection", text: "1" },
    { title: "Prepare Documents", text: "2" },
  ],
});
export const rkvyRaftaarFaq = grantSchemeFaq(
  "RKVY RAFTAAR",
  "Selected applicants may receive support of about Up to ₹25L, subject to evaluation and scheme guidelines.",
  "Applicants must meet the specific RKVY RAFTAAR eligibility requirements, with priority for startups beyond concept stage.; Startup Type: Must be a DPIIT-recognized Indian startup under Startup India.; Prototype Requirement: Minimum Viable Product (MVP) or working prototype is req",
  "Preparing your file correctly is essential. Here are the mandatory documents for submission:, Company Registration — Certificate of Incorporation (Pvt Ltd or LLP)., DPIIT Recognition — Startup India recognition status., MSME Certificate — MSME certificate for additional government support..",
);

export const nidhiPrayasPage = createGrantProgramme({
  name: "NIDHI PRAYAS Grant",
  eyebrow: "DST • Prototype Support",
  kicker: "Convert Ideas into Prototypes",
  intro: "The NIDHI PRAYAS (National Initiative for Developing and Harnessing Innovations - PRomoting and Accelerating Young and Aspiring technology entrepreneurs) scheme is an initiative under the Department of Science & Technology (DST). It is a key pillar of startup funding in India, aimed at supporting innovators who are still in the early stages of development.",
  funding: "Up to ₹10L",
  eligibility: "Applicants must meet defined innovation, age, and compliance criteria before applying through an authorized PRAYAS center.; Applicant Type: Individuals, Proprietorships, Partnerships, LLPs, or Private Limited companies.; Business Stage: Early stage with a validated PoC or MVP.; Company Age: Up to 7 years old (10 years for biotech).; Annual Turnover: Should not exceed ₹25 Lakhs in any prior financial year.",
  benefits: ["Seed Capital", "Technical Mentorship", "Incubation Support", "Networking", "Commercialization"],
  documents: ["Prepare a complete, compliant file before submission to improve review speed and approval likelihood.", "Pitch Deck — A detailed deck explaining the problem, solution, and roadmap. (Refer to grant for ventures for structure).", "DPIIT Recognition Certificate — Copy of the Startup India recognition certificate.", "MSME Certificate — MSME Certification for additional credibility.", "Technology Description and PoC evidence — Proof of concept (PoC) and technical whitepaper.", "Financial Statements — Audited statements or self-certified balance sheets for the past year.", "Founder Profiles/CVs — Detailed CVs highlighting technical expertise.", "IP/Patent details (if any) — Details of patents or IP filings (if any)."],
  process: [
    { title: "Prepare the Documents", text: "2" },
    { title: "Submit Your Application", text: "3" },
    { title: "Application Review", text: "4" },
    { title: "Interview & Selection", text: "5" },
    { title: "Funding & Support", text: "1" },
    { title: "Prepare the Documents", text: "2" },
  ],
});
export const nidhiPrayasFaq = grantSchemeFaq(
  "NIDHI PRAYAS Grant",
  "Selected applicants may receive support of about Up to ₹10L, subject to evaluation and scheme guidelines.",
  "Applicants must meet defined innovation, age, and compliance criteria before applying through an authorized PRAYAS center.; Applicant Type: Individuals, Proprietorships, Partnerships, LLPs, or Private Limited companies.; Business Stage: Early stage with a validated PoC or MVP.; C",
  "Prepare a complete, compliant file before submission to improve review speed and approval likelihood., Pitch Deck — A detailed deck explaining the problem, solution, and roadmap. (Refer to grant for ventures for structure)., DPIIT Recognition Certificate — Copy of the Startup India recognition certificate., MSME Certificate — MSME Certification for additional credibility..",
);

export const meityGenesisEirPage = createGrantProgramme({
  name: "MeitY GENESIS EIR",
  eyebrow: "Deep-Tech EIR",
  kicker: "Entrepreneur-in-Residence Support",
  intro: "The Genesis EiR (Entrepreneur-in-Residence) program is a MeitY initiative that supports early-stage innovators in Deeptech, ICT, or ESDM to move from idea to market-ready prototype with structured funding and mentorship. With the launch of Genesis EiR 2.0, the Ministry of Electronics and Information Technology (MeitY) has increased its support for the Indian startup ecosystem.",
  funding: "Up to ₹10L",
  eligibility: "To qualify for the GENESIS EiR 2.0 program, applicants must meet the following criteria:; Who Can Apply?: - Indian Citizenship: Applicants must be Indian nationals and at least 18 years old.; - Students or DPIIT-Registered Founders: Full-time students (UG/PG) or founders/co-founders of DPIIT-registered startups, generally less than 2 years old.; - Innovation Stage: Startups should be at ideation, validation, or proto",
  benefits: ["Grant or incentive support under scheme guidelines", "Mentorship and ecosystem guidance", "Structured application and documentation support", "Market access and incubation pathways"],
  documents: ["-   DPIIT Registration Certificate (if applicable) — -   Educational Certificates for students", "-   Business Plan or Pitch Deck detailing your vision, technology, market potential, and projections", "-   Proof of Indian Citizenship (Aadhaar or Passport) — -   Prototype or Ideation Details outlining your current stage and roadmap"],
  process: [
    { title: "Check fit", text: "Review deeptech / ICT / ESDM fit for your startup idea." },
    { title: "Prepare deck", text: "Prepare your innovation concept, market validation and MVP plan." },
    { title: "Compile documents", text: "Gather all required documents and proof points." },
    { title: "Submit application", text: "Apply under the Genesis EiR 2.0 call with complete details." },
    { title: "Evaluation & onboarding", text: "Move through screening, mentorship onboarding and grant release." },
    { title: "Check fit", text: "Review deeptech / ICT / ESDM fit for your startup idea." },
  ],
});
export const meityGenesisEirFaq = grantSchemeFaq(
  "MeitY GENESIS EIR",
  "Selected applicants may receive support of about Up to ₹10L, subject to evaluation and scheme guidelines.",
  "To qualify for the GENESIS EiR 2.0 program, applicants must meet the following criteria:; Who Can Apply?: - Indian Citizenship: Applicants must be Indian nationals and at least 18 years old.; - Students or DPIIT-Registered Founders: Full-time students (UG/PG) or founders/co-found",
  "-   DPIIT Registration Certificate (if applicable) — -   Educational Certificates for students, -   Business Plan or Pitch Deck detailing your vision, technology, market potential, and projections, -   Proof of Indian Citizenship (Aadhaar or Passport) — -   Prototype or Ideation Details outlining your current stage and roadmap.",
);

export const agriBusinessGrantsPage = createGrantProgramme({
  name: "Agri Business Grants",
  eyebrow: "Maharashtra Agri Value Chain",
  kicker: "Agri Processing & Rural Enterprise Grants",
  intro: "India's central and state governments fund agri-businesses through more than 15 active grant and subsidy schemes — covering agri-tech, food processing, cold chain infrastructure, and farming inputs. Most of these schemes give money you do not have to repay, offer loans at subsidised interest rates, or reimburse part of your input costs directly. This page covers the major agri business grants available in 2026 — who can apply, how much funding is on offer, where to apply, and what documents you ",
  funding: "Up to ₹40L",
  eligibility: "Eligibility varies by track. Broadly, the following entities are eligible:; Track 1 – Innovators & Early-Stage Startups: Individual innovators, early-stage startups, researchers working on AI-based solutions for agriculture at concept, prototype, PoC, or MVP stage with a clear problem statement and expected impact.; Track 2 – Registered Startups & FPOs: Registered startups, FPOs, NGOs, and research teams with a worki",
  benefits: ["Grant or incentive support under scheme guidelines", "Mentorship and ecosystem guidance", "Structured application and documentation support", "Market access and incubation pathways"],
  documents: ["Below is a general document checklist applicable to most agri business grant applications:", "-   Registration certificate, PAN, GST (if applicable), Udyam/MSME registration — -   Aadhaar and PAN of founders/directors, photograph, basic CV/profile", "-   Detailed Project Report (DPR), business plan or project proposal, master pitch deck", "-   Problem-solution summary, revenue model and pricing strategy — -   Description of product/service, PoC/MVP details, screenshots, demos, pilot data (if any)", "-   Estimated project cost, 3–5 year projections, fund requirement and utilization plan", "-   Bank statements and basic financials (if applicable) — -   For Track 2: Working prototype or tested solution documentation"],
  process: [
    { title: "Identify Relevant Scheme", text: "Map your project to central/state agri grant categories and track conditions. We help you shortlist the most suitable schemes based on your business profile." },
    { title: "Stage 1 \u2013 Application Documentation", text: "We coordinate with your team to collect all required documents, prepare the master pitch deck, scheme-specific PPT, company/startup profile, and detailed project proposal (DPR-styl" },
    { title: "Stage 2 \u2013 Incubator Requirements (If Applicable)", text: "If the application goes through an incubator or accelerator, we help fill detailed application forms, tailor your pitch deck to highlight innovation and scalability, and prepare th" },
    { title: "Stage 3 \u2013 Screening & Virtual Meetings", text: "We prepare you for mock Q&A, script practice, and presentation flow. We provide tips on what incubators look for in agri business grants and AI-based models, and refine the deck ba" },
    { title: "Sanction and Utilization", text: "Receive sanction, execute milestones and maintain compliant utilization reports." },
    { title: "Identify Relevant Scheme", text: "Map your project to central/state agri grant categories and track conditions. We help you shortlist the most suitable schemes based on your business profile." },
  ],
});
export const agriBusinessGrantsFaq = grantSchemeFaq(
  "Agri Business Grants",
  "Selected applicants may receive support of about Up to ₹40L, subject to evaluation and scheme guidelines.",
  "Eligibility varies by track. Broadly, the following entities are eligible:; Track 1 – Innovators & Early-Stage Startups: Individual innovators, early-stage startups, researchers working on AI-based solutions for agriculture at concept, prototype, PoC, or MVP stage with a clear pr",
  "Below is a general document checklist applicable to most agri business grant applications:, -   Registration certificate, PAN, GST (if applicable), Udyam/MSME registration — -   Aadhaar and PAN of founders/directors, photograph, basic CV/profile, -   Detailed Project Report (DPR), business plan or project proposal, master pitch deck, -   Problem-solution summary, revenue model and pricing strategy — -   Description of product/service, PoC/MVP details, screenshots, demos, pilot data (if any).",
);

export const socialImpactPage = createGrantProgramme({
  name: "Social Impact Innovation Scheme",
  eyebrow: "Community Innovation",
  kicker: "Grants for Social Welfare Solutions",
  intro: "The Social Impact Innovation Scheme is a transformative program aimed at bridging the gap between social innovation and real-world implementation. It addresses pressing challenges in sectors such as green energy, waste management, healthcare, and education. By offering structured grants and ecosystem support, the foundation ensures that young innovators are empowered to create measurable societal impact. The Social Impact Innovation Scheme details highlight that this is more than just a governme",
  funding: "Up to ₹5L",
  eligibility: "The Social Impact Innovation Scheme eligibility is tailored to identify high-potential innovators at the very beginning of their journey. Meeting these requirements is essential before initiating the business registration process or submitting a proposal. Social Impact Innovation Scheme Eligibility Table; Applicant Age: Must be an Indian citizen between 18 and 35 years of age.; Entity Type: Open to Individual Innovat",
  benefits: ["Direct Financial Assistance:", "Elite Mentorship:", "Incubation Support:", "Networking & Visibility:", "Market Readiness:"],
  documents: ["Proof of Identity: — Valid PAN Card of the primary applicant.", "Address Proof: — Aadhaar Card or Voter ID.", "Project Proposal: — A detailed document outlining the venture's problem statement, impact metrics, and scaling roadmap. (See our guide on how government grants ", "Incorporation Docs: — If registered, provide the Certificate of Incorporation and PAN of the startup.", "Innovation Proof: — Photos, videos, or early concept designs of the prototype/MVP.", "MSME Certification: — Valid MSME certification (Udyam) for startups."],
  process: [
    { title: "Verify Status", text: "2" },
    { title: "Technical Drafting", text: "3" },
    { title: "Online Submission", text: "4" },
    { title: "Screening", text: "5" },
    { title: "Interaction", text: "6" },
    { title: "Grant Allocation", text: "1" },
  ],
});
export const socialImpactFaq = grantSchemeFaq(
  "Social Impact Innovation Scheme",
  "Selected applicants may receive support of about Up to ₹5L, subject to evaluation and scheme guidelines.",
  "The Social Impact Innovation Scheme eligibility is tailored to identify high-potential innovators at the very beginning of their journey. Meeting these requirements is essential before initiating the business registration process or submitting a proposal. Social Impact Innovation",
  "Proof of Identity: — Valid PAN Card of the primary applicant., Address Proof: — Aadhaar Card or Voter ID., Project Proposal: — A detailed document outlining the venture's problem statement, impact metrics, and scaling roadmap. (See our guide on how government grants , Incorporation Docs: — If registered, provide the Certificate of Incorporation and PAN of the startup..",
);

export const mobilityInnovationPage = createGrantProgramme({
  name: "Mobility Innovation Program",
  eyebrow: "EV • Smart Mobility",
  kicker: "Funding for Next-Gen Mobility Startups",
  intro: "The Mobility Innovation Program Scheme (MIP) is a 2-year incubation initiative designed to accelerate road safety innovation by empowering startups and innovators. It is a collaboration between AIC IIT Delhi and Honda India, aimed at building breakthrough solutions for the mobility sector with a special focus on AI, IoT, and sensor-driven technologies.",
  funding: "Up to ₹10L",
  eligibility: "Early-Stage Startups: Entrepreneurs working on innovative mobility solutions in road safety, EV technology, and smart transportation.; Student Teams & Developers: Individuals or teams developing tech solutions in road safety, mobility, or traffic management.; Researchers & Innovators: Those with research-based solutions for mobility, rider safety, or traffic management.",
  benefits: ["Funding", "Incubation", "Mentorship", "Technical Support", "Networking Opportunities", "Workshops & Bootcamps"],
  documents: ["Incorporation / registration proof", "KYC of founders or promoters", "Pitch deck or detailed project proposal", "Financial statements where applicable", "DPIIT / Udyam certificate if required"],
  process: [
    { title: "Prepare Your Documents", text: "Gather your business plan, pitch deck, technical specifications, and proof of concept or prototype." },
    { title: "Submit Your Application", text: "Complete the application through the official MIP portal with all required documents." },
    { title: "Review of Applications", text: "The review committee evaluates your application for alignment and innovation potential." },
    { title: "Interview & Selection", text: "Shortlisted startups present their ideas in interviews and final selections are made." },
    { title: "Program Onboarding", text: "Selected applicants receive timelines, resources, and next-step onboarding details." },
    { title: "Prepare Your Documents", text: "Gather your business plan, pitch deck, technical specifications, and proof of concept or prototype." },
  ],
});
export const mobilityInnovationFaq = grantSchemeFaq(
  "Mobility Innovation Program",
  "Selected applicants may receive support of about Up to ₹10L, subject to evaluation and scheme guidelines.",
  "Early-Stage Startups: Entrepreneurs working on innovative mobility solutions in road safety, EV technology, and smart transportation.; Student Teams & Developers: Individuals or teams developing tech solutions in road safety, mobility, or traffic management.; Researchers & Innova",
  "Incorporation / registration proof, KYC of founders or promoters, Pitch deck or detailed project proposal, Financial statements where applicable.",
);

export const greatSchemePage = createGrantProgramme({
  name: "GREAT Scheme",
  eyebrow: "Research & Entrepreneurship",
  kicker: "Support for Research-Driven Tech Projects",
  intro: "The GREAT Scheme 2025 (Government Research and Enterprise Accelerator for Technical Textiles) is designed to support individuals and startups that are working on the development of innovative technical textiles The scheme is an excellent opportunity for those in the technical textiles space to gain financial support, mentorship, and networking opportunities to scale their innovations.",
  funding: "Up to ₹50L",
  eligibility: "The GREAT Scheme 2025 is open to a diverse range of individuals and startups involved in technical textiles innovation. Here's who can apply:; Individual Applicants: Indian citizen, at least 21 years old. The primary applicant must be the Project Leader.; Startups: Registered as a company with a minimum 51% Indian ownership. The startup must be represented by a qualified Project Leader.; Incubation Requirement: Appli",
  benefits: ["Initial Funding up to ₹50 Lakhs", "Follow-on Funding up to ₹1 Crore", "3-4 Months Structured Guidance", "400+ Investor Network", "Incubation Support", "Long-term Post-program Support"],
  documents: ["Company Registration — Proof of registration (Private Limited or LLP)", "Project Proposal — Detailed proposal outlining objectives, milestones, and Project Leader role", "Proof of Incubation — Certificate from approved incubator facility", "Proof of Product Readiness — Customer feedback, sales reports, or product/service validation", "Financial Statements — Financial statements for the last fiscal year", "IP Documents — Legal documentation related to IP and business ownership"],
  process: [
    { title: "Prepare Your Documents", text: "Gather all required documents including registration, proposal, and financial statements." },
    { title: "Submit Your Application", text: "Submit through the official scheme portal with pitch deck and project details." },
    { title: "Evaluation Process", text: "Applications are reviewed for technical feasibility and market viability." },
    { title: "Shortlisting & Interview", text: "Shortlisted teams present their innovations to the program selection panel." },
    { title: "Final Selection & Fund Disbursement", text: "Selected startups receive funding and begin their incubation journey." },
    { title: "Prepare Your Documents", text: "Gather all required documents including registration, proposal, and financial statements." },
  ],
});
export const greatSchemeFaq = grantSchemeFaq(
  "GREAT Scheme",
  "Selected applicants may receive support of about Up to ₹50L, subject to evaluation and scheme guidelines.",
  "The GREAT Scheme 2025 is open to a diverse range of individuals and startups involved in technical textiles innovation. Here's who can apply:; Individual Applicants: Indian citizen, at least 21 years old. The primary applicant must be the Project Leader.; Startups: Registered as ",
  "Company Registration — Proof of registration (Private Limited or LLP), Project Proposal — Detailed proposal outlining objectives, milestones, and Project Leader role, Proof of Incubation — Certificate from approved incubator facility, Proof of Product Readiness — Customer feedback, sales reports, or product/service validation.",
);

export const uyegpPage = createGrantProgramme({
  name: "UYEGP Scheme",
  eyebrow: "Tamil Nadu Youth Employment",
  kicker: "Financial Assistance for Unemployed Youth",
  intro: "The UYEGP Scheme (Unemployed Youth Employment Generation Programme) is a flagship initiative by the Tamil Nadu Government to tackle unemployment and promote self-employment among socially and economically backward youth. By offering financial assistance and support for setting up manufacturing, service, and business enterprises, this scheme empowers unemployed individuals to create their own livelihood.",
  funding: "Up to ₹15L",
  eligibility: "To apply for the UYEGP Scheme, applicants need to meet specific eligibility criteria. The key requirements are as follows:; Educational Qualification: Must have passed at least the 8th standard.; Annual Household Income: Should not exceed ₹5 Lakhs per year.; Age Limit: Minimum age: 18 years - Maximum age: 45 years for general category - Maximum age: 55 years for SC/ST, BC, MBC, Minorities, Women, Ex-Servicemen, Diffe",
  benefits: ["Capital Subsidy", "Loan Assistance", "Repayment Terms", "Promoter's Contribution", "Training & Mentorship", "Bank Support"],
  documents: ["To apply for the UYEGP Scheme, you must submit the following documents:", "Aadhaar Card — Proof of identity for the applicant.", "Ration Card — Proof of residence (or nativity certificate if the Ration card is unavailable).", "Educational Certificates — Transfer certificate or school record sheet copy.", "Community Certificate — SC/ST, BC, or MBC certificate (if applicable).", "Project Report — Detailed business plan or project report covering the total cost, objectives, and milestones.", "Bank Passbook — Bank account details for funding disbursement.", "Photographs — Passport-sized photographs of the applicant."],
  process: [
    { title: "Prepare Your Documents", text: "2" },
    { title: "Submit Application", text: "3" },
    { title: "Application Evaluation", text: "4" },
    { title: "Interview & Shortlisting", text: "5" },
    { title: "Grant & Loan Disbursement", text: "1" },
    { title: "Prepare Your Documents", text: "2" },
  ],
});
export const uyegpFaq = grantSchemeFaq(
  "UYEGP Scheme",
  "Selected applicants may receive support of about Up to ₹15L, subject to evaluation and scheme guidelines.",
  "To apply for the UYEGP Scheme, applicants need to meet specific eligibility criteria. The key requirements are as follows:; Educational Qualification: Must have passed at least the 8th standard.; Annual Household Income: Should not exceed ₹5 Lakhs per year.; Age Limit: Minimum ag",
  "To apply for the UYEGP Scheme, you must submit the following documents:, Aadhaar Card — Proof of identity for the applicant., Ration Card — Proof of residence (or nativity certificate if the Ration card is unavailable)., Educational Certificates — Transfer certificate or school record sheet copy..",
);

export const cybersecurityFundPage = createGrantProgramme({
  name: "Cybersecurity Fund 2.0",
  eyebrow: "Cybersecurity Startups",
  kicker: "Funding for Digital Security Innovations",
  intro: "The Cybersecurity Fund 2.0 is a government-backed scheme aimed at promoting the growth of startups and MSMEs in the cybersecurity sector. The scheme provides funding support to companies that develop innovative cybersecurity solutions to address challenges in data protection, cybercrime prevention, and network security.",
  funding: "Up to ₹30L",
  eligibility: "To access the benefits of this program, startups must meet specific deep-tech and defence eligibility requirements:; Company Types: Private Limited Company - LLP - Registered Partnership - MSMEs (Proprietorship); Focus Areas: Organizations developing solutions in cybersecurity, such as AI-powered tools, malware analysis, and fraud detection.; Industry Sectors: AI, IoT, Robotics - Companies focused on cyber risk evalu",
  benefits: ["Funding", "Mentorship", "Incubation Support", "Investor Access", "Long-Term Support"],
  documents: ["To apply for the Cybersecurity Fund 2.0, you will need to submit the following documents:", "Company Registration Documents — Proof of company registration (Private Limited Company, LLP, Partnership).", "GST Registration — Proof of GST registration (for applicable businesses).", "PAN Card — PAN card of the applicant.", "Project Proposal / Business Plan — Detailed business plan outlining your project goals, milestones, and funding needs.", "Financial Statements — Balance Sheet, Profit & Loss Account for the previous fiscal year.", "Technology / Innovation Description — Description of the technology or cybersecurity solution you are developing.", "Tax Clearance — Income Tax Returns or Tax Clearance Certificates (if applicable)."],
  process: [
    { title: "Ensure Eligibility", text: "2" },
    { title: "Prepare Required Documents", text: "3" },
    { title: "Submit Application", text: "4" },
    { title: "Evaluation and Selection", text: "5" },
    { title: "Funding Disbursement", text: "1" },
    { title: "Ensure Eligibility", text: "2" },
  ],
});
export const cybersecurityFundFaq = grantSchemeFaq(
  "Cybersecurity Fund 2.0",
  "Selected applicants may receive support of about Up to ₹30L, subject to evaluation and scheme guidelines.",
  "To access the benefits of this program, startups must meet specific deep-tech and defence eligibility requirements:; Company Types: Private Limited Company - LLP - Registered Partnership - MSMEs (Proprietorship); Focus Areas: Organizations developing solutions in cybersecurity, s",
  "To apply for the Cybersecurity Fund 2.0, you will need to submit the following documents:, Company Registration Documents — Proof of company registration (Private Limited Company, LLP, Partnership)., GST Registration — Proof of GST registration (for applicable businesses)., PAN Card — PAN card of the applicant..",
);

export const artProgramPage = createGrantProgramme({
  name: "ART Program",
  eyebrow: "Accelerator for Research & Tech",
  kicker: "Accelerator Support Across Industries",
  intro: "The ART Program (Accelerated Research & Transformation) is an initiative designed to support the translation of academic research into commercially viable products. The program aims to provide funding, mentorship, and business support for research projects that are poised to make a significant impact in industries such as healthcare, agriculture, water, and environmental sciences.",
  funding: "Up to ₹30L",
  eligibility: "To apply for the ART Program, the applicant must meet the following eligibility criteria:; Applicant Type: Academic Institutes (e.g., universities, research organizations) or Startups focused on Bio-CPS innovations.; Principal Investigator (PI): Must hold a regular position within an academic institute or research establishment (e.g., ISRO, DRDO, CSIR).; Technology Readiness Level (TRL): Projects must be at a TRL of ",
  benefits: ["Funding Support (Up to ₹30 Lakhs)", "Mentorship and Technical Guidance", "Networking and Market Access"],
  documents: ["To apply for the ART Program, you will need to submit the following documents:", "Proof of Concept — Image or prototype showing the working model of your technology or product.", "Project Proposal — A detailed business plan or project proposal outlining the objectives, milestones, and expected outcomes.", "Proof of Employment (PI) — Proof of regular employment for the Principal Investigator at an eligible academic institution or research establishment.", "Partnership Details — Any existing partnerships (e.g., MoUs with universities, research organizations, or companies).", "Clinical Trial Evidence — If applicable, evidence of clinical trials or testing results for medical-related projects.", "Product Certifications — Relevant certifications for your product or technology (if applicable).", "Licensing Deals — If applicable, proof of any licensing agreements for your innovation."],
  process: [
    { title: "Prepare Your Documents", text: "2" },
    { title: "Submit Your Application", text: "3" },
    { title: "Review and Evaluation", text: "4" },
    { title: "Shortlisting and Interviews", text: "5" },
    { title: "Selection and Funding Disbursement", text: "1" },
    { title: "Prepare Your Documents", text: "2" },
  ],
});
export const artProgramFaq = grantSchemeFaq(
  "ART Program",
  "Selected applicants may receive support of about Up to ₹30L, subject to evaluation and scheme guidelines.",
  "To apply for the ART Program, the applicant must meet the following eligibility criteria:; Applicant Type: Academic Institutes (e.g., universities, research organizations) or Startups focused on Bio-CPS innovations.; Principal Investigator (PI): Must hold a regular position withi",
  "To apply for the ART Program, you will need to submit the following documents:, Proof of Concept — Image or prototype showing the working model of your technology or product., Project Proposal — A detailed business plan or project proposal outlining the objectives, milestones, and expected outcomes., Proof of Employment (PI) — Proof of regular employment for the Principal Investigator at an eligible academic institution or research establishment..",
);

export const agriSureFundPage = createGrantProgramme({
  name: "Agri-Sure Fund",
  eyebrow: "MoA&FW • NABARD",
  kicker: "Funding for Agricultural Startups",
  intro: "The Agri-Sure Fund is a government-backed initiative designed to support early-stage startups that are focused on solving critical challenges in the agriculture and rural sectors of India The scheme is jointly sponsored by the Ministry of Agriculture and Farmers Welfare (MoA&FW), the Government of India (GOI), and NABARD, and is managed by NABVENTURES Ltd.",
  funding: "Up to ₹25L",
  eligibility: "To apply for the Agri-Sure Fund, your startup must meet the following eligibility criteria:; Startup Type: LLP, Private Limited Company, or Registered Partnership; Geographical Focus: The startup must be based and registered in India.; Technology Readiness: Startups must be in the early-stage with TRL 5+ (Technology Readiness Level) and have proof of concept.; Innovation: The startup must focus on innovative technolo",
  benefits: ["Financial Support", "Funding Options", "Reinvestment Opportunity", "Sustained Growth Support", "Pre-Series A Funding", "Interest Subsidy"],
  documents: ["To apply, you must ensure your startup health program metrics and documents are ready. The Documents required for Agri-Sure Fund include:", "Company Registration — Certificate of Incorporation, MoA, and AoA (Pvt Ltd or LLP).", "DPIIT Recognition — Recognition certificate confirming eligibility under Startup India.", "MSME Certificate — Obtain MSME Certification for additional government benefits.", "Pitch Deck — A detailed deck explaining the solution and traction.", "Technology Description — Roadmap showing TRL 5+ progress.", "Founders' CVs — Highlighting experience in the agri-domain.", "Financials — Audited statements, tax exemption status, and fund utilization plans (if any, check tax exemptions)."],
  process: [
    { title: "Prepare Required Documents", text: "2" },
    { title: "Submit Your Application", text: "3" },
    { title: "Application Review", text: "4" },
    { title: "Interviews & Selection", text: "5" },
    { title: "Investment & Mentorship", text: "1" },
    { title: "Prepare Required Documents", text: "2" },
  ],
});
export const agriSureFundFaq = grantSchemeFaq(
  "Agri-Sure Fund",
  "Selected applicants may receive support of about Up to ₹25L, subject to evaluation and scheme guidelines.",
  "To apply for the Agri-Sure Fund, your startup must meet the following eligibility criteria:; Startup Type: LLP, Private Limited Company, or Registered Partnership; Geographical Focus: The startup must be based and registered in India.; Technology Readiness: Startups must be in th",
  "To apply, you must ensure your startup health program metrics and documents are ready. The Documents required for Agri-Sure Fund include:, Company Registration — Certificate of Incorporation, MoA, and AoA (Pvt Ltd or LLP)., DPIIT Recognition — Recognition certificate confirming eligibility under Startup India., MSME Certificate — Obtain MSME Certification for additional government benefits..",
);

export const grantForVenturesPage = createGrantProgramme({
  name: "Grant for Ventures",
  eyebrow: "Early-Stage Ventures",
  kicker: "Grants for Innovative Business Ideas",
  intro: "The Grant for Ventures scheme is part of the Kotak BizLabs Accelerator Programme, a government-backed initiative designed to help early-stage startups refine their business models, gain market traction, and scale their operations. This program targets startups with innovative ideas in sectors like EV/Mobility, AgriTech, HealthTech, and ClimateTech.",
  funding: "Up to ₹30L",
  eligibility: "To apply for the Grant for Ventures program, startups must meet the following eligibility criteria:; Startup Type: Must be a Private Limited Company, LLP, or Partnership registered in India.; DPIIT Recognition: Must be DPIIT-recognized under the Startup India scheme.; Revenue: Must have an existing customer base and monthly revenue.; Stage of Development: Must be in the ideation, validation, or early traction stage.",
  benefits: ["Grant Support", "Equity-Free Funding", "Mentorship & Training", "Market Access", "Networking Opportunities", "Bank Support"],
  documents: ["To apply for the Grant for Ventures scheme, you will need to submit the following documents:", "Pitch Deck — A comprehensive pitch deck covering the problem, solution, market opportunity, and growth strategy.", "Executive Summary — A brief summary of your startup's mission, vision, and business goals.", "Business Plan — A detailed business plan outlining your market analysis, financial projections, and growth strategy.", "Proof of DPIIT Registration — Proof of recognition under Startup India (DPIIT).", "Revenue Proof — Evidence of monthly revenue and customer base.", "Product Demo or Video — A demo video or product introduction video (optional but recommended)."],
  process: [
    { title: "Prepare Documents", text: "Gather all necessary documents, including pitch deck, executive summary, business plan, DPIIT registration proof, revenue proof, and product demo/video." },
    { title: "Submit Application", text: "Complete and submit your application online through the official Grant for Ventures portal." },
    { title: "Evaluation Process", text: "Your application will be reviewed by the Kotak BizLabs team for eligibility and potential." },
    { title: "Interview & Pitch", text: "Shortlisted startups will be invited for an interview or pitch presentation." },
    { title: "Funding Disbursement", text: "Upon successful evaluation, funding will be disbursed to your startup, along with ongoing support." },
    { title: "Prepare Documents", text: "Gather all necessary documents, including pitch deck, executive summary, business plan, DPIIT registration proof, revenue proof, and product demo/video." },
  ],
});
export const grantForVenturesFaq = grantSchemeFaq(
  "Grant for Ventures",
  "Selected applicants may receive support of about Up to ₹30L, subject to evaluation and scheme guidelines.",
  "To apply for the Grant for Ventures program, startups must meet the following eligibility criteria:; Startup Type: Must be a Private Limited Company, LLP, or Partnership registered in India.; DPIIT Recognition: Must be DPIIT-recognized under the Startup India scheme.; Revenue: Mu",
  "To apply for the Grant for Ventures scheme, you will need to submit the following documents:, Pitch Deck — A comprehensive pitch deck covering the problem, solution, market opportunity, and growth strategy., Executive Summary — A brief summary of your startup's mission, vision, and business goals., Business Plan — A detailed business plan outlining your market analysis, financial projections, and growth strategy..",
);

export const growthGrantPage = createGrantProgramme({
  name: "Growth Grant",
  eyebrow: "Scale-Up Funding",
  kicker: "Financial Assistance to Accelerate Growth",
  intro: "The Growth Grant is a unique funding program that supports young entrepreneurs, typically under 22 years of age, who have innovative ideas and are working towards creating meaningful change. This program is designed to help early-stage founders who may not have the resources to continue their entrepreneurial journey while still pursuing formal education.",
  funding: "Up to ₹1.7Cr",
  eligibility: "The Growth Grant targets young, innovative entrepreneurs who are ready to take their ventures to the next stage. It is important to understand the Growth Grant eligibility before preparing your business registration documents.; Age Limit: Applicants must be 22 years or younger at the time of application.; Educational Status: Must not hold a university degree; must be willing to defer or drop out.; Business Stage: Hig",
  benefits: ["Grant Support", "Mentorship", "Global Exposure", "Networking Opportunities", "Creative Freedom"],
  documents: ["Pitch Deck — A detailed presentation of the problem, solution, and market size.", "Executive Summary — A one-page overview of your vision.", "Business Plan — Comprehensive roadmap including financial projections.", "Technology Description — Details of the MVP or working prototype.", "Founders' CVs — Proof of technical capability and founder-market fit.", "Legal Documents — Business registration and MSME certification (if applicable).", "Traction Metrics — User base, revenue, or partnership letters."],
  process: [
    { title: "Prepare Your Documents", text: "2" },
    { title: "Submit Your Application", text: "3" },
    { title: "Evaluation Process", text: "4" },
    { title: "Interview & Pitch", text: "5" },
    { title: "Funding Disbursement & Mentorship", text: "1" },
    { title: "Prepare Your Documents", text: "2" },
  ],
});
export const growthGrantFaq = grantSchemeFaq(
  "Growth Grant",
  "Selected applicants may receive support of about Up to ₹1.7Cr, subject to evaluation and scheme guidelines.",
  "The Growth Grant targets young, innovative entrepreneurs who are ready to take their ventures to the next stage. It is important to understand the Growth Grant eligibility before preparing your business registration documents.; Age Limit: Applicants must be 22 years or younger at",
  "Pitch Deck — A detailed presentation of the problem, solution, and market size., Executive Summary — A one-page overview of your vision., Business Plan — Comprehensive roadmap including financial projections., Technology Description — Details of the MVP or working prototype..",
);

export const brightpathVenturesPage = createGrantProgramme({
  name: "BrightPath Ventures",
  eyebrow: "High-Potential Startups",
  kicker: "Mentorship, Funding Access & Guidance",
  intro: "BrightPath Ventures is an intensive 12-week accelerator program designed to empower early-stage tech startups across the Middle East and North African (MENA) region. With a focus on startups that have early traction and a working prototype (Minimum Viable Product - MVP), the program helps them scale rapidly by offering expert-led mentorship, workshops focused on growth strategy, and connections to investors and ecosystem partners.",
  funding: "Up to ₹18Cr",
  eligibility: "To be eligible for the BrightPath Ventures program, startups must meet specific criteria focused on tech innovation and regional presence.; Tech-Focused Startup: Must be a tech-focused startup with a working MVP or product; Location: Startups must be based and operating in the MENA region; Early Traction: Must have early traction, such as market interest or customer adoption; Founders: The startup must have founders ",
  benefits: ["Seed Funding", "Fast-Track Application", "Demo Day Access", "Global Network Access", "Ongoing Support", "Investor Exposure"],
  documents: ["To apply for BrightPath Ventures, you need to submit comprehensive documentation that showcases your startup's potential, traction, and business model.", "Pitch Deck — A comprehensive pitch deck covering your problem, solution, market potential, and growth strategy", "Executive Summary — A brief summary of your startup's objectives, market opportunity, and vision", "Business Plan & Financial Projections — A detailed business plan with financial projections and growth milestones", "Product/Technology Description — Description of your product or technology, including market validation and proof of concept", "Founders' CVs — Resumes of the founders outlining their experience and role in the startup", "Market Analysis — A comprehensive market analysis covering competitors, target market, and customer segments", "Current Traction Metrics — Evidence of traction, such as user numbers, revenue, or partnerships (if applicable)"],
  process: [
    { title: "Prepare Documents", text: "Gather all required documents including pitch deck, business plan, and founder information." },
    { title: "Submit Application", text: "Submit your complete application through the BrightPath Ventures online portal." },
    { title: "Application Review", text: "Initial review of your application and documents by the selection committee." },
    { title: "Interview & Pitch", text: "Present your startup to the selection committee through interviews and pitch sessions." },
    { title: "Funding & Mentorship", text: "Selected startups receive funding and begin the 12-week accelerator program." },
    { title: "Prepare Documents", text: "Gather all required documents including pitch deck, business plan, and founder information." },
  ],
});
export const brightpathVenturesFaq = grantSchemeFaq(
  "BrightPath Ventures",
  "Selected applicants may receive support of about Up to ₹18Cr, subject to evaluation and scheme guidelines.",
  "To be eligible for the BrightPath Ventures program, startups must meet specific criteria focused on tech innovation and regional presence.; Tech-Focused Startup: Must be a tech-focused startup with a working MVP or product; Location: Startups must be based and operating in the ME",
  "To apply for BrightPath Ventures, you need to submit comprehensive documentation that showcases your startup's potential, traction, and business model., Pitch Deck — A comprehensive pitch deck covering your problem, solution, market potential, and growth strategy, Executive Summary — A brief summary of your startup's objectives, market opportunity, and vision, Business Plan & Financial Projections — A detailed business plan with financial projections and growth milestones.",
);

export const healthAcceleratorPage = createGrantProgramme({
  name: "Health Accelerator",
  eyebrow: "Healthcare & MedTech",
  kicker: "Support for Healthcare Innovators",
  intro: "The Health Accelerator Scheme (Samvardhan 2026) is an initiative designed to support hardware healthcare startups in their growth journey. The program specifically targets startups that have a working prototype and are looking for assistance in moving from the development phase to commercialization. The goal is to accelerate product deployment, enhance market visibility, and help these startups scale rapidly. Samvardhan 2026 is a partnership between PIEDS and Studio Carbon and has been tailored ",
  funding: "Up to ₹10L",
  eligibility: "To apply for the program, startups must meet specific health accelerator eligibility requirements to ensure they are ready for the intensive scaling process.; Startup Type: Must be a Private Limited Company.; Prototype Requirement: Must have a working prototype or a Minimum Viable Product (MVP).; Stage of Startup: Early-stage with some market traction or customer adoption.; Commitment: Founders must demonstrate commi",
  benefits: ["Seed Funding", "Expert Mentorship", "Ecosystem Access", "Demo Day Exposure", "Growth Strategy"],
  documents: ["To ensure a smooth application process, prepare the following documents required for health accelerator submission:", "Company Registration Documents — Certificate of Incorporation, MoA, and AoA.", "Pitch Deck — Outlining the problem, solution, business model, and market traction.", "Technology Description — Proof of MVP or working prototype.", "Founders' CVs — Resumes outlining the experience of the core team.", "Market Analysis — Detailed go-to-market strategy.", "Compliance Documents — Tax filings and ISO certifications if applicable."],
  process: [
    { title: "Prepare Your Documents", text: "2" },
    { title: "Submit Your Application", text: "3" },
    { title: "Review and Evaluation", text: "4" },
    { title: "Interview & Selection", text: "5" },
    { title: "Funding & Mentorship", text: "1" },
    { title: "Prepare Your Documents", text: "2" },
  ],
});
export const healthAcceleratorFaq = grantSchemeFaq(
  "Health Accelerator",
  "Selected applicants may receive support of about Up to ₹10L, subject to evaluation and scheme guidelines.",
  "To apply for the program, startups must meet specific health accelerator eligibility requirements to ensure they are ready for the intensive scaling process.; Startup Type: Must be a Private Limited Company.; Prototype Requirement: Must have a working prototype or a Minimum Viabl",
  "To ensure a smooth application process, prepare the following documents required for health accelerator submission:, Company Registration Documents — Certificate of Incorporation, MoA, and AoA., Pitch Deck — Outlining the problem, solution, business model, and market traction., Technology Description — Proof of MVP or working prototype..",
);

export const startupAcceleratorPage = createGrantProgramme({
  name: "Startup Accelerator Scheme",
  eyebrow: "Early-Stage Acceleration",
  kicker: "Mentorship & Market Expansion Support",
  intro: "A startup accelerator scheme is a program that helps early-stage startups accelerate their growth by providing access to investment, mentorship, networking opportunities, and resources. These schemes are typically designed for pre-seed and early-stage startups that are ready to scale and expand their operations. The Marwari Catalysts Startup Accelerator Scheme 2025 is specifically aimed at supporting startups in India by providing both financial and strategic guidance to help them scale rapidly.",
  funding: "Up to ₹25L",
  eligibility: "The Marwari Catalysts Startup Accelerator Scheme is open to early-stage startups that meet the following criteria:; Pre-seed & Early-stage Startups: Startups that are in the idea or product development phase. Those looking for seed funding or initial investment to bring their products or services to market. Getting [DPIIT startup recognition](/services/startup-india-certification-registration) in place early keeps th",
  benefits: ["₹25 Lakhs Initial Investment", "₹75 Lakhs to ₹1 Crore Follow-on Funding", "3–4 Months of Guidance", "Access to a Network of 400+ Investors", "Post-program Long-term Support"],
  documents: ["Ensure your application is complete and error-free by preparing the following documents:", "Company Registration", "Founder Profiles — Background and experience of the founder/co-founders", "Business Plan / Pitch Deck — Outline of the startup's objectives, target market, and scalability", "Financial Projections — 3–5 year financial projections", "Product / Service Traction — Proof of product readiness or customer feedback", "IP Documents"],
  process: [
    { title: "Check Eligibility", text: "Confirm entity fit, stage and documentation readiness." },
    { title: "Prepare Documents", text: "Assemble proposal, KYC, financials and registration proofs." },
    { title: "Submit Application", text: "Apply through the official portal or implementing agency." },
    { title: "Evaluation", text: "Experts review innovation, impact and delivery readiness." },
    { title: "Grant Support", text: "Selected applicants receive milestone-linked grant support." },
  ],
});
export const startupAcceleratorFaq = grantSchemeFaq(
  "Startup Accelerator Scheme",
  "Selected applicants may receive support of about Up to ₹25L, subject to evaluation and scheme guidelines.",
  "The Marwari Catalysts Startup Accelerator Scheme is open to early-stage startups that meet the following criteria:; Pre-seed & Early-stage Startups: Startups that are in the idea or product development phase. Those looking for seed funding or initial investment to bring their pro",
  "Ensure your application is complete and error-free by preparing the following documents:, Company Registration, Founder Profiles — Background and experience of the founder/co-founders, Business Plan / Pitch Deck — Outline of the startup's objectives, target market, and scalability.",
);

export const startupSparkPage = createGrantProgramme({
  name: "Startup Spark Scheme",
  eyebrow: "Idea-to-Venture",
  kicker: "Transform Ideas into Viable Businesses",
  intro: "The Startup Spark Scheme is an intensive 12-week accelerator initiative. Its primary goal is to accelerate the commercialization of cutting-edge technology solutions. Unlike a traditional unsecured business loan, this program provides equity-free, milestone-linked grants that do not need to be repaid.",
  funding: "Up to ₹50L",
  eligibility: "To ensure your application is successful, you must meet the specific Startup Spark eligibility requirements. These criteria are designed to identify startups that are past the basic ideation phase and ready for market deployment.; Technology Focus: Must be a tech-driven venture with an existing MVP.; Recognition: Startups must be DPIIT-recognized. If you haven't done this yet, our business registration services can h",
  benefits: ["Grant Support", "Expert Mentorship", "SINE Ecosystem", "Investor Visibility", "Global Access"],
  documents: ["To apply for the Startup Spark Program, you will need to submit the following documents:", "Detailed Pitch Deck — Explaining the problem, solution, and market opportunity.", "Business Plan — A comprehensive roadmap with financial projections.", "Technology Description — Evidence of TRL (Technology Readiness Level).", "Traction Metrics — Proof of user base, revenue, or existing partnerships.", "Legal Documents — Incorporation certificates, MSME Certification, and tax filings.", "Founders’ CVs — Highlighting domain expertise."],
  process: [
    { title: "Prepare Your Documents", text: "2" },
    { title: "Submit Your Application", text: "3" },
    { title: "Evaluation Process", text: "4" },
    { title: "Interview & Pitch", text: "5" },
    { title: "Funding & Mentorship", text: "1" },
    { title: "Prepare Your Documents", text: "2" },
  ],
});
export const startupSparkFaq = grantSchemeFaq(
  "Startup Spark Scheme",
  "Selected applicants may receive support of about Up to ₹50L, subject to evaluation and scheme guidelines.",
  "To ensure your application is successful, you must meet the specific Startup Spark eligibility requirements. These criteria are designed to identify startups that are past the basic ideation phase and ready for market deployment.; Technology Focus: Must be a tech-driven venture w",
  "To apply for the Startup Spark Program, you will need to submit the following documents:, Detailed Pitch Deck — Explaining the problem, solution, and market opportunity., Business Plan — A comprehensive roadmap with financial projections., Technology Description — Evidence of TRL (Technology Readiness Level)..",
);

export const leapFundSchemePage = createGrantProgramme({
  name: "Leap Fund Scheme",
  eyebrow: "Biotech & Deep Tech",
  kicker: "Equity Funding for Biotech Startups",
  intro: "The Leap Fund is a government-backed initiative supporting innovative businesses, especially in biotechnology and allied sectors. The fund is aimed at early-stage companies looking for how to raise funds for a startup in India to scale their operations and successfully take their products to market.",
  funding: "Up to ₹1Cr",
  eligibility: "Leap Fund eligibility prioritizes high-potential startups with commercialization readiness and strong technical basis.; Business Type: Private Limited Companies, LLPs, or Partnerships.; Company Age: Up to 10 years from date of incorporation (DPIIT preferred).; Focus Sector: Biotech, Agriculture, Health, Energy, and Environment.; Technology Readiness: TRL 5 or above with advanced testing/development.",
  benefits: ["Equity Investment", "Milestone-based Funding", "Expert Mentorship", "Strategic Networking", "Industry Credibility"],
  documents: ["Prepare these documents in advance to streamline review and improve application quality.", "Company registration docs and MSME certification", "Detailed pitch deck", "Comprehensive business plan and projections", "Technology description with TRL proof", "Founders' CVs", "Market analysis and TAM", "Legal compliance records (GST/ITR/IP)"],
  process: [
    { title: "Prepare Your Documents", text: "2" },
    { title: "Submit Your Application", text: "3" },
    { title: "Application Review", text: "4" },
    { title: "Funding & Mentorship", text: "5" },
    { title: "Interview & Pitch", text: "1" },
    { title: "Prepare Your Documents", text: "2" },
  ],
});
export const leapFundSchemeFaq = grantSchemeFaq(
  "Leap Fund Scheme",
  "Selected applicants may receive support of about Up to ₹1Cr, subject to evaluation and scheme guidelines.",
  "Leap Fund eligibility prioritizes high-potential startups with commercialization readiness and strong technical basis.; Business Type: Private Limited Companies, LLPs, or Partnerships.; Company Age: Up to 10 years from date of incorporation (DPIIT preferred).; Focus Sector: Biote",
  "Prepare these documents in advance to streamline review and improve application quality., Company registration docs and MSME certification, Detailed pitch deck, Comprehensive business plan and projections.",
);

export const hpUdgamPage = createGrantProgramme({
  name: "HP Udgam Scheme",
  eyebrow: "Himachal Pradesh",
  kicker: "Clean Energy & Entrepreneurship Support",
  intro: "The HP Udgam Scheme is a funding and mentorship initiative by HPCL (Hindustan Petroleum Corporation Limited) designed to support startups working in areas such as renewable energy, e-mobility, energy storage, biofuels, and digital solutions. It provides equity funding of up to ₹2.5 crore to help startups scale and commercialize their solutions.",
  funding: "Up to ₹2.5Cr",
  eligibility: "HP Udgam eligibility emphasizes startup maturity, sector relevance, and operational readiness.; Business Type: Private Limited Company preferred for equity participation.; DPIIT Recognition: Valid startup recognition is generally expected.; Company Age: Typically below 10 years from incorporation.; Business Stage: Working prototype or early market traction.",
  benefits: ["High-Value Equity Funding", "Mentorship", "Infrastructure", "Market Validation", "Regulatory Support"],
  documents: ["Build a complete application file before submission for better review quality and turnaround.", "Startup recognition certificate — Proof of startup india certificate and Registration.", "Company incorporation documents — Certificate of Incorporation, MoA, and AoA.", "Professional pitch deck — Detailing the problem, energy solution, and market size.", "Financial records — Audited balance sheets and P&L statements.", "Technology roadmap — Detailed description of the technology and TRL level.", "Founder profiles — Resumes of the core team showcasing domain expertise.", "MSME details — Copy of MSME Certification."],
  process: [
    { title: "Ensure Eligibility", text: "2" },
    { title: "Submit Application", text: "3" },
    { title: "Evaluation and Selection", text: "4" },
    { title: "Fund Disbursement", text: "5" },
    { title: "Interview/Discussion", text: "1" },
    { title: "Ensure Eligibility", text: "2" },
  ],
});
export const hpUdgamFaq = grantSchemeFaq(
  "HP Udgam Scheme",
  "Selected applicants may receive support of about Up to ₹2.5Cr, subject to evaluation and scheme guidelines.",
  "HP Udgam eligibility emphasizes startup maturity, sector relevance, and operational readiness.; Business Type: Private Limited Company preferred for equity participation.; DPIIT Recognition: Valid startup recognition is generally expected.; Company Age: Typically below 10 years f",
  "Build a complete application file before submission for better review quality and turnaround., Startup recognition certificate — Proof of startup india certificate and Registration., Company incorporation documents — Certificate of Incorporation, MoA, and AoA., Professional pitch deck — Detailing the problem, energy solution, and market size..",
);

export const defenceSchemePage = createGrantProgramme({
  name: "iDEX Defence Innovation Scheme",
  eyebrow: "Defence Tech",
  kicker: "Funding for Defence & Dual-Use Startups",
  intro: "Innovations for Defence Excellence (iDEX) is an initiative launched by the Ministry of Defence (MoD) under the Defence Innovation Organisation (DIO). It aims to create a self-reliant and innovative defence ecosystem in India by engaging startups, MSMEs and innovators to develop technology solutions for defence and aerospace challenges. Under iDEX, the Ministry of Defence, Indian Army, Indian Navy and Indian Air Force publish specific technology 'problems' called DISC (Defence India Startup Chall",
  funding: "Up to ₹1.5Cr",
  eligibility: "iDEX is open to a range of innovators and organisations working in defence and aerospace technology domains:; DPIIT-Recognised Startups: Startups officially recognised by DPIIT under the Startup India initiative are the primary target beneficiaries.; MSMEs: Micro, Small and Medium Enterprises with relevant technology capabilities in defence or aerospace domains.; Individual Innovators: Individual technology innovator",
  benefits: ["Up to ₹1.5 Crore Grant", "Direct Government Procurement", "Access to Defence Facilities", "Mentorship & Hand-holding", "IP Rights Retained", "Market Validation"],
  documents: ["Prepare the following to apply for an iDEX DISC challenge:", "DPIIT Certificate — DPIIT startup recognition certificate (mandatory for startups).", "Company Registration — Certificate of Incorporation, LLP agreement or equivalent.", "Technical Proposal — Detailed solution proposal addressing the specific DISC challenge requirements.", "Team Profile — CVs of key technical and management team members demonstrating relevant expertise.", "IP Documentation — Patents, patent applications or other IP documentation relevant to the proposed solution.", "Financial Statements — Last 1–2 years of audited accounts or projected financials for early-stage startups."],
  process: [
    { title: "Monitor Active Challenges", text: "Visit idex.gov.in to browse currently active DISC challenges posted by the Army, Navy, Air Force and MoD." },
    { title: "Register on iDEX Portal", text: "Create your innovator profile on the iDEX portal and ensure your DPIIT recognition is current." },
    { title: "Submit Your Proposal", text: "Prepare a technical proposal addressing the challenge requirements and submit within the specified deadline." },
    { title: "Evaluation & Shortlisting", text: "A technical committee evaluates submissions. Shortlisted applicants may be called for a presentation." },
    { title: "Grant Agreement & Kickoff", text: "Selected startups sign a grant agreement with DIO, receive initial funding tranche and begin prototype development." },
    { title: "Milestone Reviews & Final Assessment", text: "Funding is released in tranches based on milestone achievement. Successful prototypes are evaluated for procurement." },
  ],
});
export const defenceSchemeFaq = grantSchemeFaq(
  "iDEX Defence Innovation Scheme",
  "Selected applicants may receive support of about Up to ₹1.5Cr, subject to evaluation and scheme guidelines.",
  "iDEX is open to a range of innovators and organisations working in defence and aerospace technology domains:; DPIIT-Recognised Startups: Startups officially recognised by DPIIT under the Startup India initiative are the primary target beneficiaries.; MSMEs: Micro, Small and Mediu",
  "Prepare the following to apply for an iDEX DISC challenge:, DPIIT Certificate — DPIIT startup recognition certificate (mandatory for startups)., Company Registration — Certificate of Incorporation, LLP agreement or equivalent., Technical Proposal — Detailed solution proposal addressing the specific DISC challenge requirements..",
);

export const aditiDefencePage = createGrantProgramme({
  name: "Aditi Defence 4.0 Challenge",
  eyebrow: "DIO • Ministry of Defence",
  kicker: "Grant Funding for Advanced Defence Tech",
  intro: "The Aditi Defence 4.0 Challenge is a government-backed initiative supported by the Defence Innovation Organisation (DIO) and the Ministry of Defence, aligned with India's Atmanirbhar Bharat vision. It provides milestone-linked grant funding of up to ₹25 Crore to Indian startups, MSMEs, and private companies developing innovative defence and dual-use technologies. Beyond funding, selected participants gain access to DRDO and Armed Forces testing facilities for technology validation, mentorship fr",
  funding: "Up to ₹25Cr",
  eligibility: "Aditi Defence 4.0 is open to Indian entities with proven technological capabilities in defence or dual-use innovation areas.; Entity Type: Registered Indian startups, MSMEs, or private companies. Foreign entities are not eligible.; Technology Domain: Innovative defence or dual-use technology solution across autonomous systems, munitions, cybersecurity, AI, or space tech.; Technology Readiness: High Technology Readine",
  benefits: ["Grant up to ₹25 Crore", "DRDO Testing Facilities", "Defence Expert Mentorship", "Government Contract Pathway", "Export Opportunities", "Genesis Fund Access"],
  documents: ["-   DPIIT Registration Certificate — -   Company Incorporation Certificate", "-   Pitch deck with technology description and market application — -   Technology Readiness Level (TRL) evidence and test data", "-   Financial model with cap table and 3-year projections — -   MVP evidence or pilot deployment proof", "-   Team CVs highlighting technical and leadership experience — -   Valid MSME (Udyam) Certification"],
  process: [
    { title: "Online Registration", text: "Register on the Aditi Defence 4.0 portal and create your startup profile with basic entity details." },
    { title: "Document Submission", text: "Upload DPIIT certificate, incorporation documents, pitch deck, TRL evidence, and financial projections." },
    { title: "Selection Process", text: "DIO evaluates applications on technology merit, feasibility, defence relevance, and team capability." },
    { title: "Interview & Pitching", text: "Shortlisted startups present to a panel of defence experts, DRDO scientists, and DIO officials." },
    { title: "Fund Allocation", text: "Approved startups receive milestone-linked grant disbursements with defined testing and development milestones." },
    { title: "Online Registration", text: "Register on the Aditi Defence 4.0 portal and create your startup profile with basic entity details." },
  ],
});
export const aditiDefenceFaq = grantSchemeFaq(
  "Aditi Defence 4.0 Challenge",
  "Selected applicants may receive support of about Up to ₹25Cr, subject to evaluation and scheme guidelines.",
  "Aditi Defence 4.0 is open to Indian entities with proven technological capabilities in defence or dual-use innovation areas.; Entity Type: Registered Indian startups, MSMEs, or private companies. Foreign entities are not eligible.; Technology Domain: Innovative defence or dual-us",
  "-   DPIIT Registration Certificate — -   Company Incorporation Certificate, -   Pitch deck with technology description and market application — -   Technology Readiness Level (TRL) evidence and test data, -   Financial model with cap table and 3-year projections — -   MVP evidence or pilot deployment proof, -   Team CVs highlighting technical and leadership experience — -   Valid MSME (Udyam) Certification.",
);

export const aerospaceDefencePage = createGrantProgramme({
  name: "Aerospace Defence Fund",
  eyebrow: "Aerospace & Dual-Use",
  kicker: "Funding & Mentorship for Defence Startups",
  intro: "The Aerospace Defence Fund is a high-impact incubation and acceleration initiative designed to identify and scale the next generation of Indian aerospace and defence leaders. Managed as part of the Boeing BUILD (Boeing University Innovation Leadership Development) 5.0 framework, it focuses on bridging the gap between a brilliant lab concept and a field-ready solution. Unlike a standard without security business loan, which focuses on debt repayment, the Aerospace Defence Fund Scheme is designed ",
  funding: "Up to ₹25Cr",
  eligibility: "The Aerospace Defence Fund eligibility framework is strictly defined to ensure that resources are directed toward serious innovators who have a clear legal and technical foundation. Understanding these criteria is essential before initiating the business registration or application process. Aerospace Defence Fund Eligibility Table; Startup Stage: Early-stage entrepreneurs, including pre-seed, idea, or concept-stage v",
  benefits: ["Financial Support:", "Structured Mentorship:", "Industry Incubation:", "Networking & Visibility:", "Investor Readiness:"],
  documents: ["DPIIT Recognition Certificate: — Proof of being a recognized startup under the Startup India certificate program.", "Company Incorporation Proof: — COI, MoA, and AoA. (Refer to minimum capital requirement for LLP).", "Project Proposal: — A detailed whitepaper explaining the problem statement, technical solution, and defence relevance.", "TRL Description: — Evidence of the current Technology Readiness Level (photos, videos, or test reports).", "Founder CVs: — Resumes highlighting the technical and managerial expertise of the founding team.", "Financial Statements: — Balance sheets and P&L for the last 2 years (if applicable).", "MSME Certificate: — Valid MSME certification (Udyam)."],
  process: [
    { title: "Online Registration", text: "2" },
    { title: "Submit Proposal", text: "3" },
    { title: "Regional Screening", text: "4" },
    { title: "Bootcamp Selection", text: "5" },
    { title: "National Finale (Demo Day)", text: "6" },
    { title: "Selection & Funding", text: "1" },
  ],
});
export const aerospaceDefenceFaq = grantSchemeFaq(
  "Aerospace Defence Fund",
  "Selected applicants may receive support of about Up to ₹25Cr, subject to evaluation and scheme guidelines.",
  "The Aerospace Defence Fund eligibility framework is strictly defined to ensure that resources are directed toward serious innovators who have a clear legal and technical foundation. Understanding these criteria is essential before initiating the business registration or applicati",
  "DPIIT Recognition Certificate: — Proof of being a recognized startup under the Startup India certificate program., Company Incorporation Proof: — COI, MoA, and AoA. (Refer to minimum capital requirement for LLP)., Project Proposal: — A detailed whitepaper explaining the problem statement, technical solution, and defence relevance., TRL Description: — Evidence of the current Technology Readiness Level (photos, videos, or test reports)..",
);

export const agriStartupShitijPage = createGrantProgramme({
  name: "Agri Startup Fund (SHITIJ 2.0)",
  eyebrow: "Agri-Tech Incubation",
  kicker: "Incubation, Mentoring & Market Access",
  intro: "The Agri Startup Fund is offered through SHITIJ 2.0, a flagship incubation programme that supports startups working in agriculture and allied sectors. Unlike a traditional without security business loan, which focuses on debt, this initiative focuses on the entire lifecycle of a startup—from ideation to commercialization. The Agri Startup Fund Scheme provides access to the Indian Council of Agricultural Research (ICAR) experts and elite research infrastructure. It functions similarly to high-tec",
  funding: "Incubation",
  eligibility: "The Agri Startup Fund eligibility framework ensures that support is directed toward legally recognized and technically capable innovators. Meeting these standards is the first step in your business registration and funding journey. Agri Startup Fund Eligibility Table; Applicant Nationality: Must be an Indian Citizen.; Sector Focus: Innovation must be in Agriculture or Allied Sectors (Fisheries, Dairy, etc.).; Stage o",
  benefits: ["1\\. Structured Training & Mentorship", "2\\. Laboratory and Infrastructure Access", "3\\. Intellectual Property (IP) Support", "4\\. Market Linkages and Pilot Testing", "5\\. Funding Facilitation"],
  documents: ["Startup India Certificate — Proof of Startup India recognition.", "Company Incorporation — COI, MoA, and AoA for Pvt Ltd or LLP.", "Innovation Proposal — Detailed explanation of the technical solution and farmer impact.", "Business Pitch Deck — Outlining market size, problem-solution fit, and startup health.", "Founder Profiles — Comprehensive CVs showing domain and technical expertise.", "Financial Statements — Previous 2 years' financials (if applicable) or financial projections.", "TRL Proof — Evidence of the prototype or MVP stage (photos/videos).", "MSME Certificate — Valid MSME Certification (Udyam)."],
  process: [
    { title: "Registration", text: "Create a profile on the official Accubate / SHITIJ 2.0 portal." },
    { title: "Technical Preparation", text: "Refine your innovation proposal and Pitch Deck." },
    { title: "Document Upload", text: "Submit all mandatory Documents required for Agri Startup Fund." },
    { title: "Screening", text: "ICAR experts review the technical feasibility and scalability of your project." },
    { title: "Selection Pitch", text: "Shortlisted applicants present their roadmap to an expert jury." },
    { title: "Training & Onboarding", text: "Winners enter the 2-month mandatory training cycle before formal incubation begins." },
  ],
});
export const agriStartupShitijFaq = grantSchemeFaq(
  "Agri Startup Fund (SHITIJ 2.0)",
  "Selected applicants may receive support of about Incubation, subject to evaluation and scheme guidelines.",
  "The Agri Startup Fund eligibility framework ensures that support is directed toward legally recognized and technically capable innovators. Meeting these standards is the first step in your business registration and funding journey. Agri Startup Fund Eligibility Table; Applicant N",
  "Startup India Certificate — Proof of Startup India recognition., Company Incorporation — COI, MoA, and AoA for Pvt Ltd or LLP., Innovation Proposal — Detailed explanation of the technical solution and farmer impact., Business Pitch Deck — Outlining market size, problem-solution fit, and startup health..",
);

export const agriTechFundPage = createGrantProgramme({
  name: "Agri-Tech Fund Assistance",
  eyebrow: "SmartAgri CoE",
  kicker: "Funding & Incubation for Agri-Tech",
  intro: "The Agri-Tech Fund Assistance Scheme is a strategic initiative designed to identify, incubate, and financially support startups developing technology-based solutions for agriculture and allied sectors. Operated out of the SmartAgri CoE at Bhilai, Chhattisgarh, the program is a collaboration between STPI, MeitY, the Department of Agriculture Development & Farmer Welfare, and CSVTU. The Agri-Tech Fund Assistance details highlight that this is more than just a government grant for MSME. Selected st",
  funding: "Up to ₹35L",
  eligibility: "The Agri-Tech Fund Assistance eligibility framework is designed to prioritize startups with a proven \"Proof of Concept\" and a clear path to market entry. Meeting these requirements is a prerequisite before initiating the startup registration process. Agri-Tech Fund Assistance Eligibility Table; Legal Structure: Must be registered as a Private Limited Company, LLP, or Partnership.; Startup Age: The entity must be inco",
  benefits: ["Financial Seed Support:", "World-Class Incubation:", "Advanced Research Labs:", "Strategic Mentorship:", "Go-to-Market Support:"],
  documents: ["Incorporation Proof: — Certificate of Incorporation and PAN card of the entity.", "DPIIT Recognition: — Mandatory Startup India certificate.", "Detailed Project Proposal: — Outlining the innovation, TRL level, and startup health metrics.", "Pitch Deck: — A high-quality presentation detailing the market opportunity and problem-solution fit. (See Grants for Ventures).", "Founder Profiles: — Detailed CVs highlighting technical and domain expertise.", "Financial Statements: — 12-month financial projections or audited statements.", "IP Documentation: — Details of any patents filed or trademarks obtained (if any).", "MSME Certification: — Valid MSME certification (Udyam)."],
  process: [
    { title: "Self-Audit", text: "Ensure your startup meets the Agri-Tech Fund Assistance eligibility norms." },
    { title: "Technical Drafting", text: "Prepare your innovation proposal focusing on scalability and impact." },
    { title: "Online Submission", text: "Apply through the official STPI SmartAgri CoE portal and upload all Documents required for Agri-Tech Fund Assistance." },
    { title: "Technical Evaluation", text: "A committee of agronomists and tech experts evaluates your solution's feasibility." },
    { title: "Business Review", text: "The committee assesses your revenue model and growth strategy." },
    { title: "Selection & Funding", text: "Shortlisted founders present at Demo Day, followed by selection and milestone-based fund release." },
  ],
});
export const agriTechFundFaq = grantSchemeFaq(
  "Agri-Tech Fund Assistance",
  "Selected applicants may receive support of about Up to ₹35L, subject to evaluation and scheme guidelines.",
  "The Agri-Tech Fund Assistance eligibility framework is designed to prioritize startups with a proven \"Proof of Concept\" and a clear path to market entry. Meeting these requirements is a prerequisite before initiating the startup registration process. Agri-Tech Fund Assistance Eli",
  "Incorporation Proof: — Certificate of Incorporation and PAN card of the entity., DPIIT Recognition: — Mandatory Startup India certificate., Detailed Project Proposal: — Outlining the innovation, TRL level, and startup health metrics., Pitch Deck: — A high-quality presentation detailing the market opportunity and problem-solution fit. (See Grants for Ventures)..",
);

export const agrinextPage = createGrantProgramme({
  name: "AgriNext",
  eyebrow: "Kerala Agri-Tech",
  kicker: "Grant & Incubation for Agri-Tech Startups",
  intro: "AgriNext is a strategic innovation-focused initiative designed by KSUM to fund, mentor, and incubate 150 agri‑tech startups. The program targets startups that can drive real impact for small and marginal farmers, Farmer Producer Organizations (FPOs), and allied enterprises. Unlike a standard without security business loan, which focuses on debt repayment, the AgriNext Scheme provides non-refundable grant money to fuel research, development, and initial market pilots. The initiative works in syne",
  funding: "Up to ₹25L",
  eligibility: "The AgriNext eligibility framework is strictly defined to identify startups with high technical feasibility and market scalability. Meeting these requirements is the first step before initiating the startup registration process in the state. AgriNext Eligibility Table; Entity Type: Must be a registered Private Limited Company, LLP, or Partnership.; Sector Focus: Must be an active Agri-Tech Startup impacting farmers, ",
  benefits: ["1\\. Substantial Financial Grant Support", "2\\. Structured Incubation & Mentorship", "3\\. Real-World Field Validation", "4\\. Global Ecosystem Access"],
  documents: ["Incorporation Documents: — Certificate of Incorporation, MoA, and AoA. (Refer to minimum capital requirement for LLP).", "Startup Recognition: — Mandatory Startup India certificate or KSUM ID.", "Pitch Deck: — A high-quality presentation detailing the problem, technical solution, pilot plan, and startup health. (See our guide on Grants for Ventures).", "Financial Records: — Audited statements or ITRs for the last 1-2 years (for existing units).", "TRL Proof: — Evidence of existing prototype, pilot results, or farmer testimonials (videos/photos).", "Founder KYC: — Aadhaar and PAN of all directors/partners.", "MSME Certificate: — Valid MSME certification (Udyam)."],
  process: [
    { title: "Self-Audit", text: "Ensure your entity meets the AgriNext eligibility norms for registration and stage." },
    { title: "Technical Preparation", text: "Refine your pitch deck to highlight farmer-centric impact and technical novelty." },
    { title: "Online Submission", text: "Apply through the official Kerala Startup Mission portal and upload all Documents required for AgriNext." },
    { title: "Preliminary Review", text: "A technical committee reviews the innovation's feasibility and TRL level." },
    { title: "Selection Pitch", text: "Shortlisted founders present their scalability plan to an expert jury of agronomists and investors." },
    { title: "Onboarding", text: "Winners sign the grant agreement and begin their structured incubation journey." },
  ],
});
export const agrinextFaq = grantSchemeFaq(
  "AgriNext",
  "Selected applicants may receive support of about Up to ₹25L, subject to evaluation and scheme guidelines.",
  "The AgriNext eligibility framework is strictly defined to identify startups with high technical feasibility and market scalability. Meeting these requirements is the first step before initiating the startup registration process in the state. AgriNext Eligibility Table; Entity Typ",
  "Incorporation Documents: — Certificate of Incorporation, MoA, and AoA. (Refer to minimum capital requirement for LLP)., Startup Recognition: — Mandatory Startup India certificate or KSUM ID., Pitch Deck: — A high-quality presentation detailing the problem, technical solution, pilot plan, and startup health. (See our guide on Grants for Ventures)., Financial Records: — Audited statements or ITRs for the last 1-2 years (for existing units)..",
);

export const lorealGreenPage = createGrantProgramme({
  name: "L'Oréal Green Sciences Incubator",
  eyebrow: "Green Beauty • Biotech",
  kicker: "Equity-Free Funding for Sustainable Beauty",
  intro: "The L'Oréal Green Sciences Incubator, run by L'Oréal Research & Innovation (R&I) in partnership with Genopole, supports entrepreneurs building sustainable beauty and personal care products using green chemistry and biotechnology. It connects early-stage science with real market opportunities. Selected startups receive equity-free funding up to €100,000 (~₹90 Lakhs), access to Genopole's biotech laboratories, direct mentorship from L'Oréal R&I scientists, and exposure to global beauty industry di",
  funding: "Up to €100K",
  eligibility: "The incubator targets technology-driven innovators in the beauty and personal care space with sustainable, science-backed solutions.; Innovation Focus: Technology-driven innovation in green chemistry, biotechnology, or sustainable sourcing applicable to cosmetics and personal care.; Development Stage: Early or growth-stage venture with a functional prototype at Technology Readiness Level (TRL) 5 or above.; Business R",
  benefits: ["Equity-Free Grant", "Genopole Lab Access", "L'Oréal Expert Mentorship", "Global Distribution Network", "Sustainability Credibility", "International Connections"],
  documents: ["-   Company Incorporation Certificate — -   Professional pitch deck outlining problem, solution, market, and traction", "-   Product demonstration or prototype materials (videos, photos, test data) — -   Founder and team biographical information", "-   Financial snapshots or funding history — -   Market entry and growth roadmap", "-   MSME (Udyam) certification — recommended for Indian applicants"],
  process: [
    { title: "Verify Eligibility", text: "Confirm your innovation is in green chemistry, biotech, or sustainable beauty at TRL 5 or above." },
    { title: "Prepare Documentation", text: "Assemble your pitch deck, prototype evidence, team bios, and financial overview." },
    { title: "Submit Application", text: "Apply through the program portal with all required documents and a clear technology description." },
    { title: "Screening Process", text: "L'Or\u00e9al R&I evaluates submissions on innovation merit, sustainability impact, and commercial applicability." },
    { title: "Selection & Onboarding", text: "Selected startups are notified and onboarded into the incubator with lab access, funding, and mentorship assignments." },
    { title: "Verify Eligibility", text: "Confirm your innovation is in green chemistry, biotech, or sustainable beauty at TRL 5 or above." },
  ],
});
export const lorealGreenFaq = grantSchemeFaq(
  "L'Oréal Green Sciences Incubator",
  "Selected applicants may receive support of about Up to €100K, subject to evaluation and scheme guidelines.",
  "The incubator targets technology-driven innovators in the beauty and personal care space with sustainable, science-backed solutions.; Innovation Focus: Technology-driven innovation in green chemistry, biotechnology, or sustainable sourcing applicable to cosmetics and personal car",
  "-   Company Incorporation Certificate — -   Professional pitch deck outlining problem, solution, market, and traction, -   Product demonstration or prototype materials (videos, photos, test data) — -   Founder and team biographical information, -   Financial snapshots or funding history — -   Market entry and growth roadmap, -   MSME (Udyam) certification — recommended for Indian applicants.",
);

export const csrFundPage = createGrantProgramme({
  name: "CSR Fund",
  eyebrow: "Social Impact Grants",
  kicker: "Grants & Mentorship for Mission-Driven Orgs",
  intro: "The CSR Fund is a long-term support program intended for early-stage but post-pilot organizations. Unlike a traditional without security business loan, which creates debt, this fund provides equity-free capital. The CSR Fund Scheme and the CSR Fund work together to provide:",
  funding: "Up to ₹2.63Cr",
  eligibility: "The CSR Fund eligibility and the CSR Fund Scheme requirements are specifically tailored for organizations that have moved past the ideation phase and have a proven \"proof of concept.\" This ensures that the capital is deployed toward ventures that have already demonstrated a measurable social or environmental impact and are ready for professional scaling. Before you apply for CSR fund support, ensure your organization",
  benefits: ["Significant Non-Refundable Capital", "Strategic Capacity Building", "Elite Mentorship", "Global Networking", "Credibility"],
  documents: ["To successfully apply for the CSR Fund Scheme, organizations must ensure the following Documents required for CSR Fund are professionally prepared:", "Executive Summary — A clear overview of the organization’s mission, operational strategy, and impact.", "Professional Pitch Deck — Detailing the approach, scalability potential, and social/environmental goals.", "Team Profiles — CVs of the leadership team highlighting relevant experience.", "Financial Projections — A 3-year budget and long-term sustainability plan.", "Impact Data — Audited evidence of past pilot programs and measurable outcomes.", "Registration Proof — Startup India registration certificate or NGO Registration papers (Trust/Society/Section 8).", "Tax Documents — Valid 12A and 80G certificates (for nonprofits)."],
  process: [
    { title: "Check Eligibility", text: "2" },
    { title: "Prepare Documents", text: "3" },
    { title: "Submit Online", text: "4" },
    { title: "Evaluation", text: "5" },
    { title: "Due Diligence", text: "6" },
    { title: "Selection", text: "1" },
  ],
});
export const csrFundFaq = grantSchemeFaq(
  "CSR Fund",
  "Selected applicants may receive support of about Up to ₹2.63Cr, subject to evaluation and scheme guidelines.",
  "The CSR Fund eligibility and the CSR Fund Scheme requirements are specifically tailored for organizations that have moved past the ideation phase and have a proven \"proof of concept.\" This ensures that the capital is deployed toward ventures that have already demonstrated a measu",
  "To successfully apply for the CSR Fund Scheme, organizations must ensure the following Documents required for CSR Fund are professionally prepared:, Executive Summary — A clear overview of the organization’s mission, operational strategy, and impact., Professional Pitch Deck — Detailing the approach, scalability potential, and social/environmental goals., Team Profiles — CVs of the leadership team highlighting relevant experience..",
);

export const cybersecurityKarnatakaPage = createGrantProgramme({
  name: "Cybersecurity Incentive Policy Karnataka",
  eyebrow: "Karnataka Cybersecurity",
  kicker: "Internship Incentives & R&D Funding",
  intro: "The Cybersecurity Incentive Policy is a strategic government framework designed to bridge the gap between academic learning and industry requirements. By providing financial incentives for hiring interns and direct grants for research and development, Karnataka aims to create a world-class cybersecurity ecosystem. This policy works in tandem with national initiatives such as the MSME Act and Startup India, offering specialized benefits that help startups mitigate the high costs of specialized ta",
  funding: "Up to ₹50L",
  eligibility: "To ensure the incentives reach the right companies, the state has established specific criteria. These standards ensure that only legally recognized, innovation-led entities are part of the program. Cybersecurity Incentive Policy Eligibility Table; Geography: Must be registered and headquartered in the state of Karnataka.; Business Type: Open to Startups, MSMEs, MNCs, and SMEs with active operations.; Registration: M",
  benefits: ["Manpower Scalability:", "Innovation Fuel:", "Institutional Credibility:", "Academic-Industry Linkage:", "Audit Readiness:"],
  documents: ["To successfully apply for Cybersecurity Incentive Policy, you must prepare a comprehensive set of documents depending on the sub-program:", "For Internship Claims: — -   KITS Registration: Proof of enrollment with the state IT department.", "-   Intern Details: List of interns with their Karnataka-based college certificates.", "-   Stipend Proof: CA-certified statement of stipends paid and bank transaction records.", "-   Completion Certificate: Issued by the company to the intern.", "-   Statutory Declaration: Confirming the internship activities were strictly in the cybersecurity domain.", "For R&D Funding: — -   Project Proposal: Detailed DPR outlining objectives and TRL (Technology Readiness Level). (See Grants for Ventures).", "-   DPIIT Recognition: Mandatory Startup India certificate."],
  process: [
    { title: "Registration", text: "Register your entity on the KITS (Karnataka Innovation and Technology Society) portal." },
    { title: "Selection of Program", text: "Choose between Internship, R&D, or Audit reimbursement." },
    { title: "Document Upload", text: "Attach all Documents required for Cybersecurity Incentive Policy." },
    { title: "Technical Evaluation", text: "A committee of cybersecurity experts reviews the technical merit of your R&D or intern work." },
    { title: "Tranche Approval", text: "For R&D, a phased release plan is agreed upon based on milestones." },
    { title: "Disbursement", text: "Funds are released directly to the business account after CA verification." },
  ],
});
export const cybersecurityKarnatakaFaq = grantSchemeFaq(
  "Cybersecurity Incentive Policy Karnataka",
  "Selected applicants may receive support of about Up to ₹50L, subject to evaluation and scheme guidelines.",
  "To ensure the incentives reach the right companies, the state has established specific criteria. These standards ensure that only legally recognized, innovation-led entities are part of the program. Cybersecurity Incentive Policy Eligibility Table; Geography: Must be registered a",
  "To successfully apply for Cybersecurity Incentive Policy, you must prepare a comprehensive set of documents depending on the sub-program:, For Internship Claims: — -   KITS Registration: Proof of enrollment with the state IT department., -   Intern Details: List of interns with their Karnataka-based college certificates., -   Stipend Proof: CA-certified statement of stipends paid and bank transaction records..",
);

export const earlyStageGrantPage = createGrantProgramme({
  name: "Early-Stage Startup Grant",
  eyebrow: "Incubation & Mentorship",
  kicker: "Funding to Grow Early-Stage Startups",
  intro: "The Early-Stage Startup Grant is a financial assistance initiative aimed at nurturing and scaling startups that possess innovative ideas but lack the capital for execution. Unlike a traditional without security business loan, which is a debt-based instrument requiring repayment, a grant is typically non-repayable and equity-free. The Early-Stage Startup Grant Scheme focuses on \"high-risk, high-reward\" innovations—those that might be too early for venture tech funding but have a high potential fo",
  funding: "₹5L–₹1Cr",
  eligibility: "The Early-Stage Startup Grant eligibility framework is strictly defined to identify the most promising ventures. Whether you are building an AI tool or a new medical device, meeting these standards is a prerequisite for any business registration seeking institutional support. Early-Stage Startup Grant Eligibility Table; Startup Stage: Early-stage: Must have at least a Proof of Concept (PoC) or a validated MVP.; Legal",
  benefits: ["1\\. Substantial Financial Support", "2\\. Elite Mentorship", "3\\. Structured Incubation", "4\\. Investor Networking", "5\\. Global Visibility"],
  documents: ["DPIIT Recognition Certificate: — Proof of being a recognized \"Startup\" by the Government of India.", "Incorporation Proof: — Certificate of Incorporation, MoA, and AoA. (Refer to minimum capital requirement for LLP).", "MSME Certificate: — Valid MSME certification (Udyam).", "Comprehensive Pitch Deck: — Must detail the problem, solution, market size, business model, and startup health.", "Technical Whitepaper: — Detailing the TRL (Technology Readiness Level) and proof of concept.", "Financial Statements: — Balance sheets and P&L for the last year (if applicable) or a 12-month financial projection.", "Team Profiles: — Bios of founders and core technical leads highlighting expertise.", "IP Documentation: — Copies of patents filed or trademarks obtained (if any)."],
  process: [
    { title: "Self-Assessment", text: "Ensure your entity meets the Early-Stage Startup Grant eligibility norms for age and sector." },
    { title: "Technical Preparation", text: "Refine your pitch deck and record a product demo video." },
    { title: "Online Submission", text: "Apply through the official Startup India portal or the specific hub website (e.g., NIDHI PRAYAS Grant)." },
    { title: "Preliminary Screening", text: "A committee reviews your tech-led solution and business eligibility." },
    { title: "Pitching & Interaction", text: "Shortlisted founders present their roadmap to an expert jury." },
    { title: "Selection & Funding", text: "Once approved, grant tranches are released based on achieved technical milestones." },
  ],
});
export const earlyStageGrantFaq = grantSchemeFaq(
  "Early-Stage Startup Grant",
  "Selected applicants may receive support of about ₹5L–₹1Cr, subject to evaluation and scheme guidelines.",
  "The Early-Stage Startup Grant eligibility framework is strictly defined to identify the most promising ventures. Whether you are building an AI tool or a new medical device, meeting these standards is a prerequisite for any business registration seeking institutional support. Ear",
  "DPIIT Recognition Certificate: — Proof of being a recognized \"Startup\" by the Government of India., Incorporation Proof: — Certificate of Incorporation, MoA, and AoA. (Refer to minimum capital requirement for LLP)., MSME Certificate: — Valid MSME certification (Udyam)., Comprehensive Pitch Deck: — Must detail the problem, solution, market size, business model, and startup health..",
);

export const elevateNxtPage = createGrantProgramme({
  name: "ELEVATE NxT",
  eyebrow: "Karnataka Startup Accelerator",
  kicker: "Grant & Accelerator Support in Karnataka",
  intro: "The ELEVATE NxT program is a structured acceleration and investment vehicle aimed at nurturing startups that have moved beyond the ideation phase. Managed by the Department of Electronics, IT, Bt, and S&T, the program provides a comprehensive framework that includes financial investment, strategic mentorship, and elite ecosystem access. The ELEVATE NxT details highlight a focus on commercializing emerging technologies. Unlike a traditional without security business loan, which focuses on debt, t",
  funding: "Up to ₹1Cr",
  eligibility: "The ELEVATE NxT eligibility framework is strictly defined to ensure that the government grants for MSME and startups reach entities with demonstrable innovation and scalability. Meeting these standards is the first step in the startup registration process. ELEVATE NxT Eligibility Table; Entity Status: Must be a registered Private Limited Company, LLP, or Partnership.; Geography: Must be registered and headquartered i",
  benefits: ["1\\. Financial Benefits", "2\\. Strategic Mentorship", "3\\. Ecosystem & Market Access"],
  documents: ["To successfully apply for ELEVATE NxT, you must prepare a comprehensive professional file. The following Documents required for ELEVATE NxT are mandatory:", "Pitch Deck: — A detailed presentation covering the problem, technology, market fit, and traction. (See our guide on Grants for Ventures).", "Startup Affidavit: — Declaration on INR 100 stamped paper confirming eligibility.", "Incorporation Proof: — Certificate of Incorporation, MoA, and AoA.", "Revenue Certificate: — CA-certified revenue certificate for the previous financial year.", "DPIIT Recognition: — Mandatory Startup India registration certificate.", "IP Proof: — Copies of patents filed or trademarks obtained (if applicable).", "MSME Certificate: — Valid MSME certification (Udyam)."],
  process: [
    { title: "Document Prep", text: "2" },
    { title: "Online Registration", text: "3" },
    { title: "Portal Submission", text: "4" },
    { title: "Preliminary Screening", text: "5" },
    { title: "Final Pitch", text: "6" },
    { title: "Acceleration & Funding", text: "1" },
  ],
});
export const elevateNxtFaq = grantSchemeFaq(
  "ELEVATE NxT",
  "Selected applicants may receive support of about Up to ₹1Cr, subject to evaluation and scheme guidelines.",
  "The ELEVATE NxT eligibility framework is strictly defined to ensure that the government grants for MSME and startups reach entities with demonstrable innovation and scalability. Meeting these standards is the first step in the startup registration process. ELEVATE NxT Eligibility",
  "To successfully apply for ELEVATE NxT, you must prepare a comprehensive professional file. The following Documents required for ELEVATE NxT are mandatory:, Pitch Deck: — A detailed presentation covering the problem, technology, market fit, and traction. (See our guide on Grants for Ventures)., Startup Affidavit: — Declaration on INR 100 stamped paper confirming eligibility., Incorporation Proof: — Certificate of Incorporation, MoA, and AoA..",
);

export const empowerspherePage = createGrantProgramme({
  name: "EmpowerSphere Skilling & Livelihood Futures",
  eyebrow: "Social Impact Skilling",
  kicker: "Grants for Skilling & Livelihood Startups",
  intro: "The EmpowerSphere Skilling & Livelihood Futures initiative is designed to support both for-profit and non-profit ventures that aim to transform livelihoods and skill pathways. Unlike a traditional without security business loan, which focuses on commercial debt, this scheme provides non-dilutive grant capital to ensure that innovators can focus on deep-rooted social problems. The EmpowerSphere Skilling & Livelihood Futures Scheme emphasizes:",
  funding: "Up to ₹12.5L",
  eligibility: "The EmpowerSphere Skilling & Livelihood Futures eligibility framework is strictly defined to ensure that the grant reaches ventures with high potential for measurable impact. These standards ensure that only the most viable, innovation-driven projects are selected for the government grants for MSME. EmpowerSphere Eligibility Table; Legal Status: Must be a registered entity as a Private Limited, LLP, or Trust/Society/",
  benefits: ["1\\. Financial Support", "2\\. Mentorship & Advisory", "3\\. Ecosystem Access"],
  documents: ["Incorporation Proof: — Certificate of Incorporation or Trust Deed and PAN card.", "DPIIT Recognition: — Mandatory Startup India certificate (for startups).", "MSME Certificate: — Valid MSME certification (Udyam).", "Pitch Deck: — A detailed PDF outlining the problem, technology-driven solution, and business model. (See Grants for Ventures).", "Financial Statements: — Revenue statements, bank statements, or audited P&L accounts for the last 1 year.", "Team Profiles: — CVs of founders and key leadership highlighting technical and social impact expertise.", "Proof of Traction: — Letters of support from beneficiaries, partner MoUs, or existing revenue proofs.", "Technical roadmap: — Description of the Technology Readiness Level (TRL) for your platform."],
  process: [
    { title: "Self-Audit", text: "2" },
    { title: "Documentation", text: "3" },
    { title: "Portal Submission", text: "4" },
    { title: "Screening", text: "5" },
    { title: "Interview", text: "6" },
    { title: "Funding", text: "1" },
  ],
});
export const empowersphereFaq = grantSchemeFaq(
  "EmpowerSphere Skilling & Livelihood Futures",
  "Selected applicants may receive support of about Up to ₹12.5L, subject to evaluation and scheme guidelines.",
  "The EmpowerSphere Skilling & Livelihood Futures eligibility framework is strictly defined to ensure that the grant reaches ventures with high potential for measurable impact. These standards ensure that only the most viable, innovation-driven projects are selected for the governm",
  "Incorporation Proof: — Certificate of Incorporation or Trust Deed and PAN card., DPIIT Recognition: — Mandatory Startup India certificate (for startups)., MSME Certificate: — Valid MSME certification (Udyam)., Pitch Deck: — A detailed PDF outlining the problem, technology-driven solution, and business model. (See Grants for Ventures)..",
);

export const fintechChallengePage = createGrantProgramme({
  name: "Fintech Startup Challenge",
  eyebrow: "Fintech Innovation",
  kicker: "Funding & Mentorship for Fintech Solutions",
  intro: "The Fintech Startup Challenge is a competition designed to support early-stage fintech startups in India. The initiative provides funding, mentorship, and business support to startups working on innovative solutions in various fintech sectors.",
  funding: "Challenge",
  eligibility: "Company Type: DPIIT-recognized startups across India. - Private Limited Company, LLP, Partnership, or MSME (Proprietorship).; Innovation Focus: Startups must offer scalable, innovative solutions in fintech.; Stages of Development: Startups at Ideation, Validation, Early Traction, or Scaling stages.; Sector Focus: Startups focused on fintech, such as payments, digital lending, cybersecurity, blockchain, AI, etc.; Othe",
  benefits: ["Fiscal Incentives", "Follow-on Funding", "Mentorship", "Networking Opportunities", "Pilot Programs"],
  documents: ["Pitch Deck — A detailed presentation of your product, market opportunity, business model, and growth plans.", "Founders' Details — Background information, qualifications, and experience of the founding team.", "Registration Documents — Proof of DPIIT recognition, startup registration, and other legal documents.", "Financials — Balance Sheet, Profit & Loss account, and fund utilization breakdown.", "Proof of Innovation — Evidence of the scalability and technological aspect of your fintech solution."],
  process: [
    { title: "Prepare Documents", text: "Gather all necessary documents, including pitch deck, founder details, registration documents, financials, and proof of innovation." },
    { title: "Submit Application", text: "Fill out the online application form on the official portal and upload all prepared documents." },
    { title: "Application Review", text: "Your application will undergo an initial screening and evaluation by experts." },
    { title: "Shortlisting & Interviews", text: "If selected, you will receive funding and access to mentorship and support." },
    { title: "Final Selection & Funding", text: "Shortlisted applicants will be invited for an interview or pitch presentation." },
    { title: "Prepare Documents", text: "Gather all necessary documents, including pitch deck, founder details, registration documents, financials, and proof of innovation." },
  ],
});
export const fintechChallengeFaq = grantSchemeFaq(
  "Fintech Startup Challenge",
  "Selected applicants may receive support of about Challenge, subject to evaluation and scheme guidelines.",
  "Company Type: DPIIT-recognized startups across India. - Private Limited Company, LLP, Partnership, or MSME (Proprietorship).; Innovation Focus: Startups must offer scalable, innovative solutions in fintech.; Stages of Development: Startups at Ideation, Validation, Early Traction,",
  "Pitch Deck — A detailed presentation of your product, market opportunity, business model, and growth plans., Founders' Details — Background information, qualifications, and experience of the founding team., Registration Documents — Proof of DPIIT recognition, startup registration, and other legal documents., Financials — Balance Sheet, Profit & Loss account, and fund utilization breakdown..",
);

export const fundScYouthPage = createGrantProgramme({
  name: "Fund for SC Youth 2.0",
  eyebrow: "SC Entrepreneurship",
  kicker: "Grants & Incubation for SC Entrepreneurs",
  intro: "The Fund for SC Youth 2.0 is a government-backed initiative aimed at fostering innovation and high-impact entrepreneurship among SC youth. Executed through Sathyabama Technology Business Incubator (TBI), the program focuses on supporting early-stage startups and individual innovators who are committed to solving real-world problems.",
  funding: "Up to ₹30L",
  eligibility: "The Fund for SC Youth 2.0 eligibility has specific criteria that must be met to apply for funding and support. These standards ensure that the resources are channeled toward legally compliant and innovation-driven ventures led by the SC community. Fund for SC Youth 2.0 Eligibility Table; Applicant Profile: Must be an Indian citizen belonging to the Scheduled Caste (SC) category.; Shareholding: The startup must have a",
  benefits: ["1\\. Substantial Financial Support", "2\\. Elite Incubation & Mentorship", "3\\. Investor Readiness & Networking", "4\\. Impact Amplification"],
  documents: ["Identity Proof: — Aadhaar Card of the founders.", "Caste Certificate: — Valid certificate proving the lead applicant's SC status.", "Incorporation Docs: — Certificate of Incorporation, MoA, and AoA.", "DPIIT Recognition: — Mandatory Startup India certificate.", "Ownership Proof: — Shareholding pattern document showing at least 51% SC ownership.", "Pitch Deck: — A detailed presentation covering the problem, solution, and market traction (See our guide on Grants for Ventures).", "Financial Projections: — 3-year revenue forecast and financial statements.", "TRL Proof: — Description or video of the working prototype/MVP."],
  process: [
    { title: "Verify Eligibility", text: "2" },
    { title: "Prepare the Pitch", text: "3" },
    { title: "Online Submission", text: "4" },
    { title: "Preliminary Screening", text: "5" },
    { title: "Final Interview", text: "6" },
    { title: "Grant Approval.", text: "1" },
  ],
});
export const fundScYouthFaq = grantSchemeFaq(
  "Fund for SC Youth 2.0",
  "Selected applicants may receive support of about Up to ₹30L, subject to evaluation and scheme guidelines.",
  "The Fund for SC Youth 2.0 eligibility has specific criteria that must be met to apply for funding and support. These standards ensure that the resources are channeled toward legally compliant and innovation-driven ventures led by the SC community. Fund for SC Youth 2.0 Eligibilit",
  "Identity Proof: — Aadhaar Card of the founders., Caste Certificate: — Valid certificate proving the lead applicant's SC status., Incorporation Docs: — Certificate of Incorporation, MoA, and AoA., DPIIT Recognition: — Mandatory Startup India certificate..",
);

export const fundForUpPage = createGrantProgramme({
  name: "Fund for UP",
  eyebrow: "StartInUP",
  kicker: "Seed Grant & Marketing Capital for UP Startups",
  intro: "The Fund for UP is an equity-free funding program aimed at nurturing early-stage startups registered within the state. Unlike a traditional without security business loan, which creates immediate debt repayment pressure, this initiative provides non-repayable grant capital. The Fund for UP Scheme utilizes a milestone-linked disbursement model. This means that funds are released progressively as the startup achieves predetermined technical and operational objectives. This structure ensures that c",
  funding: "Up to ₹7.5L",
  eligibility: "The Fund for UP eligibility framework is strictly defined to identify startups that are legally compliant and have a high potential for commercialization. Meeting these standards is a prerequisite for any business registration seeking state support. Fund for UP Eligibility Table; Entity Status: Must be registered as a Private Limited Company or LLP.; Geography: Headquartered and primarily operating within Uttar Prade",
  benefits: ["1\\. Financial Benefits", "Women Founders:", "Special Regions:", "Priority Sectors:", "2\\. Non-Financial Benefits", "Elite Mentorship:"],
  documents: ["StartInUP Certificate: — Proof of startup recognition on the state portal.", "Incorporation Documents: — Certificate of Incorporation, MoA, and AoA (or Partnership Deed for LLPs).", "Incubation Proof: — Agreement with a recognized incubator or an official association letter.", "Detailed Project Report (DPR): — A technical whitepaper outlining milestones, KPIs, and fund utilization.", "Pitch Deck: — A high-quality presentation detailing the innovation and scalability. (See Grants for Ventures).", "Financial Projections: — 3-year roadmap showing how the grant will fuel growth.", "Founder Identity Proof: — Aadhaar and PAN cards of all primary founders.", "MSME Certificate: — Valid MSME certification (Udyam)."],
  process: [
    { title: "Portal Registration", text: "2" },
    { title: "Incubator Affiliation", text: "3" },
    { title: "Define Milestones", text: "4" },
    { title: "Online Submission", text: "5" },
    { title: "Preliminary Screening", text: "6" },
    { title: "Technical Pitch", text: "1" },
  ],
});
export const fundForUpFaq = grantSchemeFaq(
  "Fund for UP",
  "Selected applicants may receive support of about Up to ₹7.5L, subject to evaluation and scheme guidelines.",
  "The Fund for UP eligibility framework is strictly defined to identify startups that are legally compliant and have a high potential for commercialization. Meeting these standards is a prerequisite for any business registration seeking state support. Fund for UP Eligibility Table;",
  "StartInUP Certificate: — Proof of startup recognition on the state portal., Incorporation Documents: — Certificate of Incorporation, MoA, and AoA (or Partnership Deed for LLPs)., Incubation Proof: — Agreement with a recognized incubator or an official association letter., Detailed Project Report (DPR): — A technical whitepaper outlining milestones, KPIs, and fund utilization..",
);

export const taxExemptionCertificatePage = {
  eyebrow: "Tax & Compliance • Startups • Section 80IAC",
  heading: "Tax Exemption Certificate",
  kicker: "Complete Guide for Startups & Businesses",
  intro:
    "Get up to 100% tax exemption for three consecutive years under Section 80IAC. Understand eligibility, required documents and the complete application process for DPIIT-recognised startups.",
  cta: "Check Your Eligibility",
  imageAlt: "Startup founders reviewing Section 80IAC tax exemption documents",
  stats: [
    { value: "100%", label: "Tax Exemption (Section 80IAC)" },
    { value: "3 Years", label: "Consecutive Holiday Period" },
    { value: "₹100Cr", label: "Max Annual Turnover Limit" },
    { value: "0%", label: "Tax on Qualifying Profits" },
  ] as const,
  unlock: {
    eyebrow: "Scheme Overview",
    heading: "What is a Tax Exemption Certificate?",
    paragraphs: [
      "A tax exemption certificate is an official document issued by tax authorities, certifying that an entity or individual is eligible for certain tax exemptions. For businesses and startups, this certificate can drastically reduce the amount of tax owed to the government, particularly in the early stages of growth.",
      "In India, one of the most beneficial tax exemption schemes for startups is under Section 80IAC of the Income Tax Act, which allows eligible startups to avail up to 100% tax exemption for three consecutive years within the first ten years of incorporation.",
      "This guide covers everything you need to know about obtaining a tax exemption certificate for your startup or business (Pvt Ltd and LLP), including eligibility, application process, benefits and required documents.",
    ],
    benefitsHeading: "Key requirements at a glance",
    benefits: [
      "DPIIT-recognised startup — mandatory first step",
      "Incorporated after 1st April 2016",
      "Pvt Ltd or LLP entity type",
      "Annual turnover below ₹100 crore",
    ],
  },
  benefits: {
    eyebrow: "What You Unlock",
    heading: "Benefits of the Section 80IAC Tax Exemption",
    sub: "Income-tax relief that improves early-stage cash flow and investor readiness.",
    items: [
      {
        title: "100% Tax Holiday",
        text: "Complete exemption from income tax on profits for any three consecutive years chosen within the first ten years of incorporation.",
        icon: "wallet" as const,
      },
      {
        title: "No Minimum Alternate Tax (MAT)",
        text: "Startups recognised under this scheme are also exempt from MAT provisions during the holiday period.",
        icon: "shield" as const,
      },
      {
        title: "Improves Cash Flow",
        text: "Tax savings can be reinvested into product development, hiring and scaling — critical in the early growth phase.",
        icon: "zap" as const,
      },
      {
        title: "Flexible Year Selection",
        text: "Startups can choose which three consecutive years to apply the exemption within the first decade, allowing strategic financial planning.",
        icon: "send" as const,
      },
      {
        title: "Enhanced Investor Confidence",
        text: "DPIIT recognition required for this certificate signals credibility to VCs, angels and institutional investors.",
        icon: "users" as const,
      },
      {
        title: "Stacks with Other Schemes",
        text: "The tax exemption can be combined with CGTMSE collateral-free loans, SISFS grants and other government support schemes.",
        icon: "rocket" as const,
      },
    ],
  },
  eligibility: {
    eyebrow: "Who Qualifies",
    heading: "Eligibility Criteria for Section 80IAC",
    sub: "To qualify for a tax exemption certificate under Section 80IAC, the following conditions must be fulfilled:",
    leftHeading: "Recognition & Entity",
    rightHeading: "Limits & Structure",
    items: [
      {
        title: "DPIIT Recognition",
        text: "The startup must be recognised by DPIIT. Recognition must be obtained before claiming the exemption.",
        icon: "chip" as const,
      },
      {
        title: "Incorporation Date",
        text: "The startup must have been incorporated after 1st April 2016. Businesses incorporated before this date are not eligible under Section 80IAC.",
        icon: "clipboard" as const,
      },
      {
        title: "Eligible Entity Types",
        text: "Only Private Limited Companies and LLPs are eligible. Partnership firms, sole proprietorships and public companies do not qualify.",
        icon: "factory" as const,
      },
      {
        title: "Annual Turnover Limit",
        text: "The business must not exceed ₹100 crore in annual turnover in any financial year since incorporation.",
        icon: "wallet" as const,
      },
      {
        title: "Tax Holiday Period",
        text: "The exemption covers any three consecutive years within the first ten years from the year of incorporation.",
        icon: "zap" as const,
      },
      {
        title: "No Splitting of Business",
        text: "The startup must not have been formed by splitting up or reconstruction of an existing business. It must be a genuinely new enterprise.",
        icon: "shield" as const,
      },
    ],
  },
  process: {
    eyebrow: "How to Apply",
    heading: "How to Apply for a Tax Exemption Certificate",
    sub: "From DPIIT recognition to IMB approval and claiming the exemption in your ITR.",
    steps: [
      {
        title: "Obtain DPIIT Recognition",
        text: "Register on the Startup India portal and get your DPIIT recognition number — this is mandatory before applying for Section 80IAC.",
      },
      {
        title: "Prepare Your Documents",
        text: "Compile MoA/LLP Deed, audited financials, ITR acknowledgments and the startup video as per DPIIT guidelines.",
      },
      {
        title: "Submit Application",
        text: "File the application through the Startup India portal. The Inter-Ministerial Board (IMB) reviews applications for eligibility.",
      },
      {
        title: "IMB Review",
        text: "The Inter-Ministerial Board evaluates the application based on innovation, scalability and job creation potential.",
      },
      {
        title: "Certificate Issued",
        text: "On approval, the IMB issues a certificate of eligibility, after which you can claim the exemption in your Income Tax Return.",
      },
    ],
  },
  documents: {
    eyebrow: "Paperwork",
    heading: "Required Documents",
    note: "Vikas Bharat can help organise a complete DPIIT and Section 80IAC documentation file.",
    items: [
      "DPIIT recognition certificate and Certificate of Incorporation",
      "Memorandum of Association (MoA) or LLP Deed",
      "Audited financial statements for all years since incorporation",
      "Income Tax Return (ITR) acknowledgment for relevant assessment years",
      "Board resolution authorizing the application",
      "A short video (up to 2 minutes) describing your startup's product, innovation and business model",
      "Shareholding pattern confirming ≥51% Indian promoter ownership",
    ],
    cta: "Download For More",
  },
} as const;

export const taxExemptionCertificateFaq = {
  heading: "Frequently Asked Questions",
  sub: "Section 80IAC eligibility, documents, validity and common filing mistakes.",
  items: [
    {
      question: "What is a tax exemption certificate?",
      answer:
        "A tax exemption certificate is a document issued by tax authorities, allowing an entity to be exempt from paying certain taxes. For startups, Section 80IAC offers tax exemptions for up to three consecutive years.",
    },
    {
      question: "Who is eligible for a tax-exempt certificate?",
      answer:
        "Eligibility includes startups recognised by DPIIT, incorporated after 1 April 2016 and operating as Pvt Ltd or LLP entities with turnover under ₹100 crore.",
    },
    {
      question: "How do I apply for a tax exemption certificate?",
      answer:
        "Obtain DPIIT recognition, prepare necessary documents (MoA, audited reports and related proofs), and submit the application via the Startup India portal for Inter-Ministerial Board review.",
    },
    {
      question: "What documents do I need for a tax-exempt certificate?",
      answer:
        "You will need your company's MoA/LLP Deed, audited financial statements, ITR acknowledgment, DPIIT recognition, shareholding pattern and a short video describing your startup.",
    },
    {
      question: "How long is a tax exemption certificate valid?",
      answer:
        "The certificate covers any three consecutive years within the first ten years of incorporation, after which no renewal is allowed under Section 80IAC.",
    },
    {
      question: "Are there different types of exemption certificates?",
      answer:
        "Yes, there are various exemption certificates including those for resale, nonprofit organisations and manufacturing. Section 80IAC specifically covers income tax exemption for eligible startups.",
    },
    {
      question: "What are common mistakes when using tax exemption certificates?",
      answer:
        "Common mistakes include incorrect documentation, missing the filing deadline in the ITR, using the exemption in a year when the startup crossed the ₹100 crore turnover limit, and not maintaining audited records.",
    },
  ],
} as const;

export const startupIndiaEligibilityPage = {
  eyebrow: "Startup Schemes • DPIIT Recognition",
  heading: "Startup India Scheme Eligibility",
  kicker: "2026 Revised Criteria",
  intro:
    "The Government of India has revised the Startup India recognition framework to be more inclusive and future-ready. Understand who qualifies, what has changed and how the revised criteria benefit startups across sectors.",
  cta: "Check Your Eligibility",
  imageAlt: "Founders reviewing Startup India DPIIT recognition eligibility",
  stats: [
    { value: "₹200Cr", label: "New Turnover Limit (Regular Startups)" },
    { value: "₹300Cr", label: "Turnover Limit for Deep Tech" },
    { value: "20 Years", label: "Age Limit for Deep Tech Startups" },
    { value: "10 Years", label: "Age Limit for Regular Startups" },
  ] as const,
  unlock: {
    eyebrow: "Scheme Overview",
    heading: "What is Startup India Scheme Eligibility?",
    paragraphs: [
      "Startup India scheme eligibility refers to the specific criteria defined by the Government of India for an entity to be recognised as a 'Startup' under the Startup India initiative, administered by the Department for Promotion of Industry and Internal Trade (DPIIT).",
      "Recognition under Startup India enables businesses to access tax exemptions under Section 80IAC, collateral-free loans through CGTMSE and CGSS, government procurement preferences, faster IP support and a simplified compliance environment.",
      "The revised framework expands eligibility to support businesses at different maturity levels — especially research-heavy deep tech startups and cooperative-led innovation models, reflecting how the ecosystem has matured.",
    ],
    benefitsHeading: "Key requirements at a glance",
    benefits: [
      "Incorporated as Pvt Ltd, LLP, Partnership Firm or Cooperative",
      "Annual turnover below ₹200 crore (₹300 crore for Deep Tech)",
      "Age ≤10 years (≤20 years for Deep Tech from incorporation)",
      "Working on innovation, improvement or a scalable model",
    ],
  },
  benefits: {
    eyebrow: "What Changed",
    heading: "Why the 2026 Revision Matters",
    sub: "Higher limits, Deep Tech recognition and cooperative inclusion unlock longer access to Startup India benefits.",
    items: [
      {
        title: "Higher Turnover Ceiling",
        text: "Annual turnover limit raised from ₹100 crore to ₹200 crore for regular startups, and ₹300 crore for Deep Tech — allowing fast-growing startups to retain recognition longer.",
        icon: "wallet" as const,
      },
      {
        title: "Deep Tech Category",
        text: "A dedicated Deep Tech category for startups working on advanced science and R&D-intensive technologies with long development cycles — up to 20 years age and ₹300 crore turnover.",
        icon: "zap" as const,
      },
      {
        title: "Cooperative Entities Included",
        text: "Both Multi-State and State-registered Cooperative Societies are now eligible, promoting grassroots innovation, rural entrepreneurship and agri-business models.",
        icon: "users" as const,
      },
      {
        title: "Extended Age Limit",
        text: "Deep Tech startups can now be up to 20 years old from incorporation, acknowledging longer gestation before commercial scale.",
        icon: "send" as const,
      },
      {
        title: "Access to Collateral-Free Loans",
        text: "DPIIT recognition is the gateway to CGTMSE and CGSS collateral-free credit — making it easier to access business loans without security.",
        icon: "shield" as const,
      },
      {
        title: "Tax Holiday Eligibility",
        text: "Recognition enables application for Section 80IAC — up to 100% income tax exemption for three consecutive years within the first decade of incorporation.",
        icon: "landmark" as const,
      },
    ],
  },
  eligibility: {
    eyebrow: "Who Qualifies",
    heading: "Who Can Apply Under the Revised Framework",
    sub: "The 2026 revision expanded who qualifies. Here are the updated criteria:",
    leftHeading: "Entity & Limits",
    rightHeading: "Innovation & Structure",
    items: [
      {
        title: "Entity Type",
        text: "Private Limited Companies, LLPs, Partnership Firms and Multi-State or State-registered Cooperative Societies are all eligible.",
        icon: "factory" as const,
      },
      {
        title: "Annual Turnover",
        text: "Must not exceed ₹200 crore in any financial year since incorporation. For Deep Tech startups, the limit is ₹300 crore.",
        icon: "wallet" as const,
      },
      {
        title: "Age Limit",
        text: "Must not be older than 10 years from incorporation. For Deep Tech startups working on science-based, R&D-intensive technologies, the limit is extended to 20 years.",
        icon: "clipboard" as const,
      },
      {
        title: "Innovation Focus",
        text: "The startup must work towards innovation, improvement of existing products/services, or a scalable business model with high employment or wealth-creation potential.",
        icon: "chip" as const,
      },
      {
        title: "Not Formed by Splitting",
        text: "Must not have been formed by splitting up or reconstruction of an existing business — it must be a genuinely new enterprise.",
        icon: "shield" as const,
      },
      {
        title: "Deep Tech Qualification",
        text: "Startups working on advanced, science-based, R&D-intensive technologies with long development cycles qualify for the Deep Tech category with extended limits.",
        icon: "lab" as const,
      },
    ],
  },
  process: {
    eyebrow: "How to Apply",
    heading: "How to Get DPIIT Recognition",
    sub: "Register on the Startup India portal, self-certify eligibility and unlock scheme benefits.",
    steps: [
      {
        title: "Register on Startup India Portal",
        text: "Create an account at startupindia.gov.in and log in to the recognition application.",
      },
      {
        title: "Fill the Application",
        text: "Provide entity details, describe your innovation and upload supporting documents.",
      },
      {
        title: "Self-Certify Eligibility",
        text: "Confirm that you meet the revised eligibility criteria including entity type, turnover, age and innovation-driven model.",
      },
      {
        title: "Submit and Wait",
        text: "Applications are processed by DPIIT. Recognition is typically granted within a few weeks for straightforward cases.",
      },
      {
        title: "Access Benefits",
        text: "Use your DPIIT recognition number to apply for Section 80IAC, CGTMSE, SISFS, government procurement preferences and more.",
      },
    ],
  },
  documents: {
    eyebrow: "Paperwork",
    heading: "Documents for DPIIT Recognition",
    note: "Vikas Bharat can help organise a complete Startup India recognition file.",
    items: [
      "Certificate of Incorporation or Registration Certificate",
      "PAN card of the entity",
      "Details of directors/partners/promoters with Aadhaar and PAN",
      "Brief description of the business, product/service and innovation",
      "Website URL or product demo link (if available)",
      "Proof of funding received (if any) — angel, VC or government grants",
      "Audited financial statements (if the entity is more than 1 year old)",
    ],
    cta: "Download For More",
  },
} as const;

export const startupIndiaEligibilityFaq = {
  heading: "Frequently Asked Questions",
  sub: "2026 revised turnover and age limits, Deep Tech, cooperatives and recognition benefits.",
  items: [
    {
      question: "What is the new turnover limit under Startup India scheme eligibility?",
      answer:
        "The turnover limit has been increased to ₹200 crore for regular startups and ₹300 crore for Deep Tech startups under the 2026 revised framework.",
    },
    {
      question: "What is the age limit for Deep Tech startups?",
      answer:
        "Deep Tech startups can be up to 20 years old from incorporation. Regular startups must be within 10 years of incorporation to be eligible.",
    },
    {
      question: "Are cooperative societies eligible under Startup India scheme?",
      answer:
        "Yes, both Multi-State and State-registered Cooperative Societies are now eligible under the 2026 revised framework — a significant expansion from the earlier criteria.",
    },
    {
      question: "What qualifies a startup as Deep Tech?",
      answer:
        "Startups working on cutting-edge, science-based, R&D-intensive technologies with long development cycles qualify as Deep Tech under the revised framework.",
    },
    {
      question: "Can I get a collateral-free business loan after getting recognized?",
      answer:
        "Yes, DPIIT recognition is the key requirement for applying for a collateral-free loan through the CGTMSE or CGSS schemes.",
    },
    {
      question: "Does recognition under Startup India give tax benefits?",
      answer:
        "Yes, DPIIT recognition is the prerequisite for applying for Section 80IAC — 100% income tax exemption for three consecutive years within the first ten years of incorporation.",
    },
  ],
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
    { value: "Noida", label: "Walk-in office" },
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
  body: "We track every rupee sanctioned, every licence issued, and every first reply. These figures update from live case work at our Noida desk and across India.",
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
  heading: "Recognition Numbers That Matter.",
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
    { id: "delhi", name: "Noida", x: 187, y: 205, office: true, label: "right" },
    { id: "jaipur", name: "Jaipur", x: 155, y: 235, office: false, label: "right" },
    { id: "ahmedabad", name: "Ahmedabad", x: 88, y: 300, office: false, label: "right" },
    { id: "mumbai", name: "Mumbai", x: 118, y: 405, office: false, label: "right" },
    { id: "hyderabad", name: "Hyderabad", x: 228, y: 455, office: false, label: "right" },
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
  heading: "Spin the Seal. Lock a Mandate.",
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
  eyebrow: "Company Introduction",
  heading: "Who We Are. What We Do. Who We Help.",
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
      text: "Client-reviewed desk presence at our Noida walk-in office.",
      image: photos.badgeRating,
    },
    {
      id: "cities",
      label: "Noida Walk-in Desk",
      text: "1st floor, F-5, C Block, Sector 63, Noida — a real room, not a call centre only.",
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
  heading: "Ek Jagah, Har Madad.",
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
      feature: "Walk-in office in Noida",
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
  heading: "4 Kadam, Poora Kaam.",
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
  heading: "Challenge → Solution → Paisa.",
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
  heading: "Unki Kahani, Unki Zubaani.",
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
  heading: "Topics Founders Search For — Explained Clearly.",
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
  heading: "Sawal Jo Har Founder Poochta Hai",
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
  heading: "Sawal Jo Har Founder Poochta Hai",
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
  heading: "Aaj Hi Shuru Karo.",
  sub: "Ek free call. Koi obligation nahi. Eligibility, scheme fit, aur next documents — 2 minute mein clear.",
  primary: "WhatsApp Par Baat Karo",
  secondary: site.phoneDisplay,
} as const;

export const footer = {
  companyName: site.companyName,
  tagline: site.tagline,
  overview:
    "Pan-India business help desk for registration, GST, MSME/Udyam, loans, government schemes, FSSAI, ISO, and growth advisory — bilingual and WhatsApp-first.",
  offices: site.offices,
  disclaimer: site.disclaimer,
  map: { src: photos.footerCity, alt: "Noida office location" },
} as const;
