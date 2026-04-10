"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Lock, User, ArrowRight, Sparkles } from "lucide-react"
import { adminLogin, isAuthenticated } from "@/lib/admin-auth"

export default function AdminLoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (isAuthenticated()) router.replace("/admintmalogin/dashboard")
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)
    try {
      await adminLogin(username, password)
      router.push("/admintmalogin/dashboard")
    } catch (err: any) {
      setError(err.message || "Invalid credentials")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 50%, #ddd6fe 100%)" }}>
      <div className="w-full max-w-[400px] rounded-2xl p-8" style={{ background: "#fff", boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}>
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #7c3aed, #6366f1)" }}
          >
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold" style={{ color: "#111" }}>TMA Admin</span>
        </div>

        <h1 className="text-xl font-bold text-center mb-1" style={{ color: "#111" }}>
          Admin Login
        </h1>
        <p className="text-sm text-center mb-6" style={{ color: "#888" }}>
          Sign in to manage leads and inquiries
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: "#999" }} />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2 focus:ring-violet-500/20"
              style={{ border: "1.5px solid #e5e7eb", color: "#111" }}
            />
          </div>

          <div className="relative">
            <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: "#999" }} />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2 focus:ring-violet-500/20"
              style={{ border: "1.5px solid #e5e7eb", color: "#111" }}
            />
          </div>

          {error && (
            <p className="text-[13px] text-center py-2 px-3 rounded-lg" style={{ color: "#dc2626", background: "#fef2f2" }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 disabled:opacity-60"
            style={{ background: "linear-gradient(135deg, #7c3aed, #6366f1)" }}
          >
            {loading ? "Signing in..." : "Sign In"}
            {!loading && <ArrowRight size={14} />}
          </button>
        </form>
      </div>
    </div>
  )
}
