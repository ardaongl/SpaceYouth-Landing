"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

export default function ResetPassword() {
  const router = useRouter()
  const [p1, setP1] = useState("")
  const [p2, setP2] = useState("")
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (p1 && p1 === p2) {
      router.push("/login")
    }
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <video className="pointer-events-none absolute inset-0 h-full w-full object-cover" src="/images/Stars.mp4" autoPlay muted loop playsInline />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-12">
        <div className="w-full max-w-2xl rounded-3xl bg-white p-10 shadow-2xl ring-1 ring-black/10">
          <div className="mb-6 flex items-center">
            <Link href="/forgot-password/verify" aria-label="Geri dön" className="mr-3 rounded-full p-2 text-gray-700 hover:bg-gray-100">←</Link>
            <h1 className="mx-auto text-center text-2xl font-bold text-gray-900">Şifremi Unuttum</h1>
          </div>

          <form onSubmit={onSubmit} className="mx-auto mt-2 max-w-md space-y-4">
            <div>
              <label className="mb-1 block text-sm text-gray-700">Yeni Şifre</label>
              <div className="relative">
                <input
                  type={show1 ? 'text' : 'password'}
                  required
                  value={p1}
                  onChange={(e) => setP1(e.target.value)}
                  placeholder="********"
                  className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 pr-10 text-gray-900 placeholder-gray-400 outline-none focus:border-transparent focus:ring-2 focus:ring-violet-600"
                />
                <button type="button" onClick={() => setShow1((s)=>!s)} className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700">
                  {show1 ? <EyeOff size={18}/> : <Eye size={18}/>}
                </button>
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm text-gray-700">Yeni Şifre Tekrarı</label>
              <div className="relative">
                <input
                  type={show2 ? 'text' : 'password'}
                  required
                  value={p2}
                  onChange={(e) => setP2(e.target.value)}
                  placeholder="********"
                  className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 pr-10 text-gray-900 placeholder-gray-400 outline-none focus:border-transparent focus:ring-2 focus:ring-violet-600"
                />
                <button type="button" onClick={() => setShow2((s)=>!s)} className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700">
                  {show2 ? <EyeOff size={18}/> : <Eye size={18}/>}
                </button>
              </div>
            </div>

            {p1 && p2 && p1 !== p2 && (
              <p className="text-sm text-red-600">Şifreler eşleşmiyor.</p>
            )}

            <button disabled={!p1 || p1 !== p2} type="submit" className="w-full rounded-xl bg-violet-600 px-4 py-2 font-semibold text-white shadow-md transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-60">
              Kaydet
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
