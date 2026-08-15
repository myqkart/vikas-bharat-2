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
      label: "Connect Toll-Free",
      text: "Connect with us toll-free for expert guidance and support",
      number: "1800 296 1424",
      href: "tel:18002961424",
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
        text: "Technology-driven Women Entrepreneurs Empowerment Scheme designed to support women-led startups with financial assistance, mentorship, and business growth resources.",
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
        href: "/services/loan",
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
        href: "/services/grant",
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
