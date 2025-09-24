'use client'

import { motion } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import card1 from '@/images/card1.jpg'
import card2 from '@/images/card2.jpg'
import card3 from '@/images/card3.jpg'
import kure from '@/images/Küre.png'

// Autoplaying coverflow carousel with black background
export default function StatisticsSection() {
  const items = useMemo(() => [
    { id: 1, img: card1, title: 'Fast Transactions', desc: 'Instant and secure transfers.' },
    { id: 2, img: card2, title: 'High-Level Security', desc: 'Multi-layer protection.' },
    { id: 3, img: card3, title: 'AI Insights', desc: 'Make smarter decisions.' },
    { id: 4, img: card2, title: 'Non-stop Access', desc: 'Available worldwide.' },
    { id: 5, img: card1, title: 'Low Fees', desc: 'Optimized network costs.' },
  ], [])

  const [active, setActive] = useState(0)
  const hoverRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const start = () => {
    stop()
    intervalRef.current = setInterval(() => {
      setActive((v) => (v + 1) % items.length)
    }, 2800)
  }
  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  useEffect(() => {
    start()
    const node = hoverRef.current
    if (node) {
      node.addEventListener('mouseenter', stop)
      node.addEventListener('mouseleave', start)
    }
    return () => {
      stop()
      if (node) {
        node.removeEventListener('mouseenter', stop)
        node.removeEventListener('mouseleave', start)
      }
    }
  }, [items.length])

  const getRelativeIndex = (index: number) => {
    // returns distance from active in circular manner
    const len = items.length
    let diff = index - active
    if (diff > len / 2) diff -= len
    if (diff < -len / 2) diff += len
    return diff
  }

  return (
    <section className="relative min-h-[130vh] w-full overflow-hidden bg-black text-white pb-24 md:pb-48">

      <div className="relative z-10 mx-auto max-w-[110rem] px-6 pt-16 pb-40 md:pt-24 md:pb-56">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-bold">Transform Your Crypto Journey</h2>
          <p className="mt-3 text-base md:text-lg text-white/70">Experience enhanced security, speed, and convenience with our modern wallet.</p>
        </div>

        <div ref={hoverRef} className="relative mx-auto flex h-[28rem] items-center justify-center md:h-[32rem]">
          {items.map((it, i) => {
            const rel = getRelativeIndex(i)
            // position by relative distance
            const clamped = Math.max(-2, Math.min(2, rel))
            const translate = clamped * 18 // vw on large screens using CSS transform via percentage of container width
            const scale = clamped === 0 ? 1 : clamped === -1 || clamped === 1 ? 0.88 : 0.76
            const z = clamped === 0 ? 30 : clamped === -1 || clamped === 1 ? 20 : 10
            const opacity = clamped === 0 ? 1 : clamped === -1 || clamped === 1 ? 0.9 : 0.6
            const dark = clamped === 0 ? 0 : (Math.abs(clamped) === 1 ? 0.38 : 0.65)
            return (
              <motion.article
                key={it.id}
                aria-hidden={rel !== 0}
                className="absolute w-[72%] sm:w-[55%] md:w-[36rem] max-w-[86vw]"
                style={{ zIndex: z }}
                animate={{
                  x: `${translate}vw`,
                  scale,
                  opacity,
                }}
                transition={{ type: 'spring', stiffness: 140, damping: 18 }}
              >
                <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] shadow-[0_10px_40px_rgba(0,0,0,0.6)] backdrop-blur-sm">
                  <div className="relative aspect-[5/4] w-full overflow-hidden rounded-3xl">
                    <Image src={it.img} alt={it.title} fill className="object-cover" priority={i < 3} />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>
                  {/* dynamic darkening for non-center cards */}
                  <div
                    className="absolute inset-0 rounded-3xl"
                    style={{ backgroundColor: `rgba(0,0,0,${dark})` }}
                    aria-hidden
                  />
                  <div className="absolute inset-0 flex flex-col justify-end rounded-3xl p-6 md:p-7">
                    <h3 className="text-xl md:text-2xl font-semibold drop-shadow">{it.title}</h3>
                    <p className="mt-1 text-sm md:text-base text-white/75">{it.desc}</p>
                  </div>
                </div>
              </motion.article>
            )
          })}

          {/* subtle side fade masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />
        </div>
      </div>
      {/* Bottom decorative image with zero gap at section level */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5]">
        {/* Gradient glow behind the sphere */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-[80vh] bg-[radial-gradient(60%_60%_at_50%_100%,rgba(168,85,247,0.55)_0%,rgba(168,85,247,0.34)_35%,rgba(168,85,247,0.18)_55%,transparent_88%)] blur-[100px] opacity-100"
        />
        <Image
          src={kure}
          alt="bottom curve"
          className="relative z-10 block w-full h-auto select-none drop-shadow-[0_0_60px_rgba(168,85,247,0.45)]"
          priority
        />
      </div>
    </section>
  )
}
