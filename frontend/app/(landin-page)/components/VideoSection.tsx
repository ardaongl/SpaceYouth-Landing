'use client'

import React, { useEffect, useRef, useState } from 'react'
import LogoLoop from '@/components/ui/logo_loop'
import { SiReact as SiReactIcon, SiNextdotjs as SiNextIcon, SiTypescript as SiTsIcon, SiTailwindcss as SiTwIcon } from 'react-icons/si'


export default function VideoSection() {
  const iconClass = 'text-[#959595]/30'
  const IconReact = SiReactIcon as unknown as React.ComponentType<any>
  const IconNext = SiNextIcon as unknown as React.ComponentType<any>
  const IconTs = SiTsIcon as unknown as React.ComponentType<any>
  const IconTw = SiTwIcon as unknown as React.ComponentType<any>

  const techLogos = [
    { node: React.createElement(IconReact, { size: 100, className: iconClass }), title: 'React', href: 'https://react.dev' },
    { node: React.createElement(IconNext, { size: 100, className: iconClass }), title: 'Next.js', href: 'https://nextjs.org' },
    { node: React.createElement(IconTs, { size: 100, className: iconClass }), title: 'TypeScript', href: 'https://www.typescriptlang.org' },
    { node: React.createElement(IconTw, { size: 100, className: iconClass }), title: 'Tailwind CSS', href: 'https://tailwindcss.com' }
  ]

  // Video refs/state for custom controls
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)
  const [showCenterControl, setShowCenterControl] = useState(false)
  const hideCenterTimerRef = useRef<number | null>(null)

  const toggleMute = () => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setIsMuted(v.muted)
  }

  const togglePiP = async () => {
    const v = videoRef.current as any
    if (!v) return
    try {
      if (document.pictureInPictureElement) {
        await (document as any).exitPictureInPicture()
      } else if (v.requestPictureInPicture) {
        await v.requestPictureInPicture()
      }
    } catch {}
  }

  const toggleFullscreen = async () => {
    const el = containerRef.current as any
    if (!el) return
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen()
      } else if (el.requestFullscreen) {
        await el.requestFullscreen()
      }
    } catch {}
  }

  // Keep isPlaying in sync with the video element
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)
    v.addEventListener('play', onPlay)
    v.addEventListener('pause', onPause)
    return () => {
      v.removeEventListener('play', onPlay)
      v.removeEventListener('pause', onPause)
    }
  }, [])

  const togglePlayPause = async () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      await v.play()
      setIsPlaying(true)
    } else {
      v.pause()
      setIsPlaying(false)
    }
  }

  const onContainerMouseMove = () => {
    setShowCenterControl(true)
    if (hideCenterTimerRef.current) window.clearTimeout(hideCenterTimerRef.current)
    hideCenterTimerRef.current = window.setTimeout(() => {
      setShowCenterControl(false)
    }, 1500)
  }

    return (
      <section className="relative min-h-[75vh] md:min-h-screen overflow-hidden bg-black">

        {/* Logo loop (preserved) */}
        <div className="bg-[#0f0f0f] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen pt-6">
            <div className="w-full mx-auto">
                 <LogoLoop
                  logos={techLogos}
                   speed={40}
                   direction="left"
                   logoHeight={100}
                    gap={40}
                    pauseOnHover
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#ffffff"
                    className="py-1"
                    ariaLabel="Technology partners"
                  />
            </div>
        </div>

        {/* Video showcase area */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8 py-10 md:py-14">
          <div className="bg-gradient-to-b  rounded-3xl p-2 sm:p-3">
            <div
              ref={containerRef}
              onMouseMove={onContainerMouseMove}
              className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-black shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
            >
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                src="/images/Stars.mp4"
                autoPlay
                loop
                muted={isMuted}
                playsInline
              />
              {/* Center play/pause button */}
              <button
                type="button"
                onClick={togglePlayPause}
                className={`pointer-events-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid h-16 w-16 place-items-center rounded-full bg-black/70 text-white transition-opacity duration-200 hover:bg-black ${(!isPlaying || showCenterControl) ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100`}
                aria-label={isPlaying ? 'Pause' : 'Play'}
                title={isPlaying ? 'Durdur' : 'Başlat'}
              >
                {isPlaying ? (
                  // Pause icon
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                    <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
                  </svg>
                ) : (
                  // Play icon
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
              {/* Hover controls */}
              <div className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-2 rounded-lg bg-black/80 px-2 py-1 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <button
                  type="button"
                  onClick={toggleMute}
                  className="pointer-events-auto grid h-8 w-8 place-items-center rounded-md text-white hover:bg-white/10"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                  title={isMuted ? 'Sesi Aç' : 'Sesi Kapat'}
                >
                  {/* Icons via inline SVGs to avoid new deps */}
                  {isMuted ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                      <path d="M3 10v4h4l5 5V5L7 10H3zM16.5 12l2.5 2.5 1.5-1.5L18 10.5 16.5 12z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                      <path d="M3 10v4h4l5 5V5L7 10H3z" />
                      <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.06c1.48-.74 2.5-2.26 2.5-4.03zM14 3.23v2.06c3.39.49 6 3.39 6 6.71s-2.61 6.22-6 6.71v2.06c4.45-.52 8-4.31 8-8.77s-3.55-8.25-8-8.77z" />
                    </svg>
                  )}
                </button>
                <button
                  type="button"
                  onClick={togglePiP}
                  className="pointer-events-auto grid h-8 w-8 place-items-center rounded-md text-white hover:bg-white/10"
                  aria-label="Picture in Picture"
                  title="Picture-in-Picture"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M3 5h18v14H3V5zm2 2v10h14V7H5zm7 3h6v4h-6v-4z" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={toggleFullscreen}
                  className="pointer-events-auto grid h-8 w-8 place-items-center rounded-md text-white hover:bg-white/10"
                  aria-label="Fullscreen"
                  title="Tam Ekran"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M7 14H5v5h5v-2H7v-3zm12 5h-5v-2h3v-3h2v5zM7 5h3V3H5v5h2V5zm12 3V3h-5v2h3v3h2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

      </section>
    )
}