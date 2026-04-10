export type BlogCategory =
  | "Career Hub"
  | "Agency Playbook"
  | "AI Studio"
  | "Brand Hub"
  | "Industry Insights"
  | "Success Stories";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  author: string;
  role: string;
  date: string;
  readTime: string;
  accent: string;
  coverType: "video" | "image";
  coverSrc: string;
  featured?: boolean;
  sections: Array<{
    heading: string;
    body: string[];
  }>;
};

export const blogCategories: Array<"All" | BlogCategory> = [
  "All",
  "Career Hub",
  "Agency Playbook",
  "AI Studio",
  "Brand Hub",
  "Industry Insights",
  "Success Stories",
];

export const blogPosts: BlogPost[] = [
  // FEATURED POST - AI Studio
  {
    slug: "ai-studio-complete-guide-talent-career-acceleration",
    title: "AI Studio: The complete guide to accelerating your talent career with AI",
    excerpt:
      "Discover how TalentOS AI Studio helps models, actors, and creators build stunning portfolios, apply to opportunities, and land brand partnerships faster than ever.",
    category: "AI Studio",
    author: "Priya Sharma",
    role: "AI Product Lead",
    date: "March 18, 2026",
    readTime: "12 min read",
    accent: "#635bff",
    coverType: "image",
    coverSrc: "/images/ai-studio-hero.jpg",
    featured: true,
    sections: [
      {
        heading: "What is AI Studio and why it matters",
        body: [
          "AI Studio is TalentOS's flagship creative suite that puts professional-grade AI tools in the hands of every talent on the platform. From portfolio generation to brand pitch creation, it eliminates the technical barriers that slow careers down.",
          "For models, actors, influencers, and creators, AI Studio means you can focus on what you do best — performing — while AI handles the production work that used to require expensive agencies.",
        ],
      },
      {
        heading: "Core features every talent should know",
        body: [
          "Image Generation creates portfolio-ready photos from simple prompts. Face Swap puts you in any scenario without expensive shoots. Background Removal and Replacement let you customize every image for different opportunities.",
          "The Content Copilot generates captions, hashtags, and brand pitch emails. Video Tools create reels and short-form content. Style Transfer maintains visual consistency across all your materials.",
        ],
      },
      {
        heading: "How agencies use AI Studio for their talent",
        body: [
          "Agency owners report 3x faster portfolio turnaround and 40% reduction in content production costs. AI Studio becomes their competitive advantage when pitching talent to brands.",
          "The Multi-Talent Management dashboard lets agencies create branded content for entire rosters simultaneously while maintaining individual creative identities.",
        ],
      },
    ],
  },

  // CAREER GROWTH ARTICLES
  {
    slug: "how-to-build-a-modeling-portfolio-that-gets-you-booked",
    title: "How to build a modeling portfolio that gets you booked in 2026",
    excerpt:
      "A complete guide for aspiring models: what agencies look for, how to organize your book, and the mistakes that keep talent from landing jobs.",
    category: "Career Hub",
    author: "Ananya Patel",
    role: "Modeling Career Coach",
    date: "March 16, 2026",
    readTime: "8 min read",
    accent: "#e8ff47",
    coverType: "image",
    coverSrc: "/images/model-portfolio.jpg",
    sections: [
      {
        heading: "The anatomy of a professional model portfolio",
        body: [
          "Your portfolio needs 12-16 strong images across categories: headshots, full body, editorial, commercial, and lifestyle. Each image should demonstrate range while maintaining consistency in your personal brand.",
          "The first three images matter most — that's what casting directors see before they scroll. Lead with your strongest commercial shot, followed by editorial versatility.",
        ],
      },
      {
        heading: "Common mistakes that cost you bookings",
        body: [
          "Over-retouching is the #1 portfolio killer. Agencies want to see your real skin, real proportions, and real expression. Excessive filtering signals insecurity and wastes everyone's time at castings.",
          "Another mistake is poor organization. Group similar looks together, lead with your strongest category, and end with memorable editorial shots that show range.",
        ],
      },
    ],
  },
  {
    slug: "pageant-preparation-timeline-from-registration-to-crown",
    title: "Pageant preparation timeline: from registration to crown",
    excerpt:
      "A month-by-month breakdown of what it takes to compete at the national level, from wardrobe planning to interview prep and fitness goals.",
    category: "Career Hub",
    author: "Riya Malhotra",
    role: "Former Miss India Finalist",
    date: "March 14, 2026",
    readTime: "10 min read",
    accent: "#ff6b9d",
    coverType: "image",
    coverSrc: "/images/pageant-prep.jpg",
    sections: [
      {
        heading: "Six months out: foundation building",
        body: [
          "Start with fitness consistency, not intensity. Pageant prep is a marathon. Begin working with a nutritionist and trainer who understand competition aesthetics, not just general fitness.",
          "This is also when you should finalize your wardrobe budget and begin researching designers for your evening gown and national costume.",
        ],
      },
      {
        heading: "Three months out: skill development",
        body: [
          "Interview coaching begins now. You need to develop concise, authentic answers to standard pageant questions while learning to pivot gracefully to unexpected topics.",
          "Walking coaching intensifies. Your stage presence — posture, turn precision, and confidence — separates finalists from winners.",
        ],
      },
    ],
  },
  {
    slug: "how-actors-can-use-social-media-to-get-discovered",
    title: "How actors can use social media to get discovered by casting directors",
    excerpt:
      "Social media is now your digital casting profile. Here's how to curate content that gets you noticed without compromising your artistic integrity.",
    category: "Career Hub",
    author: "Vikram Mehta",
    role: "Casting Director",
    date: "March 12, 2026",
    readTime: "7 min read",
    accent: "#4ecdc4",
    coverType: "image",
    coverSrc: "/images/actor-social.jpg",
    sections: [
      {
        heading: "What casting directors actually look for online",
        body: [
          "Range and consistency. We want to see that you can play different emotions, periods, and character types, but we also want to see a coherent sense of who you are as a performer.",
          "Self-tape quality matters enormously. Good lighting, clear sound, and professional framing tell us you understand production values and will be easy to work with on set.",
        ],
      },
      {
        heading: "Content strategy for working actors",
        body: [
          "Show behind-the-scenes moments from rehearsals and shoots. Share your artistic process without oversharing personal drama. Demonstrate your commitment to the craft.",
          "The actors getting called in are those whose social presence reinforces their casting type while showing enough range to spark curiosity.",
        ],
      },
    ],
  },

  // AGENCY OPERATIONS ARTICLES
  {
    slug: "how-to-run-a-profitable-modeling-agency-in-india-2026",
    title: "How to run a profitable modeling agency in India: 2026 operations guide",
    excerpt:
      "From talent acquisition to client retention, contracts to commission structures — a practical handbook for agency owners navigating the Indian talent market.",
    category: "Agency Playbook",
    author: "Rajesh Khanna",
    role: "Agency Consultant",
    date: "March 15, 2026",
    readTime: "11 min read",
    accent: "#ff8c42",
    coverType: "image",
    coverSrc: "/images/agency-operations.jpg",
    sections: [
      {
        heading: "Revenue models that actually work",
        body: [
          "The traditional 20% commission model is under pressure. Successful agencies are diversifying into content creation fees, brand consultation retainers, and exclusive talent partnerships with retainers.",
          "Cash flow management is critical in a seasonal industry. Build reserves during peak season (October-March) and plan lean operations for the summer months.",
        ],
      },
      {
        heading: "Talent retention strategies",
        body: [
          "Your best models will get approached directly by brands and other agencies. Keep them loyal through genuine career investment — coaching, international connections, and transparent communication about every opportunity.",
          "Regular portfolio updates, prompt payment, and personal attention during dry spells build loyalty that transcends commission percentages.",
        ],
      },
    ],
  },
  {
    slug: "contracts-compliance-and-legal-protection-for-talent-agencies",
    title: "Contracts, compliance, and legal protection for talent agencies",
    excerpt:
      "Essential contract clauses, labor law compliance, and risk management strategies for Indian talent agencies working with brands, talent, and production houses.",
    category: "Agency Playbook",
    author: "Adv. Sneha Gupta",
    role: "Entertainment Law Specialist",
    date: "March 13, 2026",
    readTime: "9 min read",
    accent: "#9b5de5",
    coverType: "image",
    coverSrc: "/images/legal-compliance.jpg",
    sections: [
      {
        heading: "The non-negotiable contract clauses",
        body: [
          "Exclusivity terms must be specific about geography, category, and duration. Vague exclusivity agreements lead to disputes and damaged relationships.",
          "Payment terms should specify net-30 maximum, late payment penalties, and collection responsibilities. Too many agencies wait 90+ days for brand payments with no recourse.",
        ],
      },
      {
        heading: "Compliance requirements in India",
        body: [
          "GST registration is mandatory for agencies crossing the threshold. TDS obligations apply to talent payments. Understanding these obligations prevents costly penalties.",
          "Labor law considerations affect how you classify talent relationships. Structure your agreements to clearly establish independent contractor status where appropriate.",
        ],
      },
    ],
  },
  {
    slug: "pageant-academy-management-maximizing-student-success",
    title: "Pageant academy management: maximizing student success and revenue",
    excerpt:
      "How to structure training programs, price services, and create pathways from academy student to professional talent.",
    category: "Agency Playbook",
    author: "Kavita Reddy",
    role: "Pageant Academy Director",
    date: "March 11, 2026",
    readTime: "8 min read",
    accent: "#f15bb5",
    coverType: "image",
    coverSrc: "/images/academy-management.jpg",
    sections: [
      {
        heading: "Program structure that delivers results",
        body: [
          "Successful academies offer tiered programs: foundation (4 weeks), intensive (8 weeks), and elite (12+ weeks with 1:1 coaching). This captures different commitment levels and budgets.",
          "Results-based pricing — where advanced program fees are partially contingent on competition placement — aligns incentives and builds reputation.",
        ],
      },
      {
        heading: "Creating talent pipeline to agencies",
        body: [
          "Partner with modeling agencies, casting directors, and event organizers. Formal placement partnerships create value for your students and referral revenue for your academy.",
          "Document and showcase student transformations and competition results. Success stories are your most powerful marketing asset.",
        ],
      },
    ],
  },

  // AI & TECHNOLOGY ARTICLES
  {
    slug: "how-ai-is-transforming-talent-portfolio-creation-2026",
    title: "How AI is transforming talent portfolio creation in 2026",
    excerpt:
      "From AI-generated headshots to automated portfolio curation, the technology stack that every modern talent professional needs to understand.",
    category: "AI Studio",
    author: "Arjun Nair",
    role: "AI Technology Writer",
    date: "March 17, 2026",
    readTime: "7 min read",
    accent: "#00bbf9",
    coverType: "image",
    coverSrc: "/images/ai-portfolio.jpg",
    sections: [
      {
        heading: "The AI tools reshaping talent content",
        body: [
          "Image generation models now produce portfolio-quality photos from text descriptions. Face swap technology puts talent in any scenario without travel or wardrobe costs. Background replacement creates unlimited location variety.",
          "These tools don't replace photographers — they democratize access to professional-grade content for talent who can't afford constant studio shoots.",
        ],
      },
      {
        heading: "What talent need to know about AI ethics",
        body: [
          "Disclosure matters. Some casting directors want to know if portfolio images are AI-enhanced. Understanding industry norms around AI disclosure is becoming a professional competency.",
          "The best approach: use AI for concepting and variety, but include authentic photography in your book as well. Balance efficiency with authenticity.",
        ],
      },
    ],
  },
  {
    slug: "automation-tools-for-agency-owners-save-10-hours-weekly",
    title: "Automation tools for agency owners: save 10+ hours weekly",
    excerpt:
      "The software stack that modern talent agencies use to automate casting submissions, client communication, payment tracking, and talent management.",
    category: "AI Studio",
    author: "Neha Kapoor",
    role: "Agency Tech Consultant",
    date: "March 10, 2026",
    readTime: "6 min read",
    accent: "#00f5d4",
    coverType: "image",
    coverSrc: "/images/agency-automation.jpg",
    sections: [
      {
        heading: "Where agencies waste the most time",
        body: [
          "Manual casting submissions, repetitive client updates, talent availability checks, and invoice follow-ups consume 15-20 hours weekly at typical agencies. Most of this can be automated.",
          "The cost of manual work isn't just time — it's errors, missed opportunities, and talent frustration when communication is slow or inconsistent.",
        ],
      },
      {
        heading: "The essential automation stack",
        body: [
          "Talent management platforms handle availability, digitals, and package creation. Automated email sequences nurture client relationships. Integrated payment systems eliminate collection delays.",
          "The agencies winning in this market are those that use technology to provide faster, more professional service with smaller teams.",
        ],
      },
    ],
  },

  // BRAND PARTNERSHIPS ARTICLES
  {
    slug: "how-brands-can-find-authentic-influencers-on-talentos",
    title: "How brands can find authentic influencers and creators on TalentOS",
    excerpt:
      "A complete guide for brand marketers: vetting talent, evaluating engagement quality, negotiating rates, and building long-term creator partnerships.",
    category: "Brand Hub",
    author: "Meera Srinivasan",
    role: "Brand Partnership Lead",
    date: "March 16, 2026",
    readTime: "9 min read",
    accent: "#ff006e",
    coverType: "image",
    coverSrc: "/images/brand-partnerships.jpg",
    sections: [
      {
        heading: "Why verified talent platforms matter",
        body: [
          "The influencer market is plagued by fake followers, engagement pods, and misrepresented reach. Verified talent platforms eliminate these risks by authenticating identity, auditing engagement, and standardizing metrics.",
          "For brands, this means predictable campaign outcomes and legal protection through proper contracting and compliance frameworks.",
        ],
      },
      {
        heading: "Evaluating talent beyond follower count",
        body: [
          "Engagement rate, audience alignment, content quality, and brand safety metrics matter more than raw numbers. A 50K creator with 8% engagement in your target demographic outperforms a 500K creator with 0.5% engagement.",
          "Request case studies, past campaign performance data, and audience demographics. Professional talent should have this information ready.",
        ],
      },
    ],
  },
  {
    slug: "influencer-marketing-roi-measurement-framework-2026",
    title: "Influencer marketing ROI: the measurement framework that actually works",
    excerpt:
      "Move beyond vanity metrics. Here's how to track creator campaign performance from awareness through conversion and attribute revenue accurately.",
    category: "Brand Hub",
    author: "Rohan Desai",
    role: "Performance Marketing Director",
    date: "March 14, 2026",
    readTime: "8 min read",
    accent: "#fb5607",
    coverType: "image",
    coverSrc: "/images/roi-measurement.jpg",
    sections: [
      {
        heading: "The attribution problem in creator marketing",
        body: [
          "Last-click attribution undervalues top-of-funnel creator content. A customer might see three creator posts, two brand ads, and a search ad before purchasing. Who gets credit?",
          "Multi-touch attribution models — time decay and position-based — better reflect how creator content actually drives purchase decisions.",
        ],
      },
      {
        heading: "Metrics that matter by campaign objective",
        body: [
          "Awareness campaigns: track reach, impression quality, and brand search lift. Consideration campaigns: measure engagement rate, saves, shares, and landing page visits. Conversion campaigns: focus on attributable revenue, ROAS, and customer acquisition cost.",
          "Set objective-appropriate KPIs before campaign launch and evaluate accordingly.",
        ],
      },
    ],
  },

  // INDUSTRY INSIGHTS ARTICLES
  {
    slug: "india-talent-industry-report-2026-key-trends-data",
    title: "India talent industry report 2026: key trends and market data",
    excerpt:
      "Comprehensive analysis of the Indian modeling, influencer, and creator economy: market size, growth segments, regional distribution, and emerging opportunities.",
    category: "Industry Insights",
    author: "Dr. Amit Shah",
    role: "Industry Analyst",
    date: "March 18, 2026",
    readTime: "14 min read",
    accent: "#3a86ff",
    coverType: "image",
    coverSrc: "/images/industry-report.jpg",
    sections: [
      {
        heading: "Market size and growth trajectory",
        body: [
          "The Indian talent industry is valued at ₹12,400 crores in 2026, growing at 18% annually. Digital content creation represents the fastest-growing segment at 34% year-over-year.",
          "Regional tier-2 and tier-3 cities now account for 40% of new talent registrations, driven by smartphone penetration and vernacular content demand.",
        ],
      },
      {
        heading: "Where the opportunities are concentrated",
        body: [
          "Short-form video talent demand exceeds supply by 3:1. Regional language creators are seeing 5x rate increases. Virtual and AI-enhanced talent represents an emerging ₹200 crore niche.",
          "Pageantry is professionalizing, with national-level competitions driving international placement rates up 22% year-over-year.",
        ],
      },
    ],
  },
  {
    slug: "the-future-of-pageants-in-india-global-placement-strategies",
    title: "The future of pageants in India: global placement strategies",
    excerpt:
      "How Indian pageant winners are increasingly competitive at international levels, and what the ecosystem needs to maintain this trajectory.",
    category: "Industry Insights",
    author: "Lisa Ray",
    role: "International Pageant Coach",
    date: "March 12, 2026",
    readTime: "7 min read",
    accent: "#8338ec",
    coverType: "image",
    coverSrc: "/images/pageant-future.jpg",
    sections: [
      {
        heading: "India's rising international competitiveness",
        body: [
          "Indian representatives at Miss Universe, Miss World, and Miss International have reached finals consistently for six consecutive years. The country has moved from occasional placement to systematic competitiveness.",
          "This reflects improved training infrastructure, international coaching access, and a larger talent pool of ambitious, prepared candidates.",
        ],
      },
      {
        heading: "What needs to improve",
        body: [
          "Interview preparation remains the gap. Indian candidates excel in evening gown and national costume, but Western-style panel interviews require different preparation than most Indian academies provide.",
          "Investment in speech coaching, current affairs preparation, and Western cultural fluency would further improve placement rates.",
        ],
      },
    ],
  },
  {
    slug: "creator-economy-regulation-india-what-talent-need-to-know",
    title: "Creator economy regulation in India: what talent and agencies need to know",
    excerpt:
      "New guidelines on disclosure, taxation, content standards, and platform compliance affecting Indian creators, influencers, and talent agencies.",
    category: "Industry Insights",
    author: "Adv. Karthik Iyer",
    role: "Digital Media Law Expert",
    date: "March 9, 2026",
    readTime: "10 min read",
    accent: "#06ffa5",
    coverType: "image",
    coverSrc: "/images/creator-regulation.jpg",
    sections: [
      {
        heading: "ASCI guidelines and disclosure requirements",
        body: [
          "The Advertising Standards Council of India now mandates clear disclosure of paid partnerships, gifted products, and brand associations. #Ad and #Sponsored are required for all commercial content.",
          "Non-compliance carries platform penalties, brand contract termination risk, and potential ASCI blacklisting that affects future commercial opportunities.",
        ],
      },
      {
        heading: "Taxation and GST implications",
        body: [
          "Creator income is taxable as professional income or business income depending on structure. GST registration is required above the threshold. International brand payments have withholding tax implications.",
          "Proper documentation, contract clarity on tax responsibilities, and professional accounting are no longer optional for serious creators.",
        ],
      },
    ],
  },

  // SUCCESS STORIES ARTICLES
  {
    slug: "from-zero-to-first-booking-how-priya-landed-her-first-modeling-gig",
    title: "From zero to first booking: How Priya landed her first modeling gig in 14 days",
    excerpt:
      "A real talent journey from creating a TalentOS profile to booking her first commercial campaign. The specific steps, timeline, and platform features that made it possible.",
    category: "Success Stories",
    author: "TalentOS Editorial",
    role: "Story Team",
    date: "March 17, 2026",
    readTime: "6 min read",
    accent: "#ff9f1c",
    coverType: "image",
    coverSrc: "/images/success-story-priya.jpg",
    sections: [
      {
        heading: "The challenge: Breaking into modeling with no experience",
        body: [
          "Priya, 22, from Pune, had always wanted to model but didn't know where to start. She had no portfolio, no agency connections, and no understanding of how the industry worked.",
          "She discovered TalentOS through a friend and decided to give it a try, not expecting much from a 'digital platform.'",
        ],
      },
      {
        heading: "The discovery: AI Studio changed everything",
        body: [
          "Using AI Studio's Portfolio Builder, Priya created a professional bio and identified exactly what photos she needed. The gap analysis showed her profile was only 34% complete.",
          "She spent one weekend shooting the recommended portfolio shots and uploaded them. Her AI Studio score jumped to 78%.",
        ],
      },
      {
        heading: "The setup: Profile optimization and first applications",
        body: [
          "Priya followed the Career Hub guides to optimize her TalentOS profile. She added verified measurements, linked her Instagram, and completed the AI Studio Audition Coach module for runway walks.",
          "Within 3 days of completing her profile, she applied to 5 open castings through the platform.",
        ],
      },
      {
        heading: "The results: First booking in 14 days",
        body: [
          "On day 14, Priya received an offer for a commercial shoot for a local fashion brand. The booking paid ₹15,000 for one day's work — her first professional income as a model.",
          "She has since booked 4 more jobs through TalentOS and signed with a boutique agency she met through the platform.",
        ],
      },
    ],
  },
  {
    slug: "how-glamour-agency-doubled-their-revenue-with-talentos",
    title: "How Glamour Agency doubled their revenue in 6 months with TalentOS",
    excerpt:
      "A boutique Mumbai agency's transformation from spreadsheet chaos to streamlined operations, automated workflows, and 2x revenue growth.",
    category: "Success Stories",
    author: "TalentOS Editorial",
    role: "Story Team",
    date: "March 14, 2026",
    readTime: "8 min read",
    accent: "#3a86ff",
    coverType: "image",
    coverSrc: "/images/success-story-glamour.jpg",
    sections: [
      {
        heading: "The challenge: Running on spreadsheets and WhatsApp",
        body: [
          "Glamour Agency, a 40-talent boutique firm in Mumbai, was drowning in operational chaos. Bookings were tracked in Excel, communications happened across 5 WhatsApp groups, and payment reconciliation took 3 days every month.",
          "Founder Rakesh Shah knew they were leaving money on the table but couldn't scale operations without hiring more staff.",
        ],
      },
      {
        heading: "The discovery: Finding TalentOS at the right time",
        body: [
          "Rakesh discovered TalentOS through an industry newsletter. The promise of 'agency operations on autopilot' resonated with his pain points.",
          "He scheduled a demo and was impressed by the commission engine, casting pipeline, and escrow payment system.",
        ],
      },
      {
        heading: "The setup: One week to full migration",
        body: [
          "Following the Agency Playbook setup guide, Rakesh migrated his entire talent roster to TalentOS in 5 days. He configured C2 commission splits, uploaded contract templates, and trained his two bookers on the new system.",
          "The TalentOS support team helped configure automated workflows for casting submissions and client communication.",
        ],
      },
      {
        heading: "The results: 2x revenue, 50% less admin time",
        body: [
          "Within 6 months, Glamour Agency had doubled their monthly booking revenue. The casting pipeline helped them respond to opportunities 3x faster, winning jobs they previously missed.",
          "Payment reconciliation now takes 30 minutes instead of 3 days. The team has grown to 80 talent without adding administrative staff.",
        ],
      },
    ],
  },
  {
    slug: "miss-pune-2025-how-talentos-powered-a-record-breaking-pageant",
    title: "Miss Pune 2025: How TalentOS powered a record-breaking city pageant",
    excerpt:
      "Behind the scenes of the most successful city-level pageant in Maharashtra history — 340 participants, zero paperwork, and seamless operations powered by TalentOS.",
    category: "Success Stories",
    author: "TalentOS Editorial",
    role: "Story Team",
    date: "March 11, 2026",
    readTime: "9 min read",
    accent: "#8338ec",
    coverType: "image",
    coverSrc: "/images/success-story-pageant.jpg",
    sections: [
      {
        heading: "Key takeaways",
        body: [
          "Miss Pune 2025 crossed 340 registrations by removing friction — instant onboarding, digital payments, and a participant dashboard that eliminated WhatsApp chaos.",
          "The pageant team replaced paper forms, manual fee tracking, and spreadsheet scoring with a single workflow: registration → verification → round scheduling → judge scoring → results.",
          "Sponsors and partners saw a ‘national-level’ operation because every touchpoint looked consistent: branded email/SMS, structured criteria, and auditable scoring.",
        ],
      },
      {
        heading: "The challenge: Scaling beyond 200 participants",
        body: [
          "Organizer Neha Desai had run Miss Pune for 3 years but never broke 200 registrations. The manual processes — paper forms, bank transfers, WhatsApp coordination — created a ceiling she couldn't break through.",
          "She wanted to grow to 300+ participants but knew her current system would collapse under the volume.",
        ],
      },
      {
        heading: "The discovery: Digital-first pageant management",
        body: [
          "Neha discovered TalentOS's pageant management features at an industry conference. The credit-based registration system, automated judge scoring, and participant dashboard solved every pain point she had.",
          "She decided to run Miss Pune 2025 entirely on TalentOS.",
        ],
      },
      {
        heading: "What changed: From WhatsApp operations to a real workflow",
        body: [
          "Instead of coordinating everything across group chats, the team moved to a structured pipeline: registrations, payments, media submissions, round schedules, and judge scoring — all in one place.",
          "Participants stopped asking ‘what’s next?’ because their dashboard showed tasks and deadlines per round: document uploads, rehearsal calls, walk video submissions, and venue reporting times.",
          "The team stopped chasing receipts because registration fees were recorded automatically and tied to each participant record.",
        ],
      },
      {
        heading: "The setup: Two weeks to event-ready",
        body: [
          "Neha and her team configured the pageant tenant in TalentOS, set up registration tiers (Early Bird ₹2,999, Standard ₹3,999, Premium ₹5,999), and onboarded 8 judges with platform accounts.",
          "The TalentOS escrow system handled ₹12L in registration fees automatically.",
        ],
      },
      {
        heading: "Registration without friction",
        body: [
          "The application form was converted into a guided flow: personal details, measurements, portfolio uploads, and verification checks.",
          "Automated confirmations replaced manual replies: participants received a receipt, next steps, and a checklist the moment payment cleared.",
          "Tiered registration made pricing predictable and reduced support tickets because participants could clearly see what each tier included.",
        ],
      },
      {
        heading: "Judge scoring that was fast, fair, and auditable",
        body: [
          "Each round used explicit criteria so judges scored consistently (e.g., walk, confidence, presence, articulation) instead of free-form notes.",
          "Scores were captured digitally and aggregated instantly, eliminating spreadsheet errors and ‘version mismatch’ problems.",
          "The team could export round summaries after each session, which improved sponsor confidence and reduced disputes.",
        ],
      },
      {
        heading: "Communication that looked professional",
        body: [
          "TalentOS replaced ad-hoc WhatsApp messages with scheduled notifications for key milestones: round timing, venue call sheets, grooming reminders, and submission deadlines.",
          "Branded email/SMS templates kept the tone consistent and reduced repeated questions from participants.",
          "Operational clarity improved: when a deadline moved, the update appeared on the participant dashboard and in notifications — not buried in chat history.",
        ],
      },
      {
        heading: "The results: 340 participants, flawless execution",
        body: [
          "Miss Pune 2025 had 340 registered participants — a 70% increase from the previous year. The automated workflows saved Neha's team an estimated 200 hours of manual work.",
          "Participant satisfaction scores were the highest in the pageant's history. Two national sponsors signed on for 2026 after seeing the professional operation.",
        ],
      },
      {
        heading: "Why this matters for every pageant organizer",
        body: [
          "City-level pageants often stay small because operations don’t scale. Once you cross ~200 participants, admin work grows faster than registrations.",
          "A system like TalentOS changes the ceiling: you can add more participants without adding the same amount of manual staff.",
          "The bigger win is trust — a transparent, well-run event attracts better judges, better sponsors, and more serious participants.",
        ],
      },
    ],
  },

  // AI STUDIO DOCUMENTATION ARTICLES
  {
    slug: "ai-studio-complete-feature-guide-portfolio-builder",
    title: "AI Studio: The complete feature guide to Portfolio Builder",
    excerpt:
      "Deep dive into TalentOS AI Studio's Portfolio Builder — Smart Profile Scan, AI Bio Generator, and Portfolio Packages. Everything talent and agencies need to create competitive assets.",
    category: "AI Studio",
    author: "TalentOS Product Team",
    role: "AI Studio Documentation",
    date: "March 19, 2026",
    readTime: "15 min read",
    accent: "#635bff",
    coverType: "image",
    coverSrc: "/images/ai-studio-portfolio-builder.jpg",
    sections: [
      {
        heading: "What is AI Studio?",
        body: [
          "TalentOS AI Studio is not one feature — it is a suite of AI-powered tools embedded inside the Talent Dashboard that helps talent and agencies create, improve, package, and monetise talent assets.",
          "It covers the entire talent career: generating bios and resumes, scoring media quality, coaching for auditions, optimising casting applications, building a brand identity, analysing growth, and generating new media content.",
          "AI Studio is governed by the tenant — each agency can enable or disable specific features, configure the AI models allowed, set budgets, and define content safety policies.",
        ],
      },
      {
        heading: "Core Principles of AI Studio",
        body: [
          "Free tier forces the cheapest model (Gemini Flash-Lite). No choice on Free. Rules-only mode first where possible.",
          "Pro and Enterprise tiers unlock provider choice (Gemini Flash vs OpenAI GPT-5), higher-quality outputs, and premium add-ons.",
          "Media generation (especially video) is pack-based — sold as add-on packs, not included in base plans.",
          "Everything is catalog-driven: change a config row, not code. New models, new features, new pricing — all via admin panel.",
          "Privacy-first: talent can opt out of content being used for model training, per media item or globally.",
          "Safety-first: all AI outputs go through content policy checks. Human review queue available on Enterprise.",
        ],
      },
      {
        heading: "Tool 1: Portfolio Builder — Smart Profile Scan",
        body: [
          "The Portfolio Builder is the first thing a talent encounters in AI Studio. It analyses a talent's complete profile and produces a personalised plan to make them more discoverable, more credible, and more competitive.",
          "The Smart Profile Scan analyses the entire profile — personal details, measurements, skills, portfolio items, social links, career credits, verification level — and produces a completeness score per category (Acting / Modelling / Pageant / Brand).",
          "Category scores are separate and independent. A talent can be 95% for Runway and 40% for Brand — scores matter independently in each context.",
        ],
      },
      {
        heading: "Gap Analysis & One-Click Fix Plan",
        body: [
          "Gap analysis identifies exactly what is missing: 'Missing: runway walk video (+12%), verified measurements (+6%), Instagram linked (+4%). Total unlockable: +22%.'",
          "Scan modes include Rules-only (instant, no AI credits) and optional narrated explanation (uses AI credits — explains why each gap matters in plain language).",
          "One-click Fix Plan: AI generates suggested shots to upload, bio structure, skill tags with confidence scores, and evidence request links for unverified credits.",
          "Free tier: full scan, rules-only. Pro/Enterprise: narrated explanation, deeper analysis, multi-language output.",
        ],
      },
      {
        heading: "Tool 2: AI Bio / Resume Generator",
        body: [
          "The AI Bio Generator creates three bio types: Casting bio (formal, credential-led), Pageant bio (achievement-led, purpose statement), and Brand collaboration bio (personality-led, niche-first).",
          "Tone options include Professional, Bold, Elegant, and Minimal. The talent selects; AI adapts language, sentence rhythm, and vocabulary accordingly.",
          "Length outputs: Short bio (80–120 characters for social bios), Medium bio (300–500 characters for platform profiles), Full bio (unlimited for agency submissions and media kits).",
          "Multi-language versions available: Hindi, Marathi, Tamil, Telugu — generated from the same profile facts, adapted to local tone conventions.",
        ],
      },
      {
        heading: "Resume / CV Studio & Sections Builder",
        body: [
          "Resume / CV Studio produces ATS-optimised format for film/TV/OTT submissions with 4 layout templates and role-type selector (acting / modelling / pageant / brand).",
          "PDF export is available on Pro+. All versions are stored in the AI Assets Library for easy access and versioning.",
          "Sections Builder helps build profile sections with AI assistance: visibility control per section, verified badge overlays, publish toggles. Output: structured sections ready to publish to profile.",
          "Apply to profile with one-click: AI-generated bio replaces current profile bio. Original always preserved as a version. Can revert at any time.",
        ],
      },
      {
        heading: "Tool 3: Portfolio Packages",
        body: [
          "Portfolio Packages are one-click export sets that package a talent's assets into purpose-built bundles for specific opportunities.",
          "Casting Pack includes: Headshot + slate + resume (ATS format) + intro video clip. Formatted per casting call's file requirements with auto-applied naming conventions.",
          "Pageant Pack includes: Walk clip + Q&A highlights + achievements list + certificates + measurements card. Formatted for pageant submission portals.",
          "Brand Pack includes: UGC reel + social stats card + brand-safe profile bio + rate card. Includes influencer-tier badge (Nano/Micro/Mid-tier/Macro/Mega) based on follower count.",
        ],
      },
      {
        heading: "Pack Exporter Workflow & Plan Gate",
        body: [
          "Pack Exporter follows a full state machine: DRAFT → ESTIMATING (credits cost shown) → QUOTA_RESERVED → QUEUED → RENDERING_PDF → ATTACHING_ASSETS → UPLOADING → SUCCEEDED → RECONCILED.",
          "Export options: PDF pack, ZIP archive, expiring shareable link (configurable expiry), download toggle, watermark (tenant policy).",
          "Pack export is Pro+ only. Free tier can preview pack contents but cannot export. This ensures serious talent have access to professional export tools.",
        ],
      },
    ],
  },
  {
    slug: "how-ai-studio-smart-profile-scan-works",
    title: "How AI Studio Smart Profile Scan works — and how to score 95%+",
    excerpt:
      "A technical breakdown of the Smart Profile Scan algorithm, category scoring, gap analysis, and actionable steps to maximise your profile completeness score.",
    category: "AI Studio",
    author: "Dr. Arun Krishnan",
    role: "AI Engineering Lead",
    date: "March 18, 2026",
    readTime: "10 min read",
    accent: "#00d4aa",
    coverType: "image",
    coverSrc: "/images/ai-profile-scan.jpg",
    sections: [
      {
        heading: "The Scan Architecture",
        body: [
          "Smart Profile Scan is a multi-modal analysis pipeline that processes structured profile data, media assets, text content, and verification signals to produce completeness scores.",
          "The system runs rules-based analysis first (instant, zero cost) and optionally invokes LLM-based narrated explanation for deeper insights (consumes AI credits).",
          "Each category — Acting, Modelling, Pageant, Brand — has its own scoring rubric with different weightings for what matters most in that context.",
        ],
      },
      {
        heading: "Category Scoring Breakdown",
        body: [
          "Modelling scoring weights: Portfolio diversity (30%), Measurements verified (20%), Walk video present (20%), Headshot quality (15%), Social proof (15%).",
          "Acting scoring weights: Showreel present (35%), Training credits (25%), Slate video (20%), Special skills listed (20%).",
          "Pageant scoring weights: Walk technique video (30%), Q&A preparation (25%), Achievements documented (25%), Physical measurements (20%).",
          "Brand/Influencer scoring weights: Follower count & engagement (40%), Content quality (25%), Niche clarity (20%), Previous brand work (15%).",
        ],
      },
      {
        heading: "How to Reach 95%+ Score",
        body: [
          "Upload all required media types: headshot, full body, profile, walk video, slate, showreel. Each missing video costs you 15-20 points.",
          "Verify all measurements with professional documentation. Unverified measurements are ignored in casting algorithms.",
          "Link and verify all social profiles. The system checks for authenticity and engagement quality, not just follower counts.",
          "Document every credit with evidence: call sheets, contracts, photos from set, payment receipts. Verified credits carry 3x more weight.",
          "Complete all training and certification entries. Academy-trained talent score higher in pageant and acting categories.",
        ],
      },
      {
        heading: "Gap Analysis Deep Dive",
        body: [
          "The gap analysis engine identifies exactly which items will move your score. It ranks them by impact: high-impact items (15-20% boost), medium-impact (5-10%), low-impact (1-3%).",
          "Example output: 'High Impact: Add runway walk video (+18%). Medium Impact: Link verified Instagram (+6%). Low Impact: Add special skill 'horse riding' (+2%).'",
          "The system considers tenant configuration — some agencies require specific items that become high-impact regardless of base algorithm weighting.",
        ],
      },
      {
        heading: "Rules-Only vs AI Narration",
        body: [
          "Rules-only mode is available on all tiers. It produces the score, gap list, and priority ranking instantly with zero AI credit cost.",
          "AI narration (Pro+) adds natural language explanation of why each gap matters: 'Casting directors typically eliminate candidates without walk videos in the first review round because they cannot assess movement quality.'",
          "Multi-language narration supports Hindi, Marathi, Tamil, Telugu with localized tone and cultural context for pageant and brand categories.",
        ],
      },
    ],
  },
  {
    slug: "ai-bio-generator-create-perfect-profile-in-minutes",
    title: "AI Bio Generator: Create the perfect profile bio in 3 minutes",
    excerpt:
      "Step-by-step guide to using AI Studio's Bio Generator. From tone selection to multi-language output — everything you need for casting, pageant, and brand bios.",
    category: "AI Studio",
    author: "Priya Venkatesh",
    role: "Product Marketing Manager",
    date: "March 17, 2026",
    readTime: "8 min read",
    accent: "#8b5cf6",
    coverType: "image",
    coverSrc: "/images/ai-bio-generator.jpg",
    sections: [
      {
        heading: "Why Your Bio Matters",
        body: [
          "Casting directors spend an average of 7 seconds on a profile before making a keep/skip decision. Your bio is read in the first 2 seconds.",
          "A well-crafted bio creates context for your photos and videos. Without it, your media is interpreted without narrative framing.",
          "Different contexts require different bios. What works for a casting director fails for a brand partnership inquiry and vice versa.",
        ],
      },
      {
        heading: "The Three Bio Types",
        body: [
          "Casting Bio (Formal, Credential-led): 'Trained actor with 50+ commercial credits. Special skills: dialects (British, American South), stage combat certified, guitar advanced. Available for film, TV, and OTT. Based in Mumbai, passport-ready for international travel.'",
          "Pageant Bio (Achievement-led, Purpose-driven): 'Finalist at Miss India Maharashtra 2025. Advocate for menstrual health education in rural schools. Psychology graduate. Believes beauty pageants are platforms for social impact. Fluent in Hindi, English, Marathi.'",
          "Brand Bio (Personality-led, Niche-first): 'Fashion and lifestyle creator obsessed with sustainable style. 50K engaged community. Previous brand work: Nykaa, Myntra, Loreal. UGC specialist with 12% engagement rate. Mumbai-based, available for travel.'",
        ],
      },
      {
        heading: "Tone Selection Guide",
        body: [
          "Professional tone: Best for corporate castings, formal pageants, luxury brand partnerships. Clean, credential-focused, understated.",
          "Bold tone: Best for action roles, competitive pageants, edgy fashion brands. Confident, assertive, stands out.",
          "Elegant tone: Best for luxury fashion, international pageants, high-end jewelry brands. Refined, sophisticated, aspirational.",
          "Minimal tone: Best for editorial modelling, contemporary art projects, modern lifestyle brands. Simple, direct, lets images speak.",
        ],
      },
      {
        heading: "Length Selection by Use Case",
        body: [
          "Short bio (80-120 chars): Instagram bio, email signature, quick intros. Example: 'Mumbai model | 50+ campaigns | Runway & commercial | Passport ready'",
          "Medium bio (300-500 chars): Platform profiles, agency submissions, networking. Includes key credentials and contact hook.",
          "Full bio (unlimited): Media kits, press releases, official pageant submissions. Complete narrative with purpose statement and achievements.",
        ],
      },
      {
        heading: "Multi-Language Output",
        body: [
          "AI Studio generates bios in Hindi, Marathi, Tamil, and Telugu from the same profile facts, adapted to local tone conventions.",
          "Example — Hindi Pageant Bio: 'मिस इंडिया महाराष्ट्र 2025 की फाइनलिस्ट। ग्रामीण स्कूलों में माहवारी स्वास्थ्य शिक्षा की समर्थक। मनोविज्ञान स्नातक।'",
          "Language selection happens after bio type and tone selection. The system preserves all factual accuracy while adapting expression style.",
          "Free tier: English only. Pro+: 2 languages. Enterprise: All supported languages with tenant-specific localization.",
        ],
      },
      {
        heading: "Facts-Only Mode & Brand Voice Templates",
        body: [
          "Facts-only mode ensures AI never invents information. It only uses verified profile data: confirmed credits, documented measurements, linked social accounts.",
          "When facts-only is enabled, the system flags any gap where no verified data exists rather than generating placeholder content.",
          "Brand voice templates (Enterprise) allow agencies to define their preferred language patterns. All talent bios generated under that tenant follow the agency's communication style.",
        ],
      },
    ],
  },
  {
    slug: "portfolio-packages-one-click-professional-exports",
    title: "Portfolio Packages: One-click professional exports for every opportunity",
    excerpt:
          "Complete guide to Portfolio Packages — Casting Pack, Pageant Pack, and Brand Pack. Export workflows, requirements, and Pro+ features explained.",
    category: "AI Studio",
    author: "Rahul Mehta",
    role: "Export Systems Lead",
    date: "March 16, 2026",
    readTime: "9 min read",
    accent: "#f59e0b",
    coverType: "image",
    coverSrc: "/images/ai-portfolio-packages.jpg",
    sections: [
      {
        heading: "What Are Portfolio Packages?",
        body: [
          "Portfolio Packages are one-click export sets that bundle your talent assets into purpose-built packages for specific submission types.",
          "Each pack type knows the exact requirements of its destination: casting directors want different things than pageant judges or brand managers.",
          "The system automatically selects, formats, names, and arranges your assets to match industry standards for each pack type.",
        ],
      },
      {
        heading: "Casting Pack: Film, TV, Commercial",
        body: [
          "The Casting Pack includes: Professional headshot (cropped to industry standard), Slate video (3-second intro), Resume in ATS-optimized format, and Intro video clip (10-15 second showreel highlight).",
          "File naming follows automatic convention: 'FirstName_LastName_RoleType_Date' — ensures casting directors can find you in their downloads folder.",
          "Format compliance: Images as high-res JPEG, videos as H.264 MP4, resume as PDF/A for archival. All specs checked before export.",
          "The pack is optimized for casting platform uploads: Backstage, Casting Networks, TalentOS Casting, and direct email submissions.",
        ],
      },
      {
        heading: "Pageant Pack: Competition Submissions",
        body: [
          "The Pageant Pack includes: Walk technique video (runway walk in pageant heels), Q&A highlights (30-60 second speaking clip), Achievements list (verified pageant history, awards), Certificates (training, volunteer work), and Measurements card (official stats).",
          "Pageant portals require specific file formats and naming. The pack exports exactly what each major system (Miss India, Mrs. India, international preliminaries) expects.",
          "Optional add-ons include: Evening gown photos, Swimsuit/fitness photos, National costume documentation, Social impact project summary.",
        ],
      },
      {
        heading: "Brand Pack: Influencer & Creator",
        body: [
          "The Brand Pack includes: UGC reel sample (showing content creation style), Social stats card (followers, engagement rate, audience demographics), Brand-safe profile bio (professional, no controversy), and Rate card (pricing for deliverables by tier).",
          "Influencer tier badge is auto-calculated: Nano (1K-10K), Micro (10K-50K), Mid-tier (50K-500K), Macro (500K-1M), Mega (1M+).",
          "Brand packs include media kit formatting — the standard 1-page PDF that brands expect when evaluating creators for campaigns.",
        ],
      },
      {
        heading: "Export Workflow: From Draft to Delivery",
        body: [
          "The export state machine ensures reliability: DRAFT → ESTIMATING (credits cost calculated) → QUOTA_RESERVED → QUEUED → RENDERING_PDF → ATTACHING_ASSETS → UPLOADING → SUCCEEDED → RECONCILED.",
          "At ESTIMATING, you see exactly what the export will cost in AI credits. You can cancel or proceed. Once QUOTA_RESERVED, credits are held until success or failure.",
          "RENDERING_PDF happens server-side with professional layout engines. ATTACHING_ASSETS pulls your actual media files. UPLOADING creates the final deliverable package.",
        ],
      },
      {
        heading: "Export Options & Plan Gate",
        body: [
          "Export formats: Single PDF (all assets embedded), ZIP archive (individual files organized in folders), Expiring shareable link (cloud-hosted, configurable 7-30 day expiry).",
          "Security features: Optional watermark with talent name and date, password protection on ZIP files, view-only PDF mode (no downloads).",
          "Plan gate: Pack export is Pro+ only. Free tier can preview what the pack would contain but cannot export. This is a hard gate — no exceptions.",
          "Enterprise tenants can configure custom pack types beyond the three standard templates.",
        ],
      },
    ],
  },

  // AI STUDIO PART C-F: MEDIA LAB, AUDITION COACH, APPLICATION ASSISTANT, BRAND KIT, MEDIA GENERATION
  {
    slug: "ai-studio-media-lab-photo-video-analysis",
    title: "AI Studio Media Lab: Photo and video quality scoring explained",
    excerpt:
      "How AI Studio's Media Lab analyses your portfolio photos and videos for technical quality, composition, and casting appeal — with actionable improvement tips.",
    category: "AI Studio",
    author: "Ananya Sharma",
    role: "Computer Vision Lead",
    date: "March 19, 2026",
    readTime: "11 min read",
    accent: "#ec4899",
    coverType: "image",
    coverSrc: "/images/ai-media-lab.jpg",
    sections: [
      {
        heading: "What Media Lab Does",
        body: [
          "Media Lab is the quality control centre of AI Studio. It analyses every photo and video in your portfolio for technical quality, composition, casting appeal, and platform compliance.",
          "The system checks focus sharpness, exposure balance, colour grading, framing, background appropriateness, and facial visibility — the factors that determine whether your media helps or hurts your casting chances.",
          "Each media item receives a quality score (0-100) and detailed feedback on what's working and what needs improvement.",
        ],
      },
      {
        heading: "Photo Quality Analysis",
        body: [
          "Technical scoring includes: Focus sharpness on eyes (35% weight), Lighting (key light, fill, shadows, catch lights), Framing (rule of thirds, headroom, lead room), Sharpness (focus on eyes, depth of field), Background noise (distracting elements, busy backgrounds), and Face visibility (clarity, angle, expression).",
          "Output includes: Quality score 0–100, Top 5 specific improvements ('Move 30cm left for better light angle'), and Auto-checklist before submission ('Is your headshot industry-standard?').",
          "Rubric options: Standard casting rubric, Editorial rubric, Commercial rubric, and Pageant headshot rubric. Each has different weighting on criteria.",
          "Auto-crop guides: AI suggests crop ratios for different use cases (square for Instagram, 2:3 for casting submissions, 4:5 for portfolio).",
          "Plan tiers: Free (rules-first scoring + basic checklist), Pro (AI coaching tips with specific improvement suggestions), Enterprise (deeper analysis with retake checklist).",
        ],
      },
      {
        heading: "Video Quality Analysis",
        body: [
          "Video analysis scores: Audio clarity (background noise, mic quality, echo), Lighting consistency (does it vary across the clip?), Stability (shaking, handheld drift), Pacing (too fast/slow for the format), and Composition (framing changes, head-room).",
          "Depth levels: Pro tier uses sampled analysis (key frames + audio sample). Enterprise tier uses deeper analysis with timestamp-level notes at every major quality drop.",
          "Output includes: Quality score 0–100 per dimension + overall, Timestamped fix points ('at 0:23 — lighting drops significantly'), and Retake checklist.",
          "Supported formats: MP4, MOV, AVI, WebM. Max duration per plan — Free: 60s, Pro: 5 min, Enterprise: unlimited.",
          "For walk videos: Stride analysis, Posture scoring, Turn technique evaluation, Overall runway presence rating.",
          "For slate videos: Clarity of name pronunciation, Eye contact with camera, Energy level appropriateness, Background professionalism.",
        ],
      },
      {
        heading: "Auto-Tagging and Metadata",
        body: [
          "Media Lab detects and auto-tags: Media type (headshot, full-body, runway walk, slate, monologue, editorial, commercial, behind-the-scenes), Skills shown (dance, accent, sport, specific style), and Style tags (editorial, commercial, traditional, modern, fitness, beauty).",
          "Tags make portfolio items searchable within the agency's casting tool. Casting coordinators filter by tag to build shortlists instantly.",
          "Tenant control: Agency admin controls which tag groups are active, Can add custom tags, Can disable auto-tagging entirely for privacy.",
          "Opt-out: Talent can disable auto-tagging per media item or globally. Already-applied tags are removed within 24 hours of opt-out.",
        ],
      },
      {
        heading: "Rights Management and Licensing",
        body: [
          "Media Lab tracks rights metadata per item: Ownership (talent, agency, brand), Permitted usage (platform display only, casting submissions, social publishing, commercial use), Expiry date (auto-unpublished when reached), and Download allowed (yes/no per surface).",
          "Watermark options: Visible watermark (agency branding overlay — configurable position and opacity), and Invisible fingerprint (steganographic — detectable in forensic analysis without visible distortion).",
          "Compliance checks: Prohibited content detection (runs on every uploaded item), Missing consent flags (automatically raised for minors if guardian has not confirmed consent), and Brand safety score (0–100, AI-computed, not public).",
          "Do-not-train flags: Talent can mark any media item as excluded from AI model training — platform-wide and per-item. This is a hard exclusion: flagged items are never used in model fine-tuning.",
        ],
      },
      {
        heading: "Versioning & Audit Trail",
        body: [
          "Every AI edit creates a new version. Original media is always preserved. Version 1 = original. Each subsequent AI action (crop, tag, score, coaching note applied) creates Version N.",
          "Revert and Compare: Talent can revert to any previous version. Side-by-side Compare view shows diff between versions.",
          "Audit log: Per-item log of every action — who changed it, what changed, which AI model produced the recommendation, why (model reasoning saved).",
          "Why this matters: If a talent disputes an AI-suggested change that hurt their profile, they can trace exactly what happened and revert. Platform is accountable.",
        ],
      },
    ],
  },
  {
    slug: "ai-studio-audition-coach-complete-guide",
    title: "AI Studio Audition Coach: The complete guide to role-ready performance",
    excerpt:
      "Master the Audition Coach — role-based practice, self-tape feedback, Q&A preparation, and rehearsal plans that get you shortlisted.",
    category: "AI Studio",
    author: "Rohit Kapoor",
    role: "Acting Coach & AI Product",
    date: "March 18, 2026",
    readTime: "13 min read",
    accent: "#10b981",
    coverType: "image",
    coverSrc: "/images/ai-audition-coach.jpg",
    sections: [
      {
        heading: "What Audition Coach Does",
        body: [
          "Audition Coach is an AI-powered rehearsal and feedback system that helps talent prepare for castings, auditions, and pageant interviews with personalised, actionable guidance.",
          "It combines role-based practice scenarios, self-tape analysis, Q&A preparation, and structured rehearsal plans — all tailored to your specific goals and current skill level.",
          "Unlike generic acting classes, Audition Coach analyses your actual performance and provides timestamped, specific feedback on what to improve.",
        ],
      },
      {
        heading: "Role-Based Practice Drills",
        body: [
          "Talent selects a specific casting or pageant round. AI pulls the actual criteria, expected format, time constraints, and category requirements from the listing.",
          "AI generates: Likely audition questions for this role type, Character prompts for acting scenarios, Improv scenarios (react to this situation), Runway walk tips per specific category (commercial vs editorial vs haute couture), and Pageant Q&A drills with topic coverage.",
          "Drill options include: Categories (acting / modelling / pageant / interview), Difficulty (beginner / intermediate / advanced), Timer (on/off with configurable duration), and Feedback tone (encouraging / direct / tough — talent preference).",
          "Free tier: Standard drill library. Pro: Linked to live casting criteria. Enterprise: Custom rubric integration.",
        ],
      },
      {
        heading: "Self-Tape Coach (Interactive)",
        body: [
          "Talent uploads a self-tape video → AI pipeline runs: ASR transcription → timestamp-level analysis → multi-dimensional feedback generation → rehearsal plan creation.",
          "Feedback dimensions scored: Pacing (words per minute, pause patterns), Clarity & diction (pronunciation, articulation, accent), Energy & presence (vocal variation, enthusiasm markers), Eyeline & framing (are they looking at camera? Is framing correct?), and 'Moment markers' (timestamped: '0:23 — strongest moment', '1:45 — energy dips here').",
          "Output includes: Feedback report with scores per dimension, Redo suggestions: 'Reshoot the section from 0:45 with these 3 changes,' and Short rehearsal plan (what to practice before the reshoot).",
          "Pipeline states: DRAFT → ESTIMATING → QUOTA_RESERVED → POLICY_CHECK → ASR_RUNNING → TRANSCRIPT_READY → ANALYSIS_RUNNING → FEEDBACK_GENERATION → SUCCEEDED → RECONCILED.",
          "Depth options: Low (faster, less detailed), Medium (standard), High (deep — Enterprise). Provider choice for feedback text generation: Pro+ gets to choose Gemini vs OpenAI.",
          "Export: Coach notes exportable as PDF. Share with agent / mentor for review.",
          "Plans: Free tier not available. Pro: Add-on (addon.selftape.minutes_60 or addon.selftape.minutes_180). Enterprise: Included with high-depth option.",
        ],
      },
      {
        heading: "Interview & Q&A Coach (Pageant-Ready)",
        body: [
          "Mock interviews: Timed mock interview sessions. AI plays the interviewer. Talent responds and AI evaluates.",
          "Answer structure training: STAR framework (Situation, Task, Action, Result) for experience questions. PREP framework (Point, Reason, Example, Point) for opinion questions. AI coaches talent to structure answers clearly.",
          "Bias-safe prompts: Question bank designed to avoid discriminatory topics. Focuses on character, ambition, social awareness, and talent-specific knowledge.",
          "Scoring: Confidence score (based on sentence structure, answer completeness), Conciseness score (did they pad unnecessarily?), and Social impact scoring (for pageant Q&A: does the answer demonstrate awareness?).",
          "'Best answer variations': AI generates 3 versions of the same answer — formal, witty, emotional. Talent sees all three and decides which fits their personality and the specific pageant's tone.",
        ],
      },
      {
        heading: "Practice Plans & Goal Tracking",
        body: [
          "Duration options: 7-day plan, 14-day plan, 30-day plan. Each customised to the talent's current skill gaps and target opportunity.",
          "Daily structure: Each day has one drill session, one self-reflection prompt, one portfolio task ('upload your updated walk video today'), and one optional extra.",
          "Auto reminders: Automation sends daily reminder via push/email at the talent's configured time. Can pause or skip days.",
          "Weekly progress report: Every Sunday — summary of sessions completed, score improvements, next week's focus areas. Shared with talent and optionally with their agent.",
          "Goal tracking: Set target — 'I want to improve my shortlist rate from 12% to 25% in 30 days.' Progress tracked against goal each week.",
        ],
      },
      {
        heading: "Plan Tiers & Credits",
        body: [
          "Free tier: 3 practice scenarios per month, Basic self-tape analysis (technical only), Generic Q&A questions without personalised feedback.",
          "Pro tier: Unlimited practice scenarios, Full self-tape analysis (technical + performance), Personalised Q&A coaching with answer templates, 10 rehearsal plans per month.",
          "Enterprise tier: Custom scenario generation from actual casting briefs, Priority analysis queue (results in 2 minutes vs 15 minutes), Coach dashboard for agencies to review talent preparation progress.",
        ],
      },
    ],
  },
  {
    slug: "ai-studio-application-assistant-scam-protection",
    title: "AI Studio Application Assistant: Apply smarter, stay protected",
    excerpt:
      "How the Application Assistant checks your readiness, builds smart answers, optimises submissions, and protects you from casting scams.",
    category: "AI Studio",
    author: "Meera Iyer",
    role: "Trust & Safety Product Lead",
    date: "March 17, 2026",
    readTime: "10 min read",
    accent: "#06b6d4",
    coverType: "image",
    coverSrc: "/images/ai-application-assistant.jpg",
    sections: [
      {
        heading: "What Application Assistant Does",
        body: [
          "Application Assistant is an AI-powered submission coach that helps talent maximise their chances on every casting and opportunity they apply to.",
          "It analyses readiness, builds proof-backed answers, optimises the submission package, and protects talent from suspicious or fraudulent castings.",
          "The platform can be configured by the tenant (agency) via rule packs so different casting types can enforce different readiness rubrics.",
        ],
      },
      {
        heading: "7.1 Match Readiness Check",
        body: [
          "On any open casting page, talent can ask: 'How ready am I for this role?' AI compares the talent's current profile against the casting's requirements.",
          "Output includes: Eligibility status (PASS / FAIL for hard requirements like height, age, gender), Missing requirements (exact list of missing media, documents, or verification), and Predicted competitiveness band (Low / Medium / High) with bounded, explainable reasons.",
          "Example explanation: 'You are High because your walk credits match 4 of 5 criteria.'",
          "Top 5 actions are suggested to improve the score before applying (e.g., upload a runway walk video, verify measurements, add required documents).",
          "Explain mode breaks down each score component in plain language. Explain mode requires Pro+.",
        ],
      },
      {
        heading: "7.2 Smart Answer Builder",
        body: [
          "For each custom question in a casting application form, AI drafts an answer based on the talent's verified profile facts, career credits, and previous answers.",
          "Facts-only mode: AI never invents. Every claim in the answer has a matching verified profile fact as its source. Unverified claims are flagged so the talent can add proof.",
          "Tone selector: Professional / Conversational / Bold / Humble — talent picks the tone; AI adapts.",
          "Length selector: Brief (1–2 sentences) / Standard (1 paragraph) / Detailed (2–3 paragraphs).",
          "Variants: 1 variant on Free. 3 variants on Pro+ so talent can choose the best framing or edit before submitting.",
          "Proof-backed suggestions: AI prompts evidence additions like 'You claim 5 years of runway experience — add a link to your verified credits page to strengthen this answer.'",
        ],
      },
      {
        heading: "7.3 Risk & Scam Protection",
        body: [
          "Scam detection flags suspicious castings using risk signals: unusual payment demands (talent should never pay for a legitimate casting), missing organiser verification badge, abnormal contract clause language (when contract text is accessible), and pressure tactics (deadline under 24h for a major commitment).",
          "What talent sees: A warning banner on suspicious castings — 'This casting has 2 risk signals — review before applying' — with an expandable explanation of each signal.",
          "Safe Apply Mode: When enabled, the talent's direct contact info (phone, email) is anonymised in the submission and only shared after the talent is officially shortlisted and has accepted.",
          "Why it matters: The talent industry — especially in India — has a documented problem with fake castings. This feature is a genuine safety differentiator that builds platform trust.",
        ],
      },
      {
        heading: "7.4 Submission Optimizer",
        body: [
          "For a specific casting, AI reorders the talent's portfolio items to lead with the most relevant media for this role type and brand.",
          "Submission playlist output is a ranked list, for example: 'Item 1: Commercial headshot (most relevant for this FMCG casting). Item 2: Brand video (shows on-camera comfort). Item 3: Stats card (for influencer casting). Item 4: Full-body editorial (backup credibility).'",
          "File format validation checks file sizes, formats, and naming conventions against the casting's stated requirements and flags mismatches before submission.",
          "Keyword match compares the talent's skill tags and credits against keywords in the casting brief and highlights gaps: 'Brief mentions Bollywood experience — you have this as a credit but it is not tagged on your media items.'",
        ],
      },
    ],
  },
  {
    slug: "ai-studio-brand-kit-creator-monetization",
    title: "AI Studio Brand Kit: Build your creator brand and monetise",
    excerpt:
      "Complete guide to Brand Kit — brand identity builder, UGC toolkit, outreach templates, and everything creators need for professional brand partnerships.",
    category: "AI Studio",
    author: "Neha Sharma",
    role: "Creator Economy Lead",
    date: "March 16, 2026",
    readTime: "12 min read",
    accent: "#f97316",
    coverType: "image",
    coverSrc: "/images/ai-brand-kit.jpg",
    sections: [
      {
        heading: "What Brand Kit Does",
        body: [
          "Brand Kit treats talent as a product — helping them define, articulate, and market their personal brand to agencies, clients, and followers.",
          "It is most valuable for influencers and content creators but applies to all talent types who want to attract brand partnerships.",
          "Brand Kit combines two core modules: Brand Identity Builder (positioning + voice + outreach) and the Social / UGC Toolkit (brief-to-content execution with compliance checks).",
        ],
      },
      {
        heading: "8.1 Brand Identity Builder",
        body: [
          "Niche and persona definition: AI suggests niche tags based on portfolio analysis. Example: 'You appear strongest in: fitness/wellness, athleisure editorial, outdoor lifestyle content.' Talent confirms or adjusts.",
          "Brand-safe categories: Identifies brand categories the talent is compatible with — and which they should avoid for brand safety or conflict-of-interest reasons.",
          "Style guide words: AI generates a vocabulary palette (3–5 adjectives) that captures the talent's aesthetic. This becomes the style anchor for future AI-generated copy.",
          "Tagline generation: AI generates 5 tagline options. Talent selects or edits. Example: 'Priya Kapoor — Contemporary Elegance. Always.'",
          "Intro scripts: 30-second intro, 60-second intro, and 2-minute brand story — for different contexts (Instagram DM, casting call, brand pitch deck).",
          "Outreach templates: AI drafts brand outreach messages for cold outreach, responding to a brief, and follow-up after no reply. Tone matches the talent's brand voice.",
        ],
      },
      {
        heading: "8.2 Social / UGC Toolkit",
        body: [
          "UGC script generator: Brief-to-script pipeline — talent uploads a brand brief and AI generates a shooting script including hook line (first 3 seconds), key message, product moment, CTA, and outro.",
          "Shot list generator: Visual shot breakdown (wide shot, close-up, detail shot, reaction shot) plus B-roll suggestions. Formatted for sharing with a smartphone or a production crew.",
          "Caption and hook suggestions: 5 caption variants per content piece, 5 hook options for maximum scroll-stop, plus hashtag suggestions (trending + niche + brand-specific).",
          "Brand safety checker: Checks draft script/caption against the tenant's brand safety rules. Flags competitor mentions, prohibited keywords, and missing disclosure language (#ad / #sponsored).",
          "ASCI disclosure compliance: Auto-suggests correct disclosure format per platform (e.g., '#ad' for Twitter/X, 'Paid partnership with [Brand]' for Instagram, 'Sponsored' tag for YouTube).",
        ],
      },
    ],
  },
  {
    slug: "ai-studio-media-generation-create-edit-enhance",
    title: "AI Studio Media Generation: Create, edit, and enhance content",
    excerpt:
      "Guide to AI-powered image generation, editing tools, and video creation — the future of talent content production.",
    category: "AI Studio",
    author: "Vikram Rao",
    role: "Generative AI Lead",
    date: "March 15, 2026",
    readTime: "10 min read",
    accent: "#a855f7",
    coverType: "image",
    coverSrc: "/images/ai-media-generation.jpg",
    sections: [
      {
        heading: "What Media Generation Does",
        body: [
          "Media Generation is an AI-powered content creation suite that generates new images, edits existing photos, and creates video content from text prompts or reference materials.",
          "It includes three core tools: AI Image Generation (create new images from text descriptions), AI Image Editing (modify existing photos with inpainting, background replacement, style transfer), and AI Video Generation (create short video clips from text or image prompts).",
          "All outputs are tagged as AI-generated in metadata. Talent must disclose AI-generated content when submitting to castings — platform helps with disclosure compliance.",
        ],
      },
      {
        heading: "AI Image Generation",
        body: [
          "Text-to-image creation for: Concept portfolio shots (before investing in professional shoot), Background variations (test different settings), Style exploration (see yourself in different aesthetics), and Mood board creation for creative discussions.",
          "Safety guardrails: No generation of deceptive content (fake credentials, fabricated scenarios), Watermarking on all generated images, Metadata tagging for AI detection, and Usage restriction to portfolio/concept only — not for final casting submissions without disclosure.",
          "Quality tiers: Fast generation (Gemini Flash-Lite, Free tier), Standard quality (Gemini Flash, Pro tier), Premium quality (GPT-5 DALL-E, Enterprise tier with add-on credits).",
        ],
      },
      {
        heading: "AI Image Editing",
        body: [
          "Inpainting tools: Remove unwanted objects from background, Smooth skin imperfections (subtle, not overdone), Clothing adjustments (fix wardrobe malfunctions), and Hair flyaway cleanup.",
          "Background replacement: Studio backdrop to solid colour, Location change (test different settings), Season/weather variation (same outfit, different backdrop), and Brand colour coordination for commercial castings.",
          "Style transfer: Convert photo to editorial style, Apply film emulation (Kodak, Fujifilm looks), Black and white conversion with artistic control, and Vintage/retro aesthetic application.",
        ],
      },
      {
        heading: "AI Video Generation",
        body: [
          "Text-to-video for: Slate video alternatives (AI-generated intro with consistent energy), Showreel fillers (B-roll footage when you lack content), and Social media content (platform-native short videos).",
          "Image-to-video animation: Bring still photos to life with subtle motion, Create looping content for social profiles, and Generate variations from successful static posts.",
          "Video editing assistance: Auto-cut long takes to highlight reels, Suggest optimal clip order for maximum impact, and Add music that matches emotional tone.",
        ],
      },
      {
        heading: "Credit System & Plan Tiers",
        body: [
          "Media generation uses pack-based credits, not included in base subscription: Image generation pack: 100 generations for ₹299, Image editing pack: 50 edits for ₹199, Video generation pack: 20 clips for ₹499.",
          "Quality affects credit cost: Standard quality = 1x credits, Premium quality = 3x credits per generation.",
          "Free tier: No media generation included. Can preview watermarked low-res samples only. Must purchase credits to export usable content.",
          "Enterprise tenants can negotiate bulk credit packages and custom model fine-tuning for consistent brand aesthetic across all talent content.",
        ],
      },
      {
        heading: "Usage Guidelines & Ethics",
        body: [
          "Required disclosures: Always disclose AI-generated content in casting applications, Label AI-edited images if modifications are substantial (background replacement, significant retouching), Use AI as concepting tool, not final submission without disclosure.",
          "Prohibited uses: Creating deceptive credentials (fake magazine covers, fabricated brand logos), Generating inappropriate content, Misrepresenting physical appearance (AI body modification), and Impersonating other talent.",
          "Best practices: Use AI for concept exploration and mood boards, Invest in professional photography for final portfolio shots, Disclose AI assistance transparently with agencies, and Keep original, unedited photos for comparison and casting verification.",
        ],
      },
    ],
  },
];

export function getFeaturedPost() {
  return blogPosts.find((post) => post.featured) ?? blogPosts[0];
}

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getPostsByCategory(category: BlogCategory) {
  return blogPosts.filter((post) => post.category === category);
}
