"use client"

import { useEffect, useState } from "react"
import { Users, UserPlus, PhoneCall, CheckCircle, TrendingUp } from "lucide-react"
import { authFetch } from "@/lib/admin-auth"
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
  PieChart, Pie, Cell, Legend,
} from "recharts"

interface Stats {
  total: number
  new: number
  contacted: number
  converted: number
  byRole: { name: string; value: number }[]
  bySource: { name: string; value: number }[]
  daily: { date: string; leads: number }[]
}

const statCards = [
  { key: "total", label: "Total Leads", icon: Users, color: "#6366f1" },
  { key: "new", label: "New", icon: UserPlus, color: "#f59e0b" },
  { key: "contacted", label: "Contacted", icon: PhoneCall, color: "#3b82f6" },
  { key: "converted", label: "Converted", icon: CheckCircle, color: "#059669" },
]

const PIE_COLORS = ["#6366f1", "#f59e0b", "#059669", "#3b82f6", "#e11d48", "#8b5cf6", "#0891b2"]

const SOURCE_NAMES: Record<string, string> = {
  "/": "Home",
  "/pricing": "Pricing",
  "/contact": "Contact",
  "/white-label": "White Label",
  "/templates": "Templates",
  "/talents": "For Talents",
  "/trust-safety": "Trust & Safety",
  "/contracts": "Contracts",
  "/verification": "Verification",
  "/payments-escrow": "Payments",
  "/api-docs": "API Docs",
  "/help": "Help Center",
  "/features": "Features",
  "contact-modal": "Contact Modal",
}

function formatSource(src: string) {
  return SOURCE_NAMES[src] || src.replace(/^\//, "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) || "Unknown"
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short" })
}

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats>({
    total: 0, new: 0, contacted: 0, converted: 0,
    byRole: [], bySource: [], daily: [],
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    authFetch("/api/leads/stats")
      .then((r) => r.json())
      .then(setStats)
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  const statusPieData = [
    { name: "New", value: stats.new },
    { name: "Contacted", value: stats.contacted },
    { name: "Converted", value: stats.converted },
  ].filter((d) => d.value > 0)

  const sourceData = stats.bySource.map((s) => ({
    name: formatSource(s.name),
    value: s.value,
  }))

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold" style={{ color: "#111" }}>Dashboard</h1>
        <p className="text-sm mt-1" style={{ color: "#888" }}>Overview of your leads and inquiries</p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {statCards.map((card) => {
          const Icon = card.icon
          const value = stats[card.key as keyof Stats]
          return (
            <div
              key={card.key}
              className="rounded-2xl p-6"
              style={{ background: "#fff", border: "1px solid #e8e8ec" }}
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${card.color}12` }}
                >
                  <Icon className="w-5 h-5" style={{ color: card.color }} />
                </div>
              </div>
              <p className="text-3xl font-bold" style={{ color: "#111" }}>
                {loading ? "—" : typeof value === "number" ? value : 0}
              </p>
              <p className="text-sm mt-1" style={{ color: "#888" }}>{card.label}</p>
            </div>
          )
        })}
      </div>

      {/* Charts row 1: Bar chart + Status pie */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
        {/* Leads over time — bar chart */}
        <div className="lg:col-span-2 rounded-2xl p-6" style={{ background: "#fff", border: "1px solid #e8e8ec" }}>
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-4 h-4" style={{ color: "#6366f1" }} />
            <h3 className="text-sm font-bold" style={{ color: "#111" }}>Leads Over Time</h3>
            <span className="text-[11px] ml-auto" style={{ color: "#888" }}>Last 30 days</span>
          </div>
          {loading || stats.daily.length === 0 ? (
            <div className="h-[250px] flex items-center justify-center text-sm" style={{ color: "#ccc" }}>
              {loading ? "Loading..." : "No data yet"}
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={stats.daily}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f2" />
                <XAxis dataKey="date" tickFormatter={formatDate} tick={{ fontSize: 11, fill: "#888" }} axisLine={false} tickLine={false} />
                <YAxis allowDecimals={false} tick={{ fontSize: 11, fill: "#888" }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ background: "#fff", border: "1px solid #e8e8ec", borderRadius: 12, fontSize: 13 }}
                  labelFormatter={formatDate}
                />
                <Bar dataKey="leads" fill="#6366f1" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>

        {/* Status distribution — pie chart */}
        <div className="rounded-2xl p-6" style={{ background: "#fff", border: "1px solid #e8e8ec" }}>
          <h3 className="text-sm font-bold mb-6" style={{ color: "#111" }}>Lead Status</h3>
          {loading || statusPieData.length === 0 ? (
            <div className="h-[250px] flex items-center justify-center text-sm" style={{ color: "#ccc" }}>
              {loading ? "Loading..." : "No data yet"}
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={statusPieData}
                  cx="50%" cy="45%"
                  innerRadius={55} outerRadius={85}
                  paddingAngle={4}
                  dataKey="value"
                  stroke="none"
                >
                  {statusPieData.map((_, i) => (
                    <Cell key={i} fill={["#f59e0b", "#3b82f6", "#059669"][i] || PIE_COLORS[i]} />
                  ))}
                </Pie>
                <Legend
                  verticalAlign="bottom"
                  iconType="circle"
                  iconSize={8}
                  formatter={(v: string) => <span style={{ color: "#555", fontSize: 12 }}>{v}</span>}
                />
                <Tooltip contentStyle={{ background: "#fff", border: "1px solid #e8e8ec", borderRadius: 12, fontSize: 13 }} />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>

      {/* Charts row 2: Role breakdown + Source breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* By Role — horizontal bar */}
        <div className="rounded-2xl p-6" style={{ background: "#fff", border: "1px solid #e8e8ec" }}>
          <h3 className="text-sm font-bold mb-6" style={{ color: "#111" }}>Leads by Role</h3>
          {loading || stats.byRole.length === 0 ? (
            <div className="h-[220px] flex items-center justify-center text-sm" style={{ color: "#ccc" }}>
              {loading ? "Loading..." : "No data yet"}
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={stats.byRole} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f2" horizontal={false} />
                <XAxis type="number" allowDecimals={false} tick={{ fontSize: 11, fill: "#888" }} axisLine={false} tickLine={false} />
                <YAxis type="category" dataKey="name" width={130} tick={{ fontSize: 11, fill: "#555" }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: "#fff", border: "1px solid #e8e8ec", borderRadius: 12, fontSize: 13 }} />
                <Bar dataKey="value" fill="#8b5cf6" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>

        {/* By Source — pie chart */}
        <div className="rounded-2xl p-6" style={{ background: "#fff", border: "1px solid #e8e8ec" }}>
          <h3 className="text-sm font-bold mb-6" style={{ color: "#111" }}>Leads by Source Page</h3>
          {loading || sourceData.length === 0 ? (
            <div className="h-[220px] flex items-center justify-center text-sm" style={{ color: "#ccc" }}>
              {loading ? "Loading..." : "No data yet"}
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={sourceData}
                  cx="50%" cy="45%"
                  outerRadius={75}
                  paddingAngle={3}
                  dataKey="value"
                  stroke="none"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {sourceData.map((_, i) => (
                    <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ background: "#fff", border: "1px solid #e8e8ec", borderRadius: 12, fontSize: 13 }} />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  )
}
