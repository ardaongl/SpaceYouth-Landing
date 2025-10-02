"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"

export default function VerifyCode() {
  const router = useRouter()
  const [timeLeft, setTimeLeft] = useState(59)
  const [values, setValues] = useState(["", "", "", ""]) // 4 haneli
  const inputsRef = useRef<Array<HTMLInputElement | null>>([])

  useEffect(() => {
    if (timeLeft <= 0) return
    const t = setInterval(() => setTimeLeft((s) => s - 1), 1000)
    return () => clearInterval(t)
  }, [timeLeft])

  const onChange = (index: number, val: string) => {
    if (!/^\d?$/.test(val)) return
    const next = [...values]
    next[index] = val
    setValues(next)
    if (val && index < 3) inputsRef.current[index + 1]?.focus()
  }

  const resend = () => {
    setTimeLeft(59)
    setValues(["", "", "", ""]) 
    inputsRef.current[0]?.focus()
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const code = values.join("")
    if (code.length === 4) router.push("/forgot-password/reset")
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <video className="pointer-events-none absolute inset-0 h-full w-full object-cover" src="/images/Stars.mp4" autoPlay muted loop playsInline />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-12">
        <div className="w-full max-w-2xl rounded-3xl bg-white p-10 shadow-2xl ring-1 ring-black/10">
          <div className="mb-6 flex items-center">
            <Link href="/forgot-password" aria-label="Geri dön" className="mr-3 rounded-full p-2 text-gray-700 hover:bg-gray-100">←</Link>
            <h1 className="mx-auto text-center text-2xl font-bold text-gray-900">Kod Doğrulama</h1>
          </div>

          <p className="mx-auto -mt-2 mb-6 max-w-md text-center text-sm text-gray-600">E-postanızı kontrol edin</p>
          <p className="mb-6 text-center text-xs text-gray-400">{timeLeft} saniye</p>

          <form onSubmit={onSubmit} className="mx-auto max-w-sm">
            <div className="mb-6 flex justify-center gap-3">
              {values.map((v, i) => (
                <input
                  key={i}
                  ref={(el) => {
                    inputsRef.current[i] = el
                  }}
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={1}
                  value={v}
                  onChange={(e) => onChange(i, e.target.value)}
                  className="h-12 w-10 rounded-xl border border-violet-400 text-center text-lg text-gray-900 focus:border-transparent focus:ring-2 focus:ring-violet-600"
                  autoFocus={i === 0}
                />
              ))}
            </div>
            <div className="mb-4 text-center text-sm">
              Kod gelmedi mi?{" "}
              {timeLeft === 0 ? (
                <button type="button" onClick={resend} className="font-medium text-violet-600 hover:text-violet-500">Yeniden Gönder</button>
              ) : (
                <span className="text-gray-400">Yeniden Gönder</span>
              )}
            </div>

            <button type="submit" className="mx-auto block w-full max-w-sm rounded-xl bg-violet-600 px-4 py-2 font-semibold text-white shadow-md transition hover:bg-violet-500">
              Doğrula
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
