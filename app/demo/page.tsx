"use client"

import { useState } from "react"
import {
  Users, Crown, Sparkles, Megaphone, UserCog, Building2, CalendarDays,
  ShieldCheck, Scale, ClipboardList, Briefcase, UserCheck, Wallet, Zap,
  Globe, Shield, BarChart3, Film, Mic, Trophy, Scissors, Video, UserPlus,
  ExternalLink, Camera, Headphones, Clapperboard, GraduationCap, Palette,
  ShoppingBag, Eye
} from "lucide-react"

/* Light-themed demo catalogue matching tmalanding site design.
 * Each role click opens http://localhost:3000/login?email=<EMAIL> so the
 * main app can auto-fill + quick-login into that demo user. */

const FRONTEND_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000"

type RoleCard = { label: string; desc: string; email: string; icon: any; color: string; category?: string }
type Agency = { name: string; icon: any; color: string; blueprints: string; roles: RoleCard[] }

const AGENCIES: Agency[] = [
  {
    name: "Modeling Agency",
    icon: Camera,
    color: "#00c875",
    blueprints: "B1",
    roles: [
      { label: "Modelling Agency", desc: "Roster, bookings & finance", email: "modelling@talentos.io", icon: Users, color: "#00c875" },
      { label: "Agency Booker", desc: "Castings, clients & pipeline", email: "booker@talentos.io", icon: Briefcase, color: "#0073EA" },
      { label: "Model Manager", desc: "Roster & availability", email: "model-manager@talentos.io", icon: UserCheck, color: "#9D50DD" },
      { label: "Model Finance", desc: "Invoices, payouts & escrow", email: "model-finance@talentos.io", icon: Wallet, color: "#00C875" },
    ],
  },
  {
    name: "Talent Agency",
    icon: UserCog,
    color: "#ffcb00",
    blueprints: "B1 + B2",
    roles: [
      { label: "Talent Management", desc: "Multi-talent operations", email: "talent-mgmt@talentos.io", icon: UserCog, color: "#ffcb00" },
      { label: "Talent (Individual)", desc: "Portfolio, bookings & wallet", email: "talent@talentos.io", icon: Sparkles, color: "#fdab3d" },
    ],
  },
  {
    name: "Casting Operations",
    icon: Film,
    color: "#0073EA",
    blueprints: "B2",
    roles: [
      { label: "Casting Agency", desc: "Castings, auditions & shortlists", email: "casting@talentos.io", icon: Film, color: "#0073EA" },
    ],
  },
  {
    name: "Production Studio",
    icon: Film,
    color: "#D97706",
    blueprints: "B2 + B6",
    roles: [
      { category: "Leadership", label: "Studio Exec", desc: "Slate · Greenlight · Portfolio · Risk", email: "studio-exec@talentos.io", icon: Crown, color: "#1E3A8A" },
      { category: "Leadership", label: "Director", desc: "Slate · Scenes · Dailies · Cuts", email: "director@talentos.io", icon: Clapperboard, color: "#0D9488" },
      { category: "Leadership", label: "Showrunner", desc: "Bible · Arcs · Writers · Episodes", email: "showrunner@talentos.io", icon: Sparkles, color: "#7C3AED" },
      { category: "Production", label: "Line Producer", desc: "Budget · POs · Vendors · Schedule", email: "line-producer@talentos.io", icon: ClipboardList, color: "#059669" },
      { category: "Production", label: "1st AD", desc: "Schedule · Callsheets · DOOD · Continuity", email: "first-ad@talentos.io", icon: Megaphone, color: "#DC2626" },
      { category: "Production", label: "Production Ops", desc: "Fleet · Meals · Facilities · Moves", email: "transport@talentos.io", icon: Briefcase, color: "#475569" },
      { category: "Craft", label: "DP / Cinematography", desc: "Shot List · Lighting · Data · Color", email: "dp@talentos.io", icon: Camera, color: "#EA580C" },
      { category: "Craft", label: "Production Designer", desc: "Sets · Wardrobe · Props · HMU", email: "art-dept@talentos.io", icon: Palette, color: "#92400E" },
      { category: "Craft", label: "Post / VFX", desc: "Cuts · VFX · Sound · Cues", email: "post-sup@talentos.io", icon: Scissors, color: "#7C3AED" },
      { category: "Craft", label: "Location Manager", desc: "Scouting · Permits · Stunts · Safety", email: "location@talentos.io", icon: Building2, color: "#D97706" },
      { category: "Business", label: "Casting", desc: "Auditions · Callbacks · Offers · Shortlists", email: "film-casting@talentos.io", icon: UserPlus, color: "#86198F" },
      { category: "Business", label: "Studio Legal", desc: "Contracts · Rights · Chain · S&P", email: "studio-legal@talentos.io", icon: Scale, color: "#334155" },
      { category: "Business", label: "Studio Finance", desc: "Budget · Burn · Tax · Payroll", email: "studio-finance@talentos.io", icon: Wallet, color: "#065F46" },
      { category: "Business", label: "HR & Welfare", desc: "Roster · Welfare · Minors · Carbon", email: "studio-hr@talentos.io", icon: Users, color: "#15803D" },
      { category: "Growth", label: "Publicist & Marketing", desc: "Press · Social · Premieres · Awards", email: "publicist@talentos.io", icon: Megaphone, color: "#C026D3" },
    ],
  },
  {
    name: "Influencer Management",
    icon: Megaphone,
    color: "#e2445c",
    blueprints: "B4",
    roles: [
      { label: "Influencer Agency", desc: "Creators, deals & campaigns", email: "influencer@talentos.io", icon: Megaphone, color: "#e2445c" },
      { label: "Campaign Manager", desc: "Content approvals & execution", email: "campaign-mgr@talentos.io", icon: Zap, color: "#EA580C" },
    ],
  },
  {
    name: "UGC Production",
    icon: Video,
    color: "#6366F1",
    blueprints: "B4",
    roles: [
      { label: "UGC Agency", desc: "Content pipeline & creators", email: "ugc@talentos.io", icon: Video, color: "#6366F1" },
    ],
  },
  {
    name: "Social & Growth",
    icon: BarChart3,
    color: "#06B6D4",
    blueprints: "B4 + B8",
    roles: [
      { label: "Social/Growth Agency", desc: "Campaigns, content & community", email: "social-growth@talentos.io", icon: BarChart3, color: "#06B6D4" },
    ],
  },
  {
    name: "Pageant Operations",
    icon: Trophy,
    color: "#9333EA",
    blueprints: "B3 + B8",
    roles: [
      { label: "Pageant Organizer", desc: "Events, scoring & results", email: "pageant@talentos.io", icon: Trophy, color: "#9333EA" },
      { label: "Pageant Judge", desc: "Scoring & blind evaluation", email: "judge@talentos.io", icon: Scale, color: "#7C3AED" },
      { label: "Pageant Coordinator", desc: "Logistics & task management", email: "coordinator@talentos.io", icon: ClipboardList, color: "#C026D3" },
      { label: "Brand / Sponsor", desc: "Sponsor dashboard & ROI", email: "brand-owner@talentos.io", icon: Globe, color: "#2563EB" },
    ],
  },
  {
    name: "Pageant Training",
    icon: GraduationCap,
    color: "#F59E0B",
    blueprints: "B5",
    roles: [
      { label: "Academy", desc: "Courses, training & certs", email: "academy@talentos.io", icon: GraduationCap, color: "#F59E0B" },
    ],
  },
  {
    name: "Acting / Modeling Academy",
    icon: GraduationCap,
    color: "#EC4899",
    blueprints: "B5",
    roles: [
      { label: "Academy Operator", desc: "Training programs & students", email: "academy@talentos.io", icon: GraduationCap, color: "#EC4899" },
    ],
  },
  {
    name: "Photography Studio",
    icon: Camera,
    color: "#0891B2",
    blueprints: "B1 + B6",
    roles: [
      { label: "Photography Studio", desc: "Shoots, assets & invoices", email: "photography@talentos.io", icon: Camera, color: "#0891B2" },
    ],
  },
  {
    name: "Speaker Bureau",
    icon: Mic,
    color: "#B45309",
    blueprints: "B6",
    roles: [
      { label: "Speaker Bureau", desc: "Speakers, bookings & revenue", email: "speaker@talentos.io", icon: Mic, color: "#B45309" },
    ],
  },
  {
    name: "Sports Agency",
    icon: Trophy,
    color: "#10B981",
    blueprints: "B7",
    roles: [
      { label: "Sports Agency", desc: "Athletes, deals & sponsorships", email: "sports@talentos.io", icon: Trophy, color: "#10B981" },
    ],
  },
  {
    name: "Styling Agency",
    icon: Scissors,
    color: "#DB2777",
    blueprints: "B6",
    roles: [
      { label: "Styling Agency", desc: "Stylists, bookings & schedule", email: "styling@talentos.io", icon: Scissors, color: "#DB2777" },
    ],
  },
  {
    name: "Creative Recruitment",
    icon: UserPlus,
    color: "#2563EB",
    blueprints: "B6",
    roles: [
      { label: "Creative Recruitment", desc: "Jobs, candidates & placements", email: "recruitment@talentos.io", icon: UserPlus, color: "#2563EB" },
    ],
  },
  {
    name: "Event Management",
    icon: CalendarDays,
    color: "#F59E0B",
    blueprints: "B9",
    roles: [
      { label: "Event Management", desc: "Create events & settlements", email: "event@talentos.io", icon: CalendarDays, color: "#F59E0B" },
      { label: "Event Staff", desc: "Check-in, timesheets & earnings", email: "staff@talentos.io", icon: Users, color: "#10B981" },
    ],
  },
  {
    name: "Staffing Agency",
    icon: Users,
    color: "#6366F1",
    blueprints: "B9",
    roles: [
      { label: "Staffing Agency", desc: "Staff pool, shifts & payroll", email: "staffing@talentos.io", icon: Users, color: "#6366F1" },
      { label: "Staffing Coordinator", desc: "Scheduling & roster", email: "staffing-coord@talentos.io", icon: Headphones, color: "#8B5CF6" },
    ],
  },
  {
    name: "Community & Moderation",
    icon: Shield,
    color: "#14B8A6",
    blueprints: "B8",
    roles: [
      { label: "Community Hub", desc: "Groups, events & members", email: "community@talentos.io", icon: Users, color: "#14B8A6" },
      { label: "Community Moderator", desc: "Flagged content & appeals", email: "moderator@talentos.io", icon: Shield, color: "#0F766E" },
    ],
  },
  {
    name: "Creative Director",
    icon: Palette,
    color: "#9333EA",
    blueprints: "B4",
    roles: [
      { label: "Creative Director", desc: "Briefs, review queue & quality", email: "creative-director@talentos.io", icon: Palette, color: "#9333EA" },
    ],
  },
  {
    name: "Marketplace",
    icon: ShoppingBag,
    color: "#0EA5E9",
    blueprints: "B10",
    roles: [
      { label: "Marketplace Admin", desc: "Vendors, listings & commission", email: "marketplace@talentos.io", icon: ShoppingBag, color: "#0EA5E9" },
      { label: "Marketplace Client", desc: "Discover, book & review", email: "marketplace-client@talentos.io", icon: Eye, color: "#38BDF8" },
    ],
  },
  {
    name: "Tenant Operations",
    icon: Building2,
    color: "#64748B",
    blueprints: "B10",
    roles: [
      { label: "Tenant Owner", desc: "Revenue, roster & settings", email: "owner@talentos.io", icon: Crown, color: "#0F172A" },
      { label: "Tenant Ops", desc: "Tasks, SLA & scheduling", email: "ops@talentos.io", icon: ClipboardList, color: "#475569" },
      { label: "Tenant Finance", desc: "Payments, invoices & escrow", email: "finance@talentos.io", icon: Wallet, color: "#10B981" },
      { label: "Tenant Admin", desc: "Users, permissions & config", email: "admin@talentos.io", icon: Shield, color: "#2563EB" },
    ],
  },
  {
    name: "Holding Company",
    icon: Building2,
    color: "#475569",
    blueprints: "B10",
    roles: [
      { label: "Holding Admin", desc: "Multi-tenant group management", email: "holding@talentos.io", icon: Building2, color: "#475569" },
      { label: "Holding Finance", desc: "Cross-tenant billing & compliance", email: "holding-finance@talentos.io", icon: BarChart3, color: "#64748B" },
    ],
  },
]

const CROSS_ROLES: RoleCard[] = [
  { label: "Guardian (Minor)", desc: "Minor protection & approvals", email: "guardian@talentos.io", icon: ShieldCheck, color: "#B45309" },
  { label: "Wallet & Payments", desc: "Balance, payouts & disputes", email: "wallet@talentos.io", icon: Wallet, color: "#7C3AED" },
  { label: "Client Portal", desc: "Approve deliverables & track", email: "client@talentos.io", icon: ExternalLink, color: "#0891B2" },
]

export default function DemoPage() {
  const [selectedAgency, setSelectedAgency] = useState(3) // Production Studio featured

  const agency = AGENCIES[selectedAgency]
  const font = "'DM Sans', system-ui, sans-serif"

  const grouped: Record<string, RoleCard[]> = {}
  const ungrouped: RoleCard[] = []
  agency.roles.forEach(r => {
    if (r.category) {
      grouped[r.category] = grouped[r.category] || []
      grouped[r.category].push(r)
    } else {
      ungrouped.push(r)
    }
  })

  const openRole = (email: string) => {
    window.open(`${FRONTEND_URL}/auto-login?email=${encodeURIComponent(email)}`, "_blank", "noopener,noreferrer")
  }

  const totalRoles = AGENCIES.reduce((s, a) => s + a.roles.length, 0) + CROSS_ROLES.length

  return (
    <div style={{ height: "calc(100vh - 80px)", display: "flex", background: "#FAFAFA", fontFamily: font, color: "#0F172A", marginTop: 80, overflow: "hidden" }}>

      {/* ─── Left: Agency Sidebar ─── */}
      <div style={{ width: 272, background: "#FFFFFF", borderRight: "1px solid #E5E7EB", display: "flex", flexDirection: "column", flexShrink: 0, height: "100%" }}>
        {/* Header */}
        <div style={{ padding: "18px 18px 12px", borderBottom: "1px solid #F1F5F9" }}>
          <div style={{ fontSize: 10, fontWeight: 800, color: "#0F172A", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 2 }}>Explore Demos</div>
          <div style={{ fontSize: 10, color: "#94A3B8" }}>22 agency types · 10 blueprints</div>
        </div>

        {/* Agency list */}
        <div style={{ flex: 1, overflowY: "auto", padding: "8px 6px", overscrollBehavior: "contain" }}>
          <div style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#94A3B8", padding: "8px 12px 4px" }}>Agencies</div>
          {AGENCIES.map((a, i) => {
            const Icon = a.icon
            const active = i === selectedAgency
            return (
              <button
                key={i}
                onClick={() => setSelectedAgency(i)}
                style={{
                  width: "100%", display: "flex", alignItems: "center", gap: 10,
                  padding: "9px 12px", borderRadius: 9, border: "none",
                  background: active ? `${a.color}14` : "transparent",
                  cursor: "pointer", textAlign: "left", transition: "all 0.12s",
                  marginBottom: 2,
                }}
                onMouseEnter={e => { if (!active) e.currentTarget.style.background = "#F8FAFC" }}
                onMouseLeave={e => { if (!active) e.currentTarget.style.background = "transparent" }}
              >
                <div style={{ width: 30, height: 30, borderRadius: 8, background: active ? `${a.color}22` : "#F1F5F9", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.12s" }}>
                  <Icon size={15} color={active ? a.color : "#64748B"} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: active ? "#0F172A" : "#475569", marginBottom: 1, lineHeight: 1.2 }}>{a.name}</div>
                  <div style={{ fontSize: 9, color: "#94A3B8" }}>{a.blueprints} · {a.roles.length} role{a.roles.length > 1 ? "s" : ""}</div>
                </div>
              </button>
            )
          })}
        </div>

        {/* Footer counts */}
        <div style={{ padding: "12px 16px", borderTop: "1px solid #F1F5F9", display: "flex", gap: 10 }}>
          <div style={{ flex: 1, padding: "9px 10px", borderRadius: 9, background: "#FEF3C7", border: "1px solid #FDE68A", textAlign: "center" }}>
            <div style={{ fontSize: 16, fontWeight: 800, color: "#B45309" }}>{totalRoles}</div>
            <div style={{ fontSize: 8, color: "#92400E", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 700 }}>Roles</div>
          </div>
          <div style={{ flex: 1, padding: "9px 10px", borderRadius: 9, background: "#DBEAFE", border: "1px solid #BFDBFE", textAlign: "center" }}>
            <div style={{ fontSize: 16, fontWeight: 800, color: "#1D4ED8" }}>900+</div>
            <div style={{ fontSize: 8, color: "#1E3A8A", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 700 }}>Pages</div>
          </div>
        </div>
      </div>

      {/* ─── Main content ─── */}
      <div style={{ flex: 1, padding: "32px 40px 60px", overflowY: "auto", overflowX: "hidden", overscrollBehavior: "contain" }}>
        {/* Header */}
        <div style={{ marginBottom: 24, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
              <div style={{ width: 48, height: 48, borderRadius: 11, background: `${agency.color}14`, border: `1px solid ${agency.color}30`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <agency.icon size={23} color={agency.color} />
              </div>
              <div>
                <h1 style={{ fontSize: 23, fontWeight: 800, color: "#0F172A", margin: 0, letterSpacing: "-0.4px" }}>{agency.name}</h1>
                <div style={{ fontSize: 11, color: "#64748B", marginTop: 3 }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "2px 9px", borderRadius: 999, background: `${agency.color}14`, color: agency.color, fontWeight: 700, fontSize: 10 }}>{agency.blueprints}</span>
                  <span style={{ marginLeft: 8 }}>{agency.roles.length} {agency.roles.length === 1 ? "role" : "roles"}</span>
                </div>
              </div>
            </div>
            <div style={{ fontSize: 11, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700, marginTop: 6, marginLeft: 60 }}>Dashboard Roles — Click to Login</div>
          </div>
          <a
            href={`${FRONTEND_URL}/login`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 12, fontWeight: 600, padding: "10px 18px", borderRadius: 10, background: "linear-gradient(135deg, #f59e0b, #ef4444)", color: "#fff", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, boxShadow: "0 6px 18px rgba(239, 68, 68, 0.28)" }}
          >
            Open login page <ExternalLink size={12} />
          </a>
        </div>

        {/* Grouped or flat */}
        {Object.keys(grouped).length > 0 ? (
          Object.entries(grouped).map(([category, roles]) => (
            <div key={category} style={{ marginBottom: 22 }}>
              <div style={{ fontSize: 10, fontWeight: 800, color: agency.color, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 10, paddingLeft: 2 }}>
                {category} · {roles.length}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 10 }}>
                {roles.map((r, i) => <RoleCard key={i} role={r} onClick={() => openRole(r.email)} />)}
              </div>
            </div>
          ))
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 10 }}>
            {ungrouped.map((r, i) => <RoleCard key={i} role={r} onClick={() => openRole(r.email)} />)}
          </div>
        )}

        {/* Cross-cutting roles */}
        <div style={{ marginTop: 32, paddingTop: 20, borderTop: "1px solid #E5E7EB" }}>
          <div style={{ fontSize: 10, fontWeight: 800, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 10 }}>
            Cross-Cutting Roles · Available to all agencies
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 10 }}>
            {CROSS_ROLES.map((r, i) => <RoleCard key={i} role={r} onClick={() => openRole(r.email)} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

function RoleCard({ role, onClick }: { role: RoleCard; onClick: () => void }) {
  const Icon = role.icon
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex", alignItems: "center", gap: 12,
        padding: "14px 14px",
        background: "#FFFFFF",
        border: "1px solid #E5E7EB",
        borderRadius: 12,
        cursor: "pointer",
        textAlign: "left",
        transition: "all 0.15s",
        fontFamily: "'DM Sans', system-ui, sans-serif",
        color: "#0F172A",
        width: "100%",
        boxShadow: "0 1px 3px rgba(15, 23, 42, 0.03)",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${role.color}50`
        e.currentTarget.style.transform = "translateY(-2px)"
        e.currentTarget.style.boxShadow = `0 8px 24px ${role.color}14, 0 2px 6px rgba(15, 23, 42, 0.04)`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "#E5E7EB"
        e.currentTarget.style.transform = ""
        e.currentTarget.style.boxShadow = "0 1px 3px rgba(15, 23, 42, 0.03)"
      }}
    >
      <div style={{ width: 38, height: 38, borderRadius: 10, background: `${role.color}12`, border: `1px solid ${role.color}25`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <Icon size={18} color={role.color} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#0F172A", lineHeight: 1.2, marginBottom: 3 }}>{role.label}</div>
        <div style={{ fontSize: 10, color: "#64748B", lineHeight: 1.35 }}>{role.desc}</div>
      </div>
      <div style={{ fontSize: 9, fontFamily: "ui-monospace, monospace", color: "#94A3B8", padding: "4px 8px", borderRadius: 6, background: "#F1F5F9", flexShrink: 0 }}>
        {role.email.split("@")[0]}
      </div>
    </button>
  )
}
