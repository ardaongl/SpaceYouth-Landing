"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import leftPhoto from "@/images/card1.jpg"
import teacherPhoto from "@/images/card2.jpg"
import { Eye, EyeOff } from "lucide-react"
import BackToHome from "@/components/ui/BackToHome"
import { auth } from "@/lib/auth"
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux"
import { setCredentials } from "@/store/authSlice"
import { setAuthToken } from "@/lib/api"

export default function Login() {
  const router = useRouter()
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const [role, setRole] = useState<'ogrenci' | 'ogretmen'>('ogrenci')
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)
    try {
      const data = await auth.login({ email, password })
      const token: string | undefined = data?.token
      if (token) {
        localStorage.setItem('token', token)
        setAuthToken(token)
        dispatch(setCredentials({ token, user: data?.user }))
      }
      router.push("/")
    } catch (err: any) {
      setError(err?.message || "Giriş yapılamadı")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <BackToHome />
      {/* Background video */}
      <video
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        src="/images/Stars.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-12">
        <div className="grid w-full grid-cols-1 overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/10 md:grid-cols-2 md:min-h-[640px]">
          {/* Left side image */}
          <div className="relative hidden md:block">
            <Image
              src={role === 'ogretmen' ? teacherPhoto : leftPhoto}
              alt={role === 'ogretmen' ? "Teacher" : "Students"}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 0px, 50vw"
            />
          </div>

          {/* Right side form */}
          <div className="flex flex-col items-center justify-center bg-white p-10 md:p-16">
            <div className="w-full max-w-md">
              {/* Role tabs */}
              <div className="mb-5 flex justify-center gap-2">
                <button
                  type="button"
                  onClick={() => setRole('ogrenci')}
                  className={`rounded-full px-3 py-1 text-xs ${role==='ogrenci' ? 'bg-violet-600 text-white' : 'border border-gray-300 text-gray-700'}`}
                >
                  Öğrenci Girişi
                </button>
                <button
                  type="button"
                  onClick={() => setRole('ogretmen')}
                  className={`rounded-full px-3 py-1 text-xs ${role==='ogretmen' ? 'bg-violet-600 text-white' : 'border border-gray-300 text-gray-700'}`}
                >
                  Öğretmen Girişi
                </button>
              </div>

              <h1 className="mb-6 text-center text-2xl font-bold text-gray-900">Giriş Yap</h1>

              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm text-gray-700">E-mail</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="mail@ornek.com"
                    className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 outline-none focus:border-transparent focus:ring-2 focus:ring-violet-600"
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-600">{error}</p>
                )}

                <div>
                  <label className="mb-1 block text-sm text-gray-700">Şifre</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="********"
                      className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 pr-10 text-gray-900 placeholder-gray-400 outline-none focus:border-transparent focus:ring-2 focus:ring-violet-600"
                    />
                    <button
                      type="button"
                      aria-label={showPassword ? 'Şifreyi gizle' : 'Şifreyi göster'}
                      onClick={() => setShowPassword((s) => !s)}
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  <div className="mt-1 text-right text-xs">
                    <Link className="text-violet-600 hover:text-violet-500" href="/forgot-password">Şifremi Unuttum</Link>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full rounded-xl bg-violet-600 px-4 py-2 font-semibold text-white shadow-md transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isLoading ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
                </button>
              </form>

              {/* Divider */}
              <div className="my-5 flex items-center">
                <div className="h-px flex-1 bg-gray-200" />
                <span className="px-3 text-xs text-gray-400">VEYA</span>
                <div className="h-px flex-1 bg-gray-200" />
              </div>

              {/* Social buttons */}
              <div className="space-y-3">
                <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50">
                  <span className="text-lg">G</span>
                  Google ile Giriş Yap
                </button>
                <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50">
                  <span className="text-lg"></span>
                  Apple ile Giriş Yap
                </button>
              </div>

              <p className="mt-6 text-center text-sm text-gray-600">
                Hesabın yok mu?{" "}
                <Link href="/register" className="font-medium text-violet-600 hover:text-violet-500">
                  Kayıt Ol
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
