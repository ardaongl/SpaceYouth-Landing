"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function BackToHome() {
  return (
    <div className="absolute left-6 top-6 z-30">
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-sm font-medium text-gray-800 shadow-md ring-1 ring-black/10 backdrop-blur hover:bg-white"
        aria-label="Ana sayfaya dön"
      >
        <ArrowLeft size={16} />
        Ana Sayfa
      </Link>
    </div>
  )
}
