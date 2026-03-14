"use client"

import { useEffect, useRef, useMemo, useState } from "react"
import { 
  Megaphone, 
  Filter, 
  Inbox, 
  ListChecks, 
  Calendar, 
  Eye, 
  Handshake,
  Workflow,
  FolderOpen,
  CheckCircle,
  Package,
  Receipt,
  Users,
  AlertCircle,
  BarChart,
  Clock,
  RefreshCw,
  FileText,
  Shield,
  DollarSign,
  Send,
  Video,
  Briefcase,
  Target,
  Trophy,
  ClipboardCheck,
  Award,
  BookOpen,
  MapPin,
  Settings,
  Layers,
  Search,
  Gift,
  UserPlus,
  Star,
  Building
} from "lucide-react"

interface Module {
  title: string
  description: string
  icon: any
  cardBgColor: string
  iconBgColor: string
}

const MODULE_CONFIGS: { [key: string]: Module } = {
  // Casting Agency modules
  "Casting calls": {
    title: "CASTING CALLS",
    description: "Create and publish casting opportunities with detailed requirements, roles, and project information.",
    icon: Megaphone,
    cardBgColor: "bg-emerald-400",
    iconBgColor: "bg-emerald-500"
  },
  "Criteria filters": {
    title: "CRITERIA FILTERS",
    description: "Filter talent by age, gender, ethnicity, skills, experience, and custom attributes to find perfect matches.",
    icon: Filter,
    cardBgColor: "bg-blue-400",
    iconBgColor: "bg-blue-500"
  },
  "Submission intake": {
    title: "SUBMISSION INTAKE",
    description: "Receive, organize, and manage talent submissions with portfolios, headshots, and application details.",
    icon: Inbox,
    cardBgColor: "bg-purple-400",
    iconBgColor: "bg-purple-500"
  },
  "Shortlist + notes": {
    title: "SHORTLIST + NOTES",
    description: "Curate top candidates, add internal notes, ratings, and collaborate with your team on selections.",
    icon: ListChecks,
    cardBgColor: "bg-pink-400",
    iconBgColor: "bg-pink-500"
  },
  "Audition scheduling": {
    title: "AUDITION SCHEDULING",
    description: "Schedule audition slots, send invitations, manage callbacks, and track attendance seamlessly.",
    icon: Calendar,
    cardBgColor: "bg-cyan-400",
    iconBgColor: "bg-cyan-500"
  },
  "Client viewer room": {
    title: "CLIENT VIEWER ROOM",
    description: "Share curated submissions with clients for review, feedback, and approval in a secure environment.",
    icon: Eye,
    cardBgColor: "bg-violet-400",
    iconBgColor: "bg-violet-500"
  },
  "Offer handoff to escrow": {
    title: "OFFER HANDOFF TO ESCROW",
    description: "Seamlessly transition from selection to contract and payment with integrated escrow protection.",
    icon: Handshake,
    cardBgColor: "bg-amber-400",
    iconBgColor: "bg-amber-500"
  },
  
  // UGC/Production modules
  "Brief → production → edit → deliver pipeline": {
    title: "BRIEF → PRODUCTION → EDIT → DELIVER PIPELINE",
    description: "Streamlined workflow from initial brief through production, editing, and final delivery.",
    icon: Workflow,
    cardBgColor: "bg-indigo-400",
    iconBgColor: "bg-indigo-500"
  },
  "Asset library/versioning": {
    title: "ASSET LIBRARY/VERSIONING",
    description: "Organize and manage all creative assets with version control and easy retrieval.",
    icon: FolderOpen,
    cardBgColor: "bg-teal-400",
    iconBgColor: "bg-teal-500"
  },
  "Client approvals": {
    title: "CLIENT APPROVALS",
    description: "Streamline client review and approval process with feedback loops and sign-offs.",
    icon: CheckCircle,
    cardBgColor: "bg-green-400",
    iconBgColor: "bg-green-500"
  },
  "Deliverables": {
    title: "DELIVERABLES",
    description: "Track and deliver final assets to clients with clear specifications and timelines.",
    icon: Package,
    cardBgColor: "bg-blue-400",
    iconBgColor: "bg-blue-500"
  },
  "Invoicing/escrow": {
    title: "INVOICING/ESCROW",
    description: "Secure payment processing with escrow protection for both parties.",
    icon: Receipt,
    cardBgColor: "bg-amber-400",
    iconBgColor: "bg-amber-500"
  },
  
  // Production House modules
  "Projects": {
    title: "PROJECTS",
    description: "Manage multiple production projects with timelines, budgets, and team assignments.",
    icon: FolderOpen,
    cardBgColor: "bg-purple-400",
    iconBgColor: "bg-purple-500"
  },
  "Casting + booking": {
    title: "CASTING + BOOKING",
    description: "Find and book talent for your productions with integrated casting and scheduling.",
    icon: Users,
    cardBgColor: "bg-cyan-400",
    iconBgColor: "bg-cyan-500"
  },
  "Vendor management": {
    title: "VENDOR MANAGEMENT",
    description: "Coordinate with external vendors, suppliers, and service providers.",
    icon: Handshake,
    cardBgColor: "bg-emerald-400",
    iconBgColor: "bg-emerald-500"
  },
  "Contracts": {
    title: "CONTRACTS",
    description: "Create, manage, and track contracts with talent, vendors, and clients.",
    icon: Receipt,
    cardBgColor: "bg-orange-400",
    iconBgColor: "bg-orange-500"
  },
  "Milestones/escrow": {
    title: "MILESTONES/ESCROW",
    description: "Track project milestones with milestone-based payments and escrow protection.",
    icon: CheckCircle,
    cardBgColor: "bg-blue-400",
    iconBgColor: "bg-blue-500"
  },
  "Asset approvals": {
    title: "ASSET APPROVALS",
    description: "Review and approve creative assets with stakeholder feedback and version control.",
    icon: Eye,
    cardBgColor: "bg-pink-400",
    iconBgColor: "bg-pink-500"
  },
  "Disputes": {
    title: "DISPUTES",
    description: "Manage and resolve disputes with built-in mediation and documentation tools.",
    icon: AlertCircle,
    cardBgColor: "bg-red-400",
    iconBgColor: "bg-red-500"
  },
  "Analytics": {
    title: "ANALYTICS",
    description: "Track performance metrics, budgets, and project insights with comprehensive analytics.",
    icon: BarChart,
    cardBgColor: "bg-violet-400",
    iconBgColor: "bg-violet-500"
  },
  
  // Photography/Videography Agency modules
  "Booking": {
    title: "BOOKING",
    description: "Schedule and manage photography and videography bookings with calendar integration.",
    icon: Calendar,
    cardBgColor: "bg-cyan-400",
    iconBgColor: "bg-cyan-500"
  },
  "Shoot schedules": {
    title: "SHOOT SCHEDULES",
    description: "Organize shoot timelines, locations, crew assignments, and equipment needs.",
    icon: Clock,
    cardBgColor: "bg-purple-400",
    iconBgColor: "bg-purple-500"
  },
  "Asset delivery": {
    title: "ASSET DELIVERY",
    description: "Deliver final photos and videos to clients with organized galleries and downloads.",
    icon: Package,
    cardBgColor: "bg-emerald-400",
    iconBgColor: "bg-emerald-500"
  },
  "Revisions": {
    title: "REVISIONS",
    description: "Track revision requests, feedback, and iterations with version control.",
    icon: RefreshCw,
    cardBgColor: "bg-orange-400",
    iconBgColor: "bg-orange-500"
  },
  "Usage rights licensing": {
    title: "USAGE RIGHTS LICENSING",
    description: "Manage image and video licensing, usage rights, and commercial permissions.",
    icon: FileText,
    cardBgColor: "bg-pink-400",
    iconBgColor: "bg-pink-500"
  },
  "Escrow": {
    title: "ESCROW",
    description: "Secure payment processing with escrow protection for photography services.",
    icon: Shield,
    cardBgColor: "bg-blue-400",
    iconBgColor: "bg-blue-500"
  },
  
  // Modeling Agency modules
  "Talent Profiles & Portfolio approvals": {
    title: "TALENT PROFILES & PORTFOLIO APPROVALS",
    description: "Manage talent profiles, portfolios, and approve content for representation.",
    icon: Users,
    cardBgColor: "bg-purple-400",
    iconBgColor: "bg-purple-500"
  },
  "Booking pipeline (inquiry → option hold → confirmed)": {
    title: "BOOKING PIPELINE",
    description: "Track bookings from initial inquiry through option holds to confirmed jobs.",
    icon: Workflow,
    cardBgColor: "bg-cyan-400",
    iconBgColor: "bg-cyan-500"
  },
  "Availability": {
    title: "AVAILABILITY",
    description: "Manage talent availability calendars and scheduling conflicts.",
    icon: Calendar,
    cardBgColor: "bg-emerald-400",
    iconBgColor: "bg-emerald-500"
  },
  "Contracts/usage rights": {
    title: "CONTRACTS/USAGE RIGHTS",
    description: "Create and manage contracts with usage rights and licensing terms.",
    icon: FileText,
    cardBgColor: "bg-orange-400",
    iconBgColor: "bg-orange-500"
  },
  "Payments/escrow": {
    title: "PAYMENTS/ESCROW",
    description: "Process payments securely with escrow protection for all parties.",
    icon: DollarSign,
    cardBgColor: "bg-green-400",
    iconBgColor: "bg-green-500"
  },
  
  // Talent Agency modules
  "Casting calls intake": {
    title: "CASTING CALLS INTAKE",
    description: "Receive and organize casting opportunities for your talent roster.",
    icon: Inbox,
    cardBgColor: "bg-blue-400",
    iconBgColor: "bg-blue-500"
  },
  "Submissions": {
    title: "SUBMISSIONS",
    description: "Submit talent profiles and materials to casting directors and clients.",
    icon: Send,
    cardBgColor: "bg-purple-400",
    iconBgColor: "bg-purple-500"
  },
  "Auditions (self-tapes)": {
    title: "AUDITIONS (SELF-TAPES)",
    description: "Manage audition schedules and self-tape submissions for talent.",
    icon: Video,
    cardBgColor: "bg-pink-400",
    iconBgColor: "bg-pink-500"
  },
  "Shortlist/callbacks": {
    title: "SHORTLIST/CALLBACKS",
    description: "Track shortlisted talent and manage callback scheduling.",
    icon: ListChecks,
    cardBgColor: "bg-cyan-400",
    iconBgColor: "bg-cyan-500"
  },
  "Deals/contracts": {
    title: "DEALS/CONTRACTS",
    description: "Negotiate and finalize deals with contract management.",
    icon: Handshake,
    cardBgColor: "bg-emerald-400",
    iconBgColor: "bg-emerald-500"
  },
  "Escrow/payouts": {
    title: "ESCROW/PAYOUTS",
    description: "Secure payment processing and automated payouts to talent.",
    icon: DollarSign,
    cardBgColor: "bg-amber-400",
    iconBgColor: "bg-amber-500"
  },
  
  // Influencer Agency modules
  "Creator roster + media kits": {
    title: "CREATOR ROSTER + MEDIA KITS",
    description: "Showcase your creator roster with professional media kits and analytics.",
    icon: Users,
    cardBgColor: "bg-emerald-400",
    iconBgColor: "bg-emerald-500"
  },
  "Deal rooms": {
    title: "DEAL ROOMS",
    description: "Collaborate on brand deals with secure deal rooms and negotiations.",
    icon: Briefcase,
    cardBgColor: "bg-blue-400",
    iconBgColor: "bg-blue-500"
  },
  "Deliverables tracker": {
    title: "DELIVERABLES TRACKER",
    description: "Track content deliverables, deadlines, and completion status.",
    icon: CheckCircle,
    cardBgColor: "bg-purple-400",
    iconBgColor: "bg-purple-500"
  },
  "Content approvals": {
    title: "CONTENT APPROVALS",
    description: "Review and approve creator content before publishing.",
    icon: Eye,
    cardBgColor: "bg-pink-400",
    iconBgColor: "bg-pink-500"
  },
  "Reporting": {
    title: "REPORTING",
    description: "Generate performance reports and analytics for campaigns.",
    icon: BarChart,
    cardBgColor: "bg-cyan-400",
    iconBgColor: "bg-cyan-500"
  },
  
  // Social Media Agency modules
  "Campaigns": {
    title: "CAMPAIGNS",
    description: "Plan, execute, and track social media marketing campaigns.",
    icon: Target,
    cardBgColor: "bg-cyan-400",
    iconBgColor: "bg-cyan-500"
  },
  "Content calendar": {
    title: "CONTENT CALENDAR",
    description: "Schedule and organize content across multiple platforms.",
    icon: Calendar,
    cardBgColor: "bg-purple-400",
    iconBgColor: "bg-purple-500"
  },
  "Approvals": {
    title: "APPROVALS",
    description: "Streamline content approval workflows with stakeholders.",
    icon: CheckCircle,
    cardBgColor: "bg-emerald-400",
    iconBgColor: "bg-emerald-500"
  },
  "Community moderation": {
    title: "COMMUNITY MODERATION",
    description: "Moderate comments, messages, and community interactions.",
    icon: Shield,
    cardBgColor: "bg-orange-400",
    iconBgColor: "bg-orange-500"
  },
  "Sponsored ads reporting (if sold)": {
    title: "SPONSORED ADS REPORTING",
    description: "Track and report on sponsored advertising performance.",
    icon: BarChart,
    cardBgColor: "bg-blue-400",
    iconBgColor: "bg-blue-500"
  },
  
  // Pageant Agency modules
  "Season builder (rounds/tasks/scoring)": {
    title: "SEASON BUILDER",
    description: "Build pageant seasons with rounds, tasks, and scoring systems.",
    icon: Trophy,
    cardBgColor: "bg-amber-400",
    iconBgColor: "bg-amber-500"
  },
  "Registrations/eligibility": {
    title: "REGISTRATIONS/ELIGIBILITY",
    description: "Manage participant registrations and eligibility verification.",
    icon: ClipboardCheck,
    cardBgColor: "bg-blue-400",
    iconBgColor: "bg-blue-500"
  },
  "Judges panels": {
    title: "JUDGES PANELS",
    description: "Organize judge panels and scoring workflows.",
    icon: Users,
    cardBgColor: "bg-purple-400",
    iconBgColor: "bg-purple-500"
  },
  "Results publishing": {
    title: "RESULTS PUBLISHING",
    description: "Publish pageant results and rankings transparently.",
    icon: Award,
    cardBgColor: "bg-pink-400",
    iconBgColor: "bg-pink-500"
  },
  "Sponsor placements": {
    title: "SPONSOR PLACEMENTS",
    description: "Manage sponsor partnerships and placement opportunities.",
    icon: Handshake,
    cardBgColor: "bg-emerald-400",
    iconBgColor: "bg-emerald-500"
  },
  "Payments": {
    title: "PAYMENTS",
    description: "Process registration fees, sponsorships, and prize payments.",
    icon: DollarSign,
    cardBgColor: "bg-green-400",
    iconBgColor: "bg-green-500"
  },
  
  // Academy/Training modules
  "Courses/cohorts": {
    title: "COURSES/COHORTS",
    description: "Create and manage courses with cohort-based learning.",
    icon: BookOpen,
    cardBgColor: "bg-violet-400",
    iconBgColor: "bg-violet-500"
  },
  "Courses": {
    title: "COURSES",
    description: "Build comprehensive course curricula and learning paths.",
    icon: BookOpen,
    cardBgColor: "bg-violet-400",
    iconBgColor: "bg-violet-500"
  },
  "Cohorts": {
    title: "COHORTS",
    description: "Organize students into cohorts for group learning.",
    icon: Users,
    cardBgColor: "bg-purple-400",
    iconBgColor: "bg-purple-500"
  },
  "Attendance": {
    title: "ATTENDANCE",
    description: "Track student attendance and participation.",
    icon: ClipboardCheck,
    cardBgColor: "bg-cyan-400",
    iconBgColor: "bg-cyan-500"
  },
  "Assignments": {
    title: "ASSIGNMENTS",
    description: "Create, distribute, and grade student assignments.",
    icon: FileText,
    cardBgColor: "bg-orange-400",
    iconBgColor: "bg-orange-500"
  },
  "Assessments": {
    title: "ASSESSMENTS",
    description: "Conduct assessments and evaluate student performance.",
    icon: ClipboardCheck,
    cardBgColor: "bg-blue-400",
    iconBgColor: "bg-blue-500"
  },
  "Certificates": {
    title: "CERTIFICATES",
    description: "Issue certificates and credentials upon course completion.",
    icon: Award,
    cardBgColor: "bg-emerald-400",
    iconBgColor: "bg-emerald-500"
  },
  "Payments/discounts/loyalty": {
    title: "PAYMENTS/DISCOUNTS/LOYALTY",
    description: "Manage tuition payments, discounts, and loyalty programs.",
    icon: DollarSign,
    cardBgColor: "bg-green-400",
    iconBgColor: "bg-green-500"
  },
  "Student progress analytics": {
    title: "STUDENT PROGRESS ANALYTICS",
    description: "Track and analyze student progress and performance metrics.",
    icon: BarChart,
    cardBgColor: "bg-pink-400",
    iconBgColor: "bg-pink-500"
  },
  
  // Speaker Bureau modules
  "Booking requests": {
    title: "BOOKING REQUESTS",
    description: "Receive and manage speaking engagement booking requests.",
    icon: Inbox,
    cardBgColor: "bg-indigo-400",
    iconBgColor: "bg-indigo-500"
  },
  "Itinerary": {
    title: "ITINERARY",
    description: "Organize travel schedules, venues, and event logistics.",
    icon: MapPin,
    cardBgColor: "bg-purple-400",
    iconBgColor: "bg-purple-500"
  },
  "Invoicing": {
    title: "INVOICING",
    description: "Generate and manage invoices for speaking engagements.",
    icon: Receipt,
    cardBgColor: "bg-cyan-400",
    iconBgColor: "bg-cyan-500"
  },
  "Escrow (advance/post-event)": {
    title: "ESCROW (ADVANCE/POST-EVENT)",
    description: "Secure payments with advance deposits and post-event settlements.",
    icon: Shield,
    cardBgColor: "bg-emerald-400",
    iconBgColor: "bg-emerald-500"
  },
  
  // Sports Agency modules
  "Deals/sponsorship pipeline": {
    title: "DEALS/SPONSORSHIP PIPELINE",
    description: "Manage sponsorship deals and partnership opportunities.",
    icon: Briefcase,
    cardBgColor: "bg-red-400",
    iconBgColor: "bg-red-500"
  },
  "Appearances": {
    title: "APPEARANCES",
    description: "Schedule and coordinate public appearances and events.",
    icon: Calendar,
    cardBgColor: "bg-blue-400",
    iconBgColor: "bg-blue-500"
  },
  "Conflicts": {
    title: "CONFLICTS",
    description: "Identify and resolve scheduling conflicts and commitments.",
    icon: AlertCircle,
    cardBgColor: "bg-orange-400",
    iconBgColor: "bg-orange-500"
  },
  "Revenue splits": {
    title: "REVENUE SPLITS",
    description: "Calculate and manage revenue sharing agreements.",
    icon: DollarSign,
    cardBgColor: "bg-green-400",
    iconBgColor: "bg-green-500"
  },
  
  // Events Agency modules
  "Event ops": {
    title: "EVENT OPS",
    description: "Manage all operational aspects of events and festivals.",
    icon: Settings,
    cardBgColor: "bg-amber-400",
    iconBgColor: "bg-amber-500"
  },
  "Settlements": {
    title: "SETTLEMENTS",
    description: "Process final settlements and payments after events.",
    icon: Receipt,
    cardBgColor: "bg-emerald-400",
    iconBgColor: "bg-emerald-500"
  },
  "Vendor deliverables": {
    title: "VENDOR DELIVERABLES",
    description: "Track vendor commitments and deliverable completion.",
    icon: Package,
    cardBgColor: "bg-purple-400",
    iconBgColor: "bg-purple-500"
  },
  
  // Styling Agency modules
  "Service packages": {
    title: "SERVICE PACKAGES",
    description: "Create and manage styling service packages and pricing.",
    icon: Package,
    cardBgColor: "bg-rose-400",
    iconBgColor: "bg-rose-500"
  },
  "Booking calendar": {
    title: "BOOKING CALENDAR",
    description: "Schedule styling appointments and manage availability.",
    icon: Calendar,
    cardBgColor: "bg-purple-400",
    iconBgColor: "bg-purple-500"
  },
  "Team assignment": {
    title: "TEAM ASSIGNMENT",
    description: "Assign stylists and makeup artists to bookings.",
    icon: Users,
    cardBgColor: "bg-cyan-400",
    iconBgColor: "bg-cyan-500"
  },
  
  // Staffing Agency modules
  "Shift rosters": {
    title: "SHIFT ROSTERS",
    description: "Create and manage staff shift schedules and rosters.",
    icon: Calendar,
    cardBgColor: "bg-orange-400",
    iconBgColor: "bg-orange-500"
  },
  "Check-ins/timesheets": {
    title: "CHECK-INS/TIMESHEETS",
    description: "Track staff check-ins, hours worked, and timesheets.",
    icon: Clock,
    cardBgColor: "bg-blue-400",
    iconBgColor: "bg-blue-500"
  },
  "Payroll-like payouts": {
    title: "PAYROLL-LIKE PAYOUTS",
    description: "Process automated payouts based on hours worked.",
    icon: DollarSign,
    cardBgColor: "bg-green-400",
    iconBgColor: "bg-green-500"
  },
  
  // Recruitment Agency modules
  "Listings": {
    title: "LISTINGS",
    description: "Post and manage job listings for creative positions.",
    icon: FileText,
    cardBgColor: "bg-cyan-400",
    iconBgColor: "bg-cyan-500"
  },
  "Applications": {
    title: "APPLICATIONS",
    description: "Receive and organize candidate applications.",
    icon: Inbox,
    cardBgColor: "bg-purple-400",
    iconBgColor: "bg-purple-500"
  },
  "Shortlist": {
    title: "SHORTLIST",
    description: "Curate shortlists of top candidates for clients.",
    icon: ListChecks,
    cardBgColor: "bg-pink-400",
    iconBgColor: "bg-pink-500"
  },
  "Offers": {
    title: "OFFERS",
    description: "Extend job offers and manage acceptance workflows.",
    icon: Handshake,
    cardBgColor: "bg-emerald-400",
    iconBgColor: "bg-emerald-500"
  },
  "Placement invoicing/escrow": {
    title: "PLACEMENT INVOICING/ESCROW",
    description: "Invoice placement fees with escrow protection.",
    icon: Receipt,
    cardBgColor: "bg-amber-400",
    iconBgColor: "bg-amber-500"
  },
  
  // Brand Agency modules
  "Campaign manager": {
    title: "CAMPAIGN MANAGER",
    description: "Plan and execute brand marketing campaigns.",
    icon: Target,
    cardBgColor: "bg-emerald-400",
    iconBgColor: "bg-emerald-500"
  },
  "Partner deal rooms": {
    title: "PARTNER DEAL ROOMS",
    description: "Collaborate with partners in secure deal rooms.",
    icon: Briefcase,
    cardBgColor: "bg-blue-400",
    iconBgColor: "bg-blue-500"
  },
  
  // Media Buying Agency modules
  "Multi-client partitions": {
    title: "MULTI-CLIENT PARTITIONS",
    description: "Manage multiple client accounts with data separation.",
    icon: Layers,
    cardBgColor: "bg-indigo-400",
    iconBgColor: "bg-indigo-500"
  },
  "Billing/invoicing": {
    title: "BILLING/INVOICING",
    description: "Generate invoices and manage billing for multiple clients.",
    icon: Receipt,
    cardBgColor: "bg-cyan-400",
    iconBgColor: "bg-cyan-500"
  },
  "Approval workflows": {
    title: "APPROVAL WORKFLOWS",
    description: "Set up multi-stage approval processes for campaigns.",
    icon: CheckCircle,
    cardBgColor: "bg-emerald-400",
    iconBgColor: "bg-emerald-500"
  },
  
  // Community modules
  "Communities": {
    title: "COMMUNITIES",
    description: "Build and manage talent communities and networks.",
    icon: Users,
    cardBgColor: "bg-emerald-400",
    iconBgColor: "bg-emerald-500"
  },
  "Governance/moderation": {
    title: "GOVERNANCE/MODERATION",
    description: "Set community rules and moderate member interactions.",
    icon: Shield,
    cardBgColor: "bg-orange-400",
    iconBgColor: "bg-orange-500"
  },
  "Discovery": {
    title: "DISCOVERY",
    description: "Help members discover opportunities and connections.",
    icon: Search,
    cardBgColor: "bg-purple-400",
    iconBgColor: "bg-purple-500"
  },
  "Events": {
    title: "EVENTS",
    description: "Organize community events and networking opportunities.",
    icon: Calendar,
    cardBgColor: "bg-blue-400",
    iconBgColor: "bg-blue-500"
  },
  "Rewards/loyalty": {
    title: "REWARDS/LOYALTY",
    description: "Reward active members with loyalty programs and perks.",
    icon: Gift,
    cardBgColor: "bg-pink-400",
    iconBgColor: "bg-pink-500"
  },
  
  // Marketplace modules
  "Vendor onboarding": {
    title: "VENDOR ONBOARDING",
    description: "Onboard and verify service providers to the marketplace.",
    icon: UserPlus,
    cardBgColor: "bg-amber-400",
    iconBgColor: "bg-amber-500"
  },
  "Ratings moderation": {
    title: "RATINGS MODERATION",
    description: "Moderate reviews and ratings to ensure quality.",
    icon: Star,
    cardBgColor: "bg-yellow-400",
    iconBgColor: "bg-yellow-500"
  },
  
  // Holding Company modules
  "Parent governance": {
    title: "PARENT GOVERNANCE",
    description: "Oversee governance across multiple subsidiary agencies.",
    icon: Building,
    cardBgColor: "bg-red-400",
    iconBgColor: "bg-red-500"
  },
  "Sub-tenant management": {
    title: "SUB-TENANT MANAGEMENT",
    description: "Manage multiple agency tenants under one umbrella.",
    icon: Layers,
    cardBgColor: "bg-purple-400",
    iconBgColor: "bg-purple-500"
  },
  "Consolidated analytics": {
    title: "CONSOLIDATED ANALYTICS",
    description: "View consolidated analytics across all agencies.",
    icon: BarChart,
    cardBgColor: "bg-blue-400",
    iconBgColor: "bg-blue-500"
  },
  "Shared billing": {
    title: "SHARED BILLING",
    description: "Centralized billing and payment processing for all agencies.",
    icon: Receipt,
    cardBgColor: "bg-emerald-400",
    iconBgColor: "bg-emerald-500"
  },
  "Shared policy packs": {
    title: "SHARED POLICY PACKS",
    description: "Apply consistent policies across all subsidiary agencies.",
    icon: FileText,
    cardBgColor: "bg-cyan-400",
    iconBgColor: "bg-cyan-500"
  }
}

interface CreativeModulesSectionProps {
  modules: string[]
  accentText: string
}

export function CreativeModulesSection({ modules, accentText }: CreativeModulesSectionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)
  const [animationProgress, setAnimationProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const moduleData = useMemo(() => modules.map(m => MODULE_CONFIGS[m] || {
    title: m.toUpperCase(),
    description: "",
    icon: Megaphone,
    cardBgColor: "bg-gray-500",
    iconBgColor: "bg-gray-600"
  }), [modules])

  // Check if we should use neutral cards (all modules have gray colors)
  const useNeutralCards = useMemo(() => 
    moduleData.every(m => m.cardBgColor.includes("gray")),
    [moduleData]
  )

  // Intersection Observer to detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isVisible])

  // Animate progress when visible
  useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null
    const duration = 2000 // 2 seconds animation

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      setAnimationProgress(progress)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const container = canvas.parentElement
      if (!container) return
      canvas.width = container.offsetWidth
      canvas.height = container.offsetHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const drawConnections = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Check if neutral cards are being used
      const tempModuleData = modules.map(m => MODULE_CONFIGS[m] || {
        title: m.toUpperCase(),
        description: "",
        icon: Megaphone,
        cardBgColor: "bg-gray-500",
        iconBgColor: "bg-gray-600"
      })
      const isNeutral = tempModuleData.every(m => m.cardBgColor.includes("gray"))

      // Dynamic connections based on number of modules
      let connections: number[][] = []
      
      if (modules.length === 7) {
        // Casting workflow connections
        connections = [
          [0, 3], // Casting Calls → Shortlist + Notes
          [1, 3], // Criteria Filters → Shortlist + Notes
          [2, 4], // Submission Intake → Audition Scheduling
          [3, 5], // Shortlist + Notes → Client Viewer Room
          [4, 6], // Audition Scheduling → Offer Handoff to Escrow
          [5, 6]  // Client Viewer Room → Offer Handoff to Escrow
        ]
      } else if (modules.length === 5) {
        // UGC workflow: simplified connections
        connections = [
          [0, 3], // Brief pipeline → Deliverables
          [1, 3], // Asset library → Deliverables
          [1, 4], // Asset library → Invoicing
          [2, 4]  // Client approvals → Invoicing
        ]
      } else {
        // Default: connect sequentially
        for (let i = 0; i < modules.length - 1; i++) {
          connections.push([i, i + 1])
        }
      }

      connections.forEach(([from, to], index) => {
        const fromCard = cardsRef.current[from]
        const toCard = cardsRef.current[to]
        
        if (!fromCard || !toCard) return

        const fromRect = fromCard.getBoundingClientRect()
        const toRect = toCard.getBoundingClientRect()
        const containerRect = canvas.getBoundingClientRect()

        // Connection points - from bottom center to top center
        const fromX = fromRect.left + fromRect.width / 2 - containerRect.left
        const fromY = fromRect.bottom - containerRect.top
        const toX = toRect.left + toRect.width / 2 - containerRect.left
        const toY = toRect.top - containerRect.top

        // Calculate progress for this specific line
        const lineProgress = Math.max(0, Math.min(1, (animationProgress * connections.length) - index))

        // Create path
        ctx.beginPath()
        if (isNeutral) {
          // Very minimal curve - almost straight
          const controlX = (fromX + toX) / 2
          const controlY = (fromY + toY) / 2 + 10
          ctx.moveTo(fromX, fromY)
          
          // Draw only up to the animation progress
          if (lineProgress > 0) {
            const currentX = fromX + (toX - fromX) * lineProgress
            const currentY = fromY + (toY - fromY) * lineProgress
            const currentControlX = fromX + (controlX - fromX) * lineProgress
            const currentControlY = fromY + (controlY - fromY) * lineProgress
            
            if (lineProgress < 1) {
              ctx.quadraticCurveTo(currentControlX, currentControlY, currentX, currentY)
            } else {
              ctx.quadraticCurveTo(controlX, controlY, toX, toY)
            }
          }
        } else {
          // Slightly more curve for colored cards
          const midY = (fromY + toY) / 2
          const controlX = (fromX + toX) / 2
          const controlY = midY + 20
          ctx.moveTo(fromX, fromY)
          
          // Draw only up to the animation progress
          if (lineProgress > 0) {
            if (lineProgress < 1) {
              // Interpolate along the curve
              const t = lineProgress
              const currentX = (1 - t) * (1 - t) * fromX + 2 * (1 - t) * t * controlX + t * t * toX
              const currentY = (1 - t) * (1 - t) * fromY + 2 * (1 - t) * t * controlY + t * t * toY
              
              // Find control point for partial curve
              const partialControlX = fromX + (controlX - fromX) * t
              const partialControlY = fromY + (controlY - fromY) * t
              
              ctx.quadraticCurveTo(partialControlX, partialControlY, currentX, currentY)
            } else {
              ctx.quadraticCurveTo(controlX, controlY, toX, toY)
            }
          }
        }
        
        // Darker white line with better visibility
        ctx.strokeStyle = isNeutral ? "rgba(255, 255, 255, 0.25)" : "rgba(255, 255, 255, 0.3)"
        ctx.lineWidth = 2
        ctx.stroke()

        // Add glow effect at the end of the line during animation
        if (lineProgress > 0 && lineProgress < 1) {
          const t = lineProgress
          let glowX, glowY
          
          if (isNeutral) {
            const controlX = (fromX + toX) / 2
            const controlY = (fromY + toY) / 2 + 10
            glowX = (1 - t) * (1 - t) * fromX + 2 * (1 - t) * t * controlX + t * t * toX
            glowY = (1 - t) * (1 - t) * fromY + 2 * (1 - t) * t * controlY + t * t * toY
          } else {
            const midY = (fromY + toY) / 2
            const controlX = (fromX + toX) / 2
            const controlY = midY + 20
            glowX = (1 - t) * (1 - t) * fromX + 2 * (1 - t) * t * controlX + t * t * toX
            glowY = (1 - t) * (1 - t) * fromY + 2 * (1 - t) * t * controlY + t * t * toY
          }
          
          // Draw glowing dot at the end
          ctx.beginPath()
          ctx.arc(glowX, glowY, 4, 0, Math.PI * 2)
          ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
          ctx.fill()
          
          // Outer glow
          ctx.beginPath()
          ctx.arc(glowX, glowY, 8, 0, Math.PI * 2)
          ctx.fillStyle = "rgba(255, 255, 255, 0.3)"
          ctx.fill()
        }
      })
    }

    // Delay to ensure cards are rendered
    const timeoutId = setTimeout(() => {
      drawConnections()
    }, 100)

    // Redraw on animation progress change
    drawConnections()

    window.addEventListener("resize", () => {
      resizeCanvas()
      setTimeout(drawConnections, 100)
    })

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [modules, animationProgress])

  // Dynamic layout based on number of cards
  const getLayout = () => {
    const count = moduleData.length
    
    if (count === 7) {
      // 7 cards: 3-2-2 layout
      return [
        { start: 0, end: 3, cols: 3 }, // Row 1: 3 cards
        { start: 3, end: 5, cols: 2 }, // Row 2: 2 cards
        { start: 5, end: 7, cols: 2 }  // Row 3: 2 cards
      ]
    } else if (count === 5) {
      // 5 cards: 3-2 layout
      return [
        { start: 0, end: 3, cols: 3 }, // Row 1: 3 cards
        { start: 3, end: 5, cols: 2 }  // Row 2: 2 cards
      ]
    } else if (count === 6) {
      // 6 cards: 3-3 layout
      return [
        { start: 0, end: 3, cols: 3 }, // Row 1: 3 cards
        { start: 3, end: 6, cols: 3 }  // Row 2: 3 cards
      ]
    } else {
      // Default: distribute evenly
      const rows = Math.ceil(count / 3)
      const layout = []
      for (let i = 0; i < rows; i++) {
        const start = i * 3
        const end = Math.min(start + 3, count)
        layout.push({ start, end, cols: end - start })
      }
      return layout
    }
  }

  const layout = getLayout()

  return (
    <section ref={sectionRef} className="relative py-16 lg:py-24 bg-black border-b border-white/5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className={`text-[10px] font-bebas uppercase tracking-[0.4em] ${accentText} mb-2`}>
            Capabilities
          </p>
          <h2 className="font-bebas text-[2.1rem] sm:text-[2.5rem] lg:text-[2.7rem] font-bold text-white leading-tight tracking-tight">
            <span className="inline-block bg-violet-400 text-black px-2 rounded-md mr-1">
              Pick
            </span>
            the right modules,
            <span className="inline-block bg-sky-400 text-black px-2 rounded-md mx-1">
              connect
            </span>
            every workflow, and
            <span className="inline-block bg-emerald-400 text-black px-2 rounded-md ml-1">
              run
            </span>
            your agency on one platform.
          </h2>
          <p className="mt-4 text-gray-200 font-light max-w-2xl mx-auto">
            These building blocks plug into a single system so you can manage talent, projects, payments,
            and reporting without stitching together scattered tools.
          </p>
        </div>

        <div className="relative">
          {/* Canvas for connection lines */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-0"
            style={{ width: "100%", height: "100%" }}
          />

          {/* Cards Grid - Dynamic Layout */}
          <div className="relative z-10 space-y-12">
            {layout.map((row, rowIndex) => {
              const maxWidth = row.cols === 3 ? "max-w-6xl" : "max-w-4xl"
              const gridCols = row.cols === 3 ? "md:grid-cols-3" : row.cols === 2 ? "md:grid-cols-2" : "md:grid-cols-1"
              return (
                <div
                  key={rowIndex}
                  className={`grid grid-cols-1 ${gridCols} gap-8 ${maxWidth} mx-auto`}
                >
                  {moduleData.slice(row.start, row.end).map((module, i) => {
                    const Icon = module.icon
                    const cardIndex = row.start + i
                    return (
                      <div
                        key={cardIndex}
                        ref={(el) => { cardsRef.current[cardIndex] = el }}
                        className={`group relative ${module.cardBgColor} rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl flex flex-col ${useNeutralCards ? 'min-h-[140px]' : 'min-h-[160px]'}`}
                      >
                        {/* Header with Icon - Content at top */}
                        <div className={`px-6 ${useNeutralCards ? 'pt-5 pb-3' : 'py-4'} flex items-center justify-between`}>
                          <h3 className="font-bebas text-xl uppercase tracking-wide text-black leading-tight flex-1 pr-4">
                            {module.title}
                          </h3>
                          <div className={`${module.iconBgColor} p-2 rounded-lg flex-shrink-0`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                        </div>
                        {/* Description - Only show if exists and not neutral cards */}
                        {module.description && !useNeutralCards && (
                          <div className="px-6 pb-4">
                            <p className="text-sm leading-relaxed text-black/80 font-light">
                              {module.description}
                            </p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
