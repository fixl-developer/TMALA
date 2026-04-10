"use client"

import { useEffect, useState, useCallback } from "react"
import { Search, Download, Trash2, ChevronLeft, ChevronRight, ArrowUpDown } from "lucide-react"
import { authFetch } from "@/lib/admin-auth"

const SOURCE_NAMES: Record<string, string> = {
  "/": "Home", "/pricing": "Pricing", "/contact": "Contact", "/white-label": "White Label",
  "/templates": "Templates", "/talents": "For Talents", "/trust-safety": "Trust & Safety",
  "/contracts": "Contracts", "/verification": "Verification", "/payments-escrow": "Payments",
  "/api-docs": "API Docs", "/help": "Help Center", "/features": "Features", "contact-modal": "Contact Modal",
}
function formatSource(src: string) {
  return SOURCE_NAMES[src] || src.replace(/^\//, "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) || "Unknown"
}

interface Lead {
  _id: string
  firstName: string
  lastName: string
  email: string
  company?: string
  phone?: string
  role: string
  teamSize?: string
  message?: string
  sourcePage: string
  status: "new" | "contacted" | "converted"
  createdAt: string
}

const statusColors: Record<string, { bg: string; text: string }> = {
  new: { bg: "#eef2ff", text: "#6366f1" },
  contacted: { bg: "#fffbeb", text: "#d97706" },
  converted: { bg: "#ecfdf5", text: "#059669" },
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [sortOrder, setSortOrder] = useState<"desc" | "asc">("desc")
  const [loading, setLoading] = useState(true)
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const fetchLeads = useCallback(async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams({
        page: String(page),
        limit: "15",
        sortOrder,
      })
      if (statusFilter !== "all") params.set("status", statusFilter)
      if (search) params.set("search", search)

      const res = await authFetch(`/api/leads?${params}`)
      const data = await res.json()
      setLeads(data.leads || [])
      setTotal(data.total || 0)
      setTotalPages(data.totalPages || 1)
    } catch {
      setLeads([])
    } finally {
      setLoading(false)
    }
  }, [page, search, statusFilter, sortOrder])

  useEffect(() => { fetchLeads() }, [fetchLeads])

  // Debounced search
  const [searchInput, setSearchInput] = useState("")
  useEffect(() => {
    const t = setTimeout(() => { setSearch(searchInput); setPage(1) }, 300)
    return () => clearTimeout(t)
  }, [searchInput])

  const updateStatus = async (id: string, status: string) => {
    await authFetch(`/api/leads/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    })
    fetchLeads()
  }

  const deleteLead = async (id: string) => {
    if (!confirm("Are you sure you want to delete this lead?")) return
    await authFetch(`/api/leads/${id}`, { method: "DELETE" })
    fetchLeads()
  }

  const exportCSV = async () => {
    const params = statusFilter !== "all" ? `?status=${statusFilter}` : ""
    const res = await authFetch(`/api/leads/export${params}`)
    const blob = await res.blob()
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `leads-${Date.now()}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "#111" }}>Leads</h1>
          <p className="text-sm mt-1" style={{ color: "#888" }}>{total} total leads</p>
        </div>
        <button
          onClick={exportCSV}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors hover:opacity-90"
          style={{ background: "#6366f1", color: "#fff" }}
        >
          <Download className="w-4 h-4" />
          Export CSV
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "#999" }} />
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search by name, email, company..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm outline-none"
            style={{ background: "#fff", border: "1px solid #e8e8ec", color: "#111" }}
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => { setStatusFilter(e.target.value); setPage(1) }}
          className="px-4 py-2.5 rounded-xl text-sm outline-none appearance-none"
          style={{ background: "#fff", border: "1px solid #e8e8ec", color: "#111", minWidth: 140 }}
        >
          <option value="all">All Status</option>
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="converted">Converted</option>
        </select>
        <button
          onClick={() => setSortOrder(sortOrder === "desc" ? "asc" : "desc")}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium"
          style={{ background: "#fff", border: "1px solid #e8e8ec", color: "#555" }}
        >
          <ArrowUpDown className="w-4 h-4" />
          {sortOrder === "desc" ? "Newest" : "Oldest"}
        </button>
      </div>

      {/* Table */}
      <div className="rounded-2xl overflow-hidden" style={{ background: "#fff", border: "1px solid #e8e8ec" }}>
        {loading ? (
          <div className="p-12 text-center text-sm" style={{ color: "#888" }}>Loading...</div>
        ) : leads.length === 0 ? (
          <div className="p-12 text-center text-sm" style={{ color: "#888" }}>No leads found</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid #e8e8ec", background: "#fafafa" }}>
                  <th className="text-left px-4 py-3 font-semibold" style={{ color: "#555" }}>Name</th>
                  <th className="text-left px-4 py-3 font-semibold" style={{ color: "#555" }}>Email</th>
                  <th className="text-left px-4 py-3 font-semibold hidden lg:table-cell" style={{ color: "#555" }}>Company</th>
                  <th className="text-left px-4 py-3 font-semibold hidden md:table-cell" style={{ color: "#555" }}>Role</th>
                  <th className="text-left px-4 py-3 font-semibold" style={{ color: "#555" }}>Status</th>
                  <th className="text-left px-4 py-3 font-semibold hidden sm:table-cell" style={{ color: "#555" }}>Date</th>
                  <th className="text-right px-4 py-3 font-semibold" style={{ color: "#555" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => {
                  const sc = statusColors[lead.status]
                  const isExpanded = expandedId === lead._id
                  return (
                    <>
                      <tr
                        key={lead._id}
                        className="cursor-pointer transition-colors hover:bg-gray-50"
                        style={{ borderBottom: "1px solid #f0f0f2" }}
                        onClick={() => setExpandedId(isExpanded ? null : lead._id)}
                      >
                        <td className="px-4 py-3 font-medium" style={{ color: "#111" }}>
                          {lead.firstName} {lead.lastName}
                        </td>
                        <td className="px-4 py-3" style={{ color: "#555" }}>{lead.email}</td>
                        <td className="px-4 py-3 hidden lg:table-cell" style={{ color: "#555" }}>{lead.company || "—"}</td>
                        <td className="px-4 py-3 hidden md:table-cell" style={{ color: "#555" }}>{lead.role}</td>
                        <td className="px-4 py-3">
                          <select
                            value={lead.status}
                            onChange={(e) => { e.stopPropagation(); updateStatus(lead._id, e.target.value) }}
                            onClick={(e) => e.stopPropagation()}
                            className="px-2.5 py-1 rounded-full text-[12px] font-bold outline-none cursor-pointer"
                            style={{ background: sc.bg, color: sc.text, border: "none" }}
                          >
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="converted">Converted</option>
                          </select>
                        </td>
                        <td className="px-4 py-3 hidden sm:table-cell" style={{ color: "#888" }}>
                          {new Date(lead.createdAt).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
                        </td>
                        <td className="px-4 py-3 text-right">
                          <button
                            onClick={(e) => { e.stopPropagation(); deleteLead(lead._id) }}
                            className="p-1.5 rounded-lg transition-colors hover:bg-red-50"
                            title="Delete lead"
                          >
                            <Trash2 className="w-4 h-4" style={{ color: "#dc2626" }} />
                          </button>
                        </td>
                      </tr>
                      {isExpanded && (
                        <tr key={`${lead._id}-detail`}>
                          <td colSpan={7} className="px-4 py-4" style={{ background: "#fafafa", borderBottom: "1px solid #f0f0f2" }}>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                              <div>
                                <p className="text-[11px] font-semibold uppercase tracking-wider mb-1" style={{ color: "#888" }}>Phone</p>
                                <p style={{ color: "#333" }}>{lead.phone || "—"}</p>
                              </div>
                              <div>
                                <p className="text-[11px] font-semibold uppercase tracking-wider mb-1" style={{ color: "#888" }}>Team Size</p>
                                <p style={{ color: "#333" }}>{lead.teamSize || "—"}</p>
                              </div>
                              <div>
                                <p className="text-[11px] font-semibold uppercase tracking-wider mb-1" style={{ color: "#888" }}>Source</p>
                                <p style={{ color: "#333" }}>{formatSource(lead.sourcePage)}</p>
                              </div>
                              <div>
                                <p className="text-[11px] font-semibold uppercase tracking-wider mb-1" style={{ color: "#888" }}>Company</p>
                                <p style={{ color: "#333" }}>{lead.company || "—"}</p>
                              </div>
                            </div>
                            {lead.message && (
                              <div className="mt-3">
                                <p className="text-[11px] font-semibold uppercase tracking-wider mb-1" style={{ color: "#888" }}>Message</p>
                                <p className="text-sm leading-relaxed" style={{ color: "#333" }}>{lead.message}</p>
                              </div>
                            )}
                          </td>
                        </tr>
                      )}
                    </>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-4 py-3" style={{ borderTop: "1px solid #e8e8ec" }}>
            <p className="text-sm" style={{ color: "#888" }}>
              Page {page} of {totalPages}
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setPage(Math.max(1, page - 1))}
                disabled={page === 1}
                className="p-2 rounded-lg transition-colors disabled:opacity-30"
                style={{ background: "#f5f5f7" }}
              >
                <ChevronLeft className="w-4 h-4" style={{ color: "#555" }} />
              </button>
              <button
                onClick={() => setPage(Math.min(totalPages, page + 1))}
                disabled={page === totalPages}
                className="p-2 rounded-lg transition-colors disabled:opacity-30"
                style={{ background: "#f5f5f7" }}
              >
                <ChevronRight className="w-4 h-4" style={{ color: "#555" }} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
