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
      description: "Pakistan's first future school in Sehwan — where children master the Sindh board syllabus and build with AI, run real companies before Matric, and graduate with proof.",
      slogan: "Builders, not degree-holders.",
      positioning: "Pakistan's first future school — where children of Sindh master the Sindh board syllabus and build with AI, run real companies before Matric, and graduate with proof, not just certificates."
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
      bookVisit: "Book a campus visit",
      curriculumMap: "Curriculum Map",
      curriculumMapSub: "Nursery to Matric BISE + Future Layer",
      theHeroTrackNav: "The Hero Track",
      theHeroTrackNavSub: "Speech, grooming & Gorakh Hill treks",
      studentIncubator: "Student Incubator",
      studentIncubatorSub: "Registered companies by Class 8",
      eveningAcademyNav: "Evening Academy",
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
      admissionsDeskSub: "Direct WhatsApp chat for parents across Sindh. Inquire about admissions, scholarships, and campus tours.",
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
      registrationReceivedDesc: "Our Sehwan campus admissions team will connect with you via WhatsApp shortly.",
      validationName: "Please enter your full name.",
      validationPhone: "Please enter a valid phone or WhatsApp number (minimum 10 digits).",
      nextSeatsLimited: "Next intake is limited by classrooms, not ambition.",
      elevation5688: "5,688 ft Elevation",
      makersInnovationHub: "Makers & Innovation Hub",
      sehwanSharifLabel: "Sehwan Sharif",
      whySehwanTitle: "Why Sehwan",
      cityProjectsTitle: "City Projects: The City is the Classroom",
      campusSpineTitle: "CAMPUS SPINE & ARCHITECTURAL BLUEPRINT",
      partnersTitle: "CO-FOUNDING ECOSYSTEM PARTNERS",
      printMap: "Print/Download Full Nursery–Matric Map",
      seeFutureLayerLive: "See Future Layer period live on campus",
      systemComparisonMatrix: "The System Comparison Matrix",
      systemComparisonSub: "Worded at the system, never at the person",
      howWeTeachTitle: "How We Teach & How Parents See It",
      howWeTeachSub: "Five institutional operating pillars ensuring accountability",
      exploreTitle: "Explore",
      programsTitle: "Programs",
      valuesTitle: "Values & Contact",
      craftedWithPride: "Crafted with pride in Sindh",
      forSindhFuture: "For the builders of tomorrow",
      nurseryMatricBise: "Nursery–Matric BISE Scheme",
      heroTrackGorakhTreks: "The Hero Track & Gorakh Treks",
      eveningCommunityAcademy: "Evening Community Academy",
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
      youthUnemploymentDesc: "One in three Pakistani graduates aged 20–24 is unemployed — exactly when careers should begin. For female graduates, it hits 45.2%. Talent is not the problem.",
      youthUnemploymentSource: "Source: Labour Force Survey / Gallup Pakistan",
      instantProofTitle: "Instant proof of work over theory",
      instantProofDesc: "Our Class 8 students have customers. Most university batches only have CVs.",
      instantProofSub: "By Matric, every student has shipped an AI automation, kept company accounts, and pitched on stage.",
      noMarketObsolescenceTitle: "No market obsolescence",
      noMarketObsolescenceDesc: "Starting at six, children master computing and entrepreneurship alongside the board syllabus. By sixteen, the gap is ten years of practice.",
      gorakhTrekTitle: "Gorakh Hills Survival Trek",
      investorPrecedent: "THE INVESTOR PRECEDENT",
      lanePrefix: "LANE",
      directVentureTrack: "Direct Venture Track",
      partnerVentureCta: "Partner with a venture",
      positiveSindhDocNote: "Positive Sindh Strand: Every Matric student contributes to one student-directed documentary.",
      joinTheMovementCta: "Join The Movement",
      afterHoursEngine: "AFTER-HOURS COMMUNITY ENGINE",
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
      bindingGovernanceDesc: "We promise equipping, never guaranteed outcomes. Statistics are verified from official labor surveys. The enemy is the system’s irrelevance, never our teachers or families.",
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
      highlight: "Ready to perform.",
      subtitle: "In Pakistan today, unemployment rises with education — and AI is rewriting work faster than any syllabus. The Rising Sindh is a full Sindh-board school where children also learn what's actually coming: building with AI, running real companies, and standing on any stage in the world.",
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
      tagline: "The Crisis of Unprepared Generations",
      conclusion: "The system is not broken for lack of talent. It is broken for lack of relevance.",
      stats: [
        {
          number: "10.9%",
          label: "Degree Holder Unemployment",
          subtext: "vs 4.7% for those with no schooling at all",
          source: "Labour Force Survey 2024–25"
        },
        {
          number: "1 in 3",
          label: "Graduates Unemployed (20–24)",
          subtext: "32.8% jobless exactly when careers should begin",
          source: "Gallup Pakistan / LFS Analysis"
        },
        {
          number: "45.2%",
          label: "Female Graduate Unemployment",
          subtext: "Aged 25–29 vs 14.9% for men. Talent is not the problem.",
          source: "Labour Force Survey & Gallup"
        },
        {
          number: "760,000+",
          label: "Left Pakistan in 2025",
          subtext: "Registered for overseas employment because home lacked a path",
          source: "Dawn, Jul 2026 Records"
        }
      ]
    },
    theTurn: {
      badge: "The Turn",
      title: "So we stopped waiting for the system — and built the school the future would build.",
      description: "Full Sindh scheme of studies — English, Urdu, Sindhi, the complete BISE Matric group, taught interactively and protected (~80% in board years). On top of it, the Future Layer: Computing & AI from Class 1. Entrepreneurship as a subject. A real registered company by Class 8. The Hero Track for confidence and character.",
      breakdown: [
        {
          title: "Sindh Board Core",
          desc: "Maths, Science, Islamiat, Social Studies, English, Urdu, Sindhi. Past-paper drills & marks-recovery clinics.",
          percent: "~70-80%"
        },
        {
          title: "The Future Layer",
          desc: "AI prompt engineering, hardware robotics, student registered startups, e-portfolio of proof.",
          percent: "~20-30%"
        }
      ]
    },
    fourEngines: {
      badge: "The Architecture",
      title: "Four Engines Powering Every Child",
      subtitle: "A holistic ecosystem that protects the present and captures the next twenty years.",
      engines: [
        {
          id: "school",
          title: "The School",
          role: "Nursery – Matric",
          description: "Two synchronized layers: board core + future layer. Interactive pedagogy where no child falls behind.",
          highlight: "Nursery to Matric"
        },
        {
          id: "hero",
          title: "The Hero Track",
          role: "Character & Courage",
          description: "Speech, grooming, resilience, Gorakh Hill survival treks. Courage on the timetable, not the noticeboard.",
          highlight: "2 Periods Weekly"
        },
        {
          id: "incubator",
          title: "The Incubator",
          role: "Real Companies",
          description: "Class 8–10 registered ventures with NIC/ORIC mentors, real customers, balance sheets and annual demo days.",
          highlight: "Class 8 to 10"
        },
        {
          id: "academy",
          title: "Evening Academy",
          role: "Community Engine",
          description: "At 5 pm, the labs belong to the city. 12-week tracks in code, AI, video and freelancing for youth & adults.",
          highlight: "Open to Sehwan"
        }
      ]
    },
    whatStudentsDo: {
      badge: "Flagship Comparison",
      title: "What our school students do, university students can't.",
      intro: "This is not a boast about children. It is an indictment of a system. The average university graduate was never taught to build, sell, or ship — only to memorize and wait. Our students start building at six. By sixteen, the gap is not talent. It is ten years of practice.",
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
      closingNote: "We are not against universities. We are against waiting sixteen years to discover the market wanted something no one taught you. Our graduates can still choose university — they will simply arrive as people who have already built, sold and led. The degree may open a door. The portfolio builds its own."
    },
    theModel: {
      badge: "The Two-Layer Curriculum",
      title: "Board results protected. Future added.",
      openingPromise: "Two layers. One timetable. Nothing sacrificed.",
      promiseDetail: "~70% of the week is the full Sindh scheme of studies (English, Urdu, Sindhi, Maths, Science, Islamiat, Social Studies, BISE Matric group, rising to ~80% in board years). ~30% is the Future Layer. The board is the floor. It is simply no longer the ceiling.",
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
          entrepreneurship: "Business Model Canvas, batch production runs sold at city stalls, accounting ledgers.",
          milestone: "Python & live public sales"
        },
        {
          grade: "Class 8",
          computing: "Web development, APIs, supervised AI-agent workflows, 3D design & 3D printing.",
          entrepreneurship: "A real registered student company, selling to real customers all term.",
          milestone: "Legally registered enterprise"
        },
        {
          grade: "Classes 9–10",
          computing: "Sindh Board Computer Science + an AI automation built for an active family business.",
          entrepreneurship: "MVP semester in campus incubator; demo day pitch judged by NIC/ORIC venture guests.",
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
    heroTrack: {
      badge: "The Character Pillar",
      title: "The Hero Track",
      subtitle: "Courage, speech, and resilience on the timetable, not the noticeboard.",
      description: "Inspired by the world's best founder-training playbooks, rebuilt for Sindh: two timetabled periods weekly for grooming and presentation, public speaking from Nursery circle-time to Class 10 keynote training on a real stage; sell-to-strangers challenges in city markets; survival weeks from school-ground camps to Gorakh Hill treks.",
      features: [
        {
          title: "Stage & Speech (Weekly)",
          desc: "From Nursery circle-time stories to Class 10 TED-style keynotes under bright lights."
        },
        {
          title: "Market Sell-to-Strangers",
          desc: "Face-to-face persuasion in Sehwan bazaars, learning to take 'no' and pitch with respect."
        },
        {
          title: "Gorakh Hill Survival Weeks",
          desc: "Rigorous high-altitude trekking, teamwork under pressure, wilderness safety and resilience."
        },
        {
          title: "Girls' Leadership Cohorts",
          desc: "Dedicated female mentorship, assertiveness training, and tech-building confidence circles."
        }
      ],
      heroOath: {
        title: "The Hero Oath (Class 9)",
        text: "“I will build with integrity. I will speak with courage. I will serve the soil of Sindh and never surrender to helplessness.”"
      }
    },
    theProof: {
      badge: "The Precedent",
      title: "The Proof — From Sehwan to Silicon Valley",
      intro: "Before we asked the children of Sindh to believe it, our founder lived it. Ali Murtaza Solangi did not build his first startup in Karachi, Lahore or Dubai. He built it in Sehwan — the same city where this school now stands. That startup won at the national level through NUST's GAP program, carried him to Silicon Valley, where against founders from 30 countries it ranked 3rd as 'The Most Investable Startup'.",
      investorTitle: "A boy from Sehwan and Elon Musk now share an investor.",
      investorDesc: "The same legendary Silicon Valley investor who backed Ali's startup has invested in 30+ unicorn companies — among them Tesla, PayPal, SpaceX and Yahoo. Capital that has picked world-changing companies for decades looked at a startup born in Sehwan — and said yes.",
      stats: [
        { number: "3rd of 30", label: "Countries Ranked in Silicon Valley" },
        { number: "10+", label: "Countries Served Globally Today" },
        { number: "Hundreds", label: "Of High-Tech Employees Led" },
        { number: "Millions $", label: "In Global Tech Revenue" }
      ],
      whyItMatters: {
        title: "When we say a global company can be built from Sehwan — that is not a slogan. It is an autobiography.",
        desc: "The Rising Sindh is that road, rebuilt as a school: the building, the pitching, the courage in front of strangers, the global ambition — taught from Class 1, instead of discovered by accident at 25. One founder walked it alone. The next generation will walk it with a map, a lab, and a teacher beside them."
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
      subtitle: "We will work aggressively on the one connection the system never built: local talent, plugged into the global stream. Not as a farewell — as a bridge that carries partnership, capital and recognition both ways.",
      lanes: [
        {
          laneNumber: "01",
          title: "Joint Ventures & Co-founders Without Borders",
          highlight: "A founder in Sehwan. A co-founder in Silicon Valley. One cap table.",
          description: "We match our ventures with the overseas diaspora and global professionals who join specific startups as JV partners or co-founders. The student brings the build and ground truth; the partner brings experience, networks and capital, governed by legal contracts from day one."
        },
        {
          laneNumber: "02",
          title: "Ecosystems & Exposure Programs",
          highlight: "Our startups will live inside the ecosystems — local and global.",
          description: "Connected directly into National Incubation Centers (NICs) at home, and international accelerators abroad. Selected founders travel for exposure and fundraising sprints to Silicon Valley and advanced tech hubs. Exposure is a curriculum program here, not an accident."
        },
        {
          laneNumber: "03",
          title: "Global Registration & Patents",
          highlight: "Born in Sehwan. Registered in Silicon Valley. Protected worldwide.",
          description: "Prominent student startups are registered as US Delaware/California corporate entities for global investor access and credibility. Students are backed to file intellectual property patents in the USA first, then worldwide — so what is invented in Sindh is owned by its inventors."
        }
      ],
      closing: "The promise of the bridge: the talent stays rooted in Sindh — its companies, capital, patents and recognition go global. We export products and ownership, not people."
    },
    theMovement: {
      badge: "The Sindh Renaissance",
      title: "The Movement — Sindh, Rising Again",
      inheritance: {
        title: "We are not a backward place trying to catch up. We are an ancient builder, waking up.",
        desc: "When most of the world lived in scattered mud huts, the children of the Indus built Moenjodaro — planned orthogonal streets, covered sanitation drains, standardized weights: civil engineering 5,000 years ago. This land gave the world one of its first great urban civilizations, a Sufi poetic canon of world rank, and geometric crafts whose patterns the world still copies. Memorizing photocopies was never our tradition. Building was."
      },
      globalVillage: {
        title: "For the first time in history, geography is not destiny.",
        desc: "A designer in a village near Sehwan can serve a client in London by evening. An app built in the Qalandar’s city deploys to the entire planet the moment it ships. AI has collapsed the cost of world-class tooling to the price of an internet connection. The village is global now — which means the village can finally compete. What remains scarce is not opportunity; it is preparation. That is the school’s job."
      },
      buildHere: {
        title: "Our ambition is not a visa.",
        desc: "We honor every parent whose overseas labor feeds a family — that sacrifice built half of Sindh. But sacrifice should be a choice, not the only door. The old bargain — leave everything, to do ordinary work in an extraordinary country — is no longer the only bargain. The new one: stay among your people, and do extraordinary work for the whole world. Our students will export products, not themselves."
      },
      tenYearPicture: {
        title: "What Rising Looks Like (The 10-Year Picture)",
        desc: "Not nostalgia. A renaissance by modern means: innovation, invention, and an indigenous tech ecosystem.",
        points: [
          "Startups registered in Sehwan solving agriculture, water, health and language challenges.",
          "Girls' robotics & AI teams winning podium finishes in international tournaments.",
          "Silicon Valley and diaspora co-founders sitting on Sehwan cap tables.",
          "Patents filed from Sehwan to the United States Patent Office.",
          "A youth generation fluent in Sindhi, Urdu, English — and generative AI.",
          "An evening academy lighting up Sehwan after dark; next a College, then a modern Polytechnic University."
        ]
      },
      invitation: "Every renaissance in history began the same way: someone built a school. It begins in Sehwan — the city where one founder has already proven the whole road. Join it as a parent, a student, a teacher, or a partner."
    },
    sehwanCampus: {
      badge: "Sehwan Sharif, Sindh",
      title: "Sehwan — One City First, On Purpose",
      whySehwan: "The city of the Qalandar — pilgrimage, mystic music, ancient heritage — and the founder’s own proving ground. We start where the proof is. The Sehwan blueprint is built to be repeated city-by-city across all of Sindh.",
      cityProjects: "Student projects anchor right in Sehwan: heritage audio-guide QR trails, shrine visitor-flow sensors, artisan craft digitization, and Gorakh/Kirthar survival treks. The city is our classroom.",
      campusSpine: [
        "Advanced Computing & AI Workstation Lab",
        "Maker Space with 3D Printers & IoT Hardware",
        "Digital Media, Podcast & Video Studio",
        "The Venture Incubator Pitch Room",
        "The Keynote Auditorium & Stage",
        "Science & Experimental Labs"
      ],
      roadAhead: "Today, Nursery to Matric. Next, The Rising Sindh College — then an indigenous modern university built AI-first, builder-first, fully compliant with board standards and future-facing everywhere else.",
      eveningAcademy: {
        title: "Evening Community Academy — The Trust Engine",
        opening: "At 2 pm the school belongs to our students. At 5 pm, it belongs to the city. The same labs, studios and mentors — opened to youth and adults of the community in 12-week evening tracks. Because a school that lifts only its own enrolled children has not understood the assignment.",
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
        desc: "The same incubator, AI lab and studios — open by application to university students and working professionals: a dedicated bench, seasoned mentors, AI tooling, startup sprints, and demo days.",
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
      title: "Four Doors. One Movement.",
      doors: [
        {
          id: "parents",
          audience: "For Parents",
          title: "Don't take our word for it. Take a tour.",
          description: "Walk the labs. Sit in an actual Future Layer period. Meet the teachers. Ask the hard questions — especially about board exams, discipline, and fee scholarships.",
          ctaText: "Book a Campus Visit",
          secondaryCta: "WhatsApp Us Directly"
        },
        {
          id: "students",
          audience: "For Students",
          title: "Come build something on a Saturday.",
          description: "Saturday Build Days: open hands-on workshops where you train an AI model, print in 3D, film and edit a video, or pitch an idea. Leave with something real you built.",
          ctaText: "Register for a Build Day"
        },
        {
          id: "professionals",
          audience: "For University Students & Pros",
          title: "Your degree taught theory. The Lab is where you build.",
          description: "Apply for an Innovation Lab bench: incubation, AI tooling, mentorship and demo days. Final-year projects become startups; side projects become revenue products.",
          ctaText: "Apply for a Lab Bench"
        },
        {
          id: "teachers",
          audience: "For Teachers",
          title: "You didn't enter teaching to dictate notes.",
          description: "Teach with world-class labs, lesson kits, and a central academic team. We train every teacher in the Future Layer — you just need passion and integrity. Competitive compensation.",
          ctaText: "Apply to Teach"
        }
      ],
      faqs: [
        {
          question: "Will the Future Layer hurt my child's Matric grades?",
          answer: "No. Sindh Board BISE hours are strictly protected (~70% of weekly timetable, rising to ~80% in Classes 9–10). We include targeted past-paper drills and marks-recovery clinics. The board is our floor; it is simply no longer the ceiling."
        },
        {
          question: "Is this Islamic and culturally values-appropriate?",
          answer: "Absolutely. Full Islamiat curriculum per the Sindh scheme of studies; the Hero Track places ethics, character, and integrity at its center; girls' cohorts are led by qualified female mentors; outdoor treks have parental consent and rigorous safety supervision."
        },
        {
          question: "What if our family cannot afford the full fee?",
          answer: "Financial need should never stand between a talented Sindhi child and the future. We publish transparent criteria for merit scholarships, need awards, and sibling discounts. Evening academy community tracks are free or nominal via our partner foundations."
        },
        {
          question: "How do parents track their child's progress?",
          answer: "Through our simple Parent Mobile Dashboard available in Sindhi, Urdu, and English. You receive monthly milestones showing both Sindh board academic progress and future-layer portfolio completions."
        }
      ]
    },
    footer: {
      slogan: "Builders, not degree-holders.",
      ctaBand: "The next intake is limited by classrooms, not ambition. Book your visit.",
      ctaButton: "Book Campus Visit",
      rights: "The Rising Sindh. All Rights Reserved. Sehwan Sharif, Sindh, Pakistan.",
      governanceNote: "Non-political. Sindhi-first. Grounded in 5,000 years of Indus civilization heritage and focused entirely on the technological future."
    }
  },
  sd: {
    meta: {
      title: "دي رائزنگ سنڌ | اهو اسڪول جيڪو يونيورسٽيون نه ٺاهي سگهيون",
      description: "پاڪستان جو پهريون مستقبل جو اسڪول سيوهڻ ۾ — جتي سنڌ جا ٻار بورڊ نصاب تي دسترس حاصل ڪن ٿا، آرٽيفيشل انٽيليجنس سان اوزار ٺاهين ٿا ۽ ميٽرڪ کان اڳ پنهنجي ڪمپني هلائين ٿا.",
      slogan: "تعمير ڪندڙ، نه رڳو ڊگري وٺندڙ.",
      positioning: "پاڪستان جو پهريون مستقبل جو اسڪول — جتي سنڌ جا ٻار سنڌ بورڊ جو مڪمل نصاب پڙهن ٿا، AI سان ٺاهين ٿا، ميٽرڪ کان اڳ حقيقي ڪمپنيون هلائين ٿا ۽ سرٽيفڪيٽن بدران ثبوت سان گڏ فارغ ٿين ٿا."
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
      theHeroTrackNav: "دي هيرو ٽريڪ",
      theHeroTrackNavSub: "تقرير، گرومنگ ۽ گورک هل ٽريڪس",
      studentIncubator: "شاگردن جو انڪيوبيٽر",
      studentIncubatorSub: "ڪلاس 8 تائين رجسٽرڊ ڪمپنيون",
      eveningAcademyNav: "شام جي اڪيڊمي",
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
      admissionsDeskSub: "سڄي سنڌ جي والدين لاءِ سڌو سنئون واٽس ائپ رابطو. داخلائن، اسڪالرشپ ۽ ڪيمپس دوري لاءِ پڇو.",
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
      registrationReceivedDesc: "اسان جي سيوهڻ ڪيمپس ايڊميشن ٽيم جلد ئي اوهان سان واٽس ائپ ذريعي رابطو ڪندي.",
      validationName: "مهرباني ڪري پنهنجو مڪمل نالو لکو.",
      validationPhone: "مهرباني ڪري صحيح فون يا واٽس ائپ نمبر لکو (گهٽ ۾ گهٽ 10 انگ).",
      nextSeatsLimited: "ايندڙ داخلا ڪلاس رومز جي گنجائش سان مشروط آهي، ارادن سان نه.",
      elevation5688: "5,688 فوٽ اوچائي",
      makersInnovationHub: "ميڪرز ۽ انوويشن هب",
      sehwanSharifLabel: "سيوهڻ شريف",
      whySehwanTitle: "سيوهڻ ڇو",
      cityProjectsTitle: "شهر جا پروجيڪٽ: شهر ئي ڪلاس روم آهي",
      campusSpineTitle: "ڪيمپس جو نقشو ۽ تعميراتي بليو پرنٽ",
      partnersTitle: "شريڪ باني ايڪوسسٽم پارٽنرز",
      printMap: "مڪمل نرسري–ميٽرڪ نقشو پرنٽ / ڊائون لوڊ ڪريو",
      seeFutureLayerLive: "ڪيمپس تي فيوچر ليئر جو پيريڊ لائيو ڏسو",
      systemComparisonMatrix: "نظام جي ڀيٽ واري ميٽرڪس",
      systemComparisonSub: "ڳالهه نظام جي آهي، ڪنهن فرد جي نه",
      howWeTeachTitle: "اسان ڪيئن پڙهايئون ٿا ۽ والدين ڪيئن ڏسن ٿا",
      howWeTeachSub: "پنج ادارتي ستون جيڪي شفافيت ۽ ذميواري يقيني بڻائين ٿا",
      exploreTitle: "ڳوليو",
      programsTitle: "پروگرامز",
      valuesTitle: "قدر ۽ رابطو",
      craftedWithPride: "سنڌ ۾ فخر سان ٺاهيل",
      forSindhFuture: "سڀاڻي جي تعمير ڪندڙن لاءِ",
      nurseryMatricBise: "نرسري–ميٽرڪ BISE اسڪيم",
      heroTrackGorakhTreks: "دي هيرو ٽريڪ ۽ گورک ٽريڪس",
      eveningCommunityAcademy: "شام جي ڪميونٽي اڪيڊمي",
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
      youthUnemploymentDesc: "20 کان 24 سالن جي هر ٽيون پاڪستاني گريجوئيٽ بيروزگار آهي — بلڪل جڏهن ڪيريئر شروع ٿيڻ گهرجي. ڇوڪرين لاءِ هي انگ 45.2% تائين پهچي ٿو. ٽيلنٽ مسئلو ناهي.",
      youthUnemploymentSource: "ذريعو: ليبر فورس سروي / گيلپ پاڪستان",
      instantProofTitle: "نظريي بدران ڪم جو فوري ثبوت",
      instantProofDesc: "اسان جي ڪلاس 8 جي شاگردن وٽ گراهڪ آهن، جڏهن ته اڪثر يونيورسٽي گريجوئيٽس وٽ رڳو سي وي هوندي آهي.",
      instantProofSub: "ميٽرڪ تائين هر شاگرد AI آٽوميشن تيار ڪري ٿو، ڪمپني جا اڪائونٽس هلائي ٿو ۽ اسٽيج تي پچ ڪري ٿو.",
      noMarketObsolescenceTitle: "مارڪيٽ ۾ فرسوده نه ٿيڻ جي ضمانت",
      noMarketObsolescenceDesc: "ڇهن سالن جي عمر کان ٻار بورڊ نصاب سان گڏ ڪمپيوٽنگ ۽ بزنس جا ماهر ٿين ٿا. سورهن سالن جي عمر تائين ڏهن سالن جي عملي مهارت پيدا ٿي وڃي ٿي.",
      gorakhTrekTitle: "گورک هل سروائيول ٽريڪ",
      investorPrecedent: "سرمائيدارن جو اعتماد",
      lanePrefix: "راھ",
      directVentureTrack: "سڌو سنئون وينچر ٽريڪ",
      partnerVentureCta: "اسٽارٽ اپ پارٽنرشپ لاءِ رابطو ڪريو",
      positiveSindhDocNote: "مثبت سنڌ پيش رفت: هر ميٽرڪ جو شاگرد پنهنجي ٺاهيل دستاويزي فلم (ڊاڪيومينٽري) ۾ حصو وٺي ٿو.",
      joinTheMovementCta: "تحريڪ جو حصو بڻجو",
      afterHoursEngine: "شام جو ڪميونٽي ادارو",
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
      bindingGovernanceDesc: "اسان مهارت ۽ تياري جو واعدو ڪريون ٿا، نتيجن جي غير حقيقي دعويٰ ناهي. سمورا انگ سرڪاري سروي تان ورتل آهن. اصل دشمن غير مناسب نظام آهي، اسان جا استاد يا والدين ناهن.",
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
      title: "ڊگري ئي منصوبو هو.",
      highlight: "اهو منصوبو هاڻ ناڪام ٿي ويو آهي.",
      subtitle: "اڄ پاڪستان ۾ پڙهائي سان گڏ بيروزگاري به وڌي رهي آهي — ۽ AI نوڪرين کي سليبس کان به تيزي سان بدلائي رهيو آهي. دي رائزنگ سنڌ، سنڌ بورڊ جو مڪمل اسڪول آهي جتي ٻار ايندڙ وقت جون حقيقي صلاحيتون سکندا آهن.",
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
      tagline: "بيروزگاري جا انگ اکر",
      conclusion: "نظام صلاحيت جي کوٽ سبب ناهي ٽٽو، اهو دور جي ضرورتن سان نه هلڻ سبب ناڪام ٿيو آهي.",
      stats: [
        {
          number: "10.9%",
          label: "ڊگري هولڊرز ۾ بيروزگاري",
          subtext: "جڏهن ته اڻ پڙهيلن ۾ صرف 4.7 سيڪڙو آهي",
          source: "ليبر فورس سروي 2024–25"
        },
        {
          number: "3 مان 1",
          label: "گريجوئيٽ بيروزگار (عمر 20-24)",
          subtext: "32.8 سيڪڙو نوجوان ڪيريئر جي شروعات ۾ بيوس آهن",
          source: "گيلپ پاڪستان تجزيو"
        },
        {
          number: "45.2%",
          label: "پڙهيل نياڻين جي بيروزگاري",
          subtext: "عمر 25-29 سال؛ مسئلو قابليت جو ناهي پر نظام جو آهي",
          source: "گيلپ / ايل ايف ايس رڪارڊ"
        },
        {
          number: "760,000+",
          label: "2025 ۾ ملڪ ڇڏي ويا",
          subtext: "ٻاهرئين ملڪ ڪم لاءِ رجسٽرڊ ٿيا ڇاڪاڻ ته هتي رستو نه هو",
          source: "روزاني ڊان، جولاءِ 2026"
        }
      ]
    },
    theTurn: {
      badge: "نئون آغاز",
      title: "تنهنڪري اسان پراڻي نظام جو انتظار ڇڏي اهو اسڪول ٺاهيو جنهن جو مستقبل گهرجائو آهي.",
      description: "مڪمل سنڌ بورڊ اسڪيم — انگريزي، اردو ۽ سنڌي لازما، رياضي، سائنس ۽ مڪمل ميٽرڪ گروپ (~80% وقت بورڊ جي تيارين لاءِ). انهي سان گڏ مستقبل جو اضافو: ڪلاس 1 کان AI، ڪاروبار جو مضمون، ۽ هيرو ٽريڪ اخلاق ۽ همت لاءِ.",
      breakdown: [
        {
          title: "سنڌ بورڊ بنياد",
          desc: "سنڌي، انگريزي، اردو، سائنس، رياضي، اسلاميات. ماضي جا پيپرز ۽ مارڪس جي مڪمل تياري.",
          percent: "~70-80%"
        },
        {
          title: "مستقبل جي ليئر",
          desc: "AI ٽولز، روبوٽڪس، شاگردن جي رجسٽرڊ ڪمپني ۽ حقيقي پروجيڪٽس جو اي-پورٽ فوليو.",
          percent: "~20-30%"
        }
      ]
    },
    fourEngines: {
      badge: "چار بنيادي ٿنڀا",
      title: "هر ٻار جي ترقي جا چار انجڻ",
      subtitle: "هڪ متوازن تربيتي ماحول جيڪو بورڊ جي نتيجن کي محفوظ رکي مستقبل کي فتح ڪري ٿو.",
      engines: [
        {
          id: "school",
          title: "اسڪول",
          role: "نرسري کان ميٽرڪ",
          description: "ٻه گڏيل ليئرز: بورڊ نصاب ۽ فيوچر ٽيڪنالاجي. ڪو به شاگرد پوئتي نه رهندو.",
          highlight: "نرسري کان ميٽرڪ"
        },
        {
          id: "hero",
          title: "هيرو ٽريڪ",
          role: "ڪردار ۽ بهادري",
          description: "تقرير، گرومنگ، سڀاءُ، گورک هلز جا چڙهائي ڪيمپ. همت ٽائيم ٽيبل تي، نه رڳو نوٽيس بورڊ تي.",
          highlight: "هفتي ۾ 2 پيريڊ"
        },
        {
          id: "incubator",
          title: "انڪيوبيٽر",
          role: "حقيقي ڪمپنيون",
          description: "ڪلاس 8 کان 10 جي شاگردن جون باضابطا ڪمپنيون، حقيقي گراهڪ ۽ اين آءِ سي مينٽرز.",
          highlight: "ڪلاس 8 کان 10"
        },
        {
          id: "academy",
          title: "شام جي اڪيڊمي",
          role: "سڄي شهر لاءِ",
          description: "منجهند 2 وڳي اسڪول ٻارن جو آهي، شام 5 وڳي هي شهر جو هوندو آهي. نوجوانن لاءِ 12 هفتن جا ڪورس.",
          highlight: "سيوهڻ لاءِ کليل"
        }
      ]
    },
    whatStudentsDo: {
      badge: "حقيقتن جو ڀيٽ",
      title: "جيڪو اسان جا اسڪول جا ٻار ڪن ٿا، يونيورسٽي جا شاگرد نه ٿا ڪري سگهن.",
      intro: "هي ٻارن بابت ڪو گمنڊ ناهي. هي موجوده تعليمي نظام تي هڪ حقيقي فردِ جرم آهي. عام يونيورسٽي جي شاگرد کي رڳو رٽو هڻڻ سيکاريو ويو، ٺاهڻ ۽ وڪڻڻ نه. اسان جا شاگرد 6 سالن جي عمر کان ڪم شروع ڪن ٿا؛ 16 سالن جي عمر تائين 10 سالن جو حقيقي تجربو وٺي وٺن ٿا.",
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
      closingNote: "اسان يونيورسٽين جي خلاف ناهيون. اسان انهي خلاف آهيون ته سورهن سال ضايع ڪرڻ بعد پتو پوي ته مارڪيٽ کي جيڪو کپندو هو اهو ڪڏهن پڙهايو ئي نه ويو. اسان جا شاگرد اڃا به يونيورسٽي وڃي سگهن ٿا پر اهي اڳ ئي ٺاهيندڙ ۽ اڳواڻ هوندا."
    },
    theModel: {
      badge: "ٻه سطحي نصاب",
      title: "بورڊ جا نتيجا مڪمل محفوظ. مستقبل شامل.",
      openingPromise: "ٻه درجا. هڪ ٽائيم ٽيبل. ڪا به قرباني ناهي.",
      promiseDetail: "هفتي جو تقريباً 70-80% وقت مڪمل سنڌ بورڊ اسڪيم (سنڌي، اردو، انگريزي، رياضي، سائنس، اسلاميات) آهي. باقي 20-30% وقت مستقبل جي فني ليئر آهي. بورڊ اسان جي بنياد آهي؛ پر اها ڪا آخري حد ناهي.",
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
          entrepreneurship: "بزنس ماڊل ڪينواس، سيوهڻ اسٽالن تي مال وڪرو ڪرڻ، باقاعده روزنامچو.",
          milestone: "پائٿون ۽ حقيقي وڪرو"
        },
        {
          grade: "ڪلاس 8",
          computing: "ويب سائيٽ ٺاهڻ، APIs، AI ايجنٽ ورڪ فلوز، 3D ڊيزائننگ ۽ پرنٽنگ.",
          entrepreneurship: "حقيقي رجسٽرڊ اسٽوڊنٽ ڪمپني، پوري ٽرم ۾ گراهڪن کي مال فراهم ڪرڻ.",
          milestone: "رجسٽرڊ ادارو"
        },
        {
          grade: "ڪلاس 9–10",
          computing: "سنڌ بورڊ ڪمپيوٽر سائنس + مقامي خانداني ڪاروبار لاءِ AI آٽوميشن سافٽ ويئر.",
          entrepreneurship: "انڪيوبيٽر سيمسٽر، NIC/ORIC ججز اڳيان باضابطا ڊيمو ڊي پچنگ.",
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
    heroTrack: {
      badge: "اخلاق ۽ شخصيت",
      title: "هيرو ٽريڪ",
      subtitle: "حوصلي ۽ اخلاق جي تربيت اسڪول جي روزاني ٽائيم ٽيبل تي.",
      description: "دنيا جي وڏن ادارن مان سکيل اصولن کي سنڌ جي روايتن سان گڏيو ويو آهي: هر هفتي گفتگو ۽ گرومنگ جا 2 پيريڊ، اسٽيج تي پبلڪ اسپيڪنگ، شهر جي بازارن ۾ وڪري جو چئلينج ۽ گورک هلز جو پهاڙي سفر.",
      features: [
        {
          title: "اسٽيج ۽ خطابت (هفتيوار)",
          desc: "نرسري کان ميٽرڪ تائين لکين ٻڌندڙن سامهون پنهنجو موقف بنا خوف رکڻ جي مشق."
        },
        {
          title: "بازار ۾ وڪري جو مقابلو",
          desc: "سيوهڻ جي بازارن ۾ وڃي ماڻهن سان ملڻ، رد ٿيڻ کي برداشت ڪرڻ ۽ احترام سان پچ پيش ڪرڻ."
        },
        {
          title: "گورک هلز جو مشڪل سفر",
          desc: "پهاڙن تي ٽيمن سان گڏ پنڌ، مشڪل حالتن ۾ فيصلا ڪرڻ ۽ بقا جي جدوجهد."
        },
        {
          title: "نياڻين جي قيادت جا گروپس",
          desc: "سنڌ جي ڌيئرن لاءِ باهمت ليڊرشپ، ٽيڪنالاجي ۽ فيصلي سازي جون خاص تربيتون."
        }
      ],
      heroOath: {
        title: "هيرو جو عهد (ڪلاس 9)",
        text: "”مان سچائي سان تعمير ڪندس. مان حوصلي سان ڳالهائيندس. مان سنڌ جي ڌرتي جي خدمت ڪندس ۽ ڪڏهن به مايوس نه ٿيندس.“"
      }
    },
    theProof: {
      badge: "زندھ ثبوت",
      title: "ثبوت — سيوهڻ کان سلڪون ويلي تائين",
      intro: "اسان سنڌ جي ٻارن کي ڪا ڳالهه مڃرائڻ کان اڳ، پنهنجي باني جي عملي زندگي مان ثبوت آندو آهي. علي مرتضيٰ سولنگي پنهنجو پهريون اسٽارٽ اپ ڪراچي، لاهور يا دبئي ۾ ناهي ٺاهيو؛ هن اهو سيوهڻ ۾ ٺاهيو جتي اڄ هي اسڪول قائم آهي. نسٹ گيپ (NUST GAP) تان کٽي سلڪون ويلي ويو، جتي 30 ملڪن جي باني سان مقابلي بعد دنيا ۾ ٽيون نمبر کٽيائين.",
      investorTitle: "سيوهڻ جو هڪ نوجوان ۽ ايلون مسڪ هاڻي ساڳئي سيڙپڪار جا ڀائيوار آهن.",
      investorDesc: "سلڪون ويلي جو نامور انويسٽر جنهن ٽيسلا، اسپيس ايڪس ۽ پي پال جهڙين 30+ وڏين يونيڪارن ڪمپنين ۾ سيڙپڪاري ڪئي هئي، هن سيوهڻ مان نڪتل اسٽارٽ اپ کي ڏسي به هائو چيو.",
      stats: [
        { number: "ٽيون نمبر / 30", label: "سلڪون ويلي ۾ ملڪن مان پوزيشن" },
        { number: "10+", label: "ملڪن ۾ ڪمپني جي عالمي سروس" },
        { number: "سوين", label: "ملازمن جي عالمي ٽيم" },
        { number: "لکين ڊالر", label: "عالمي ٽيڪنالوجي آمدني" }
      ],
      whyItMatters: {
        title: "جڏهن اسان چئون ٿا ته سيوهڻ مان عالمي ڪمپني ٺهي سگهي ٿي — اها ڪا نعريبازي ناهي، اها اسان جي پنهنجي آتم ڪهاڻي آهي.",
        desc: "دي رائزنگ سنڌ اهو ئي رستو اسڪول طور ٻيهر ٺاهيو آهي: اوزار ٺاهڻ، پچ ڪرڻ، ماڻهن اڳيان همت، ۽ عالمي خواب — جيڪي ڪلاس 1 کان سيکاريا ويندا. هڪ شخص اڪيلو هليو هو؛ ايندڙ نسل استاد، ليب ۽ نقشي سان گڏ هلندو."
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
      subtitle: "اسان ان لاڳاپي تي شدت سان ڪم ڪنداسين جيڪو سسٽم ڪڏهن به نه ٺاهيو: هتان جي صلاحيتن کي عالمي دنيا سان ڳنڍڻ. پرڏيهه وڃڻ جي الوداع طور نه، پر پارٽنرشپ ۽ سرمائي جي پل طور.",
      lanes: [
        {
          laneNumber: "01",
          title: "بنا سرحدن جي گڏيل ڪاروبار ۽ شريڪ باني",
          highlight: "سيوهڻ ۾ باني. سلڪون ويلي ۾ پارٽنر. هڪ ئي ڪمپني.",
          description: "اسان ٻاهرين ملڪ ويٺل ڏاهن ۽ پروفيشنلز کي شاگردن جي ڪمپنين ۾ ڪو-فائونڊر طور ڳنڍيون ٿا. شاگرد زميني سطح تي پراڊڪٽ ٺاهي ٿو، پارٽنر عالمي تجربو ۽ سرمايو آڻي ٿو."
        },
        {
          laneNumber: "02",
          title: "عالمي ايڪو سسٽم ۽ اسٽڊي ٽوئرز",
          highlight: "اسان جا اسٽارٽ اپس پاڪستاني ۽ بين الاقوامي نيٽ ورڪ اندر زنده رهندا.",
          description: "شاگردن جون ڪمپنيون NIC ۽ ٻاهرين ملڪن جي ايڪسيليٽرز سان ڳنڍجن ٿيون. چونڊيل شاگرد سلڪون ويلي ۽ آمريڪا جا دورا ڪري سڌو سيڙپڪارن کي پچ ڪندا."
        },
        {
          laneNumber: "03",
          title: "عالمي رجسٽريشن ۽ پيٽنٽس",
          highlight: "سيوهڻ ۾ پيدائش. سلڪون ويلي ۾ رجسٽريشن. عالمي تحفظ.",
          description: "بهترين شاگردن جا اسٽارٽ اپس آمريڪا (Delaware) ۾ رجسٽرڊ ڪيا ويندا ۽ انهن جون ايجادون پهريان آمريڪا ۽ پوءِ سڄي دنيا ۾ پيٽنٽ ڪرائي محفوظ ڪيون وينديون."
        }
      ],
      closing: "اسان جو وعدو: ڏات سنڌ جي مٽي ۾ رهندي، جڏهن ته ان جون ڪمپنيون، پيٽنٽس ۽ ايجادون سڄي دنيا ۾ ڦهلجنديون. اسان شين کي برآمد ڪنداسين، ماڻهن کي نه."
    },
    theMovement: {
      badge: "سنڌ جي جاڳرتا",
      title: "تحريڪ — سنڌ ٻيهر اڀري رهي آهي",
      inheritance: {
        title: "اسان پٺتي پيل ماڻهو ناهيون جيڪي مقابلي لاءِ ڊوڙي رهيا آهن؛ اسان قديم تعمير ڪندڙ آهيون جيڪي جاڳي پيا آهن.",
        desc: "جڏهن دنيا جو وڏو حصو اڻ گهڙيل جهوپڙين ۾ رهندو هو، سنڌو درياءَ جي پٽن موهن جو دڙو اڏيو — گهٽيون، پڪا گٽر، ماپ جا معياري وٽ: اڄ کان 5،000 سال اڳ واري شاندار انجنيئرنگ. هيءَ سرزمين عظيم شهري تهذيب ۽ صوفياڻي فڪر جو مرڪز هئي. ڪاپيون رٽڻ اسان جي روايت ڪڏهن نه هئي، تعمير ڪرڻ اسان جو وکر هو."
      },
      globalVillage: {
        title: "تاريخ ۾ پهريون ڀيرو، جاگرافي مقدر ناهي رهي.",
        desc: "سيوهڻ جي ڀرپاسي واري ڳوٺ جو ڊيزائنر شام جو لنڊن جي ڪلائنٽ کي ڪم موڪلي سگهي ٿو. قلندر جي شهر ۾ ٺهيل ايپ ڪلڪ ڪندي سڄي دنيا ۾ پهچي ٿي. انٽرنيٽ ۽ AI عالمي ٽولز کي هر ماڻهو جي هٿن ۾ پهچائي ڇڏيو آهي. ڳوٺ هاڻ عالمي ڳوٺ ٿي ويو آهي. گهٽتائي موقعن جي ناهي پر تياري جي آهي. اهو اسان جي اسڪول جو ڪم آهي."
      },
      buildHere: {
        title: "اسان جو خواب رڳو ويزا وٺڻ ناهي.",
        desc: "اسان پرڏيهه ۾ پورهيو ڪندڙ هر سنڌي ڀاءُ ۽ پيءُ جو احترام ڪريون ٿا جنهن جي محنت اسان کي پاليو. پر قرباني هڪ مجبوري بدران هڪ پسند هئڻ گهرجي. پراڻو سودو — سڀ ڪجهه ڇڏي ٻاهر معمولي ڪم ڪرڻ — هاڻ واحد رستو ناهي. نئون رستو: پنهنجي ماڻهن وچ ۾ ويهي دنيا لاءِ غيرمعمولي شيون تعمير ڪريو."
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
      invitation: "تاريخ جي هر جاڳرتا هڪ ئي رستي کان شروع ٿي: ڪنهن هڪ اسڪول تعمير ڪيو. اها شروعات سيوهڻ کان ٿي رهي آهي. هڪ والدين، شاگرد، استاد يا ڀائيوار طور شامل ٿيو."
    },
    sehwanCampus: {
      badge: "سيوهڻ شريف، سنڌ",
      title: "سيوهڻ — پهريان هڪ شهر، مڪمل ارادي سان",
      whySehwan: "قلندر جو شهر — صوفي راڳ، روحاني تاريخ ۽ اسان جي باني جو پنهنجو ميدان. اسان شروعات اتان ڪريون ٿا جتي حقيقي ثبوت اڳ ۾ ئي موجود آهي. هي ماڊل اڳتي هلي پوري سنڌ ۾ ڦهلائبو.",
      cityProjects: "شاگردن جو ڪم سيوهڻ سان جڙيل آهي: درگاهه جا آڊيو گائيڊ QR ڪوڊ، زائرين جي انگ اکرن جا سينسرز، هٿ جي هنرن جي ڊجيٽائيزيشن ۽ گورک ٽريڪس. سيوهڻ جو شهر اسان جو ڪلاس روم آهي.",
      campusSpine: [
        "جديد AI ۽ ڪمپيوٽنگ ورڪ اسٽيشن ليب",
        "3D پرنٽرز ۽ هارڊويئر ميڪر اسپيس",
        "ڊجيٽل اسٽوڊيو، پوڊ ڪاسٽ ۽ وڊيو ايڊيٽنگ روم",
        "ڪمپني انڪيوبيٽر پچ روم",
        "خطابت ۽ تقريرن جو وڏو آڊيٽوريم",
        "سائنس ۽ عملي تجربن جون ليبارٽريون"
      ],
      roadAhead: "اڄ نرسري کان ميٽرڪ. سڀاڻي دي رائزنگ سنڌ ڪالج — ۽ پوءِ سنڌ جي پنهنجي هاءِ ٽيڪ يونيورسٽي جيڪا AI ۽ تخليق تي ٻڌل هوندي.",
      eveningAcademy: {
        title: "شام جي ڪميونٽي اڪيڊمي — اعتماد جو انجڻ",
        opening: "منجهند 2 وڳي اسڪول ٻارن جو هوندو آهي. شام جو 5 وڳي هي سڄي شهر جو بڻجي وڃي ٿو. اهي ئي ليبيون ۽ استاد مقامي نوجوانن ۽ وڏن لاءِ 12 هفتن جا فني ڪورس هلائين ٿا. ڇو ته اهو اسڪول نامڪمل آهي جيڪو رڳو پنهنجي ئي فيس ڏيندڙ ٻارن کي اڳتي آڻي.",
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
        desc: "اهي ئي ليبز يونيورسٽي جي شاگردن ۽ پيشه ور نوجوانن لاءِ درخواست تي کليل آهن: اسٽارٽ اپس، مينٽرز، AI اوزار ۽ ڊيمو ڊي.",
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
      title: "چار دروازا. هڪ وڏي تحريڪ.",
      doors: [
        {
          id: "parents",
          audience: "والدين لاءِ",
          title: "اسان جي رڳو ڳالهين تي ڀروسو نه ڪريو. ڪيمپس اچو.",
          description: "اسان جون ليبز ڏسو. AI ۽ فيوچر ڪلاس ۾ پاڻ ويهي ڏسو. استادن سان ملو. بورڊ جي نتيجن، اسڪالرشپ ۽ نظم و ضبط بابت سخت ترين سوال پڇو.",
          ctaText: "ڪيمپس جو دورو بُڪ ڪريو",
          secondaryCta: "واٽس ائپ تي ڳالهايو"
        },
        {
          id: "students",
          audience: "شاگردن لاءِ",
          title: "ڇنڇر تي اچو، پنهنجي هٿ سان ڪجهه ٺاهيو.",
          description: "اوپن ورڪشاپس جتي توهان AI ماڊل ٽرين ڪندا، 3D پرنٽ ڪندا، يا پنهنجو بزنس آئيڊيا پچ ڪندا. ڪجهه پنهنجو ٺاهي گهر کڻي وڃو.",
          ctaText: "بلڊ ڊي لاءِ رجسٽر ٿيو"
        },
        {
          id: "professionals",
          audience: "يونيورسٽي شاگردن ۽ ماهرن لاءِ",
          title: "يونيورسٽي رڳو ٿيوري سيکاري، هيءَ ليب ٺاهڻ جي جاءِ آهي.",
          description: "انوويشن ليب ۾ بينچ لاءِ اپلاءِ ڪريو: AI ٽولز، مينٽرشپ ۽ انويسٽر ڊيمو ڊي. پنهنجي خيال کي ڪمپني بنايو.",
          ctaText: "ليب بينچ لاءِ اپلاءِ ڪريو"
        },
        {
          id: "teachers",
          audience: "استادن لاءِ",
          title: "توهان صرف نوٽس لکرائڻ لاءِ استاد نه بڻيا هئا.",
          description: "سائنسي ليبن ۽ نئين نصاب سان پڙهايو. اسان هر استاد کي مڪمل ٽريننگ ڏيون ٿا. بهترين پگهار ۽ عزت.",
          ctaText: "استاد طور شامل ٿيو"
        }
      ],
      faqs: [
        {
          question: "ڇا فيوچر ليئر سبب منهنجي ٻار جو ميٽرڪ نتيجو متاثر ٿيندو؟",
          answer: "بلڪل نه. سنڌ بورڊ جا ڪلاڪ مڪمل محفوظ آهن (هفتي جو 70 کان 80 سيڪڙو وقت)، جنهن ۾ ماضي جا پيپرز ۽ مارڪس جي مڪمل تياري شامل آهي. بورڊ نصاب اسان جو بنياد آهي."
        },
        {
          question: "ڇا هي اسلامي قدرن ۽ مقامي روايتن مطابق آهي؟",
          answer: "ها بلڪل. مڪمل سنڌ بورڊ اسلاميات نصاب موجود آهي؛ هيرو ٽريڪ سچائي ۽ اخلاق سيکاري ٿو؛ نياڻين جا ڪلاس نياڻيون ماهر سنڀالين ٿيون؛ پهاڙي سفر والدين جي لکت واري رضامندي سان ٿين ٿا."
        },
        {
          question: "جيڪڏهن اسان مڪمل فيس ڀري نه سگهون ته؟",
          answer: "پئسي جي اڻاٺ سبب سنڌ جي ڪنهن به لائق ٻار کي علم کان محروم نه رکيو ويندو. اسان مستحق ۽ ذهين ٻارن لاءِ شفاف اسڪالرشپ رکي آهي. شام جا ڪورس به رعايتي يا مفت آهن."
        },
        {
          question: "والدين ٻار جي ڪارڪردگي ڪيئن چيڪ ڪندا؟",
          answer: "والدين جي موبائل ڊيش بورڊ ذريعي، جيڪو سنڌي ۽ اردو ۾ موجود آهي، جتي مهيني جي رپورٽ ۽ پروجيڪٽس جا تفصيل نظر ايندا."
        }
      ]
    },
    footer: {
      slogan: "تعمير ڪندڙ، نه رڳو ڊگري وٺندڙ.",
      ctaBand: "ايندڙ داخلا ڪلاسن جي گنجائش سان محدود آهي، اسان جي حوصلي سان نه. اڄ ئي دورو بڪ ڪريو.",
      ctaButton: "ڪيمپس دورو بُڪ ڪريو",
      rights: "دي رائزنگ سنڌ. سڀ حق محفوظ آهن. سيوهڻ شريف، سنڌ، پاڪستان.",
      governanceNote: "غير سياسي. سنڌي اوليت. موهن جو دڙو جي 5,000 سالن جي تهذيب ۽ ايندڙ 20 سالن جي ٽيڪنالوجي تي ٻڌل."
    }
  },
  ur: {
    meta: {
      title: "دی رائزنگ سندھ | وہ اسکول جو یونیورسٹیاں نہ بنا سکیں",
      description: "پاکستان کا پہلا مستقبل کا اسکول سہون میں — جہاں سندھ کے بچے بورڈ کا نصاب مکمل کرتے ہیں، AI سے خودکار ٹولز بناتے ہیں اور میٹرک سے پہلے حقیقی کمپنیاں چلاتے ہیں۔",
      slogan: "تعمیر کار، نہ کہ محض ڈگری یافتہ۔",
      positioning: "پاکستان کا پہلا مستقبل کا اسکول — جہاں سندھ کے بچے سندھ بورڈ کا مکمل نصاب پڑھتے ہیں، AI سے بناتے ہیں، میٹرک سے پہلے حقیقی کمپنیاں چلاتے ہیں اور کاغذ کے ٹکڑوں کے بجائے ٹھوس ثبوت کے ساتھ فارغ التحصیل ہوتے ہیں۔"
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
      theHeroTrackNav: "دی ہیرو ٹریک",
      theHeroTrackNavSub: "تقریر، گرومنگ اور گورکھ ہل ٹریکس",
      studentIncubator: "طلباء کا انکیوبیٹر",
      studentIncubatorSub: "کلاس 8 تک رجسٹرڈ کمپنیاں",
      eveningAcademyNav: "شام کی اکیڈمی",
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
      admissionsDeskSub: "پورے سندھ کے والدین کیلئے براہِ راست واٹس ایپ رابطہ۔ داخلوں، اسکالرشپ اور کیمپس وزٹ کی معلومات حاصل کریں۔",
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
      registrationReceivedDesc: "ہماری سہون کیمپس ایڈمیشن ٹیم جلد آپ سے واٹس ایپ پر رابطہ کرے گی۔",
      validationName: "براہ کرم اپنا پورا نام درج کریں۔",
      validationPhone: "براہ کرم درست فون یا واٹس ایپ نمبر درج کریں (کم از کم 10 ہندسے)۔",
      nextSeatsLimited: "اگلا داخلہ کلاس رومز کی گنجائش کے ساتھ مشروط ہے، حوصلے کے ساتھ نہیں۔",
      elevation5688: "5,688 فٹ بلندی",
      makersInnovationHub: "میکرز اور انوویشن ہب",
      sehwanSharifLabel: "سہون شریف",
      whySehwanTitle: "سہون کیوں",
      cityProjectsTitle: "شہر کے پروجیکٹس: شہر ہی کلاس روم ہے",
      campusSpineTitle: "کیمپس کا نقشہ اور آرکیٹیکچرل بلیو پرنٹ",
      partnersTitle: "شریک بانی ایکو سسٹم پارٹنرز",
      printMap: "مکمل نرسری تا میٹرک نقشہ پرنٹ / ڈاؤن لوڈ کریں",
      seeFutureLayerLive: "کیمپس پر فیوچر لیئر کا پیریڈ لائیو دیکھیں",
      systemComparisonMatrix: "نظام کا موازنہ میٹرکس",
      systemComparisonSub: "بات نظام کی ہے، کسی فرد کی نہیں",
      howWeTeachTitle: "ہم کیسے پڑھاتے ہیں اور والدین کیسے دیکھتے ہیں",
      howWeTeachSub: "پانچ ادارہ جاتی ستون جو شفافیت اور ذمہ داری یقینی بناتے ہیں",
      exploreTitle: "دریافت کریں",
      programsTitle: "پروگرامز",
      valuesTitle: "اقدار و رابطہ",
      craftedWithPride: "سندھ میں فخر کے ساتھ تیار کردہ",
      forSindhFuture: "کل کے معماروں کیلئے",
      nurseryMatricBise: "نرسری تا میٹرک BISE اسکیم",
      heroTrackGorakhTreks: "دی ہیرو ٹریک اور گورکھ ٹریکس",
      eveningCommunityAcademy: "شام کی کمیونٹی اکیڈمی",
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
      youthUnemploymentDesc: "20 سے 24 سال کی عمر کے ہر تین میں سے ایک پاکستانی گریجویٹ بیروزگار ہے — ٹھیک اس وقت جب کیریئر کا آغاز ہونا چاہیے۔ خواتین کیلئے یہ شرح 45.2% ہے۔ ٹیلنٹ کی کمی نہیں۔",
      youthUnemploymentSource: "ماخذ: لیبر فورس سروے / گیلپ پاکستان",
      instantProofTitle: "نظریات کے بجائے کام کا فوری ثبوت",
      instantProofDesc: "ہمارے کلاس 8 کے طلباء کے پاس باقاعدہ گاہک ہیں۔ اکثر یونیورسٹی طلباء کے پاس محض سی وی ہوتی ہے۔",
      instantProofSub: "میٹرک تک ہر طالب علم AI آٹومیشن تیار کر چکا ہوتا ہے، کمپنی اکاؤنٹس چلاتا ہے اور اسٹیج پر پچ کرتا ہے۔",
      noMarketObsolescenceTitle: "مارکیٹ میں متروک نہ ہونے کی ضمانت",
      noMarketObsolescenceDesc: "چھ سال کی عمر سے بچے بورڈ نصاب کے ساتھ کمپیوٹنگ اور انٹرپرینیورشپ میں مہارت پاتے ہیں۔ سولہ سال کی عمر تک دس سال کا عملی فرق پیدا ہو جاتا ہے۔",
      gorakhTrekTitle: "گورکھ ہل بقاء کا ٹریک",
      investorPrecedent: "سرمایہ کاروں کا اعتماد",
      lanePrefix: "راہ",
      directVentureTrack: "براہ راست وینچر ٹریک",
      partnerVentureCta: "اسٹارٹ اپ پارٹنرشپ کیلئے رابطہ کریں",
      positiveSindhDocNote: "مثبت سندھ پہلو: ہر میٹرک کا طالب علم خود تیار کردہ دستاویزی فلم میں حصہ لیتا ہے۔",
      joinTheMovementCta: "تحریک کا حصہ بنیں",
      afterHoursEngine: "شام کا کمیونٹی ادارہ",
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
      bindingGovernanceDesc: "ہم مکمل تیاری اور صلاحیت سکھانے کا وعدہ کرتے ہیں، غیر حقیقی نتائج کے دعوے نہیں۔ تمام اعداد و شمار سرکاری سروے سے تصدیق شدہ ہیں۔ اصل رکاوٹ فرسودہ تعلیمی نظام ہے، ہمارے اساتذہ یا والدین نہیں۔",
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
      title: "ڈگری ہی منصوبہ تھا۔",
      highlight: "وہ منصوبہ اب ناکام ہو چکا ہے۔",
      subtitle: "آج پاکستان میں تعلیم کے ساتھ بے روزگاری بڑھ رہی ہے — اور AI نصاب سے کہیں تیز رفتار سے نوکریوں کا نقشہ بدل رہا ہے۔ دی رائزنگ سندھ، سندھ بورڈ کا مکمل اسکول ہے جہاں بچے وہ سب سیکھتے ہیں جو درحقیقت آگے آنے والا ہے۔",
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
      tagline: "بے روزگاری کا المیہ",
      conclusion: "نظام صلاحیت کی کمی سے نہیں ٹوٹا، یہ زمانے کی ضرورت سے لا تعلقی کی وجہ سے ناکام ہوا ہے۔",
      stats: [
        {
          number: "10.9%",
          label: "ڈگری ہولڈرز میں بے روزگاری",
          subtext: "جبکہ بغیر اسکول جانے والوں میں صرف 4.7 فیصد ہے",
          source: "لیبر فورس سروے 2024–25"
        },
        {
          number: "3 میں سے 1",
          label: "گریجویٹ بے روزگار (20-24 سال)",
          subtext: "32.8 فیصد نوجوان کیریئر کے آغاز پر بے یار و مددگار ہیں",
          source: "گیلپ پاکستان تجزیہ"
        },
        {
          number: "45.2%",
          label: "خواتین گریجویٹس کی بے روزگاری",
          subtext: "عمر 25-29 سال؛ مسئلہ قابلیت کا نہیں، نظام کا ہے",
          source: "گیلپ و لیبر فورس سروے"
        },
        {
          number: "760,000+",
          label: "2025 میں ملک چھوڑ گئے",
          subtext: "بیرونِ ملک کام کے لیے رجسٹر ہوئے کیونکہ اپنے وطن میں راستہ نہیں تھا",
          source: "روزنامہ ڈان، جولائی 2026"
        }
      ]
    },
    theTurn: {
      badge: "نئی راہ",
      title: "چنانچہ ہم نے فرسودہ نظام کے سدھرنے کا انتظار چھوڑ کر وہ اسکول بنایا جس کا مستقبل متقاضی ہے۔",
      description: "مکمل سندھ بورڈ اسکیم — انگریزی، اردو اور سندھی، ریاضی، سائنس اور مکمل میٹرک گروپ (~80% وقت بورڈ کی تیاریوں پر)۔ اس پر مستقبل کی تہہ: کلاس 1 سے AI، انٹرپرینیورشپ بطور مضمون، اور ہیرو ٹریک کردار و ہمت کے لیے۔",
      breakdown: [
        {
          title: "سندھ بورڈ نصاب",
          desc: "ریاضی، سائنس، اسلامیات، مطالعہ پاکستان، انگریزی، اردو، سندھی۔ امتحانی مشقیں اور تیاری۔",
          percent: "~70-80%"
        },
        {
          title: "مستقبل کی تہہ (Future Layer)",
          desc: "پرامپٹ انجینئرنگ، روبوٹکس، طلباء کی رجسٹرڈ کمپنیاں اور ٹھوس ای-پورٹ فولیو۔",
          percent: "~20-30%"
        }
      ]
    },
    fourEngines: {
      badge: "تعلیمی ستون",
      title: "ہر طالب علم کو پروان چڑھانے والے چار انجن",
      subtitle: "ایک جامع ماحول جو بورڈ کے نتائج کو بھی محفوظ رکھے اور اگلے بیس سالوں کی تیاری بھی کرائے۔",
      engines: [
        {
          id: "school",
          title: "اسکول",
          role: "نرسری تا میٹرک",
          description: "دو متوازی تہیں: بورڈ نصاب + مستقبل کی ٹیکنالوجی۔ کوئی بچہ پیچھے نہیں رہے گا۔",
          highlight: "نرسری تا میٹرک"
        },
        {
          id: "hero",
          title: "ہیرو ٹریک",
          role: "کردار اور جرات",
          description: "خطابت، گرومنگ، سلیقہ، گورکھ ہلز کے کیمپس۔ ہمت باقاعدہ ٹائم ٹیبل کا حصہ ہے۔",
          highlight: "ہفتے میں 2 پیریڈ"
        },
        {
          id: "incubator",
          title: "انکیوبیٹر",
          role: "حقیقی کمپنیاں",
          description: "کلاس 8 تا 10 کے طلباء کی رجسٹرڈ کمپنیاں، حقیقی کسٹمرز اور NIC مینٹرز۔",
          highlight: "کلاس 8 تا 10"
        },
        {
          id: "academy",
          title: "شام کی اکیڈمی",
          role: "عوامی خدمت",
          description: "دوپہر 2 بجے اسکول طلباء کا ہے، شام 5 بجے شہر کا ہو جاتا ہے۔ 12 ہفتوں کے ہنر آموز کورسز۔",
          highlight: "سہون کیلئے کھلا"
        }
      ]
    },
    whatStudentsDo: {
      badge: "واضح موازنہ",
      title: "جو ہمارے اسکول کے بچے کرتے ہیں، یونیورسٹی گریجویٹس نہیں کر پاتے۔",
      intro: "یہ بچوں پر فخر جتانا نہیں ہے۔ یہ ایک ناکام نظام پر فردِ جرم ہے۔ عام گریجویٹ کو رٹا لگانا سکھایا گیا، کچھ نیا بنانا یا بیچنا نہیں۔ ہمارے طلباء 6 سال کی عمر سے تخلیق شروع کرتے ہیں۔ 16 سال کی عمر تک ان کے پاس 10 سال کا عملی تجربہ ہوتا ہے۔",
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
      closingNote: "ہم یونیورسٹیوں کے خلاف نہیں ہیں۔ ہم سولہ سال انتظار کر کے یہ جاننے کے خلاف ہیں کہ مارکیٹ کو جو درکار تھا وہ کبھی پڑھایا ہی نہیں گیا۔ ہمارے طلباء بدستور یونیورسٹی کا انتخاب کر سکتے ہیں لیکن وہ ایک پروڈیوسر اور لیڈر بن کر داخل ہوں گے۔ ڈگری دروازہ کھول سکتی ہے، لیکن پورٹ فولیو اپنا دروازہ خود بناتا ہے۔"
    },
    theModel: {
      badge: "دو تہوں پر مشتمل نصاب",
      title: "بورڈ کا رزلٹ محفوظ، مستقبل کی شمولیت۔",
      openingPromise: "دو تہیں، ایک ٹائم ٹیبل۔ کوئی سمجھوتہ نہیں۔",
      promiseDetail: "ہفتے کا تقریباً 70-80 فیصد وقت مکمل سندھ بورڈ نصاب ہے (انگریزی، اردو، سندھی، ریاضی، سائنس، اسلامیات، مطالعہ پاکستان)۔ باقی 20-30 فیصد وقت مستقبل کی ٹیکنالوجی کیلئے ہے۔ بورڈ ہماری بنیاد ہے؛ یہ کوئی آخری حد نہیں۔",
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
          entrepreneurship: "بزنس ماڈل کینوس، شہر کے بازاروں میں تیار کردہ اشیاء کی فروخت۔",
          milestone: "پائتھون اور مارکیٹ سیلز"
        },
        {
          grade: "کلاس 8",
          computing: "ویب ڈویلپمنٹ، APIs، خودکار AI ایجنٹ ورک فلوز، تھری ڈی ڈیزائننگ۔",
          entrepreneurship: "باقاعدہ رجسٹرڈ طالب علم کمپنی، پوری ٹرم صارفین کو پروڈکٹ کی فراہمی۔",
          milestone: "قانونی کمپنی کا انتظام"
        },
        {
          grade: "کلاس 9 تا 10",
          computing: "سندھ بورڈ کمپیوٹر سائنس + خاندانی کاروبار کیلئے تیار کردہ AI آٹومیشن۔",
          entrepreneurship: "کیمپس انکیوبیٹر سمسٹر؛ NIC اور ORIC مہمانوں کے روبرو فائنل پچ۔",
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
    heroTrack: {
      badge: "کردار اور حوصلہ",
      title: "دی ہیرو ٹریک",
      subtitle: "حوصلہ، گفتگو اور خود اعتمادی اسکول کے ٹائم ٹیبل پر۔",
      description: "دنیا کے بہترین مربی اصولوں کی روشنی میں سندھ کیلئے تشکیل دیا گیا پروگرام: ہفتے میں دو باقاعدہ پیریڈ گرومنگ اور پیشکش کیلئے، نرسری سے دسویں تک اسٹیج پر پبلک اسپیکنگ، بازاروں میں اجنبیوں سے ڈیلنگ اور گورکھ ہلز کی مہم جوئی۔",
      features: [
        {
          title: "اسٹیج اور تقریر (ہفتہ وار)",
          desc: "نرسری کے دائرے سے لے کر میٹرک میں روشنیوں تلے کلیدی خطابات تک تربیت۔"
        },
        {
          title: "بازار میں اجنبیوں کو فروخت کا چیلنج",
          desc: "سہون کے بازاروں میں لوگوں کے سامنے بات کرنا، نفی کو مسکرا کر سہنا اور احترام سے بات منوانا۔"
        },
        {
          title: "گورکھ ہلز سروائیول کیمپس",
          desc: "بلند پہاڑوں پر ٹیم کے ساتھ مشقت، ہنگامی صورتحال سے نمٹنا اور مستقل مزاجی۔"
        },
        {
          title: "طالبات کا لیڈرشپ گروپ",
          desc: "سندھ کی بیٹیوں کیلئے مخصوص باہمت رہنمائی، ٹیکنالوجی اور خود اعتمادی کی تربیت۔"
        }
      ],
      heroOath: {
        title: "ہیرو کا حلف (کلاس 9)",
        text: "”میں دیانتداری سے تعمیر کروں گا۔ میں جرات سے بات کروں گا۔ میں سندھ کی مٹی کی خدمت کروں گا اور کبھی بے بسی کے آگے ہتھیار نہیں ڈالوں گا۔“"
      }
    },
    theProof: {
      badge: "زندہ نظیر",
      title: "ثبوت — سہون سے سلیکان ویلی تک",
      intro: "ہم نے سندھ کے بچوں سے یقین کا مطالبہ کرنے سے پہلے، اپنے بانی کے عملی سفر سے ثابت کیا ہے۔ علی مرتضیٰ سولنگی نے اپنا پہلا اسٹارٹ اپ کراچی، لاہور یا دبئی میں نہیں بنایا، بلکہ سہون میں بنایا جہاں آج یہ اسکول قائم ہے۔ NUST GAP پروگرام جیت کر سلیکان ویلی پہنچے، جہاں 30 ممالک کے بانیوں کے مقابلے میں تیسری پوزیشن حاصل کی۔",
      investorTitle: "سہون کا ایک نوجوان اور ایلون مسک اب ایک ہی سرمایہ کار کے شراکت دار ہیں۔",
      investorDesc: "سلیکان ویلی کا وہی افسانوی سرمایہ کار جس نے ٹیسلا، پے پال، اسپیس ایکس اور یاہو جیسی 30 سے زائد یونیکارن کمپنیوں پر سرمایہ لگایا، اس نے سہون میں جنم لینے والے اسٹارٹ اپ کو دیکھا — اور قبول کیا۔",
      stats: [
        { number: "3rd / 30", label: "سلیکان ویلی میں ممالک کے درمیان پوزیشن" },
        { number: "10+", label: "ممالک میں عالمی خدمات کی فراہمی" },
        { number: "سینکڑوں", label: "ہائی ٹیک ملازمین کی ٹیم" },
        { number: "لاکھوں ڈالر", label: "ٹیکنالوجی سے حاصل کردہ زرمبادلہ" }
      ],
      whyItMatters: {
        title: "جب ہم کہتے ہیں کہ سہون سے عالمی کمپنی بن سکتی ہے — تو یہ کوئی نعرہ نہیں، یہ ہماری اپنی آپ بیتی ہے۔",
        desc: "دی رائزنگ سندھ وہی راستہ ہے جسے اسکول کے نصاب میں ڈھال دیا گیا ہے: تخلیق، پچنگ، اجنبیوں کے سامنے حوصلہ اور عالمی عزائم — جو کلاس 1 سے سکھائے جائیں گے۔ ایک بانی اکیلا چلا تھا؛ اگلی نسل استاد، لیب اور نقشے کے ساتھ چلے گی۔"
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
      subtitle: "ہم اس رابطے پر بھرپور کام کریں گے جو نظام نے کبھی نہیں بنایا: مقامی صلاحیت کو عالمی دھارے سے جوڑنا۔ ملک چھوڑنے کے لیے نہیں، بلکہ شراکت داری، سرمائے اور شناخت کے دو طرفہ پل کے طور پر۔",
      lanes: [
        {
          laneNumber: "01",
          title: "بغیر سرحدوں کے مشترکہ منصوبے اور شریک بانی",
          highlight: "سہون میں بانی۔ سلیکان ویلی میں شریک۔ ایک ہی کمپنی۔",
          description: "ہم طلباء کے منصوبوں کو سمندر پار پاکستانیوں اور عالمی ماہرین سے جوڑتے ہیں جو کو-فائونڈر کے طور پر شامل ہوتے ہیں۔ طالب علم بنیاد بناتا ہے اور ساتھی سرمایہ اور عالمی نیٹ ورک لاتا ہے۔"
        },
        {
          laneNumber: "02",
          title: "عالمی ایکو سسٹم اور تربیتی دورے",
          highlight: "ہمارے اسٹارٹ اپس پاکستان اور دنیا کے معروف نیٹ ورکس کا حصہ ہوں گے۔",
          description: "قومی اور بین الاقوامی ایکسیلیٹرز سے براہ راست رابطہ۔ منتخب نوجوان سلیکان ویلی اور ترقی یافتہ مارکیٹوں کا دورہ کر کے فنڈ ریزنگ اور معاہدے کریں گے۔"
        },
        {
          laneNumber: "03",
          title: "عالمی رجسٹریشن اور پیٹنٹ پروٹیکشن",
          highlight: "پیدائش سہون میں۔ رجسٹریشن سلیکان ویلی میں۔ تحفظ دنیا بھر میں۔",
          description: "طلباء کے اسٹارٹ اپس کو امریکہ میں قانونی طور پر رجسٹر کرایا جائے گا اور ان کی ایجادات کو امریکہ اور دنیا بھر میں پیٹنٹ کر کے محفوظ بنایا جائے گا۔"
        }
      ],
      closing: "ہمارا وعدہ: ٹیلنٹ سندھ کی مٹی میں رہے گا، جبکہ کمپنیاں، پیٹنٹس اور آمدنی دنیا بھر سے آئے گی۔ ہم اشیاء برآمد کریں گے، اپنے لوگ نہیں۔"
    },
    theMovement: {
      badge: "سندھ کی نشاۃ ثانیہ",
      title: "تحریک — سندھ کا نیا عروج",
      inheritance: {
        title: "ہم کوئی پسماندہ لوگ نہیں جو دوڑ میں پیچھے رہ گئے؛ ہم تو ایک قدیم معمار ہیں جو دوبارہ بیدار ہو رہے ہیں۔",
        desc: "جب دنیا کچے جھونپڑوں میں بستی تھی، وادئ سندھ کے بیٹوں نے موہن جو دڑو کی منظم گلیاں، نالیاں اور پیمانے بنائے — 5,000 سال قبل شاندار سول انجینئرنگ۔ یہ دھرتی عظیم شہری تہذیب اور صوفیانہ فکر کا گہوارہ تھی۔ فوٹو کاپیاں رٹنا ہمارا ورثہ کبھی نہیں تھا، تخلیق و تعمیر ہمارا شیوہ تھا۔"
      },
      globalVillage: {
        title: "تاریخ میں پہلی بار، جغرافیہ انسان کا مقدر نہیں رہا۔",
        desc: "سہون کے قریبی گائوں کا ڈیزائنر شام کو لندن کے کلائنٹ کا کام مکمل کر سکتا ہے۔ قلندر کے شہر میں بنی ایپ لانچ ہوتے ہی دنیا بھر میں پہنچتی ہے۔ انٹرنیٹ اور AI نے دنیا کے بہترین اوزار ہر شخص کی پہنچ میں لا دیے ہیں۔ اب گاؤں بھی مقابلہ کر سکتا ہے۔ کمی صرف تیاری کی ہے اور یہی اسکول کا کام ہے۔"
      },
      buildHere: {
        title: "ہمارا مقصد صرف ویزا حاصل کرنا نہیں۔",
        desc: "ہم دیارِ غیر میں محنت کرنے والے ہر والد اور بھائی کی قربانی کو سلام کرتے ہیں۔ لیکن قربانی ایک مجبوری نہیں، ایک پسند ہونی چاہیے۔ پرانا سودا — سب کچھ چھوڑ کر پردیس میں معمولی کام — اب واحد راستہ نہیں۔ نیا راستہ: اپنے لوگوں میں رہ کر دنیا کیلئے غیر معمولی کام کریں۔"
      },
      tenYearPicture: {
        title: "دس سالہ خاکہ (سندھ کا نیا روپ)",
        desc: "ماضی کی یادیں نہیں، بلکہ جدید وسائل سے حقیقی نشاۃ ثانیہ اور اپنا نیا ٹیک ایکو سسٹم۔",
        points: [
          "سہون سے رجسٹرڈ اسٹارٹ اپس زراعت، پانی اور مقامی چیلنجز حل کر رہے ہوں گے۔",
          "طالبات کی روبوٹکس ٹیمیں بین الاقوامی ٹورنامنٹس میں اعزازات جیت رہی ہوں گی۔",
          "سلیکان ویلی کے سرمایہ کار سہون کی کمپنیوں کے حصہ دار ہوں گے۔",
          "سہون سے امریکہ میں نئی ایجادات کے باقاعدہ پیٹنٹس درج ہوں گے۔",
          "نوجوان سندھی، اردو، انگریزی اور AI پر مکمل عبور رکھتے ہوں گے۔",
          "شام کی اکیڈمی پورے شہر کو روشن کرے گی؛ اس کے بعد کالج اور پھر ایک شاندار ہائی ٹیک یونیورسٹی بنے گی۔"
        ]
      },
      invitation: "تاریخ کی ہر نشاۃ ثانیہ اسی طرح شروع ہوئی: کسی نے ایک اسکول بنایا۔ اس کا آغاز سہون سے ہو رہا ہے۔ بطور والدین، طالب علم، استاد یا شراکت دار ہمارے ساتھ جڑیں۔"
    },
    sehwanCampus: {
      badge: "سہون شریف، سندھ",
      title: "سہون — پہلے ایک شہر، پورے ارادے کے ساتھ",
      whySehwan: "قلندر کا شہر — روحانی روایت، موسیقی اور ہمارے بانی کی اپنی آزمائش گاہ۔ ہم وہیں سے شروع کر رہے ہیں جہاں عملی ثبوت پہلے سے موجود ہے۔ سہون کا یہ ماڈل پوری سندھ میں دہرایا جائے گا۔",
      cityProjects: "طلباء کا کام سہون کی ضرورتوں سے جڑا ہے: مزار کے آڈیو گائیڈ QR کوڈز، زائرین کے بہاؤ کے سینسرز، روایتی دستکاریوں کی ڈیجیٹائزیشن اور گورکھ ہلز کی مشقیں۔ سہون کا شہر ہمارا کلاس روم ہے۔",
      campusSpine: [
        "جدید کمپیوٹنگ اور AI ورک اسٹیشن لیب",
        "تھری ڈی پرنٹرز اور ہارڈویئر میکرز اسپیس",
        "ڈیجیٹل میڈیا، پوڈکاسٹ اور ویڈیو اسٹوڈیو",
        "اسٹارٹ اپ انکیوبیٹر پچ روم",
        "خطابت اور کانفرنسز کا بڑا آڈیٹوریم",
        "سائنس اور عملی تجربات کی لیبارٹریز"
      ],
      roadAhead: "آج نرسری تا میٹرک۔ کل دی رائزنگ سندھ کالج — اور پھر ایک خود مختار ماڈرن یونیورسٹی جو AI فرسٹ اور بلڈر فرسٹ بنیادوں پر استوار ہوگی۔",
      eveningAcademy: {
        title: "شام کی کمیونٹی اکیڈمی — اعتماد کا ستون",
        opening: "دوپہر 2 بجے اسکول ہمارے طلباء کا ہوتا ہے۔ شام 5 بجے یہ پورے شہر کا ہو جاتا ہے۔ وہی لیبز اور اساتذہ نوجوانوں اور شہریوں کیلئے 12 ہفتوں کے ہنر آموز کورسز پیش کرتے ہیں۔",
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
        desc: "وہی انکیوبیٹر اور لیب یونیورسٹی کے طلباء اور پیشہ ور افراد کیلئے بھی کھلا ہے: ایک مخصوص بینچ، تجربہ کار مینٹرز، AI ٹولز اور ڈیمو ڈے۔",
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
      title: "چار دروازے۔ ایک ہی تحریک۔",
      doors: [
        {
          id: "parents",
          audience: "والدین کیلئے",
          title: "ہماری صرف باتوں پر نہ جائیں۔ خود آ کر دیکھیں۔",
          description: "لیبز کا دورہ کریں۔ فیوچر پیریڈ میں بیٹھیں۔ اساتذہ سے ملیں۔ بورڈ کے امتحانات، فیسوں اور اسکالرشپ کے متعلق سب سے کڑے سوالات پوچھیں۔",
          ctaText: "کیمپس کا دورہ بک کریں",
          secondaryCta: "واٹس ایپ پر رابطہ کریں"
        },
        {
          id: "students",
          audience: "طلباء کیلئے",
          title: "ہفتے کے روز آئیں، اپنے ہاتھ سے کچھ نیا بنائیں۔",
          description: "بلڈ ڈے: اوپن ورکشاپس جہاں آپ AI ماڈل ٹرین کریں گے، تھری ڈی پرنٹ کریں گے، یا کوئی آئیڈیا پچ کریں گے۔ کچھ بنا کر ساتھ لے جائیں۔",
          ctaText: "بلڈ ڈے کیلئے رجسٹر ہوں"
        },
        {
          id: "professionals",
          audience: "یونیورسٹی طلباء و پروفیشنلز کیلئے",
          title: "یونیورسٹی نے تھیوری سکھائی، لیب میں اب بنائیں گے۔",
          description: "انوویشن لیب بینچ کیلئے درخواست دیں: انکیوبیشن، AI ٹولز، مینٹورشپ اور ڈیمو ڈے۔ اپنے خیال کو حقیقت بنائیں۔",
          ctaText: "لیب بینچ کیلئے اپلائی کریں"
        },
        {
          id: "teachers",
          audience: "اساتذہ کیلئے",
          title: "آپ صرف نوٹس لکھوانے کیلئے استاد نہیں بنے تھے۔",
          description: "جدید لیبز اور لیسن کٹس کے ساتھ پڑھائیں۔ ہم فیوچر لیئر میں ہر استاد کی خود تربیت کرتے ہیں۔ پرکشش معاوضہ اور باوقار ماحول۔",
          ctaText: "تدریس کیلئے اپلائی کریں"
        }
      ],
      faqs: [
        {
          question: "کیا فیوچر لیئر سے میرے بچے کا میٹرک کا رزلٹ متاثر ہوگا؟",
          answer: "ہرگز نہیں۔ سندھ بورڈ کے اوقات کار سختی سے محفوظ ہیں (ہفتہ وار 70 سے 80 فیصد وقت)، جس میں امتحانی مشقیں اور نمبرز بحالی کے کلینکس شامل ہیں۔ بورڈ ہماری بنیادی منزل ہے، کوئی رکاوٹ نہیں۔"
        },
        {
          question: "کیا یہ اسلامی اقدار اور ہماری روایات کے مطابق ہے؟",
          answer: "بالکل۔ سندھ بورڈ کی مکمل اسلامیات موجود ہے؛ ہیرو ٹریک دیانتداری اور اخلاقیات پر مبنی ہے؛ طالبات کے سیشنز خواتین اساتذہ کے زیرِ نگرانی ہیں؛ اور پہاڑی کیمپس والدین کی اجازت سے ہوتے ہیں۔"
        },
        {
          question: "اگر ہمارا خاندان مکمل فیس ادا نہ کر سکے تو؟",
          answer: "مالی تنگی سندھ کے کسی باصلاحیت بچے کی راہ میں رکاوٹ نہیں بنے گی۔ ہم نے میرٹ اور ضرورت کی بنیاد پر شفاف اسکالرشپ پالیسی رکھی ہے۔ شام کی اکیڈمی بھی مفت یا برائے نام فیس پر ہے۔"
        },
        {
          question: "والدین اپنے بچے کی تعلیمی پیش رفت کیسے دیکھیں گے؟",
          answer: "والدین کے خصوصی موبائل ڈیش بورڈ پر جو سندھی، اردو اور انگریزی میں دستیاب ہے۔ آپ کو ہر ماہ بورڈ اور فیوچر پورٹ فولیو کی پیشرفت نظر آئے گی۔"
        }
      ]
    },
    footer: {
      slogan: "تعمیر کار، نہ کہ محض ڈگری یافتہ۔",
      ctaBand: "اگلا داخلہ کلاس رومز کی گنجائش کے ساتھ مشروط ہے، ہمارے حوصلے کے ساتھ نہیں۔ ابھی دورہ بک کریں۔",
      ctaButton: "کیمپس کا دورہ بک کریں",
      rights: "دی رائزنگ سندھ۔ جملہ حقوق محفوظ ہیں۔ سہون شریف، سندھ، پاکستان۔",
      governanceNote: "غیر سیاسی۔ سندھی اولیت۔ 5000 سالہ قدیم وادیٔ سندھ کی تہذیب سے جڑا اور مستقبل کی ٹیکنالوجی پر گامزن۔"
    }
  }
};
