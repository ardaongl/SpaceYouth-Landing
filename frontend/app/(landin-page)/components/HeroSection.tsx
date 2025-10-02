'use client'

import Image from 'next/image'
import moonPng from '@/images/Moon.png'
import starsVideo from '@/public/images/Stars.mp4'
import astronautPng from '@/images/astronot1.png'

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[45vh] md:min-h-screen overflow-hidden">
      {/* Background video (hidden on mobile) */}
      <video
        className="hidden md:block absolute inset-0 w-full h-full object-cover -z-10"
        src={starsVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* Moon at bottom-right - large (hidden on mobile) */}
      <Image
        src={moonPng}
        alt="Moon"
        priority
        width={820}
        height={820}
        className="hidden md:block absolute bottom-0 right-0 translate-x-[40%] translate-y-[36%] transform pointer-events-none select-none w-[900px] md:w-[1100px] lg:w-[1300px] h-auto z-0"
      />

      {/* Astronaut floating above the moon (hidden on mobile) */}
      <div className="hidden md:block absolute bottom-12 right-40 lg:bottom-16 lg:right-10 z-10 float-slow">
        <Image
          src={astronautPng}
          alt="Astronaut"
          priority
          width={320}
          height={320}
          className="pointer-events-none select-none w-[180px] md:w-[400px] lg:w-[500px] h-auto"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-4 md:pt-44 md:pb-24 flex items-center">
        {/* Text at left */}
        <div className="relative z-10 mr-auto w-full md:w-1/2 text-left text-white md:pr-10 -ml-0 md:-ml-14 mt-2 md:mt-16">
          <div className="flex items-center justify-start gap-4 mb-5">
            <span className="hidden md:block h-px w-20 bg-white/90" />
            <span className="text-cyan-100 tracking-[0.35em] text-sm md:text-base uppercase">To The Space</span>
          </div>

          <h1 className="text-4xl md:text-8xl lg:text-9xl font-extrabold tracking-wider leading-none">SPACEYOUTH</h1>

          <div className="flex justify-start mb-8 mt-8">
            <span className="h-[3px] w-24 md:w-80 bg-cyan-300" />
          </div>

          <p className="max-w-md md:max-w-lg text-slate-200/90 text-base md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>
      </div>

      {/* Local animation styles for slow floating effect */}
      <style jsx>{`
        @keyframes floatSlow {
          0% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
          100% { transform: translateY(0); }
        }
        .float-slow {
          animation: floatSlow 12s ease-in-out infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  )
}
