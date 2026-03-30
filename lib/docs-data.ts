import {
  Rocket,
  Users,
  Trophy,
  CreditCard,
  Shield,
  Sparkles,
  Code,
  FileText,
  Settings,
  type LucideIcon,
} from "lucide-react"

/* ──────────────────────────────────────────────
   TYPES
   ────────────────────────────────────────────── */
export type TocItem = { id: string; label: string }

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading3"; text: string }
  | { type: "callout"; variant: "info" | "warning" | "success"; title: string; text: string }
  | { type: "bullets"; items: { bold: string; text: string }[] }
  | { type: "code"; filename: string; code: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "cards"; items: { title: string; desc: string }[] }

export type DocSection = {
  id: string
  title: string
  blocks: ContentBlock[]
}

export type DocPage = {
  slug: string
  label: string
  sectionTitle: string
  breadcrumb: string[]
  title: string
  intro: string
  sections: DocSection[]
  prevSlug?: string
  prevLabel?: string
  nextSlug?: string
  nextLabel?: string
}

export type SidebarSection = {
  title: string
  iconName: string
  items: { label: string; slug: string }[]
}

/* ──────────────────────────────────────────────
   SIDEBAR STRUCTURE
   ────────────────────────────────────────────── */
export const sidebarSections: SidebarSection[] = [
  {
    title: "Getting Started",
    iconName: "Rocket",
    items: [
      { label: "Introduction", slug: "introduction" },
      { label: "Quick Start", slug: "quick-start" },
      { label: "Account Setup", slug: "account-setup" },
      { label: "Invite Your Team", slug: "invite-team" },
    ],
  },
  {
    title: "Talent Management",
    iconName: "Users",
    items: [
      { label: "Talent Profiles", slug: "talent-profiles" },
      { label: "Portfolios & Media", slug: "portfolios" },
      { label: "Availability Calendar", slug: "availability" },
      { label: "Verification & KYC", slug: "verification" },
    ],
  },
  {
    title: "Pageants & Events",
    iconName: "Trophy",
    items: [
      { label: "Process Builder", slug: "process-builder" },
      { label: "Scoring Engine", slug: "scoring-engine" },
      { label: "Judge Management", slug: "judge-management" },
      { label: "Results & Publishing", slug: "results" },
    ],
  },
  {
    title: "Payments & Escrow",
    iconName: "CreditCard",
    items: [
      { label: "Wallets", slug: "wallets" },
      { label: "Escrow System", slug: "escrow" },
      { label: "Payouts", slug: "payouts" },
      { label: "Commission Splits", slug: "commission-splits" },
    ],
  },
  {
    title: "Contracts",
    iconName: "FileText",
    items: [
      { label: "Templates", slug: "contract-templates" },
      { label: "Clause Library", slug: "clause-library" },
      { label: "E-Signatures", slug: "e-signatures" },
    ],
  },
  {
    title: "AI Studio",
    iconName: "Sparkles",
    items: [
      { label: "Comp Card Generator", slug: "comp-cards" },
      { label: "Photo Enhancement", slug: "photo-enhancement" },
      { label: "Smart Matching", slug: "smart-matching" },
      { label: "Bio Writer", slug: "bio-writer" },
    ],
  },
  {
    title: "Security & Compliance",
    iconName: "Shield",
    items: [
      { label: "RBAC & Permissions", slug: "rbac" },
      { label: "MFA Setup", slug: "mfa" },
      { label: "Audit Logs", slug: "audit-logs" },
      { label: "Data Privacy", slug: "data-privacy" },
    ],
  },
  {
    title: "Integrations",
    iconName: "Settings",
    items: [
      { label: "Payment Gateways", slug: "payment-gateways" },
      { label: "Calendar Sync", slug: "calendar-sync" },
      { label: "Webhooks", slug: "webhooks" },
    ],
  },
  {
    title: "API Reference",
    iconName: "Code",
    items: [
      { label: "Authentication", slug: "api-auth" },
      { label: "Talent Endpoints", slug: "api-talents" },
      { label: "Booking Endpoints", slug: "api-bookings" },
      { label: "Payment Endpoints", slug: "api-payments" },
    ],
  },
]

/* ──────────────────────────────────────────────
   ICON MAP (for client components)
   ────────────────────────────────────────────── */
export const iconMap: Record<string, LucideIcon> = {
  Rocket,
  Users,
  Trophy,
  CreditCard,
  Shield,
  Sparkles,
  Code,
  FileText,
  Settings,
}

/* ──────────────────────────────────────────────
   BUILD FLAT SLUG LIST (for prev/next nav)
   ────────────────────────────────────────────── */
const allSlugs = sidebarSections.flatMap((s) => s.items.map((i) => ({ slug: i.slug, label: i.label })))

function getNav(slug: string) {
  const idx = allSlugs.findIndex((s) => s.slug === slug)
  return {
    prevSlug: idx > 0 ? allSlugs[idx - 1].slug : undefined,
    prevLabel: idx > 0 ? allSlugs[idx - 1].label : undefined,
    nextSlug: idx < allSlugs.length - 1 ? allSlugs[idx + 1].slug : undefined,
    nextLabel: idx < allSlugs.length - 1 ? allSlugs[idx + 1].label : undefined,
  }
}

function findBreadcrumb(slug: string): string[] {
  for (const s of sidebarSections) {
    const item = s.items.find((i) => i.slug === slug)
    if (item) return [s.title, item.label]
  }
  return ["Docs", slug]
}

/* ──────────────────────────────────────────────
   ALL DOC PAGES CONTENT
   ────────────────────────────────────────────── */
export const docPages: Record<string, DocPage> = {

  /* ═══════════════════════════════════════════
     GETTING STARTED
     ═══════════════════════════════════════════ */
  "introduction": {
    slug: "introduction",
    label: "Introduction",
    sectionTitle: "Getting Started",
    breadcrumb: ["Getting Started", "Introduction"],
    title: "Introduction",
    intro: "Welcome to TalentOS — the multi-tenant, white-label PaaS platform built for modelling agencies, pageant organizers, talent managers, academies, and the entire talent industry ecosystem.",
    ...getNav("introduction"),
    sections: [
      {
        id: "what-is-talentos",
        title: "What is TalentOS",
        blocks: [
          { type: "paragraph", text: "TalentOS is an all-in-one operational control layer for talent businesses. Think of it as **Shopify + CRM + Booking + Pageant Engine** purpose-built for the talent industry." },
          { type: "paragraph", text: "The platform centralizes bookings, contracts, compliance, payments, and financial visibility in a single system. Each tenant gets their own isolated workspace with custom branding, domain, and feature configuration — while you maintain full platform governance." },
          { type: "callout", variant: "info", title: "Key Value Proposition", text: "TalentOS replaces 5-8 separate tools (CRM, invoicing, calendars, scoring sheets, contracts, payment processing) with one integrated platform. Average agency onboarding takes under 3 minutes." },
          { type: "bullets", items: [
            { bold: "Auto-generated workflows", text: "Pre-configured blueprints (B1-B10) for every agency type — from modeling rosters to pageant operations to influencer deal tracking" },
            { bold: "Escrow-backed payments", text: "Every booking payment is secured in escrow, with automatic commission splits between talent, agency, and platform" },
            { bold: "AI-powered productivity", text: "Generate comp cards, enhance portfolios, write bios, match talent to opportunities, and screen applications — all powered by AI Studio" },
          ]},
        ],
      },
      {
        id: "who-its-for",
        title: "Who It's For",
        blocks: [
          { type: "paragraph", text: "TalentOS serves five primary customer segments. Each tenant type gets a tailored workspace with modules pre-configured for their workflows:" },
          { type: "table", headers: ["Tenant Type", "Blueprint", "Core Modules"], rows: [
            ["Modelling Agencies", "B1", "Roster, Booking Calendar, Commission Tracking, Comp Cards"],
            ["Pageant Organizers", "B3", "Process Builder, Scoring Engine, Sponsor Integration, Results"],
            ["Talent Management", "B1", "CRM, Contracts, E-Sign, Payment Splits"],
            ["Academies & Institutes", "B5", "Video Courses, Workshops, Certifications, Progress Tracking"],
            ["Influencer Agencies", "B4", "Media Kits, Campaign Tracking, Deliverables, Engagement Reports"],
          ]},
          { type: "paragraph", text: "Beyond these primary types, TalentOS supports **22 agency categories** including casting bureaus, photography studios, event staffing, sports management, UGC collectives, and holding companies." },
        ],
      },
      {
        id: "platform-architecture",
        title: "Platform Architecture",
        blocks: [
          { type: "paragraph", text: "TalentOS is built as a **modular monolith** with strict internal boundaries. Each domain is an independent module with its own controllers, services, repositories, and policies:" },
          { type: "code", filename: "architecture.txt", code: `Platform
├── modules/identity          Auth, tenants, RBAC, ABAC
├── modules/talent            Profiles, portfolios, availability
├── modules/jobs              Briefs, submissions, bookings
├── modules/contracts         Templates, clauses, e-signatures
├── modules/ledger            Double-entry ledger, balances
├── modules/payments          PSP integration, invoices
├── modules/escrow            Milestone escrow, state machine
├── modules/disputes          Lifecycle, evidence, arbitration
├── modules/notifications     In-app, email, SMS, delivery logs
├── modules/automations       Trigger/condition/action workflows
├── modules/audit_analytics   Audit logs, dashboards, exports
└── modules/admin             Tenant console, superadmin governance` },
          { type: "callout", variant: "warning", title: "Infrastructure Stack", text: "**API Server** (stateless) · **PostgreSQL** (primary DB) · **Redis** (cache + rate limiting + queues) · **S3** (portfolio assets, signed PDFs) · **OpenTelemetry** (observability)" },
        ],
      },
      {
        id: "quick-links",
        title: "Quick Links",
        blocks: [
          { type: "paragraph", text: "Jump to the section most relevant to your needs:" },
          { type: "cards", items: [
            { title: "Quick Start Guide", desc: "Set up your first workspace in 3 minutes" },
            { title: "Pageant Engine Docs", desc: "Configure scoring, stages, and automation" },
            { title: "API Reference", desc: "96+ RESTful endpoints for custom integrations" },
            { title: "Payments & Escrow", desc: "Wallets, payouts, and milestone escrow" },
          ]},
        ],
      },
    ],
  },

  "quick-start": {
    slug: "quick-start",
    label: "Quick Start",
    sectionTitle: "Getting Started",
    breadcrumb: ["Getting Started", "Quick Start"],
    title: "Quick Start",
    intro: "Get your TalentOS workspace up and running in under 3 minutes. This guide walks you through account creation, workspace configuration, and your first talent profile.",
    ...getNav("quick-start"),
    sections: [
      {
        id: "create-account",
        title: "Create Your Account",
        blocks: [
          { type: "paragraph", text: "Visit the TalentOS signup page and register with your business email. You'll receive a verification link within seconds." },
          { type: "bullets", items: [
            { bold: "Step 1", text: "Enter your name, email, and create a secure password (minimum 12 characters)" },
            { bold: "Step 2", text: "Verify your email address via the confirmation link" },
            { bold: "Step 3", text: "Complete your business profile — company name, type, and location" },
          ]},
          { type: "callout", variant: "info", title: "Free Trial", text: "Every new account starts with a 14-day free trial on the Pro plan. No credit card required. You'll have access to all features during the trial period." },
        ],
      },
      {
        id: "setup-workspace",
        title: "Set Up Your Workspace",
        blocks: [
          { type: "paragraph", text: "After creating your account, you'll be guided through workspace setup. TalentOS auto-selects the best **Blueprint** based on your agency type:" },
          { type: "table", headers: ["Agency Type", "Blueprint", "What's Pre-Configured"], rows: [
            ["Modeling Agency", "B1 – Roster + Booking", "Talent roster, booking calendar, commission rules, comp card templates"],
            ["Pageant Organizer", "B3 – Season/Competition", "Stage builder, scoring engine, judge portal, sponsor integration"],
            ["Influencer Agency", "B4 – Brand Deals", "Media kit builder, campaign tracker, deliverable dashboard"],
            ["Academy", "B5 – Course/Cohort", "Course builder, enrollment, certifications, progress tracking"],
            ["Casting Agency", "B2 – Casting Pipeline", "Job briefs, talent submissions, shortlisting, call sheets"],
          ]},
          { type: "paragraph", text: "You can customize your blueprint at any time by enabling or disabling modules from **Settings → Modules**." },
        ],
      },
      {
        id: "add-first-talent",
        title: "Add Your First Talent",
        blocks: [
          { type: "paragraph", text: "Navigate to **Talents → Add New** to create your first talent profile. The minimum required fields are:" },
          { type: "bullets", items: [
            { bold: "Basic Info", text: "Full name, email, phone number, and date of birth" },
            { bold: "Category", text: "Model, Actor, Influencer, Dancer, Musician, or custom category" },
            { bold: "Portfolio", text: "Upload at least 3 photos (headshot, full body, lifestyle). Supported formats: JPG, PNG, WebP" },
          ]},
          { type: "code", filename: "API: Create Talent", code: `POST /v1/talents
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN

{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "category": "model",
  "stats": {
    "height": "5'9\\"",
    "bust": "34",
    "waist": "24",
    "hips": "35"
  }
}` },
          { type: "callout", variant: "success", title: "What's Next?", text: "Once your first talent is added, explore the Booking Calendar to schedule their first job, or set up Contracts to generate agreements." },
        ],
      },
      {
        id: "configure-branding",
        title: "Configure Branding",
        blocks: [
          { type: "paragraph", text: "Make TalentOS yours by configuring your white-label settings under **Settings → Branding**:" },
          { type: "bullets", items: [
            { bold: "Logo", text: "Upload your agency logo (SVG or PNG, recommended 200×60px)" },
            { bold: "Colors", text: "Set your primary brand color, accent color, and background preferences" },
            { bold: "Domain", text: "Connect your custom domain (Pro plan+). Point your DNS CNAME to gateway.talentos.com" },
            { bold: "Email Templates", text: "Customize notification emails with your branding and tone" },
          ]},
        ],
      },
    ],
  },

  "account-setup": {
    slug: "account-setup",
    label: "Account Setup",
    sectionTitle: "Getting Started",
    breadcrumb: ["Getting Started", "Account Setup"],
    title: "Account Setup",
    intro: "Configure your TalentOS account settings, security preferences, and billing information.",
    ...getNav("account-setup"),
    sections: [
      {
        id: "profile-settings",
        title: "Profile Settings",
        blocks: [
          { type: "paragraph", text: "Your account profile controls how you appear across the platform and what notifications you receive. Navigate to **Settings → Profile** to configure:" },
          { type: "bullets", items: [
            { bold: "Display Name", text: "Your name as shown to team members and in audit logs" },
            { bold: "Avatar", text: "Upload a profile photo (shown in comments, activity feeds, and team views)" },
            { bold: "Timezone", text: "Set your local timezone for accurate scheduling and notification delivery" },
            { bold: "Language", text: "Choose your preferred interface language (English, Hindi, Spanish, French, Portuguese)" },
          ]},
        ],
      },
      {
        id: "security-settings",
        title: "Security Settings",
        blocks: [
          { type: "paragraph", text: "TalentOS enforces enterprise-grade security for all accounts. Configure these settings under **Settings → Security**:" },
          { type: "bullets", items: [
            { bold: "Password", text: "Must be at least 12 characters with uppercase, lowercase, number, and special character" },
            { bold: "MFA", text: "Enable multi-factor authentication via authenticator app (TOTP) or SMS. Required for admin and finance roles" },
            { bold: "Session Management", text: "View active sessions, revoke access from unknown devices" },
            { bold: "API Keys", text: "Generate and manage API keys for integrations (Settings → Developer → API Keys)" },
          ]},
          { type: "callout", variant: "warning", title: "Security Requirement", text: "MFA is mandatory for Tenant Owners, Admins, and Finance roles. Accounts without MFA will be prompted to set it up on every login until configured." },
        ],
      },
      {
        id: "billing",
        title: "Billing & Subscription",
        blocks: [
          { type: "paragraph", text: "Manage your subscription plan and payment methods under **Settings → Billing**." },
          { type: "table", headers: ["Plan", "Price", "Key Inclusions"], rows: [
            ["Free", "$0/mo", "5 talents, 1 team member, basic features"],
            ["Starter", "$29/mo", "25 talents, 3 team members, escrow, contracts"],
            ["Pro", "$79/mo", "100 talents, 10 team members, white-label, AI Studio"],
            ["Studio", "$199/mo", "Unlimited talents, 25 team members, API access, priority support"],
            ["Enterprise", "Custom", "Unlimited everything, SSO, SLA, dedicated account manager"],
          ]},
          { type: "paragraph", text: "All plans include a 14-day free trial. Upgrade or downgrade anytime — changes take effect at the next billing cycle." },
        ],
      },
    ],
  },

  "invite-team": {
    slug: "invite-team",
    label: "Invite Your Team",
    sectionTitle: "Getting Started",
    breadcrumb: ["Getting Started", "Invite Your Team"],
    title: "Invite Your Team",
    intro: "Add team members to your TalentOS workspace and assign them roles with appropriate permissions.",
    ...getNav("invite-team"),
    sections: [
      {
        id: "invite-members",
        title: "Sending Invitations",
        blocks: [
          { type: "paragraph", text: "Navigate to **Settings → Team → Invite Members** to add people to your workspace. Enter their email address and select a role:" },
          { type: "code", filename: "API: Invite User", code: `POST /v1/users/invite
{
  "email": "coordinator@agency.com",
  "role": "coordinator",
  "teams": ["events-team"],
  "message": "Welcome to our agency workspace!"
}` },
          { type: "paragraph", text: "Invitees receive an email with a secure link to accept the invitation and set up their account. Links expire after 7 days." },
        ],
      },
      {
        id: "roles-overview",
        title: "Available Roles",
        blocks: [
          { type: "paragraph", text: "TalentOS provides granular role-based access control. Each role has different permissions across modules:" },
          { type: "table", headers: ["Role", "Access Level", "Typical Use"], rows: [
            ["Owner", "Full access to all modules and settings", "Agency founder or CEO"],
            ["Admin", "Full access except billing and ownership transfer", "Operations director"],
            ["Manager", "Manage talents, bookings, contracts, and events", "Talent manager or booking agent"],
            ["Coordinator", "View and update bookings, call sheets, schedules", "Event or casting coordinator"],
            ["Finance", "Access to payments, invoices, wallet, payouts, reports", "Accountant or finance lead"],
            ["Viewer", "Read-only access to assigned modules", "Intern or external partner"],
          ]},
          { type: "callout", variant: "info", title: "Custom Roles", text: "Studio and Enterprise plans support custom roles. Create roles with fine-grained permissions per module under Settings → Roles → Create Custom Role." },
        ],
      },
      {
        id: "teams",
        title: "Organizing into Teams",
        blocks: [
          { type: "paragraph", text: "For larger agencies, organize team members into **Teams** to control access at a group level. Teams can be based on departments, regions, or projects:" },
          { type: "bullets", items: [
            { bold: "Department Teams", text: "Modeling Division, Events Division, Influencer Division" },
            { bold: "Regional Teams", text: "Mumbai, Delhi, Bangalore — each with regional managers" },
            { bold: "Project Teams", text: "Miss India 2026 — temporary team for a specific event" },
          ]},
          { type: "paragraph", text: "Team members inherit the team's module access, plus any individual permissions assigned to their role." },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════
     TALENT MANAGEMENT
     ═══════════════════════════════════════════ */
  "talent-profiles": {
    slug: "talent-profiles",
    label: "Talent Profiles",
    sectionTitle: "Talent Management",
    breadcrumb: ["Talent Management", "Talent Profiles"],
    title: "Talent Profiles",
    intro: "Create and manage rich talent profiles with the Talent Graph — the core data model powering discovery, matching, and booking across TalentOS.",
    ...getNav("talent-profiles"),
    sections: [
      {
        id: "profile-structure",
        title: "Profile Structure",
        blocks: [
          { type: "paragraph", text: "Every talent profile in TalentOS is a comprehensive digital identity containing all the information agencies, brands, and casting directors need:" },
          { type: "cards", items: [
            { title: "Personal Details", desc: "Name, date of birth, gender, nationality, languages, contact information" },
            { title: "Physical Stats", desc: "Height, weight, bust, waist, hips, shoe size, hair color, eye color" },
            { title: "Categories & Tags", desc: "Model, Actor, Dancer, Influencer — plus custom tags like 'Commercial', 'Runway', 'Fitness'" },
            { title: "Experience & Skills", desc: "Years of experience, notable campaigns, certifications, special skills" },
          ]},
        ],
      },
      {
        id: "creating-profiles",
        title: "Creating Profiles",
        blocks: [
          { type: "paragraph", text: "Talent profiles can be created in three ways:" },
          { type: "bullets", items: [
            { bold: "Manual Entry", text: "Agency staff creates the profile via Talents → Add New with all required fields" },
            { bold: "Self-Registration", text: "Talents sign up via your white-label portal and submit their own profile for review" },
            { bold: "Bulk Import", text: "Upload a CSV with talent data via Talents → Import. Supports up to 5,000 profiles per batch" },
          ]},
          { type: "code", filename: "API: Create Talent", code: `POST /v1/talents
{
  "name": "Aarav Mehta",
  "email": "aarav@example.com",
  "phone": "+91-9876543210",
  "category": "model",
  "tags": ["runway", "commercial", "fitness"],
  "stats": {
    "height": "6'1\\"",
    "chest": "40",
    "waist": "32",
    "hair_color": "black",
    "eye_color": "brown"
  },
  "status": "active"
}` },
        ],
      },
      {
        id: "verification-status",
        title: "Verification Status",
        blocks: [
          { type: "paragraph", text: "Talent profiles go through a verification pipeline to ensure authenticity:" },
          { type: "table", headers: ["Status", "Badge", "Meaning"], rows: [
            ["Unverified", "None", "Profile created but not yet reviewed"],
            ["Pending", "Yellow", "Submitted for verification, under review"],
            ["Verified", "Green ✓", "Identity confirmed via government ID + facial match"],
            ["Premium", "Gold ★", "Verified + portfolio authenticated + background check passed"],
          ]},
          { type: "callout", variant: "success", title: "Trust Signal", text: "Verified and Premium badges appear on public profiles, search results, and casting submissions — significantly increasing booking rates." },
        ],
      },
    ],
  },

  "portfolios": {
    slug: "portfolios",
    label: "Portfolios & Media",
    sectionTitle: "Talent Management",
    breadcrumb: ["Talent Management", "Portfolios & Media"],
    title: "Portfolios & Media",
    intro: "Upload, organize, and manage talent portfolio assets including photos, videos, comp cards, and documents.",
    ...getNav("portfolios"),
    sections: [
      {
        id: "uploading-assets",
        title: "Uploading Assets",
        blocks: [
          { type: "paragraph", text: "TalentOS uses a secure, two-step upload process via pre-signed URLs for maximum performance and security:" },
          { type: "code", filename: "API: Upload Flow", code: `// Step 1: Get pre-signed upload URL
POST /v1/assets/presign-upload
{ "filename": "headshot.jpg", "content_type": "image/jpeg" }
// Returns: { "upload_url": "https://s3...", "asset_id": "ast_..." }

// Step 2: Upload directly to S3
PUT {upload_url}
Content-Type: image/jpeg
[binary data]

// Step 3: Confirm upload
POST /v1/assets/confirm-upload
{ "asset_id": "ast_..." }` },
          { type: "bullets", items: [
            { bold: "Supported Formats", text: "Images: JPG, PNG, WebP, HEIC. Videos: MP4, MOV, WebM. Documents: PDF" },
            { bold: "Size Limits", text: "Images: 20MB max. Videos: 500MB max. Documents: 10MB max" },
            { bold: "Auto-Processing", text: "Images are automatically resized to web-optimized versions. Videos are transcoded to adaptive bitrate streams" },
          ]},
        ],
      },
      {
        id: "organizing-portfolio",
        title: "Organizing Your Portfolio",
        blocks: [
          { type: "paragraph", text: "Portfolio assets can be organized into categories and albums for easy browsing:" },
          { type: "bullets", items: [
            { bold: "Categories", text: "Headshots, Full Body, Editorial, Commercial, Runway, Behind-the-Scenes, Video Reels" },
            { bold: "Albums", text: "Group photos by shoot, campaign, or season. Albums can be shared via public link" },
            { bold: "Featured", text: "Mark up to 6 assets as 'Featured' — these appear first on the talent's public profile" },
            { bold: "Watermarking", text: "Auto-apply agency watermark to all portfolio images (configurable per tenant)" },
          ]},
        ],
      },
      {
        id: "comp-cards",
        title: "Comp Cards",
        blocks: [
          { type: "paragraph", text: "TalentOS auto-generates professional comp cards from portfolio assets and profile data. You can also use **AI Studio → Comp Card Generator** for AI-enhanced designs." },
          { type: "callout", variant: "info", title: "Comp Card Formats", text: "Export as PDF (print-ready, 300 DPI), PNG (digital sharing), or interactive web link. Comp cards auto-update when profile data changes." },
        ],
      },
    ],
  },

  "availability": {
    slug: "availability",
    label: "Availability Calendar",
    sectionTitle: "Talent Management",
    breadcrumb: ["Talent Management", "Availability Calendar"],
    title: "Availability Calendar",
    intro: "Manage talent availability, prevent double-bookings, and sync with external calendars for seamless scheduling.",
    ...getNav("availability"),
    sections: [
      {
        id: "calendar-overview",
        title: "Calendar Overview",
        blocks: [
          { type: "paragraph", text: "The Availability Calendar is a per-talent scheduling system that tracks three types of time blocks:" },
          { type: "table", headers: ["Status", "Color", "Meaning"], rows: [
            ["Available", "Green", "Talent is free and can accept bookings"],
            ["Tentative / Hold", "Yellow", "Penciled in — awaiting confirmation from client or agency"],
            ["Booked", "Red", "Confirmed booking — cannot accept other jobs during this time"],
            ["Blocked", "Gray", "Personal time off, travel, or other unavailability"],
          ]},
          { type: "code", filename: "API: Set Availability", code: `PUT /v1/talents/:talentId/availability
{
  "blocks": [
    { "date": "2026-04-15", "status": "available" },
    { "date": "2026-04-16", "status": "booked", "booking_id": "bk_..." },
    { "date": "2026-04-17", "status": "blocked", "reason": "Personal" }
  ]
}` },
        ],
      },
      {
        id: "conflict-prevention",
        title: "Conflict Prevention",
        blocks: [
          { type: "paragraph", text: "TalentOS automatically prevents scheduling conflicts:" },
          { type: "bullets", items: [
            { bold: "Double-Booking Guard", text: "If a talent is already booked, the system blocks any overlapping booking attempts and notifies the requestor" },
            { bold: "Hold Expiry", text: "Tentative holds auto-expire after 48 hours (configurable per tenant) if not confirmed" },
            { bold: "Travel Buffer", text: "Optional travel buffer between bookings (e.g., 2-hour gap for inter-city travel)" },
          ]},
          { type: "callout", variant: "warning", title: "Important", text: "Calendar sync is two-way — changes in TalentOS update the external calendar, and vice versa. Make sure talent permissions are set correctly to avoid unauthorized schedule changes." },
        ],
      },
    ],
  },

  "verification": {
    slug: "verification",
    label: "Verification & KYC",
    sectionTitle: "Talent Management",
    breadcrumb: ["Talent Management", "Verification & KYC"],
    title: "Verification & KYC",
    intro: "Verify talent identities, agency credentials, and portfolio authenticity with TalentOS's multi-layer verification system.",
    ...getNav("verification"),
    sections: [
      {
        id: "verification-layers",
        title: "Verification Layers",
        blocks: [
          { type: "paragraph", text: "TalentOS offers four layers of verification, each building on the previous:" },
          { type: "cards", items: [
            { title: "Identity Verification", desc: "Government ID upload + facial matching. Confirms the person is who they claim to be." },
            { title: "Agency Credentials", desc: "Business registration, trade license, GST certificate. Validates the agency is a real business." },
            { title: "Portfolio Authentication", desc: "Digital fingerprinting of portfolio images to detect stolen or AI-generated content." },
            { title: "Background Checks", desc: "Professional history verification, reference checks, and criminal background screening (Enterprise plan)." },
          ]},
        ],
      },
      {
        id: "minor-protection",
        title: "Minor Protection",
        blocks: [
          { type: "paragraph", text: "TalentOS enforces strict safeguards for talents under 18:" },
          { type: "bullets", items: [
            { bold: "Guardian Consent", text: "A verified legal guardian must provide written consent before a minor's profile can be activated" },
            { bold: "Restricted Actions", text: "Minors cannot access financial features, sign contracts directly, or participate in community messaging" },
            { bold: "Content Redaction", text: "Automatic redaction policies ensure minor profiles comply with child safety regulations" },
            { bold: "Supervised Access", text: "All interactions are logged and visible to the guardian via a dedicated guardian dashboard" },
          ]},
          { type: "callout", variant: "success", title: "Compliance", text: "TalentOS minor protection policies align with child safety regulations across India, EU, and US jurisdictions." },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════
     PAGEANTS & EVENTS
     ═══════════════════════════════════════════ */
  "process-builder": {
    slug: "process-builder",
    label: "Process Builder",
    sectionTitle: "Pageants & Events",
    breadcrumb: ["Pageants & Events", "Process Builder"],
    title: "Process Builder",
    intro: "Design fully customizable pageant processes with a no-code, drag-and-drop workflow builder. Create any pageant format from beauty competitions to talent hunts.",
    ...getNav("process-builder"),
    sections: [
      {
        id: "stages",
        title: "Defining Stages",
        blocks: [
          { type: "paragraph", text: "The Process Builder lets tenants define their own end-to-end pageant workflow as a series of **stages**. Each stage is a discrete phase with its own rules:" },
          { type: "table", headers: ["Stage Example", "Actions", "Criteria"], rows: [
            ["Registration", "Form submission, fee payment, document upload", "Age limit, geographic eligibility"],
            ["Digital Audition", "Self-tape upload, online scoring", "Minimum score threshold"],
            ["Physical Audition", "In-person evaluation, live scoring", "Judge consensus required"],
            ["Grooming Phase", "Workshop attendance, progress tracking", "Completion of training milestones"],
            ["Semi-Finals", "Performance scoring, sponsor rounds", "Top N advancement"],
            ["Finals", "Live event, multi-judge scoring, audience voting", "Final ranking algorithm"],
          ]},
          { type: "paragraph", text: "Stages are **drag-and-drop reorderable** and support conditional branching (e.g., 'If score < X → elimination' or 'If age < 18 → guardian consent required')." },
        ],
      },
      {
        id: "conditional-logic",
        title: "Conditional Logic",
        blocks: [
          { type: "paragraph", text: "Add If/Then rules to automate decisions within your pageant process:" },
          { type: "code", filename: "Example Rules", code: `// Auto-elimination
IF score < 6.0 THEN eliminate_contestant

// Guardian consent for minors
IF contestant.age < 18 THEN require_guardian_consent

// Sponsor approval for branded rounds
IF stage.type == "sponsor_round" THEN require_brand_approval

// VIP fast-track
IF registration.tier == "premium" THEN skip_stage("digital_audition")

// Tie-breaker
IF scores_tied THEN apply_tiebreaker("highest_individual_score")` },
          { type: "callout", variant: "info", title: "Templates", text: "Save your complete pageant workflow as a reusable template. Clone it across cities, seasons, or franchise locations with one click." },
        ],
      },
      {
        id: "monitoring",
        title: "Process Monitoring",
        blocks: [
          { type: "paragraph", text: "Track your pageant's progress in real-time with the Process Monitoring Dashboard:" },
          { type: "bullets", items: [
            { bold: "Funnel View", text: "See registrations → shortlisted → semi-finalists → finalists conversion at a glance" },
            { bold: "Drop-off Analytics", text: "Identify where contestants are abandoning the process and why" },
            { bold: "Stage-wise Revenue", text: "Track registration fees, sponsor payments, and ticket revenue per stage" },
            { bold: "Timeline View", text: "Gantt-chart view of all stages with deadlines, statuses, and dependencies" },
          ]},
        ],
      },
    ],
  },

  "scoring-engine": {
    slug: "scoring-engine",
    label: "Scoring Engine",
    sectionTitle: "Pageants & Events",
    breadcrumb: ["Pageants & Events", "Scoring Engine"],
    title: "Scoring Engine",
    intro: "A fully configurable, tamper-proof scoring system designed for fair, transparent, and auditable evaluations.",
    ...getNav("scoring-engine"),
    sections: [
      {
        id: "scoring-config",
        title: "Scoring Configuration",
        blocks: [
          { type: "paragraph", text: "The Scoring Engine supports multiple evaluation methodologies. Configure every aspect of how scores are calculated:" },
          { type: "cards", items: [
            { title: "Weighted Criteria", desc: "Assign percentage weights to each scoring dimension (e.g., Appearance 30%, Talent 25%, Interview 20%, Walk 25%)" },
            { title: "Judge Normalization", desc: "Automatically normalize scores across judges to eliminate harsh vs. lenient grading bias" },
            { title: "Blind Scoring", desc: "Judges see only contestant numbers — no names, photos, or agency affiliations during scoring" },
            { title: "Auto-Ranking", desc: "Real-time leaderboard calculated from weighted, normalized scores with tie-breaker rules" },
          ]},
        ],
      },
      {
        id: "integrity",
        title: "Score Integrity",
        blocks: [
          { type: "paragraph", text: "Every score submission is treated as a financial-grade transaction with full tamper protection:" },
          { type: "bullets", items: [
            { bold: "Append-Only", text: "Scores are written to an append-only log. No score can be modified or deleted after submission" },
            { bold: "Hash & Sign", text: "Each score entry is cryptographically hashed and signed with the judge's session key" },
            { bold: "Timestamped", text: "All submissions carry server-side timestamps (not client-side) to prevent backdating" },
            { bold: "Manual Override Logging", text: "If an admin overrides a score, the original score, override reason, and admin identity are permanently logged" },
          ]},
          { type: "callout", variant: "success", title: "Audit Trail", text: "Every score can be traced back to: which judge, what time, from which device, with what criteria weights. This ensures complete transparency for contestants, sponsors, and regulators." },
        ],
      },
    ],
  },

  "judge-management": {
    slug: "judge-management",
    label: "Judge Management",
    sectionTitle: "Pageants & Events",
    breadcrumb: ["Pageants & Events", "Judge Management"],
    title: "Judge Management",
    intro: "Assign judges to events, configure their access, and manage the entire judging lifecycle from invitation to score submission.",
    ...getNav("judge-management"),
    sections: [
      {
        id: "assigning-judges",
        title: "Assigning Judges",
        blocks: [
          { type: "paragraph", text: "Judges are event-specific roles with scoped permissions. They can only access the stages and contestants assigned to them:" },
          { type: "bullets", items: [
            { bold: "Invitation", text: "Send judge invitations via email with a secure one-time link. Judges create accounts with mandatory MFA" },
            { bold: "Stage Assignment", text: "Assign judges to specific stages (e.g., Judge A scores Semi-Finals only, Judge B scores Finals only)" },
            { bold: "Panel Configuration", text: "Define scoring panels with 3-7 judges per stage. Configure whether all judges score all contestants or use round-robin assignment" },
            { bold: "Conflict of Interest", text: "Flag judges with known affiliations to specific agencies or contestants. System prevents assignment conflicts" },
          ]},
        ],
      },
      {
        id: "judge-portal",
        title: "Judge Portal",
        blocks: [
          { type: "paragraph", text: "Judges get a dedicated, distraction-free scoring interface:" },
          { type: "cards", items: [
            { title: "Mobile-First", desc: "Optimized for tablet and phone scoring during live events" },
            { title: "Offline Mode", desc: "Scores are cached locally and synced when connectivity returns" },
            { title: "Timer Controls", desc: "Built-in timer per contestant to ensure fair evaluation time" },
            { title: "Notes & Comments", desc: "Private judge notes per contestant (visible only to the scoring admin)" },
          ]},
        ],
      },
    ],
  },

  "results": {
    slug: "results",
    label: "Results & Publishing",
    sectionTitle: "Pageants & Events",
    breadcrumb: ["Pageants & Events", "Results & Publishing"],
    title: "Results & Publishing",
    intro: "Calculate final rankings, apply tie-breakers, and publish results with multi-approver governance.",
    ...getNav("results"),
    sections: [
      {
        id: "result-calculation",
        title: "Result Calculation",
        blocks: [
          { type: "paragraph", text: "Results are automatically calculated from the scoring engine based on your configured criteria weights, normalization rules, and tie-breaker logic:" },
          { type: "bullets", items: [
            { bold: "Auto-Ranking", text: "Real-time leaderboard as scores come in, with provisional rankings visible to admins only" },
            { bold: "Tie-Breaker Rules", text: "Configurable: highest individual score, judge consensus, head-to-head comparison, or manual admin decision" },
            { bold: "Anomaly Detection", text: "System flags suspicious patterns (e.g., one judge scoring dramatically different from others)" },
          ]},
        ],
      },
      {
        id: "publishing",
        title: "Publishing Workflow",
        blocks: [
          { type: "paragraph", text: "Results go through a mandatory multi-approver workflow before becoming public:" },
          { type: "table", headers: ["Step", "Who", "Action"], rows: [
            ["1. Score Freeze", "System", "All scoring is locked. No further submissions or edits allowed"],
            ["2. Review", "Pageant Director", "Reviews final rankings, anomaly flags, and tie-breaker outcomes"],
            ["3. Audit Sign-Off", "Independent Auditor", "Confirms scoring integrity and absence of conflicts"],
            ["4. Publish", "Director + Auditor", "Dual approval required to make results public"],
          ]},
          { type: "callout", variant: "warning", title: "Result Embargo", text: "Results remain under embargo until explicitly published. Access is gated by role — even admin cannot see final rankings until the Director releases them." },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════
     PAYMENTS & ESCROW
     ═══════════════════════════════════════════ */
  "wallets": {
    slug: "wallets",
    label: "Wallets",
    sectionTitle: "Payments & Escrow",
    breadcrumb: ["Payments & Escrow", "Wallets"],
    title: "Wallets",
    intro: "Digital wallets for talents, agencies, and clients. Track balances, view transaction history, and manage credits.",
    ...getNav("wallets"),
    sections: [
      {
        id: "wallet-types",
        title: "Wallet Types",
        blocks: [
          { type: "paragraph", text: "Every user and organization on TalentOS gets a digital wallet backed by a **double-entry ledger** for financial-grade accuracy:" },
          { type: "table", headers: ["Wallet Type", "Owner", "Purpose"], rows: [
            ["Talent Wallet", "Individual talent", "Receive booking payments, view earnings, request payouts"],
            ["Agency Wallet", "Tenant organization", "Collect commissions, manage operating balance, pay out talents"],
            ["Client Wallet", "Brands / Sponsors", "Load funds, pay for bookings, escrow deposits"],
            ["Platform Wallet", "TalentOS", "Collect platform fees, manage refunds, credit programs"],
          ]},
          { type: "callout", variant: "info", title: "Ledger Architecture", text: "Balances are **derived, not stored**. Every balance is the sum of all ledger entries (credits and debits). This append-only design ensures no balance can be silently manipulated." },
        ],
      },
      {
        id: "transactions",
        title: "Transaction History",
        blocks: [
          { type: "paragraph", text: "Every wallet maintains a complete, immutable transaction history with:" },
          { type: "bullets", items: [
            { bold: "Transaction ID", text: "Unique identifier for every financial event" },
            { bold: "Type", text: "Credit, Debit, Hold, Release, Refund, Fee, Commission" },
            { bold: "Reference", text: "Linked booking, contract, or escrow that triggered the transaction" },
            { bold: "Timestamp", text: "Server-side UTC timestamp, not client-provided" },
            { bold: "Audit Trail", text: "Who initiated, who approved, from which IP address" },
          ]},
        ],
      },
    ],
  },

  "escrow": {
    slug: "escrow",
    label: "Escrow System",
    sectionTitle: "Payments & Escrow",
    breadcrumb: ["Payments & Escrow", "Escrow System"],
    title: "Escrow System",
    intro: "Milestone-based escrow accounts that protect both talent and clients. Funds are locked until deliverables are approved.",
    ...getNav("escrow"),
    sections: [
      {
        id: "escrow-lifecycle",
        title: "Escrow Lifecycle",
        blocks: [
          { type: "paragraph", text: "Every escrow account follows a strict state machine to ensure funds are handled correctly:" },
          { type: "code", filename: "Escrow State Machine", code: `CREATED → FUNDED → LOCKED → RELEASABLE → RELEASED
                                    ↓
                                DISPUTED → RESOLVED
                                    ↓
                              PARTIAL_RELEASE` },
          { type: "table", headers: ["State", "What Happens", "Who Can Act"], rows: [
            ["Created", "Escrow account created, linked to booking/contract", "System (automatic)"],
            ["Funded", "Client deposits full payment into escrow", "Client"],
            ["Locked", "Funds locked — work in progress", "System (automatic)"],
            ["Releasable", "Deliverables submitted and approved", "Agency approves"],
            ["Released", "Funds distributed per commission split", "System (automatic)"],
            ["Disputed", "One party raises a dispute", "Client or Talent"],
            ["Resolved", "Platform mediator makes a decision", "Platform Admin"],
          ]},
        ],
      },
      {
        id: "auto-split",
        title: "Automatic Commission Split",
        blocks: [
          { type: "paragraph", text: "When escrow is released, funds are automatically split according to the booking's commission rules:" },
          { type: "bullets", items: [
            { bold: "Talent Share", text: "The talent's earnings after commission (e.g., 70% of booking value)" },
            { bold: "Agency Commission", text: "The agency's cut (e.g., 20% of booking value)" },
            { bold: "Platform Fee", text: "TalentOS platform fee (e.g., 5% of booking value)" },
            { bold: "Tax Withholding", text: "Automatic GST/TDS calculation and deduction based on Indian tax rules" },
          ]},
          { type: "callout", variant: "success", title: "Transparency", text: "All parties can see the exact split before the booking is confirmed. No hidden fees or surprise deductions." },
        ],
      },
    ],
  },

  "payouts": {
    slug: "payouts",
    label: "Payouts",
    sectionTitle: "Payments & Escrow",
    breadcrumb: ["Payments & Escrow", "Payouts"],
    title: "Payouts",
    intro: "Process talent payouts via bank transfer, UPI, or international wire with multi-step approval workflows.",
    ...getNav("payouts"),
    sections: [
      {
        id: "payout-methods",
        title: "Payout Methods",
        blocks: [
          { type: "paragraph", text: "TalentOS supports multiple payout methods based on talent location and preference:" },
          { type: "table", headers: ["Method", "Speed", "Availability"], rows: [
            ["Bank Transfer (NEFT/IMPS)", "Instant to 2 hours", "India"],
            ["UPI", "Instant", "India"],
            ["SWIFT Wire", "2-5 business days", "International"],
            ["PayPal", "1-2 business days", "International"],
          ]},
        ],
      },
      {
        id: "approval-workflow",
        title: "Approval Workflow",
        blocks: [
          { type: "paragraph", text: "Payouts above configurable thresholds require multi-step approval (Maker-Checker pattern):" },
          { type: "bullets", items: [
            { bold: "Auto-Approve", text: "Payouts under ₹10,000 (configurable) are processed automatically" },
            { bold: "Single Approval", text: "₹10,000 – ₹1,00,000 requires one Finance role approval" },
            { bold: "Dual Approval", text: "Above ₹1,00,000 requires Finance + Owner/Admin approval" },
            { bold: "Fraud Hold", text: "System auto-holds payouts flagged by risk scoring for manual review" },
          ]},
          { type: "callout", variant: "warning", title: "Security", text: "All payout approvals require MFA step-up authentication. Wallet ownership is validated before any payout is processed." },
        ],
      },
    ],
  },

  "commission-splits": {
    slug: "commission-splits",
    label: "Commission Splits",
    sectionTitle: "Payments & Escrow",
    breadcrumb: ["Payments & Escrow", "Commission Splits"],
    title: "Commission Splits",
    intro: "Configure flexible commission structures for bookings, contracts, and events with automatic calculation and distribution.",
    ...getNav("commission-splits"),
    sections: [
      {
        id: "split-models",
        title: "Split Models",
        blocks: [
          { type: "paragraph", text: "TalentOS supports multiple commission structures that can be configured per tenant, per talent, or per booking:" },
          { type: "table", headers: ["Model", "Example", "Use Case"], rows: [
            ["Flat Percentage", "Agency gets 20% of booking", "Standard modeling agency commission"],
            ["Tiered", "15% up to ₹50K, 20% above", "Volume-based incentives"],
            ["Fixed Fee", "₹5,000 per booking", "Staffing and event companies"],
            ["Revenue Share", "60/40 split after costs", "Influencer campaigns with brands"],
            ["Custom Formula", "Talent rate × multiplier − costs", "Complex production deals"],
          ]},
        ],
      },
      {
        id: "tax-handling",
        title: "Tax Handling",
        blocks: [
          { type: "paragraph", text: "Commission calculations automatically account for applicable taxes:" },
          { type: "bullets", items: [
            { bold: "GST", text: "18% GST on agency commission (India). Auto-calculated and shown on invoices" },
            { bold: "TDS", text: "Tax Deducted at Source for talent payments per Indian tax law (Section 194J)" },
            { bold: "Multi-Currency", text: "Commissions calculated in booking currency, converted at live exchange rates for cross-border deals" },
          ]},
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════
     CONTRACTS
     ═══════════════════════════════════════════ */
  "contract-templates": {
    slug: "contract-templates",
    label: "Templates",
    sectionTitle: "Contracts",
    breadcrumb: ["Contracts", "Templates"],
    title: "Contract Templates",
    intro: "Pre-built, legally reviewed contract templates for every agency type. Start fast, customize as needed.",
    ...getNav("contract-templates"),
    sections: [
      {
        id: "available-templates",
        title: "Available Templates",
        blocks: [
          { type: "paragraph", text: "TalentOS ships with industry-standard templates organized by agency type:" },
          { type: "table", headers: ["Code", "Agency Type", "Templates Included"], rows: [
            ["T1", "Roster & Booking", "Talent booking agreement, exclusivity terms, commission structure"],
            ["T2", "Casting Pipeline", "Casting call agreement, audition terms, role assignment contract"],
            ["T3", "Pageant Operator", "Contestant agreement, sponsorship deal, event participation terms"],
            ["T4", "Influencer/Brand", "Brand partnership agreement, content deliverables, usage rights"],
            ["T5", "Academy/Training", "Enrollment agreement, training programs, certification terms"],
            ["T6", "Production House", "Production agreement, crew contracts, location release forms"],
            ["T7", "Event Management", "Vendor contracts, venue agreements, event coordination terms"],
          ]},
        ],
      },
      {
        id: "customization",
        title: "Customization",
        blocks: [
          { type: "paragraph", text: "Templates are starting points — customize them to match your agency's needs:" },
          { type: "bullets", items: [
            { bold: "Edit Clauses", text: "Modify any clause text, add new clauses from the Clause Library, or write custom clauses" },
            { bold: "Variables", text: "Use dynamic variables like {{talent_name}}, {{booking_date}}, {{commission_rate}} that auto-fill from booking data" },
            { bold: "Approval Workflow", text: "Configure who must review and approve contracts before they're sent (e.g., Legal → Finance → Owner)" },
            { bold: "Save as Template", text: "Save customized contracts as new templates for your agency" },
          ]},
        ],
      },
    ],
  },

  "clause-library": {
    slug: "clause-library",
    label: "Clause Library",
    sectionTitle: "Contracts",
    breadcrumb: ["Contracts", "Clause Library"],
    title: "Clause Library",
    intro: "25+ standard clauses across 5 libraries. Mix and match to build contracts that protect your interests.",
    ...getNav("clause-library"),
    sections: [
      {
        id: "clause-categories",
        title: "Clause Categories",
        blocks: [
          { type: "paragraph", text: "The Clause Library is organized into five categories:" },
          { type: "table", headers: ["Library", "Clauses", "Examples"], rows: [
            ["General", "5 clauses", "Definitions, Term & Termination, Force Majeure, Dispute Resolution, Governing Law"],
            ["Finance", "5 clauses", "Payment Terms, Commission Structure, Late Fees, Revenue Share, Expense Reimbursement"],
            ["Workflow", "5 clauses", "Scope of Work, Deliverables & Milestones, Approval Process, Change Orders, Performance Standards"],
            ["Compliance", "5 clauses", "Non-Compete, Non-Solicitation, Intellectual Property, Indemnification, Liability Limitations"],
            ["Privacy", "5 clauses", "Data Protection, Confidentiality, Image & Likeness Rights, Consent, Data Retention"],
          ]},
          { type: "callout", variant: "info", title: "Custom Clauses", text: "Create and save your own clauses to the library. Custom clauses are tenant-scoped and can be shared across all your contract templates." },
        ],
      },
    ],
  },

  "e-signatures": {
    slug: "e-signatures",
    label: "E-Signatures",
    sectionTitle: "Contracts",
    breadcrumb: ["Contracts", "E-Signatures"],
    title: "E-Signatures",
    intro: "Collect legally binding digital signatures with automated routing, reminders, and compliance tracking.",
    ...getNav("e-signatures"),
    sections: [
      {
        id: "signature-flow",
        title: "Signature Flow",
        blocks: [
          { type: "paragraph", text: "The e-signature workflow follows a four-step process:" },
          { type: "table", headers: ["Step", "Action", "Details"], rows: [
            ["1. Create", "Generate contract from template or booking", "Auto-fills variables, applies clause selections"],
            ["2. Route", "Send for signatures in defined order", "Sequential or parallel signing, with deadline enforcement"],
            ["3. Sign", "Signers review and sign digitally", "Email/SMS notification, mobile-friendly signing experience"],
            ["4. Store", "Signed PDF stored securely", "Immutable copy in S3, linked to booking/contract record"],
          ]},
        ],
      },
      {
        id: "legal-validity",
        title: "Legal Validity",
        blocks: [
          { type: "paragraph", text: "TalentOS e-signatures comply with:" },
          { type: "bullets", items: [
            { bold: "India IT Act 2000", text: "Electronic signatures are legally valid for most commercial contracts under Section 5" },
            { bold: "eIDAS (EU)", text: "Advanced Electronic Signature compliance for European operations" },
            { bold: "ESIGN Act (US)", text: "Compliant with US federal e-signature law" },
            { bold: "Audit Trail", text: "Every signature includes signer IP, timestamp, device fingerprint, and consent confirmation" },
          ]},
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════
     AI STUDIO
     ═══════════════════════════════════════════ */
  "comp-cards": {
    slug: "comp-cards",
    label: "Comp Card Generator",
    sectionTitle: "AI Studio",
    breadcrumb: ["AI Studio", "Comp Card Generator"],
    title: "Comp Card Generator",
    intro: "AI-powered comp card generation that creates professional composite cards from talent profile data and portfolio images in seconds.",
    ...getNav("comp-cards"),
    sections: [
      {
        id: "how-it-works",
        title: "How It Works",
        blocks: [
          { type: "paragraph", text: "The Comp Card Generator uses AI to select the best portfolio images, arrange them into professional layouts, and overlay talent statistics:" },
          { type: "bullets", items: [
            { bold: "Image Selection", text: "AI analyzes portfolio images for quality, composition, and variety — selecting the optimal headshot, full body, and editorial shots" },
            { bold: "Layout Engine", text: "Choose from 12+ professional templates or let AI auto-select the best layout for the talent's category" },
            { bold: "Data Overlay", text: "Name, stats, contact info, and agency branding auto-populated from the talent profile" },
            { bold: "Export", text: "Download as print-ready PDF (300 DPI), digital PNG, or shareable web link" },
          ]},
          { type: "callout", variant: "info", title: "Performance", text: "Average generation time: 4.2 seconds. Over 2,800 comp cards generated on the platform." },
        ],
      },
    ],
  },

  "photo-enhancement": {
    slug: "photo-enhancement",
    label: "Photo Enhancement",
    sectionTitle: "AI Studio",
    breadcrumb: ["AI Studio", "Photo Enhancement"],
    title: "Photo Enhancement",
    intro: "Intelligent photo retouching and enhancement that maintains authenticity while optimizing portfolio images for professional use.",
    ...getNav("photo-enhancement"),
    sections: [
      {
        id: "enhancement-features",
        title: "Enhancement Features",
        blocks: [
          { type: "cards", items: [
            { title: "Auto Color Correction", desc: "Intelligent white balance, exposure, and contrast adjustment for consistent look across portfolio" },
            { title: "Background Enhancement", desc: "Clean up or replace backgrounds while maintaining natural lighting and shadows" },
            { title: "Skin Retouching", desc: "Professional-grade retouching that smooths imperfections while preserving skin texture and authenticity" },
            { title: "Resolution Upscaling", desc: "AI upscale low-resolution images to print-quality (up to 4x) without artifacts" },
          ]},
          { type: "callout", variant: "warning", title: "Authenticity Policy", text: "TalentOS enhancement is designed to **optimize, not fabricate**. Body proportions, facial features, and skin tone are never altered. This protects talent authenticity and prevents misrepresentation." },
        ],
      },
    ],
  },

  "smart-matching": {
    slug: "smart-matching",
    label: "Smart Matching",
    sectionTitle: "AI Studio",
    breadcrumb: ["AI Studio", "Smart Matching"],
    title: "Smart Matching",
    intro: "AI-powered talent-to-opportunity matching that analyzes job requirements, talent attributes, and historical booking success to recommend the best fits.",
    ...getNav("smart-matching"),
    sections: [
      {
        id: "matching-algorithm",
        title: "Matching Algorithm",
        blocks: [
          { type: "paragraph", text: "Smart Matching considers multiple signals to rank talent for each opportunity:" },
          { type: "bullets", items: [
            { bold: "Attribute Match", text: "Physical stats, skills, experience level, and category alignment with job requirements" },
            { bold: "Availability", text: "Real-time calendar check to ensure talent is free during the booking window" },
            { bold: "Historical Success", text: "Past booking completion rate, client satisfaction scores, and rebooking frequency" },
            { bold: "Geographic Proximity", text: "Distance from talent's base location to the job site, including travel time estimates" },
            { bold: "Rate Alignment", text: "Talent's rate card vs. the job budget — flagging over/under budget matches" },
          ]},
          { type: "callout", variant: "success", title: "Accuracy", text: "94.7% match accuracy based on post-booking satisfaction surveys. Saves an average of 3.2 hours per booking compared to manual search." },
        ],
      },
    ],
  },

  "bio-writer": {
    slug: "bio-writer",
    label: "Bio Writer",
    sectionTitle: "AI Studio",
    breadcrumb: ["AI Studio", "Bio Writer"],
    title: "Bio Writer",
    intro: "AI-generated professional bios and profile descriptions tailored to each talent's category, experience, and target audience.",
    ...getNav("bio-writer"),
    sections: [
      {
        id: "bio-generation",
        title: "Bio Generation",
        blocks: [
          { type: "paragraph", text: "The Bio Writer creates polished, category-appropriate bios from talent profile data:" },
          { type: "bullets", items: [
            { bold: "Input", text: "Profile data (name, experience, skills, notable work, categories) is auto-pulled from the Talent Graph" },
            { bold: "Tone Options", text: "Professional, Creative, Casual, or Luxury — select the tone that matches your agency's brand" },
            { bold: "Length Variants", text: "Generate short (50 words), medium (150 words), and long (300+ words) versions simultaneously" },
            { bold: "Multi-Language", text: "Generate bios in English, Hindi, Spanish, French, and Portuguese" },
          ]},
          { type: "callout", variant: "info", title: "Stats", text: "Over 6,200 bios generated on the platform, saving an average of 45 minutes per bio compared to manual writing." },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════
     SECURITY & COMPLIANCE
     ═══════════════════════════════════════════ */
  "rbac": {
    slug: "rbac",
    label: "RBAC & Permissions",
    sectionTitle: "Security & Compliance",
    breadcrumb: ["Security & Compliance", "RBAC & Permissions"],
    title: "RBAC & Permissions",
    intro: "Role-Based Access Control with Attribute-Based checks. Fine-grained permissions per role, tenant, and module.",
    ...getNav("rbac"),
    sections: [
      {
        id: "rbac-model",
        title: "RBAC Model",
        blocks: [
          { type: "paragraph", text: "TalentOS implements a hybrid RBAC + ABAC authorization model where access decisions consider:" },
          { type: "bullets", items: [
            { bold: "Role", text: "The user's assigned role (Owner, Admin, Manager, Coordinator, Finance, Viewer)" },
            { bold: "Tenant", text: "Which tenant the user belongs to — enforced on every request" },
            { bold: "Resource Ownership", text: "Whether the user owns or is assigned to the resource being accessed" },
            { bold: "Action Type", text: "Read, Create, Update, Delete, Approve, Publish — each independently permissioned" },
            { bold: "Risk Level", text: "High-risk actions (payouts, result publishing) require step-up authentication" },
          ]},
          { type: "code", filename: "API: Evaluate Policy", code: `POST /v1/policies/evaluate
{
  "subject": { "user_id": "usr_...", "role": "manager", "tenant_id": "tnt_..." },
  "action": "approve_payout",
  "resource": { "type": "payout", "id": "pay_...", "amount": 50000 },
  "context": { "ip": "...", "device": "...", "mfa_verified": true }
}
// Returns: { "allowed": true, "obligations": ["log_audit", "notify_owner"] }` },
        ],
      },
      {
        id: "permission-matrix",
        title: "Permission Matrix",
        blocks: [
          { type: "table", headers: ["Module", "Owner", "Admin", "Manager", "Coordinator", "Finance", "Viewer"], rows: [
            ["Talent Profiles", "Full", "Full", "CRUD", "Read", "Read", "Read"],
            ["Bookings", "Full", "Full", "CRUD", "Read/Update", "Read", "Read"],
            ["Contracts", "Full", "Full", "Create/Read", "Read", "Read", "Read"],
            ["Payments", "Full", "Approve", "Read", "—", "Full", "—"],
            ["Payouts", "Approve", "Approve", "—", "—", "Create", "—"],
            ["Events", "Full", "Full", "CRUD", "CRUD", "Read", "Read"],
            ["Settings", "Full", "Full", "—", "—", "—", "—"],
          ]},
        ],
      },
    ],
  },

  "mfa": {
    slug: "mfa",
    label: "MFA Setup",
    sectionTitle: "Security & Compliance",
    breadcrumb: ["Security & Compliance", "MFA Setup"],
    title: "MFA Setup",
    intro: "Multi-factor authentication setup and management. Required for privileged roles, recommended for all users.",
    ...getNav("mfa"),
    sections: [
      {
        id: "mfa-methods",
        title: "Supported Methods",
        blocks: [
          { type: "table", headers: ["Method", "Security Level", "Setup"], rows: [
            ["Authenticator App (TOTP)", "High", "Scan QR code with Google Authenticator, Authy, or 1Password"],
            ["SMS OTP", "Medium", "Enter phone number, receive 6-digit code per login"],
            ["Email OTP", "Medium", "Receive 6-digit code at registered email"],
          ]},
          { type: "callout", variant: "warning", title: "Required Roles", text: "MFA is mandatory for: Platform Administrators, Tenant Owners, Tenant Admins, Finance roles, Trust & Safety roles. Accounts without MFA will be prompted on every login." },
        ],
      },
      {
        id: "step-up-auth",
        title: "Step-Up Authentication",
        blocks: [
          { type: "paragraph", text: "Certain high-risk actions require MFA re-verification even during an active session:" },
          { type: "bullets", items: [
            { bold: "Payout Approval", text: "Approving any payout requires fresh MFA verification" },
            { bold: "Role Changes", text: "Promoting a user to Admin or Owner requires MFA" },
            { bold: "Result Publishing", text: "Publishing pageant results requires MFA from both Director and Auditor" },
            { bold: "Account Deletion", text: "Deleting a tenant or user account requires MFA + confirmation" },
          ]},
        ],
      },
    ],
  },

  "audit-logs": {
    slug: "audit-logs",
    label: "Audit Logs",
    sectionTitle: "Security & Compliance",
    breadcrumb: ["Security & Compliance", "Audit Logs"],
    title: "Audit Logs",
    intro: "Immutable, append-only audit logs that record every action on the platform for compliance, debugging, and transparency.",
    ...getNav("audit-logs"),
    sections: [
      {
        id: "what-gets-logged",
        title: "What Gets Logged",
        blocks: [
          { type: "paragraph", text: "Every significant action on TalentOS generates an audit log entry:" },
          { type: "bullets", items: [
            { bold: "Authentication Events", text: "Login, logout, failed login, MFA verification, password changes" },
            { bold: "Data Changes", text: "Create, update, delete operations on all entities (talents, bookings, contracts)" },
            { bold: "Financial Actions", text: "Payment received, escrow created, payout approved, commission calculated" },
            { bold: "Permission Changes", text: "Role assignment, permission modification, team membership changes" },
            { bold: "Admin Actions", text: "Tenant configuration, feature toggle, policy update, dispute resolution" },
          ]},
          { type: "code", filename: "Audit Log Entry", code: `{
  "id": "aud_abc123",
  "timestamp": "2026-03-28T10:30:00Z",
  "actor": { "user_id": "usr_...", "role": "admin", "ip": "203.0.113.42" },
  "action": "payout.approved",
  "resource": { "type": "payout", "id": "pay_...", "amount": 25000 },
  "tenant_id": "tnt_...",
  "metadata": { "approval_type": "single", "mfa_verified": true }
}` },
        ],
      },
    ],
  },

  "data-privacy": {
    slug: "data-privacy",
    label: "Data Privacy",
    sectionTitle: "Security & Compliance",
    breadcrumb: ["Security & Compliance", "Data Privacy"],
    title: "Data Privacy",
    intro: "Data protection, privacy compliance, and data subject rights management for GDPR and India DPDP Act.",
    ...getNav("data-privacy"),
    sections: [
      {
        id: "data-protection",
        title: "Data Protection",
        blocks: [
          { type: "cards", items: [
            { title: "Encryption at Rest", desc: "All data encrypted using AES-256 with KMS-managed keys and automatic rotation" },
            { title: "Encryption in Transit", desc: "TLS 1.2+ enforced on all connections. No unencrypted data transmission" },
            { title: "Tenant Isolation", desc: "Row-level security ensures one tenant can never access another tenant's data" },
            { title: "Data Minimization", desc: "Only collect and store data that is necessary for the stated purpose" },
          ]},
        ],
      },
      {
        id: "data-subject-rights",
        title: "Data Subject Rights",
        blocks: [
          { type: "paragraph", text: "TalentOS supports all GDPR and India DPDP data subject rights:" },
          { type: "table", headers: ["Right", "Implementation", "Timeline"], rows: [
            ["Right to Access", "Export all personal data as JSON/CSV", "Within 24 hours"],
            ["Right to Correction", "Self-service profile editing + admin correction", "Immediate"],
            ["Right to Erasure", "Complete data deletion with tombstone markers", "Within 72 hours"],
            ["Right to Portability", "Standard format data export", "Within 24 hours"],
            ["Consent Management", "Granular consent tracking per data use purpose", "Real-time"],
          ]},
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════
     INTEGRATIONS
     ═══════════════════════════════════════════ */
  "payment-gateways": {
    slug: "payment-gateways",
    label: "Payment Gateways",
    sectionTitle: "Integrations",
    breadcrumb: ["Integrations", "Payment Gateways"],
    title: "Payment Gateways",
    intro: "Connect Razorpay, Stripe, or other PCI-compliant payment processors to accept payments and process payouts.",
    ...getNav("payment-gateways"),
    sections: [
      {
        id: "supported-gateways",
        title: "Supported Gateways",
        blocks: [
          { type: "table", headers: ["Gateway", "Region", "Features"], rows: [
            ["Razorpay", "India", "UPI, cards, net banking, wallets, auto-payouts, split payments"],
            ["Stripe", "Global", "Cards, ACH, SEPA, Apple Pay, Google Pay, Connect for payouts"],
          ]},
          { type: "paragraph", text: "Payment data is **never stored** on TalentOS servers. All card data is tokenized by the PSP, keeping TalentOS PCI-DSS scope-reduced." },
        ],
      },
      {
        id: "setup-guide",
        title: "Setup Guide",
        blocks: [
          { type: "bullets", items: [
            { bold: "Step 1", text: "Create an account with your preferred payment gateway (Razorpay or Stripe)" },
            { bold: "Step 2", text: "Navigate to Settings → Integrations → Payment Gateway" },
            { bold: "Step 3", text: "Enter your API Key and Secret Key (stored encrypted in TalentOS vault)" },
            { bold: "Step 4", text: "Configure webhook URL: https://api.talentos.com/v1/webhooks/payments" },
            { bold: "Step 5", text: "Run a test transaction (₹1) to verify the integration" },
          ]},
        ],
      },
    ],
  },

  "calendar-sync": {
    slug: "calendar-sync",
    label: "Calendar Sync",
    sectionTitle: "Integrations",
    breadcrumb: ["Integrations", "Calendar Sync"],
    title: "Calendar Sync",
    intro: "Two-way calendar synchronization with Google Calendar, Outlook, and Apple Calendar for seamless scheduling.",
    ...getNav("calendar-sync"),
    sections: [
      {
        id: "sync-setup",
        title: "Setting Up Calendar Sync",
        blocks: [
          { type: "paragraph", text: "Connect your external calendar to keep talent availability and bookings in sync:" },
          { type: "bullets", items: [
            { bold: "Google Calendar", text: "OAuth 2.0 connection. Bookings appear as events with talent name, location, and call time" },
            { bold: "Outlook / Office 365", text: "Microsoft Graph API integration. Supports shared team calendars" },
            { bold: "Apple Calendar (iCal)", text: "Subscribe via iCal feed URL. Read-only sync from TalentOS to Apple Calendar" },
          ]},
          { type: "callout", variant: "info", title: "Two-Way Sync", text: "Google and Outlook integrations support two-way sync. Events created in the external calendar will block availability in TalentOS. Changes in TalentOS update the external calendar." },
        ],
      },
    ],
  },

  "webhooks": {
    slug: "webhooks",
    label: "Webhooks",
    sectionTitle: "Integrations",
    breadcrumb: ["Integrations", "Webhooks"],
    title: "Webhooks",
    intro: "Receive real-time HTTP notifications when events occur on TalentOS. Build custom automations and integrations.",
    ...getNav("webhooks"),
    sections: [
      {
        id: "webhook-events",
        title: "Available Events",
        blocks: [
          { type: "paragraph", text: "Subscribe to any combination of events:" },
          { type: "table", headers: ["Category", "Events", "Payload"], rows: [
            ["Talent", "talent.created, talent.updated, talent.verified", "Full talent profile object"],
            ["Booking", "booking.created, booking.confirmed, booking.completed", "Booking details + talent + client"],
            ["Payment", "payment.received, escrow.funded, payout.completed", "Transaction details + amounts"],
            ["Contract", "contract.sent, contract.signed, contract.expired", "Contract metadata + signer info"],
            ["Event", "event.created, scoring.submitted, results.published", "Event details + scores"],
          ]},
        ],
      },
      {
        id: "webhook-security",
        title: "Webhook Security",
        blocks: [
          { type: "paragraph", text: "Every webhook delivery is secured with HMAC signing:" },
          { type: "code", filename: "Verify Webhook Signature", code: `// Node.js example
const crypto = require('crypto');

function verifyWebhook(payload, signature, secret) {
  const expected = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expected)
  );
}` },
          { type: "bullets", items: [
            { bold: "HMAC-SHA256", text: "Every payload is signed with your webhook secret. Verify the X-TalentOS-Signature header" },
            { bold: "Retry Policy", text: "Failed deliveries are retried 5 times with exponential backoff (5s, 30s, 2m, 15m, 1h)" },
            { bold: "Idempotency", text: "Each delivery includes a unique event_id. Store processed IDs to prevent duplicate handling" },
          ]},
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════
     API REFERENCE
     ═══════════════════════════════════════════ */
  "api-auth": {
    slug: "api-auth",
    label: "Authentication",
    sectionTitle: "API Reference",
    breadcrumb: ["API Reference", "Authentication"],
    title: "Authentication",
    intro: "Authenticate with the TalentOS API using JWT tokens. All requests require a valid Bearer token and tenant context.",
    ...getNav("api-auth"),
    sections: [
      {
        id: "auth-flow",
        title: "Authentication Flow",
        blocks: [
          { type: "code", filename: "Login & Get Token", code: `POST /v1/auth/login
Content-Type: application/json

{
  "email": "admin@agency.com",
  "password": "your-secure-password"
}

// Response:
{
  "access_token": "eyJhbGciOiJSUzI1NiIs...",
  "refresh_token": "eyJhbGciOiJSUzI1NiIs...",
  "expires_in": 3600,
  "token_type": "Bearer"
}` },
          { type: "bullets", items: [
            { bold: "Access Token", text: "Short-lived JWT (1 hour). Include in Authorization header for all API requests" },
            { bold: "Refresh Token", text: "Long-lived token (30 days). Use to obtain new access tokens without re-login" },
            { bold: "Tenant Scope", text: "Include X-Tenant-Id header with every request. The API validates tenant membership" },
          ]},
          { type: "code", filename: "Making Authenticated Requests", code: `GET /v1/talents
Authorization: Bearer eyJhbGciOiJSUzI1NiIs...
X-Tenant-Id: tnt_abc123
Content-Type: application/json` },
        ],
      },
      {
        id: "api-errors",
        title: "Error Handling",
        blocks: [
          { type: "paragraph", text: "All API errors follow a consistent format:" },
          { type: "code", filename: "Error Response", code: `{
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Access token expired",
    "details": { "expired_at": "2026-03-28T10:00:00Z" },
    "requestId": "req_xyz789"
  }
}` },
          { type: "table", headers: ["Code", "HTTP Status", "Meaning"], rows: [
            ["UNAUTHORIZED", "401", "Invalid or expired token"],
            ["FORBIDDEN", "403", "Valid token but insufficient permissions"],
            ["NOT_FOUND", "404", "Resource does not exist or is not in your tenant"],
            ["POLICY_DENIED", "403", "RBAC/ABAC policy evaluation denied the action"],
            ["RATE_LIMITED", "429", "Too many requests. Check Retry-After header"],
            ["VALIDATION_ERROR", "422", "Invalid request payload. Check details for field errors"],
          ]},
        ],
      },
    ],
  },

  "api-talents": {
    slug: "api-talents",
    label: "Talent Endpoints",
    sectionTitle: "API Reference",
    breadcrumb: ["API Reference", "Talent Endpoints"],
    title: "Talent Endpoints",
    intro: "CRUD operations for talent profiles, portfolio assets, tags, and availability.",
    ...getNav("api-talents"),
    sections: [
      {
        id: "talent-endpoints",
        title: "Endpoints",
        blocks: [
          { type: "table", headers: ["Method", "Endpoint", "Description"], rows: [
            ["GET", "/v1/talents", "List talents with filtering, sorting, pagination"],
            ["POST", "/v1/talents", "Create a new talent profile"],
            ["GET", "/v1/talents/:id", "Get talent profile by ID"],
            ["PATCH", "/v1/talents/:id", "Update talent profile fields"],
            ["DELETE", "/v1/talents/:id", "Soft-delete a talent profile"],
            ["POST", "/v1/talents/:id/tags", "Add tags to a talent"],
            ["DELETE", "/v1/talents/:id/tags/:tagId", "Remove a tag from a talent"],
            ["GET", "/v1/talents/:id/availability", "Get talent availability calendar"],
            ["PUT", "/v1/talents/:id/availability", "Set talent availability blocks"],
            ["GET", "/v1/talents/:id/assets", "List talent portfolio assets"],
            ["POST", "/v1/talents/:id/assets", "Add asset to talent portfolio"],
          ]},
          { type: "code", filename: "Example: List Talents", code: `GET /v1/talents?category=model&status=active&sort=created_at:desc&limit=20
Authorization: Bearer YOUR_TOKEN
X-Tenant-Id: tnt_abc123

// Response:
{
  "data": [
    {
      "id": "tal_001",
      "name": "Jane Doe",
      "category": "model",
      "status": "active",
      "verified": true,
      "stats": { "height": "5'9\\"", "bust": "34", "waist": "24", "hips": "35" },
      "tags": ["runway", "commercial"],
      "created_at": "2026-01-15T08:30:00Z"
    }
  ],
  "pagination": { "cursor": "cur_...", "has_more": true }
}` },
        ],
      },
    ],
  },

  "api-bookings": {
    slug: "api-bookings",
    label: "Booking Endpoints",
    sectionTitle: "API Reference",
    breadcrumb: ["API Reference", "Booking Endpoints"],
    title: "Booking Endpoints",
    intro: "Create, manage, and track bookings including job briefs, submissions, and scheduling.",
    ...getNav("api-bookings"),
    sections: [
      {
        id: "booking-endpoints",
        title: "Endpoints",
        blocks: [
          { type: "table", headers: ["Method", "Endpoint", "Description"], rows: [
            ["GET", "/v1/jobs", "List all jobs/briefs"],
            ["POST", "/v1/jobs", "Create a new job brief"],
            ["GET", "/v1/jobs/:id", "Get job details"],
            ["PATCH", "/v1/jobs/:id", "Update job brief"],
            ["POST", "/v1/jobs/:id/submissions", "Submit talent for a job"],
            ["GET", "/v1/jobs/:id/submissions", "List submissions for a job"],
            ["PATCH", "/v1/jobs/:id/submissions/:subId", "Update submission status (shortlist/reject)"],
            ["POST", "/v1/bookings", "Create confirmed booking from submission"],
            ["GET", "/v1/bookings/:id", "Get booking details"],
            ["PATCH", "/v1/bookings/:id", "Update booking (reschedule, cancel)"],
          ]},
          { type: "code", filename: "Example: Create Job Brief", code: `POST /v1/jobs
{
  "title": "Spring Fashion Campaign",
  "category": "model",
  "description": "Looking for 3 female models for a fashion brand shoot",
  "requirements": {
    "gender": "female",
    "height_min": "5'7\\"",
    "age_range": [20, 30],
    "skills": ["runway", "editorial"]
  },
  "location": "Mumbai, India",
  "dates": ["2026-04-20", "2026-04-21"],
  "budget": { "min": 25000, "max": 50000, "currency": "INR" },
  "visibility": "private"
}` },
        ],
      },
    ],
  },

  "api-payments": {
    slug: "api-payments",
    label: "Payment Endpoints",
    sectionTitle: "API Reference",
    breadcrumb: ["API Reference", "Payment Endpoints"],
    title: "Payment Endpoints",
    intro: "Manage wallets, escrow accounts, invoices, and payouts via the Payments API.",
    ...getNav("api-payments"),
    sections: [
      {
        id: "payment-endpoints",
        title: "Endpoints",
        blocks: [
          { type: "table", headers: ["Method", "Endpoint", "Description"], rows: [
            ["GET", "/v1/wallets/:id", "Get wallet balance and details"],
            ["GET", "/v1/wallets/:id/transactions", "List wallet transactions"],
            ["POST", "/v1/escrow", "Create escrow account for a booking"],
            ["GET", "/v1/escrow/:id", "Get escrow status and details"],
            ["POST", "/v1/escrow/:id/fund", "Fund escrow (client deposits payment)"],
            ["POST", "/v1/escrow/:id/release", "Release escrow funds"],
            ["POST", "/v1/escrow/:id/dispute", "Raise dispute on escrow"],
            ["POST", "/v1/payouts", "Create payout request"],
            ["GET", "/v1/payouts/:id", "Get payout status"],
            ["POST", "/v1/payouts/:id/approve", "Approve payout (Finance/Admin)"],
          ]},
          { type: "callout", variant: "warning", title: "Idempotency Required", text: "All payment mutation endpoints require an Idempotency-Key header. This prevents double-charges or duplicate payouts in case of network retries." },
          { type: "code", filename: "Example: Create Escrow", code: `POST /v1/escrow
Idempotency-Key: idk_unique_key_123
{
  "booking_id": "bk_abc123",
  "amount": 50000,
  "currency": "INR",
  "milestones": [
    { "label": "Shoot Day 1", "amount": 25000, "due_date": "2026-04-20" },
    { "label": "Shoot Day 2", "amount": 25000, "due_date": "2026-04-21" }
  ],
  "commission_split": {
    "talent": 0.70,
    "agency": 0.20,
    "platform": 0.05,
    "tax": 0.05
  }
}` },
        ],
      },
    ],
  },
}

/* ──────────────────────────────────────────────
   HELPER: Get all valid slugs
   ────────────────────────────────────────────── */
export function getAllSlugs(): string[] {
  return Object.keys(docPages)
}

export function getDocPage(slug: string): DocPage | undefined {
  return docPages[slug]
}
