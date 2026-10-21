// Content framework and verified copy for The Rising Sindh website
// Revision: crisp, startup-first copy. Same interface as before — drop-in replacement.

export type Language = 'en' | 'sd' | 'ur';

export interface SiteContent {
  meta: {
    title: string;
    description: string;
    slogan: string;
    positioning: string;
  };
  nav: {
    home: string;
    whyWeExist: string;
    theModel: string;
    whatStudentsDo: string;
    theProof: string;
    globalBridge: string;
    sehwanCampus: string;
    theMovement: string;
    joinUs: string;
    visitCampus: string;
    bookVisit: string;
    curriculumMap: string;
    curriculumMapSub: string;
    theHeroTrackNav: string;
    theHeroTrackNavSub: string;
    studentIncubator: string;
    studentIncubatorSub: string;
    eveningAcademyNav: string;
    eveningAcademyNavSub: string;
  };
  common: {
    brandSubtitle: string;
    livingPrecedent: string;
    verifiedArchive: string;
    nationalStage: string;
    resultsSpeak: string;
    degreeUnemployment: string;
    degreeUnemploymentSub: string;
    siliconValleyRank: string;
    siliconValleyRankSub: string;
    boardProtected: string;
    boardProtectedSub: string;
    aiLab: string;
    biseMetric: string;
    shippedProof10Years: string;
    curriculumTrajectory: string;
    class1ToMatric: string;
    compoundingAdvantage: string;
    openWhatsAppChat: string;
    admissionsDeskOnline: string;
    admissionsDeskSub: string;
    done: string;
    close: string;
    apply: string;
    submit: string;
    fullName: string;
    fullNamePlaceholder: string;
    whatsAppNumber: string;
    childClass: string;
    workshopTrack: string;
    projectSummary: string;
    teachingPitch: string;
    submitRequest: string;
    registrationReceived: string;
    registrationReceivedDesc: string;
    validationName: string;
    validationPhone: string;
    nextSeatsLimited: string;
    elevation5688: string;
    makersInnovationHub: string;
    sehwanSharifLabel: string;
    whySehwanTitle: string;
    cityProjectsTitle: string;
    campusSpineTitle: string;
    partnersTitle: string;
    printMap: string;
    seeFutureLayerLive: string;
    systemComparisonMatrix: string;
    systemComparisonSub: string;
    howWeTeachTitle: string;
    howWeTeachSub: string;
    exploreTitle: string;
    programsTitle: string;
    valuesTitle: string;
    craftedWithPride: string;
    forSindhFuture: string;
    smallMediumEnterprises: string;
    sindhLocalEconomy: string;
    realWorldPractice: string;
    vocationalCareerPathways: string;
    nurseryMatricBise: string;
    heroTrackGorakhTreks: string;
    eveningCommunityAcademy: string;
    innovationLabBuilders: string;
    saturdayBuildDays: string;
    sehwanCampusLabNav: string;
    theMovementNav: string;
    bookCampusVisitTitle: string;
    saturdayBuildDayTitle: string;
    applyToTeachTitle: string;
    labBenchTitle: string;
    modalSubtitle: string;
    gradeNursery: string;
    grade1to3: string;
    grade4to5: string;
    grade6to7: string;
    grade8: string;
    grade9to10: string;
    trackAI: string;
    track3D: string;
    trackMedia: string;
    trackPitch: string;
    teachNotesPlaceholder: string;
    labBenchPlaceholder: string;
    stageSpecification: string;
    computingPillarTitle: string;
    entrepreneurshipPillarTitle: string;
    evidenceBehindNeed: string;
    problemStripTitle: string;
    problemStripHighlight: string;
    youthUnemploymentTitle: string;
    youthUnemploymentDesc: string;
    youthUnemploymentSource: string;
    instantProofTitle: string;
    instantProofDesc: string;
    instantProofSub: string;
    noMarketObsolescenceTitle: string;
    noMarketObsolescenceDesc: string;
    gorakhTrekTitle: string;
    investorPrecedent: string;
    lanePrefix: string;
    directVentureTrack: string;
    partnerVentureCta: string;
    positiveSindhDocNote: string;
    joinTheMovementCta: string;
    afterHoursEngine: string;
    alignedWithLabel: string;
    applyForBenchCta: string;
    fourDoorsSubtitle: string;
    forParentsBadge: string;
    forStudentsBadge: string;
    forTeachersBadge: string;
    forBuildersBadge: string;
    bookTourCta: string;
    registerBuildDayCta: string;
    teachersCardDesc: string;
    buildersCardDesc: string;
    whatsappParentsPrompt: string;
    faqTitle: string;
    faqSubtitle: string;
    bindingGovernanceTitle: string;
    bindingGovernanceDesc: string;
    sehwanLocation: string;
    whatsAppLabel: string;
  };
  proofStrip: {
    items: string[];
  };
  hero: {
    badge: string;
    title: string;
    highlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    statPills: { label: string; sub: string }[];
  };
  problemStrip: {
    tagline: string;
    conclusion: string;
    stats: {
      number: string;
      label: string;
      subtext: string;
      source: string;
    }[];
  };
  theTurn: {
    badge: string;
    title: string;
    description: string;
    breakdown: {
      title: string;
      desc: string;
      percent: string;
    }[];
  };
  fourEngines: {
    badge: string;
    title: string;
    subtitle: string;
    engines: {
      id: string;
      title: string;
      role: string;
      description: string;
      highlight: string;
    }[];
  };
  whatStudentsDo: {
    badge: string;
    title: string;
    intro: string;
    ladder: {
      age: string;
      grade: string;
      task: string;
      contrast: string;
    }[];
    comparison: {
      headers: [string, string];
      rows: { typical: string; rising: string }[];
    };
    closingNote: string;
  };
  theModel: {
    badge: string;
    title: string;
    openingPromise: string;
    promiseDetail: string;
    timelineStages: {
      grade: string;
      computing: string;
      entrepreneurship: string;
      milestone: string;
    }[];
    teachingPillars: {
      title: string;
      desc: string;
    }[];
  };
  smeEnterprises: {
    badge: string;
    title: string;
    subtitle: string;
    whatIsSmeTitle: string;
    whatIsSmeDesc: string;
    whyConnectTitle: string;
    whyConnectDesc: string;
    learningOutcomesTitle: string;
    learningOutcomes: {
      title: string;
      desc: string;
    }[];
    examplesTitle: string;
    examplesSubtitle: string;
    examples: {
      id: string;
      title: string;
      role: string;
      businessDoes: string;
      studentsLearn: string;
      tags: string[];
    }[];
  };
  heroTrack: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    features: {
      title: string;
      desc: string;
    }[];
    heroOath: {
      title: string;
      text: string;
    };
  };
  theProof: {
    badge: string;
    title: string;
    intro: string;
    investorTitle: string;
    investorDesc: string;
    stats: { number: string; label: string }[];
    whyItMatters: {
      title: string;
      desc: string;
    };
    founderQuote: {
      quote: string;
      name: string;
      role: string;
    };
    milestones: { year: string; stage: string; desc: string }[];
  };
  globalBridge: {
    badge: string;
    title: string;
    subtitle: string;
    lanes: {
      laneNumber: string;
      title: string;
      highlight: string;
      description: string;
    }[];
    closing: string;
    scholarshipHighlight: {
      badge: string;
      title: string;
      subtitle: string;
      description: string;
      points: string[];
      valueProposition: string;
    };
    internationalTripsHighlight: {
      badge: string;
      title: string;
      subtitle: string;
      description: string;
      points: string[];
      valueProposition: string;
    };
  };
  theMovement: {
    badge: string;
    title: string;
    inheritance: {
      title: string;
      desc: string;
    };
    globalVillage: {
      title: string;
      desc: string;
    };
    buildHere: {
      title: string;
      desc: string;
    };
    tenYearPicture: {
      title: string;
      desc: string;
      points: string[];
    };
    invitation: string;
  };
  sehwanCampus: {
    badge: string;
    title: string;
    whySehwan: string;
    cityProjects: string;
    campusSpine: string[];
    roadAhead: string;
    eveningAcademy: {
      title: string;
      opening: string;
      tracks: {
        name: string;
        duration: string;
        outcome: string;
        alignedWith: string;
      }[];
    };
    innovationLab: {
      title: string;
      desc: string;
      benches: string[];
    };
    partners: { name: string; role: string }[];
  };
  joinUs: {
    badge: string;
    title: string;
    doors: {
      id: string;
      audience: string;
      title: string;
      description: string;
      ctaText: string;
      secondaryCta?: string;
    }[];
    faqs: { question: string; answer: string }[];
  };
  footer: {
    slogan: string;
    ctaBand: string;
    ctaButton: string;
    rights: string;
    governanceNote: string;
  };
}

export const contentMap: Record<Language, SiteContent> = {
  en: {
    meta: {
      title: "The Rising Sindh | The School That Builds Startups",
      description: "A Sehwan school where students follow the Sindh Board syllabus and build real startups for global markets, Class 1 to Matric.",
      slogan: "Builders, not degree-holders.",
      positioning: "Sindh Board education plus AI and startup-building, Class 1 to Matric."
    },
    nav: {
      home: "Home",
      whyWeExist: "Why We Exist",
      theModel: "The Model",
      whatStudentsDo: "What Students Build",
      theProof: "The Proof",
      globalBridge: "Global Bridge",
      sehwanCampus: "Sehwan Campus",
      theMovement: "The Movement",
      joinUs: "Join Us",
      visitCampus: "Visit a Campus",
      bookVisit: "Book a Visit",
      curriculumMap: "Curriculum Map",
      curriculumMapSub: "Nursery to Matric + Future Layer",
      theHeroTrackNav: "Personality Grooming",
      theHeroTrackNavSub: "Character, confidence & trekking",
      studentIncubator: "Student Startups",
      studentIncubatorSub: "A real startup by Class 8",
      eveningAcademyNav: "Evening Academy",
      eveningAcademyNavSub: "Community courses after 5 pm"
    },
    common: {
      brandSubtitle: "Future School · Sehwan",
      livingPrecedent: "LIVING PROOF",
      verifiedArchive: "Verified Record",
      nationalStage: "National Stage & Tech Conference",
      resultsSpeak: "Results that speak",
      degreeUnemployment: "DEGREE UNEMPLOYMENT",
      degreeUnemploymentSub: "vs 4.7% with no schooling (LFS 24–25)",
      siliconValleyRank: "SILICON VALLEY RANK",
      siliconValleyRankSub: "Backed by a 30+ unicorn investor",
      boardProtected: "BOARD RESULTS PROTECTED",
      boardProtectedSub: "Full BISE syllabus + Future Layer",
      aiLab: "AI LAB",
      biseMetric: "BISE 100%",
      shippedProof10Years: "10 Years of Shipped Work",
      curriculumTrajectory: "Curriculum Path",
      class1ToMatric: "Class 1 → Matric",
      compoundingAdvantage: "Ten years of compounding practice",
      openWhatsAppChat: "Open WhatsApp",
      admissionsDeskOnline: "Admissions Desk",
      admissionsDeskSub: "Admissions, scholarships, campus visits — on WhatsApp.",
      done: "Done",
      close: "Close",
      apply: "Apply",
      submit: "Submit",
      fullName: "Full Name",
      fullNamePlaceholder: "e.g. Asad Ali / Zainab Solangi",
      whatsAppNumber: "WhatsApp Number",
      childClass: "Child's Class",
      workshopTrack: "Build Track",
      projectSummary: "Startup Idea (one line)",
      teachingPitch: "What would your students build this term?",
      submitRequest: "Submit",
      registrationReceived: "Received!",
      registrationReceivedDesc: "Our Sehwan team will reply on WhatsApp.",
      validationName: "Please enter your full name.",
      validationPhone: "Please enter a valid phone or WhatsApp number (minimum 10 digits).",
      nextSeatsLimited: "Seats are limited by classrooms, not ambition.",
      elevation5688: "Buddo Jabal · Bhago Torho · Karoonjhar",
      makersInnovationHub: "Makers & Innovation Hub",
      sehwanSharifLabel: "Sehwan Sharif",
      whySehwanTitle: "Why Sehwan",
      cityProjectsTitle: "The City Is the Classroom",
      campusSpineTitle: "CAMPUS SPINE",
      partnersTitle: "ECOSYSTEM PARTNERS",
      printMap: "Download the Nursery–Matric map",
      seeFutureLayerLive: "See a Future Layer period live",
      systemComparisonMatrix: "The Comparison",
      systemComparisonSub: "About the system, never the person",
      howWeTeachTitle: "How We Teach",
      howWeTeachSub: "Five pillars parents can see",
      exploreTitle: "Explore",
      programsTitle: "Programs",
      valuesTitle: "Values & Contact",
      craftedWithPride: "Made with pride in Sindh",
      forSindhFuture: "For tomorrow's builders",
      smallMediumEnterprises: "Local Businesses",
      sindhLocalEconomy: "Sindh Local Economy",
      realWorldPractice: "Real-World Practice",
      vocationalCareerPathways: "Hands-On Trades",
      nurseryMatricBise: "Nursery–Matric BISE Scheme",
      heroTrackGorakhTreks: "Character & Mountain Trekking",
      eveningCommunityAcademy: "Evening Academy",
      innovationLabBuilders: "Innovation Lab",
      saturdayBuildDays: "Saturday Build Days",
      sehwanCampusLabNav: "Sehwan Campus & Lab",
      theMovementNav: "The Movement",
      bookCampusVisitTitle: "Book a Campus Visit",
      saturdayBuildDayTitle: "Saturday Build Day",
      applyToTeachTitle: "Apply to Teach",
      labBenchTitle: "Innovation Lab Bench",
      modalSubtitle: "Sehwan Sharif Campus · The Rising Sindh",
      gradeNursery: "Nursery – KG",
      grade1to3: "Class 1–3 (First Code)",
      grade4to5: "Class 4–5 (First AI Model)",
      grade6to7: "Class 6–7 (Python & Apps)",
      grade8: "Class 8 (Registered Startup)",
      grade9to10: "Class 9–10 (Matric + Incubator)",
      trackAI: "Train an AI Model",
      track3D: "3D-Print a Prototype",
      trackMedia: "Shoot a Positive Sindh Video",
      trackPitch: "Pitch to Judges",
      teachNotesPlaceholder: "e.g. Science projects, coding, bilingual writing...",
      labBenchPlaceholder: "e.g. AgriTech for the Indus basin, Sindhi-language AI...",
      stageSpecification: "STAGE",
      computingPillarTitle: "Computing & AI",
      entrepreneurshipPillarTitle: "Startup Building",
      evidenceBehindNeed: "THE EVIDENCE",
      problemStripTitle: "Exams measure what you remember.",
      problemStripHighlight: "Markets pay for what you build.",
      youthUnemploymentTitle: "Graduate unemployment",
      youthUnemploymentDesc: "32.8% of graduates aged 20–24 are unemployed. For women, 45.2%.",
      youthUnemploymentSource: "Source: Labour Force Survey / Gallup Pakistan",
      instantProofTitle: "Proof of work, not theory",
      instantProofDesc: "Our Class 8 students have users. Most graduates have CVs.",
      instantProofSub: "By Matric, every student has shipped a product, kept books and pitched on stage.",
      noMarketObsolescenceTitle: "A ten-year head start",
      noMarketObsolescenceDesc: "Building starts at six. By sixteen, that is ten years of practice.",
      gorakhTrekTitle: "Mountain Trekking Expeditions",
      investorPrecedent: "THE INVESTOR PRECEDENT",
      lanePrefix: "LANE",
      directVentureTrack: "Direct Venture Track",
      partnerVentureCta: "Partner with a student startup",
      positiveSindhDocNote: "Every Matric student contributes to one student-directed documentary.",
      joinTheMovementCta: "Join the Movement",
      afterHoursEngine: "AFTER-HOURS COMMUNITY ENGINE",
      alignedWithLabel: "Aligned with",
      applyForBenchCta: "Apply for a Bench",
      fourDoorsSubtitle: "A proven road from Sehwan to Silicon Valley, rebuilt as a curriculum.",
      forParentsBadge: "FOR PARENTS",
      forStudentsBadge: "FOR STUDENTS",
      forTeachersBadge: "FOR TEACHERS",
      forBuildersBadge: "FOR BUILDERS & UNIVERSITY STUDENTS",
      bookTourCta: "Book a tour",
      registerBuildDayCta: "Register",
      teachersCardDesc: "Lesson kits. AI training. Competitive pay.",
      buildersCardDesc: "A bench, AI tools and demo days.",
      whatsappParentsPrompt: "Questions? Chat with Admissions on WhatsApp",
      faqTitle: "Questions Parents Ask",
      faqSubtitle: "Straight answers from school policy",
      bindingGovernanceTitle: "Our Promise:",
      bindingGovernanceDesc: "We teach skills; we don't guarantee outcomes. Figures come from official surveys. We challenge systems, not teachers or families.",
      sehwanLocation: "Sehwan Sharif, Sindh, Pakistan",
      whatsAppLabel: "WhatsApp"
    },
    proofStrip: {
      items: [
        "Sindh Board (BISE) Syllabus",
        "Sindhi · Urdu · English",
        "AI from Class 1",
        "A Startup by Class 8",
        "Silicon Valley Linkage"
      ]
    },
    hero: {
      badge: "Nursery to Matric · Sehwan Sharif",
      title: "Build startups.",
      highlight: "From Sindh, for the world.",
      subtitle: "The full Sindh Board syllabus, plus AI and startup-building from Class 1 to Matric.",
      ctaPrimary: "Visit a Campus",
      ctaSecondary: "See What Students Build",
      statPills: [
        { label: "Class 1", sub: "AI starts" },
        { label: "Class 8", sub: "First startup" },
        { label: "3rd / 30", sub: "Silicon Valley rank" },
        { label: "100%", sub: "Sindh Board protected" }
      ]
    },
    problemStrip: {
      tagline: "The gap",
      conclusion: "A degree alone no longer secures a future. Skills and shipped work do.",
      stats: [
        {
          number: "10.9%",
          label: "Degree Holder Unemployment",
          subtext: "vs 4.7% for people with no schooling",
          source: "Labour Force Survey 2024–25"
        },
        {
          number: "1 in 3",
          label: "Graduates Unemployed (20–24)",
          subtext: "32.8% jobless as careers begin",
          source: "Gallup Pakistan / LFS Analysis"
        },
        {
          number: "45.2%",
          label: "Female Graduate Unemployment",
          subtext: "Ages 25–29; 14.9% for men",
          source: "Labour Force Survey & Gallup"
        },
        {
          number: "760,000+",
          label: "Left Pakistan in 2025",
          subtext: "Registered for overseas employment",
          source: "Dawn, Jul 2026"
        }
      ]
    },
    theTurn: {
      badge: "The Turn",
      title: "A school built for what comes next.",
      description: "The Sindh Board syllabus stays at the centre. The Future Layer adds AI, product-building and a real startup — so students leave with results and a portfolio.",
      breakdown: [
        {
          title: "Sindh Board Core",
          desc: "Maths, Science, English, Urdu, Sindhi, Islamiat, Social Studies — with exam practice.",
          percent: "~70–80%"
        },
        {
          title: "The Future Layer",
          desc: "AI, coding, startup-building and a public portfolio of shipped work.",
          percent: "~20–30%"
        }
      ]
    },
    fourEngines: {
      badge: "The Architecture",
      title: "Four Engines",
      subtitle: "One school. Four connected programs.",
      engines: [
        {
          id: "school",
          title: "The School",
          role: "Nursery – Matric",
          description: "Board subjects and future skills on one timetable.",
          highlight: "Nursery to Matric"
        },
        {
          id: "hero",
          title: "Personality Grooming",
          role: "Character & Confidence",
          description: "Communication, discipline and character — built through practice and trekking.",
          highlight: "2 periods weekly"
        },
        {
          id: "incubator",
          title: "Student Startup Incubator",
          role: "Real startups, real users",
          description: "Students build products, find users and register a company — with local businesses as first customers.",
          highlight: "Class 8 to 10"
        },
        {
          id: "academy",
          title: "Evening Academy",
          role: "Community Engine",
          description: "12-week courses in coding, AI, media and freelancing for Sehwan's youth.",
          highlight: "Open to Sehwan"
        }
      ]
    },
    whatStudentsDo: {
      badge: "The Comparison",
      title: "What our students do that graduates can't.",
      intro: "Building starts at six. By sixteen, a student has shipped products, served users and pitched to investors.",
      ladder: [
        {
          age: "At 9",
          grade: "Class 4",
          task: "Trains her first AI vision model.",
          contrast: "Most CS graduates never have."
        },
        {
          age: "At 10",
          grade: "Class 5",
          task: "Runs a stall and pitches it to a room of adults.",
          contrast: "Learns pricing, cash and customers first-hand."
        },
        {
          age: "At 12",
          grade: "Classes 6–7",
          task: "Writes Python and builds a mobile app.",
          contrast: "Ships it to real users in Sehwan."
        },
        {
          age: "At 13",
          grade: "Class 8",
          task: "Registers a startup with a team.",
          contrast: "Sells to strangers and files accounts."
        },
        {
          age: "At 15",
          grade: "Class 9",
          task: "Ships an AI tool for a local business and enters the incubator.",
          contrast: "Competes on international startup stages."
        },
        {
          age: "At 16",
          grade: "Matric",
          task: "Graduates with strong BISE marks and a live product.",
          contrast: "Demo day judged by NIC and ORIC guests. A public portfolio."
        }
      ],
      comparison: {
        headers: ["A Typical Graduate (22)", "A Rising Sindh Student (16)"],
        rows: [
          { typical: "A CV and attested photocopies", rising: "A live portfolio of shipped work" },
          { typical: "Memorised theory, fading", rising: "Products with real users" },
          { typical: "Waiting for a vacancy", rising: "Has already sold to strangers" },
          { typical: "Fears AI will take the job", rising: "Builds with AI every day" },
          { typical: "Must leave for the city or abroad", rising: "Serves global clients from Sehwan" }
        ]
      },
      closingNote: "University stays open to every student — with a portfolio in hand."
    },
    theModel: {
      badge: "The Two-Layer Curriculum",
      title: "Board results protected. Future added.",
      openingPromise: "Two layers. One timetable. Nothing sacrificed.",
      promiseDetail: "About 70% of the week is the Sindh Board syllabus — 80% in Classes 9–10. The rest is computing, AI and startup-building.",
      timelineStages: [
        {
          grade: "Nursery – KG",
          computing: "Screen-free logic games and 'instruct the robot' play.",
          entrepreneurship: "Sharing, classroom roles, market-day role-play.",
          milestone: "Logic & empathy"
        },
        {
          grade: "Classes 1–3",
          computing: "ScratchJr, floor robots, touch-typing.",
          entrepreneurship: "Classroom shop with real coins, savings jars.",
          milestone: "First code"
        },
        {
          grade: "Classes 4–5",
          computing: "Scratch, micro:bit, first AI model.",
          entrepreneurship: "Bazaar stall, mini-company pitch to parents.",
          milestone: "First AI model"
        },
        {
          grade: "Classes 6–7",
          computing: "Python, mobile apps, IoT sensors, honest AI prompting.",
          entrepreneurship: "Business Model Canvas, first product with real users, basic accounts.",
          milestone: "First shipped product"
        },
        {
          grade: "Class 8",
          computing: "Web, APIs, supervised AI-agent workflows, 3D printing.",
          entrepreneurship: "A registered student startup with a team, customers and quarterly accounts.",
          milestone: "Registered startup"
        },
        {
          grade: "Classes 9–10",
          computing: "Board Computer Science + an AI automation for a local business.",
          entrepreneurship: "Incubator semester: MVP, early users, demo-day pitch to NIC/ORIC guests.",
          milestone: "Matric + live portfolio"
        }
      ],
      teachingPillars: [
        {
          title: "Mastery First",
          desc: "Weekly checks and reteach loops. No child slips through quietly."
        },
        {
          title: "Lifelong E-Portfolio",
          desc: "Every project and startup report from KG to Matric, in one public record."
        },
        {
          title: "Parent Dashboard",
          desc: "Monthly progress in Sindhi, Urdu or English, on your phone."
        },
        {
          title: "Teachers Are Never Alone",
          desc: "Recorded lesson kits and central support. No teacher needs to be an AI expert."
        },
        {
          title: "AI with Integrity",
          desc: "AI as a tool, under teacher guidance, with clear rules on honest work."
        }
      ]
    },
    smeEnterprises: {
      badge: "Hands-On Learning",
      title: "Local Businesses as First Customers",
      subtitle: "Startups need customers. Sehwan's workshops and shops are where our students find their first.",
      whatIsSmeTitle: "Why local businesses?",
      whatIsSmeDesc: "Soap units, phone-repair shops, footwear makers and craft workshops run Sehwan's economy — and they have real problems worth solving.",
      whyConnectTitle: "What students do with them",
      whyConnectDesc: "Visit, observe, find a bottleneck, and build a product that fixes it — a billing app, an online store, a simple automation.",
      learningOutcomesTitle: "Skills students practise",
      learningOutcomes: [
        {
          title: "Finding a Real Problem",
          desc: "Observe a workshop and spot what costs it time or money."
        },
        {
          title: "Talking to Customers",
          desc: "Listen, ask, and explain a solution in plain language."
        },
        {
          title: "Production & Quality",
          desc: "See how products are made, checked and priced."
        },
        {
          title: "Running the Numbers",
          desc: "Costs, stock, cash and margin — inside a real business."
        }
      ],
      examplesTitle: "Where students start",
      examplesSubtitle: "Four kinds of Sehwan businesses that become first customers.",
      examples: [
        {
          id: "soap-making",
          title: "Soap-Making Units",
          role: "Manufacturing",
          businessDoes: "Mix, mould and package soap for local markets.",
          studentsLearn: "Students build batch-costing sheets and simple online catalogues.",
          tags: ["Costing", "Catalogue", "Packaging"]
        },
        {
          id: "mobile-repair",
          title: "Phone Repair Shops",
          role: "Technical Service",
          businessDoes: "Diagnose faults, replace screens, fix charging and software.",
          studentsLearn: "Students build job-tracking and quote tools, and learn basic diagnostics.",
          tags: ["Diagnostics", "Job Tracking", "Customer Service"]
        },
        {
          id: "footwear-manufacturing",
          title: "Chappal & Footwear Units",
          role: "Craft & Assembly",
          businessDoes: "Cut and stitch leather into Sindhi chappal and modern footwear.",
          studentsLearn: "Students build product photos, online stores and stock trackers.",
          tags: ["E-Commerce", "Stock", "Pricing"]
        },
        {
          id: "local-workshops",
          title: "Craft & Mechanical Workshops",
          role: "Trades",
          businessDoes: "Ajrak printers, garages, metal and wood shops serve the city.",
          studentsLearn: "Students map workflows, test ideas and discover trades worth building for.",
          tags: ["Workflow", "Prototyping", "Vocational Paths"]
        }
      ]
    },
    heroTrack: {
      badge: "The Character Pillar",
      title: "Personality Grooming",
      subtitle: "Confidence, communication, discipline and character — for school, home and the world stage.",
      description: "Founders need more than code. Two periods a week build the habits that carry a student through a pitch, a team and a hard day.",
      features: [
        {
          title: "Communication",
          desc: "Listen well, speak clearly, present with confidence."
        },
        {
          title: "Discipline & Ethics",
          desc: "Honesty, responsibility and respect, practised daily."
        },
        {
          title: "Mountain Trekking",
          desc: "Buddo Jabal, Bhago Torho and Karoonjhar: fitness, teamwork and respect for nature."
        },
        {
          title: "Resilience & Leadership",
          desc: "Empathy, teamwork and steady decisions under pressure."
        }
      ],
      heroOath: {
        title: "The Student Pledge (Class 9)",
        text: "“I will act with honesty. I will speak with clarity and respect. I will stand by my team, serve the soil of Sindh, and meet every challenge with resilience.”"
      }
    },
    theProof: {
      badge: "The Precedent",
      title: "From Sehwan to Silicon Valley",
      intro: "Founder Ali Murtaza Solangi built his first startup in Sehwan. After winning NUST's GAP program, he ranked third among founders from 30 countries in Silicon Valley.",
      investorTitle: "A Sehwan startup, backed by a global investor.",
      investorDesc: "The investor behind Ali's startup has backed more than 30 unicorns, including Tesla, PayPal, SpaceX and Yahoo.",
      stats: [
        { number: "3rd of 30", label: "Countries ranked in Silicon Valley" },
        { number: "20+", label: "Countries served today" },
        { number: "Hundreds", label: "Of high-tech employees led" }
      ],
      whyItMatters: {
        title: "A global company can be built from Sehwan. We've done it.",
        desc: "This school turns that journey into a curriculum, from Class 1."
      },
      founderQuote: {
        quote: "“Everything they will tell your child is impossible from Sehwan, I have already done from Sehwan. The only thing I lacked was a school like this. So I built it.”",
        name: "Ali Murtaza Solangi",
        role: "Founder, The Rising Sindh"
      },
      milestones: [
        { year: "Phase 1", stage: "Born in Sehwan", desc: "First product coded in ordinary rooms beside the shrine of Lal Shahbaz Qalandar." },
        { year: "Phase 2", stage: "National Champion", desc: "Won NUST's Global Acceleration Program (GAP)." },
        { year: "Phase 3", stage: "Silicon Valley Podium", desc: "Ranked 3rd of 30 nations as 'The Most Investable Startup in Silicon Valley'." },
        { year: "Phase 4", stage: "Global Scale", desc: "Backed by a 30+ unicorn investor; operating across 20+ countries." },
        { year: "Phase 5", stage: "Back to Sehwan", desc: "That journey, rebuilt as a school curriculum." }
      ]
    },
    globalBridge: {
      badge: "Local Talent · Global Market",
      title: "The Global Bridge",
      subtitle: "Student startups are built for global markets from day one.",
      lanes: [
        {
          laneNumber: "01",
          title: "Co-founders Without Borders",
          highlight: "A founder in Sehwan. A co-founder in Silicon Valley. One cap table.",
          description: "Diaspora and global professionals join student startups as partners — with experience, networks or capital."
        },
        {
          laneNumber: "02",
          title: "Global Exposure",
          highlight: "Study visits to startup hubs, universities and labs abroad.",
          description: "Students see how global founders work — then come home to build."
        },
        {
          laneNumber: "03",
          title: "Global Registration & Patents",
          highlight: "Born in Sehwan. Registered in Delaware. Protected worldwide.",
          description: "Selected student startups register in the US and file patents for inventions made in Sindh."
        }
      ],
      closing: "Talent stays rooted in Sindh. Products go global.",
      scholarshipHighlight: {
        badge: "Merit & Need",
        title: "Scholarships",
        subtitle: "No talented child is priced out.",
        description: "Merit- and need-based scholarships cover eligible students across the full program — labs, trekking and startups included.",
        points: [
          "Merit awards for exceptional talent",
          "Need-based support for every deserving child",
          "Open to eligible families across Sindh"
        ],
        valueProposition: "One student supported lifts a whole community."
      },
      internationalTripsHighlight: {
        badge: "Global Horizons",
        title: "International Study Visits",
        subtitle: "See the world's best. Then build at home.",
        description: "Planned visits to global schools, universities and startup hubs widen ambition and show what is possible.",
        points: [
          "World-class classrooms and incubators",
          "Global peers and mentors",
          "Confidence abroad, roots in Sindh"
        ],
        valueProposition: "Exposure widens what a student believes is possible."
      }
    },
    theMovement: {
      badge: "The Sindh Renaissance",
      title: "Sindh, Rising Again",
      inheritance: {
        title: "Sindh has always built.",
        desc: "Moenjodaro was a planned city 5,000 years ago. Building is the inheritance."
      },
      globalVillage: {
        title: "The market is now global.",
        desc: "A product built in Sehwan can reach users anywhere. The internet erased the distance."
      },
      buildHere: {
        title: "Build global. Stay rooted.",
        desc: "We respect families who work abroad. We want students to have the choice to build from home and sell to the world."
      },
      tenYearPicture: {
        title: "The 10-Year Picture",
        desc: "What Sindh looks like when its students build startups.",
        points: [
          "Startups from Sehwan solving agriculture, water, health and language problems.",
          "Girls' AI and robotics teams on international podiums.",
          "Silicon Valley co-founders on Sehwan cap tables.",
          "Patents filed from Sehwan to the US Patent Office.",
          "A generation fluent in Sindhi, Urdu, English — and AI."
        ]
      },
      invitation: "Join as a parent, student, teacher or partner."
    },
    sehwanCampus: {
      badge: "Sehwan Sharif, Sindh",
      title: "Sehwan — One City First",
      whySehwan: "The founder's home, a city of heritage, and a model built to grow across Sindh.",
      cityProjects: "Students build for the city: heritage guides, artisan stores, and trekking projects in Buddo Jabal, Bhago Torho and Karoonjhar.",
      campusSpine: [
        "Computing & AI Lab",
        "Maker Space: 3D Printers & IoT",
        "Media, Podcast & Video Studio",
        "Incubator Pitch Room",
        "Auditorium & Stage",
        "Science Labs"
      ],
      roadAhead: "From Nursery–Matric to a college, and one day a Sindh technology university.",
      eveningAcademy: {
        title: "Evening Academy",
        opening: "After 5 pm the labs open to Sehwan: 12-week courses for youth and adults.",
        tracks: [
          {
            name: "Digital Foundations & Freelancing",
            duration: "12 Weeks",
            outcome: "Computer basics → office tools → work English → first international gig",
            alignedWith: "Saylani-style delivery, NAVTTC certified"
          },
          {
            name: "Code & Practical AI",
            duration: "12 Weeks",
            outcome: "Python → data → AI tools → one deployed automation",
            alignedWith: "PSEB certification & internships"
          },
          {
            name: "Video, Media & Storytelling",
            duration: "12 Weeks",
            outcome: "Phone videography → editing → 3 published pieces, including one 'Positive Sindh' documentary",
            alignedWith: "Campus Studio & AI Lab access"
          },
          {
            name: "E-Commerce",
            duration: "12 Weeks",
            outcome: "Product photos → catalogue → online payments → one live store",
            alignedWith: "Sehwan traders & student mentoring"
          }
        ]
      },
      innovationLab: {
        title: "The Innovation Lab",
        desc: "University students and professionals apply for a bench, mentorship and demo days.",
        benches: [
          "Final-year projects turned into registered startups",
          "Side projects turned into venture-ready products",
          "Founders finding their first engineering and design co-founders"
        ]
      },
      partners: [
        { name: "NIC (National Incubation Center)", role: "Incubation mentors & demo-day judges" },
        { name: "ORIC Linkages", role: "University research commercialisation" },
        { name: "PSEB", role: "Skills certification & tech internships" },
        { name: "Saylani", role: "Evening training delivery model" }
      ]
    },
    joinUs: {
      badge: "Take Action",
      title: "Pick your door.",
      doors: [
        {
          id: "parents",
          audience: "For Parents",
          title: "See it for yourself.",
          description: "Tour the labs, sit in a Future Layer class, meet teachers, ask about exams and scholarships.",
          ctaText: "Book a Campus Visit",
          secondaryCta: "WhatsApp Us"
        },
        {
          id: "students",
          audience: "For Students",
          title: "Build something on Saturday.",
          description: "Train an AI model, 3D-print a design, shoot a video or pitch an idea.",
          ctaText: "Register for a Build Day"
        },
        {
          id: "professionals",
          audience: "For University Students & Pros",
          title: "Turn a project into a startup.",
          description: "A lab bench, AI tools, mentorship and demo days.",
          ctaText: "Apply for a Lab Bench"
        },
        {
          id: "teachers",
          audience: "For Teachers",
          title: "Teach by building.",
          description: "Lesson kits, modern labs, central support, training and competitive pay.",
          ctaText: "Apply to Teach"
        }
      ],
      faqs: [
        {
          question: "Will the Future Layer hurt my child's Matric grades?",
          answer: "No. Board subjects take about 70% of the week, and 80% in Classes 9–10, with exam practice built in."
        },
        {
          question: "Is this in line with our Islamic and cultural values?",
          answer: "Yes. The Sindh Islamiat curriculum is followed. Female mentors lead girls' cohorts. Treks require parental consent and safety supervision."
        },
        {
          question: "Are there scholarships?",
          answer: "Yes. Merit- and need-based scholarships give eligible students access to the full program."
        },
        {
          question: "What do international study visits add?",
          answer: "Exposure to global schools, startup hubs and cultures — and a clearer sense of what students can build at home."
        },
        {
          question: "How do I track my child's progress?",
          answer: "Through the Parent Dashboard in Sindhi, Urdu or English, with monthly updates on board work and projects."
        }
      ]
    },
    footer: {
      slogan: "Builders, not degree-holders.",
      ctaBand: "Seats are limited by classrooms. Book a visit.",
      ctaButton: "Book a Campus Visit",
      rights: "The Rising Sindh. All Rights Reserved. Sehwan Sharif, Sindh, Pakistan.",
      governanceNote: "Non-political. Sindhi-first. Future-focused."
    }
  },
  sd: {
    meta: {
      title: "دي رائزنگ سنڌ | اهو اسڪول جيڪو اسٽارٽ اپ ٺاهي ٿو",
      description: "سيوهڻ جو اسڪول، جتي شاگرد سنڌ بورڊ جو نصاب پڙهن ٿا ۽ ڪلاس 1 کان ميٽرڪ تائين عالمي مارڪيٽ لاءِ حقيقي اسٽارٽ اپ ٺاهين ٿا.",
      slogan: "تعمير ڪندڙ، نه رڳو ڊگري وٺندڙ.",
      positioning: "سنڌ بورڊ جي تعليم سان گڏ AI ۽ اسٽارٽ اپ سازي، ڪلاس 1 کان ميٽرڪ."
    },
    nav: {
      home: "مکيه صفحو",
      whyWeExist: "اسان ڇو آهيون",
      theModel: "اسان جو نمونو",
      whatStudentsDo: "شاگرد ڇا ٺاهين ٿا",
      theProof: "ثبوت",
      globalBridge: "عالمي پُل",
      sehwanCampus: "سيوهڻ ڪيمپس",
      theMovement: "تحريڪ",
      joinUs: "شامل ٿيو",
      visitCampus: "ڪيمپس جو دورو ڪريو",
      bookVisit: "دورو بڪ ڪريو",
      curriculumMap: "نصاب جو نقشو",
      curriculumMapSub: "نرسري کان ميٽرڪ + فيوچر ليئر",
      theHeroTrackNav: "شخصيت سازي",
      theHeroTrackNavSub: "ڪردار، اعتماد ۽ ٽريڪنگ",
      studentIncubator: "شاگردن جا اسٽارٽ اپ",
      studentIncubatorSub: "ڪلاس 8 تائين حقيقي اسٽارٽ اپ",
      eveningAcademyNav: "شام جي اڪيڊمي",
      eveningAcademyNavSub: "شام 5 وڳي کان پوءِ ڪميونٽي ڪورس"
    },
    common: {
      brandSubtitle: "فيوچر اسڪول · سيوهڻ",
      livingPrecedent: "زنده ثبوت",
      verifiedArchive: "تصديق ٿيل رڪارڊ",
      nationalStage: "قومي اسٽيج ۽ ٽيڪ ڪانفرنس",
      resultsSpeak: "نتيجا جيڪي پاڻ ڳالهائين ٿا",
      degreeUnemployment: "ڊگري يافته بيروزگاري",
      degreeUnemploymentSub: "بمقابلي 4.7% اڻ پڙهيل (LFS 24–25)",
      siliconValleyRank: "سلڪون ويلي رينڪ",
      siliconValleyRankSub: "30+ يونيڪارن سيڙپڪار جي سپورٽ",
      boardProtected: "بورڊ جا نتيجا محفوظ",
      boardProtectedSub: "مڪمل BISE نصاب + فيوچر ليئر",
      aiLab: "اي آءِ ليب",
      biseMetric: "BISE 100%",
      shippedProof10Years: "10 سالن جو عملي ڪم",
      curriculumTrajectory: "نصاب جو رستو",
      class1ToMatric: "ڪلاس 1 → ميٽرڪ",
      compoundingAdvantage: "ڏهن سالن جي مسلسل مشق",
      openWhatsAppChat: "واٽس ائپ کوليو",
      admissionsDeskOnline: "داخلا ڊيسڪ",
      admissionsDeskSub: "داخلا، اسڪالرشپ، ڪيمپس دورو — واٽس ائپ تي.",
      done: "ٺيڪ آهي",
      close: "بند ڪريو",
      apply: "درخواست ڏيو",
      submit: "جمع ڪريو",
      fullName: "مڪمل نالو",
      fullNamePlaceholder: "مثال: اسد علي / زينب سولنگي",
      whatsAppNumber: "واٽس ائپ نمبر",
      childClass: "ٻار جو ڪلاس",
      workshopTrack: "بلڊ ٽريڪ",
      projectSummary: "اسٽارٽ اپ جو خيال (هڪ سٽ)",
      teachingPitch: "توهان جا شاگرد هن ٽرم ڇا ٺاهيندا؟",
      submitRequest: "جمع ڪريو",
      registrationReceived: "موصول ٿيو!",
      registrationReceivedDesc: "سيوهڻ جي ٽيم واٽس ائپ تي جواب ڏيندي.",
      validationName: "مهرباني ڪري پنهنجو مڪمل نالو لکو.",
      validationPhone: "مهرباني ڪري صحيح فون يا واٽس ائپ نمبر لکو (گهٽ ۾ گهٽ 10 انگ).",
      nextSeatsLimited: "سيٽون ڪلاس رومز سان محدود آهن، ارادن سان نه.",
      elevation5688: "ٻُڏو جبل · ڀاڳو ٽوڙهو · ڪارونجهر",
      makersInnovationHub: "ميڪرز ۽ انوويشن هب",
      sehwanSharifLabel: "سيوهڻ شريف",
      whySehwanTitle: "سيوهڻ ڇو",
      cityProjectsTitle: "شهر ئي ڪلاس روم آهي",
      campusSpineTitle: "ڪيمپس جو ڍانچو",
      partnersTitle: "ايڪوسسٽم پارٽنرز",
      printMap: "نرسري–ميٽرڪ نقشو ڊائون لوڊ ڪريو",
      seeFutureLayerLive: "فيوچر ليئر جو پيريڊ لائيو ڏسو",
      systemComparisonMatrix: "ڀيٽ",
      systemComparisonSub: "ڳالهه نظام جي آهي، فرد جي نه",
      howWeTeachTitle: "اسان ڪيئن پڙهايون ٿا",
      howWeTeachSub: "پنج ٿنڀا جيڪي والدين ڏسي سگهن ٿا",
      exploreTitle: "ڳوليو",
      programsTitle: "پروگرام",
      valuesTitle: "قدر ۽ رابطو",
      craftedWithPride: "سنڌ ۾ فخر سان ٺاهيل",
      forSindhFuture: "سڀاڻي جي تعمير ڪندڙن لاءِ",
      smallMediumEnterprises: "مقامي ڪاروبار",
      sindhLocalEconomy: "سنڌ جي مقامي معيشت",
      realWorldPractice: "عملي مشق",
      vocationalCareerPathways: "هٿ جا هنر",
      nurseryMatricBise: "نرسري–ميٽرڪ BISE اسڪيم",
      heroTrackGorakhTreks: "ڪردار ۽ جبلن جي ٽريڪنگ",
      eveningCommunityAcademy: "شام جي اڪيڊمي",
      innovationLabBuilders: "انوويشن ليب",
      saturdayBuildDays: "ڇنڇر بلڊ ڊيز",
      sehwanCampusLabNav: "سيوهڻ ڪيمپس ۽ ليب",
      theMovementNav: "تحريڪ",
      bookCampusVisitTitle: "ڪيمپس جو دورو بُڪ ڪريو",
      saturdayBuildDayTitle: "ڇنڇر بلڊ ڊي",
      applyToTeachTitle: "استاد طور درخواست ڏيو",
      labBenchTitle: "انوويشن ليب بينچ",
      modalSubtitle: "سيوهڻ شريف ڪيمپس · دي رائزنگ سنڌ",
      gradeNursery: "نرسري – ڪي جي",
      grade1to3: "ڪلاس 1–3 (پهريون ڪوڊ)",
      grade4to5: "ڪلاس 4–5 (پهريون AI ماڊل)",
      grade6to7: "ڪلاس 6–7 (پائٿون ۽ ائپس)",
      grade8: "ڪلاس 8 (رجسٽرڊ اسٽارٽ اپ)",
      grade9to10: "ڪلاس 9–10 (ميٽرڪ + انڪيوبيٽر)",
      trackAI: "AI ماڊل ٽرين ڪريو",
      track3D: "3D پروٽوٽائپ پرنٽ ڪريو",
      trackMedia: "مثبت سنڌ وڊيو ٺاهيو",
      trackPitch: "ججن اڳيان پچ ڪريو",
      teachNotesPlaceholder: "مثال: سائنس پروجيڪٽ، ڪوڊنگ، ٻه-ٻولي لکڻ...",
      labBenchPlaceholder: "مثال: انڊس بيسن لاءِ ايگري ٽيڪ، سنڌي ٻوليءَ جي AI...",
      stageSpecification: "درجو",
      computingPillarTitle: "ڪمپيوٽنگ ۽ AI",
      entrepreneurshipPillarTitle: "اسٽارٽ اپ سازي",
      evidenceBehindNeed: "ثبوت",
      problemStripTitle: "امتحان رڳو ياداشت ماپين ٿا.",
      problemStripHighlight: "مارڪيٽ ٺاهيل شين جو ملهه ڏئي ٿي.",
      youthUnemploymentTitle: "گريجوئيٽ بيروزگاري",
      youthUnemploymentDesc: "20–24 سالن جا 32.8٪ گريجوئيٽ بيروزگار آهن. عورتن ۾ 45.2٪.",
      youthUnemploymentSource: "ذريعو: ليبر فورس سروي / گيلپ پاڪستان",
      instantProofTitle: "نظريي بدران ڪم جو ثبوت",
      instantProofDesc: "اسان جي ڪلاس 8 جي شاگردن وٽ يوزر آهن. اڪثر گريجوئيٽس وٽ رڳو سي وي.",
      instantProofSub: "ميٽرڪ تائين هر شاگرد پراڊڪٽ لانچ ڪري چڪو، کاتو رکي چڪو ۽ اسٽيج تي پچ ڪري چڪو هوندو.",
      noMarketObsolescenceTitle: "ڏهن سالن جي اڳڀرائي",
      noMarketObsolescenceDesc: "ٺاهڻ ڇهن سالن ۾ شروع ٿئي ٿو. سورهن سالن تائين اها ڏهن سالن جي مشق آهي.",
      gorakhTrekTitle: "جبلن جي ٽريڪنگ مهمون",
      investorPrecedent: "سيڙپڪار جو اعتماد",
      lanePrefix: "راھ",
      directVentureTrack: "سڌو وينچر ٽريڪ",
      partnerVentureCta: "شاگردن جي اسٽارٽ اپ سان ڀائيوار ٿيو",
      positiveSindhDocNote: "هر ميٽرڪ جو شاگرد شاگردن جي ٺاهيل هڪ ڊاڪيومينٽري ۾ حصو وٺي ٿو.",
      joinTheMovementCta: "تحريڪ ۾ شامل ٿيو",
      afterHoursEngine: "شام جو ڪميونٽي انجڻ",
      alignedWithLabel: "هم آهنگ",
      applyForBenchCta: "بينچ لاءِ درخواست ڏيو",
      fourDoorsSubtitle: "سيوهڻ کان سلڪون ويلي تائين ثابت ٿيل رستو، هاڻي نصاب جي صورت ۾.",
      forParentsBadge: "والدين لاءِ",
      forStudentsBadge: "شاگردن لاءِ",
      forTeachersBadge: "استادن لاءِ",
      forBuildersBadge: "تعمير ڪندڙن ۽ يونيورسٽي شاگردن لاءِ",
      bookTourCta: "دورو بُڪ ڪريو",
      registerBuildDayCta: "رجسٽر ٿيو",
      teachersCardDesc: "سبقن جون ڪٽس. AI ٽريننگ. سٺو معاوضو.",
      buildersCardDesc: "بينچ، AI ٽولز ۽ ڊيمو ڊيز.",
      whatsappParentsPrompt: "سوال آهي؟ واٽس ائپ تي داخلا ڊيسڪ سان ڳالهايو",
      faqTitle: "والدين جا سوال",
      faqSubtitle: "اسڪول جي پاليسي تي ٻڌل سڌا جواب",
      bindingGovernanceTitle: "اسان جو واعدو:",
      bindingGovernanceDesc: "اسان مهارتون سيکاريون ٿا، نتيجن جي ضمانت نٿا ڏيون. انگ سرڪاري سروي جا آهن. تنقيد نظام تي آهي، استادن يا خاندانن تي نه.",
      sehwanLocation: "سيوهڻ شريف، سنڌ، پاڪستان",
      whatsAppLabel: "واٽس ائپ"
    },
    proofStrip: {
      items: [
        "سنڌ بورڊ (BISE) نصاب",
        "سنڌي · اردو · انگريزي",
        "ڪلاس 1 کان AI",
        "ڪلاس 8 تائين اسٽارٽ اپ",
        "سلڪون ويلي سان لاڳاپو"
      ]
    },
    hero: {
      badge: "نرسري کان ميٽرڪ · سيوهڻ شريف",
      title: "اسٽارٽ اپ ٺاهيو.",
      highlight: "سنڌ مان، دنيا لاءِ.",
      subtitle: "سنڌ بورڊ جو مڪمل نصاب، ان سان گڏ ڪلاس 1 کان ميٽرڪ تائين AI ۽ اسٽارٽ اپ سازي.",
      ctaPrimary: "ڪيمپس جو دورو ڪريو",
      ctaSecondary: "شاگرد ڇا ٺاهين ٿا",
      statPills: [
        { label: "ڪلاس 1", sub: "AI جي شروعات" },
        { label: "ڪلاس 8", sub: "پهريون اسٽارٽ اپ" },
        { label: "ٽيون / 30", sub: "سلڪون ويلي رينڪ" },
        { label: "100%", sub: "سنڌ بورڊ محفوظ" }
      ]
    },
    problemStrip: {
      tagline: "فرق",
      conclusion: "رڳو ڊگري مستقبل جي ضمانت ناهي رهي. مهارت ۽ ٺاهيل ڪم آهي.",
      stats: [
        {
          number: "10.9%",
          label: "ڊگري هولڊرز ۾ بيروزگاري",
          subtext: "اڻ پڙهيل ماڻهن ۾ 4.7٪ جي ڀيٽ ۾",
          source: "ليبر فورس سروي 2024–25"
        },
        {
          number: "3 مان 1",
          label: "گريجوئيٽ بيروزگار (20–24)",
          subtext: "32.8٪ ڪيريئر جي شروعات ۾ بيروزگار",
          source: "گيلپ پاڪستان / LFS تجزيو"
        },
        {
          number: "45.2%",
          label: "نياڻين گريجوئيٽس ۾ بيروزگاري",
          subtext: "عمر 25–29؛ مردن ۾ 14.9٪",
          source: "ليبر فورس سروي ۽ گيلپ"
        },
        {
          number: "760,000+",
          label: "2025 ۾ پاڪستان ڇڏي ويا",
          subtext: "ٻاهرين ملڪ روزگار لاءِ رجسٽرڊ",
          source: "ڊان، جولاءِ 2026"
        }
      ]
    },
    theTurn: {
      badge: "موڙ",
      title: "ايندڙ دور لاءِ ٺهيل اسڪول.",
      description: "سنڌ بورڊ جو نصاب مرڪز ۾ رهي ٿو. فيوچر ليئر ان ۾ AI، پراڊڪٽ سازي ۽ حقيقي اسٽارٽ اپ شامل ڪري ٿي — شاگرد نتيجن ۽ پورٽ فوليو ٻنهي سان نڪرن ٿا.",
      breakdown: [
        {
          title: "سنڌ بورڊ بنياد",
          desc: "رياضي، سائنس، انگريزي، اردو، سنڌي، اسلاميات، سماجي اڀياس — امتحاني مشق سان.",
          percent: "~70–80%"
        },
        {
          title: "فيوچر ليئر",
          desc: "AI، ڪوڊنگ، اسٽارٽ اپ سازي ۽ ٺاهيل ڪم جو عوامي پورٽ فوليو.",
          percent: "~20–30%"
        }
      ]
    },
    fourEngines: {
      badge: "ڍانچو",
      title: "چار انجڻ",
      subtitle: "هڪ اسڪول. چار ڳنڍيل پروگرام.",
      engines: [
        {
          id: "school",
          title: "اسڪول",
          role: "نرسري – ميٽرڪ",
          description: "بورڊ جا مضمون ۽ مستقبل جون مهارتون هڪ ئي ٽائيم ٽيبل تي.",
          highlight: "نرسري کان ميٽرڪ"
        },
        {
          id: "hero",
          title: "شخصيت سازي",
          role: "ڪردار ۽ اعتماد",
          description: "ڳالهه ٻولهه، نظم ۽ ڪردار — مشق ۽ ٽريڪنگ ذريعي.",
          highlight: "هفتي ۾ 2 پيريڊ"
        },
        {
          id: "incubator",
          title: "شاگردن جو اسٽارٽ اپ انڪيوبيٽر",
          role: "حقيقي اسٽارٽ اپ، حقيقي يوزر",
          description: "شاگرد پراڊڪٽ ٺاهين ٿا، يوزر ڳولين ٿا ۽ ڪمپني رجسٽر ڪن ٿا — مقامي ڪاروبار سندن پهريان گراهڪ.",
          highlight: "ڪلاس 8 کان 10"
        },
        {
          id: "academy",
          title: "شام جي اڪيڊمي",
          role: "ڪميونٽي انجڻ",
          description: "سيوهڻ جي نوجوانن لاءِ ڪوڊنگ، AI، ميڊيا ۽ فري لانسنگ جا 12 هفتن جا ڪورس.",
          highlight: "سيوهڻ لاءِ کليل"
        }
      ]
    },
    whatStudentsDo: {
      badge: "ڀيٽ",
      title: "جيڪو اسان جا شاگرد ڪن ٿا، گريجوئيٽ نه ٿا ڪري سگهن.",
      intro: "ٺاهڻ ڇهن سالن ۾ شروع ٿئي ٿو. سورهن سالن تائين شاگرد پراڊڪٽ لانچ ڪري چڪو، يوزرن جي خدمت ڪري چڪو ۽ سيڙپڪارن اڳيان پچ ڪري چڪو هوندو.",
      ladder: [
        {
          age: "9 سالن ۾",
          grade: "ڪلاس 4",
          task: "پنهنجو پهريون AI ويزن ماڊل ٽرين ڪري ٿي.",
          contrast: "اڪثر CS گريجوئيٽس ڪڏهن ناهي ڪيو."
        },
        {
          age: "10 سالن ۾",
          grade: "ڪلاس 5",
          task: "اسٽال هلائي ٿو ۽ وڏن اڳيان پچ ڪري ٿو.",
          contrast: "قيمت، نقد ۽ گراهڪ سڌو سکي ٿو."
        },
        {
          age: "12 سالن ۾",
          grade: "ڪلاس 6–7",
          task: "پائٿون لکي ٿو ۽ موبائل ائپ ٺاهي ٿو.",
          contrast: "سيوهڻ ۾ حقيقي يوزرن کي پهچائي ٿو."
        },
        {
          age: "13 سالن ۾",
          grade: "ڪلاس 8",
          task: "ٽيم سان اسٽارٽ اپ رجسٽر ڪري ٿو.",
          contrast: "اجنبين کي وڪرو ڪري ٿو ۽ کاتو رکي ٿو."
        },
        {
          age: "15 سالن ۾",
          grade: "ڪلاس 9",
          task: "مقامي ڪاروبار لاءِ AI ٽول ٺاهي انڪيوبيٽر ۾ داخل ٿئي ٿو.",
          contrast: "بين الاقوامي اسٽارٽ اپ اسٽيجن تي مقابلو ڪري ٿو."
        },
        {
          age: "16 سالن ۾",
          grade: "ميٽرڪ",
          task: "BISE جي سٺن مارڪن ۽ هلندڙ پراڊڪٽ سان گريجوئيٽ ٿئي ٿو.",
          contrast: "NIC ۽ ORIC مهمانن اڳيان ڊيمو ڊي. عوامي پورٽ فوليو."
        }
      ],
      comparison: {
        headers: ["عام گريجوئيٽ (22 سال)", "رائزنگ سنڌ جو شاگرد (16 سال)"],
        rows: [
          { typical: "سي وي ۽ تصديق ٿيل فوٽو ڪاپيون", rising: "ٺاهيل ڪم جو لائيو پورٽ فوليو" },
          { typical: "ياد ڪيل نظريا، وسرندڙ", rising: "حقيقي يوزرن سان پراڊڪٽس" },
          { typical: "نوڪري جي اشتهار جو انتظار", rising: "اجنبين کي وڪرو ڪري چڪو" },
          { typical: "خوف ته AI نوڪري کسيندو", rising: "روزانو AI سان ٺاهي ٿو" },
          { typical: "شهر يا پرڏيهه وڃڻ جي مجبوري", rising: "سيوهڻ مان عالمي گراهڪن جي خدمت" }
        ]
      },
      closingNote: "يونيورسٽي هر شاگرد لاءِ کليل رهي ٿي — هٿ ۾ پورٽ فوليو سان."
    },
    theModel: {
      badge: "ٻه سطحي نصاب",
      title: "بورڊ جا نتيجا محفوظ. مستقبل شامل.",
      openingPromise: "ٻه سطحون. هڪ ٽائيم ٽيبل. ڪا قرباني ناهي.",
      promiseDetail: "هفتي جو لڳ ڀڳ 70٪ سنڌ بورڊ نصاب — ڪلاس 9–10 ۾ 80٪. باقي ڪمپيوٽنگ، AI ۽ اسٽارٽ اپ سازي.",
      timelineStages: [
        {
          grade: "نرسري – ڪي جي",
          computing: "اسڪرين کانسواءِ لاجڪ گيمز ۽ 'روبوٽ کي هدايت ڏيو' رانديون.",
          entrepreneurship: "شراڪت، ڪلاس جون ذميواريون، مارڪيٽ ڊي رول پلي.",
          milestone: "منطق ۽ همدردي"
        },
        {
          grade: "ڪلاس 1–3",
          computing: "ScratchJr، فلور روبوٽ، ٽائپنگ.",
          entrepreneurship: "حقيقي سڪن سان ڪلاس جو دڪان، بچت جي گُلق.",
          milestone: "پهريون ڪوڊ"
        },
        {
          grade: "ڪلاس 4–5",
          computing: "اسڪريچ، micro:bit، پهريون AI ماڊل.",
          entrepreneurship: "بازار اسٽال، والدين اڳيان ننڍي ڪمپني جو پچ.",
          milestone: "پهريون AI ماڊل"
        },
        {
          grade: "ڪلاس 6–7",
          computing: "پائٿون، موبائل ائپس، IoT سينسر، ايماندار AI پرامپٽنگ.",
          entrepreneurship: "بزنس ماڊل ڪينواس، حقيقي يوزرن سان پهرين پراڊڪٽ، بنيادي کاتو.",
          milestone: "پهرين لانچ ٿيل پراڊڪٽ"
        },
        {
          grade: "ڪلاس 8",
          computing: "ويب، APIs، نگراني هيٺ AI ايجنٽ ورڪ فلو، 3D پرنٽنگ.",
          entrepreneurship: "ٽيم، گراهڪن ۽ ٽه-ماهي کاتي سان رجسٽرڊ شاگرد اسٽارٽ اپ.",
          milestone: "رجسٽرڊ اسٽارٽ اپ"
        },
        {
          grade: "ڪلاس 9–10",
          computing: "بورڊ ڪمپيوٽر سائنس + مقامي ڪاروبار لاءِ AI آٽوميشن.",
          entrepreneurship: "انڪيوبيٽر سيمسٽر: MVP، شروعاتي يوزر، NIC/ORIC مهمانن اڳيان ڊيمو ڊي پچ.",
          milestone: "ميٽرڪ + لائيو پورٽ فوليو"
        }
      ],
      teachingPillars: [
        {
          title: "مهارت پهريان",
          desc: "هفتيوار چڪاس ۽ ٻيهر سيکارڻ. ڪو ٻار خاموشي سان پوئتي نه رهندو."
        },
        {
          title: "عمر ڀر جو اي-پورٽ فوليو",
          desc: "ڪي جي کان ميٽرڪ تائين هر پروجيڪٽ ۽ اسٽارٽ اپ رپورٽ، هڪ عوامي رڪارڊ ۾."
        },
        {
          title: "والدين جو ڊيش بورڊ",
          desc: "مهيني جي ترقي سنڌي، اردو يا انگريزيءَ ۾، توهان جي فون تي."
        },
        {
          title: "استاد اڪيلا ناهن",
          desc: "رڪارڊ ٿيل سبق ڪٽس ۽ مرڪزي سهائتا. ڪنهن استاد جو AI ماهر هجڻ ضروري ناهي."
        },
        {
          title: "ديانتداريءَ سان AI",
          desc: "AI هڪ اوزار طور، استاد جي رهنمائي ۾، ايماندار ڪم جي چٽن اصولن سان."
        }
      ]
    },
    smeEnterprises: {
      badge: "عملي سکيا",
      title: "مقامي ڪاروبار پهرين گراهڪ طور",
      subtitle: "اسٽارٽ اپ کي گراهڪ گهرجن. سيوهڻ جا ورڪشاپ ۽ دڪان اهي جايون آهن جتي اسان جا شاگرد پنهنجا پهريان گراهڪ ڳولين ٿا.",
      whatIsSmeTitle: "مقامي ڪاروبار ڇو؟",
      whatIsSmeDesc: "صابڻ يونٽ، موبائل ريپيئر دڪان، چپل ٺاهيندڙ ۽ هنري ورڪشاپ سيوهڻ جي معيشت هلائين ٿا — ۽ انهن وٽ حل ڪرڻ جهڙا حقيقي مسئلا آهن.",
      whyConnectTitle: "شاگرد انهن سان ڇا ڪن ٿا",
      whyConnectDesc: "دورو ڪن، ڏسن، رڪاوٽ ڳولين ۽ ان کي حل ڪندڙ پراڊڪٽ ٺاهين — بلنگ ائپ، آن لائن دڪان، سادي آٽوميشن.",
      learningOutcomesTitle: "شاگرد ڪهڙيون مهارتون مشق ڪن ٿا",
      learningOutcomes: [
        {
          title: "حقيقي مسئلو ڳولڻ",
          desc: "ورڪشاپ کي ڏسو ۽ سڃاڻو ته ڪهڙي شيءِ وقت يا پئسو کائي ٿي."
        },
        {
          title: "گراهڪن سان ڳالهائڻ",
          desc: "ٻڌو، پڇو ۽ حل سادي ٻوليءَ ۾ سمجهايو."
        },
        {
          title: "پيداوار ۽ معيار",
          desc: "ڏسو ته شيون ڪيئن ٺهن، جاچجن ۽ اگهه رکجن ٿيون."
        },
        {
          title: "حساب ڪتاب",
          desc: "خرچ، اسٽاڪ، نقد ۽ منافعو — حقيقي ڪاروبار اندر."
        }
      ],
      examplesTitle: "شاگرد ڪٿان شروع ڪن ٿا",
      examplesSubtitle: "سيوهڻ جا چار قسمن جا ڪاروبار جيڪي پهريان گراهڪ بڻجن ٿا.",
      examples: [
        {
          id: "soap-making",
          title: "صابڻ ٺاهڻ جا يونٽ",
          role: "پيداوار",
          businessDoes: "مقامي بازارن لاءِ صابڻ ملائين، ڍالين ۽ پيڪ ڪن ٿا.",
          studentsLearn: "شاگرد بيچ-ڪاسٽنگ شيٽون ۽ سادا آن لائن ڪيٽلاگ ٺاهين ٿا.",
          tags: ["خرچ جو حساب", "ڪيٽلاگ", "پيڪنگ"]
        },
        {
          id: "mobile-repair",
          title: "موبائل ريپيئر دڪان",
          role: "ٽيڪنيڪل سروس",
          businessDoes: "خرابيون ڳولين، اسڪرين بدلائين، چارجنگ ۽ سافٽ ويئر ٺيڪ ڪن ٿا.",
          studentsLearn: "شاگرد جاب-ٽريڪنگ ۽ ڪوٽيشن ٽول ٺاهين ٿا ۽ بنيادي چڪاس سکن ٿا.",
          tags: ["چڪاس", "جاب ٽريڪنگ", "گراهڪ خدمت"]
        },
        {
          id: "footwear-manufacturing",
          title: "چپل ۽ جوتن جا يونٽ",
          role: "هنر ۽ تياري",
          businessDoes: "چمڙو ڪٽي ۽ سبي سنڌي چپل ۽ جديد جوتا ٺاهين ٿا.",
          studentsLearn: "شاگرد پراڊڪٽ فوٽو، آن لائن دڪان ۽ اسٽاڪ ٽريڪر ٺاهين ٿا.",
          tags: ["اي ڪامرس", "اسٽاڪ", "اگهه"]
        },
        {
          id: "local-workshops",
          title: "هنري ۽ مشيني ورڪشاپ",
          role: "هنر",
          businessDoes: "اجرڪ ڇپائي، گيراج، لوهه ۽ ڪاٺ جا دڪان شهر جي خدمت ڪن ٿا.",
          studentsLearn: "شاگرد ڪم جو نقشو ٺاهين، خيال آزمائين ۽ اهي هنر ڳولين جن لاءِ ٺاهڻ جهڙو آهي.",
          tags: ["ورڪ فلو", "پروٽوٽائپ", "فني رستا"]
        }
      ]
    },
    heroTrack: {
      badge: "ڪردار جو ٿنڀو",
      title: "شخصيت سازي",
      subtitle: "اعتماد، ڳالهه ٻولهه، نظم ۽ ڪردار — اسڪول، گهر ۽ عالمي اسٽيج لاءِ.",
      description: "بانيءَ کي ڪوڊ کان وڌيڪ گهرجي. هفتي ۾ ٻه پيريڊ اهي عادتون ٺاهين ٿا جيڪي شاگرد کي پچ، ٽيم ۽ ڏکئي ڏينهن مان پار ڪرائين ٿيون.",
      features: [
        {
          title: "ڳالهه ٻولهه",
          desc: "چڱيءَ طرح ٻڌو، صاف ڳالهايو، اعتماد سان پيش ڪريو."
        },
        {
          title: "نظم ۽ اخلاق",
          desc: "سچائي، ذميواري ۽ احترام، روزاني مشق سان."
        },
        {
          title: "جبلن جي ٽريڪنگ",
          desc: "ٻُڏو جبل، ڀاڳو ٽوڙهو ۽ ڪارونجهر: فٽنيس، ٽيم ورڪ ۽ فطرت جو احترام."
        },
        {
          title: "همت ۽ قيادت",
          desc: "همدردي، ٽيم ورڪ ۽ دٻاءَ هيٺ ٺهيل فيصلا."
        }
      ],
      heroOath: {
        title: "شاگردن جو عهد (ڪلاس 9)",
        text: "”مان سچائيءَ سان ڪم ڪندس. مان چٽائي ۽ احترام سان ڳالهائيندس. مان پنهنجي ٽيم جو ساٿ ڏيندس، سنڌ جي مٽيءَ جي خدمت ڪندس، ۽ هر چئلينج کي همت سان منهن ڏيندس.“"
      }
    },
    theProof: {
      badge: "نظير",
      title: "سيوهڻ کان سلڪون ويلي تائين",
      intro: "باني علي مرتضيٰ سولنگي پنهنجو پهريون اسٽارٽ اپ سيوهڻ ۾ ٺاهيو. NUST جو GAP پروگرام کٽڻ کان پوءِ، هو سلڪون ويلي ۾ 30 ملڪن جي بانيئن مان ٽئين نمبر تي آيو.",
      investorTitle: "سيوهڻ جو اسٽارٽ اپ، عالمي سيڙپڪار جي سپورٽ سان.",
      investorDesc: "علي جي اسٽارٽ اپ جي سيڙپڪار 30 کان وڌيڪ يونيڪارن ۾ سيڙپ ڪئي آهي، جن ۾ ٽيسلا، پي پال، اسپيس ايڪس ۽ ياهو شامل آهن.",
      stats: [
        { number: "30 مان ٽيون", label: "سلڪون ويلي ۾ ملڪن جي رينڪنگ" },
        { number: "20+", label: "ملڪن ۾ اڄ خدمت" },
        { number: "سوين", label: "هاءِ ٽيڪ ملازمن جي اڳواڻي" }
      ],
      whyItMatters: {
        title: "سيوهڻ مان عالمي ڪمپني ٺهي سگهي ٿي. اسان ڪري ڏيکاريو.",
        desc: "هي اسڪول ان سفر کي ڪلاس 1 کان نصاب ۾ بدلائي ٿو."
      },
      founderQuote: {
        quote: "”جيڪو ڪجهه هو اوهان جي ٻار کي سيوهڻ مان ناممڪن چوندا، مان اهو سيوهڻ مان ڪري ڏيکاريو آهي. رڳو اهڙي اسڪول جي کوٽ هئي. تنهنڪري مان هي اسڪول ٺاهيو.“",
        name: "علي مرتضيٰ سولنگي",
        role: "باني، دي رائزنگ سنڌ"
      },
      milestones: [
        { year: "پهريون مرحلو", stage: "سيوهڻ مان جنم", desc: "لال شهباز قلندر جي درگاهه ڀرسان عام ڪمرن ۾ پهرين پراڊڪٽ ڪوڊ ڪئي وئي." },
        { year: "ٻيو مرحلو", stage: "قومي چيمپيئن", desc: "NUST جو گلوبل ايڪسيليريشن پروگرام (GAP) کٽيو." },
        { year: "ٽيون مرحلو", stage: "سلڪون ويلي اسٽيج", desc: "30 ملڪن مان ٽيون نمبر، 'The Most Investable Startup in Silicon Valley'." },
        { year: "چوٿون مرحلو", stage: "عالمي سطح", desc: "30+ يونيڪارن سيڙپڪار جي سپورٽ؛ 20+ ملڪن ۾ ڪم." },
        { year: "پنجون مرحلو", stage: "واپس سيوهڻ", desc: "اهو سفر، اسڪول جي نصاب طور ٻيهر ٺاهيل." }
      ]
    },
    globalBridge: {
      badge: "مقامي ڏات · عالمي مارڪيٽ",
      title: "عالمي پُل",
      subtitle: "شاگردن جا اسٽارٽ اپ پهرين ڏينهن کان عالمي مارڪيٽ لاءِ ٺهن ٿا.",
      lanes: [
        {
          laneNumber: "01",
          title: "بنا سرحدن جي شريڪ باني",
          highlight: "سيوهڻ ۾ باني. سلڪون ويلي ۾ شريڪ باني. هڪ ئي ڪمپني.",
          description: "پرڏيهي سنڌي ۽ عالمي ماهر شاگردن جي اسٽارٽ اپس ۾ ڀائيوار ٿين ٿا — تجربي، نيٽ ورڪ يا سرمايي سان."
        },
        {
          laneNumber: "02",
          title: "عالمي سڃاڻپ",
          highlight: "ٻاهرين ملڪن جي اسٽارٽ اپ هبز، يونيورسٽين ۽ ليبز جا مطالعاتي دورا.",
          description: "شاگرد ڏسن ٿا ته عالمي باني ڪيئن ڪم ڪن ٿا — پوءِ گهر اچي ٺاهين ٿا."
        },
        {
          laneNumber: "03",
          title: "عالمي رجسٽريشن ۽ پيٽنٽ",
          highlight: "جنم سيوهڻ ۾. رجسٽريشن ڊيلاويئر ۾. تحفظ سڄي دنيا ۾.",
          description: "چونڊيل شاگرد اسٽارٽ اپ آمريڪا ۾ رجسٽر ٿين ٿا ۽ سنڌ ۾ ٿيل ايجادن جا پيٽنٽ داخل ڪن ٿا."
        }
      ],
      closing: "ڏات سنڌ ۾ رهي ٿي. پراڊڪٽس دنيا ۾ وڃن ٿيون.",
      scholarshipHighlight: {
        badge: "ميرٽ ۽ ضرورت",
        title: "اسڪالرشپ",
        subtitle: "ڪو به باصلاحيت ٻار پئسي سبب ٻاهر نه رهندو.",
        description: "ميرٽ ۽ ضرورت تي ٻڌل اسڪالرشپ اهل شاگردن لاءِ مڪمل پروگرام کي ڍڪين ٿيون — ليب، ٽريڪنگ ۽ اسٽارٽ اپ سميت.",
        points: [
          "غير معمولي ڏات لاءِ ميرٽ ايوارڊ",
          "هر مستحق ٻار لاءِ ضرورت تي ٻڌل سهائتا",
          "سڄي سنڌ جي اهل خاندانن لاءِ کليل"
        ],
        valueProposition: "هڪ شاگرد جي سهائتا سڄي ڪميونٽي کي مٿي کڻي ٿي."
      },
      internationalTripsHighlight: {
        badge: "عالمي افق",
        title: "بين الاقوامي مطالعاتي دورا",
        subtitle: "دنيا جو بهترين ڏسو. پوءِ گهر ۾ ٺاهيو.",
        description: "عالمي اسڪولن، يونيورسٽين ۽ اسٽارٽ اپ هبز جا رٿيل دورا ارادن کي وسيع ڪن ٿا ۽ ڏيکارين ٿا ته ڇا ممڪن آهي.",
        points: [
          "عالمي معيار جا ڪلاس روم ۽ انڪيوبيٽر",
          "عالمي ساٿي ۽ مينٽر",
          "ٻاهر اعتماد، سنڌ ۾ پاڙون"
        ],
        valueProposition: "سڃاڻپ شاگرد جي ممڪن جي حد وڌائي ٿي."
      }
    },
    theMovement: {
      badge: "سنڌ جي جاڳرتا",
      title: "سنڌ، ٻيهر اڀرندڙ",
      inheritance: {
        title: "سنڌ هميشه ٺاهيو آهي.",
        desc: "موهن جو دڙو 5,000 سال اڳ رٿيل شهر هو. ٺاهڻ اسان جو ورثو آهي."
      },
      globalVillage: {
        title: "مارڪيٽ هاڻي عالمي آهي.",
        desc: "سيوهڻ ۾ ٺهيل پراڊڪٽ ڪٿي به يوزرن تائين پهچي سگهي ٿي. انٽرنيٽ فاصلو ختم ڪري ڇڏيو."
      },
      buildHere: {
        title: "عالمي ٺاهيو. پاڙون هتي رکو.",
        desc: "اسان پرڏيهه ۾ ڪم ڪندڙ خاندانن جو احترام ڪريون ٿا. اسان چاهيون ٿا ته شاگردن وٽ گهر ويهي ٺاهڻ ۽ دنيا کي وڪڻڻ جو اختيار هجي."
      },
      tenYearPicture: {
        title: "ڏهن سالن جو نقشو",
        desc: "سنڌ ڪيئن لڳندي جڏهن ان جا شاگرد اسٽارٽ اپ ٺاهيندا.",
        points: [
          "سيوهڻ جا اسٽارٽ اپ زراعت، پاڻي، صحت ۽ ٻوليءَ جا مسئلا حل ڪندا.",
          "نياڻين جون AI ۽ روبوٽڪس ٽيمون بين الاقوامي پوڊيم تي.",
          "سيوهڻ جي ڪمپنين ۾ سلڪون ويلي جا شريڪ باني.",
          "سيوهڻ مان آمريڪي پيٽنٽ آفيس ۾ داخل ٿيل پيٽنٽ.",
          "سنڌي، اردو، انگريزي — ۽ AI ۾ ماهر نسل."
        ]
      },
      invitation: "والدين، شاگرد، استاد يا ڀائيوار طور شامل ٿيو."
    },
    sehwanCampus: {
      badge: "سيوهڻ شريف، سنڌ",
      title: "سيوهڻ — پهريان هڪ شهر",
      whySehwan: "بانيءَ جو گهر، ورثي جو شهر، ۽ سڄي سنڌ ۾ وڌڻ لاءِ ٺهيل ماڊل.",
      cityProjects: "شاگرد شهر لاءِ ٺاهين ٿا: ورثي جا گائيڊ، هنرمندن جا آن لائن دڪان، ۽ ٻُڏو جبل، ڀاڳو ٽوڙهو ۽ ڪارونجهر ۾ ٽريڪنگ پروجيڪٽ.",
      campusSpine: [
        "ڪمپيوٽنگ ۽ AI ليب",
        "ميڪر اسپيس: 3D پرنٽر ۽ IoT",
        "ميڊيا، پوڊڪاسٽ ۽ وڊيو اسٽوڊيو",
        "انڪيوبيٽر پچ روم",
        "آڊيٽوريم ۽ اسٽيج",
        "سائنس ليبز"
      ],
      roadAhead: "نرسري–ميٽرڪ کان ڪاليج، ۽ هڪ ڏينهن سنڌ جي ٽيڪنالاجي يونيورسٽي.",
      eveningAcademy: {
        title: "شام جي اڪيڊمي",
        opening: "شام 5 وڳي کان پوءِ ليبون سيوهڻ لاءِ کلن ٿيون: نوجوانن ۽ بالغن لاءِ 12 هفتن جا ڪورس.",
        tracks: [
          {
            name: "ڊجيٽل بنياد ۽ فري لانسنگ",
            duration: "12 هفتا",
            outcome: "ڪمپيوٽر بنياد → آفيس ٽولز → ڪم جي انگريزي → پهريون بين الاقوامي ڪم",
            alignedWith: "سيلاني ماڊل، NAVTTC سرٽيفائيڊ"
          },
          {
            name: "ڪوڊ ۽ عملي AI",
            duration: "12 هفتا",
            outcome: "پائٿون → ڊيٽا → AI ٽولز → هڪ ڊيپلائي ٿيل آٽوميشن",
            alignedWith: "PSEB سرٽيفڪيشن ۽ انٽرنشپ"
          },
          {
            name: "وڊيو، ميڊيا ۽ ڪهاڻي",
            duration: "12 هفتا",
            outcome: "فون وڊيوگرافي → ايڊيٽنگ → 3 شايع ٿيل ڪم، جن ۾ هڪ 'مثبت سنڌ' ڊاڪيومينٽري",
            alignedWith: "ڪيمپس اسٽوڊيو ۽ AI ليب تائين رسائي"
          },
          {
            name: "اي ڪامرس",
            duration: "12 هفتا",
            outcome: "پراڊڪٽ فوٽو → ڪيٽلاگ → آن لائن ادائگي → هڪ لائيو دڪان",
            alignedWith: "سيوهڻ جا واپاري ۽ شاگرد مينٽرنگ"
          }
        ]
      },
      innovationLab: {
        title: "انوويشن ليب",
        desc: "يونيورسٽي جا شاگرد ۽ ماهر بينچ، رهنمائي ۽ ڊيمو ڊي لاءِ درخواست ڏين ٿا.",
        benches: [
          "فائنل ايئر پروجيڪٽ رجسٽرڊ اسٽارٽ اپ ۾ بدليل",
          "سائيڊ پروجيڪٽ وينچر لاءِ تيار پراڊڪٽ ۾ بدليل",
          "باني پنهنجا پهريان انجنيئرنگ ۽ ڊزائن شريڪ باني ڳوليندڙ"
        ]
      },
      partners: [
        { name: "NIC (نيشنل انڪيوبيشن سينٽر)", role: "انڪيوبيشن مينٽر ۽ ڊيمو ڊي جج" },
        { name: "ORIC لاڳاپا", role: "يونيورسٽي تحقيق جو ڪمرشلائيزيشن" },
        { name: "PSEB", role: "مهارت سرٽيفڪيشن ۽ ٽيڪ انٽرنشپ" },
        { name: "سيلاني", role: "شام جي ٽريننگ جو ماڊل" }
      ]
    },
    joinUs: {
      badge: "عمل ڪريو",
      title: "پنهنجو دروازو چونڊيو.",
      doors: [
        {
          id: "parents",
          audience: "والدين لاءِ",
          title: "پاڻ ڏسو.",
          description: "ليب ڏسو، فيوچر ليئر ڪلاس ۾ ويهو، استادن سان ملو، امتحانن ۽ اسڪالرشپ بابت پڇو.",
          ctaText: "ڪيمپس جو دورو بُڪ ڪريو",
          secondaryCta: "واٽس ائپ ڪريو"
        },
        {
          id: "students",
          audience: "شاگردن لاءِ",
          title: "ڇنڇر تي ڪجهه ٺاهيو.",
          description: "AI ماڊل ٽرين ڪريو، 3D ڊزائن پرنٽ ڪريو، وڊيو ٺاهيو يا خيال پچ ڪريو.",
          ctaText: "بلڊ ڊي لاءِ رجسٽر ٿيو"
        },
        {
          id: "professionals",
          audience: "يونيورسٽي شاگردن ۽ ماهرن لاءِ",
          title: "پروجيڪٽ کي اسٽارٽ اپ بڻايو.",
          description: "ليب بينچ، AI ٽولز، رهنمائي ۽ ڊيمو ڊيز.",
          ctaText: "ليب بينچ لاءِ درخواست ڏيو"
        },
        {
          id: "teachers",
          audience: "استادن لاءِ",
          title: "ٺاهي سيکاريو.",
          description: "سبق ڪٽس، جديد ليب، مرڪزي سهائتا، تربيت ۽ سٺو معاوضو.",
          ctaText: "استاد طور درخواست ڏيو"
        }
      ],
      faqs: [
        {
          question: "ڇا فيوچر ليئر منهنجي ٻار جي ميٽرڪ مارڪن کي نقصان پهچائيندي؟",
          answer: "نه. بورڊ جا مضمون هفتي جو لڳ ڀڳ 70٪ وٺن ٿا، ۽ ڪلاس 9–10 ۾ 80٪، امتحاني مشق سميت."
        },
        {
          question: "ڇا هي اسان جي اسلامي ۽ ثقافتي قدرن مطابق آهي؟",
          answer: "ها. سنڌ جو اسلاميات نصاب پڙهايو وڃي ٿو. نياڻين جا گروپ عورت مينٽر هلائين ٿيون. ٽريڪنگ لاءِ والدين جي اجازت ۽ حفاظتي نگراني لازمي آهي."
        },
        {
          question: "ڇا اسڪالرشپ آهن؟",
          answer: "ها. ميرٽ ۽ ضرورت تي ٻڌل اسڪالرشپ اهل شاگردن کي مڪمل پروگرام تائين رسائي ڏين ٿيون."
        },
        {
          question: "بين الاقوامي مطالعاتي دورا ڇا ڏين ٿا؟",
          answer: "عالمي اسڪولن، اسٽارٽ اپ هبز ۽ ثقافتن سان سڃاڻپ — ۽ چٽو احساس ته شاگرد گهر ۾ ڇا ٺاهي سگهن ٿا."
        },
        {
          question: "مان پنهنجي ٻار جي ترقي ڪيئن ڏسان؟",
          answer: "سنڌي، اردو يا انگريزيءَ ۾ والدين جي ڊيش بورڊ ذريعي، بورڊ جي ڪم ۽ پروجيڪٽن تي مهيني وار اپڊيٽ سان."
        }
      ]
    },
    footer: {
      slogan: "تعمير ڪندڙ، نه رڳو ڊگري وٺندڙ.",
      ctaBand: "سيٽون ڪلاس رومز سان محدود آهن. دورو بڪ ڪريو.",
      ctaButton: "ڪيمپس دورو بُڪ ڪريو",
      rights: "دي رائزنگ سنڌ. سڀ حق محفوظ آهن. سيوهڻ شريف، سنڌ، پاڪستان.",
      governanceNote: "غير سياسي. سنڌي اوليت. مستقبل تي ڌيان."
    }
  },
  ur: {
    meta: {
      title: "دی رائزنگ سندھ | وہ اسکول جو اسٹارٹ اپ بناتا ہے",
      description: "سہون کا اسکول، جہاں طلبہ سندھ بورڈ کا نصاب پڑھتے ہیں اور کلاس 1 سے میٹرک تک عالمی منڈی کے لیے حقیقی اسٹارٹ اپ بناتے ہیں۔",
      slogan: "تعمیر کار، نہ کہ محض ڈگری یافتہ۔",
      positioning: "سندھ بورڈ کی تعلیم کے ساتھ AI اور اسٹارٹ اپ سازی، کلاس 1 سے میٹرک۔"
    },
    nav: {
      home: "ہوم",
      whyWeExist: "ہمارا مقصد",
      theModel: "ہمارا ماڈل",
      whatStudentsDo: "طلبہ کیا بناتے ہیں",
      theProof: "ثبوت",
      globalBridge: "عالمی پل",
      sehwanCampus: "سہون کیمپس",
      theMovement: "تحریک",
      joinUs: "شامل ہوں",
      visitCampus: "کیمپس کا دورہ کریں",
      bookVisit: "دورہ بک کریں",
      curriculumMap: "نصاب کا نقشہ",
      curriculumMapSub: "نرسری تا میٹرک + فیوچر لیئر",
      theHeroTrackNav: "شخصیت سازی",
      theHeroTrackNavSub: "کردار، اعتماد اور ٹریکنگ",
      studentIncubator: "طلبہ کے اسٹارٹ اپ",
      studentIncubatorSub: "کلاس 8 تک حقیقی اسٹارٹ اپ",
      eveningAcademyNav: "شام کی اکیڈمی",
      eveningAcademyNavSub: "شام 5 بجے کے بعد کمیونٹی کورسز"
    },
    common: {
      brandSubtitle: "فیوچر اسکول · سہون",
      livingPrecedent: "زندہ ثبوت",
      verifiedArchive: "تصدیق شدہ ریکارڈ",
      nationalStage: "قومی اسٹیج اور ٹیک کانفرنس",
      resultsSpeak: "نتائج جو خود بولتے ہیں",
      degreeUnemployment: "ڈگری یافتہ بیروزگاری",
      degreeUnemploymentSub: "بمقابلہ 4.7% بغیر تعلیم (LFS 24–25)",
      siliconValleyRank: "سلیکان ویلی رینک",
      siliconValleyRankSub: "30+ یونیکورن انویسٹر کی حمایت",
      boardProtected: "بورڈ کے نتائج محفوظ",
      boardProtectedSub: "مکمل BISE نصاب + فیوچر لیئر",
      aiLab: "اے آئی لیب",
      biseMetric: "BISE 100%",
      shippedProof10Years: "10 سال کا عملی کام",
      curriculumTrajectory: "نصاب کا راستہ",
      class1ToMatric: "کلاس 1 → میٹرک",
      compoundingAdvantage: "دس سال کی مسلسل مشق",
      openWhatsAppChat: "واٹس ایپ کھولیں",
      admissionsDeskOnline: "داخلہ ڈیسک",
      admissionsDeskSub: "داخلہ، اسکالرشپ، کیمپس وزٹ — واٹس ایپ پر۔",
      done: "مکمل",
      close: "بند کریں",
      apply: "درخواست دیں",
      submit: "جمع کریں",
      fullName: "پورا نام",
      fullNamePlaceholder: "مثال: اسد علی / زینب سولنگی",
      whatsAppNumber: "واٹس ایپ نمبر",
      childClass: "بچے کی کلاس",
      workshopTrack: "بلڈ ٹریک",
      projectSummary: "اسٹارٹ اپ آئیڈیا (ایک سطر)",
      teachingPitch: "آپ کے طلبہ اس ٹرم کیا بنائیں گے؟",
      submitRequest: "جمع کریں",
      registrationReceived: "موصول ہو گیا!",
      registrationReceivedDesc: "سہون ٹیم واٹس ایپ پر جواب دے گی۔",
      validationName: "براہ کرم اپنا پورا نام درج کریں۔",
      validationPhone: "براہ کرم درست فون یا واٹس ایپ نمبر درج کریں (کم از کم 10 ہندسے)۔",
      nextSeatsLimited: "نشستیں کلاس رومز سے محدود ہیں، حوصلے سے نہیں۔",
      elevation5688: "بڈو جبل · بھاگو توڑہو · کارونجھر",
      makersInnovationHub: "میکرز اور انوویشن ہب",
      sehwanSharifLabel: "سہون شریف",
      whySehwanTitle: "سہون کیوں",
      cityProjectsTitle: "شہر ہی کلاس روم ہے",
      campusSpineTitle: "کیمپس کا ڈھانچہ",
      partnersTitle: "ایکو سسٹم پارٹنرز",
      printMap: "نرسری تا میٹرک نقشہ ڈاؤن لوڈ کریں",
      seeFutureLayerLive: "فیوچر لیئر کا پیریڈ لائیو دیکھیں",
      systemComparisonMatrix: "موازنہ",
      systemComparisonSub: "بات نظام کی ہے، فرد کی نہیں",
      howWeTeachTitle: "ہم کیسے پڑھاتے ہیں",
      howWeTeachSub: "پانچ ستون جو والدین دیکھ سکتے ہیں",
      exploreTitle: "دریافت کریں",
      programsTitle: "پروگرامز",
      valuesTitle: "اقدار و رابطہ",
      craftedWithPride: "سندھ میں فخر سے تیار کردہ",
      forSindhFuture: "کل کے معماروں کے لیے",
      smallMediumEnterprises: "مقامی کاروبار",
      sindhLocalEconomy: "سندھ کی مقامی معیشت",
      realWorldPractice: "عملی مشق",
      vocationalCareerPathways: "ہاتھ کے ہنر",
      nurseryMatricBise: "نرسری تا میٹرک BISE اسکیم",
      heroTrackGorakhTreks: "کردار اور پہاڑی ٹریکنگ",
      eveningCommunityAcademy: "شام کی اکیڈمی",
      innovationLabBuilders: "انوویشن لیب",
      saturdayBuildDays: "ہفتہ وار بلڈ ڈیز",
      sehwanCampusLabNav: "سہون کیمپس اور لیب",
      theMovementNav: "تحریک",
      bookCampusVisitTitle: "کیمپس کا دورہ بک کریں",
      saturdayBuildDayTitle: "ہفتہ وار بلڈ ڈے",
      applyToTeachTitle: "بطور استاد درخواست دیں",
      labBenchTitle: "انوویشن لیب بینچ",
      modalSubtitle: "سہون شریف کیمپس · دی رائزنگ سندھ",
      gradeNursery: "نرسری – کے جی",
      grade1to3: "کلاس 1–3 (پہلا کوڈ)",
      grade4to5: "کلاس 4–5 (پہلا AI ماڈل)",
      grade6to7: "کلاس 6–7 (پائتھن اور ایپس)",
      grade8: "کلاس 8 (رجسٹرڈ اسٹارٹ اپ)",
      grade9to10: "کلاس 9–10 (میٹرک + انکیوبیٹر)",
      trackAI: "AI ماڈل ٹرین کریں",
      track3D: "3D پروٹو ٹائپ پرنٹ کریں",
      trackMedia: "مثبت سندھ ویڈیو بنائیں",
      trackPitch: "ججز کے سامنے پچ کریں",
      teachNotesPlaceholder: "مثال: سائنس پراجیکٹس، کوڈنگ، دو لسانی تحریر...",
      labBenchPlaceholder: "مثال: انڈس بیسن کے لیے ایگری ٹیک، سندھی زبان کی AI...",
      stageSpecification: "درجہ",
      computingPillarTitle: "کمپیوٹنگ اور AI",
      entrepreneurshipPillarTitle: "اسٹارٹ اپ سازی",
      evidenceBehindNeed: "ثبوت",
      problemStripTitle: "امتحانات صرف یادداشت ناپتے ہیں۔",
      problemStripHighlight: "مارکیٹ بنائی ہوئی چیز کی قیمت دیتی ہے۔",
      youthUnemploymentTitle: "گریجویٹ بیروزگاری",
      youthUnemploymentDesc: "20–24 سال کے 32.8% گریجویٹ بیروزگار ہیں۔ خواتین میں 45.2%۔",
      youthUnemploymentSource: "ماخذ: لیبر فورس سروے / گیلپ پاکستان",
      instantProofTitle: "نظریے کے بجائے کام کا ثبوت",
      instantProofDesc: "ہمارے کلاس 8 کے طلبہ کے پاس یوزرز ہیں۔ اکثر گریجویٹس کے پاس صرف سی وی۔",
      instantProofSub: "میٹرک تک ہر طالب علم پراڈکٹ لانچ کر چکا، کھاتہ رکھ چکا اور اسٹیج پر پچ کر چکا ہوتا ہے۔",
      noMarketObsolescenceTitle: "دس سال کی برتری",
      noMarketObsolescenceDesc: "بنانا چھ سال کی عمر میں شروع ہوتا ہے۔ سولہ سال تک یہ دس سال کی مشق ہے۔",
      gorakhTrekTitle: "پہاڑی ٹریکنگ مہمات",
      investorPrecedent: "سرمایہ کار کا اعتماد",
      lanePrefix: "راہ",
      directVentureTrack: "براہ راست وینچر ٹریک",
      partnerVentureCta: "طلبہ کے اسٹارٹ اپ میں شراکت کریں",
      positiveSindhDocNote: "ہر میٹرک کا طالب علم طلبہ کی بنائی ایک دستاویزی فلم میں حصہ لیتا ہے۔",
      joinTheMovementCta: "تحریک میں شامل ہوں",
      afterHoursEngine: "شام کا کمیونٹی انجن",
      alignedWithLabel: "ہم آہنگ",
      applyForBenchCta: "بینچ کے لیے درخواست دیں",
      fourDoorsSubtitle: "سہون سے سلیکان ویلی تک آزمودہ راستہ، اب نصاب کی شکل میں۔",
      forParentsBadge: "والدین کے لیے",
      forStudentsBadge: "طلبہ کے لیے",
      forTeachersBadge: "اساتذہ کے لیے",
      forBuildersBadge: "معماروں اور یونیورسٹی طلبہ کے لیے",
      bookTourCta: "دورہ بک کریں",
      registerBuildDayCta: "رجسٹر ہوں",
      teachersCardDesc: "لیسن کٹس۔ AI تربیت۔ اچھا معاوضہ۔",
      buildersCardDesc: "بینچ، AI ٹولز اور ڈیمو ڈیز۔",
      whatsappParentsPrompt: "سوال ہے؟ واٹس ایپ پر داخلہ ڈیسک سے بات کریں",
      faqTitle: "والدین کے سوالات",
      faqSubtitle: "اسکول کی پالیسی پر مبنی سیدھے جواب",
      bindingGovernanceTitle: "ہمارا وعدہ:",
      bindingGovernanceDesc: "ہم مہارتیں سکھاتے ہیں، نتائج کی ضمانت نہیں دیتے۔ اعداد سرکاری سروے کے ہیں۔ تنقید نظام پر ہے، اساتذہ یا خاندانوں پر نہیں۔",
      sehwanLocation: "سہون شریف، سندھ، پاکستان",
      whatsAppLabel: "واٹس ایپ"
    },
    proofStrip: {
      items: [
        "سندھ بورڈ (BISE) نصاب",
        "سندھی · اردو · انگریزی",
        "کلاس 1 سے AI",
        "کلاس 8 تک اسٹارٹ اپ",
        "سلیکان ویلی سے رابطہ"
      ]
    },
    hero: {
      badge: "نرسری تا میٹرک · سہون شریف",
      title: "اسٹارٹ اپ بنائیں۔",
      highlight: "سندھ سے، دنیا کے لیے۔",
      subtitle: "سندھ بورڈ کا مکمل نصاب، اس کے ساتھ کلاس 1 سے میٹرک تک AI اور اسٹارٹ اپ سازی۔",
      ctaPrimary: "کیمپس کا دورہ کریں",
      ctaSecondary: "طلبہ کیا بناتے ہیں",
      statPills: [
        { label: "کلاس 1", sub: "AI کا آغاز" },
        { label: "کلاس 8", sub: "پہلا اسٹارٹ اپ" },
        { label: "3rd / 30", sub: "سلیکان ویلی رینک" },
        { label: "100%", sub: "سندھ بورڈ محفوظ" }
      ]
    },
    problemStrip: {
      tagline: "فرق",
      conclusion: "صرف ڈگری اب مستقبل کی ضمانت نہیں۔ مہارت اور بنایا ہوا کام ہے۔",
      stats: [
        {
          number: "10.9%",
          label: "ڈگری ہولڈرز میں بیروزگاری",
          subtext: "بغیر تعلیم والے افراد میں 4.7% کے مقابلے",
          source: "لیبر فورس سروے 2024–25"
        },
        {
          number: "3 میں سے 1",
          label: "گریجویٹ بیروزگار (20–24)",
          subtext: "32.8% کیریئر کے آغاز پر بیروزگار",
          source: "گیلپ پاکستان / LFS تجزیہ"
        },
        {
          number: "45.2%",
          label: "خواتین گریجویٹس کی بیروزگاری",
          subtext: "عمر 25–29؛ مردوں میں 14.9%",
          source: "لیبر فورس سروے اور گیلپ"
        },
        {
          number: "760,000+",
          label: "2025 میں پاکستان چھوڑ گئے",
          subtext: "بیرونِ ملک روزگار کے لیے رجسٹرڈ",
          source: "ڈان، جولائی 2026"
        }
      ]
    },
    theTurn: {
      badge: "موڑ",
      title: "آنے والے دور کے لیے بنا اسکول۔",
      description: "سندھ بورڈ کا نصاب مرکز میں رہتا ہے۔ فیوچر لیئر اس میں AI، پراڈکٹ سازی اور حقیقی اسٹارٹ اپ شامل کرتی ہے — طلبہ نتائج اور پورٹ فولیو دونوں کے ساتھ نکلتے ہیں۔",
      breakdown: [
        {
          title: "سندھ بورڈ بنیاد",
          desc: "ریاضی، سائنس، انگریزی، اردو، سندھی، اسلامیات، معاشرتی علوم — امتحانی مشق کے ساتھ۔",
          percent: "~70–80%"
        },
        {
          title: "فیوچر لیئر",
          desc: "AI، کوڈنگ، اسٹارٹ اپ سازی اور بنائے ہوئے کام کا عوامی پورٹ فولیو۔",
          percent: "~20–30%"
        }
      ]
    },
    fourEngines: {
      badge: "ڈھانچہ",
      title: "چار انجن",
      subtitle: "ایک اسکول۔ چار مربوط پروگرام۔",
      engines: [
        {
          id: "school",
          title: "اسکول",
          role: "نرسری – میٹرک",
          description: "بورڈ مضامین اور مستقبل کی مہارتیں ایک ہی ٹائم ٹیبل پر۔",
          highlight: "نرسری تا میٹرک"
        },
        {
          id: "hero",
          title: "شخصیت سازی",
          role: "کردار اور اعتماد",
          description: "گفتگو، نظم اور کردار — مشق اور ٹریکنگ کے ذریعے۔",
          highlight: "ہفتے میں 2 پیریڈ"
        },
        {
          id: "incubator",
          title: "طلبہ کا اسٹارٹ اپ انکیوبیٹر",
          role: "حقیقی اسٹارٹ اپ، حقیقی یوزرز",
          description: "طلبہ پراڈکٹ بناتے، یوزرز ڈھونڈتے اور کمپنی رجسٹر کرتے ہیں — مقامی کاروبار ان کے پہلے گاہک۔",
          highlight: "کلاس 8 تا 10"
        },
        {
          id: "academy",
          title: "شام کی اکیڈمی",
          role: "کمیونٹی انجن",
          description: "سہون کے نوجوانوں کے لیے کوڈنگ، AI، میڈیا اور فری لانسنگ کے 12 ہفتے کے کورسز۔",
          highlight: "سہون کے لیے کھلا"
        }
      ]
    },
    whatStudentsDo: {
      badge: "موازنہ",
      title: "جو ہمارے طلبہ کرتے ہیں، گریجویٹس نہیں کر پاتے۔",
      intro: "بنانا چھ سال کی عمر میں شروع ہوتا ہے۔ سولہ تک طالب علم پراڈکٹ لانچ کر چکا، یوزرز کو سروس دے چکا اور سرمایہ کاروں کے سامنے پچ کر چکا ہوتا ہے۔",
      ladder: [
        {
          age: "9 سال میں",
          grade: "کلاس 4",
          task: "اپنا پہلا AI ویژن ماڈل ٹرین کرتی ہے۔",
          contrast: "اکثر CS گریجویٹس نے کبھی نہیں کیا۔"
        },
        {
          age: "10 سال میں",
          grade: "کلاس 5",
          task: "اسٹال چلاتا ہے اور بڑوں کے سامنے پچ کرتا ہے۔",
          contrast: "قیمت، نقد اور گاہک براہِ راست سیکھتا ہے۔"
        },
        {
          age: "12 سال میں",
          grade: "کلاس 6–7",
          task: "پائتھن لکھتا ہے اور موبائل ایپ بناتا ہے۔",
          contrast: "سہون میں حقیقی یوزرز تک پہنچاتا ہے۔"
        },
        {
          age: "13 سال میں",
          grade: "کلاس 8",
          task: "ٹیم کے ساتھ اسٹارٹ اپ رجسٹر کرتا ہے۔",
          contrast: "اجنبیوں کو بیچتا ہے اور کھاتہ رکھتا ہے۔"
        },
        {
          age: "15 سال میں",
          grade: "کلاس 9",
          task: "مقامی کاروبار کے لیے AI ٹول بنا کر انکیوبیٹر میں داخل ہوتا ہے۔",
          contrast: "بین الاقوامی اسٹارٹ اپ اسٹیجز پر مقابلہ کرتا ہے۔"
        },
        {
          age: "16 سال میں",
          grade: "میٹرک",
          task: "BISE کے اچھے نمبروں اور چلتی ہوئی پراڈکٹ کے ساتھ فارغ ہوتا ہے۔",
          contrast: "NIC اور ORIC مہمانوں کے سامنے ڈیمو ڈے۔ عوامی پورٹ فولیو۔"
        }
      ],
      comparison: {
        headers: ["عام گریجویٹ (22 سال)", "رائزنگ سندھ کا طالب علم (16 سال)"],
        rows: [
          { typical: "سی وی اور تصدیق شدہ فوٹو کاپیاں", rising: "بنائے ہوئے کام کا لائیو پورٹ فولیو" },
          { typical: "رٹا ہوا نظریہ، بھولتا ہوا", rising: "حقیقی یوزرز کے ساتھ پراڈکٹس" },
          { typical: "ملازمت کے اشتہار کا انتظار", rising: "اجنبیوں کو بیچ چکا" },
          { typical: "خوف کہ AI نوکری چھین لے گا", rising: "روزانہ AI کے ساتھ بناتا ہے" },
          { typical: "شہر یا بیرونِ ملک جانے کی مجبوری", rising: "سہون سے عالمی کلائنٹس کی خدمت" }
        ]
      },
      closingNote: "یونیورسٹی ہر طالب علم کے لیے کھلی رہتی ہے — ہاتھ میں پورٹ فولیو کے ساتھ۔"
    },
    theModel: {
      badge: "دو تہوں کا نصاب",
      title: "بورڈ کے نتائج محفوظ۔ مستقبل شامل۔",
      openingPromise: "دو تہیں۔ ایک ٹائم ٹیبل۔ کوئی سمجھوتہ نہیں۔",
      promiseDetail: "ہفتے کا تقریباً 70% سندھ بورڈ نصاب — کلاس 9–10 میں 80%۔ باقی کمپیوٹنگ، AI اور اسٹارٹ اپ سازی۔",
      timelineStages: [
        {
          grade: "نرسری – کے جی",
          computing: "بغیر اسکرین منطقی کھیل اور 'روبوٹ کو ہدایت دو' کھیل۔",
          entrepreneurship: "شراکت، کلاس روم کی ذمہ داریاں، مارکیٹ ڈے رول پلے۔",
          milestone: "منطق اور ہمدردی"
        },
        {
          grade: "کلاس 1–3",
          computing: "ScratchJr، فلور روبوٹس، ٹائپنگ۔",
          entrepreneurship: "حقیقی سکوں کے ساتھ کلاس روم شاپ، بچت کی گلک۔",
          milestone: "پہلا کوڈ"
        },
        {
          grade: "کلاس 4–5",
          computing: "اسکریچ، micro:bit، پہلا AI ماڈل۔",
          entrepreneurship: "بازار اسٹال، والدین کے سامنے مِنی کمپنی کی پچ۔",
          milestone: "پہلا AI ماڈل"
        },
        {
          grade: "کلاس 6–7",
          computing: "پائتھن، موبائل ایپس، IoT سینسرز، دیانت دار AI پرامپٹنگ۔",
          entrepreneurship: "بزنس ماڈل کینوس، حقیقی یوزرز کے ساتھ پہلی پراڈکٹ، بنیادی کھاتہ۔",
          milestone: "پہلی لانچ شدہ پراڈکٹ"
        },
        {
          grade: "کلاس 8",
          computing: "ویب، APIs، نگرانی میں AI ایجنٹ ورک فلوز، 3D پرنٹنگ۔",
          entrepreneurship: "ٹیم، گاہکوں اور سہ ماہی کھاتوں کے ساتھ رجسٹرڈ طلبہ اسٹارٹ اپ۔",
          milestone: "رجسٹرڈ اسٹارٹ اپ"
        },
        {
          grade: "کلاس 9–10",
          computing: "بورڈ کمپیوٹر سائنس + مقامی کاروبار کے لیے AI آٹومیشن۔",
          entrepreneurship: "انکیوبیٹر سمسٹر: MVP، ابتدائی یوزرز، NIC/ORIC مہمانوں کے سامنے ڈیمو ڈے پچ۔",
          milestone: "میٹرک + لائیو پورٹ فولیو"
        }
      ],
      teachingPillars: [
        {
          title: "مہارت پہلے",
          desc: "ہفتہ وار جانچ اور دوبارہ تدریس۔ کوئی بچہ خاموشی سے پیچھے نہیں رہتا۔"
        },
        {
          title: "عمر بھر کا ای-پورٹ فولیو",
          desc: "کے جی سے میٹرک تک ہر پراجیکٹ اور اسٹارٹ اپ رپورٹ، ایک عوامی ریکارڈ میں۔"
        },
        {
          title: "والدین کا ڈیش بورڈ",
          desc: "ماہانہ پیش رفت سندھی، اردو یا انگریزی میں، آپ کے فون پر۔"
        },
        {
          title: "اساتذہ تنہا نہیں",
          desc: "ریکارڈ شدہ لیسن کٹس اور مرکزی معاونت۔ کسی استاد کا AI ماہر ہونا ضروری نہیں۔"
        },
        {
          title: "دیانت کے ساتھ AI",
          desc: "AI بطور اوزار، استاد کی رہنمائی میں، دیانت دار کام کے واضح اصولوں کے ساتھ۔"
        }
      ]
    },
    smeEnterprises: {
      badge: "عملی تربیت",
      title: "مقامی کاروبار بطور پہلے گاہک",
      subtitle: "اسٹارٹ اپ کو گاہک چاہییں۔ سہون کی ورکشاپس اور دکانیں وہ جگہ ہیں جہاں ہمارے طلبہ اپنے پہلے گاہک ڈھونڈتے ہیں۔",
      whatIsSmeTitle: "مقامی کاروبار کیوں؟",
      whatIsSmeDesc: "صابن یونٹس، موبائل ریپیئر شاپس، چپل ساز اور دستکاری ورکشاپس سہون کی معیشت چلاتی ہیں — اور ان کے پاس حل کرنے لائق حقیقی مسائل ہیں۔",
      whyConnectTitle: "طلبہ ان کے ساتھ کیا کرتے ہیں",
      whyConnectDesc: "دورہ کریں، مشاہدہ کریں، رکاوٹ ڈھونڈیں اور اسے حل کرنے والی پراڈکٹ بنائیں — بلنگ ایپ، آن لائن اسٹور، سادہ آٹومیشن۔",
      learningOutcomesTitle: "طلبہ کون سی مہارتیں مشق کرتے ہیں",
      learningOutcomes: [
        {
          title: "حقیقی مسئلہ ڈھونڈنا",
          desc: "ورکشاپ کا مشاہدہ کریں اور پہچانیں کہ کیا چیز وقت یا پیسہ کھاتی ہے۔"
        },
        {
          title: "گاہکوں سے بات کرنا",
          desc: "سنیں، پوچھیں اور حل سادہ زبان میں سمجھائیں۔"
        },
        {
          title: "پیداوار اور معیار",
          desc: "دیکھیں کہ چیزیں کیسے بنتی، جانچی اور قیمت پاتی ہیں۔"
        },
        {
          title: "حساب کتاب",
          desc: "لاگت، اسٹاک، نقد اور منافع — حقیقی کاروبار کے اندر۔"
        }
      ],
      examplesTitle: "طلبہ کہاں سے شروع کرتے ہیں",
      examplesSubtitle: "سہون کے چار طرح کے کاروبار جو پہلے گاہک بنتے ہیں۔",
      examples: [
        {
          id: "soap-making",
          title: "صابن سازی کے یونٹس",
          role: "پیداوار",
          businessDoes: "مقامی منڈیوں کے لیے صابن ملاتے، ڈھالتے اور پیک کرتے ہیں۔",
          studentsLearn: "طلبہ بیچ-کاسٹنگ شیٹس اور سادہ آن لائن کیٹلاگ بناتے ہیں۔",
          tags: ["لاگت", "کیٹلاگ", "پیکنگ"]
        },
        {
          id: "mobile-repair",
          title: "موبائل ریپیئر شاپس",
          role: "تکنیکی سروس",
          businessDoes: "خرابیاں ڈھونڈتے، اسکرین بدلتے، چارجنگ اور سافٹ ویئر ٹھیک کرتے ہیں۔",
          studentsLearn: "طلبہ جاب-ٹریکنگ اور کوٹیشن ٹولز بناتے ہیں اور بنیادی تشخیص سیکھتے ہیں۔",
          tags: ["تشخیص", "جاب ٹریکنگ", "کسٹمر سروس"]
        },
        {
          id: "footwear-manufacturing",
          title: "چپل اور جوتا سازی کے یونٹس",
          role: "دستکاری اور اسمبلنگ",
          businessDoes: "چمڑا کاٹ کر اور سی کر سندھی چپل اور جدید جوتے بناتے ہیں۔",
          studentsLearn: "طلبہ پراڈکٹ فوٹوز، آن لائن اسٹورز اور اسٹاک ٹریکرز بناتے ہیں۔",
          tags: ["ای کامرس", "اسٹاک", "قیمت"]
        },
        {
          id: "local-workshops",
          title: "دستکاری اور مکینیکل ورکشاپس",
          role: "ہنر",
          businessDoes: "اجرک پرنٹرز، گیراج، لوہے اور لکڑی کے کارخانے شہر کی خدمت کرتے ہیں۔",
          studentsLearn: "طلبہ ورک فلو کا نقشہ بناتے، آئیڈیاز آزماتے اور وہ ہنر دریافت کرتے ہیں جن کے لیے بنانا قابلِ قدر ہے۔",
          tags: ["ورک فلو", "پروٹو ٹائپ", "فنی راستے"]
        }
      ]
    },
    heroTrack: {
      badge: "کردار کا ستون",
      title: "شخصیت سازی",
      subtitle: "اعتماد، گفتگو، نظم اور کردار — اسکول، گھر اور عالمی اسٹیج کے لیے۔",
      description: "بانی کو کوڈ سے زیادہ چاہیے۔ ہفتے میں دو پیریڈ وہ عادتیں بناتے ہیں جو طالب علم کو پچ، ٹیم اور مشکل دن سے گزار دیتی ہیں۔",
      features: [
        {
          title: "گفتگو",
          desc: "اچھی طرح سنیں، صاف بولیں، اعتماد سے پیش کریں۔"
        },
        {
          title: "نظم اور اخلاق",
          desc: "سچائی، ذمہ داری اور احترام، روزانہ مشق کے ساتھ۔"
        },
        {
          title: "پہاڑی ٹریکنگ",
          desc: "بڈو جبل، بھاگو توڑہو اور کارونجھر: فٹنس، ٹیم ورک اور فطرت کا احترام۔"
        },
        {
          title: "ثابت قدمی اور قیادت",
          desc: "ہمدردی، ٹیم ورک اور دباؤ میں ٹھہرے ہوئے فیصلے۔"
        }
      ],
      heroOath: {
        title: "طلبہ کا عہد (نہم جماعت)",
        text: "”میں سچائی سے کام لوں گا۔ میں وضاحت اور احترام سے بات کروں گا۔ میں اپنی ٹیم کا ساتھ دوں گا، سندھ کی دھرتی کی خدمت کروں گا، اور ہر چیلنج کا ثابت قدمی سے مقابلہ کروں گا۔“"
      }
    },
    theProof: {
      badge: "نظیر",
      title: "سہون سے سلیکان ویلی تک",
      intro: "بانی علی مرتضیٰ سولنگی نے اپنا پہلا اسٹارٹ اپ سہون میں بنایا۔ NUST کا GAP پروگرام جیتنے کے بعد وہ سلیکان ویلی میں 30 ممالک کے بانیوں میں تیسرے نمبر پر آئے۔",
      investorTitle: "سہون کا اسٹارٹ اپ، عالمی سرمایہ کار کی حمایت سے۔",
      investorDesc: "علی کے اسٹارٹ اپ کے سرمایہ کار نے 30 سے زائد یونیکورنز میں سرمایہ کاری کی ہے، جن میں ٹیسلا، پے پال، اسپیس ایکس اور یاہو شامل ہیں۔",
      stats: [
        { number: "30 میں سے تیسرا", label: "سلیکان ویلی میں ممالک کی رینکنگ" },
        { number: "20+", label: "ممالک میں آج خدمات" },
        { number: "سینکڑوں", label: "ہائی ٹیک ملازمین کی قیادت" }
      ],
      whyItMatters: {
        title: "سہون سے عالمی کمپنی بن سکتی ہے۔ ہم نے کر دکھایا۔",
        desc: "یہ اسکول اس سفر کو کلاس 1 سے نصاب میں بدلتا ہے۔"
      },
      founderQuote: {
        quote: "”جو کچھ وہ آپ کے بچے کو کہیں گے کہ سہون سے ممکن نہیں، وہ سب میں نے سہون سے کر دکھایا ہے۔ بس ایسے اسکول کی کمی تھی۔ چنانچہ میں نے یہ اسکول بنا دیا۔“",
        name: "علی مرتضیٰ سولنگی",
        role: "بانی، دی رائزنگ سندھ"
      },
      milestones: [
        { year: "پہلا مرحلہ", stage: "سہون سے آغاز", desc: "لال شہباز قلندر کی درگاہ کے قریب عام کمروں میں پہلی پراڈکٹ کوڈ کی گئی۔" },
        { year: "دوسرا مرحلہ", stage: "قومی چیمپئن", desc: "NUST کا گلوبل ایکسیلریشن پروگرام (GAP) جیتا۔" },
        { year: "تیسرا مرحلہ", stage: "سلیکان ویلی اسٹیج", desc: "30 ممالک میں تیسری پوزیشن، 'The Most Investable Startup in Silicon Valley'۔" },
        { year: "چوتھا مرحلہ", stage: "عالمی وسعت", desc: "30+ یونیکورن انویسٹر کی حمایت؛ 20+ ممالک میں کام۔" },
        { year: "پانچواں مرحلہ", stage: "سہون واپسی", desc: "وہ سفر، اسکول کے نصاب کی شکل میں دوبارہ بنایا گیا۔" }
      ]
    },
    globalBridge: {
      badge: "مقامی ٹیلنٹ · عالمی منڈی",
      title: "عالمی پل",
      subtitle: "طلبہ کے اسٹارٹ اپ پہلے دن سے عالمی منڈی کے لیے بنتے ہیں۔",
      lanes: [
        {
          laneNumber: "01",
          title: "بغیر سرحدوں کے شریک بانی",
          highlight: "سہون میں بانی۔ سلیکان ویلی میں شریک بانی۔ ایک ہی کمپنی۔",
          description: "بیرونِ ملک مقیم اور عالمی ماہرین طلبہ کے اسٹارٹ اپس میں شریک ہوتے ہیں — تجربے، نیٹ ورک یا سرمائے کے ساتھ۔"
        },
        {
          laneNumber: "02",
          title: "عالمی شعور",
          highlight: "بیرونِ ملک اسٹارٹ اپ ہبز، جامعات اور لیبز کے مطالعاتی دورے۔",
          description: "طلبہ دیکھتے ہیں کہ عالمی بانی کیسے کام کرتے ہیں — پھر گھر آ کر بناتے ہیں۔"
        },
        {
          laneNumber: "03",
          title: "عالمی رجسٹریشن اور پیٹنٹ",
          highlight: "پیدائش سہون میں۔ رجسٹریشن ڈیلاویئر میں۔ تحفظ دنیا بھر میں۔",
          description: "منتخب طلبہ اسٹارٹ اپ امریکہ میں رجسٹر ہوتے ہیں اور سندھ میں ہونے والی ایجادات کے پیٹنٹ داخل کرتے ہیں۔"
        }
      ],
      closing: "ٹیلنٹ سندھ میں رہتا ہے۔ پراڈکٹس دنیا میں جاتی ہیں۔",
      scholarshipHighlight: {
        badge: "میرٹ اور ضرورت",
        title: "اسکالرشپس",
        subtitle: "کوئی باصلاحیت بچہ پیسے کی وجہ سے باہر نہیں رہے گا۔",
        description: "میرٹ اور ضرورت پر مبنی اسکالرشپس اہل طلبہ کے لیے پورے پروگرام کو کور کرتی ہیں — لیبز، ٹریکنگ اور اسٹارٹ اپس سمیت۔",
        points: [
          "غیر معمولی صلاحیت کے لیے میرٹ ایوارڈز",
          "ہر مستحق بچے کے لیے ضرورت پر مبنی معاونت",
          "پورے سندھ کے اہل خاندانوں کے لیے کھلا"
        ],
        valueProposition: "ایک طالب علم کی مدد پوری کمیونٹی کو اٹھاتی ہے۔"
      },
      internationalTripsHighlight: {
        badge: "عالمی افق",
        title: "بین الاقوامی مطالعاتی دورے",
        subtitle: "دنیا کا بہترین دیکھیں۔ پھر گھر میں بنائیں۔",
        description: "عالمی اسکولوں، جامعات اور اسٹارٹ اپ ہبز کے منصوبہ بند دورے حوصلے بڑھاتے اور دکھاتے ہیں کہ کیا ممکن ہے۔",
        points: [
          "عالمی معیار کے کلاس رومز اور انکیوبیٹرز",
          "عالمی ساتھی اور مینٹرز",
          "باہر اعتماد، سندھ میں جڑیں"
        ],
        valueProposition: "تجربہ طالب علم کے ممکن کی حد بڑھاتا ہے۔"
      }
    },
    theMovement: {
      badge: "سندھ کی نشاۃ ثانیہ",
      title: "سندھ، پھر سے ابھرتا ہوا",
      inheritance: {
        title: "سندھ نے ہمیشہ بنایا ہے۔",
        desc: "موئن جو دڑو پانچ ہزار سال پہلے منصوبہ بند شہر تھا۔ بنانا ہمارا ورثہ ہے۔"
      },
      globalVillage: {
        title: "منڈی اب عالمی ہے۔",
        desc: "سہون میں بنی پراڈکٹ کہیں بھی یوزرز تک پہنچ سکتی ہے۔ انٹرنیٹ نے فاصلہ مٹا دیا۔"
      },
      buildHere: {
        title: "عالمی بنائیں۔ جڑیں یہیں رکھیں۔",
        desc: "ہم بیرونِ ملک کام کرنے والے خاندانوں کا احترام کرتے ہیں۔ ہم چاہتے ہیں کہ طلبہ کے پاس گھر سے بنانے اور دنیا کو بیچنے کا اختیار ہو۔"
      },
      tenYearPicture: {
        title: "دس سالہ خاکہ",
        desc: "سندھ کیسا ہوگا جب اس کے طلبہ اسٹارٹ اپ بنائیں گے۔",
        points: [
          "سہون کے اسٹارٹ اپ زراعت، پانی، صحت اور زبان کے مسائل حل کرتے ہوئے۔",
          "طالبات کی AI اور روبوٹکس ٹیمیں بین الاقوامی پوڈیم پر۔",
          "سہون کی کمپنیوں میں سلیکان ویلی کے شریک بانی۔",
          "سہون سے امریکی پیٹنٹ آفس میں داخل کردہ پیٹنٹ۔",
          "سندھی، اردو، انگریزی — اور AI میں ماہر نسل۔"
        ]
      },
      invitation: "والدین، طالب علم، استاد یا شراکت دار بن کر شامل ہوں۔"
    },
    sehwanCampus: {
      badge: "سہون شریف، سندھ",
      title: "سہون — پہلے ایک شہر",
      whySehwan: "بانی کا گھر، ورثے کا شہر، اور پورے سندھ میں پھیلنے کے لیے بنا ماڈل۔",
      cityProjects: "طلبہ شہر کے لیے بناتے ہیں: ورثے کے گائیڈ، دستکاروں کے آن لائن اسٹور، اور بڈو جبل، بھاگو توڑہو اور کارونجھر میں ٹریکنگ پراجیکٹس۔",
      campusSpine: [
        "کمپیوٹنگ اور AI لیب",
        "میکر اسپیس: 3D پرنٹرز اور IoT",
        "میڈیا، پوڈکاسٹ اور ویڈیو اسٹوڈیو",
        "انکیوبیٹر پچ روم",
        "آڈیٹوریم اور اسٹیج",
        "سائنس لیبز"
      ],
      roadAhead: "نرسری–میٹرک سے کالج، اور ایک دن سندھ کی ٹیکنالوجی یونیورسٹی۔",
      eveningAcademy: {
        title: "شام کی اکیڈمی",
        opening: "شام 5 بجے کے بعد لیبز سہون کے لیے کھلتی ہیں: نوجوانوں اور بڑوں کے لیے 12 ہفتے کے کورسز۔",
        tracks: [
          {
            name: "ڈیجیٹل بنیادیں اور فری لانسنگ",
            duration: "12 ہفتے",
            outcome: "کمپیوٹر بنیادیں → آفس ٹولز → کام کی انگریزی → پہلا بین الاقوامی کام",
            alignedWith: "سیلانی ماڈل، NAVTTC سرٹیفائیڈ"
          },
          {
            name: "کوڈ اور عملی AI",
            duration: "12 ہفتے",
            outcome: "پائتھن → ڈیٹا → AI ٹولز → ایک ڈیپلائی شدہ آٹومیشن",
            alignedWith: "PSEB سرٹیفیکیشن اور انٹرن شپس"
          },
          {
            name: "ویڈیو، میڈیا اور کہانی",
            duration: "12 ہفتے",
            outcome: "فون ویڈیو گرافی → ایڈیٹنگ → 3 شائع شدہ کام، بشمول ایک 'مثبت سندھ' دستاویزی فلم",
            alignedWith: "کیمپس اسٹوڈیو اور AI لیب تک رسائی"
          },
          {
            name: "ای کامرس",
            duration: "12 ہفتے",
            outcome: "پراڈکٹ فوٹوز → کیٹلاگ → آن لائن ادائیگی → ایک لائیو اسٹور",
            alignedWith: "سہون کے تاجر اور طلبہ کی رہنمائی"
          }
        ]
      },
      innovationLab: {
        title: "انوویشن لیب",
        desc: "یونیورسٹی طلبہ اور پیشہ ور افراد بینچ، رہنمائی اور ڈیمو ڈیز کے لیے درخواست دیتے ہیں۔",
        benches: [
          "فائنل ایئر پراجیکٹس رجسٹرڈ اسٹارٹ اپس میں تبدیل",
          "سائیڈ پراجیکٹس وینچر کے لیے تیار پراڈکٹس میں تبدیل",
          "بانی اپنے پہلے انجینئرنگ اور ڈیزائن شریک بانی ڈھونڈتے ہوئے"
        ]
      },
      partners: [
        { name: "NIC (نیشنل انکیوبیشن سینٹر)", role: "انکیوبیشن مینٹرز اور ڈیمو ڈے ججز" },
        { name: "ORIC روابط", role: "یونیورسٹی ریسرچ کی کمرشلائزیشن" },
        { name: "PSEB", role: "مہارت سرٹیفیکیشن اور ٹیک انٹرن شپس" },
        { name: "سیلانی", role: "شام کی تربیت کا ماڈل" }
      ]
    },
    joinUs: {
      badge: "عمل کریں",
      title: "اپنا دروازہ چنیں۔",
      doors: [
        {
          id: "parents",
          audience: "والدین کے لیے",
          title: "خود دیکھیں۔",
          description: "لیبز دیکھیں، فیوچر لیئر کلاس میں بیٹھیں، اساتذہ سے ملیں، امتحانات اور اسکالرشپس کے بارے میں پوچھیں۔",
          ctaText: "کیمپس کا دورہ بک کریں",
          secondaryCta: "واٹس ایپ کریں"
        },
        {
          id: "students",
          audience: "طلبہ کے لیے",
          title: "ہفتے کے دن کچھ بنائیں۔",
          description: "AI ماڈل ٹرین کریں، 3D ڈیزائن پرنٹ کریں، ویڈیو بنائیں یا آئیڈیا پچ کریں۔",
          ctaText: "بلڈ ڈے کے لیے رجسٹر ہوں"
        },
        {
          id: "professionals",
          audience: "یونیورسٹی طلبہ اور پیشہ ور افراد کے لیے",
          title: "پراجیکٹ کو اسٹارٹ اپ بنائیں۔",
          description: "لیب بینچ، AI ٹولز، رہنمائی اور ڈیمو ڈیز۔",
          ctaText: "لیب بینچ کے لیے اپلائی کریں"
        },
        {
          id: "teachers",
          audience: "اساتذہ کے لیے",
          title: "بنا کر سکھائیں۔",
          description: "لیسن کٹس، جدید لیبز، مرکزی معاونت، تربیت اور اچھا معاوضہ۔",
          ctaText: "تدریس کے لیے اپلائی کریں"
        }
      ],
      faqs: [
        {
          question: "کیا فیوچر لیئر میرے بچے کے میٹرک نمبروں کو نقصان پہنچائے گی؟",
          answer: "نہیں۔ بورڈ مضامین ہفتے کا تقریباً 70% لیتے ہیں، اور کلاس 9–10 میں 80%، امتحانی مشق سمیت۔"
        },
        {
          question: "کیا یہ ہماری اسلامی اور ثقافتی اقدار کے مطابق ہے؟",
          answer: "جی ہاں۔ سندھ کا اسلامیات نصاب پڑھایا جاتا ہے۔ طالبات کے گروپ خواتین مینٹرز چلاتی ہیں۔ ٹریکنگ کے لیے والدین کی اجازت اور حفاظتی نگرانی لازمی ہے۔"
        },
        {
          question: "کیا اسکالرشپس ہیں؟",
          answer: "جی ہاں۔ میرٹ اور ضرورت پر مبنی اسکالرشپس اہل طلبہ کو پورے پروگرام تک رسائی دیتی ہیں۔"
        },
        {
          question: "بین الاقوامی مطالعاتی دورے کیا دیتے ہیں؟",
          answer: "عالمی اسکولوں، اسٹارٹ اپ ہبز اور ثقافتوں سے واقفیت — اور واضح احساس کہ طلبہ گھر میں کیا بنا سکتے ہیں۔"
        },
        {
          question: "میں اپنے بچے کی پیش رفت کیسے دیکھوں؟",
          answer: "سندھی، اردو یا انگریزی میں والدین کے ڈیش بورڈ کے ذریعے، بورڈ کے کام اور پراجیکٹس پر ماہانہ اپڈیٹس کے ساتھ۔"
        }
      ]
    },
    footer: {
      slogan: "تعمیر کار، نہ کہ محض ڈگری یافتہ۔",
      ctaBand: "نشستیں کلاس رومز سے محدود ہیں۔ دورہ بک کریں۔",
      ctaButton: "کیمپس کا دورہ بک کریں",
      rights: "دی رائزنگ سندھ۔ جملہ حقوق محفوظ ہیں۔ سہون شریف، سندھ، پاکستان۔",
      governanceNote: "غیر سیاسی۔ سندھی اولیت۔ مستقبل پر مرکوز۔"
    }
  }
};
