"use client";
import { ArrowRight, Sparkles } from "lucide-react";
import { useAuthModal } from "@/components/auth-modal";

export function AIStudioFooterCTA() {
  const { openAuth } = useAuthModal();
  return (
    <section
      className="py-28 border-t border-white/[0.05] relative overflow-hidden"
      style={{ background: "#111111" }}
    >

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center mx-auto mb-8 shadow-[0_16px_48px_rgba(124,58,237,0.4)]">
          <Sparkles className="w-7 h-7 text-white" />
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight tracking-tight">
          Ready to elevate{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-400">
            your career?
          </span>
        </h2>

        <p className="text-white/80 text-lg mb-10 leading-relaxed">
          Join thousands of talent professionals using TMA AI Studio to build smarter portfolios, automate bookings, and win more roles.
        </p>

        <button
          onClick={() => openAuth()}
          className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-sm transition-all duration-200 shadow-[0_8px_32px_rgba(124,58,237,0.45)] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(124,58,237,0.55)]"
        >
          Get started for free
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>

        <p className="mt-5 text-xs text-white/60">
          No credit card required · Free plan always available
        </p>
      </div>
    </section>
  );
}
