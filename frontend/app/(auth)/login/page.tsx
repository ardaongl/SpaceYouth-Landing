'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Sparkles, Home } from 'lucide-react'
import Image from 'next/image'
import underwater from '@/images/saturn.jpg'
import Link from 'next/link'
import spaceYouthIcon from '@/images/SpaceYouth.ico'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="h-screen flex items-center justify-center relative overflow-hidden bg-[#2D398F]">
      {/* Back to Home Button - Top Right */}
      <motion.div
        className="absolute top-6 right-6 z-30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Link
          href="/"
          className="inline-flex items-center justify-center px-3 py-2 border border-white/20 rounded-xl font-medium text-white bg-white/5 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200 backdrop-blur shadow-lg"
        >
          <Home className="w-4 h-4 mr-2" />
          <span className="text-sm">Ana Sayfa</span>
        </Link>
      </motion.div>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={underwater}
          alt="Underwater background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,rgba(0,0,0,0)_35%),linear-gradient(to_bottom,transparent,rgba(0,0,0,.4))]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Top left floating element */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Bottom right floating element */}
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            y: [0, 20, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>



      {/* Main Content */}
      <div className="relative z-20 w-full max-w-md px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <div className="flex items-center space-x-3">
              <Image src={spaceYouthIcon} alt="SpaceYouth logo" width={40} height={40} className="rounded-md shadow-lg" />
              <h1 className="text-2xl font-bold text-white">SpaceYouth</h1>
            </div>
          </div>
          
          {/* Welcome Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 ring-1 ring-white/20 text-white text-xs mb-3 backdrop-blur">
            <Sparkles className="w-3 h-3 text-emerald-400" />
            Hoş geldiniz!
          </div>
          
          <h2 className="text-xl font-bold text-white mb-2">
            Hesabınıza giriş yapın
          </h2>
          <p className="text-slate-300 text-xs">
            Kariyer yolculuğunuza devam edin
          </p>
        </motion.div>

        {/* Login Form */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Glassmorphism Card */}
          <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-white/30 via-white/10 to-white/0">
            <div className="relative rounded-2xl bg-white/5 backdrop-blur-md ring-1 ring-white/10 shadow-2xl p-8">
              {/* Hover glow effect */}
              <div className="absolute -inset-px opacity-0 hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(80%_80%_at_50%_0%,rgba(59,130,246,0.15)_0%,transparent_70%)] rounded-2xl" />
              
              <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    E-posta Adresi
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="block w-full pl-10 pr-3 py-2.5 border border-white/20 rounded-xl bg-white/5 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent backdrop-blur transition-all duration-200"
                      placeholder="ornek@email.com"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
                    Şifre
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      className="block w-full pl-10 pr-12 py-2.5 border border-white/20 rounded-xl bg-white/5 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent backdrop-blur transition-all duration-200"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-slate-400 hover:text-slate-300 transition-colors" />
                      ) : (
                        <Eye className="h-5 w-5 text-slate-400 hover:text-slate-300 transition-colors" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-cyan-500 focus:ring-cyan-500 border-white/20 rounded bg-white/5"
                    />
                    <span className="ml-2 text-sm text-slate-300">Beni hatırla</span>
                  </label>
                  <a
                    href="#"
                    className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                  >
                    Şifremi unuttum
                  </a>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center px-4 py-2.5 border border-transparent rounded-xl font-medium text-white bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-emerald-500/20"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Giriş yapılıyor...
                    </div>
                  ) : (
                    <>
                      Giriş Yap
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </form>

                              {/* Divider */}
                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/20" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-transparent text-slate-400">veya</span>
                  </div>
                </div>

              {/* Social Login Buttons */}
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center px-4 py-2.5 border border-white/20 rounded-xl font-medium text-white bg-white/5 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200 backdrop-blur">
                  <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 12z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google ile giriş yap
                </button>
              </div>
            </div>
          </div>

          {/* Sign Up Link */}
          <motion.div
            className="text-center mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-slate-300 text-sm">
              Hesabınız yok mu?{' '}
              <Link
                href="/register"
                className="font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
              >
                Hemen kayıt olun
              </Link>
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          className="text-center mt-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="inline-flex items-center gap-x-6 rounded-full px-5 py-3 bg-white/5 ring-1 ring-white/10 backdrop-blur text-sm text-white/90">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white">10K+</span>
              <span>Üye</span>
            </div>
            <div className="h-4 w-px bg-white/10" />
            <div className="flex items-center gap-2">
              <span className="font-bold text-white">95%</span>
              <span>Memnuniyet</span>
            </div>
            <div className="h-4 w-px bg-white/10" />
            <div className="flex items-center gap-2">
              <span className="font-bold text-white">200+</span>
              <span>Mentor</span>
            </div>
          </div>
        </motion.div>
      </div>
      </div>
  )
}
