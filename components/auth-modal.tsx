"use client"

import React, { createContext, useContext, useState, useCallback } from "react"
import { X, ArrowRight, Sparkles, CheckCircle } from "lucide-react"

/* ═══════════════════════════════════════════
   CONTEXT — open modal from anywhere
   ═══════════════════════════════════════════ */

type AuthView = "signin" | "signup"

interface AuthModalContextType {
  openAuth: (view?: AuthView) => void
  closeAuth: () => void
}

const AuthModalContext = createContext<AuthModalContextType>({
  openAuth: () => {},
  closeAuth: () => {},
})

export const useAuthModal = () => useContext(AuthModalContext)

/* Helper: drop-in replacement for <Link href="/#waitlist"> or <a href="#"> */
export function AuthTrigger({
  children,
  view = "signup",
  className,
  style,
}: {
  children: React.ReactNode
  view?: AuthView
  className?: string
  style?: React.CSSProperties
}) {
  const { openAuth } = useAuthModal()
  return (
    <button onClick={() => openAuth(view)} className={className} style={style}>
      {children}
    </button>
  )
}

const roles = [
  "Agency Owner",
  "Talent Manager",
  "Casting Director",
  "Pageant Organizer",
  "Influencer Manager",
  "Production Manager",
  "Other",
]

const teamSizes = [
  "1-5",
  "6-20",
  "21-50",
  "51-200",
  "200+",
]

/* ═══════════════════════════════════════════
   PROVIDER + MODAL
   ═══════════════════════════════════════════ */

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"

export function AuthModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const openAuth = useCallback((_v: AuthView = "signup") => {
    setSubmitted(false)
    setError(null)
    setIsOpen(true)
  }, [])

  const closeAuth = useCallback(() => setIsOpen(false), [])

  const inputStyle: React.CSSProperties = {
    border: "1.5px solid #e5e7eb",
    color: "#111",
    background: "#fff",
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "#7c3aed"
  }
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "#e5e7eb"
  }

  return (
    <AuthModalContext.Provider value={{ openAuth, closeAuth }}>
      {children}

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          style={{ animation: "authFadeIn 0.2s ease" }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeAuth}
          />

          {/* Card */}
          <div
            data-testid="modal-contact"
            aria-label="Contact form modal"
            role="dialog"
            className="relative z-10 w-full max-w-[460px] rounded-2xl overflow-hidden"
            style={{
              background: "#fff",
              boxShadow: "0 32px 100px rgba(0,0,0,0.2)",
              animation: "authSlideUp 0.3s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            {/* Close button */}
            <button
              onClick={closeAuth}
              data-testid="btn-close"
              aria-label="Close contact form"
              className="absolute top-3 right-3 z-20 w-7 h-7 rounded-full flex items-center justify-center transition-colors hover:bg-gray-100"
            >
              <X size={14} style={{ color: "#666" }} />
            </button>

            {/* Purple top accent */}
            <div className="h-1" style={{ background: "linear-gradient(90deg, #7c3aed, #6366f1, #a78bfa)" }} />

            <div className="px-6 pt-5 pb-6">
              {!submitted ? (
                <>
                  {/* Heading */}
                  <div className="text-center mb-5">
                    <h2 className="text-xl font-bold" style={{ color: "#111" }}>
                      Contact our team
                    </h2>
                    <p className="text-[13px] mt-1" style={{ color: "#6366f1" }}>
                      Get started with TMA for your organization
                    </p>
                  </div>

                  {/* Form */}
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault()
                      setIsSubmitting(true)
                      setError(null)
                      const form = e.currentTarget
                      const data = Object.fromEntries(new FormData(form))
                      data.sourcePage = typeof window !== "undefined" ? window.location.pathname : "unknown"
                      try {
                        const res = await fetch(`${API_URL}/api/leads`, {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify(data),
                        })
                        if (!res.ok) {
                          const err = await res.json()
                          throw new Error(err.error || "Something went wrong")
                        }
                        setSubmitted(true)
                      } catch (err: any) {
                        setError(err.message || "Failed to submit. Please try again.")
                      } finally {
                        setIsSubmitting(false)
                      }
                    }}
                    className="space-y-3.5"
                  >
                    {/* First + Last name */}
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        name="firstName"
                        required
                        placeholder="First name*"
                        className="w-full px-3.5 py-2.5 rounded-full text-[13px] outline-none transition-all focus:ring-2 focus:ring-violet-500/20"
                        style={inputStyle}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                      />
                      <input
                        type="text"
                        name="lastName"
                        required
                        placeholder="Last name*"
                        className="w-full px-3.5 py-2.5 rounded-full text-[13px] outline-none transition-all focus:ring-2 focus:ring-violet-500/20"
                        style={inputStyle}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                      />
                    </div>

                    {/* Work email */}
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Work email*"
                      className="w-full px-3.5 py-2.5 rounded-full text-[13px] outline-none transition-all focus:ring-2 focus:ring-violet-500/20"
                      style={inputStyle}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />

                    {/* Company */}
                    <input
                      type="text"
                      name="company"
                      placeholder="Company / Agency name"
                      className="w-full px-3.5 py-2.5 rounded-full text-[13px] outline-none transition-all focus:ring-2 focus:ring-violet-500/20"
                      style={inputStyle}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />

                    {/* Phone */}
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone number"
                      className="w-full px-3.5 py-2.5 rounded-full text-[13px] outline-none transition-all focus:ring-2 focus:ring-violet-500/20"
                      style={inputStyle}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />

                    {/* Role + Team size */}
                    <div className="grid grid-cols-2 gap-3">
                      <select
                        name="role"
                        required
                        defaultValue=""
                        className="w-full px-3.5 py-2.5 rounded-full text-[13px] outline-none transition-all focus:ring-2 focus:ring-violet-500/20 appearance-none"
                        style={inputStyle}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                      >
                        <option value="" disabled>I am a...*</option>
                        {roles.map((r) => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                      <select
                        name="teamSize"
                        defaultValue=""
                        className="w-full px-3.5 py-2.5 rounded-full text-[13px] outline-none transition-all focus:ring-2 focus:ring-violet-500/20 appearance-none"
                        style={inputStyle}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                      >
                        <option value="" disabled>Team size</option>
                        {teamSizes.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Tell us about your team and what you'd like to manage with TMA"
                      className="w-full px-3.5 py-2.5 rounded-xl text-[13px] outline-none transition-all focus:ring-2 focus:ring-violet-500/20 resize-none"
                      style={inputStyle}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />

                    {/* Error */}
                    {error && (
                      <p className="text-[12px] text-center py-1.5 px-3 rounded-lg" style={{ color: "#dc2626", background: "#fef2f2" }}>
                        {error}
                      </p>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-[14px] font-bold text-white transition-all hover:opacity-90 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                      style={{ background: "linear-gradient(135deg, #7c3aed, #a78bfa)" }}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </form>
                </>
              ) : (
                /* Success state */
                <div className="text-center py-8">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: "rgba(99,102,241,0.08)" }}
                  >
                    <CheckCircle className="w-8 h-8" style={{ color: "#6366f1" }} />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "#111" }}>
                    Thank you!
                  </h3>
                  <p className="text-[14px] leading-relaxed mb-5" style={{ color: "#555" }}>
                    Our team will reach out to you within 24 hours.
                  </p>
                  <button
                    onClick={closeAuth}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold text-white"
                    style={{ background: "linear-gradient(135deg, #7c3aed, #6366f1)" }}
                  >
                    Done
                    <ArrowRight size={14} />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Animations */}
          <style>{`
            @keyframes authFadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes authSlideUp {
              from { opacity: 0; transform: translateY(20px) scale(0.97); }
              to { opacity: 1; transform: translateY(0) scale(1); }
            }
          `}</style>
        </div>
      )}
    </AuthModalContext.Provider>
  )
}
