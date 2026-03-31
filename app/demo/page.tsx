"use client"

import React, { useState } from "react"
import Link from "next/link"
import {
  Users, Briefcase, Trophy, CreditCard, Shield, BookOpen,
  Palette, Camera, Star, Building2, BarChart3, ShoppingBag,
  Megaphone, Eye, Headphones, Film, Truck, MessageSquare,
  Layout, Wallet, CalendarCheck, Settings, Globe, Zap,
  Search, ChevronRight, ExternalLink
} from "lucide-react"

const FRONTEND_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000"

const dashboardCategories = [
  {
    title: "Talent & Creators",
    description: "Dashboards for individual talent, influencers, and guardians",
    color: "#6366f1",
    dashboards: [
      { name: "Talent Dashboard", route: "/talent", icon: Users, desc: "Portfolio, castings, bookings, wallet & AI tools", pages: 27 },
      { name: "Influencer Dashboard", route: "/influencer", icon: Megaphone, desc: "Campaigns, deals, deliverables, analytics & payments", pages: 20 },
      { name: "Guardian Dashboard", route: "/guardian", icon: Shield, desc: "Minor protection, approvals, consents & earnings", pages: 9 },
      { name: "Event Staff", route: "/event-staff", icon: CalendarCheck, desc: "Check-in, timesheets, earnings & shift management", pages: 6 },
      { name: "Pageant Judge", route: "/pageant-judge", icon: Star, desc: "Scoring, rubrics, assigned pageants & history", pages: 7 },
    ]
  },
  {
    title: "Agency Management",
    description: "Run your modelling, talent, or staffing agency",
    color: "#8b5cf6",
    dashboards: [
      { name: "Modelling Agency", route: "/modelling", icon: Camera, desc: "Talent roster, castings, bookings, finance & contracts", pages: 18 },
      { name: "Modelling Booker", route: "/modelling-booker", icon: Briefcase, desc: "Auditions, bookings & client management", pages: 8 },
      { name: "Modelling Finance", route: "/modelling-finance", icon: CreditCard, desc: "Invoices, payouts, settlements & reports", pages: 6 },
      { name: "Modelling Manager", route: "/modelling-manager", icon: Settings, desc: "Team management, analytics & operations", pages: 5 },
      { name: "Staffing Agency", route: "/staffing", icon: Users, desc: "Staff pool, shifts, assignments & payroll", pages: 8 },
      { name: "Staffing Coordinator", route: "/staffing-coordinator", icon: Headphones, desc: "Scheduling, communications & coordination", pages: 6 },
    ]
  },
  {
    title: "Events & Pageants",
    description: "Manage events, pageants, and productions",
    color: "#ec4899",
    dashboards: [
      { name: "Event Management", route: "/event", icon: CalendarCheck, desc: "Create events, schedule, staff, check-in & settlements", pages: 15 },
      { name: "Pageant Platform", route: "/pageant", icon: Trophy, desc: "Builder, judging, contestants, sponsors & results", pages: 20 },
      { name: "Production House", route: "/production", icon: Film, desc: "Projects, scheduling, crew & deliverables", pages: 6 },
    ]
  },
  {
    title: "Brand & Marketplace",
    description: "Brand campaigns, collaborations, and marketplace",
    color: "#f59e0b",
    dashboards: [
      { name: "Brand Dashboard", route: "/brand", icon: Globe, desc: "Campaigns, collaborations, content library & ROI", pages: 10 },
      { name: "Brand Campaign", route: "/brand-campaign", icon: Zap, desc: "Campaign builder, creator shortlist, approvals & budget", pages: 10 },
      { name: "Marketplace", route: "/marketplace", icon: ShoppingBag, desc: "Listings, orders, reviews & commission tracking", pages: 8 },
      { name: "Client Portal", route: "/client-portal", icon: Eye, desc: "Project tracking, approvals, deliverables & reports", pages: 7 },
    ]
  },
  {
    title: "Creative & Community",
    description: "Creative direction, community management, and moderation",
    color: "#10b981",
    dashboards: [
      { name: "Creative Director", route: "/creative-director", icon: Palette, desc: "Briefs, review queue, assets & quality control", pages: 9 },
      { name: "Community Hub", route: "/community", icon: MessageSquare, desc: "Groups, events, members, rewards & analytics", pages: 10 },
      { name: "Community Moderator", route: "/community-mod", icon: Shield, desc: "Flagged content, appeals, SLA tracking & offenders", pages: 7 },
    ]
  },
  {
    title: "Business Operations",
    description: "Tenant management, finance, analytics, and operations",
    color: "#0ea5e9",
    dashboards: [
      { name: "Admin Panel", route: "/admin", icon: Layout, desc: "Full admin: users, roles, CRM, finance, settings & more", pages: 45 },
      { name: "Tenant Owner", route: "/tenant-owner", icon: Building2, desc: "Revenue, roster, team, events, WES & settings", pages: 25 },
      { name: "Tenant Finance", route: "/tenant-finance", icon: Wallet, desc: "Payments, invoices, payouts, escrow, tax & reports", pages: 25 },
      { name: "Tenant Operations", route: "/tenant-ops", icon: Settings, desc: "Tasks, SLA, scheduling, staff & conflict resolution", pages: 22 },
      { name: "Holding Company", route: "/holding", icon: Building2, desc: "Multi-tenant group management, policies & analytics", pages: 8 },
      { name: "Holding Finance", route: "/holding-finance", icon: BarChart3, desc: "Cross-tenant billing, settlements & compliance", pages: 10 },
      { name: "Vendor Portal", route: "/vendor", icon: Truck, desc: "Vendor management, orders & payments", pages: 5 },
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
