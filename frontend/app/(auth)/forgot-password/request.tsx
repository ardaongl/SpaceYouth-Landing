"use client"

import Link from "next/link"
import { useState } from "react"

export default function ForgotPasswordRequest() {
  const [email, setEmail] = useState("")
  const [submitting, setSubmitting] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => setSubmitting(false), 800)
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <video className="pointer-events-none absolute inset-0 h-full w-full object-cover" src="/images/Stars.mp4" autoPlay muted loop playsInline />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-12">
        <div className="w-full max-w-2xl rounded-3xl bg-white p-10 shadow-2xl ring-1 ring-black/10">
          <div className="mb-6 flex items-center">
            <Link href="/login" aria-label="Geri dön" className="mr-3 rounded-full p-2 text-gray-700 hover:bg-gray-100">←</Link>
            <h1 className="mx-auto text-center text-2xl font-bold text-gray-900">Şifremi Unuttum</h1>
          </div>

          <form onSubmit={onSubmit} className="mx-auto mt-4 max-w-md space-y-4">
            <div>
              <label className="mb-1 block text-sm text-gray-700">E-mail</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ornek@mail.com"
                className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 outline-none focus:border-transparent focus:ring-2 focus:ring-violet-600"
              />
            </div>
            <Link href="/forgot-password/verify" className="mt-2 block w-full rounded-xl bg-violet-600 px-4 py-2 text-center font-semibold text-white shadow-md transition hover:bg-violet-500">
              {submitting ? "Gönderiliyor..." : "Kod Gönder"}
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}
