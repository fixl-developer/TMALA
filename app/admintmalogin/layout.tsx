"use client"

import { useEffect } from "react"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = "" }
  }, [])

  return (
    <div className="fixed inset-0 z-[300] overflow-auto" style={{ background: "#f5f5f7" }}>
      {children}
    </div>
  )
}
