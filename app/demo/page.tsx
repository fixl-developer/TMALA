"use client"

import React, { useState } from "react"
import Link from "next/link"
import {
  Users, Briefcase, Trophy, CreditCard, Shield, BookOpen,
  Palette, Camera, Star, Building2, BarChart3, ShoppingBag,
  Megaphone, Eye, Headphones, Film, Truck, MessageSquare,
  Layout, Wallet, CalendarCheck, Settings, Globe, Zap,
  Search, ChevronRight, ExternalLink, Mic, Scissors, Video,
  UserPlus, GraduationCap, ClipboardList, Scale, Sparkles
} from "lucide-react"

const FRONTEND_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000"

const dashboardCategories = [
  {
    title: "👑 Pageant Ecosystem",
    description: "End-to-end pageant management — fully wired with backend",
    color: "#7C3AED",
    wired: true,
    dashboards: [
      { name: "Pageant Organizer", route: "/pageant", icon: Trophy, desc: "Events, scoring & results — fully wired", pages: 37, wired: true },
      { name: "Pageant Judge", route: "/pageant-judge", icon: Scale, desc: "Scoring & blind evaluation", pages: 7, wired: true },
      { name: "Pageant Coordinator", route: "/pageant-coordinator", icon: ClipboardList, desc: "Logistics & task management", pages: 6, wired: true },
      { name: "Brand / Sponsor", route: "/brand", icon: Globe, desc: "Sponsor dashboard & ROI", pages: 10, wired: true },
      { name: "Talent (Contestant)", route: "/talent", icon: Sparkles, desc: "Register, scores & portfolio", pages: 27, wired: true },
    ]
  },
  {
    title: "🎭 Modelling & Talent",
    description: "Run your modelling, talent, or staffing agency",
    color: "#8b5cf6",
    dashboards: [
      { name: "Modelling Agency", route: "/modelling", icon: Camera, desc: "Talent roster, castings, bookings, finance & contracts", pages: 18 },
      { name: "Modelling Booker", route: "/modelling-booker", icon: Briefcase, desc: "Auditions, bookings & client management", pages: 8 },
      { name: "Modelling Finance", route: "/modelling-finance", icon: CreditCard, desc: "Invoices, payouts, settlements & reports", pages: 6 },
      { name: "Modelling Manager", route: "/modelling-manager", icon: Settings, desc: "Team management, analytics & operations", pages: 5 },
      { name: "Talent Management", route: "/talent-mgmt", icon: Users, desc: "Multi-talent operations & pipeline", pages: 10 },
    ]
  },
  {
    title: "🎬 Casting & Production",
    description: "Casting agencies, photography studios, and production houses",
    color: "#0073EA",
    dashboards: [
      { name: "Casting Agency", route: "/casting", icon: Film, desc: "Castings, auditions, shortlists & clients", pages: 10 },
      { name: "Photography Studio", route: "/photography", icon: Camera, desc: "Shoots, assets, calendar & invoices", pages: 9 },
      { name: "Speaker Bureau", route: "/speaker", icon: Mic, desc: "Speakers, bookings, events & revenue", pages: 9 },
      { name: "Production House", route: "/production", icon: Film, desc: "Projects, scheduling, crew & deliverables", pages: 6 },
    ]
  },
  {
    title: "🏆 Sports, Styling & More",
    description: "Specialized agency dashboards for every vertical",
    color: "#059669",
    dashboards: [
      { name: "Sports Agency", route: "/sports-agency", icon: Trophy, desc: "Athletes, deals, sponsorships & appearances", pages: 10 },
      { name: "Styling Agency", route: "/styling", icon: Scissors, desc: "Stylists, bookings, packages & schedule", pages: 8 },
      { name: "UGC Agency", route: "/ugc", icon: Video, desc: "Content pipeline, approvals & creators", pages: 10 },
      { name: "Social/Growth Agency", route: "/social-growth", icon: Megaphone, desc: "Campaigns, content calendar & community", pages: 10 },
      { name: "Creative Recruitment", route: "/recruitment", icon: UserPlus, desc: "Jobs, candidates, interviews & placements", pages: 10 },
    ]
  },
  {
    title: "📱 Influencer & Content",
    description: "Influencer campaigns, brand deals, and community management",
    color: "#e2445c",
    dashboards: [
      { name: "Influencer Agency", route: "/influencer", icon: Megaphone, desc: "Creators, deals, campaigns & analytics", pages: 20 },
      { name: "Brand Campaign", route: "/brand-campaign", icon: Zap, desc: "Campaign builder, creator shortlist & budget", pages: 10 },
      { name: "Creative Director", route: "/creative-director", icon: Palette, desc: "Briefs, review queue, assets & quality", pages: 9 },
      { name: "Community Hub", route: "/community", icon: MessageSquare, desc: "Groups, events, members & rewards", pages: 10 },
      { name: "Community Moderator", route: "/community-mod", icon: Shield, desc: "Flagged content, appeals & SLA tracking", pages: 7 },
    ]
  },
  {
    title: "🎪 Events & Staffing",
    description: "Event management, staffing, and shift coordination",
    color: "#F59E0B",
    dashboards: [
      { name: "Event Management", route: "/event", icon: CalendarCheck, desc: "Create events, schedule, staff & settlements", pages: 15 },
      { name: "Event Staff", route: "/event-staff", icon: CalendarCheck, desc: "Check-in, timesheets, earnings & shifts", pages: 6 },
      { name: "Staffing Agency", route: "/staffing", icon: Users, desc: "Staff pool, shifts, assignments & payroll", pages: 8 },
      { name: "Staffing Coordinator", route: "/staffing-coordinator", icon: Headphones, desc: "Scheduling, roster & standby", pages: 6 },
    ]
  },
  {
    title: "🎓 Academy & Guardian",
    description: "Training, courses, and minor protection",
    color: "#00d2d3",
    dashboards: [
      { name: "Academy", route: "/academy", icon: GraduationCap, desc: "Courses, training, certs & revenue", pages: 29 },
      { name: "Guardian (Minor)", route: "/guardian", icon: Shield, desc: "Minor protection, approvals & consents", pages: 9 },
    ]
  },
  {
    title: "🏪 Marketplace & Operations",
    description: "Marketplace, wallet, vendor, and client portals",
    color: "#6366F1",
    dashboards: [
      { name: "Marketplace Admin", route: "/marketplace", icon: ShoppingBag, desc: "Vendors, listings & commission tracking", pages: 8 },
      { name: "Marketplace Client", route: "/marketplace-client", icon: ShoppingBag, desc: "Discover, book & review services", pages: 6 },
      { name: "Client Portal", route: "/client-portal", icon: Eye, desc: "Project tracking, approvals & reports", pages: 7 },
      { name: "Wallet & Payments", route: "/wallet", icon: Wallet, desc: "Balance, payouts, disputes & tax docs", pages: 9 },
      { name: "Vendor Portal", route: "/vendor", icon: Truck, desc: "Vendor management, orders & payments", pages: 5 },
    ]
  },
  {
    title: "🏢 Business Operations",
    description: "Tenant management, finance, analytics, and operations",
    color: "#0ea5e9",
    dashboards: [
      { name: "Tenant Owner", route: "/tenant-owner", icon: Building2, desc: "Revenue, roster, team, events & settings", pages: 25 },
      { name: "Tenant Finance", route: "/tenant-finance", icon: Wallet, desc: "Payments, invoices, payouts & escrow", pages: 25 },
      { name: "Tenant Operations", route: "/tenant-ops", icon: Settings, desc: "Tasks, SLA, scheduling & conflict resolution", pages: 22 },
      { name: "Holding Company", route: "/holding", icon: Building2, desc: "Multi-tenant group management & policies", pages: 8 },
      { name: "Holding Finance", route: "/holding-finance", icon: BarChart3, desc: "Cross-tenant billing & compliance", pages: 10 },
    ]
  },
]

export default function DemoPage() {
  const [search, setSearch] = useState("")
  const totalDashboards = dashboardCategories.reduce((sum, cat) => sum + cat.dashboards.length, 0)
  const totalPages = dashboardCategories.reduce((sum, cat) => sum + cat.dashboards.reduce((s, d) => s + d.pages, 0), 0)

  const filtered = dashboardCategories.map(cat => ({
    ...cat,
    dashboards: cat.dashboards.filter(d =>
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.desc.toLowerCase().includes(search.toLowerCase())
    )
  })).filter(cat => cat.dashboards.length > 0)

  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-6">
            <Zap className="h-3.5 w-3.5" />
            Live Interactive Demo
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
            Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">{totalDashboards} Dashboards</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-4">
            {totalPages}+ pages across talent management, agency operations, events, finance, and more. Click any dashboard to explore.
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto relative mt-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search dashboards..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400 transition-all"
            />
          </div>
        </div>
      </section>

      {/* Dashboard Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        {filtered.map((category) => (
          <div key={category.title} className="mb-14">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-1 w-8 rounded-full" style={{ background: category.color }} />
              <h2 className="text-xl font-bold text-gray-900">{category.title}</h2>
            </div>
            <p className="text-sm text-gray-500 mb-6 ml-11">{category.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.dashboards.map((dashboard) => {
                const Icon = dashboard.icon
                return (
                  <a
                    key={dashboard.route}
                    href={`${FRONTEND_URL}${dashboard.route}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-white rounded-2xl border border-gray-100 p-5 hover:border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="shrink-0 h-10 w-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                        style={{ background: `${category.color}12`, color: category.color }}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                            {dashboard.name}
                          </h3>
                          <ExternalLink className="h-3 w-3 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-xs text-gray-500 mt-1 leading-relaxed">{dashboard.desc}</p>
                        <div className="flex items-center gap-2 mt-3">
                          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">
                            {dashboard.pages} pages
                          </span>
                          <span className="text-[10px] text-gray-400 font-mono">{dashboard.route}</span>
                          {"wired" in dashboard && (dashboard as any).wired && (
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-700 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                              Live API
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-200 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all" />
                  </a>
                )
              })}
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <Search className="h-8 w-8 mx-auto mb-3 opacity-50" />
            <p className="text-sm">No dashboards match &quot;{search}&quot;</p>
          </div>
        )}
      </section>
    </main>
  )
}
