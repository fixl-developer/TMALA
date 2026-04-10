"use client"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import { LayoutDashboard, Users, LogOut, Sparkles } from "lucide-react"
import { isAuthenticated, removeToken } from "@/lib/admin-auth"

const navItems = [
  { label: "Dashboard", href: "/admintmalogin/dashboard", icon: LayoutDashboard },
  { label: "Leads", href: "/admintmalogin/dashboard/leads", icon: Users },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!isAuthenticated()) {
      router.replace("/admintmalogin")
    } else {
      setReady(true)
    }
  }, [router])

  const handleLogout = () => {
    removeToken()
    router.replace("/admintmalogin")
  }

  if (!ready) return null

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-60 shrink-0 flex flex-col" style={{ background: "#fff", borderRight: "1px solid #e8e8ec" }}>
        {/* Logo */}
        <div className="flex items-center gap-2 px-5 h-16" style={{ borderBottom: "1px solid #e8e8ec" }}>
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #7c3aed, #6366f1)" }}
          >
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm font-bold" style={{ color: "#111" }}>TMA Admin</span>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
                style={{
                  background: isActive ? "rgba(99,102,241,0.08)" : "transparent",
                  color: isActive ? "#6366f1" : "#555",
                }}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Logout */}
        <div className="px-3 pb-4">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium w-full transition-colors hover:bg-red-50"
            style={{ color: "#dc2626" }}
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto" style={{ background: "#f5f5f7" }}>
        {children}
      </main>
    </div>
  )
}
