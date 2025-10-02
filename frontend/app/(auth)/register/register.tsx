"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import leftPhoto from "@/images/card1.jpg"
import { Eye, EyeOff } from "lucide-react"
import BackToHome from "@/components/ui/BackToHome"
import { auth } from "@/lib/auth"
import { useRouter } from "next/navigation"

export default function Register() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    if (password !== confirm) {
      setError("Şifreler eşleşmiyor")
      return
    }
    setIsLoading(true)
    try {
      await auth.register({ name, email, password })
      router.push("/login")
    } catch (err: any) {
      setError(err?.message || "Kayıt başarısız")
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
              src={leftPhoto}
              alt="Students collaborating"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 0px, 50vw"
            />
          </div>

          {/* Right side form */}
          <div className="flex flex-col items-center justify-center p-10 md:p-16 bg-white">
            <div className="w-full max-w-md">
              <h1 className="mb-6 text-center text-2xl font-bold text-gray-900">Kayıt Ol</h1>

              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm text-gray-700">Ad-Soyad</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ad Soyad"
                    className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 outline-none focus:border-transparent focus:ring-2 focus:ring-violet-600"
                  />
                </div>

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
                </div>

                <div>
                  <label className="mb-1 block text-sm text-gray-700">Şifre Tekrar</label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      required
                      value={confirm}
                      onChange={(e) => setConfirm(e.target.value)}
                      placeholder="********"
                      className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 pr-10 text-gray-900 placeholder-gray-400 outline-none focus:border-transparent focus:ring-2 focus:ring-violet-600"
                    />
                    <button
                      type="button"
                      aria-label={showConfirmPassword ? 'Şifreyi gizle' : 'Şifreyi göster'}
                      onClick={() => setShowConfirmPassword((s) => !s)}
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
                    >
                      {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full rounded-xl bg-violet-600 px-4 py-2 font-semibold text-white shadow-md transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isLoading ? "Gönderiliyor..." : "Kayıt Ol"}
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
                  <span className="i-[g]">G</span>
                  Google ile Kayıt Ol
                </button>
                <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50">
                  <span className="font-semibold"></span>
                  Apple ile Kayıt Ol
                </button>
              </div>

              <p className="mt-6 text-center text-sm text-gray-600">
                Hesabın var mı?{" "}
                <Link href="/login" className="font-medium text-violet-600 hover:text-violet-500">
                  Giriş Yap
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
