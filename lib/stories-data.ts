export type StoryDetail = {
  slug: string
  agency: string
  industry: string
  headline: string
  date: string
  image: string
  gradient: string
  person: string
  role: string
  region: string
  products: string[]
  metrics: { value: string; label: string }[]
  executive: string[]
  challenge: { title: string; paragraphs: string[] }
  solution: { title: string; paragraphs: string[] }
  results: { title: string; paragraphs: string[] }
  quote: { text: string; person: string; role: string }
  moreDetails: { label: string; value: string }[]
}

export const storyDetails: Record<string, StoryDetail> = {

  "elite-models-india": {
    slug: "elite-models-india",
    agency: "Elite Models India",
    industry: "Modeling Agency",
    headline: "Elite Models India scales to 500+ model roster with 3x faster onboarding using TalentOS",
    date: "March 15, 2026",
    image: "/customer-stories/modeling-agency.jpg",
    gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a78bfa 100%)",
    person: "Priya Sharma",
    role: "Founder & CEO",
    region: "Mumbai, India",
    products: ["Talent CRM", "AI Studio", "Escrow & Payments"],
    metrics: [
      { value: "3x", label: "Faster Onboarding" },
      { value: "60%", label: "Cost Reduction" },
      { value: "500+", label: "Models Managed" },
      { value: "< 3 min", label: "Avg Setup Time" },
    ],
    executive: [
      "Elite Models India, one of the country's leading modeling agencies, needed a scalable platform to manage their rapidly growing roster of 500+ models across Mumbai, Delhi, and Bangalore.",
      "By deploying TalentOS with the Talent CRM, AI Studio, and Escrow & Payments modules, the agency reduced onboarding time by 3x and cut operational costs by 60%.",
      "The AI-powered comp card generator and smart matching features transformed how they connect talent with brand opportunities, while escrow-backed payments eliminated payment disputes entirely.",
    ],
    challenge: {
      title: "The Challenge",
      paragraphs: [
        "Elite Models India was managing 500+ models across three cities using a combination of spreadsheets, WhatsApp groups, and a basic CRM that wasn't built for the talent industry. Onboarding a new model took 2-3 days of manual data entry, photo collection, and portfolio formatting.",
        "Booking coordination was chaotic — the team spent hours matching models to casting calls manually, often missing opportunities due to outdated availability information. Payment disputes with brands were becoming a recurring problem, with talent sometimes waiting weeks for their earnings.",
        "\"We were losing models to competing agencies simply because we couldn't process them fast enough,\" says Priya Sharma, Founder & CEO. \"A model would sign with us, and by the time we had their portfolio ready, they'd already lost interest.\"",
      ],
    },
    solution: {
      title: "The Solution",
      paragraphs: [
        "Elite Models India deployed TalentOS with the B1 (Roster + Booking) blueprint, which pre-configured their workspace with talent management, booking calendar, and commission tracking modules.",
        "The Talent CRM allowed the team to onboard models in under 3 minutes — talents could self-register through the agency's white-label portal, upload their photos, and have AI Studio automatically generate professional comp cards and enhanced portfolio images.",
        "Smart Matching transformed their casting process. When a brand brief came in, the AI system recommended the top 10 matching models based on physical stats, experience, availability, and historical booking success — reducing the shortlisting process from hours to minutes.",
        "The Escrow & Payments module eliminated payment disputes entirely. Every booking payment was locked in escrow upfront, with automatic commission splits (70% talent, 20% agency, 5% platform, 5% tax) triggered upon deliverable approval.",
      ],
    },
    results: {
      title: "The Results",
      paragraphs: [
        "Within 90 days of deploying TalentOS, Elite Models India achieved transformative results across their operations:",
        "Model onboarding time dropped from 2-3 days to under 3 minutes. The self-registration portal with AI-powered portfolio generation meant models could go from signup to bookable in a single session.",
        "Operational costs decreased by 60% as manual tasks — portfolio formatting, comp card design, availability tracking, payment processing — were automated. The team was able to manage 500+ models with the same headcount that previously handled 150.",
        "Payment disputes dropped to zero. With escrow-backed payments and transparent commission splits visible to all parties before booking confirmation, trust between the agency, models, and brands increased significantly.",
        "The agency expanded from Mumbai to Delhi and Bangalore within 6 months, using TalentOS's multi-branch workspace support to manage regional operations from a single dashboard.",
      ],
    },
    quote: {
      text: "TalentOS transformed how we manage our roster of 500+ models. What used to take days now happens in minutes. The escrow system alone saved us from three payment disputes in the first month.",
      person: "Priya Sharma",
      role: "Founder & CEO, Elite Models India",
    },
    moreDetails: [
      { label: "Industry", value: "Modeling & Talent Management" },
      { label: "Organization Size", value: "85 employees" },
      { label: "Region", value: "India (Mumbai, Delhi, Bangalore)" },
      { label: "Products Used", value: "Talent CRM, AI Studio, Escrow & Payments, White-Label" },
      { label: "Blueprint", value: "B1 — Roster + Booking" },
      { label: "Deployment Time", value: "2 days" },
    ],
  },

  "crown-pageants": {
    slug: "crown-pageants",
    agency: "Crown Pageants International",
    industry: "Pageant Organizer",
    headline: "Crown Pageants eliminates scoring disputes and reduces admin overhead by 75% with TalentOS Pageant Engine",
    date: "February 28, 2026",
    image: "/customer-stories/pageant-organizer.jpg",
    gradient: "linear-gradient(135deg, #d97706 0%, #f59e0b 50%, #fbbf24 100%)",
    person: "Rahul Kapoor",
    role: "Director of Operations",
    region: "New Delhi, India",
    products: ["Pageant Engine", "Escrow & Payments"],
    metrics: [
      { value: "75%", label: "Less Admin Work" },
      { value: "2,000+", label: "Contestants" },
      { value: "0", label: "Scoring Disputes" },
      { value: "15", label: "Regional Rounds" },
    ],
    executive: [
      "Crown Pageants International manages 15 regional rounds across India with 2,000+ contestants per season, requiring transparent scoring and rigorous sponsor management.",
      "Using TalentOS Pageant Engine, they replaced manual spreadsheets with blind scoring, judge normalization, and multi-approver result publishing — eliminating scoring disputes completely.",
      "Admin overhead dropped by 75% as contestant registration, stage progression, sponsor integration, and payment collection were fully automated through the Process Builder.",
    ],
    challenge: {
      title: "The Challenge",
      paragraphs: [
        "Crown Pageants managed 2,000+ contestants across 15 regional rounds using Excel spreadsheets and email. Scoring was done on paper, manually entered into spreadsheets, and results were calculated by hand — a process that took 3-4 hours after each round.",
        "Scoring disputes were a constant headache. Contestants and their families questioned results regularly, and the lack of a verifiable audit trail made it impossible to prove fairness. Three sponsors pulled out in a single season citing transparency concerns.",
        "Stage management was equally painful — tracking which contestants advanced, collecting registration fees per round, coordinating judge schedules, and managing sponsor-branded stages required a team of 12 coordinators working around the clock.",
      ],
    },
    solution: {
      title: "The Solution",
      paragraphs: [
        "Crown Pageants deployed TalentOS with the B3 (Season/Competition) blueprint, configuring a custom pageant process with 6 stages: Registration, Digital Audition, Physical Audition, Grooming, Semi-Finals, and Finals.",
        "The Scoring Engine was configured with weighted criteria (Appearance 30%, Talent 25%, Interview 20%, Walk 25%), blind scoring (judges see contestant numbers only), and automatic normalization across judges.",
        "The Process Builder automated contestant progression — if a contestant scored below 6.0, they were automatically eliminated. Guardian consent was auto-required for contestants under 18. Sponsor rounds were gated with brand approval workflows.",
        "Result publishing required dual approval from the Pageant Director and an independent auditor, with all scores cryptographically signed and stored in an append-only ledger.",
      ],
    },
    results: {
      title: "The Results",
      paragraphs: [
        "The first season on TalentOS was transformative. Scoring disputes dropped to zero — contestants could see the exact criteria, weights, and anonymized scoring breakdowns after each round.",
        "Admin overhead decreased by 75%. The 12-person coordinator team was reduced to 4, handling the same 15 regional rounds. Registration fees were collected automatically, judge schedules managed digitally, and stage progression handled by the system.",
        "Three new sponsors signed up specifically because of the transparent, auditable scoring system. Sponsor ROI reports — automatically generated after each stage — gave brands the accountability they needed.",
        "The reusable template feature allowed Crown Pageants to clone their entire process for a new franchise market in under 30 minutes.",
      ],
    },
    quote: {
      text: "The blind scoring system and multi-approver result publishing gave us the credibility we needed with sponsors. We went from losing sponsors to gaining new ones — all because of transparency.",
      person: "Rahul Kapoor",
      role: "Director of Operations, Crown Pageants International",
    },
    moreDetails: [
      { label: "Industry", value: "Pageant & Events" },
      { label: "Organization Size", value: "45 employees" },
      { label: "Region", value: "India (15 cities)" },
      { label: "Products Used", value: "Pageant Engine, Escrow & Payments, Process Builder" },
      { label: "Blueprint", value: "B3 — Season/Competition" },
      { label: "Deployment Time", value: "5 days" },
    ],
  },

  "viralreach-agency": {
    slug: "viralreach-agency",
    agency: "ViralReach Agency",
    industry: "Influencer Agency",
    headline: "ViralReach cuts campaign setup time by 80% and improves brand satisfaction with AI-powered workflows",
    date: "February 10, 2026",
    image: "/customer-stories/influencer-agency.jpg",
    gradient: "linear-gradient(135deg, #ec4899 0%, #f472b6 50%, #f9a8d4 100%)",
    person: "Ananya Desai",
    role: "Head of Partnerships",
    region: "Bangalore, India",
    products: ["AI Studio", "Talent CRM", "Contracts & E-Sign"],
    metrics: [
      { value: "80%", label: "Faster Setup" },
      { value: "45%", label: "Better Satisfaction" },
      { value: "200+", label: "Campaigns" },
      { value: "20 hrs", label: "Saved Per Week" },
    ],
    executive: [
      "ViralReach Agency manages 200+ influencer campaigns per year for major consumer brands, requiring rapid media kit generation, deliverable tracking, and real-time reporting.",
      "By deploying TalentOS AI Studio and Contracts modules, they reduced campaign setup time by 80% and improved brand satisfaction scores by 45%.",
      "The AI-powered media kit generator saves 20 hours per week, while automated contract generation with e-signatures eliminated 3-day turnaround times for brand agreements.",
    ],
    challenge: {
      title: "The Challenge",
      paragraphs: [
        "ViralReach was managing 200+ influencer campaigns using a combination of Google Sheets, Canva for media kits, and DocuSign for contracts. Each campaign required 4-6 hours of setup time — creating media kits for shortlisted influencers, drafting contracts, and configuring deliverable tracking.",
        "Brands demanded real-time campaign dashboards showing deliverable status, engagement metrics, and ROI — but the team was spending more time building reports than running campaigns.",
        "Contract turnaround was a bottleneck. Each brand partnership required a custom contract with specific deliverable clauses, usage rights, and payment terms. The legal review and e-signature process took 3-5 business days.",
      ],
    },
    solution: {
      title: "The Solution",
      paragraphs: [
        "ViralReach deployed TalentOS with the B4 (Brand Deals + Deliverables) blueprint, pre-configured for influencer campaign management.",
        "AI Studio's media kit generator transformed their workflow — it auto-generated professional media kits from influencer profiles in seconds, pulling follower counts, engagement rates, past brand collaborations, and portfolio content into polished, branded documents.",
        "The Contracts module provided pre-built influencer agreement templates with dynamic clauses for content deliverables, usage rights, exclusivity periods, and payment milestones. Contracts went from 3-day turnaround to same-day execution with integrated e-signatures.",
        "Real-time campaign dashboards — auto-populated from deliverable submissions and payment milestones — gave brands the transparency they'd been requesting, without any manual reporting work from the ViralReach team.",
      ],
    },
    results: {
      title: "The Results",
      paragraphs: [
        "Campaign setup time dropped from 4-6 hours to under 45 minutes — an 80% reduction. Media kits, contracts, and deliverable tracking were configured simultaneously through the campaign creation wizard.",
        "Brand satisfaction scores improved by 45%, directly attributed to real-time dashboards and faster contract execution. Three brands expanded their annual commitments by 2x.",
        "The team saved 20 hours per week on media kit generation alone. That time was redirected to strategic partnership development, resulting in 15 new brand partnerships in Q1.",
        "Payment collection improved dramatically — milestone-based escrow meant influencers were paid within 24 hours of deliverable approval, up from the previous 2-3 week cycle.",
      ],
    },
    quote: {
      text: "AI Studio's media kit generator alone saved us 20 hours per week. Our brands now get real-time campaign dashboards instead of stale weekly reports. It's transformed how we operate.",
      person: "Ananya Desai",
      role: "Head of Partnerships, ViralReach Agency",
    },
    moreDetails: [
      { label: "Industry", value: "Influencer Management" },
      { label: "Organization Size", value: "28 employees" },
      { label: "Region", value: "India (Bangalore)" },
      { label: "Products Used", value: "AI Studio, Talent CRM, Contracts & E-Sign" },
      { label: "Blueprint", value: "B4 — Brand Deals + Deliverables" },
      { label: "Deployment Time", value: "3 days" },
    ],
  },

  "bookmytalent": {
    slug: "bookmytalent",
    agency: "BookMyTalent",
    industry: "Staffing & Events",
    headline: "BookMyTalent drops no-show rate from 12% to under 2% with automated staffing workflows on TalentOS",
    date: "January 22, 2026",
    image: "/customer-stories/staffing-events.jpg",
    gradient: "linear-gradient(135deg, #059669 0%, #10b981 50%, #34d399 100%)",
    person: "Vikram Singh",
    role: "Co-Founder",
    region: "Pune, India",
    products: ["Talent CRM", "Casting & Bookings", "Escrow & Payments"],
    metrics: [
      { value: "2%", label: "No-Show Rate" },
      { value: "₹8L+", label: "Saved Yearly" },
      { value: "100+", label: "Events/Month" },
      { value: "500+", label: "Staff Managed" },
    ],
    executive: [
      "BookMyTalent coordinates 100+ events per month across Pune and Mumbai, managing 500+ event staff with last-minute cancellations and schedule changes being a daily reality.",
      "TalentOS's availability calendar, automated backup assignment, and real-time shift management dropped the no-show rate from 12% to under 2%.",
      "The platform saved over ₹8 lakhs annually in rebooking costs and eliminated the manual coordination chaos that previously required 6 coordinators working around the clock.",
    ],
    challenge: {
      title: "The Challenge",
      paragraphs: [
        "BookMyTalent was coordinating 500+ event staff (hosts, models, brand ambassadors, promoters) across 100+ events monthly using WhatsApp and phone calls. The no-show rate was a painful 12% — meaning for every 100 staff booked, 12 wouldn't show up.",
        "Last-minute cancellations (often within 2-4 hours of the event) required frantic phone calls to find replacements. The rebooking cost — including emergency travel, premium rates, and client compensation — exceeded ₹8 lakhs per year.",
        "There was no centralized view of staff availability. Coordinators would accidentally double-book talent, leading to embarrassing situations at event venues. The team needed 6 full-time coordinators just to manage scheduling.",
      ],
    },
    solution: {
      title: "The Solution",
      paragraphs: [
        "BookMyTalent deployed TalentOS with the B7 (Shift/Staffing) blueprint, which pre-configured shift management, availability calendars, and automated backup assignment.",
        "Every staff member's calendar was digitized with real-time availability updates. The system prevented double-bookings automatically and enforced 2-hour travel buffers between events in different locations.",
        "The automated backup assignment system maintained a priority-ordered backup list for every event. When a staff member cancelled, the system automatically contacted the first available backup, confirmed their assignment, and updated the client — all within minutes.",
        "Escrow-backed payments with performance-based deductions incentivized attendance. Staff who completed events were paid within 24 hours; those with no-shows had it recorded on their reliability score.",
      ],
    },
    results: {
      title: "The Results",
      paragraphs: [
        "The no-show rate plummeted from 12% to under 2% within 60 days. The combination of automated reminders, backup assignment, and reliability scoring changed staff behavior dramatically.",
        "Rebooking costs dropped from ₹8+ lakhs annually to near zero. When cancellations did happen, the automated backup system filled the slot in under 15 minutes — compared to the previous 2-3 hour scramble.",
        "The coordinator team was reduced from 6 to 2, with the other 4 redeployed to business development. The company grew from 100 to 150+ events per month without adding headcount.",
        "Client satisfaction improved significantly — events started on time, with the right staff, every time. Three of their largest corporate clients extended their contracts for 2 additional years.",
      ],
    },
    quote: {
      text: "The availability calendar and auto-backup assignment changed everything. We went from 6 coordinators frantically making phone calls to 2 people calmly managing 150 events a month.",
      person: "Vikram Singh",
      role: "Co-Founder, BookMyTalent",
    },
    moreDetails: [
      { label: "Industry", value: "Event Staffing" },
      { label: "Organization Size", value: "65 employees" },
      { label: "Region", value: "India (Pune, Mumbai)" },
      { label: "Products Used", value: "Talent CRM, Casting & Bookings, Escrow & Payments" },
      { label: "Blueprint", value: "B7 — Shift/Staffing" },
      { label: "Deployment Time", value: "4 days" },
    ],
  },

  "lens-light-studios": {
    slug: "lens-light-studios",
    agency: "Lens & Light Studios",
    industry: "Photography Studio",
    headline: "Lens & Light Studios reduces asset delivery from 2 weeks to 3 days with Portfolio Studio",
    date: "January 8, 2026",
    image: "/customer-stories/photography-studio.jpg",
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #38bdf8 50%, #7dd3fc 100%)",
    person: "Meera Patel",
    role: "Studio Director",
    region: "Ahmedabad, India",
    products: ["Portfolio Studio", "Contracts & E-Sign", "AI Studio"],
    metrics: [
      { value: "3 days", label: "Delivery Time" },
      { value: "40%", label: "Satisfaction Up" },
      { value: "50+", label: "Photographers" },
      { value: "10K+", label: "Assets Managed" },
    ],
    executive: [
      "Lens & Light Studios coordinates 50+ freelance photographers across India, delivering portfolio shoots, commercial photography, and event coverage with tight client deadlines.",
      "TalentOS Portfolio Studio with automated watermarking and client galleries cut delivery time from 2 weeks to 3 days, while AI-powered photo enhancement improved output quality by 31%.",
      "Integrated contracts and escrow eliminated payment chasing — photographers are now paid within 48 hours of client gallery approval.",
    ],
    challenge: {
      title: "The Challenge",
      paragraphs: [
        "Lens & Light managed 50+ freelance photographers delivering thousands of images monthly. The delivery pipeline — from raw shoot to final client delivery — took 2 weeks on average, with bottlenecks at editing, watermarking, and client review stages.",
        "Asset management was chaotic. Photos lived across multiple Google Drives, Dropbox accounts, and local hard drives. Finding a specific image from a shoot 3 months ago could take hours.",
        "Payment collection from clients averaged 30-45 days, and paying photographers was a manual process involving invoices, bank transfers, and endless follow-ups.",
      ],
    },
    solution: {
      title: "The Solution",
      paragraphs: [
        "Portfolio Studio centralized all assets with automatic categorization, tagging, and watermarking. Photographers uploaded raw files directly, and the system processed web-optimized versions with agency watermarks automatically.",
        "AI Studio's photo enhancement feature handled basic color correction, skin retouching, and background cleanup — reducing the editing team's workload by 60%. Client galleries were generated with one click, complete with download permissions and usage tracking.",
        "Contracts with milestone-based escrow were auto-generated for every shoot. Payment was released automatically when the client approved the gallery, with photographer payouts processed within 48 hours.",
      ],
    },
    results: {
      title: "The Results",
      paragraphs: [
        "Delivery time dropped from 2 weeks to 3 days. The combination of automated processing, AI enhancement, and streamlined client review eliminated every bottleneck in the pipeline.",
        "Client satisfaction increased by 40%. Clients loved the professional gallery experience with instant downloads, and the consistent quality from AI enhancement made every shoot look polished.",
        "Photographer retention improved dramatically — the guaranteed 48-hour payment cycle made Lens & Light the preferred agency for freelance photographers in the region. They expanded their network from 50 to 80+ photographers.",
      ],
    },
    quote: {
      text: "Our photographers now deliver within 72 hours. The watermarking and client gallery features are game-changers. And getting paid in 48 hours? That's why every photographer wants to work with us.",
      person: "Meera Patel",
      role: "Studio Director, Lens & Light Studios",
    },
    moreDetails: [
      { label: "Industry", value: "Photography & Production" },
      { label: "Organization Size", value: "22 employees + 50 freelancers" },
      { label: "Region", value: "India (Ahmedabad)" },
      { label: "Products Used", value: "Portfolio Studio, Contracts & E-Sign, AI Studio" },
      { label: "Blueprint", value: "B6 — Project + Assets" },
      { label: "Deployment Time", value: "3 days" },
    ],
  },

  "gulf-talent-hub": {
    slug: "gulf-talent-hub",
    agency: "Gulf Talent Hub",
    industry: "Modeling Agency",
    headline: "Gulf Talent Hub launches white-label platform across 3 Middle East markets in under 2 weeks",
    date: "December 20, 2025",
    image: "/customer-stories/gulf-talent.jpg",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #8b5cf6 50%, #a78bfa 100%)",
    person: "Ahmed Al-Rashid",
    role: "Managing Director",
    region: "Dubai, UAE",
    products: ["Talent CRM", "Casting & Bookings", "Escrow & Payments"],
    metrics: [
      { value: "3", label: "Markets" },
      { value: "2 weeks", label: "Launch Time" },
      { value: "1,200+", label: "Talents" },
      { value: "100%", label: "Arabic Support" },
    ],
    executive: [
      "Gulf Talent Hub needed to launch branded talent platforms in UAE, Saudi Arabia, and Qatar simultaneously, each with Arabic language support and local payment integrations.",
      "TalentOS white-label deployment enabled all three markets to go live in under 2 weeks, with custom domains, branding, and region-specific configurations.",
      "The platform onboarded 1,200+ talents in the first month across all three markets, with centralized management from the Dubai headquarters.",
    ],
    challenge: {
      title: "The Challenge",
      paragraphs: [
        "Gulf Talent Hub was expanding from their Dubai base into Saudi Arabia and Qatar. Each market needed its own branded platform with Arabic language support, local payment processing (local bank transfers), and compliance with regional data regulations.",
        "Building custom platforms for each market would have taken 6+ months and significant investment. They needed a solution that could launch in weeks, not months.",
        "Centralized management was critical — the leadership team in Dubai needed visibility across all three markets from a single dashboard, while maintaining data isolation between regions.",
      ],
    },
    solution: {
      title: "The Solution",
      paragraphs: [
        "TalentOS white-label deployment allowed Gulf Talent Hub to create three separate tenant workspaces — each with its own custom domain, Arabic branding, and region-specific payment configuration.",
        "The platform's multi-tenant architecture provided complete data isolation between markets while giving the Dubai HQ a super-admin view across all three operations.",
        "Local payment integrations were configured per market, and the talent registration portal was fully translated to Arabic with RTL layout support.",
      ],
    },
    results: {
      title: "The Results",
      paragraphs: [
        "All three markets went live within 2 weeks of signing. The white-label setup — custom domains, branding, payment gateways — was completed by the TalentOS team with minimal involvement from Gulf Talent Hub's IT.",
        "1,200+ talents were onboarded in the first month through self-registration portals. The Arabic language support and familiar UX drove high adoption rates across all three markets.",
        "The centralized dashboard gave the Dubai team real-time visibility into operations across UAE, Saudi Arabia, and Qatar — enabling data-driven decisions about talent supply, booking demand, and market performance.",
      ],
    },
    quote: {
      text: "The white-label setup was incredibly fast. Each market got its own branded portal with full Arabic support. We launched in 3 countries in the time it would have taken us to write a spec document.",
      person: "Ahmed Al-Rashid",
      role: "Managing Director, Gulf Talent Hub",
    },
    moreDetails: [
      { label: "Industry", value: "Modeling & Talent Management" },
      { label: "Organization Size", value: "120 employees" },
      { label: "Region", value: "UAE, Saudi Arabia, Qatar" },
      { label: "Products Used", value: "Talent CRM, Casting & Bookings, White-Label, Escrow" },
      { label: "Blueprint", value: "B1 — Roster + Booking (×3 markets)" },
      { label: "Deployment Time", value: "12 days" },
    ],
  },

  "starmakers-academy": {
    slug: "starmakers-academy",
    agency: "StarMakers Academy",
    industry: "Academy & Training",
    headline: "StarMakers Academy digitizes grooming courses and certifications, training 5,000+ students in Year 1",
    date: "December 5, 2025",
    image: "/customer-stories/academy-training.jpg",
    gradient: "linear-gradient(135deg, #dc2626 0%, #ef4444 50%, #f87171 100%)",
    person: "Neha Gupta",
    role: "Founder",
    region: "Jaipur, India",
    products: ["Academy", "Talent CRM", "Escrow & Payments"],
    metrics: [
      { value: "5,000+", label: "Students" },
      { value: "15", label: "Cities" },
      { value: "92%", label: "Completion" },
      { value: "40+", label: "Courses" },
    ],
    executive: [
      "StarMakers Academy operated a single physical grooming and modeling academy in Jaipur. They wanted to scale nationally but couldn't afford to open physical locations in every city.",
      "TalentOS Academy module enabled them to launch a digital platform with 40+ video courses, live workshops, and professional certifications — reaching 15 cities and training 5,000+ students in Year 1.",
      "The 92% course completion rate — far above the 30% industry average for online courses — was driven by cohort-based learning, progress tracking, and certification incentives.",
    ],
    challenge: {
      title: "The Challenge",
      paragraphs: [
        "StarMakers Academy had built a strong reputation for grooming training in Jaipur, but their physical-only model limited growth. Opening academies in new cities required significant capital investment in real estate, equipment, and local faculty.",
        "They attempted to go digital using generic LMS platforms, but these tools weren't built for the talent industry. Course content around posture, runway walking, and camera presence required specialized video formats, practice assignments, and mentor feedback.",
        "Enrollment management, fee collection, and certification tracking were handled manually — limiting the academy to 200 students per cohort.",
      ],
    },
    solution: {
      title: "The Solution",
      paragraphs: [
        "The B5 (Course/Cohort) blueprint configured a complete digital academy with course builder, enrollment management, progress tracking, and certification engine.",
        "40+ courses were created across categories: Runway Training, Camera Confidence, Personal Grooming, Social Media Presence, Fitness for Models, Interview Skills, and Portfolio Building.",
        "The cohort-based model — with start dates, weekly deadlines, and peer groups — created accountability that drove completion rates far above industry averages.",
        "Certifications were automatically generated upon course completion, with verified digital badges that students could share on LinkedIn and their TalentOS profiles.",
      ],
    },
    results: {
      title: "The Results",
      paragraphs: [
        "StarMakers scaled from a single-city academy to a nationwide digital platform in 90 days, reaching students in 15 cities without any physical infrastructure investment.",
        "5,000+ students enrolled in Year 1, with a 92% completion rate — driven by the cohort model, progress tracking, and the value of industry-recognized certifications.",
        "Revenue grew 8x compared to the physical-only model. Digital courses had near-zero marginal cost per student, while premium live workshops commanded 3x the price of recorded content.",
        "The certifications became a hiring signal — agencies on TalentOS began preferentially booking talent with StarMakers certifications, creating a powerful flywheel between training and employment.",
      ],
    },
    quote: {
      text: "We went from a single-city physical academy to a nationwide digital platform. The certification engine is brilliant — agencies actually prefer hiring our graduates now.",
      person: "Neha Gupta",
      role: "Founder, StarMakers Academy",
    },
    moreDetails: [
      { label: "Industry", value: "Education & Training" },
      { label: "Organization Size", value: "18 employees" },
      { label: "Region", value: "India (15 cities)" },
      { label: "Products Used", value: "Academy, Talent CRM, Escrow & Payments" },
      { label: "Blueprint", value: "B5 — Course/Cohort" },
      { label: "Deployment Time", value: "7 days" },
    ],
  },

  "castright-productions": {
    slug: "castright-productions",
    agency: "CastRight Productions",
    industry: "Casting Bureau",
    headline: "CastRight Productions fills casting calls 4x faster with AI-powered talent matching and shortlisting",
    date: "November 18, 2025",
    image: "/customer-stories/casting-bureau.jpg",
    gradient: "linear-gradient(135deg, #0d9488 0%, #14b8a6 50%, #5eead4 100%)",
    person: "Arjun Mehta",
    role: "Head of Casting",
    region: "Mumbai, India",
    products: ["Casting & Bookings", "AI Studio", "Talent CRM"],
    metrics: [
      { value: "4x", label: "Faster Casting" },
      { value: "94%", label: "Match Accuracy" },
      { value: "300+", label: "Castings/Year" },
      { value: "3.2 hrs", label: "Saved Per Cast" },
    ],
    executive: [
      "CastRight Productions handles 300+ casting calls per year for major Bollywood productions, ad films, and web series — requiring rapid talent discovery, shortlisting, and scheduling.",
      "TalentOS Smart Matching and automated shortlisting reduced the casting process from 2 days to under 4 hours, with 94% accuracy on talent-role matching.",
      "The platform saves 3.2 hours per casting call by automating talent search, availability checks, and call sheet generation.",
    ],
    challenge: {
      title: "The Challenge",
      paragraphs: [
        "CastRight received 300+ casting briefs per year from production houses. Each brief required manually searching through databases, comparing physical stats, checking availability, and coordinating audition schedules — a process that took 1-2 full days per casting.",
        "The team maintained separate databases for different talent categories (actors, models, extras, voice artists), making cross-category casting especially painful.",
        "Availability conflicts were discovered late in the process — after shortlisting and client approval, the team would often find that 30-40% of selected talent was unavailable on the shoot dates, requiring a second round of searching.",
      ],
    },
    solution: {
      title: "The Solution",
      paragraphs: [
        "TalentOS B2 (Casting Pipeline) blueprint consolidated all talent categories into a single searchable database with real-time availability calendars.",
        "Smart Matching transformed the casting workflow. When a brief was entered — specifying role requirements (age, height, look, skills, language) — the AI recommended the top 20 matching talents, pre-filtered by availability on shoot dates.",
        "Automated call sheet generation pulled confirmed talent details, shoot location, timing, wardrobe requirements, and coordinator contact into professional documents — distributed to all parties with one click.",
      ],
    },
    results: {
      title: "The Results",
      paragraphs: [
        "Casting time dropped from 1-2 days to under 4 hours — a 4x improvement. Smart Matching eliminated the manual search-and-compare process entirely.",
        "Match accuracy reached 94% — measured by director satisfaction with recommended talent. The AI's consideration of historical booking success and client preferences produced surprisingly accurate recommendations.",
        "Availability conflicts dropped to near zero. By filtering for availability upfront, the team eliminated the frustrating cycle of shortlist-approve-discover-unavailable-repeat.",
        "The time savings of 3.2 hours per casting allowed the team to take on 40% more briefs without adding headcount.",
      ],
    },
    quote: {
      text: "Smart Matching recommends the right talent before we even finish writing the brief. It's like having an extra casting director who's seen every portfolio in our database.",
      person: "Arjun Mehta",
      role: "Head of Casting, CastRight Productions",
    },
    moreDetails: [
      { label: "Industry", value: "Casting & Production" },
      { label: "Organization Size", value: "8 employees" },
      { label: "Region", value: "India (Mumbai)" },
      { label: "Products Used", value: "Casting & Bookings, AI Studio, Talent CRM" },
      { label: "Blueprint", value: "B2 — Casting Pipeline" },
      { label: "Deployment Time", value: "2 days" },
    ],
  },
}

export const storySlugMap: Record<number, string> = {
  1: "elite-models-india",
  2: "crown-pageants",
  3: "viralreach-agency",
  4: "bookmytalent",
  5: "lens-light-studios",
  6: "gulf-talent-hub",
  7: "starmakers-academy",
  8: "castright-productions",
}

export function getStoryDetail(slug: string): StoryDetail | undefined {
  return storyDetails[slug]
}

export function getAllStorySlugs(): string[] {
  return Object.keys(storyDetails)
}
