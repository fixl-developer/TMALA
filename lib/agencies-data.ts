/**
 * Agency types content from research (blue.md).
 * Used across dropdown, hub, view-all, and individual agency pages.
 * No blueprint references in UI — for structure only.
 */

export type AgencyAccent =
  | "crimson"
  | "amber"
  | "violet"
  | "cyan"
  | "emerald"
  | "rose"
  | "indigo"
  | "orange"

export const AGENCY_ACCENTS: Record<
  AgencyAccent,
  { bg: string; text: string; border: string; shadow: string; label: string }
> = {
  crimson: {
    bg: "bg-red-600",
    text: "text-red-400",
    border: "border-red-400/40",
    shadow: "shadow-red-500/20",
    label: "bg-red-500/20 text-red-400 border-red-400/30",
  },
  amber: {
    bg: "bg-amber-500",
    text: "text-amber-400",
    border: "border-amber-400/40",
    shadow: "shadow-amber-500/20",
    label: "bg-amber-500/20 text-amber-400 border-amber-400/30",
  },
  violet: {
    bg: "bg-violet-500",
    text: "text-violet-400",
    border: "border-violet-400/40",
    shadow: "shadow-violet-500/20",
    label: "bg-violet-500/20 text-violet-400 border-violet-400/30",
  },
  cyan: {
    bg: "bg-cyan-500",
    text: "text-cyan-400",
    border: "border-cyan-400/40",
    shadow: "shadow-cyan-500/20",
    label: "bg-cyan-500/20 text-cyan-400 border-cyan-400/30",
  },
  emerald: {
    bg: "bg-emerald-500",
    text: "text-emerald-400",
    border: "border-emerald-400/40",
    shadow: "shadow-emerald-500/20",
    label: "bg-emerald-500/20 text-emerald-400 border-emerald-400/30",
  },
  rose: {
    bg: "bg-rose-500",
    text: "text-rose-400",
    border: "border-rose-400/40",
    shadow: "shadow-rose-500/20",
    label: "bg-rose-500/20 text-rose-400 border-rose-400/30",
  },
  indigo: {
    bg: "bg-indigo-500",
    text: "text-indigo-400",
    border: "border-indigo-400/40",
    shadow: "shadow-indigo-500/20",
    label: "bg-indigo-500/20 text-indigo-400 border-indigo-400/30",
  },
  orange: {
    bg: "bg-orange-500",
    text: "text-orange-400",
    border: "border-orange-400/40",
    shadow: "shadow-orange-500/20",
    label: "bg-orange-500/20 text-orange-400 border-orange-400/30",
  },
}

export interface AgencyPersona {
  title: string
  role: string
  email?: string
  lines: [string, string]
}

export interface AgencyStat {
  value: string
  label: string
}

export interface AgencyFeatureCard {
  title: string
  body: string
  tint?: string
}

export interface AgencyCTA {
  label: string
  href: string
  variant?: "primary" | "secondary" | "ghost"
}

export interface AgencyTrustedLogo {
  label: string
  accent: string
}

export interface AgencyType {
  slug: string
  name: string
  shortDescription: string
  modules: string[]
  roles: string[]
  accent: AgencyAccent
  image: string
  /** Optional rich-page content — when present, extra sections render on the agency page. */
  heroBadge?: string
  heroTagline?: string
  heroSubtitle?: string
  personas?: AgencyPersona[]
  stateMachines?: string[]
  stats?: AgencyStat[]
  featureCards?: AgencyFeatureCard[]
  ctas?: AgencyCTA[]
  trustedStudios?: AgencyTrustedLogo[]
}

export const AGENCY_TYPES: AgencyType[] = [
  {
    slug: "modeling",
    name: "Modeling Agency",
    shortDescription: "End-to-end management for professional model rosters and exclusive booking pipelines.",
    modules: [
      "Talent Roster Orchestration",
      "Executive Booking Pipeline",
      "Dynamic Availability Logic",
      "Institutional Usage Rights",
      "Secured Escrow Infra",
      "Resolution Engine",
    ],
    roles: [
      "Owner",
      "Admin",
      "Agent/Booker",
      "Talent Manager",
      "Talent",
      "Finance",
      "Legal",
      "Moderator (if community)",
    ],
    accent: "violet",
    image: "/modeling-agency.jpg",
  },
  {
    slug: "talent",
    name: "Talent Agency",
    shortDescription: "The professional foundation for elite performers, actors, and world-class entertainers.",
    modules: [
      "Intelligent Casting Intake",
      "Submission Orchestration",
      "Self-Tape Audition Hub",
      "Callback & Shortlist Logic",
      "Strategic Deal Management",
      "Automated Payout Engine",
      "Resolution Protocol",
    ],
    roles: [
      "Owner",
      "Admin",
      "Agent",
      "Casting Coordinator",
      "Talent",
      "Finance",
      "Legal",
    ],
    accent: "rose",
    image: "/talent-agency.jpg",
  },
  {
    slug: "casting",
    name: "Casting Operations",
    shortDescription: "Precision search and selection infrastructure for casting directors and production scouts.",
    modules: [
      "Advanced Casting Briefs",
      "Neural Criteria Filtering",
      "Submission Intelligence",
      "Collaborative Shortlisting",
      "Audition Logistics Hub",
      "Executive Viewing Rooms",
      "Deal Handoff Protocol",
    ],
    roles: [
      "Casting Director",
      "Casting Associate",
      "Coordinator",
      "Client Viewer",
      "Admin",
    ],
    accent: "cyan",
    image: "/casting-agency.jpg",
  },
  {
    slug: "production",
    name: "Production Studio",
    shortDescription: "Unify project workflows, vendor logistics, and talent orchestration within a single cinematic stack.",
    modules: [
      "Project Intelligence",
      "Dynamic Casting & Booking",
      "Vendor Ecosystem Management",
      "Strategic Contracting",
      "Milestone Escrow Logic",
      "Asset Approval Pipeline",
      "Conflict Resolution Hub",
      "Predictive Analytics",
    ],
    roles: [
      "Producer",
      "PM",
      "Casting Lead",
      "Client/Stakeholder Viewer",
      "Finance",
      "Legal",
      "Admin",
    ],
    accent: "crimson",
    image: "/production-agency.jpg",
    /* ── Rich-page content (ported from TalentOS /-landing v3) ── */
    heroBadge: "Fixl Studio OS — ag.md compliant",
    heroTagline: "The operating system for modern production houses.",
    heroSubtitle:
      "50+ project pages. 12 state machines. 15 approval gates. ag.md compliant. Built for Dharma-scale productions.",
    personas: [
      {
        title: "Production Head",
        role: "production-head",
        email: "production-head@talentos.io",
        lines: [
          "See every project, every department, every number. Full control.",
          "Try as Karan Johar — the all-access studio owner role.",
        ],
      },
      {
        title: "Studio Exec",
        role: "studio-exec",
        email: "studio-exec@talentos.io",
        lines: [
          "Portfolio dashboards across every active project.",
          "Greenlight, budgets, and delivery status in one view.",
        ],
      },
      {
        title: "Director",
        role: "director",
        email: "director@talentos.io",
        lines: [
          "Scene-level creative control with cast, callsheets, and cues.",
          "Delegate custom sub-roles to your creative team.",
        ],
      },
      {
        title: "Line Producer",
        role: "line-producer",
        email: "line-producer@talentos.io",
        lines: [
          "Live production operations: POs, invoices, callsheets, crew.",
          "Department-scoped permissions for every head of department.",
        ],
      },
      {
        title: "Actor / Talent",
        role: "talent",
        email: "alia@talentos.io",
        lines: [
          "See your schedule, scripts, dailies, contracts and check-ins —",
          "all in one place. Just for you.",
        ],
      },
      {
        title: "Supplier / Vendor",
        role: "production-vendor",
        email: "panavision@talentos.io",
        lines: [
          "Track your POs, submit invoices, watch payment status —",
          "your own portal, scoped just to your engagement.",
        ],
      },
      {
        title: "Parent / Guardian",
        role: "guardian",
        email: "meera@talentos.io",
        lines: [
          "Stay on top of your child's schedule, welfare, hours and compliance —",
          "all in one safe place.",
        ],
      },
      {
        title: "Platform operator",
        role: "platform-admin",
        email: "platform-admin@talentos.io",
        lines: [
          "Run TalentOS as a multi-tenant platform across many production houses.",
          "Manage tenants, branding, billing and global audit in one console.",
        ],
      },
    ],
    stateMachines: [
      "Project",
      "Asset",
      "Contract",
      "Escrow",
      "Vendor",
      "Change Request",
      "Quote",
      "Dispute",
      "Cut",
      "Call Sheet",
      "PO",
      "Scene",
    ],
    stats: [
      { value: "85+", label: "pages" },
      { value: "12", label: "state machines" },
      { value: "15", label: "approval gates" },
      { value: "50+", label: "sidebar items" },
      { value: "644", label: "atomic permissions" },
    ],
    featureCards: [
      {
        title: "Project-first architecture",
        body: "50+ sidebar items per project. Every module scoped to a project code. 5 portal sidebars.",
        tint: "#14B8A6",
      },
      {
        title: "Delegated RBAC",
        body: "Every main role can create custom sub-roles with any subset of 644 atomic permissions.",
        tint: "#6366F1",
      },
      {
        title: "12 state machines",
        body: "Project, Asset, Contract, Escrow, Vendor, Change Request, Quote, Dispute, Cut, Call Sheet, PO, Scene.",
        tint: "#F59E0B",
      },
    ],
    ctas: [
      { label: "Try the guided demo", href: "/demo", variant: "primary" },
      { label: "Watch delegated RBAC", href: "/demo", variant: "secondary" },
      { label: "Watch the v4 tour", href: "/demo", variant: "ghost" },
    ],
    trustedStudios: [
      { label: "DHARMA", accent: "#991B1B" },
      { label: "YRF", accent: "#DC2626" },
      { label: "EXCEL", accent: "#2563EB" },
      { label: "ARKA", accent: "#F59E0B" },
    ],
  },
  {
    slug: "influencer",
    name: "Creator Management",
    shortDescription: "End-to-end deal flow and media kit orchestration for the modern creator economy.",
    modules: [
      "Creator Media Kit Engine",
      "Strategic Deal Rooms",
      "Deliverables Tracking Logic",
      "Content Approval Pipeline",
      "Performance Reporting Hub",
      "Automated Escrow Payouts",
      "Dispute Orchestration",
    ],
    roles: [
      "Owner",
      "Admin",
      "Creator Manager",
      "Brand Partnerships",
      "Content Reviewer",
      "Creator",
      "Analyst",
      "Finance",
    ],
    accent: "emerald",
    image: "/influencer-agency.jpg",
  },
  {
    slug: "ugc",
    name: "UGC Production",
    shortDescription: "Streamline the lifecycle from creator brief to final asset delivery.",
    modules: [
      "Brief-to-Delivery Pipeline",
      "Asset Library Versioning",
      "Collaborative Client Approvals",
      "Deliverables Archive",
      "Secured Invoicing Logic",
    ],
    roles: [
      "Producer",
      "Creative Director",
      "Editor",
      "Client Approver",
      "Admin",
      "Finance",
    ],
    accent: "indigo",
    image: "/production-agency.jpg",
  },
  {
    slug: "social-media",
    name: "Social & Growth",
    shortDescription: "Scale social presence with integrated campaign orchestration and community governance.",
    modules: [
      "Campaign Logic",
      "Content Calendar Engine",
      "Institutional Approvals",
      "Community Governance",
      "Performance Attribution",
    ],
    roles: [
      "Strategist",
      "Community Manager",
      "Analyst",
      "Client Viewer/Approver",
      "Admin",
    ],
    accent: "cyan",
    image: "/influencer-agency.jpg",
  },
  {
    slug: "pageant",
    name: "Pageant Operations",
    shortDescription: "The definitive infrastructure for staging world-class pageants and high-stakes competitions.",
    modules: [
      "Season & Round Architecture",
      "Registration & Eligibility Logic",
      "Judiciary Scoring Panels",
      "Submission Infrastructure",
      "Publication Engine",
      "Sponsor Placement Logic",
      "Financial Orchestration",
    ],
    roles: [
      "Owner",
      "Program Director",
      "Admin",
      "Judges",
      "Moderator",
      "Participant Support",
      "Finance",
    ],
    accent: "amber",
    image: "/eature-pageants.jpg",
  },
  {
    slug: "pageant-training",
    name: "Pageant Training/Grooming Agency",
    shortDescription: "Courses, cohorts, attendance, certificates",
    modules: [
      "Courses/cohorts",
      "Attendance",
      "Assignments",
      "Certificates",
      "Payments/discounts/loyalty",
    ],
    roles: ["Owner", "Admin", "Trainer", "Mentor", "Student/Talent", "Finance"],
    accent: "orange",
    image: "/modeling-agency.jpg",
  },
  {
    slug: "academy",
    name: "Acting/Modeling Academy / Institute",
    shortDescription: "Courses, cohorts, assessments, certificates",
    modules: [
      "Courses",
      "Cohorts",
      "Assessments",
      "Certificates",
      "Payments",
      "Student progress analytics",
    ],
    roles: [
      "Academic Admin",
      "Trainer",
      "Mentor",
      "Student",
      "Finance",
    ],
    accent: "violet",
    image: "/talent-agency.jpg",
  },
  {
    slug: "speaker",
    name: "Speaker Bureau / Public Figure Booking",
    shortDescription: "Booking requests, itinerary, contracts, escrow",
    modules: [
      "Booking requests",
      "Itinerary",
      "Contracts",
      "Invoicing",
      "Escrow (advance/post-event)",
      "Disputes",
    ],
    roles: ["Booker", "Coordinator", "Talent/Assistant", "Finance", "Legal", "Admin"],
    accent: "indigo",
    image: "/talent-agency.jpg",
  },
  {
    slug: "sports",
    name: "Sports / Esports Talent Agency",
    shortDescription: "Deals pipeline, appearances, revenue splits, escrow",
    modules: [
      "Deals/sponsorship pipeline",
      "Appearances",
      "Deliverables",
      "Conflicts",
      "Revenue splits",
      "Escrow",
    ],
    roles: ["Agent", "Deals Manager", "Talent", "Analyst", "Finance", "Admin"],
    accent: "crimson",
    image: "/talent-agency.jpg",
  },
  {
    slug: "events",
    name: "Event/Concert/Festival Promoter",
    shortDescription: "Event ops, booking, sponsor placements, settlements",
    modules: [
      "Event ops",
      "Booking",
      "Sponsor placements",
      "Settlements",
      "Vendor deliverables",
      "Payments",
    ],
    roles: [
      "Event Director",
      "Ops Manager",
      "Booker",
      "Sponsor Manager",
      "Finance",
      "Admin",
    ],
    accent: "amber",
    image: "/production-agency.jpg",
  },
  {
    slug: "photography",
    name: "Photography/Videography Agency",
    shortDescription: "Booking, shoot schedules, asset delivery, usage rights",
    modules: [
      "Booking",
      "Shoot schedules",
      "Asset delivery",
      "Revisions",
      "Usage rights licensing",
      "Escrow",
    ],
    roles: [
      "Producer",
      "Photographer",
      "Editor",
      "Client Approver",
      "Admin",
      "Finance",
    ],
    accent: "rose",
    image: "/production-agency.jpg",
  },
  {
    slug: "styling",
    name: "Styling/Makeup/Wardrobe Agency",
    shortDescription: "Service packages, booking calendar, team assignment",
    modules: [
      "Service packages",
      "Booking calendar",
      "Team assignment",
      "Payments",
      "Disputes",
    ],
    roles: ["Lead Stylist", "Artists", "Scheduler", "Finance", "Admin"],
    accent: "rose",
    image: "/modeling-agency.jpg",
  },
  {
    slug: "staffing",
    name: "Event Staffing Agency (hosts/promoters/models)",
    shortDescription: "Shift rosters, check-ins, timesheets, payouts",
    modules: [
      "Shift rosters",
      "Check-ins/timesheets",
      "Approvals",
      "Payroll-like payouts",
      "Disputes",
    ],
    roles: ["Staffing Manager", "Coordinator", "Staff/Talent", "Finance", "Admin"],
    accent: "orange",
    image: "/production-agency.jpg",
  },
  {
    slug: "recruitment",
    name: "Creative Recruitment Agency",
    shortDescription: "Listings, applications, shortlist, placement escrow",
    modules: [
      "Listings",
      "Applications",
      "Shortlist",
      "Offers",
      "Contracts",
      "Placement invoicing/escrow",
    ],
    roles: [
      "Recruiter",
      "Account Manager",
      "Candidate",
      "Client",
      "Admin",
      "Finance",
    ],
    accent: "cyan",
    image: "/casting-agency.jpg",
  },
  {
    slug: "brand",
    name: "Brand / Sponsor Team (as tenant)",
    shortDescription: "Campaign manager, deal rooms, approvals, reporting",
    modules: [
      "Campaign manager",
      "Partner deal rooms",
      "Approvals",
      "Contracts/usage rights",
      "Escrow",
      "Reporting",
    ],
    roles: [
      "Brand Manager",
      "Campaign Manager",
      "Legal Approver",
      "Finance",
      "Analyst",
      "Admin",
    ],
    accent: "emerald",
    image: "/influencer-agency.jpg",
  },
  {
    slug: "media-buying",
    name: "Media Buying / Ad Agency",
    shortDescription: "Multi-client campaigns, reporting, approval workflows",
    modules: [
      "Multi-client partitions",
      "Campaigns",
      "Reporting",
      "Billing/invoicing",
      "Approval workflows",
    ],
    roles: [
      "Account Manager",
      "Media Buyer",
      "Analyst",
      "Client Viewer",
      "Admin",
      "Finance",
    ],
    accent: "indigo",
    image: "/influencer-agency.jpg",
  },
  {
    slug: "community",
    name: "Talent Network / Community Operator",
    shortDescription: "Communities, governance, discovery, events, rewards",
    modules: [
      "Communities",
      "Governance/moderation",
      "Discovery",
      "Events",
      "Rewards/loyalty",
      "Sponsor placements",
    ],
    roles: [
      "Community Manager",
      "Moderator",
      "Talent/Creator",
      "Sponsor Manager",
      "Admin",
      "Finance",
    ],
    accent: "emerald",
    image: "/talent-agency.jpg",
  },
  {
    slug: "marketplace",
    name: "Marketplace / Aggregator (services)",
    shortDescription: "Vendor onboarding, listings, booking, escrow",
    modules: [
      "Vendor onboarding",
      "Listings",
      "Booking",
      "Escrow",
      "Disputes",
      "Ratings moderation",
    ],
    roles: [
      "Marketplace Admin",
      "Vendor",
      "Client",
      "Moderator",
      "Finance",
    ],
    accent: "amber",
    image: "/casting-agency.jpg",
  },
  {
    slug: "holding",
    name: "Holding Company (multi-agency group)",
    shortDescription: "Parent governance, sub-tenants, consolidated analytics",
    modules: [
      "Parent governance",
      "Sub-tenant management",
      "Consolidated analytics",
      "Shared billing",
      "Shared policy packs",
    ],
    roles: [
      "Group Admin",
      "Shared Finance",
      "Shared Legal",
      "Agency Admins",
    ],
    accent: "crimson",
    image: "/production-agency.jpg",
  },
]

/** Categories for dropdown/hub grouping (by focus, not blueprint) */
export const AGENCY_CATEGORIES = [
  {
    key: "talent-roster",
    label: "Talent & Roster",
    tagline: "Roster, booking, and talent lifecycle",
    slugs: ["modeling", "talent", "speaker", "sports", "styling"],
    accent: "violet" as AgencyAccent,
  },
  {
    key: "casting-production",
    label: "Casting & Production",
    tagline: "Casting, studios, and creative production",
    slugs: ["casting", "production", "photography", "ugc", "recruitment"],
    accent: "cyan" as AgencyAccent,
  },
  {
    key: "brand-creator",
    label: "Brand & Creator",
    tagline: "Influencer, brand deals, and content",
    slugs: ["influencer", "brand", "social-media", "media-buying"],
    accent: "emerald" as AgencyAccent,
  },
  {
    key: "events-community",
    label: "Events & Community",
    tagline: "Pageants, events, staffing, and communities",
    slugs: ["pageant", "pageant-training", "events", "staffing", "community"],
    accent: "amber" as AgencyAccent,
  },
  {
    key: "academy-marketplace",
    label: "Academy & Marketplace",
    tagline: "Training, marketplaces, and groups",
    slugs: ["academy", "marketplace", "holding"],
    accent: "indigo" as AgencyAccent,
  },
] as const

export function getAgencyBySlug(slug: string): AgencyType | undefined {
  return AGENCY_TYPES.find((a) => a.slug === slug)
}

export function getAgencyHref(slug: string): string {
  return `/agencies/${slug}`
}
