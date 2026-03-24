"use client"

import React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle2, Shield, Users, Zap, HeadphonesIcon } from "lucide-react"

export function WaitlistSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    companyName: "",
    interest: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.email || !formData.role) return

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="waitlist" data-testid="section-waitlist" aria-label="Waitlist" className="relative overflow-hidden z-10">
      {/* Purple/Lavender Background */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #e8dff5 0%, #d8cceb 50%, #e8dff5 100%)" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">

          {/* Left Column - Content */}
          <div className="flex flex-col justify-center pt-4">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] tracking-tight mb-5" style={{ color: "#1a1a2e" }}>
              Ready to transform how you manage{" "}
              <span style={{ color: "#7c3aed" }}>talent</span>?
            </h2>

            <p className="text-base leading-relaxed mb-10 max-w-lg" style={{ color: "#1a1a2e" }}>
              Request a callback from our team to explore custom plans based on your unique needs and goals.
            </p>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { icon: Zap, title: "Instant Access", desc: "Get started immediately — no setup delays" },
                { icon: Users, title: "Unified Platform", desc: "Agencies, talents & sponsors in one place" },
                { icon: Shield, title: "Secure Escrow", desc: "Protected payments for every transaction" },
                { icon: HeadphonesIcon, title: "Premium Support", desc: "Dedicated help from our expert team" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl p-3" style={{ background: "rgba(255,255,255,0.4)" }}>
                  <div className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "rgba(124,58,237,0.12)" }}>
                    <item.icon className="w-4 h-4" style={{ color: "#7c3aed" }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#1a1a2e" }}>{item.title}</p>
                    <p className="text-xs leading-snug mt-0.5" style={{ color: "#3d3d5c" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom reassurance */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" style={{ color: "#7c3aed" }} />
                <span className="text-sm font-medium" style={{ color: "#1a1a2e" }}>Free to try</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" style={{ color: "#7c3aed" }} />
                <span className="text-sm font-medium" style={{ color: "#1a1a2e" }}>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" style={{ color: "#7c3aed" }} />
                <span className="text-sm font-medium" style={{ color: "#1a1a2e" }}>Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="flex items-start justify-center">
            <div className="w-full max-w-md rounded-2xl p-8 bg-white shadow-xl" style={{ border: "1px solid rgba(0,0,0,0.06)" }}>
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center space-y-4 py-8 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full" style={{ background: "#7c3aed", boxShadow: "0 0 30px rgba(124,58,237,0.3)" }}>
                    <CheckCircle2 className="h-7 w-7 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: "#111827" }}>
                    {"You're all set!"}
                  </h3>
                  <p className="text-sm" style={{ color: "#4b5563" }}>
                    {"Welcome to the platform! We'll get you set up right away."}
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-6 space-y-1.5 text-center">
                    <h3 className="text-xl font-bold" style={{ color: "#111827" }}>
                      Contact our team
                    </h3>
                    <p className="text-sm" style={{ color: "#4b5563" }}>
                      Get started with TMA for your organization
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    {/* First + Last Name Row */}
                    <div className="grid grid-cols-2 gap-3">
                      <Input
                        type="text"
                        placeholder="First name*"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="h-11 rounded-lg border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500/20"
                        data-testid="input-first-name"
                        aria-label="First name"
                        required
                      />
                      <Input
                        type="text"
                        placeholder="Last name*"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="h-11 rounded-lg border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500/20"
                        data-testid="input-last-name"
                        aria-label="Last name"
                        required
                      />
                    </div>

                    <Input
                      type="email"
                      placeholder="Work email*"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-11 rounded-lg border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500/20"
                      data-testid="input-email"
                      aria-label="Work email"
                      required
                    />

                    <Input
                      type="text"
                      placeholder="Company / Agency name"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="h-11 rounded-lg border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500/20"
                      data-testid="input-company-name"
                      aria-label="Company or agency name"
                    />

                    <Input
                      type="tel"
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-11 rounded-lg border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500/20"
                      data-testid="input-phone"
                      aria-label="Phone number"
                    />

                    {/* Company Size + Role Row */}
                    <div className="grid grid-cols-2 gap-3">
                      <Select
                        value={formData.role}
                        onValueChange={(value) => setFormData({ ...formData, role: value })}
                        required
                      >
                        <SelectTrigger data-testid="input-role" aria-label="Role" className="h-11 rounded-lg border-gray-200 bg-white text-gray-900 focus:border-purple-500 focus:ring-purple-500/20">
                          <SelectValue placeholder="I am a...*" />
                        </SelectTrigger>
                        <SelectContent className="border-gray-200 bg-white text-gray-900">
                          <SelectItem value="agency" className="text-gray-900 focus:bg-gray-100 focus:text-gray-900">Agency Owner</SelectItem>
                          <SelectItem value="talent" className="text-gray-900 focus:bg-gray-100 focus:text-gray-900">Talent</SelectItem>
                          <SelectItem value="sponsor" className="text-gray-900 focus:bg-gray-100 focus:text-gray-900">Sponsor</SelectItem>
                          <SelectItem value="judge" className="text-gray-900 focus:bg-gray-100 focus:text-gray-900">Judge</SelectItem>
                          <SelectItem value="other" className="text-gray-900 focus:bg-gray-100 focus:text-gray-900">Other</SelectItem>
                        </SelectContent>
                      </Select>

                      <Select
                        value={formData.interest}
                        onValueChange={(value) => setFormData({ ...formData, interest: value })}
                      >
                        <SelectTrigger data-testid="input-team-size" aria-label="Team size" className="h-11 rounded-lg border-gray-200 bg-white text-gray-900 focus:border-purple-500 focus:ring-purple-500/20">
                          <SelectValue placeholder="Team size" />
                        </SelectTrigger>
                        <SelectContent className="border-gray-200 bg-white text-gray-900">
                          <SelectItem value="1-10" className="text-gray-900 focus:bg-gray-100 focus:text-gray-900">1-10</SelectItem>
                          <SelectItem value="11-50" className="text-gray-900 focus:bg-gray-100 focus:text-gray-900">11-50</SelectItem>
                          <SelectItem value="51-200" className="text-gray-900 focus:bg-gray-100 focus:text-gray-900">51-200</SelectItem>
                          <SelectItem value="201-500" className="text-gray-900 focus:bg-gray-100 focus:text-gray-900">201-500</SelectItem>
                          <SelectItem value="500+" className="text-gray-900 focus:bg-gray-100 focus:text-gray-900">500+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Message Textarea */}
                    <textarea
                      placeholder="Tell us about your team and what you'd like to manage with TMA"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={3}
                      data-testid="input-message"
                      aria-label="Message"
                      className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 focus:outline-none resize-none"
                    />

                    <Button
                      type="submit"
                      disabled={isSubmitting || !formData.email || !formData.role}
                      className="h-12 w-full rounded-full text-sm font-semibold text-white"
                      style={{ background: "#7c3aed" }}
                      data-testid="btn-submit"
                      aria-label="Submit waitlist form"
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>

                    <p className="text-[11px] text-center leading-relaxed" style={{ color: "#6b7280" }}>
                      By submitting this form, I accept TMA&apos;s{" "}
                      <a href="#" className="underline" style={{ color: "#7c3aed" }} data-testid="btn-privacy-policy" aria-label="Privacy Policy">Privacy Policy</a>{" "}
                      and consent to be contacted for marketing and promotional purposes via email, phone, SMS, and other means.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
