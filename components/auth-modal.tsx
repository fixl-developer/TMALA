"use client"

import React, { createContext, useContext, useState, useCallback } from "react"
import { X, Mail, Lock, Eye, EyeOff, ArrowRight, Sparkles } from "lucide-react"

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

/* ═══════════════════════════════════════════
   PROVIDER + MODAL
   ═══════════════════════════════════════════ */

export function AuthModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [view, setView] = useState<AuthView>("signup")
  const [showPassword, setShowPassword] = useState(false)

  const openAuth = useCallback((v: AuthView = "signup") => {
    setView(v)
    setShowPassword(false)
    setIsOpen(true)
  }, [])

  const closeAuth = useCallback(() => setIsOpen(false), [])

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
            data-testid="modal-auth"
            aria-label="Authentication modal"
            role="dialog"
            className="relative z-10 w-full max-w-[400px] rounded-2xl overflow-hidden"
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
              aria-label="Close authentication modal"
              className="absolute top-3 right-3 z-20 w-7 h-7 rounded-full flex items-center justify-center transition-colors hover:bg-gray-100"
            >
              <X size={14} style={{ color: "#666" }} />
            </button>

            <div className="px-6 pt-5 pb-5">
              {/* Logo + Heading inline */}
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "linear-gradient(135deg, #7c3aed, #6366f1)" }}
                >
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h2 className="text-[17px] font-bold leading-tight" style={{ color: "#111" }}>
                    {view === "signin" ? "Welcome back" : "Create your account"}
                  </h2>
                  <p className="text-[12px]" style={{ color: "#888" }}>
                    {view === "signin" ? "Sign in to your dashboard" : "Get started with TMA Platform"}
                  </p>
                </div>
              </div>

              {/* Social buttons */}
              <div className="grid grid-cols-2 gap-2.5 mb-4">
                <button
                  data-testid="btn-google"
                  aria-label="Continue with Google"
                  className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-[12px] font-semibold transition-all hover:bg-gray-50"
                  style={{ border: "1.5px solid #e5e7eb", color: "#333" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Google
                </button>
                <button
                  data-testid="btn-apple"
                  aria-label="Continue with Apple"
                  className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-[12px] font-semibold transition-all hover:bg-gray-50"
                  style={{ border: "1.5px solid #e5e7eb", color: "#333" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#000">
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  Apple
                </button>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-[11px] font-medium" style={{ color: "#aaa" }}>or</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              {/* Form */}
              <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                {view === "signup" && (
                  <div>
                    <label className="block text-[12px] font-semibold mb-1" style={{ color: "#333" }}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      data-testid="input-fullname"
                      aria-label="Full name"
                      placeholder="Enter your full name"
                      className="w-full px-3.5 py-2.5 rounded-lg text-[13px] outline-none transition-all focus:ring-2 focus:ring-violet-500/20"
                      style={{ border: "1.5px solid #e5e7eb", color: "#111", background: "#fafafa" }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "#7c3aed"; e.currentTarget.style.background = "#fff" }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "#e5e7eb"; e.currentTarget.style.background = "#fafafa" }}
                    />
                  </div>
                )}

                <div>
                  <label className="block text-[12px] font-semibold mb-1" style={{ color: "#333" }}>
                    Email
                  </label>
                  <div className="relative">
                    <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#999" }} />
                    <input
                      type="email"
                      data-testid="input-email"
                      aria-label="Email address"
                      placeholder="you@example.com"
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-lg text-[13px] outline-none transition-all focus:ring-2 focus:ring-violet-500/20"
                      style={{ border: "1.5px solid #e5e7eb", color: "#111", background: "#fafafa" }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "#7c3aed"; e.currentTarget.style.background = "#fff" }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "#e5e7eb"; e.currentTarget.style.background = "#fafafa" }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-[12px] font-semibold" style={{ color: "#333" }}>
                      Password
                    </label>
                    {view === "signin" && (
                      <button type="button" data-testid="btn-forgot-password" aria-label="Forgot password" className="text-[11px] font-semibold" style={{ color: "#7c3aed" }}>
                        Forgot?
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <Lock size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#999" }} />
                    <input
                      type={showPassword ? "text" : "password"}
                      data-testid="input-password"
                      aria-label="Password"
                      placeholder={view === "signin" ? "Enter password" : "Create a password"}
                      className="w-full pl-9 pr-10 py-2.5 rounded-lg text-[13px] outline-none transition-all focus:ring-2 focus:ring-violet-500/20"
                      style={{ border: "1.5px solid #e5e7eb", color: "#111", background: "#fafafa" }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "#7c3aed"; e.currentTarget.style.background = "#fff" }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "#e5e7eb"; e.currentTarget.style.background = "#fafafa" }}
                    />
                    <button
                      type="button"
                      data-testid="btn-toggle-password"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5"
                    >
                      {showPassword
                        ? <EyeOff size={14} style={{ color: "#999" }} />
                        : <Eye size={14} style={{ color: "#999" }} />
                      }
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  data-testid="btn-submit"
                  aria-label={view === "signin" ? "Sign in" : "Create account"}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-[13px] font-bold text-white transition-all hover:opacity-90 hover:shadow-lg"
                  style={{ background: "linear-gradient(135deg, #7c3aed, #6366f1)" }}
                >
                  {view === "signin" ? "Sign In" : "Create Account"}
                  <ArrowRight size={14} />
                </button>
              </form>

              {/* Toggle + Terms */}
              <p className="text-center text-[12px] mt-4" style={{ color: "#666" }}>
                {view === "signin" ? "Don't have an account? " : "Already have an account? "}
                <button
                  data-testid="btn-toggle-view"
                  aria-label={view === "signin" ? "Switch to sign up" : "Switch to sign in"}
                  onClick={() => { setView(view === "signin" ? "signup" : "signin"); setShowPassword(false) }}
                  className="font-bold transition-colors hover:underline"
                  style={{ color: "#7c3aed" }}
                >
                  {view === "signin" ? "Sign Up" : "Sign In"}
                </button>
              </p>
              {view === "signup" && (
                <p className="text-center text-[10px] mt-2" style={{ color: "#aaa" }}>
                  By continuing, you agree to our{" "}
                  <a href="/terms" data-testid="link-terms" className="underline hover:text-gray-600">Terms</a>
                  {" & "}
                  <a href="/privacy" data-testid="link-privacy" className="underline hover:text-gray-600">Privacy Policy</a>
                </p>
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
