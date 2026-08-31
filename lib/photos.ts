/** Curated Unsplash photography — premium, bright, business-relevant */
const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const photos = {
  heroBackground: "/hero/vikas-bharat-growth.png",
  heroShopkeeper: u("photo-1556742049-0cfed4f6a45d", 1600), // retail / shop
  heroMeeting: u("photo-1556761175-b413da4baf72", 1200), // consulting meeting
  badgeMsme: u("photo-1450101499163-c8848c66ca85", 400), // documents
  badgeIso: u("photo-1563986768609-322da13575f3", 400), // certificate vibe
  badgeGovt: u("photo-1521791136064-7986c2920216", 400), // handshake
  badgeRating: u("photo-1556745757-8d76bdb6984b", 400), // happy customer
  aboutTeam: u("photo-1522071820081-009f0129c71c", 1400),
  aboutOffice: u("photo-1497366216548-37526070297c", 1200),
  aboutMission: u("photo-1460925895917-afdab827c52f", 1000),
  /** About hero — documentary opening scene (distinct from Mission collage) */
  aboutHeroPortrait: "/about-page/hero-1.jpg", // walk-in consult energy
  aboutHeroMarket: "/about-page/hero-2.jpg", // retail entrepreneur at counter
  aboutHeroCity: "/about-page/hero-3.jpg", // Indian city / place
  aboutHeroDocs: u("photo-1450101499163-c8848c66ca85", 800), // filings / paperwork
  aboutHeroLeader: u("photo-1573497019940-1c28c88b4f3e", 900), // leadership presence
  /** About Mission — path story (distinct from Hero collage) */
  aboutMissionPurpose: u("photo-1540910419892-4a36d2c3266c", 1100), // proud local merchant / purpose
  aboutMissionServe: u("photo-1578916171728-46686eac8d58", 1000), // local commerce / who we serve
  aboutMissionAction: u("photo-1600880292089-90a7e086ee0c", 1000), // walk-in guidance in action
  aboutMissionClear: u("photo-1554224154-26032ffc0d07", 900), // filings / what we clear
  aboutMissionHorizon: u("photo-1522441815192-d9f04eb0615c", 1200), // forward planning / future
  serviceRegistration: u("photo-1454165804606-c3d57bc86b40", 1000),
  serviceLoan: u("photo-1554224155-6726b3ff858f", 1000),
  serviceGrant: u("photo-1553729459-efe14ef6055d", 1000),
  serviceCertificate: u("photo-1589829545856-d10d557cf95f", 1000),
  serviceGrowth: u("photo-1552664730-d307ca884978", 1000),
  serviceLegal: u("photo-1507679799987-c73779587ccf", 1000),
  processDiagram: "/process-diagram.png",
  stepCall: u("photo-1598257006458-087169a1f08d", 800),
  stepMatch: u("photo-1551836022-d5d88e9218df", 800),
  stepPaperwork: u("photo-1568992687947-868a62a9f521", 800),
  stepMoney: u("photo-1579621970795-87facc2f976d", 800),
  schemeMudra: u("photo-1554224154-26032ffc0d07", 1200),
  schemePmegp: u("photo-1581092160562-40aa08e78837", 1200),
  schemeStandup: u("photo-1573497019940-1c28c88b4f3e", 1200),
  schemeSeed: u("photo-1519389950473-47ba0277781c", 1200),
  schemeAgri: u("photo-1625246333195-78d9c38ad449", 1200),
  schemeHorticulture: u("photo-1464226184884-fa280b87c399", 1200),
  schemeGuarantee: u("photo-1450101499163-c8848c66ca85", 1200),
  schemeTax: u("photo-1554224155-8d04cb21cd6c", 1200),
  schemeVc: u("photo-1551836022-d5d88e9218df", 1200),
  schemeStartup: u("photo-1559136555-9303baea8ebd", 1200),
  schemeTech: u("photo-1518770660439-4636190af475", 1200),
  schemeMarine: u("photo-1507525428034-b723cf961d3e", 1200),
  schemePitch: u("photo-1551836022-4c4c79ecde51", 1200),
  schemeLab: u("photo-1581091226825-a6a2a5aee158", 1200),
  schemeSolar: u("photo-1497435334941-8c899ee9e8e9", 1200),
  caseFood: "/cases/food.jpg",
  caseHardware: "/cases/hardware.jpg",
  caseTailoring: "/cases/tailoring.jpg",
  personRitu: "/people/ritu.jpg",
  personManoj: "/people/manoj.jpg",
  personAsha: "/people/asha.jpg",
  seoCompany: u("photo-1486406146926-c627a92ad1ab", 1000),
  seoGst: u("photo-1554224155-8d04cb21cd6c", 1000),
  seoUdyam: u("photo-1581091226825-a6a2a5aee158", 1000),
  seoFssai: u("photo-1414235077428-338989a2e8c0", 1000),
  seoIso: u("photo-1454165804606-c3d57bc86b40", 1000),
  seoTrademark: u("photo-1450101499163-c8848c66ca85", 1000),
  footerCity: u("photo-1587474260584-136574528ed5", 1200),
  heroGlow: u("photo-1557804506-669a67965ba0", 1800),
  floatingUi: u("photo-1551288049-bebda4e38f71", 800),
  /** Credentials / recognition — editorial supporting frames */
  credentialShop: u("photo-1556740738-b6a63e27c4df", 1000), // retail entrepreneur
  credentialTeam: u("photo-1600880292089-90a7e086ee0c", 1000), // advisory desk meeting
  credentialGrowth: u("photo-1521791136064-7986c2920216", 1000), // partnership / growth
  /** Customer success stories — documentary business environments */
  storyFoodPrep: u("photo-1606787366850-de6330128bfc", 1200), // food prep / kitchen work
  storyFoodMarket: u("photo-1517248135467-4c7edcad34c4", 1200), // marketplace / listing ready
  storyHardwareShop: u("photo-1504917595217-d4dc5ebe6122", 1200), // tools / hardware context
  storyHardwareMachine: u("photo-1565043589221-1a6fd9ae45c7", 1200), // machinery / upgrade
  storyTailorWork: u("photo-1558171813-4c088753af8f", 1200), // sewing / garments
  storyTailorDetail: u("photo-1594938298603-c8148c4dae35", 800), // fabric / craft detail
  storyConsult: u("photo-1556761175-5973dc0f32e7", 1000), // walk-in consult energy
  /** About FAQ — clarity / consultation / documents */
  faqConsult: u("photo-1573164713714-d95e436ab8d6", 1000), // advisor guidance
  faqDocuments: u("photo-1554224154-26032ffc0d07", 1000), // paperwork / forms
  faqFounder: u("photo-1556155092-490a1ba16284", 1000), // founder deciding
  faqShop: u("photo-1556742049-0cfed4f6a45d", 1000), // small retail energy
  /** About page — services overview */
  aboutServiceGrants: u("photo-1553729459-efe14ef6055d", 1100),
  aboutServiceRegistration: u("photo-1454165804606-c3d57bc86b40", 1100),
  aboutServiceCerts: u("photo-1589829545856-d10d557cf95f", 1100),
  aboutServiceLoans: u("photo-1554224155-6726b3ff858f", 1100),
  aboutServiceMarketing: u("photo-1552664730-d307ca884978", 1100),
  aboutServiceLegal: u("photo-1507679799987-c73779587ccf", 1100),
  aboutServiceNbf: u("photo-1579621970795-87facc2f976d", 1100),
  /** About page — certifications */
  aboutCertIso: u("photo-1563986768609-322da13575f3", 900),
  aboutCertBis: u("photo-1450101499163-c8848c66ca85", 900),
  aboutCertFssai: u("photo-1414235077428-338989a2e8c0", 900),
  aboutCertTax: u("photo-1554224154-26032ffc0d07", 900),
  aboutCertZed: u("photo-1581092160562-40aa08e78837", 900),
  aboutCertOther: u("photo-1521791136064-7986c2920216", 900),
  /** About page — process / why choose */
  aboutProcessConsult: u("photo-1598257006458-087169a1f08d", 1000),
  aboutProcessMap: u("photo-1551836022-d5d88e9218df", 1000),
  aboutProcessDocs: u("photo-1568992687947-868a62a9f521", 1000),
  aboutProcessFile: u("photo-1454165804606-c3d57bc86b40", 1000),
  aboutProcessFollow: u("photo-1556761175-5973dc0f32e7", 1000),
  aboutProcessResult: u("photo-1556745757-8d76bdb6984b", 1000),
  aboutWhyDesk: u("photo-1600880292089-90a7e086ee0c", 1200),
  aboutWhyShop: u("photo-1556740738-b6a63e27c4df", 1000),
  aboutWhyCity: u("photo-1587474260584-136574528ed5", 1000),
  aboutIntroCrowd: u("photo-1529156069898-49953e39b3ac", 1100),
  aboutIntroWork: u("photo-1600880292203-757bb62b4baf", 1000),
  aboutIntroPortrait: u("photo-1573497019940-1c28c88b4f3e", 1000),
} as const;
