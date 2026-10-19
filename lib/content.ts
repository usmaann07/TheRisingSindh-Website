// Content framework and verified copy for The Rising Sindh website

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
      description: string;
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
      title: "The Rising Sindh | The School That Builds What Universities Can't",
      description: "A Sehwan school combining the Sindh Board syllabus with AI, real businesses and practical learning.",
      slogan: "Builders, not degree-holders.",
      positioning: "Sindh Board education with AI, entrepreneurship and practical skills from Class 1 to Matric."
    },
    nav: {
      home: "Home",
      whyWeExist: "Why We Exist",
      theModel: "The Model",
      whatStudentsDo: "What Students Do",
      theProof: "The Proof",
      globalBridge: "Global Bridge",
      sehwanCampus: "Sehwan Campus",
      theMovement: "The Movement",
      joinUs: "Join Us",
      visitCampus: "Visit a Campus",
      bookVisit: "Book Campus Visit",
      curriculumMap: "Curriculum Map",
      curriculumMapSub: "Nursery to Matric BISE + Future Layer",
      theHeroTrackNav: "Personality Grooming",
      theHeroTrackNavSub: "Character, communication & mountain trekking across Sindh",
      studentIncubator: "Student Incubator",
      studentIncubatorSub: "Registered companies by Class 8",
      eveningAcademyNav: "The Technology Layer",
      eveningAcademyNavSub: "Community labs open after 5 pm"
    },
    common: {
      brandSubtitle: "Future School · Sehwan",
      livingPrecedent: "LIVING PRECEDENT",
      verifiedArchive: "Verified Archive",
      nationalStage: "National Stage & Tech Conference",
      resultsSpeak: "Results that speak for themselves",
      degreeUnemployment: "DEGREE UNEMPLOYMENT",
      degreeUnemploymentSub: "vs 4.7% for no schooling (LFS 24-25)",
      siliconValleyRank: "SILICON VALLEY RANK",
      siliconValleyRankSub: "Backed by 30+ unicorn investor",
      boardProtected: "BOARD RESULTS PROTECTED",
      boardProtectedSub: "Full BISE group + Future Layer",
      aiLab: "AI LAB",
      biseMetric: "BISE 100%",
      shippedProof10Years: "10 Years of Shipped Proof",
      curriculumTrajectory: "Curriculum Trajectory",
      class1ToMatric: "Class 1 → Matric",
      compoundingAdvantage: "Ten years of compounding practical advantage",
      openWhatsAppChat: "Open WhatsApp Chat",
      admissionsDeskOnline: "Admissions Desk Online",
      admissionsDeskSub: "Ask about admissions, scholarships or campus visits on WhatsApp.",
      done: "Done",
      close: "Close",
      apply: "Apply",
      submit: "Submit",
      fullName: "Full Name",
      fullNamePlaceholder: "e.g. Asad Ali / Zainab Solangi",
      whatsAppNumber: "WhatsApp Number",
      childClass: "Child's Class of Interest",
      workshopTrack: "Build Track Preference",
      projectSummary: "Project / Venture Idea Summary",
      teachingPitch: "What would your students build this term?",
      submitRequest: "Submit Request",
      registrationReceived: "Registration Received!",
      registrationReceivedDesc: "Our Sehwan admissions team will contact you on WhatsApp.",
      validationName: "Please enter your full name.",
      validationPhone: "Please enter a valid phone or WhatsApp number (minimum 10 digits).",
      nextSeatsLimited: "Next intake is limited by classrooms, not ambition.",
      elevation5688: "Buddo Jabal · Bhago Torho · Karoonjhar",
      makersInnovationHub: "Makers & Innovation Hub",
      sehwanSharifLabel: "Sehwan Sharif",
      whySehwanTitle: "Why Sehwan",
      cityProjectsTitle: "City Projects: The City is the Classroom",
      campusSpineTitle: "CAMPUS SPINE & ARCHITECTURAL BLUEPRINT",
      partnersTitle: "CO-FOUNDING ECOSYSTEM PARTNERS",
      printMap: "Print or download the Nursery–Matric map",
      seeFutureLayerLive: "See Future Layer period live on campus",
      systemComparisonMatrix: "The System Comparison Matrix",
      systemComparisonSub: "Worded at the system, never at the person",
      howWeTeachTitle: "How We Teach & How Parents See It",
      howWeTeachSub: "Five pillars for clear, accountable learning",
      exploreTitle: "Explore",
      programsTitle: "Programs",
      valuesTitle: "Values & Contact",
      craftedWithPride: "Crafted with pride in Sindh",
      forSindhFuture: "For the builders of tomorrow",
      smallMediumEnterprises: "Small & Medium Enterprises",
      sindhLocalEconomy: "Sindh Local Economy",
      realWorldPractice: "Real-World Practice",
      vocationalCareerPathways: "Vocational Career Pathways",
      nurseryMatricBise: "Nursery–Matric BISE Scheme",
      heroTrackGorakhTreks: "Character Building & Mountain Trekking",
      eveningCommunityAcademy: "The Technology Layer",
      innovationLabBuilders: "Innovation Lab for Builders",
      saturdayBuildDays: "Saturday Build Days",
      sehwanCampusLabNav: "Sehwan Campus & Innovation Lab",
      theMovementNav: "The Movement (Sindh Renaissance)",
      bookCampusVisitTitle: "Book a Campus Visit",
      saturdayBuildDayTitle: "Saturday Build Day Registration",
      applyToTeachTitle: "Apply to Teach",
      labBenchTitle: "Innovation Lab Bench Application",
      modalSubtitle: "Sehwan Sharif Campus · The Rising Sindh",
      gradeNursery: "Nursery – KG (Early Childhood)",
      grade1to3: "Class 1–3 (Foundational Future Layer)",
      grade4to5: "Class 4–5 (First AI Model & Bazaar)",
      grade6to7: "Class 6–7 (Python, IoT & Mobile Apps)",
      grade8: "Class 8 (Registered Student Company)",
      grade9to10: "Class 9–10 (Matric Board + Incubator)",
      trackAI: "Train First AI Model (Computer Vision)",
      track3D: "3D Printing & Hardware Prototype",
      trackMedia: "Positive Sindh Video & Studio Podcasting",
      trackPitch: "Pitch an Idea on Stage to Judges",
      teachNotesPlaceholder: "e.g. Science projects, bilingual writing, coding...",
      labBenchPlaceholder: "e.g. AgriTech IoT for Indus basin, Sindh EdTech...",
      stageSpecification: "STAGE SPECIFICATION",
      computingPillarTitle: "Computing & AI Pillar",
      entrepreneurshipPillarTitle: "Entrepreneurship Pillar",
      evidenceBehindNeed: "THE EVIDENCE BEHIND THE NEED",
      problemStripTitle: "Exams measure what you can remember.",
      problemStripHighlight: "Markets pay for what you can build.",
      youthUnemploymentTitle: "Youth graduate unemployment",
      youthUnemploymentDesc: "32.8% of Pakistani graduates aged 20–24 are unemployed; for women, the rate reaches 45.2%.",
      youthUnemploymentSource: "Source: Labour Force Survey / Gallup Pakistan",
      instantProofTitle: "Instant proof of work over theory",
      instantProofDesc: "Our Class 8 students have customers. Most university batches only have CVs.",
      instantProofSub: "By Matric, every student has shipped an AI automation, kept company accounts, and pitched on stage.",
      noMarketObsolescenceTitle: "No market obsolescence",
      noMarketObsolescenceDesc: "Starting at six, children master computing and entrepreneurship alongside the board syllabus. By sixteen, the gap is ten years of practice.",
      gorakhTrekTitle: "Sindh Mountain Trekking Expeditions",
      investorPrecedent: "THE INVESTOR PRECEDENT",
      lanePrefix: "LANE",
      directVentureTrack: "Direct Venture Track",
      partnerVentureCta: "Partner with a venture",
      positiveSindhDocNote: "Positive Sindh Strand: Every Matric student contributes to one student-directed documentary.",
      joinTheMovementCta: "Join The Movement",
      afterHoursEngine: "TECHNOLOGY & COMMUNITY",
      alignedWithLabel: "Aligned with",
      applyForBenchCta: "Apply for Bench",
      fourDoorsSubtitle: "A proven road from Sehwan to Silicon Valley, rebuilt as a curriculum.",
      forParentsBadge: "FOR PARENTS",
      forStudentsBadge: "FOR STUDENTS",
      forTeachersBadge: "FOR TEACHERS",
      forBuildersBadge: "FOR BUILDERS & UNIVERSITY STUDENTS",
      bookTourCta: "Book a tour",
      registerBuildDayCta: "Register for Build Day",
      teachersCardDesc: "Lesson kits provided. Full AI training. Competitive pay.",
      buildersCardDesc: "Apply for Innovation Lab bench, AI tools and demo days.",
      whatsappParentsPrompt: "Parents in Sindh convert on WhatsApp — Chat with Admissions",
      faqTitle: "Frequently Asked Questions",
      faqSubtitle: "Honest answers grounded in school policy",
      bindingGovernanceTitle: "Binding Content Governance:",
      bindingGovernanceDesc: "We build skills, not promise outcomes. Figures come from official surveys; we challenge outdated systems, not teachers or families.",
      sehwanLocation: "Sehwan Sharif, Sindh, Pakistan",
      whatsAppLabel: "WhatsApp"
    },
    proofStrip: {
      items: [
        "Sindh Board Compliant (BISE)",
        "Sindhi · Urdu · English",
        "AI & Computing from Class 1",
        "Real Companies by Class 8",
        "Silicon Valley Linkage"
      ]
    },
    hero: {
      badge: "Nursery to Matric · Sehwan Sharif, Sindh",
      title: "Built to scale.",
      highlight: "Ready for the future.",
      subtitle: "A full Sindh Board education, with AI, business and practical skills from Class 1 to Matric.",
      ctaPrimary: "Visit a Campus",
      ctaSecondary: "See What Our Students Do",
      statPills: [
        { label: "Class 1", sub: "Computing & AI Starts" },
        { label: "Class 8", sub: "Registered Company Run" },
        { label: "3rd / 30", sub: "Silicon Valley Global Rank" },
        { label: "100%", sub: "Sindh Board Protected" }
      ]
    },
    problemStrip: {
      tagline: "The skills gap",
      conclusion: "Students need skills that match a changing job market.",
      stats: [
        {
          number: "10.9%",
          label: "Degree Holder Unemployment",
          subtext: "Compared with 4.7% of people with no schooling",
          source: "Labour Force Survey 2024–25"
        },
        {
          number: "1 in 3",
          label: "Graduates Unemployed (20–24)",
          subtext: "32.8% are unemployed as careers begin",
          source: "Gallup Pakistan / LFS Analysis"
        },
        {
          number: "45.2%",
          label: "Female Graduate Unemployment",
          subtext: "Ages 25–29; compared with 14.9% for men",
          source: "Labour Force Survey & Gallup"
        },
        {
          number: "760,000+",
          label: "Left Pakistan in 2025",
          subtext: "Registered for overseas employment",
          source: "Dawn, Jul 2026 Records"
        }
      ]
    },
    theTurn: {
      badge: "The Turn",
      title: "We built a school for what comes next.",
      description: "The full Sindh Board syllabus stays central, with about 80% of class time devoted to board subjects in exam years. The Future Layer adds AI from Class 1, entrepreneurship, a registered company by Class 8, and character education.",
      breakdown: [
        {
          title: "Sindh Board Core",
          desc: "Maths, Science, Islamiat, Social Studies, English, Urdu and Sindhi, with exam practice.",
          percent: "~70-80%"
        },
        {
          title: "The Future Layer",
          desc: "AI, robotics, student companies and an e-portfolio of completed work.",
          percent: "~20-30%"
        }
      ]
    },
    fourEngines: {
      badge: "The Architecture",
      title: "Four Engines Powering Every Child",
      subtitle: "Four connected programs for learning, work and community.",
      engines: [
        {
          id: "school",
          title: "The School",
          role: "Nursery – Matric",
          description: "Board subjects and future skills taught together, with support for every student.",
          highlight: "Nursery to Matric"
        },
        {
          id: "hero",
          title: "Personality Grooming",
          role: "Character & Life Skills",
          description: "Build confidence, communication, discipline, teamwork and character through practice and trekking.",
          highlight: "2 Periods Weekly"
        },
        {
          id: "incubator",
          title: "SMEs & Student Incubator",
          role: "Real Companies & Industry",
          description: "Learn production, customer service and business through local workshops and SMEs.",
          highlight: "Class 8 to 10"
        },
        {
          id: "academy",
          title: "The Technology Layer",
          role: "Technology and Community",
          description: "12-week courses in coding, AI, video and freelancing for local youth and adults.",
          highlight: "Open to Sehwan"
        }
      ]
    },
    whatStudentsDo: {
      badge: "Flagship Comparison",
      title: "What our school students do, university students can't.",
      intro: "Students begin building at six. By sixteen, they have ten years of practice in creating, selling and presenting their work.",
      ladder: [
        {
          age: "At 9",
          grade: "Class 4",
          task: "Trains her first AI computer vision model to recognize images.",
          contrast: "Most CS university graduates have never trained one."
        },
        {
          age: "At 10",
          grade: "Class 5",
          task: "Runs a mini-company classroom stall and pitches it to a room of adults.",
          contrast: "Learns unit economics, real currency transactions and customer service."
        },
        {
          age: "At 12",
          grade: "Classes 6–7",
          task: "Writes Python, builds mobile apps, and wires physical IoT sensors to the cloud.",
          contrast: "Keeps real profit-and-loss accounts from stalls in the Sehwan bazaar."
        },
        {
          age: "At 13",
          grade: "Class 8",
          task: "Registers a real company with a team, sells to strangers, files financial reports.",
          contrast: "Connects AI models to live tools in supervised agentic workflows."
        },
        {
          age: "At 15",
          grade: "Class 9",
          task: "Ships an AI automation for a local family business and enters the campus incubator.",
          contrast: "Competes internationally on tech and entrepreneurship stages."
        },
        {
          age: "At 16",
          grade: "Matric",
          task: "Graduates with high BISE marks, a working AI automation, a registered product, audited books.",
          contrast: "Walks out with a demo day judged by NIC/ORIC guests and a complete public e-portfolio."
        }
      ],
      comparison: {
        headers: ["A Typical Graduate (At 22, after 16 years)", "A Rising Sindh Student (At 16, after 11 years)"],
        rows: [
          { typical: "A CV and attested photocopies", rising: "A live e-portfolio of shipped work" },
          { typical: "Theory notes, memorized and fading", rising: "Live products with users and paying customers" },
          { typical: "Waiting for a job vacancy to be announced", rising: "Has already sold, in person, to strangers" },
          { typical: "Fears AI will take their job", rising: "Builds with AI as a daily productive tool" },
          { typical: "Must leave for the city or overseas", rising: "Serves international clients from Sehwan" }
        ]
      },
      closingNote: "Our students can still choose university, with practical experience and a portfolio of work alongside their degree."
    },
    theModel: {
      badge: "The Two-Layer Curriculum",
      title: "Board results protected. Future added.",
      openingPromise: "Two layers. One timetable. Nothing sacrificed.",
      promiseDetail: "About 70% of the week covers the full Sindh syllabus, rising to 80% in board years. The remaining time adds computing, AI and entrepreneurship.",
      timelineStages: [
        {
          grade: "Nursery – KG",
          computing: "Screen-light: sequencing logic games, 'instruct the robot' playful activities.",
          entrepreneurship: "Sharing, classroom responsibility roles, role-play market day barter.",
          milestone: "Logical sequence & empathy"
        },
        {
          grade: "Classes 1–3",
          computing: "ScratchJr, floor robots, fast touch-typing, algorithmic thinking.",
          entrepreneurship: "Classroom shop with real coins, personal savings jars, ledger books.",
          milestone: "First code & physical currency"
        },
        {
          grade: "Classes 4–5",
          computing: "Scratch games, BBC micro:bit microcontrollers, first AI model trained (Teachable Machine).",
          entrepreneurship: "School bazaar stalls, mini-company business model pitch to parents.",
          milestone: "First trained AI model"
        },
        {
          grade: "Classes 6–7",
          computing: "Python programming, mobile app development (App Inventor), IoT sensors, honest AI prompting.",
          entrepreneurship: "Business Model Canvas, batch production runs with local SME workshops (soap units & footwear), accounting ledgers.",
          milestone: "Python & live public sales"
        },
        {
          grade: "Class 8",
          computing: "Web development, APIs, supervised AI-agent workflows, 3D design & 3D printing.",
          entrepreneurship: "A real registered student company operating alongside local enterprises (soap, mobile repairs, footwear), selling to real customers all term.",
          milestone: "Legally registered enterprise"
        },
        {
          grade: "Classes 9–10",
          computing: "Sindh Board Computer Science + an AI automation built for an active family business.",
          entrepreneurship: "MVP semester in campus incubator solving practical industry challenges for local SMEs; demo day pitch judged by NIC/ORIC venture guests.",
          milestone: "BISE Matric + Live Portfolio"
        }
      ],
      teachingPillars: [
        {
          title: "Mastery-First",
          desc: "Weekly quizzes with reteach loops — no child is left behind at the back of the class silently."
        },
        {
          title: "Lifelong E-Portfolio",
          desc: "Every project, company report, code repo and competition entry from KG to Matric — proof of work."
        },
        {
          title: "Parent Dashboard",
          desc: "Track monthly academic and future-layer progress in your language, straight on your mobile phone."
        },
        {
          title: "Teachers Are Never Alone",
          desc: "Recorded lesson kits and central academic support — the Future Layer does not depend on every teacher being an AI expert."
        },
        {
          title: "AI with Integrity",
          desc: "AI-assisted practice under strict teacher guidance, with clear academic-integrity ethics a child understands."
        }
      ]
    },
    smeEnterprises: {
      badge: "Vocational & Practical Learning",
      title: "Connecting Education with Real Businesses & Local Industries",
      subtitle: "Learn practical skills through local businesses and real projects.",
      whatIsSmeTitle: "What Are SMEs (Small & Medium-sized Enterprises)?",
      whatIsSmeDesc: "SMEs are local shops, workshops, repair centers and manufacturers that provide goods, services and jobs across Sindh.",
      whyConnectTitle: "Why Connect Education with Local Industry?",
      whyConnectDesc: "Working with local businesses helps students practice production, problem-solving, customer service and basic business skills—and explore future careers.",
      learningOutcomesTitle: "Skills students practice",
      learningOutcomes: [
        {
          title: "Product Manufacturing & Production Processes",
          desc: "Measure materials, make products, check quality and follow safety rules."
        },
        {
          title: "Customer Service & Understanding Needs",
          desc: "Listen to customers, explain solutions and give clear estimates."
        },
        {
          title: "Teamwork, Quality Control & Problem-Solving",
          desc: "Work as a team, check quality and solve workshop problems."
        },
        {
          title: "How Local Businesses Operate",
          desc: "Track money, stock, costs and sales in a local business."
        },
        {
          title: "Entrepreneurship & Career Opportunities",
          desc: "Explore local needs, skilled trades and starting a small business."
        }
      ],
      examplesTitle: "Local businesses students explore",
      examplesSubtitle: "Eight local manufacturing, repair and water-service examples.",
      examples: [
        {
          id: "data-cable-manufacturing",
          title: "Data Cable Manufacturing Units",
          description: "Manufacturers assemble conductors, connectors and insulation to make data and charging cables."
        },
        {
          id: "plastic-bottle-manufacturing",
          title: "Plastic Bottle Manufacturing Units",
          description: "Factories make plastic bottles for drinking water, beverages and other products."
        },
        {
          id: "ro-water-treatment",
          title: "RO Water Treatment Plants",
          description: "Plants use reverse osmosis to purify water and supply clean drinking water."
        },
        {
          id: "concrete-block-paver-manufacturing",
          title: "Concrete Block and Paver Manufacturing Units",
          description: "These units produce durable concrete blocks and pavers for buildings and walkways."
        },
        {
          id: "small-soap-making",
          title: "Small Soap-Making Units",
          description: "Small producers make and package soap for local shops and markets."
        },
        {
          id: "mobile-repairing",
          title: "Mobile Repairing Shops",
          description: "Repair shops diagnose phone faults and fix screens, batteries and charging issues."
        },
        {
          id: "chappal-making",
          title: "Chappal-Making Small Units",
          description: "Local makers cut, stitch and finish chappals for customers and markets."
        },
        {
          id: "local-mechanical-craft-workshops",
          title: "Local Mechanical & Craft Workshops in Sindh",
          description: "Local workshops provide mechanical repairs, metalwork, Ajrak printing and carpentry."
        }
      ]
    },
    heroTrack: {
      badge: "The Character & Behaviour Pillar",
      title: "Personality Grooming",
      subtitle: "Developing character, behaviour, confidence, and essential life skills for school, family life, society, and future careers.",
      description: "Students build discipline, honesty, communication, confidence, empathy, teamwork and resilience for school, home and future work.",
      features: [
        {
          title: "Communication & Respectful Expression",
          desc: "Practice listening, respectful conversation and confident speaking."
        },
        {
          title: "Discipline, Ethics & Social Manners",
          desc: "Practice honesty, responsibility and respect at school and at home."
        },
        {
          title: "Mountain Trekking Expeditions",
          desc: "Trekking / camping in Bado Jabbal , Bhago torho and Karoonjhar like mountains , surfing , sailing , boating and swimming in Indus River Indus to build fitness , confidence , teamwork and respect for the nature. "
        },
        {
          title: "Resilience, Empathy & Leadership",
          desc: "Build empathy, teamwork and resilience, and learn to make thoughtful decisions."
        }
      ],
      heroOath: {
        title: "The Student Character Pledge (Class 9)",
        text: "“I will act with integrity and honesty. I will communicate with clarity and respect. I will practice discipline, stand by my peers, serve the soil of Sindh, and meet every life challenge with resilience.”"
      }
    },
    theProof: {
      badge: "The Precedent",
      title: "The Proof — From Sehwan to Silicon Valley",
      intro: "Founder Ali Murtaza Solangi built his first startup in Sehwan. After winning NUST's GAP program, he ranked third among founders from 30 countries in Silicon Valley.",
      investorTitle: "A Sehwan startup ( Poulta Inc ) earned backing from a global investor.",
      investorDesc: "The investor behind Ali's startup has also backed more than 30 unicorn companies, including Tesla, PayPal, SpaceX and Yahoo.",
      stats: [
        { number: "3rd of 30", label: "Countries Ranked in Silicon Valley" },
        { number: "10+", label: "Countries Served Globally Today" },
        { number: "Hundreds", label: "Of High-Tech Employees Led" },
        { number: "Millions $", label: "In Global Tech Revenue" }
      ],
      whyItMatters: {
        title: "A global company can be built from Sehwan—we have done it.",
        desc: "The school brings that experience into the classroom, teaching students to build, present and pursue global opportunities from Class 1."
      },
      founderQuote: {
        quote: "“Everything they will tell your child is impossible from Sehwan, I have already done from Sehwan. The only thing I lacked was a school like this. So I built it.”",
        name: "Ali Murtaza Solangi",
        role: "Founder, The Rising Sindh"
      },
      milestones: [
        { year: "Phase 1", stage: "Born in Sehwan", desc: "First tech solution coded in ordinary rooms beside the shrine of Lal Shahbaz Qalandar." },
        { year: "Phase 2", stage: "National Champion", desc: "Won top national honors through NUST's prestigious Global Acceleration Program (GAP)." },
        { year: "Phase 3", stage: "Silicon Valley Podium", desc: "Ranked 3rd among 30 nations as 'The Most Investable Startup in Silicon Valley'." },
        { year: "Phase 4", stage: "Global Scale", desc: "Backed by 30+ unicorn investor (Tesla, SpaceX, PayPal portfolio), operating across 10 countries." },
        { year: "Phase 5", stage: "Returning to Sehwan", desc: "Rebuilding that entire journey as Pakistan's first future-ready school curriculum." }
      ]
    },
    globalBridge: {
      badge: "Local Talent · Global Stream",
      title: "The Global Bridge — Built from Day One",
      subtitle: "Connect local talent with global partners, opportunities and markets.",
      lanes: [
        {
          laneNumber: "01",
          title: "Joint Ventures & Co-founders Without Borders",
          highlight: "A founder in Sehwan. A co-founder in Silicon Valley. One cap table.",
          description: "Diaspora and global professionals can join student ventures as partners, contributing experience, networks or capital under clear agreements."
        },
        {
          laneNumber: "02",
          title: "International Educational Trips & Global Exposure",
          highlight: "Educational visits introduce students to new cultures, technology and ideas.",
          description: "Planned international study visits can introduce students to global schools, cultures and technologies, broaden their outlook and help them explore future study and career paths."
        },
        {
          laneNumber: "03",
          title: "Global Registration & Patents",
          highlight: "Born in Sehwan. Registered in Silicon Valley. Protected worldwide.",
          description: "Selected student startups may register in Delaware or California and seek patents to protect inventions made in Sindh."
        }
      ],
      closing: "Talent stays rooted in Sindh while its products and ideas reach global markets.",
      scholarshipHighlight: {
        badge: "Educational Equity & Merit",
        title: "Scholarships for Deserving & Talented Students",
        subtitle: "Merit- and need-based support for eligible students.",
        description: "Scholarships help deserving students access the curriculum, labs and character education, regardless of their family's financial circumstances.",
        points: [
          "Merit awards recognizing exceptional talent and intellectual curiosity",
          "Need-based scholarships ensuring accessible education for every deserving child",
          "Empowering families and breaking socioeconomic barriers across Sindh",
          "Investing in tomorrow's scientists, builders, and community pioneers"
        ],
        valueProposition: "Supporting one student can benefit a whole community."
      },
      internationalTripsHighlight: {
        badge: "Global Horizons",
        title: "International Educational Trips & Global Exposure",
        subtitle: "Explore global education, cultures and technology.",
        description: "Planned study visits can introduce students to international schools, cultures and technologies, and help them explore future academic and career opportunities.",
        points: [
          "Direct exposure to world-class classrooms, universities, and tech incubators",
          "Interacting with diverse cultures, global peers, and international mentors",
          "Broadening ambition beyond local boundaries to embrace global opportunities",
          "Fostering cross-cultural confidence while keeping students deeply rooted in Sindh"
        ],
        valueProposition: "New experiences can broaden a student's sense of possibility."
      }
    },
    theMovement: {
      badge: "The Sindh Renaissance",
      title: "The Movement — Sindh, Rising Again",
      inheritance: {
        title: "Sindh has a long tradition of building and innovation.",
        desc: "The Indus Valley built planned cities such as Moenjodaro 5,000 years ago. Sindh's history of engineering, poetry and craft inspires our focus on creating and building."
      },
      globalVillage: {
        title: "Digital tools connect local talent with global work.",
        desc: "A designer near Sehwan can serve clients abroad, and an app can reach users worldwide. Our school helps students prepare for these opportunities."
      },
      buildHere: {
        title: "Build globally, while staying rooted in Sindh.",
        desc: "We respect families who work abroad. We also want students to have the choice to build businesses and serve global clients from home."
      },
      tenYearPicture: {
        title: "What Rising Looks Like (The 10-Year Picture)",
        desc: "A future shaped by local innovation, invention and technology.",
        points: [
          "Startups registered in Sehwan solving agriculture, water, health and language challenges.",
          "Girls' robotics & AI teams winning podium finishes in international tournaments.",
          "Silicon Valley and diaspora co-founders sitting on Sehwan cap tables.",
          "Patents filed from Sehwan to the United States Patent Office.",
          "A youth generation fluent in Sindhi, Urdu, English — and generative AI.",
          "An evening academy lighting up Sehwan after dark; next a College, then a modern Polytechnic University."
        ]
      },
      invitation: "Join The Rising Sindh as a parent, student, teacher or partner."
    },
    sehwanCampus: {
      badge: "Sehwan Sharif, Sindh",
      title: "Sehwan — One City First, On Purpose",
      whySehwan: "Sehwan's heritage and the founder's experience make it a natural place to begin. The campus model is designed to grow across Sindh.",
      cityProjects: "Students work on local heritage, visitor guides, artisan crafts and trekking projects across Buddo Jabal, Bhago Torho and Karoonjhar.",
      campusSpine: [
        "Advanced Computing & AI Workstation Lab",
        "Maker Space with 3D Printers & IoT Hardware",
        "Digital Media, Podcast & Video Studio",
        "The Venture Incubator Pitch Room",
        "The Keynote Auditorium & Stage",
        "Science & Experimental Labs"
      ],
      roadAhead: "Our vision grows from Nursery–Matric to a college and, one day, a Sindh technology university.",
      eveningAcademy: {
        title: "The Technology Layer — The Trust Engine",
        opening: "After school, the labs offer local youth and adults 12-week courses in practical skills.",
        tracks: [
          {
            name: "Digital Foundations & Freelancing",
            duration: "12 Weeks",
            outcome: "Computer basics → office productivity → work English → first international gig",
            alignedWith: "Saylani-style delivery, NAVTTC certified"
          },
          {
            name: "Code & Practical AI",
            duration: "12 Weeks",
            outcome: "Python fundamentals → data handling → AI agent tools → one deployed automation in portfolio",
            alignedWith: "PSEB certification tracks & internships"
          },
          {
            name: "Video, Media & Storytelling",
            duration: "12 Weeks",
            outcome: "Phone videography → editing → 3 published pieces including one 'Positive Sindh' documentary",
            alignedWith: "Campus Studio & AI Lab access"
          },
          {
            name: "E-Commerce & Local Commerce",
            duration: "12 Weeks",
            outcome: "Product photography → digital catalog → online payments → 1 live online merchant store",
            alignedWith: "Local Sehwan traders & student mentoring"
          }
        ]
      },
      innovationLab: {
        title: "The Innovation Lab — For the City's Builders",
        desc: "University students and professionals can apply to use the labs, get mentorship and present projects at Demo Days.",
        benches: [
          "Final-year university projects transformed into registered companies",
          "Engineers turning evening side projects into venture-backed products",
          "Founders finding their first engineering and design co-founders"
        ]
      },
      partners: [
        { name: "NIC (National Incubation Center)", role: "Incubation mentors & annual demo-day judges" },
        { name: "ORIC Linkages", role: "University research translation & commercialization" },
        { name: "PSEB", role: "Skills certifications & technology internships" },
        { name: "Saylani", role: "Evening community training delivery model" }
      ]
    },
    joinUs: {
      badge: "Take Action",
      title: "Find your way to take part.",
      doors: [
        {
          id: "parents",
          audience: "For Parents",
          title: "Visit the campus and see for yourself.",
          description: "Explore the labs, observe a Future Layer class, meet teachers and ask about exams, student support and scholarships.",
          ctaText: "Book a Campus Visit",
          secondaryCta: "WhatsApp Us Directly"
        },
        {
          id: "students",
          audience: "For Students",
          title: "Come build something on a Saturday.",
          description: "Train an AI model, 3D-print a design, make a video or pitch an idea at a Saturday workshop.",
          ctaText: "Register for a Build Day"
        },
        {
          id: "professionals",
          audience: "For University Students & Pros",
          title: "Turn a project into something real.",
          description: "Apply to use the Innovation Lab for AI tools, mentorship and Demo Days.",
          ctaText: "Apply for a Lab Bench"
        },
        {
          id: "teachers",
          audience: "For Teachers",
          title: "Teach with hands-on learning.",
          description: "Use lesson kits, modern labs and academic support. Training and competitive pay are provided.",
          ctaText: "Apply to Teach"
        }
      ],
      faqs: [
        {
          question: "Will the Future Layer hurt my child's Matric grades?",
          answer: "No. Board subjects take about 70% of the weekly timetable and 80% in Classes 9–10, with exam practice included."
        },
        {
          question: "Is this Islamic and culturally values-appropriate?",
          answer: "Yes. The school follows the Sindh Islamiat curriculum. Female mentors lead girls' cohorts, and treks require parental consent and safety supervision."
        },
        {
          question: "What scholarship opportunities are available for deserving and talented students?",
          answer: "Merit- and need-based scholarships help eligible students access the curriculum, AI labs and character education."
        },
        {
          question: "How do international educational trips and foreign exposure benefit students?",
          answer: "Planned study visits can introduce students to other cultures, education systems and technologies, and help them explore future study and career options."
        },
        {
          question: "How do parents track their child's progress?",
          answer: "The Parent Dashboard is available in Sindhi, Urdu and English, with monthly updates on board progress and student projects."
        }
      ]
    },
    footer: {
      slogan: "Builders, not degree-holders.",
      ctaBand: "Admissions are limited by classroom space. Book a visit.",
      ctaButton: "Book Campus Visit",
      rights: "The Rising Sindh. All Rights Reserved. Sehwan Sharif, Sindh, Pakistan.",
      governanceNote: "Non-political and Sindhi-first, inspired by Indus heritage and focused on the future."
    }
  },
  sd: {
    meta: {
      title: "دي رائزنگ سنڌ | اهو اسڪول جيڪو يونيورسٽيون نه ٺاهي سگهيون",
      description: "سيوهڻ جو اسڪول، جتي سنڌ بورڊ جي تعليم سان گڏ AI، ڪاروبار ۽ عملي سکيا آهي.",
      slogan: "تعمير ڪندڙ، نه رڳو ڊگري وٺندڙ.",
      positioning: "سنڌ بورڊ جي تعليم سان گڏ ڪلاس 1 کان AI، ڪاروبار ۽ عملي سکيا."
    },
    nav: {
      home: "مکيه صفحو",
      whyWeExist: "اسان ڇو آهيون",
      theModel: "اسان جو نمونو",
      whatStudentsDo: "شاگرد ڇا ٺاهين ٿا",
      theProof: "زنده ثبوت",
      globalBridge: "عالمي پُل",
      sehwanCampus: "سيوهڻ ڪيمپس",
      theMovement: "تحريڪ",
      joinUs: "شامل ٿيو",
      visitCampus: "ڪيمپس جو دورو ڪريو",
      bookVisit: "دورو بڪ ڪريو",
      curriculumMap: "نصاب جو نقشو",
      curriculumMapSub: "نرسري کان ميٽرڪ BISE + فيوچر ليئر",
      theHeroTrackNav: "شخصيت سازي",
      theHeroTrackNavSub: "شخصيت سازي، ڳالهه ٻولهه ۽ سنڌ ۾ جبلن جي ٽريڪنگ",
      studentIncubator: "شاگردن جو انڪيوبيٽر",
      studentIncubatorSub: "ڪلاس 8 تائين رجسٽرڊ ڪمپنيون",
      eveningAcademyNav: "ٽيڪنالاجي جو پرت",
      eveningAcademyNavSub: "ڪميونٽي ليبز شام 5 وڳي کان پوءِ کليل"
    },
    common: {
      brandSubtitle: "فيوچر اسڪول · سيوهڻ",
      livingPrecedent: "زنده ثبوت ۽ نظير",
      verifiedArchive: "تصديق ٿيل رڪارڊ",
      nationalStage: "قومي اسٽيج ۽ ٽيڪ ڪانفرنس",
      resultsSpeak: "اهي نتيجا جيڪي پاڻ ڳالهائين ٿا",
      degreeUnemployment: "ڊگري يافته بيروزگاري",
      degreeUnemploymentSub: "بمقابلي 4.7% بنا پڙهيل (LFS 24-25)",
      siliconValleyRank: "سلڪون ويلي رينڪ",
      siliconValleyRankSub: "30+ يونيڪارن انويسٽر پاران سپورٽ ٿيل",
      boardProtected: "بورڊ جا نتيجا محفوظ",
      boardProtectedSub: "مڪمل BISE گروپ + فيوچر ليئر",
      aiLab: "اي آءِ ليب",
      biseMetric: "BISE 100%",
      shippedProof10Years: "10 سالن جو حقيقي عملي ثبوت",
      curriculumTrajectory: "نصاب جي اڳڀرائي",
      class1ToMatric: "ڪلاس 1 → ميٽرڪ",
      compoundingAdvantage: "ڏهن سالن جو مسلسل وڌندڙ عملي فائدو",
      openWhatsAppChat: "واٽس ائپ چيٽ کوليو",
      admissionsDeskOnline: "داخلا ڊيسڪ آن لائن",
      admissionsDeskSub: "داخلائن، اسڪالرشپس يا ڪيمپس دوري بابت واٽس ائپ تي پڇو.",
      done: "ٺيڪ آهي",
      close: "بند ڪريو",
      apply: "درخواست ڏيو",
      submit: "جمع ڪريو",
      fullName: "مڪمل نالو",
      fullNamePlaceholder: "مثال: اسد علي / زينب سولنگي",
      whatsAppNumber: "واٽس ائپ نمبر",
      childClass: "ٻار جي ڪلاس جي پسند",
      workshopTrack: "بلڊ ٽريڪ جي ترجيح",
      projectSummary: "منصوبي / ڪاروباري خيال جو خلاصو",
      teachingPitch: "توهان جا شاگرد هن ٽرم ڇا ٺاهيندا؟",
      submitRequest: "درخواست جمع ڪريو",
      registrationReceived: "درخواست موصول ٿي وئي آهي!",
      registrationReceivedDesc: "سيوهڻ ڪيمپس جي ٽيم جلد اوهان سان واٽس ائپ تي رابطو ڪندي.",
      validationName: "مهرباني ڪري پنهنجو مڪمل نالو لکو.",
      validationPhone: "مهرباني ڪري صحيح فون يا واٽس ائپ نمبر لکو (گهٽ ۾ گهٽ 10 انگ).",
      nextSeatsLimited: "ايندڙ داخلا ڪلاس رومز جي گنجائش سان مشروط آهي، ارادن سان نه.",
      elevation5688: "ٻُڏو جبل · ڀاڳو ٽوڙهو · ڪارونجهر",
      makersInnovationHub: "ميڪرز ۽ انوويشن هب",
      sehwanSharifLabel: "سيوهڻ شريف",
      whySehwanTitle: "سيوهڻ ڇو",
      cityProjectsTitle: "شهر جا پروجيڪٽ: شهر ئي ڪلاس روم آهي",
      campusSpineTitle: "ڪيمپس جو نقشو ۽ تعميراتي بليو پرنٽ",
      partnersTitle: "شريڪ باني ايڪوسسٽم پارٽنرز",
      printMap: "نرسري–ميٽرڪ نصاب پرنٽ يا ڊائون لوڊ ڪريو",
      seeFutureLayerLive: "ڪيمپس تي فيوچر ليئر جو پيريڊ لائيو ڏسو",
      systemComparisonMatrix: "نظام جي ڀيٽ واري ميٽرڪس",
      systemComparisonSub: "ڳالهه نظام جي آهي، ڪنهن فرد جي نه",
      howWeTeachTitle: "اسان ڪيئن پڙهايئون ٿا ۽ والدين ڪيئن ڏسن ٿا",
      howWeTeachSub: "شفاف ۽ ذميوار سکيا جا پنج اصول",
      exploreTitle: "ڳوليو",
      programsTitle: "پروگرامز",
      valuesTitle: "قدر ۽ رابطو",
      craftedWithPride: "سنڌ ۾ فخر سان ٺاهيل",
      forSindhFuture: "سڀاڻي جي تعمير ڪندڙن لاءِ",
      smallMediumEnterprises: "ننڍا ۽ وچولا ڪاروبار",
      sindhLocalEconomy: "سنڌ جي مقامي معيشت",
      realWorldPractice: "عملي سکيا",
      vocationalCareerPathways: "فني ڪيريئر جا رستا",
      nurseryMatricBise: "نرسري–ميٽرڪ BISE اسڪيم",
      heroTrackGorakhTreks: "شخصيت سازي ۽ جبلن جي ٽريڪنگ",
      eveningCommunityAcademy: "ٽيڪنالاجي جو پرت",
      innovationLabBuilders: "تعمير ڪندڙن لاءِ انوويشن ليب",
      saturdayBuildDays: "ڇنڇر بلڊ ڊيز",
      sehwanCampusLabNav: "سيوهڻ ڪيمپس ۽ انوويشن ليب",
      theMovementNav: "تحريڪ (سنڌ رينيسانس)",
      bookCampusVisitTitle: "ڪيمپس جو دورو بُڪ ڪريو",
      saturdayBuildDayTitle: "ڇنڇر بلڊ ڊي لاءِ رجسٽريشن",
      applyToTeachTitle: "استاد طور درخواست ڏيو",
      labBenchTitle: "انوويشن ليب بينچ لاءِ درخواست",
      modalSubtitle: "سيوهڻ شريف ڪيمپس · دي رائيزنگ سنڌ",
      gradeNursery: "نرسري – ڪي جي (شروعاتي عمر)",
      grade1to3: "ڪلاس 1–3 (بنيادي فيوچر ليئر)",
      grade4to5: "ڪلاس 4–5 (پھريون AI ماڊل ۽ بازار)",
      grade6to7: "ڪلاس 6–7 (پائٿون، IoT ۽ موبائل ائپس)",
      grade8: "ڪلاس 8 (رجسٽرڊ اسٽوڊنٽ ڪمپني)",
      grade9to10: "ڪلاس 9–10 (ميٽرڪ بورڊ + انڪيوبيٽر)",
      trackAI: "پھريون AI ماڊل تربيت ڪريو (ڪمپيوٽر ويزن)",
      track3D: "3D پرنٽنگ ۽ هارڊويئر پروٽوٽائپ",
      trackMedia: "مثبت سنڌ ويڊيو ۽ اسٽوڊيو پاڊڪاسٽنگ",
      trackPitch: "اسٽيج تي ججن اڳيان خيال پيش ڪريو",
      teachNotesPlaceholder: "مثال: سائنس پروجيڪٽس، ٻه-ٻولي لکڻ، ڪوڊنگ...",
      labBenchPlaceholder: "مثال: انڊس بيسن لاءِ ايگري ٽيڪ IoT، سنڌ ايڊ ٽيڪ...",
      stageSpecification: "درجي جي تفصيل",
      computingPillarTitle: "ڪمپيوٽنگ ۽ AI شعبو",
      entrepreneurshipPillarTitle: "ڪاروبار ۽ هنر شعبو",
      evidenceBehindNeed: "ضرورت پويان حقيقي ثبوت",
      problemStripTitle: "امتحان رڳو ياداشت ماپين ٿا.",
      problemStripHighlight: "مارڪيٽ هٿ سان ٺاهيل شين جو ملهه ڏئي ٿي.",
      youthUnemploymentTitle: "نوجوان گريجوئيٽ بيروزگاري",
      youthUnemploymentDesc: "20–24 سالن جي 32.8٪ پاڪستاني گريجوئيٽ بيروزگار آهن؛ عورتن ۾ شرح 45.2٪ آهي.",
      youthUnemploymentSource: "ذريعو: ليبر فورس سروي / گيلپ پاڪستان",
      instantProofTitle: "نظريي بدران ڪم جو فوري ثبوت",
      instantProofDesc: "اسان جي ڪلاس 8 جي شاگردن وٽ گراهڪ آهن، جڏهن ته اڪثر يونيورسٽي گريجوئيٽس وٽ رڳو سي وي هوندي آهي.",
      instantProofSub: "ميٽرڪ تائين هر شاگرد AI آٽوميشن تيار ڪري ٿو، ڪمپني جا اڪائونٽس هلائي ٿو ۽ اسٽيج تي پچ ڪري ٿو.",
      noMarketObsolescenceTitle: "مارڪيٽ ۾ فرسوده نه ٿيڻ جي ضمانت",
      noMarketObsolescenceDesc: "ڇهن سالن جي عمر کان ٻار بورڊ نصاب سان گڏ ڪمپيوٽنگ ۽ بزنس جا ماهر ٿين ٿا. سورهن سالن جي عمر تائين ڏهن سالن جي عملي مهارت پيدا ٿي وڃي ٿي.",
      gorakhTrekTitle: "سنڌ جي جبلن تي ٽريڪنگ جون مہمات",
      investorPrecedent: "سرمائيدارن جو اعتماد",
      lanePrefix: "راھ",
      directVentureTrack: "سڌو سنئون وينچر ٽريڪ",
      partnerVentureCta: "اسٽارٽ اپ پارٽنرشپ لاءِ رابطو ڪريو",
      positiveSindhDocNote: "مثبت سنڌ پيش رفت: هر ميٽرڪ جو شاگرد پنهنجي ٺاهيل دستاويزي فلم (ڊاڪيومينٽري) ۾ حصو وٺي ٿو.",
      joinTheMovementCta: "تحريڪ جو حصو بڻجو",
      afterHoursEngine: "ٽيڪنالاجي ۽ ڪميونٽي",
      alignedWithLabel: "هم آهنگ",
      applyForBenchCta: "بينچ لاءِ درخواست ڏيو",
      fourDoorsSubtitle: "سيوهڻ کان سليڪان ويلي تائين ثابت ٿيل رستو، هاڻي نصاب طور تيار.",
      forParentsBadge: "والدين لاءِ",
      forStudentsBadge: "شاگردن لاءِ",
      forTeachersBadge: "استادن لاءِ",
      forBuildersBadge: "تعمير ڪندڙن ۽ يونيورسٽي شاگردن لاءِ",
      bookTourCta: "ڪيمپس جو دورو بُڪ ڪريو",
      registerBuildDayCta: "بلڊ ڊي لاءِ رجسٽر ٿيو",
      teachersCardDesc: "سبقن جون مڪمل ڪٽس، AI ٽريننگ ۽ بهترين معاوضو مهيا ڪيو ويندو.",
      buildersCardDesc: "انوويشن ليب بينچ، جديد AI ٽولز ۽ ڊيمو ڊيز لاءِ درخواست ڏيو.",
      whatsappParentsPrompt: "سنڌ جا والدين واٽس ائپ تي سڌو رابطو ڪن ٿا — ايڊميشن سان ڳالهايو",
      faqTitle: "اڪثر پڇيا ويندڙ سوال",
      faqSubtitle: "اسڪول جي پاليسين تي ٻڌل شفاف جواب",
      bindingGovernanceTitle: "لازمي مواد جي شفافيت:",
      bindingGovernanceDesc: "اسان مهارتون سيکاريون ٿا، نتيجن جي ضمانت نٿا ڏيون. انگ سرڪاري سروي جا آهن؛ تنقيد نظام تي آهي، استادن يا والدين تي نه.",
      sehwanLocation: "سيوهڻ شريف، سنڌ، پاڪستان",
      whatsAppLabel: "واٽس ائپ"
    },
    proofStrip: {
      items: [
        "سنڌ بورڊ مطابق (BISE)",
        "سنڌي · اردو · انگريزي",
        "ڪلاس 1 کان AI ۽ ڪمپيوٽنگ",
        "ڪلاس 8 تائين پنهنجي ڪمپني",
        "سلڪون ويلي سان سڌو لاڳاپو"
      ]
    },
    hero: {
      badge: "نرسري کان ميٽرڪ تائين · سيوهڻ شريف، سنڌ",
      title: "ڊگري ڪافي ناهي.",
      highlight: "مهارتن سان مستقبل ٺاهيون.",
      subtitle: "سنڌ بورڊ جي مڪمل نصاب سان گڏ ڪلاس 1 کان AI، ڪاروبار ۽ عملي مهارتون.",
      ctaPrimary: "ڪيمپس جو دورو ڪريو",
      ctaSecondary: "اسان جا شاگرد ڇا ڪن ٿا",
      statPills: [
        { label: "ڪلاس 1", sub: "ڪمپيوٽنگ ۽ AI جي شروعات" },
        { label: "ڪلاس 8", sub: "شاگردن جي حقيقي ڪمپني" },
        { label: "ٽيون نمبر / 30", sub: "سلڪون ويلي ۾ عالمي پوزيشن" },
        { label: "100%", sub: "سنڌ بورڊ مڪمل محفوظ" }
      ]
    },
    problemStrip: {
      tagline: "مهارتن جي کوٽ",
      conclusion: "شاگردن کي بدلجندڙ روزگار لاءِ لاڳاپيل مهارتون گهرجن.",
      stats: [
        {
          number: "10.9%",
          label: "ڊگري هولڊرز ۾ بيروزگاري",
          subtext: "اڻ پڙهيل ماڻهن ۾ 4.7 سيڪڙو جي ڀيٽ ۾",
          source: "ليبر فورس سروي 2024–25"
        },
        {
          number: "3 مان 1",
          label: "گريجوئيٽ بيروزگار (عمر 20-24)",
          subtext: "32.8 سيڪڙو کي ڪيريئر جي شروعات ۾ روزگار ناهي",
          source: "گيلپ پاڪستان تجزيو"
        },
        {
          number: "45.2%",
          label: "پڙهيل نياڻين جي بيروزگاري",
          subtext: "عمر 25–29؛ مردن ۾ 14.9 سيڪڙو جي ڀيٽ ۾",
          source: "گيلپ / ايل ايف ايس رڪارڊ"
        },
        {
          number: "760,000+",
          label: "2025 ۾ ملڪ ڇڏي ويا",
          subtext: "ٻاهرين ملڪ روزگار لاءِ رجسٽرڊ ٿيا",
          source: "روزاني ڊان، جولاءِ 2026"
        }
      ]
    },
    theTurn: {
      badge: "نئون آغاز",
      title: "اسان ايندڙ دور لاءِ اسڪول ٺاهيو.",
      description: "مڪمل سنڌ بورڊ نصاب برقرار آهي؛ امتحاني سالن ۾ لڳ ڀڳ 80٪ وقت بورڊ لاءِ آهي. ڪلاس 1 کان AI، ڪاروبار ۽ شخصيت سازي به شامل آهن.",
      breakdown: [
        {
          title: "سنڌ بورڊ بنياد",
          desc: "سنڌي، اردو، انگريزي، سائنس، رياضي ۽ اسلاميات، امتحاني مشقن سان.",
          percent: "~70-80%"
        },
        {
          title: "مستقبل جي ليئر",
          desc: "AI، روبوٽڪس، شاگردن جون ڪمپنيون ۽ پروجيڪٽن جو اي-پورٽ فوليو.",
          percent: "~20-30%"
        }
      ]
    },
    fourEngines: {
      badge: "چار بنيادي ٿنڀا",
      title: "هر ٻار جي ترقي جا چار انجڻ",
      subtitle: "تعليم، ڪم ۽ ڪميونٽي لاءِ چار گڏيل پروگرام.",
      engines: [
        {
          id: "school",
          title: "اسڪول",
          role: "نرسري کان ميٽرڪ",
          description: "بورڊ جا مضمون ۽ مستقبل جون مهارتون گڏ، هر شاگرد جي سکيا لاءِ سهائتا سان.",
          highlight: "نرسري کان ميٽرڪ"
        },
        {
          id: "hero",
          title: "شخصيت سازي",
          role: "ڪردار ۽ زندگيءَ جون مهارتون",
          description: "نظم، ايمانداري، ڳالهه ٻولهه، ٽيم ورڪ ۽ اعتماد کي عملي سرگرمين ۽ ٽريڪنگ سان وڌايو.",
          highlight: "هفتي ۾ 2 پيريڊ"
        },
        {
          id: "incubator",
          title: "ننڍا ڪاروبار ۽ شاگرد انڪيوبيٽر",
          role: "حقيقي ڪمپنيون ۽ مقامي صنعت",
          description: "مقامي ڪاروبارن ۽ ورڪشاپن سان پيداوار، گراهڪ خدمت ۽ واپار سکن ٿا.",
          highlight: "ڪلاس 8 کان 10"
        },
        {
          id: "academy",
          title: "ٽيڪنالاجي جو پرت",
          role: "ٽيڪنالاجي ۽ ڪميونٽي",
          description: "مقامي نوجوانن ۽ بالغن لاءِ AI، ڪوڊنگ، وڊيو ۽ فري لانسنگ جا 12 هفتن جا ڪورس.",
          highlight: "سيوهڻ لاءِ کليل"
        }
      ]
    },
    whatStudentsDo: {
      badge: "حقيقتن جو ڀيٽ",
      title: "جيڪو اسان جا اسڪول جا ٻار ڪن ٿا، يونيورسٽي جا شاگرد نه ٿا ڪري سگهن.",
      intro: "شاگرد ڇهن سالن کان ٺاهڻ سکڻ شروع ڪن ٿا؛ سورهن سالن تائين کين ڏهن سالن جي عملي مشق ملي ٿي.",
      ladder: [
        {
          age: "9 سالن جي عمر",
          grade: "ڪلاس 4",
          task: "تصويرن جي سڃاڻپ لاءِ پنهنجو پهريون AI ماڊل ٽرين ڪري ٿي.",
          contrast: "اڪثر ڪمپيوٽر سائنس گريجوئيٽس ڪڏهن ماڊل ٽرين ناهي ڪيو."
        },
        {
          age: "10 سالن جي عمر",
          grade: "ڪلاس 5",
          task: "اسڪول بازار ۾ پنهنجو اسٽال هلائي وڏن آڏو بزنس پچ پيش ڪري ٿو.",
          contrast: "نفعي نقصان ۽ ڪسٽمر ڊيلنگ جو حقيقي عملي سبق وٺي ٿو."
        },
        {
          age: "12 سالن جي عمر",
          grade: "ڪلاس 6-7",
          task: "پائٿون ۾ ڪوڊ لکي ٿو، موبائل ايپ ٺاهي ٿو، سينسرز کي انٽرنيٽ سان ڳنڍي ٿو.",
          contrast: "سيوهڻ جي بازار ۾ وڪرو ڪري پنهنجو باقاعده کاتو رکي ٿو."
        },
        {
          age: "13 سالن جي عمر",
          grade: "ڪلاس 8",
          task: "ٽيم سان گڏ باضابطا رجسٽرڊ ڪمپني هلائي ٿو، اجنبي گراهڪن کي وڪرو ڪري ٿو.",
          contrast: "AI ايجنٽس ۽ سافٽ ويئر ورڪ فلوز ٽولز سان ملائي ٿو."
        },
        {
          age: "15 سالن جي عمر",
          grade: "ڪلاس 9",
          task: "مقامي ڪاروبار لاءِ AI آٽوميشن سافٽ ويئر ٺاهي انڪيوبيٽر ۾ ويهي ٿو.",
          contrast: "بين الاقوامي پليٽ فارمن تي مقابلو ڪري ٿو."
        },
        {
          age: "16 سالن جي عمر",
          grade: "ميٽرڪ",
          task: "سنڌ بورڊ جي اعليٰ سند سان گڏ هلندڙ AI پراڊڪٽ، آڊٽ ٿيل کاتو ۽ اي-پورٽ فوليو کڻي نڪري ٿو.",
          contrast: "NIC ۽ ORIC جي ماهرن اڳيان ڊيمو ڊي تي ڪمپني پيش ڪري چڪو هوندو آهي."
        }
      ],
      comparison: {
        headers: ["عام يونيورسٽي گريجوئيٽ (22 سال، 16 سالن جي پڙهائي)", "دي رائزنگ سنڌ جو شاگرد (16 سال، 11 سالن جي پڙهائي)"],
        rows: [
          { typical: "هڪ تصديق ٿيل سي وي ۽ فوٽو ڪاپيون", rising: "ٺاهيل حقيقي ڪمن جو لائيو پورٽ فوليو" },
          { typical: "ياد ڪيل نوٽس جيڪي جلد وسري ويندا", rising: "مارڪيٽ ۾ هلندڙ پروڊڪٽس ۽ پيسا ڏيندڙ گراهڪ" },
          { typical: "سرڪاري يا نجي نوڪري جي اشتهار جو انتظار", rising: "اجنبي ماڻهن سان سامهون ٿي ڊيلنگ ڪري چڪو هوندو" },
          { typical: "خوف ته AI کائنس نوڪري کسي وٺندو", rising: "AI کي روزاني پنهنجي اوزار طور استعمال ڪري ٿو" },
          { typical: "مجبورن وڏي شهر يا پرڏيهه وڃڻ جي ڪوشش", rising: "سيوهڻ ۾ ويهي دنيا سان ڪاروبار ڪري ٿو" }
        ]
      },
      closingNote: "شاگرد يونيورسٽي به چونڊي سگهن ٿا، عملي تجربي ۽ پنهنجي ڪم جي پورٽ فوليو سان."
    },
    theModel: {
      badge: "ٻه سطحي نصاب",
      title: "بورڊ جا نتيجا مڪمل محفوظ. مستقبل شامل.",
      openingPromise: "ٻه درجا. هڪ ٽائيم ٽيبل. ڪا به قرباني ناهي.",
      promiseDetail: "هفتي جو لڳ ڀڳ 70٪ وقت سنڌ بورڊ لاءِ، امتحاني سالن ۾ 80٪ آهي. باقي وقت ڪمپيوٽنگ، AI ۽ ڪاروبار لاءِ آهي.",
      timelineStages: [
        {
          grade: "نرسري – ڪي جي",
          computing: "اسڪرين کانسواءِ لاجڪ گيمز، 'روبوٽ کي هدايت ڏيو' جون رانديون.",
          entrepreneurship: "شراڪتداري، ڪلاس جون ذميواريون، رول پلي مارڪيٽ ڊي.",
          milestone: "منطق ۽ احساس"
        },
        {
          grade: "ڪلاس 1–3",
          computing: "ScratchJr، فلور روبوٽس، ڪمپيوٽر ٽائپنگ، بنيادي الگورٿم.",
          entrepreneurship: "حقيقي پئسن سان ڪلاس جو دڪان، بچت جي گُلق، کاتو سنڀالڻ.",
          milestone: "پهريون ڪوڊ ۽ پئسو"
        },
        {
          grade: "ڪلاس 4–5",
          computing: "اسڪريچ گيمز، micro:bit مائيڪرو ڪنٽرولر، پهريون تربيت يافته AI ماڊل.",
          entrepreneurship: "اسڪول مينهوار بازار، والدين اڳيان ننڍي ڪمپني جو نظريو پيش ڪرڻ.",
          milestone: "AI ماڊل ٽريننگ"
        },
        {
          grade: "ڪلاس 6–7",
          computing: "پائٿون پروگرامنگ، موبائل ائپس، سينسرز ۽ IoT، ايماندار پرامپٽنگ.",
          entrepreneurship: "بزنس ماڊل ڪينواس، مقامي ننڍن ڪاروبارن (صابڻ ۽ چپل يونٽس) سان گڏ عملي پيداوار ۽ روزنامچو.",
          milestone: "پائٿون ۽ حقيقي وڪرو"
        },
        {
          grade: "ڪلاس 8",
          computing: "ويب سائيٽ ٺاهڻ، APIs، AI ايجنٽ ورڪ فلوز، 3D ڊيزائننگ ۽ پرنٽنگ.",
          entrepreneurship: "حقيقي رجسٽرڊ اسٽوڊنٽ ڪمپني، مقامي صنعتن (موبائل ريپيئر ۽ هٿ جا هنر) سان ڳنڍيل حقيقي گراهڪن کي مال پهچائڻ.",
          milestone: "رجسٽرڊ ادارو"
        },
        {
          grade: "ڪلاس 9–10",
          computing: "سنڌ بورڊ ڪمپيوٽر سائنس + مقامي خانداني ڪاروبار لاءِ AI آٽوميشن سافٽ ويئر.",
          entrepreneurship: "ڪيمپس انڪيوبيٽر سيمسٽر، مقامي SMEs جي عملي مسئلن جو حل، NIC/ORIC ججز اڳيان باضابطا ڊيمو ڊي پچنگ.",
          milestone: "ميٽرڪ سند ۽ لائيو پورٽ فوليو"
        }
      ],
      teachingPillars: [
        {
          title: "مهارت پهريان",
          desc: "هفتيوار ٽيسٽ ۽ جائزي سان ڪنهن به ٻار کي خاموشي سان پوئتي رهڻ نه ڏنو ويندو."
        },
        {
          title: "عمر ڀر جو اي-پورٽ فوليو",
          desc: "ڪي جي کان ميٽرڪ تائين هر پروجيڪٽ، ڪوڊ ريپو ۽ ڪمپني رپورٽ محفوظ ٿيندي."
        },
        {
          title: "والدين جو موبائل ڊيش بورڊ",
          desc: "پنهنجي زبان (سنڌي) ۾ ٻار جي تعليمي ۽ ٽيڪنالوجي ترقي فون تي چيڪ ڪريو."
        },
        {
          title: "استاد اڪيلا ناهن",
          desc: "مرڪزي اڪيڊمڪ ٽيم ۽ رڪارڊ ٿيل سبق کٽس — هر استاد جو AI ماهر هجڻ لازمي ناهي."
        },
        {
          title: "ديانتداري سان AI جو استعمال",
          desc: "سخت تعليمي ضابطن ۽ اخلاقي هدايتن تحت AI جو صحيح استعمال سيکاريو وڃي ٿو."
        }
      ]
    },
    smeEnterprises: {
      badge: "عملي ۽ فني سکيا",
      title: "تعليم کي حقيقي ڪاروبار ۽ مقامي صنعت سان ڳنڍڻ",
      subtitle: "عملي پيداوار، فني هنر ۽ حقيقي ڪم جي ذريعي ننڍن ۽ وچولن ڪاروبارن (SMEs) کي سمجهڻ.",
      whatIsSmeTitle: "ننڍا ۽ وچولا ڪاروبار (SMEs) ڇا آهن؟",
      whatIsSmeDesc: "SMEs سنڌ جا مقامي دڪان، ورڪشاپ، مرمتي مرڪز ۽ ڪارخانا آهن، جيڪي شيون، خدمتون ۽ روزگار ڏين ٿا.",
      whyConnectTitle: "تعليم کي مقامي ڪاروبار سان ڳنڍڻ ڇو ضروري آهي؟",
      whyConnectDesc: "مقامي ڪاروبارن سان ڪم ڪري شاگرد پيداوار، مسئلا حل ڪرڻ، گراهڪ خدمت ۽ ڪاروباري مهارتون سکندا ۽ ڪيريئر جا رستا ڳوليندا آهن.",
      learningOutcomesTitle: "شاگرد حقيقي ڪاروبارن مان ڇا سکن ٿا؟",
      learningOutcomes: [
        {
          title: "شين جي تياري ۽ پيداواري عمل (Manufacturing Processes)",
          desc: "خام مال کڻڻ، وزن ۽ ماپ جو حساب، ترتيب سان شين جي تياري، پيڪنگ ۽ حفاظت جا اصول سمجهڻ."
        },
        {
          title: "گراهڪن جي خدمت ۽ سندن ضرورتن کي سمجهڻ",
          desc: "گراهڪ جي ڳالهه ڌيان سان ٻڌڻ، شائستگي سان ڳالهائڻ، سندن مسئلي جو حل ڳولڻ، ۽ گراهڪ جو اعتماد حاصل ڪرڻ."
        },
        {
          title: "ٽيم ورڪ، معيار جي پڪ ۽ مسئلن جو حل",
          desc: "ساٿين سان گڏجي ڪم ڪرڻ، خراب شين جي سڌارو، ۽ ورڪشاپ ۾ روزانو ايندڙ ڏکيائين کي سٺي نموني حل ڪرڻ."
        },
        {
          title: "مقامي ڪاروبار ڪيئن هلندا آهن؟",
          desc: "روڪ رقم جو حساب، کاتو ۽ لکپڙھ، مال جي سنڀال، خرچن ۽ منافعي جو فرق، ۽ مقامي بازار جا اصول سمجهڻ."
        },
        {
          title: "ڪاروباري سوچ، فني مهارتون ۽ روزگار جا موقعا",
          desc: "عملي فني هنر سکڻ، مارڪيٽ جي ضرورتن کي سڃاڻڻ، ۽ اڳتي هلي پنهنجو روزگار يا ڪاروبار شروع ڪرڻ جو حوصلو پيدا ڪرڻ."
        }
      ],
      examplesTitle: "شاگردن لاءِ مقامي ڪاروبارن جا مثال",
      examplesSubtitle: "مقامي پيداوار، مرمت ۽ پاڻي جي خدمتن جا اٺ مثال.",
      examples: [
        {
          id: "data-cable-manufacturing",
          title: "ڊيٽا ڪيبل ٺاهڻ جا ڪارخانا",
          description: "اهي ڪارخانا تارون، ڪنيڪٽر ۽ حفاظتي تهه گڏ ڪري ڊيٽا ۽ چارجنگ ڪيبل ٺاهين ٿا."
        },
        {
          id: "plastic-bottle-manufacturing",
          title: "پلاسٽڪ جون بوتلون ٺاهڻ جا ڪارخانا",
          description: "اهي ڪارخانا پيئڻ جي پاڻي، مشروبات ۽ ٻين شين لاءِ پلاسٽڪ جون بوتلون ٺاهين ٿا."
        },
        {
          id: "ro-water-treatment",
          title: "آر او پاڻي صاف ڪرڻ جا پلانٽ",
          description: "اهي پلانٽ ريورس اوسموسس ذريعي پاڻي صاف ڪري پيئڻ جو صاف پاڻي فراهم ڪن ٿا."
        },
        {
          id: "concrete-block-paver-manufacturing",
          title: "ڪنڪريٽ بلاڪ ۽ پيور ٺاهڻ جا ڪارخانا",
          description: "اهي ڪارخانا عمارتن ۽ پيادل رستن لاءِ مضبوط ڪنڪريٽ بلاڪ ۽ پيور ٺاهين ٿا."
        },
        {
          id: "small-soap-making",
          title: "صابڻ ٺاهڻ جا ننڍا يونٽ",
          description: "ننڍا ٺاهيندڙ مقامي دڪانن ۽ بازارن لاءِ صابڻ ٺاهي پيڪ ڪن ٿا."
        },
        {
          id: "mobile-repairing",
          title: "موبائل مرمت جا دڪان",
          description: "مرمتي دڪان فون جا نقص ڳولي اسڪرين، بيٽري ۽ چارجنگ جا مسئلا ٺيڪ ڪن ٿا."
        },
        {
          id: "chappal-making",
          title: "چپل ٺاهڻ جا ننڍا يونٽ",
          description: "مقامي ڪاريگر گراهڪن ۽ بازارن لاءِ چپل ڪٽي، سبي ۽ تيار ڪن ٿا."
        },
        {
          id: "local-mechanical-craft-workshops",
          title: "سنڌ جا مقامي مڪينيڪل ۽ هنري ورڪشاپ",
          description: "مقامي ورڪشاپ مشينري جي مرمت، ڌاتوءَ جو ڪم، اجرڪ ڇپائي ۽ واڍڪو ڪم ڪن ٿا."
        }
      ]
    },
    heroTrack: {
      badge: "ڪردار ۽ شخصيت سازي جو شعبو",
      title: "شخصيت سازي",
      subtitle: "شاگردن جي ڪردار، اخلاق، خود اعتمادي، ۽ اسڪول، خانداني زندگي، سماج ۽ ايندڙ ڪيريئر لاءِ بنيادي زندگيءَ جون صلاحيتون.",
      description: "شاگرد نظم، ايمانداري، ڳالهه ٻولهه، اعتماد، همدردي، ٽيم ورڪ ۽ مشڪلاتن کي منهن ڏيڻ جون صلاحيتون سکندا آهن.",
      features: [
        {
          title: "ڳالهه ٻولهه ۽ باوقار انداز ۾ اظهار",
          desc: "ٻڌڻ، احترام سان ڳالهائڻ ۽ اعتماد سان پنهنجا خيال پيش ڪرڻ جي مشق."
        },
        {
          title: "نظم و ضبط، اخلاقيات ۽ سماجي آداب",
          desc: "اسڪول ۽ گهر ۾ سچائي، ذميواري ۽ احترام جي عملي تربيت."
        },
        {
          title: "جبلن تي ٽريڪنگ جون مہمات",
          desc: "ٻُڏو جبل، ڀاڳو ٽوڙهو ۽ ڪارونجهر ۾ ٽريڪنگ ۽ ڪئمپنگ ڪريو؛ سنڌو درياهه ۾ سرفنگ، ٻيڙي هلائڻ ۽ ترڻ سان جسماني تندرستي، اعتماد، ٽيم ورڪ ۽ فطرت جو احترام وڌايو."
        },
        {
          title: "حوصلا، باهمي سهڪار ۽ قيادت",
          desc: "همدردي، ٽيم ورڪ ۽ همت سان مسئلا حل ڪرڻ ۽ سٺا فيصلا ڪرڻ سکن."
        }
      ],
      heroOath: {
        title: "شاگردن جو اخلاقي عهد (ڪلاس 9)",
        text: "”مان سچائي ۽ ديانتداري سان ڪم ڪندس. مان عزت ۽ چٽائيءَ سان ڳالهائيندس. مان نظم و ضبط اختيار ڪندس، پنهنجي ساٿين جو ساٿ ڏيندس، سنڌ جي مٽيءَ جي خدمت ڪندس، ۽ زندگيءَ جي هر چئلينج جو بهادريءَ سان مقابلو ڪندس.“"
      }
    },
    theProof: {
      badge: "زندھ ثبوت",
      title: "ثبوت — سيوهڻ کان سلڪون ويلي تائين",
      intro: "باني علي مرتضيٰ سولنگي پنهنجو پهريون اسٽارٽ اپ سيوهڻ ۾ ٺاهيو. NUST جي GAP پروگرام ۾ ڪاميابي کان پوءِ، هو سلڪون ويلي ۾ 30 ملڪن جي بانيئن مان ٽئين نمبر تي آيو.",
      investorTitle: "سيوهڻ جي اسٽارٽ اپ کي عالمي سيڙپڪار جي حمايت ملي.",
      investorDesc: "علي جي اسٽارٽ اپ جي سيڙپڪار 30 کان وڌيڪ يونيڪارن ڪمپنين ۾ سيڙپ ڪئي آهي، جن ۾ ٽيسلا، پي پال، اسپيس ايڪس ۽ ياهو شامل آهن.",
      stats: [
        { number: "ٽيون نمبر / 30", label: "سلڪون ويلي ۾ ملڪن مان پوزيشن" },
        { number: "10+", label: "ملڪن ۾ ڪمپني جي عالمي سروس" },
        { number: "سوين", label: "ملازمن جي عالمي ٽيم" },
        { number: "لکين ڊالر", label: "عالمي ٽيڪنالوجي آمدني" }
      ],
      whyItMatters: {
        title: "سيوهڻ مان عالمي ڪمپني ٺهي سگهي ٿي—اسان اهو ڪري ڏيکاريو.",
        desc: "هي اسڪول ڪلاس 1 کان شاگردن کي ٺاهڻ، پنهنجو ڪم پيش ڪرڻ ۽ عالمي موقعن لاءِ تيار ڪري ٿو."
      },
      founderQuote: {
        quote: "”جيڪو ڪجهه هو اوهان جي ٻار کي سيوهڻ مان ناممڪن چوندا، مان اهو سيوهڻ مان ڪري ڏيکاريو آهي. رڳو اهڙي اسڪول جي کوٽ هئي. تنهنڪري مان هي اسڪول تعمير ڪيو.“",
        name: "علي مرتضيٰ سولنگي",
        role: "باني، دي رائزنگ سنڌ"
      },
      milestones: [
        { year: "پهريون مرحلو", stage: "سيوهڻ مان شروعات", desc: "لال شهباز قلندر جي درگاهه ڀرسان عام ڪمرن ۾ پهريون ٽيڪنالاجي ڪوڊ لکيو ويو." },
        { year: "ٻيو مرحلو", stage: "قومي چيمپيئن", desc: "NUST GAP پروگرام ذريعي سڄي پاڪستان ۾ اعليٰ ڪاميابي حاصل ڪئي." },
        { year: "ٽيون مرحلو", stage: "سلڪون ويلي اسٽيج", desc: "30 ملڪن ۾ ٽيون نمبر ۽ 'The Most Investable Startup' جو اعزاز ورتو." },
        { year: "چوٿون مرحلو", stage: "عالمي سطح", desc: "ايلون مسڪ جي سيڙپڪار کان فنڊ حاصل ڪري 10 ملڪن ۾ ڪمپني وڌائي." },
        { year: "پنجون مرحلو", stage: "واپسي سنڌ ڏانهن", desc: "اهو پورو عمل ٻارن لاءِ مستقبل جي اسڪول جي صورت ۾ کڻي واپس آيا." }
      ]
    },
    globalBridge: {
      badge: "مقامي ڏات · عالمي وهڪرو",
      title: "عالمي پُل — پهرين ڏينهن کان جڙيل",
      subtitle: "مقامي صلاحيتن کي عالمي ساٿين، موقعن ۽ مارڪيٽن سان ڳنڍيون.",
      lanes: [
        {
          laneNumber: "01",
          title: "بنا سرحدن جي گڏيل ڪاروبار ۽ شريڪ باني",
          highlight: "سيوهڻ ۾ باني. سلڪون ويلي ۾ پارٽنر. هڪ ئي ڪمپني.",
          description: "پرڏيهه ۾ رهندڙ ماهر شاگردن جي منصوبن ۾ ڀائيوار ٿي تجربو، نيٽ ورڪ يا سرمايو ڏئي سگهن ٿا."
        },
        {
          laneNumber: "02",
          title: "بين الاقوامي تعليمي دورا ۽ عالمي سڃاڻپ",
          highlight: "تعليمي دورن سان نيون ثقافتون، ٽيڪنالاجي ۽ خيال ڏسن.",
          description: "امڪاني عالمي تعليمي دورا شاگردن کي نون ادارن ۽ ثقافتن سان روشناس ڪرائين، سندن سوچ وسيع ڪن ۽ تعليم يا ڪيريئر جا نوان رستا ڏيکارين."
        },
        {
          laneNumber: "03",
          title: "عالمي رجسٽريشن ۽ پيٽنٽس",
          highlight: "سيوهڻ ۾ پيدائش. سلڪون ويلي ۾ رجسٽريشن. عالمي تحفظ.",
          description: "بهترين شاگردن جا اسٽارٽ اپس آمريڪا (Delaware) ۾ رجسٽرڊ ڪيا ويندا ۽ انهن جون ايجادون پهريان آمريڪا ۽ پوءِ سڄي دنيا ۾ پيٽنٽ ڪرائي محفوظ ڪيون وينديون."
        }
      ],
      closing: "ڏات سنڌ ۾ رهي، جڏهن ته هتان جون شيون ۽ خيال عالمي مارڪيٽن تائين پهچن.",
      scholarshipHighlight: {
        badge: "تعليمي انصاف ۽ اهليت",
        title: "مستحق ۽ ذهين شاگردن لاءِ اسڪالرشپس",
        subtitle: "مالي حالتون ڪنهن به باصلاحيت ٻار جي تعليم ۽ حوصلي جي آڏو رڪاوٽ نه بڻجنديون.",
        description: "ميرٽ ۽ ضرورت جي بنياد تي اسڪالرشپس سان مستحق شاگرد نصاب، جديد ليبز ۽ شخصيت سازي مان فائدو وٺي سگهن ٿا.",
        points: [
          "ذهانت ۽ صلاحيت کي مڃڻ لاءِ ميرٽ ايوارڊز",
          "ضرورت مند خاندانن جي لائق ٻارن لاءِ مالي سهائتا",
          "خاندانن کي بااختيار بڻائڻ ۽ سماجي رڪاوٽون ختم ڪرڻ",
          "سنڌ جي سڀاڻي لاءِ نوان سائنسدان، معمار ۽ ليڊرز تيار ڪرڻ"
        ],
        valueProposition: "هڪ شاگرد جي سهائتا سڄي ڪميونٽي لاءِ فائديمند ٿي سگهي ٿي."
      },
      internationalTripsHighlight: {
        badge: "عالمي افق ۽ شعور",
        title: "بين الاقوامي تعليمي دورا ۽ ثقافتي شعور",
        subtitle: "عالمي تعليم، ثقافتن ۽ ٽيڪنالاجي سان واقفيت.",
        description: "امڪاني مطالعاتي دورا شاگردن کي مختلف تعليمي نظامن، ثقافتن ۽ ٽيڪنالاجيءَ سان متعارف ڪرائين ۽ مستقبل جا موقعا ڏيکارين.",
        points: [
          "عالمي درجي جي ڪلاسن، يونيورسٽين ۽ انوويشن هبز جو سڌو دورو",
          "مختلف ثقافتن، عالمي شاگردن ۽ بين الاقوامي مينٽرز سان ملاقاتون",
          "مقامي حدن کان ٻاهر نڪري عالمي امڪانن جو ادراڪ ڪرڻ",
          "سنڌ جي مٽي سان جڙيل رهندي بين الاقوامي اعتماد حاصل ڪرڻ"
        ],
        valueProposition: "نوان تجربا شاگردن جي سوچ جا افق وسيع ڪن ٿا."
      }
    },
    theMovement: {
      badge: "سنڌ جي جاڳرتا",
      title: "تحريڪ — سنڌ ٻيهر اڀري رهي آهي",
      inheritance: {
        title: "سنڌ وٽ تعمير ۽ جدت جي ڊگهي روايت آهي.",
        desc: "موهن جو دڙو 5,000 سال اڳ رٿيل شهر هو. سنڌ جي انجنيئرنگ، شاعري ۽ هنر جي تاريخ اسان کي نوان حل ٺاهڻ لاءِ اتساهي ٿي."
      },
      globalVillage: {
        title: "ڊجيٽل اوزار مقامي صلاحيتن کي عالمي ڪم سان ڳنڍين ٿا.",
        desc: "سيوهڻ جو ڊزائنر پرڏيهي گراهڪن لاءِ ڪم ڪري سگهي ٿو ۽ ايپ سڄي دنيا تائين پهچي سگهي ٿي. اسان شاگردن کي انهن موقعن لاءِ تيار ڪريون ٿا."
      },
      buildHere: {
        title: "عالمي ڪم ڪريو، سنڌ سان جڙيل رهو.",
        desc: "اسان پرڏيهه ۾ ڪم ڪندڙ خاندانن جو احترام ڪريون ٿا. شاگردن کي گهر ويهي ڪاروبار ٺاهڻ ۽ عالمي گراهڪن سان ڪم ڪرڻ جو اختيار به هئڻ گهرجي."
      },
      tenYearPicture: {
        title: "ڏهن سالن جو نقشو (سنڌ جو اڀار)",
        desc: "ماضي جي ياد ناهي پر نئين دور جي نئين ايجاد ۽ صنعتي انقلاب آهي.",
        points: [
          "سيوهڻ مان رجسٽر ٿيل اسٽارٽ اپس زرعي، پاڻي ۽ ٻولي جا مسئلا حل ڪندا.",
          "نياڻين جون روبوٽڪس ٽيمون بين الاقوامي مقابلن ۾ ٽرافيون کٽنديون.",
          "سلڪون ويلي جا سيڙپڪار سيوهڻ جي ڪمپنين جا شريڪ هوندا.",
          "سيوهڻ مان آمريڪا ۾ ايجادن جا باضابطا پيٽنٽ داخل ڪيا ويندا.",
          "نوجوان سنڌي، اردو، انگريزي ۽ AI ۾ مڪمل ماهر هوندا.",
          "شام جو اڪيڊمي سڄي شهر کي روشن ڪندي؛ ان بعد ڪالج ۽ باقاعده جديد يونيورسٽي جڙندي."
        ]
      },
      invitation: "والدين، شاگرد، استاد يا ڀائيوار طور دي رائزنگ سنڌ ۾ شامل ٿيو."
    },
    sehwanCampus: {
      badge: "سيوهڻ شريف، سنڌ",
      title: "سيوهڻ — پهريان هڪ شهر، مڪمل ارادي سان",
      whySehwan: "قلندر جو شهر ۽ باني جو پنهنجو شهر—سيوهڻ شروعات لاءِ فطري جاءِ آهي. هي ماڊل سڄي سنڌ ۾ وڌائي سگهجي ٿو.",
      cityProjects: "شاگرد مقامي ورثي، زائرين جي رهنمائي، هنر ۽ ٻُڏو جبل، ڀاڳو ٽوڙهو ۽ ڪارونجهر جي ٽريڪنگ تي ڪم ڪن ٿا.",
      campusSpine: [
        "جديد AI ۽ ڪمپيوٽنگ ورڪ اسٽيشن ليب",
        "3D پرنٽرز ۽ هارڊويئر ميڪر اسپيس",
        "ڊجيٽل اسٽوڊيو، پوڊ ڪاسٽ ۽ وڊيو ايڊيٽنگ روم",
        "ڪمپني انڪيوبيٽر پچ روم",
        "خطابت ۽ تقريرن جو وڏو آڊيٽوريم",
        "سائنس ۽ عملي تجربن جون ليبارٽريون"
      ],
      roadAhead: "اسان جو خواب نرسري–ميٽرڪ کان ڪاليج ۽ اڳتي سنڌ جي ٽيڪنالاجي يونيورسٽي تائين آهي.",
      eveningAcademy: {
        title: "ٽيڪنالاجي جو پرت — اعتماد جو انجڻ",
        opening: "اسڪول کان پوءِ ليبون مقامي نوجوانن ۽ بالغن لاءِ 12 هفتن جا فني ڪورس هلائين ٿيون.",
        tracks: [
          {
            name: "ڊجيٽل بنياد ۽ فري لانسنگ",
            duration: "12 هفتا",
            outcome: "ڪمپيوٽر سکيا → آفيس ٽولز → عملي انگريزي → پهريون آن لائن آرڊر",
            alignedWith: "سيلاني ماڊل، NAVTTC سان لاڳاپيل"
          },
          {
            name: "ڪوڊنگ ۽ عملي AI",
            duration: "12 هفتا",
            outcome: "پائٿون → ڊيٽا → AI اوزار → پنهنجو تيار ڪيل خودڪار سافٽ ويئر",
            alignedWith: "PSEB سرٽيفڪيشن ۽ انٽرن شپ"
          },
          {
            name: "وڊيو ڊيزائننگ ۽ ميڊيا",
            duration: "12 هفتا",
            outcome: "موبائل وڊيو → ايڊيٽنگ → 3 شايع ٿيل ڪم جنهن ۾ هڪ 'پازيٽو سنڌ' فلم هجي",
            alignedWith: "ڪيمپس اسٽوڊيو ۽ ليب تائين رسائي"
          },
          {
            name: "اي ڪامرس ۽ مقامي واپار",
            duration: "12 هفتا",
            outcome: "پراڊڪٽ تصويرون → ڪيٽلاگ → آن لائن پيمنٽ → هڪ مڪمل آن لائن دڪان",
            alignedWith: "سيوهڻ جا دڪاندار ۽ شاگرد مينٽرشپ"
          }
        ]
      },
      innovationLab: {
        title: "انوويشن ليب — سڀني ٺاهيندڙن لاءِ کليل",
        desc: "يونيورسٽي جا شاگرد ۽ ماهر ليب، رهنمائي ۽ ڊيمو ڊي لاءِ درخواست ڏئي سگهن ٿا.",
        benches: [
          "فائنل ايئر پروجيڪٽس حقيقي ڪمپنيون بڻجن ٿيون",
          "نوجوان پنهنجي سائيڊ پروجيڪٽس کي پيداواري شين ۾ بدلائين ٿا",
          "باني پنهنجي ٽيم ۽ ٽيڪنيڪل پارٽنر هتان ڳولين ٿا"
        ]
      },
      partners: [
        { name: "NIC پاڪستان", role: "انڪيوبيشن مينٽرز ۽ ڊيمو ڊي ججز" },
        { name: "ORIC يونيورسٽيون", role: "تحقيق ۽ تعليمي ڳانڍاپو" },
        { name: "PSEB", role: "آئي ٽي سرٽيفڪيشن ۽ نوڪرين جا موقعا" },
        { name: "سيلاني ويفليئر", role: "شام جي مفت ٽريننگ نظام ۾ مددگار" }
      ]
    },
    joinUs: {
      badge: "حصو بڻجو",
      title: "شامل ٿيڻ جو رستو چونڊيو.",
      doors: [
        {
          id: "parents",
          audience: "والدين لاءِ",
          title: "ڪيمپس جو دورو ڪريو ۽ پاڻ ڏسو.",
          description: "ليب ڏسو، فيوچر ڪلاس ۾ ويهو، استادن سان ملو ۽ امتحانن، سهائتا ۽ اسڪالرشپس بابت پڇو.",
          ctaText: "ڪيمپس جو دورو بُڪ ڪريو",
          secondaryCta: "واٽس ائپ تي ڳالهايو"
        },
        {
          id: "students",
          audience: "شاگردن لاءِ",
          title: "ڇنڇر تي اچو، پنهنجي هٿ سان ڪجهه ٺاهيو.",
          description: "ڇنڇر ورڪشاپ ۾ AI ماڊل ٺاهيو، 3D پرنٽ ڪريو، وڊيو ٺاهيو يا پنهنجو خيال پيش ڪريو.",
          ctaText: "بلڊ ڊي لاءِ رجسٽر ٿيو"
        },
        {
          id: "professionals",
          audience: "يونيورسٽي شاگردن ۽ ماهرن لاءِ",
          title: "پنهنجي منصوبي کي حقيقت بڻايو.",
          description: "AI اوزارن، رهنمائي ۽ ڊيمو ڊي لاءِ انوويشن ليب ۾ درخواست ڏيو.",
          ctaText: "ليب بينچ لاءِ اپلاءِ ڪريو"
        },
        {
          id: "teachers",
          audience: "استادن لاءِ",
          title: "عملي سکيا سان پڙهايو.",
          description: "سبق ڪٽس، جديد ليب ۽ اڪيڊمڪ سهائتا سان پڙهايو؛ تربيت ۽ مناسب پگهار موجود آهي.",
          ctaText: "استاد طور شامل ٿيو"
        }
      ],
      faqs: [
        {
          question: "ڇا فيوچر ليئر سبب منهنجي ٻار جو ميٽرڪ نتيجو متاثر ٿيندو؟",
          answer: "نه. هفتي جو لڳ ڀڳ 70٪ وقت بورڊ لاءِ، ۽ ڪلاس 9–10 ۾ 80٪ آهي؛ امتحاني مشق به شامل آهي."
        },
        {
          question: "ڇا هي اسلامي قدرن ۽ مقامي روايتن مطابق آهي؟",
          answer: "ها. سنڌ بورڊ جو اسلاميات نصاب شامل آهي، نياڻين جا ڪلاس عورت استاد هلائين ٿيون ۽ ٽريڪنگ لاءِ والدين جي اجازت ۽ حفاظتي انتظام آهن."
        },
        {
          question: "مستحق ۽ ذهين شاگردن لاءِ اسڪالرشپ جا ڪهڙا موقعا آهن؟",
          answer: "ميرٽ ۽ ضرورت جي بنياد تي اسڪالرشپس سان مستحق شاگرد نصاب، AI ليبز ۽ شخصيت سازي مان فائدو وٺي سگهن ٿا."
        },
        {
          question: "بين الاقوامي تعليمي دورن مان شاگردن کي ڪهڙو فائدو ملي ٿو؟",
          answer: "امڪاني مطالعاتي دورا شاگردن کي نيون ثقافتون، تعليمي نظام ۽ ٽيڪنالاجي ڏيکارين ٿا ۽ مستقبل جا رستا کولين ٿا."
        },
        {
          question: "والدين ٻار جي ڪارڪردگي ڪيئن چيڪ ڪندا؟",
          answer: "والدين جي موبائل ڊيش بورڊ ذريعي، جيڪو سنڌي ۽ اردو ۾ موجود آهي، جتي مهيني جي رپورٽ ۽ پروجيڪٽس جا تفصيل نظر ايندا."
        }
      ]
    },
    footer: {
      slogan: "تعمير ڪندڙ، نه رڳو ڊگري وٺندڙ.",
      ctaBand: "داخلا ڪلاس روم جي گنجائش تائين محدود آهن. دورو بڪ ڪريو.",
      ctaButton: "ڪيمپس دورو بُڪ ڪريو",
      rights: "دي رائزنگ سنڌ. سڀ حق محفوظ آهن. سيوهڻ شريف، سنڌ، پاڪستان.",
      governanceNote: "غير سياسي ۽ سنڌي اوليت؛ سنڌو تهذيب کان متاثر، مستقبل تي ڌيان."
    }
  },
  ur: {
    meta: {
      title: "دی رائزنگ سندھ | وہ اسکول جو یونیورسٹیاں نہ بنا سکیں",
      description: "سہون کا اسکول، جہاں سندھ بورڈ کی تعلیم کے ساتھ AI، کاروبار اور عملی تربیت ہے۔",
      slogan: "تعمیر کار، نہ کہ محض ڈگری یافتہ۔",
      positioning: "سندھ بورڈ کی تعلیم کے ساتھ کلاس 1 سے AI، کاروبار اور عملی تربیت۔"
    },
    nav: {
      home: "ہوم",
      whyWeExist: "ہمارا مقصد",
      theModel: "ہمارا ماڈل",
      whatStudentsDo: "طلباء کیا بناتے ہیں",
      theProof: "زندہ ثبوت",
      globalBridge: "عالمی پل",
      sehwanCampus: "سہون کیمپس",
      theMovement: "تحریک",
      joinUs: "شامل ہوں",
      visitCampus: "کیمپس کا دورہ کریں",
      bookVisit: "دورہ بک کریں",
      curriculumMap: "نصاب کا نقشہ",
      curriculumMapSub: "نرسری تا میٹرک BISE + فیوچر لیئر",
      theHeroTrackNav: "شخصیت سازی",
      theHeroTrackNavSub: "شخصیت سازی، باہمی گفتگو اور سندھ میں پہاڑی ٹریکنگ",
      studentIncubator: "طلباء کا انکیوبیٹر",
      studentIncubatorSub: "کلاس 8 تک رجسٹرڈ کمپنیاں",
      eveningAcademyNav: "ٹیکنالوجی کی تہہ",
      eveningAcademyNavSub: "کمیونٹی لیبز شام 5 بجے کے بعد کھلی ہیں"
    },
    common: {
      brandSubtitle: "فیوچر اسکول · سہون",
      livingPrecedent: "زندہ ثبوت اور نظیر",
      verifiedArchive: "تصدیق شدہ ریکارڈ",
      nationalStage: "قومی اسٹیج اور ٹیک کانفرنس",
      resultsSpeak: "نتائج جو خود بولتے ہیں",
      degreeUnemployment: "ڈگری یافتہ بیروزگاری",
      degreeUnemploymentSub: "بمقابلہ 4.7% بغیر تعلیم (LFS 24-25)",
      siliconValleyRank: "سلیکان ویلی رینک",
      siliconValleyRankSub: "30+ یونیکورن انویسٹر کی جانب سے تصدیق شدہ",
      boardProtected: "بورڈ کے نتائج محفوظ",
      boardProtectedSub: "مکمل BISE گروپ + فیوچر لیئر",
      aiLab: "اے آئی لیب",
      biseMetric: "BISE 100%",
      shippedProof10Years: "10 سال کا عملی ثبوت",
      curriculumTrajectory: "نصاب کی رفتار اور سمت",
      class1ToMatric: "کلاس 1 → میٹرک",
      compoundingAdvantage: "دس سال کا مسلسل بڑھتا ہوا عملی فائدہ",
      openWhatsAppChat: "واٹس ایپ چیٹ کھولیں",
      admissionsDeskOnline: "داخلہ ڈیسک آن لائن",
      admissionsDeskSub: "داخلوں، اسکالرشپس یا کیمپس وزٹ کیلئے واٹس ایپ پر پوچھیں۔",
      done: "مکمل",
      close: "بند کریں",
      apply: "درخواست دیں",
      submit: "جمع کروائیں",
      fullName: "پورا نام",
      fullNamePlaceholder: "مثال: اسد علی / زینب سولنگی",
      whatsAppNumber: "واٹس ایپ نمبر",
      childClass: "بچے کی کلاس کا انتخاب",
      workshopTrack: "بلڈ ٹریک کی ترجیح",
      projectSummary: "منصوبے یا کاروباری آئیڈیا کا خلاصہ",
      teachingPitch: "آپ کے طلباء اس ٹرم میں کیا بنائیں گے؟",
      submitRequest: "درخواست جمع کروائیں",
      registrationReceived: "درخواست موصول ہو گئی ہے!",
      registrationReceivedDesc: "سہون کیمپس ٹیم جلد واٹس ایپ پر آپ سے رابطہ کرے گی۔",
      validationName: "براہ کرم اپنا پورا نام درج کریں۔",
      validationPhone: "براہ کرم درست فون یا واٹس ایپ نمبر درج کریں (کم از کم 10 ہندسے)۔",
      nextSeatsLimited: "اگلا داخلہ کلاس رومز کی گنجائش کے ساتھ مشروط ہے، حوصلے کے ساتھ نہیں۔",
      elevation5688: "بڈو جبل · بھاگو توڑہو · کارونجھر",
      makersInnovationHub: "میکرز اور انوویشن ہب",
      sehwanSharifLabel: "سہون شریف",
      whySehwanTitle: "سہون کیوں",
      cityProjectsTitle: "شہر کے پروجیکٹس: شہر ہی کلاس روم ہے",
      campusSpineTitle: "کیمپس کا نقشہ اور آرکیٹیکچرل بلیو پرنٹ",
      partnersTitle: "شریک بانی ایکو سسٹم پارٹنرز",
      printMap: "نرسری تا میٹرک نصاب پرنٹ یا ڈاؤن لوڈ کریں",
      seeFutureLayerLive: "کیمپس پر فیوچر لیئر کا پیریڈ لائیو دیکھیں",
      systemComparisonMatrix: "نظام کا موازنہ میٹرکس",
      systemComparisonSub: "بات نظام کی ہے، کسی فرد کی نہیں",
      howWeTeachTitle: "ہم کیسے پڑھاتے ہیں اور والدین کیسے دیکھتے ہیں",
      howWeTeachSub: "شفاف اور ذمہ دار تعلیم کے پانچ اصول",
      exploreTitle: "دریافت کریں",
      programsTitle: "پروگرامز",
      valuesTitle: "اقدار و رابطہ",
      craftedWithPride: "سندھ میں فخر کے ساتھ تیار کردہ",
      forSindhFuture: "کل کے معماروں کیلئے",
      smallMediumEnterprises: "چھوٹے اور درمیانے کاروبار",
      sindhLocalEconomy: "سندھ کی مقامی معیشت",
      realWorldPractice: "عملی تربیت",
      vocationalCareerPathways: "فنی کیریئر کے مواقع",
      nurseryMatricBise: "نرسری تا میٹرک BISE اسکیم",
      heroTrackGorakhTreks: "شخصیت سازی اور پہاڑی ٹریکنگ",
      eveningCommunityAcademy: "ٹیکنالوجی کی تہہ",
      innovationLabBuilders: "معماروں کیلئے انوویشن لیب",
      saturdayBuildDays: "ہفتہ وار بلڈ ڈیز",
      sehwanCampusLabNav: "سہون کیمپس اور انوویشن لیب",
      theMovementNav: "تحریک (سندھ نشاۃ ثانیہ)",
      bookCampusVisitTitle: "کیمپس کا دورہ بک کریں",
      saturdayBuildDayTitle: "ہفتہ وار بلڈ ڈے رجسٹریشن",
      applyToTeachTitle: "بطور استاد درخواست دیں",
      labBenchTitle: "انوویشن لیب بینچ کی درخواست",
      modalSubtitle: "سیہون شریف کیمپس · دی رائزنگ سندھ",
      gradeNursery: "نرسری – کے جی (ابتدائی عمر)",
      grade1to3: "کلاس 1–3 (بنیادی فیوچر لیئر)",
      grade4to5: "کلاس 4–5 (پہلا AI ماڈل اور بازار)",
      grade6to7: "کلاس 6–7 (پائتھن، IoT اور موبائل ایپس)",
      grade8: "کلاس 8 (رجسٹرڈ اسٹوڈنٹ کمپنی)",
      grade9to10: "کلاس 9–10 (میٹرک بورڈ + انکیوبیٹر)",
      trackAI: "پہلا AI ماڈل تربیت دیں (کمپیوٹر ویژن)",
      track3D: "3D پرنٹنگ اور ہارڈویئر پروٹو ٹائپ",
      trackMedia: "مثبت سندھ ویڈیو اور اسٹوڈیو پوڈ کاسٹنگ",
      trackPitch: "اسٹیج پر ججز کے سامنے خیال پیش کریں",
      teachNotesPlaceholder: "مثال: سائنس پراجیکٹس، دو لسانی تحریر، کوڈنگ...",
      labBenchPlaceholder: "مثال: انڈس بیسن کیلئے ایگری ٹیک IoT، سندھ ایڈ ٹیک...",
      stageSpecification: "درجے کی تفصیلات",
      computingPillarTitle: "کمپیوٹنگ اور AI شعبہ",
      entrepreneurshipPillarTitle: "انٹرپرینیورشپ شعبہ",
      evidenceBehindNeed: "ضرورت کے پیچھے ٹھوس ثبوت",
      problemStripTitle: "امتحانات صرف یادداشت ناپتے ہیں۔",
      problemStripHighlight: "مارکیٹ عملی صلاحیت کی قدر کرتی ہے۔",
      youthUnemploymentTitle: "نوجوان گریجویٹ بیروزگاری",
      youthUnemploymentDesc: "20–24 سال کے 32.8% پاکستانی گریجویٹ بے روزگار ہیں؛ خواتین میں شرح 45.2% ہے۔",
      youthUnemploymentSource: "ماخذ: لیبر فورس سروے / گیلپ پاکستان",
      instantProofTitle: "نظریات کے بجائے کام کا فوری ثبوت",
      instantProofDesc: "ہمارے کلاس 8 کے طلباء کے پاس باقاعدہ گاہک ہیں۔ اکثر یونیورسٹی طلباء کے پاس محض سی وی ہوتی ہے۔",
      instantProofSub: "میٹرک تک ہر طالب علم AI آٹومیشن تیار کر چکا ہوتا ہے، کمپنی اکاؤنٹس چلاتا ہے اور اسٹیج پر پچ کرتا ہے۔",
      noMarketObsolescenceTitle: "مارکیٹ میں متروک نہ ہونے کی ضمانت",
      noMarketObsolescenceDesc: "چھ سال کی عمر سے بچے بورڈ نصاب کے ساتھ کمپیوٹنگ اور انٹرپرینیورشپ میں مہارت پاتے ہیں۔ سولہ سال کی عمر تک دس سال کا عملی فرق پیدا ہو جاتا ہے۔",
      gorakhTrekTitle: "سندھ کے پہاڑوں پر ٹریکنگ مہمات",
      investorPrecedent: "سرمایہ کاروں کا اعتماد",
      lanePrefix: "راہ",
      directVentureTrack: "براہ راست وینچر ٹریک",
      partnerVentureCta: "اسٹارٹ اپ پارٹنرشپ کیلئے رابطہ کریں",
      positiveSindhDocNote: "مثبت سندھ پہلو: ہر میٹرک کا طالب علم خود تیار کردہ دستاویزی فلم میں حصہ لیتا ہے۔",
      joinTheMovementCta: "تحریک کا حصہ بنیں",
      afterHoursEngine: "ٹیکنالوجی اور کمیونٹی",
      alignedWithLabel: "ہم آہنگ",
      applyForBenchCta: "بینچ کیلئے درخواست دیں",
      fourDoorsSubtitle: "سہون سے سلیکان ویلی تک کا آزمودہ سفر، جو اب نصاب کی شکل میں ہے۔",
      forParentsBadge: "والدین کیلئے",
      forStudentsBadge: "طلباء کیلئے",
      forTeachersBadge: "اساتذہ کیلئے",
      forBuildersBadge: "معماروں اور یونیورسٹی طلباء کیلئے",
      bookTourCta: "کیمپس کا دورہ بک کریں",
      registerBuildDayCta: "بلڈ ڈے کیلئے رجسٹر ہوں",
      teachersCardDesc: "اسباق کی کٹس، مکمل AI تربیت اور بہترین مشاہرہ فراہم کیا جائے گا۔",
      buildersCardDesc: "انوویشن لیب بینچ، جدید AI ٹولز اور ڈیمو ڈیز کیلئے درخواست دیں۔",
      whatsappParentsPrompt: "سندھ کے والدین واٹس ایپ پر فوری رابطہ کریں — ایڈمیشن ڈیسک",
      faqTitle: "اکثر پوچھے گئے سوالات",
      faqSubtitle: "اسکول کی پالیسی پر مبنی شفاف اور واضح جوابات",
      bindingGovernanceTitle: "پابند مواد کی شفافیت:",
      bindingGovernanceDesc: "ہم مہارتیں سکھاتے ہیں، نتائج کی ضمانت نہیں دیتے۔ اعداد سرکاری سروے کے ہیں؛ تنقید نظام پر ہے، اساتذہ یا والدین پر نہیں۔",
      sehwanLocation: "سہون شریف، سندھ، پاکستان",
      whatsAppLabel: "واٹس ایپ"
    },
    proofStrip: {
      items: [
        "سندھ بورڈ سے منظور شدہ (BISE)",
        "سندھی · اردو · انگریزی",
        "کلاس 1 سے AI اور کمپیوٹنگ",
        "کلاس 8 تک اپنی رجسٹرڈ کمپنی",
        "سلیکان ویلی سے براہِ راست رابطہ"
      ]
    },
    hero: {
      badge: "نرسری تا میٹرک · سہون شریف، سندھ",
      title: "ڈگری کافی نہیں۔",
      highlight: "مہارتوں سے مستقبل بنائیں۔",
      subtitle: "سندھ بورڈ کے مکمل نصاب کے ساتھ کلاس 1 سے AI، کاروبار اور عملی مہارتیں۔",
      ctaPrimary: "کیمپس کا دورہ کریں",
      ctaSecondary: "دیکھیں ہمارے طلباء کیا کرتے ہیں",
      statPills: [
        { label: "کلاس 1", sub: "کمپیوٹنگ اور AI کا آغاز" },
        { label: "کلاس 8", sub: "رجسٹرڈ کمپنی کا قیام" },
        { label: "3rd / 30", sub: "سلیکان ویلی میں عالمی اعزاز" },
        { label: "100%", sub: "سندھ بورڈ کا مکمل تحفظ" }
      ]
    },
    problemStrip: {
      tagline: "مہارتوں کا فرق",
      conclusion: "طلبہ کو بدلتی ہوئی ملازمتوں سے متعلق مہارتیں درکار ہیں۔",
      stats: [
        {
          number: "10.9%",
          label: "ڈگری ہولڈرز میں بے روزگاری",
          subtext: "بغیر تعلیم والے افراد میں 4.7% کے مقابلے میں",
          source: "لیبر فورس سروے 2024–25"
        },
        {
          number: "3 میں سے 1",
          label: "گریجویٹ بے روزگار (20-24 سال)",
          subtext: "32.8% نوجوان کیریئر کے آغاز پر بے روزگار ہیں",
          source: "گیلپ پاکستان تجزیہ"
        },
        {
          number: "45.2%",
          label: "خواتین گریجویٹس کی بے روزگاری",
          subtext: "عمر 25–29؛ مردوں میں 14.9% کے مقابلے میں",
          source: "گیلپ و لیبر فورس سروے"
        },
        {
          number: "760,000+",
          label: "2025 میں ملک چھوڑ گئے",
          subtext: "بیرونِ ملک روزگار کیلئے رجسٹر ہوئے",
          source: "روزنامہ ڈان، جولائی 2026"
        }
      ]
    },
    theTurn: {
      badge: "نئی راہ",
      title: "ہم نے مستقبل کیلئے ایک نیا اسکول بنایا۔",
      description: "سندھ بورڈ کا مکمل نصاب برقرار ہے؛ امتحانی سالوں میں تقریباً 80% وقت بورڈ مضامین کیلئے ہے۔ کلاس 1 سے AI، کاروبار اور کردار سازی بھی شامل ہیں۔",
      breakdown: [
        {
          title: "سندھ بورڈ نصاب",
          desc: "ریاضی، سائنس، اسلامیات، مطالعہ پاکستان، انگریزی، اردو اور سندھی، امتحانی مشق کے ساتھ۔",
          percent: "~70-80%"
        },
        {
          title: "مستقبل کی تہہ (Future Layer)",
          desc: "AI، روبوٹکس، طلباء کی کمپنیاں اور کام کا ای-پورٹ فولیو۔",
          percent: "~20-30%"
        }
      ]
    },
    fourEngines: {
      badge: "تعلیمی ستون",
      title: "ہر طالب علم کو پروان چڑھانے والے چار انجن",
      subtitle: "تعلیم، کام اور کمیونٹی کیلئے چار مربوط پروگرام۔",
      engines: [
        {
          id: "school",
          title: "اسکول",
          role: "نرسری تا میٹرک",
          description: "بورڈ مضامین اور مستقبل کی مہارتیں ساتھ، ہر طالب علم کیلئے مدد کے ساتھ۔",
          highlight: "نرسری تا میٹرک"
        },
        {
          id: "hero",
          title: "شخصیت سازی",
          role: "کردار اور بنیادی مہارتیں",
          description: "عملی سرگرمیوں اور ٹریکنگ سے نظم، دیانت، گفتگو، اعتماد اور ٹیم ورک بڑھائیں۔",
          highlight: "ہفتے میں 2 پیریڈ"
        },
        {
          id: "incubator",
          title: "چھوٹے کاروبار اور اسٹوڈنٹ انکیوبیٹر",
          role: "حقیقی کمپنیاں اور مقامی صنعت",
          description: "مقامی کاروباروں اور ورکشاپس سے پیداوار، کسٹمر سروس اور تجارت سیکھیں۔",
          highlight: "کلاس 8 تا 10"
        },
        {
          id: "academy",
          title: "ٹیکنالوجی کی تہہ",
          role: "ٹیکنالوجی اور کمیونٹی",
          description: "مقامی نوجوانوں اور بڑوں کیلئے AI، کوڈنگ، ویڈیو اور فری لانسنگ کے 12 ہفتے کے کورسز۔",
          highlight: "سہون کیلئے کھلا"
        }
      ]
    },
    whatStudentsDo: {
      badge: "واضح موازنہ",
      title: "جو ہمارے اسکول کے بچے کرتے ہیں، یونیورسٹی گریجویٹس نہیں کر پاتے۔",
      intro: "طلبہ چھ سال کی عمر سے بنانا سیکھتے ہیں؛ سولہ سال تک انہیں دس سال کی عملی مشق ملتی ہے۔",
      ladder: [
        {
          age: "9 سال کی عمر",
          grade: "کلاس 4",
          task: "تصاویر پہچاننے والا اپنا پہلا AI کمپیوٹر ویژن ماڈل ٹرین کرتی ہے۔",
          contrast: "اکثر کمپیوٹر سائنس گریجویٹس نے کبھی ماڈل ٹرین نہیں کیا۔"
        },
        {
          age: "10 سال کی عمر",
          grade: "کلاس 5",
          task: "اسکول اسٹال چلا کر بڑوں کے سامنے اپنی چھوٹی کمپنی کی بزنس پچ دیتی ہے۔",
          contrast: "نفع نقصان اور کسٹمر ڈیلنگ کا عملی تجربہ حاصل کرتا ہے۔"
        },
        {
          age: "12 سال کی عمر",
          grade: "کلاس 6-7",
          task: "پائتھون میں کوڈ، موبائل ایپ اور سینسرز کو انٹرنیٹ سے جوڑتا ہے۔",
          contrast: "سہون بازار کے اسٹالز سے باقاعدہ منافع اور بیلنس شیٹ بناتا ہے۔"
        },
        {
          age: "13 سال کی عمر",
          grade: "کلاس 8",
          task: "رجسٹرڈ کمپنی میں ٹیم کے ساتھ اجنبیوں کو اشیاء فروخت کرتا ہے اور فنانشل رپورٹ بناتا ہے۔",
          contrast: "AI ماڈلز کو روزمرہ سافٹ ویئر ورک فلوز سے منسلک کرتا ہے۔"
        },
        {
          age: "15 سال کی عمر",
          grade: "کلاس 9",
          task: "مقامی کاروبار کیلئے AI آٹومیشن بنا کر کیمپس انکیوبیٹر میں شمولیت اختیار کرتا ہے۔",
          contrast: "بین الاقوامی ٹیک اور بزنس مقابلوں میں حصہ لیتا ہے۔"
        },
        {
          age: "16 سال کی عمر",
          grade: "میٹرک",
          task: "بورڈ کے بہترین نمبرز، ایک لائیو پراڈکٹ، کمپنی کے آڈٹ شدہ اکاؤنٹس اور ای-پورٹ فولیو کے ساتھ فارغ ہوتا ہے۔",
          contrast: "NIC اور ORIC کے ججز کے سامنے ڈیمو ڈے پر پیشکش کر چکا ہوتا ہے۔"
        }
      ],
      comparison: {
        headers: ["روایتی یونیورسٹی گریجویٹ (22 سال، 16 سالہ تعلیم)", "دی رائزنگ سندھ کا طالب علم (16 سال، 11 سالہ تعلیم)"],
        rows: [
          { typical: "ایک تصدیق شدہ سی وی اور فوٹو کاپیاں", rising: "تیار کردہ لائیو کاموں کا ٹھوس ای-پورٹ فولیو" },
          { typical: "رٹے ہوئے نوٹس جو جلد بھول جاتے ہیں", rising: "مارکیٹ میں لائیو پراڈکٹس اور باقاعدہ کسٹمرز" },
          { typical: "ملازمت کے اشتہار کا انتظار", rising: "اجنبیوں کو مارکیٹ میں روبرو چیزیں بیچ چکا ہوتا ہے" },
          { typical: "خوفزدہ کہ AI ان کی نوکری چھین لے گا", rising: "AI کو روزانہ اپنے معاون اوزار کے طور پر استعمال کرتا ہے" },
          { typical: "شہر یا ملک چھوڑنے پر مجبور", rising: "سہون میں بیٹھ کر دنیا بھر کے کلائنٹس کو سروس دیتا ہے" }
        ]
      },
      closingNote: "طلبہ یونیورسٹی بھی جا سکتے ہیں، عملی تجربے اور اپنے کام کے پورٹ فولیو کے ساتھ۔"
    },
    theModel: {
      badge: "دو تہوں پر مشتمل نصاب",
      title: "بورڈ کا رزلٹ محفوظ، مستقبل کی شمولیت۔",
      openingPromise: "دو تہیں، ایک ٹائم ٹیبل۔ کوئی سمجھوتہ نہیں۔",
      promiseDetail: "ہفتے کا تقریباً 70% وقت سندھ بورڈ کیلئے، اور بورڈ کے سالوں میں 80% ہے۔ باقی وقت کمپیوٹنگ، AI اور کاروبار کیلئے ہے۔",
      timelineStages: [
        {
          grade: "نرسری تا کے جی",
          computing: "بغیر اسکرین منطقی گیمز، روبوٹ کو کمانڈ دینے کے تدریسی کھیل۔",
          entrepreneurship: "باہم شیئرنگ، کلاس روم کی ذمہ داریاں، مارکیٹ ڈے کردار۔",
          milestone: "منطق اور ہمدردی"
        },
        {
          grade: "کلاس 1 تا 3",
          computing: "ScratchJr، فلور روبوٹس، ٹائپنگ اور بنیادی الگورتھم۔",
          entrepreneurship: "حقیقی سکوں کے ساتھ کلاس روم شاپ، بچت کی عادت، کھاتہ لکھنا۔",
          milestone: "پہلا کوڈ اور مالی سمجھ بوجھ"
        },
        {
          grade: "کلاس 4 تا 5",
          computing: "اسکریچ گیمز، مائیکرو بٹ کنٹرولر، پہلا ٹرین شدہ AI ماڈل۔",
          entrepreneurship: "اسکول بازار اسٹالز، والدین کے سامنے مِنی کمپنی کا آئیڈیا پیش کرنا۔",
          milestone: "AI ماڈل کی تربیت"
        },
        {
          grade: "کلاس 6 تا 7",
          computing: "پائتھون پروگرامنگ، موبائل ایپس، انٹرنیٹ آف تھنگز (IoT) سینسرز۔",
          entrepreneurship: "بزنس ماڈل کینوس، مقامی چھوٹے یونٹس (صابن سازی اور جوتا سازی) کے تعاون سے بیچ پروڈکشن اور کھاتہ داری۔",
          milestone: "پائتھون اور مارکیٹ سیلز"
        },
        {
          grade: "کلاس 8",
          computing: "ویب ڈویلپمنٹ، APIs، خودکار AI ایجنٹ ورک فلوز، تھری ڈی ڈیزائننگ۔",
          entrepreneurship: "باقاعدہ رجسٹرڈ طالب علم کمپنی، مقامی صنعتوں (موبائل ریپیئر اور مینوفیکچرنگ) کے ساتھ صارفین کو حقیقی فراہمی۔",
          milestone: "قانونی کمپنی کا انتظام"
        },
        {
          grade: "کلاس 9 تا 10",
          computing: "سندھ بورڈ کمپیوٹر سائنس + خاندانی کاروبار کیلئے تیار کردہ AI آٹومیشن۔",
          entrepreneurship: "کیمپس انکیوبیٹر سمسٹر؛ مقامی SMEs کے مسائل کا حل؛ NIC اور ORIC مہمانوں کے روبرو فائنل پچ۔",
          milestone: "میٹرک رزلٹ اور لائیو پورٹ فولیو"
        }
      ],
      teachingPillars: [
        {
          title: "مہارت اولین ترجیح",
          desc: "ہفتہ وار جائزہ اور دہرائی، تاکہ کوئی بھی بچہ پیچھے نہ رہ جائے۔"
        },
        {
          title: "حیات بھر کا ای-پورٹ فولیو",
          desc: "کے جی سے میٹرک تک ہر پراجیکٹ، رپورٹ اور مقابلہ کلاؤڈ پر محفوظ۔"
        },
        {
          title: "والدین کا موبائل ڈیش بورڈ",
          desc: "اپنی زبان میں بچے کی تعلیمی اور تکنیکی ترقی فون پر جانچیں۔"
        },
        {
          title: "اساتذہ تنہا نہیں",
          desc: "مرکزی اکیڈمک ٹیم اور تیار شدہ سبق کٹس؛ ہر استاد کا AI ایکسپرٹ ہونا ضروری نہیں۔"
        },
        {
          title: "دیانتداری اور اخلاقیات",
          desc: "اخلاقی اصولوں کے تحت AI کا تعمیری اور مثبت استعمال سکھایا جاتا ہے۔"
        }
      ]
    },
    smeEnterprises: {
      badge: "عملی و فنی تربیت",
      title: "تعلیم کو حقیقی کاروبار اور مقامی صنعت سے جوڑنا",
      subtitle: "عملی پیداوار، فنی ہنر اور حقیقی کام کے ذریعے چھوٹے اور درمیانے درجے کے کاروباروں (SMEs) کو سمجھنا۔",
      whatIsSmeTitle: "چھوٹے اور درمیانے کاروبار (SMEs) کیا ہیں؟",
      whatIsSmeDesc: "SMEs سندھ کے مقامی دکانیں، ورکشاپس، مرمت مراکز اور کارخانے ہیں جو اشیا، خدمات اور روزگار فراہم کرتے ہیں۔",
      whyConnectTitle: "تعلیم کو مقامی کاروباروں سے جوڑنا کیوں ضروری ہے؟",
      whyConnectDesc: "مقامی کاروباروں کے ساتھ کام سے طلبہ پیداوار، مسئلہ حل کرنے، کسٹمر سروس اور کاروباری مہارتیں سیکھتے اور کیریئر کے راستے دیکھتے ہیں۔",
      learningOutcomesTitle: "طلبہ حقیقی کاروباروں سے کیا سیکھتے ہیں؟",
      learningOutcomes: [
        {
          title: "مصنوعات کی تیاری اور پیداواری عمل (Manufacturing Processes)",
          desc: "خام مال کا حصول، فارمولیشن اور درست پیمائش، اسمبلی لائن، پیکیجنگ اور حفاظتی اصولوں کی پابندی۔"
        },
        {
          title: "کسٹمر سروس اور صارفین کی ضروریات کو سمجھنا",
          desc: "گاہک کی بات غور سے سننا، شائستہ گفتگو، مطلوبہ مسئلے کا بروقت حل اور گاہک کا اعتماد جیتنا۔"
        },
        {
          title: "ٹیم ورک، کوالٹی کنٹرول اور مسائل کا حل",
          desc: "ساتھیوں کے ساتھ مل کر کام کرنا، معیار کی یکسانیت برقرار رکھنا اور ورکشاپ کے روزمرہ چیلنجز کو مل کر حل کرنا۔"
        },
        {
          title: "مقامی کاروبار کیسے کام کرتے ہیں؟",
          desc: "کیش فلو، کھاتہ داری، مال کی دیکھ بھال، اخراجات اور منافع کا توازن، اور مقامی مارکیٹ کی اقتصادی حرکیات۔"
        },
        {
          title: "انٹرپرینیورشپ، ووکیشنل اسکلز اور روزگار کے مواقع",
          desc: "عملی فنی صلاحیتیں نکھارنا، مارکیٹ کے تقاضے سمجھنا اور مستقبل میں باعزت روزگار یا ذاتی کاروبار شروع کرنے کا اعتماد حاصل کرنا۔"
        }
      ],
      examplesTitle: "طلبہ کیلئے مقامی کاروباروں کی مثالیں",
      examplesSubtitle: "مقامی پیداوار، مرمت اور پانی کی خدمات کی آٹھ مثالیں۔",
      examples: [
        {
          id: "data-cable-manufacturing",
          title: "ڈیٹا کیبل بنانے کے یونٹس",
          description: "یہ یونٹس تاروں، کنیکٹرز اور حفاظتی تہہ کو جوڑ کر ڈیٹا اور چارجنگ کیبلز بناتے ہیں۔"
        },
        {
          id: "plastic-bottle-manufacturing",
          title: "پلاسٹک کی بوتلیں بنانے کے یونٹس",
          description: "یہ کارخانے پینے کے پانی، مشروبات اور دیگر مصنوعات کیلئے پلاسٹک کی بوتلیں بناتے ہیں۔"
        },
        {
          id: "ro-water-treatment",
          title: "آر او واٹر ٹریٹمنٹ پلانٹس",
          description: "یہ پلانٹس ریورس اوسموسس کے ذریعے پانی صاف کرکے پینے کا صاف پانی فراہم کرتے ہیں۔"
        },
        {
          id: "concrete-block-paver-manufacturing",
          title: "کنکریٹ بلاک اور پیور بنانے کے یونٹس",
          description: "یہ یونٹس عمارتوں اور پیدل راستوں کیلئے پائیدار کنکریٹ بلاک اور پیور تیار کرتے ہیں۔"
        },
        {
          id: "small-soap-making",
          title: "صابن سازی کے چھوٹے یونٹس",
          description: "چھوٹے یونٹس مقامی دکانوں اور بازاروں کیلئے صابن تیار کرکے پیک کرتے ہیں۔"
        },
        {
          id: "mobile-repairing",
          title: "موبائل ریپیئرنگ شاپس",
          description: "یہ دکانیں فون کے نقص کی تشخیص کرکے اسکرین، بیٹری اور چارجنگ کے مسائل ٹھیک کرتی ہیں۔"
        },
        {
          id: "chappal-making",
          title: "چپل سازی کے چھوٹے یونٹس",
          description: "مقامی کاریگر گاہکوں اور بازاروں کیلئے چپل کاٹتے، سیتے اور تیار کرتے ہیں۔"
        },
        {
          id: "local-mechanical-craft-workshops",
          title: "سندھ کی مقامی مکینیکل اور دستکاری ورکشاپس",
          description: "یہ ورکشاپس مشینری کی مرمت، دھات کا کام، اجرک پرنٹنگ اور بڑھئی کا کام کرتی ہیں۔"
        }
      ]
    },
    heroTrack: {
      badge: "کردار اور اخلاقی تربیت کا شعبہ",
      title: "شخصیت سازی",
      subtitle: "طلبہ کا کردار، اخلاق، خود اعتمادی اور اسکول، خاندانی زندگی، معاشرے اور روشن مستقبل کیلئے بنیادی مہارتیں۔",
      description: "طلبہ اسکول، گھر اور کام کیلئے نظم، دیانت، گفتگو، اعتماد، ہمدردی، ٹیم ورک اور ثابت قدمی سیکھتے ہیں۔",
      features: [
        {
          title: "باہمی گفتگو اور باوقار اظہارِ خیال",
          desc: "غور سے سننے، احترام سے گفتگو اور اعتماد کے ساتھ اظہار کی مشق۔"
        },
        {
          title: "نظم و ضبط، اخلاقیات اور سماجی آداب",
          desc: "اسکول اور گھر میں سچائی، ذمہ داری اور احترام کی عملی تربیت۔"
        },
        {
          title: "پہاڑی ٹریکنگ کی مہمات",
          desc: "بڈو جبل، بھاگو توڑہو اور کارونجھر میں ٹریکنگ اور کیمپنگ کریں؛ دریائے سندھ میں سرفنگ، کشتی رانی، کشتی سواری اور تیراکی سے فٹنس، اعتماد، ٹیم ورک اور فطرت کا احترام بڑھائیں۔"
        },
        {
          title: "حوصلہ مندی، ہمدردی اور قائدانہ صلاحیت",
          desc: "ہمدردی، ٹیم ورک اور ثابت قدمی کے ساتھ مسائل حل کرنا اور بہتر فیصلے کرنا۔"
        }
      ],
      heroOath: {
        title: "طلبہ کا اخلاقی عہد (نہم جماعت)",
        text: "”میں سچائی اور دیانت داری سے کام لوں گا۔ میں عزت اور شائستگی کے ساتھ گفتگو کروں گا۔ میں نظم و ضبط کا پابند رہوں گا، اپنے ساتھیوں کا ساتھ دوں گا، سندھ کی دھرتی کی خدمت کروں گا، اور زندگی کے ہر چیلنج کا ڈٹ کر مقابلہ کروں گا۔“"
      }
    },
    theProof: {
      badge: "زندہ نظیر",
      title: "ثبوت — سہون سے سلیکان ویلی تک",
      intro: "بانی علی مرتضیٰ سولنگی نے اپنا پہلا اسٹارٹ اپ سہون میں بنایا۔ NUST GAP جیتنے کے بعد وہ سلیکان ویلی میں 30 ممالک کے بانیوں میں تیسرے نمبر پر آئے۔",
      investorTitle: "سہون کے اسٹارٹ اپ کو عالمی سرمایہ کار کی حمایت ملی۔",
      investorDesc: "علی کے اسٹارٹ اپ کے سرمایہ کار نے 30 سے زائد یونیکورن کمپنیوں میں سرمایہ کاری کی ہے، جن میں ٹیسلا، پے پال، اسپیس ایکس اور یاہو شامل ہیں۔",
      stats: [
        { number: "3rd / 30", label: "سلیکان ویلی میں ممالک کے درمیان پوزیشن" },
        { number: "10+", label: "ممالک میں عالمی خدمات کی فراہمی" },
        { number: "سینکڑوں", label: "ہائی ٹیک ملازمین کی ٹیم" },
        { number: "لاکھوں ڈالر", label: "ٹیکنالوجی سے حاصل کردہ زرمبادلہ" }
      ],
      whyItMatters: {
        title: "سہون سے عالمی کمپنی بن سکتی ہے—ہم نے ثابت کیا۔",
        desc: "یہ اسکول کلاس 1 سے طلبہ کو بنانے، اپنا کام پیش کرنے اور عالمی مواقع کیلئے تیار کرتا ہے۔"
      },
      founderQuote: {
        quote: "”جو کچھ وہ آپ کے بچے کو کہیں گے کہ سہون سے ممکن نہیں، وہ سب میں نے سہون سے کر دکھایا ہے۔ بس ایسے اسکول کی کمی تھی۔ چنانچہ میں نے یہ اسکول بنا دیا۔“",
        name: "علی مرتضیٰ سولنگی",
        role: "بانی، دی رائزنگ سندھ"
      },
      milestones: [
        { year: "پہلا مرحلہ", stage: "سہون سے آغاز", desc: "لال شہباز قلندر کی درگاہ کے قریب عام کمروں میں پہلا سافٹ ویئر تیار کیا گیا۔" },
        { year: "دوسرا مرحلہ", stage: "قومی چیمپئن", desc: "NUST GAP پروگرام کے ذریعے پاکستان بھر میں اول مقام حاصل کیا۔" },
        { year: "تیسرا مرحلہ", stage: "سلیکان ویلی کا اسٹیج", desc: "30 ممالک میں تیسری پوزیشن اور 'The Most Investable Startup' کا اعزاز جیتا۔" },
        { year: "چوتھا مرحلہ", stage: "عالمی وسعت", desc: "ایلون مسک کے انویسٹر کی حمایت کے بعد 10 ممالک میں کمپنی کا نیٹ ورک پھیلایا۔" },
        { year: "پانچواں مرحلہ", stage: "سہون واپسی", desc: "وہ سارا تجربہ سندھ کے بچوں کیلئے ایک منظم تعلیمی نصاب کی شکل میں واپس لائے۔" }
      ]
    },
    globalBridge: {
      badge: "مقامی ٹیلنٹ · عالمی بہاؤ",
      title: "عالمی پل — پہلے دن سے مربوط",
      subtitle: "مقامی صلاحیتوں کو عالمی شراکت داروں، مواقع اور منڈیوں سے جوڑیں۔",
      lanes: [
        {
          laneNumber: "01",
          title: "بغیر سرحدوں کے مشترکہ منصوبے اور شریک بانی",
          highlight: "سہون میں بانی۔ سلیکان ویلی میں شریک۔ ایک ہی کمپنی۔",
          description: "بیرون ملک مقیم ماہرین طلبہ کے منصوبوں میں شریک ہو کر تجربہ، نیٹ ورک یا سرمایہ دے سکتے ہیں۔"
        },
        {
          laneNumber: "02",
          title: "بین الاقوامی تعلیمی دورے اور عالمی شعور",
          highlight: "تعلیمی دوروں سے نئی ثقافتوں، ٹیکنالوجی اور خیالات سے واقفیت۔",
          description: "مجوزہ تعلیمی دورے طلبہ کو عالمی اداروں، ثقافتوں اور ٹیکنالوجی سے روشناس کرا کے تعلیم اور کیریئر کے راستے دکھاتے ہیں۔"
        },
        {
          laneNumber: "03",
          title: "عالمی رجسٹریشن اور پیٹنٹ پروٹیکشن",
          highlight: "پیدائش سہون میں۔ رجسٹریشن سلیکان ویلی میں۔ تحفظ دنیا بھر میں۔",
          description: "طلباء کے اسٹارٹ اپس کو امریکہ میں قانونی طور پر رجسٹر کرایا جائے گا اور ان کی ایجادات کو امریکہ اور دنیا بھر میں پیٹنٹ کر کے محفوظ بنایا جائے گا۔"
        }
      ],
      closing: "صلاحیت سندھ میں رہے، جبکہ یہاں کی مصنوعات اور خیالات عالمی منڈیوں تک پہنچیں۔",
      scholarshipHighlight: {
        badge: "تعلیمی مساوات اور میرٹ",
        title: "مستحق اور باصلاحیت طلبہ کیلئے اسکالرشپس",
        subtitle: "مالی حالات کسی باصلاحیت بچے کی تعلیمی اڑان کی راہ میں رکاوٹ نہیں بنیں گے۔",
        description: "میرٹ اور ضرورت پر مبنی اسکالرشپس اہل طلبہ کو نصاب، جدید لیبز اور کردار سازی تک رسائی دیتی ہیں۔",
        points: [
          "غیر معمولی ذہانت اور صلاحیت کے اعتراف کیلئے میرٹ ایوارڈز",
          "مستحق خاندانوں کے لائق طلبہ کیلئے مالی معاونت",
          "خاندانوں کو بااختیار بنانا اور سماجی رکاوٹیں دور کرنا",
          "سندھ کے کل کیلئے نئے سائنسدان، معمار اور لیڈرز تیار کرنا"
        ],
        valueProposition: "ایک طالب علم کی مدد پوری کمیونٹی کیلئے فائدہ مند ہو سکتی ہے۔"
      },
      internationalTripsHighlight: {
        badge: "عالمی افق اور تجربات",
        title: "بین الاقوامی تعلیمی دورے اور ثقافتی تجربات",
        subtitle: "عالمی تعلیم، ثقافتوں اور ٹیکنالوجی کا تجربہ۔",
        description: "مجوزہ دوروں سے طلبہ مختلف تعلیمی نظام، ثقافتیں اور ٹیکنالوجی دیکھیں اور مستقبل کے مواقع جانیں۔",
        points: [
          "عالمی معیار کے کلاس رومز، جامعات اور انوویشن ہبز کا براہِ راست دورہ",
          "مختلف ثقافتوں، غیر ملکی طلبہ اور عالمی اساتذہ سے باہمی تبادلۂ خیال",
          "مقامی حدود سے آگے بڑھ کر عالمی امکانات کو اپنانے کا حوصلہ",
          "اپنی مٹی سے جڑے رہتے ہوئے بین الاقوامی پراعتمادی کا حصول"
        ],
        valueProposition: "نئے تجربات طلبہ کی سوچ وسیع کرتے ہیں۔"
      }
    },
    theMovement: {
      badge: "سندھ کی نشاۃ ثانیہ",
      title: "تحریک — سندھ کا نیا عروج",
      inheritance: {
        title: "سندھ میں تعمیر اور جدت کی قدیم روایت ہے۔",
        desc: "موئن جو دڑو پانچ ہزار سال پہلے منصوبہ بند شہر تھا۔ سندھ کی انجینئرنگ، شاعری اور دستکاری ہمیں تخلیق کی ترغیب دیتی ہے۔"
      },
      globalVillage: {
        title: "ڈیجیٹل ٹولز مقامی صلاحیت کو عالمی کام سے جوڑتے ہیں۔",
        desc: "سہون کا ڈیزائنر بیرون ملک کلائنٹس کیلئے کام کر سکتا ہے، اور ایپ دنیا بھر تک پہنچ سکتی ہے۔ ہم طلبہ کو ان مواقع کیلئے تیار کرتے ہیں۔"
      },
      buildHere: {
        title: "سندھ سے جڑ کر عالمی کام کریں۔",
        desc: "بیرون ملک کام کرنے والے خاندانوں کی محنت قابلِ احترام ہے۔ طلبہ کو گھر سے کاروبار بنانے اور عالمی کلائنٹس کی خدمت کا اختیار بھی ملنا چاہیے۔"
      },
      tenYearPicture: {
        title: "دس سالہ خاکہ (سندھ کا نیا روپ)",
        desc: "مقامی جدت، ایجادات اور ٹیکنالوجی سے روشن مستقبل۔",
        points: [
          "سہون سے رجسٹرڈ اسٹارٹ اپس زراعت، پانی اور مقامی چیلنجز حل کر رہے ہوں گے۔",
          "طالبات کی روبوٹکس ٹیمیں بین الاقوامی ٹورنامنٹس میں اعزازات جیت رہی ہوں گی۔",
          "سلیکان ویلی کے سرمایہ کار سہون کی کمپنیوں کے حصہ دار ہوں گے۔",
          "سہون سے امریکہ میں نئی ایجادات کے باقاعدہ پیٹنٹس درج ہوں گے۔",
          "نوجوان سندھی، اردو، انگریزی اور AI پر مکمل عبور رکھتے ہوں گے۔",
          "شام کی اکیڈمی پورے شہر کو روشن کرے گی؛ اس کے بعد کالج اور پھر ایک شاندار ہائی ٹیک یونیورسٹی بنے گی۔"
        ]
      },
      invitation: "والدین، طالب علم، استاد یا شراکت دار بن کر دی رائزنگ سندھ میں شامل ہوں۔"
    },
    sehwanCampus: {
      badge: "سہون شریف، سندھ",
      title: "سہون — پہلے ایک شہر، پورے ارادے کے ساتھ",
      whySehwan: "قلندر کا شہر اور بانی کا اپنا شہر—سہون آغاز کیلئے موزوں ہے۔ یہ ماڈل پورے سندھ میں پھیلایا جا سکتا ہے۔",
      cityProjects: "طلبہ مقامی ورثے، زائرین کی رہنمائی، دستکاری اور بڈو جبل، بھاگو توڑہو و کارونجھر کی ٹریکنگ پر کام کرتے ہیں۔",
      campusSpine: [
        "جدید کمپیوٹنگ اور AI ورک اسٹیشن لیب",
        "تھری ڈی پرنٹرز اور ہارڈویئر میکرز اسپیس",
        "ڈیجیٹل میڈیا، پوڈکاسٹ اور ویڈیو اسٹوڈیو",
        "اسٹارٹ اپ انکیوبیٹر پچ روم",
        "خطابت اور کانفرنسز کا بڑا آڈیٹوریم",
        "سائنس اور عملی تجربات کی لیبارٹریز"
      ],
      roadAhead: "ہمارا وژن نرسری تا میٹرک سے کالج اور مستقبل میں سندھ کی ٹیکنالوجی یونیورسٹی تک ہے۔",
      eveningAcademy: {
        title: "ٹیکنالوجی کی تہہ — اعتماد کا ستون",
        opening: "اسکول کے بعد لیبز مقامی نوجوانوں اور بڑوں کیلئے 12 ہفتوں کے فنی کورسز پیش کرتی ہیں۔",
        tracks: [
          {
            name: "ڈیجیٹل بنیادیں اور فری لانسنگ",
            duration: "12 ہفتے",
            outcome: "کمپیوٹر بنیادی باتیں → دفتری سافٹ ویئر → کاروباری انگریزی → پہلا آن لائن پروجیکٹ",
            alignedWith: "سیلانی ماڈل، NAVTTC ہم آہنگ"
          },
          {
            name: "کوڈنگ اور عملی AI",
            duration: "12 ہفتے",
            outcome: "پائتھون بنیادیں → ڈیٹا ہینڈلنگ → AI ٹولز → پورٹ فولیو میں تیار کردہ آٹومیشن",
            alignedWith: "PSEB سرٹیفیکیشن اور انٹرن شپس"
          },
          {
            name: "ویڈیو، میڈیا اور کہانیاں",
            duration: "12 ہفتے",
            outcome: "فون ویڈیو گرافی → ایڈیٹنگ → 3 مکمل ویڈیوز بشمول 'پازیٹو سندھ' مختصر دستاویزی فلم",
            alignedWith: "کیمپس اسٹوڈیو اور لیب تک رسائی"
          },
          {
            name: "ای کامرس اور مقامی کاروبار",
            duration: "12 ہفتے",
            outcome: "پراڈکٹ فوٹو گرافی → آن لائن کیٹلاگ → پیمنٹس → ایک لائیو آن لائن اسٹور",
            alignedWith: "سہون کے تاجر اور طلباء رہنمائی"
          }
        ]
      },
      innovationLab: {
        title: "انوویشن لیب — شہر کے تمام بنانے والوں کیلئے",
        desc: "یونیورسٹی طلبہ اور پیشہ ور افراد لیب، رہنمائی اور ڈیمو ڈے کیلئے درخواست دے سکتے ہیں۔",
        benches: [
          "فائنل ایئر یونیورسٹی پراجیکٹس باقاعدہ کاروباری کمپنیوں میں ڈھلتے ہیں",
          "انجینئرز اپنے شوقیہ پراجیکٹس کو منافع بخش اشیاء بناتے ہیں",
          "نئے بانی اپنی تکنیکی اور مارکیٹنگ ٹیم یہاں سے منتخب کرتے ہیں"
        ]
      },
      partners: [
        { name: "NIC پاکستان", role: "انکیوبیشن رہنمائی اور ڈیمو ڈے کے ججز" },
        { name: "ORIC جامعات", role: "یونیورسٹی ریسرچ اور کمرشلائزیشن" },
        { name: "PSEB", role: "آئی ٹی اسناد اور ملازمتوں کے مواقع" },
        { name: "سیلانی ویلفیئر", role: "شام کی کمیونٹی ٹریننگ میں شراکت دار" }
      ]
    },
    joinUs: {
      badge: "شامل ہوں",
      title: "شمولیت کا راستہ چنیں۔",
      doors: [
        {
          id: "parents",
          audience: "والدین کیلئے",
          title: "کیمپس آئیں اور خود دیکھیں۔",
          description: "لیبز دیکھیں، فیوچر کلاس میں بیٹھیں، اساتذہ سے ملیں اور امتحانات، معاونت اور اسکالرشپس کے بارے میں پوچھیں۔",
          ctaText: "کیمپس کا دورہ بک کریں",
          secondaryCta: "واٹس ایپ پر رابطہ کریں"
        },
        {
          id: "students",
          audience: "طلباء کیلئے",
          title: "ہفتے کے روز آئیں، اپنے ہاتھ سے کچھ نیا بنائیں۔",
          description: "ہفتہ وار ورکشاپ میں AI ماڈل بنائیں، 3D پرنٹ کریں، ویڈیو بنائیں یا اپنا خیال پیش کریں۔",
          ctaText: "بلڈ ڈے کیلئے رجسٹر ہوں"
        },
        {
          id: "professionals",
          audience: "یونیورسٹی طلباء و پروفیشنلز کیلئے",
          title: "اپنے منصوبے کو حقیقت بنائیں۔",
          description: "AI ٹولز، رہنمائی اور ڈیمو ڈے کیلئے انوویشن لیب میں درخواست دیں۔",
          ctaText: "لیب بینچ کیلئے اپلائی کریں"
        },
        {
          id: "teachers",
          audience: "اساتذہ کیلئے",
          title: "عملی سیکھنے کے ساتھ پڑھائیں۔",
          description: "لیسن کٹس، جدید لیبز اور تعلیمی معاونت کے ساتھ پڑھائیں؛ تربیت اور مناسب معاوضہ فراہم ہوگا۔",
          ctaText: "تدریس کیلئے اپلائی کریں"
        }
      ],
      faqs: [
        {
          question: "کیا فیوچر لیئر سے میرے بچے کا میٹرک کا رزلٹ متاثر ہوگا؟",
          answer: "نہیں۔ ہفتے کا تقریباً 70% وقت بورڈ مضامین کیلئے، اور کلاس 9–10 میں 80% ہے؛ امتحانی مشق بھی شامل ہے۔"
        },
        {
          question: "کیا یہ اسلامی اقدار اور ہماری روایات کے مطابق ہے؟",
          answer: "جی ہاں۔ سندھ بورڈ کا اسلامیات نصاب شامل ہے، طالبات کے سیشنز خواتین اساتذہ چلاتی ہیں، اور ٹریکنگ والدین کی اجازت و حفاظتی انتظامات کے ساتھ ہوتی ہے۔"
        },
        {
          question: "مستحق اور باصلاحیت طلبہ کیلئے اسکالرشپ کے کیا مواقع ہیں؟",
          answer: "میرٹ اور ضرورت پر مبنی اسکالرشپس اہل طلبہ کو نصاب، AI لیبز اور کردار سازی تک رسائی دیتی ہیں۔"
        },
        {
          question: "بین الاقوامی تعلیمی دوروں سے طلبہ کو کیا فائدہ حاصل ہوتا ہے؟",
          answer: "مجوزہ دوروں سے طلبہ مختلف ثقافتیں، تعلیمی نظام اور ٹیکنالوجی دیکھیں اور مستقبل کے مواقع جانیں۔"
        },
        {
          question: "والدین اپنے بچے کی تعلیمی پیش رفت کیسے دیکھیں گے؟",
          answer: "والدین کے خصوصی موبائل ڈیش بورڈ پر جو سندھی، اردو اور انگریزی میں دستیاب ہے۔ آپ کو ہر ماہ بورڈ اور فیوچر پورٹ فولیو کی پیشرفت نظر آئے گی۔"
        }
      ]
    },
    footer: {
      slogan: "تعمیر کار، نہ کہ محض ڈگری یافتہ۔",
      ctaBand: "داخلے کلاس روم کی گنجائش تک محدود ہیں۔ دورہ بک کریں۔",
      ctaButton: "کیمپس کا دورہ بک کریں",
      rights: "دی رائزنگ سندھ۔ جملہ حقوق محفوظ ہیں۔ سہون شریف، سندھ، پاکستان۔",
      governanceNote: "غیر سیاسی، سندھی اولیت؛ وادیٔ سندھ کے ورثے سے جڑا اور مستقبل پر مرکوز۔"
    }
  }
};
