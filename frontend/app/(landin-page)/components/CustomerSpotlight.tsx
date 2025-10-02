'use client'

import Image from 'next/image'
import { Eye, Target } from 'lucide-react'
import imgLeft from '@/images/space.jpg'
import imgRight from '@/images/saturn.jpg'
import HoverHighlightText from './HoverHighlightText'

export default function CustomerSpotlight() {
  return (
    <section className="relative bg-black py-16 md:py-24">
      <div className="max-w-[97rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-8 mb-12 md:mb-16">
          <div className="flex md:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 text-white px-4 py-2 text-sm tracking-wide ring-1 ring-white/10">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              WHY CHOOSE US
            </span>
          </div>
          <h2 className="md:col-span-2 text-right text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
            WHERE PASSION
            <br />
            MEETS THE COSMOS
          </h2>
        </div>

        {/* Alternating Photo + Text Sections */}
        <div className="space-y-16 md:space-y-24">
          {/* Row 1: Image Left, Text Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            <div className="relative w-full h-[22rem] md:h-[32rem] rounded-3xl overflow-hidden ring-1 ring-white/10">
              <Image src={imgLeft} alt="Deep space" fill className="object-cover" priority />
            </div>
            <div className="text-white md:pl-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-5 py-2.5 ring-1 ring-white/10 text-2xl md:text-3xl font-bold mb-5">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                Our Vision
              </div>
              <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                <HoverHighlightText className="block" baseColor="#9ca3af" highlightColor="#ffffff" size={180}>
                  Guided Stargazing
                </HoverHighlightText>
              </h3>
              <p className="mt-4 text-lg md:text-xl max-w-2xl">
                <HoverHighlightText className="block" baseColor="#9ca3af" highlightColor="#ffffff" size={180}>
                  Bireylerin potansiyellerini keşfederek global ölçekte kariyerlerini hızlandırmalarına ilham veren, yenilikçi ve sürdürülebilir bir topluluk ekosistemi yaratmak.
                </HoverHighlightText>
              </p>
              <a href="#" className="mt-6 inline-flex items-center gap-3 text-white hover:text-white/80">
                <span className="font-semibold">Learn More</span>
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full ring-1 ring-white/30">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Row 2: Text Left, Image Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            <div className="order-2 md:order-1 text-white md:pr-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-5 py-2.5 ring-1 ring-white/10 text-2xl md:text-3xl font-bold mb-5">
                <span className="inline-block h-2 w-2 rounded-full bg-amber-400" />
                Our Mission
              </div>
              <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                <HoverHighlightText className="block" baseColor="#9ca3af" highlightColor="#ffffff" size={180}>
                  Space Talks & Community
                </HoverHighlightText>
              </h3>
              <p className="mt-4 text-lg md:text-xl max-w-2xl">
                <HoverHighlightText className="block" baseColor="#9ca3af" highlightColor="#ffffff" size={180}>
                  Profesyonellere ve girişimcilere; networking, yetkinlik geliştirme, mentorluk ve kariyer fırsatları sunarak, onların hem kişisel hem de mesleki yolculuklarında güvenilir bir yol arkadaşı olmak.
                </HoverHighlightText>
              </p>
              <a href="#" className="mt-6 inline-flex items-center gap-3 text-white hover:text-white/80">
                <span className="font-semibold">Learn More</span>
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full ring-1 ring-white/30">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </a>
            </div>
            <div className="order-1 md:order-2 relative w-full h-[22rem] md:h-[32rem] rounded-3xl overflow-hidden ring-1 ring-white/10">
              <Image src={imgRight} alt="Saturn and stars" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
