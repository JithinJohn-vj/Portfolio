'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useMotionValueEvent, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, Phone } from 'lucide-react'
import type { IconType } from 'react-icons'
import { SiDocker, SiOpenai, SiPython, SiReact } from 'react-icons/si'
import { profile } from '@/lib/data'

const floatingCards: { icon: IconType; title: string; lines: string[]; position: string }[] = [
  { icon: SiReact, title: 'React', lines: ['Next.js'], position: 'right-[44%] top-[30%]' },
  { icon: SiPython, title: 'Python', lines: ['Django', 'FastAPI'], position: 'right-[30%] top-[16%]' },
  { icon: SiOpenai, title: 'AI/ML', lines: ['OpenAI', 'Ollama'], position: 'right-[6%] top-[20%]' },
  { icon: SiDocker, title: 'DevOps', lines: ['Docker', 'Kubernetes'], position: 'right-[4%] top-[52%]' },
]

const socials = [
  { icon: Linkedin, href: profile.linkedin, label: 'LinkedIn', external: true },
  { icon: Github, href: profile.github, label: 'GitHub', external: true },
  { icon: Mail, href: `mailto:${profile.email}`, label: 'Email', external: false },
  { icon: Phone, href: profile.phoneHref, label: 'Phone', external: false },
]

// Fades a block in over [start, start + 0.08] and out over [end - 0.08, end].
function useStage(progress: MotionValue<number>, start: number, end: number) {
  const fadeIn = start === 0 ? [0, 0.001] : [start, start + 0.08]
  const fadeOut = end >= 1 ? [1.5, 1.6] : [end - 0.08, end]
  const opacity = useTransform(progress, [...fadeIn, ...fadeOut], [start === 0 ? 1 : 0, 1, 1, end >= 1 ? 1 : 0])
  const y = useTransform(progress, [...fadeIn, ...fadeOut], [start === 0 ? 0 : 40, 0, 0, end >= 1 ? 0 : -40])
  const pointerEvents = useTransform(opacity, (o) => (o > 0.5 ? 'auto' : 'none'))
  return { opacity, y, pointerEvents }
}

// Loads the frame sequence written by scripts/make-hero-frames.sh, if there is one.
function useFrames() {
  const [frames, setFrames] = useState<HTMLImageElement[]>([])

  useEffect(() => {
    let cancelled = false
    fetch('/frames/manifest.json')
      .then((res) => (res.ok ? res.json() : null))
      .then((manifest: { count: number } | null) => {
        if (!manifest?.count || cancelled) return
        const images = Array.from({ length: manifest.count }, (_, i) => {
          const img = new window.Image()
          img.src = `/frames/frame_${String(i + 1).padStart(4, '0')}.jpg`
          return img
        })
        images[0].onload = () => !cancelled && setFrames(images)
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [])

  return frames
}

function FrameCanvas({ frames, progress }: { frames: HTMLImageElement[]; progress: MotionValue<number> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const lastDrawn = useRef<HTMLImageElement | null>(null)

  const draw = (p: number) => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    // Fall back to the nearest earlier frame that has finished loading.
    let index = Math.round(p * (frames.length - 1))
    while (index > 0 && !frames[index].complete) index--
    const img = frames[index]
    if (!img.complete) return

    const dpr = window.devicePixelRatio || 1
    const { clientWidth: w, clientHeight: h } = canvas
    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
      canvas.width = w * dpr
      canvas.height = h * dpr
    } else if (lastDrawn.current === img) {
      return
    }
    const scale = Math.max(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight)
    const dw = img.naturalWidth * scale
    const dh = img.naturalHeight * scale
    ctx.drawImage(img, (canvas.width - dw) / 2, (canvas.height - dh) / 2, dw, dh)
    lastDrawn.current = img
  }

  useMotionValueEvent(progress, 'change', draw)

  useEffect(() => {
    draw(progress.get())
    const onResize = () => draw(progress.get())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frames])

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const frames = useFrames()
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] })

  const intro = useStage(scrollYProgress, 0, 0.36)
  const story = useStage(scrollYProgress, 0.36, 0.68)
  const outro = useStage(scrollYProgress, 0.68, 1)
  const cardsOpacity = useTransform(scrollYProgress, [0.36, 0.46, 0.62, 0.7], [0, 1, 1, 0])
  const hintOpacity = useTransform(scrollYProgress, [0, 0.06], [1, 0])

  // Photo fallback: a slow cinematic push-in while the sequence plays.
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 1.22])
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '-6%'])
  const photoBrightness = useTransform(scrollYProgress, [0, 0.4, 1], [0.55, 1, 1.1])
  const photoFilter = useTransform(photoBrightness, (b) => `brightness(${b})`)
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.35, 0.8, 1])

  return (
    <section id="home" ref={sectionRef} className="relative h-[320vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

        {/* Visual layer */}
        {frames.length > 0 ? (
          <FrameCanvas frames={frames} progress={scrollYProgress} />
        ) : (
          <>
            <motion.div
              style={{ opacity: glowOpacity }}
              className="pointer-events-none absolute bottom-0 right-[-10%] h-[80vh] w-[80vh] rounded-full bg-primary-600/30 blur-[120px] lg:right-[5%]"
            />
            <motion.div
              style={{ scale: photoScale, y: photoY, filter: photoFilter }}
              className="absolute inset-x-0 bottom-[36%] top-[6%] origin-bottom mix-blend-lighten [mask-image:radial-gradient(ellipse_50%_62%_at_50%_45%,#000_60%,transparent_100%)] lg:bottom-0 lg:left-auto lg:right-[2%] lg:top-[8%] lg:w-[55%]"
            >
              <Image
                src="/me.jpeg"
                alt="Jithin John"
                fill
                priority
                className="object-contain object-bottom"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </motion.div>
          </>
        )}

        {/* Keeps text readable over the visual */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent lg:bg-gradient-to-r lg:from-navy-950 lg:via-navy-950/60 lg:to-transparent" />

        <motion.div style={{ opacity: cardsOpacity }} className="pointer-events-none absolute inset-0 hidden lg:block">
          {floatingCards.map(({ icon: Icon, title, lines, position }, index) => (
            <motion.div
              key={title}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: index * 0.6 }}
              className={`glass absolute flex items-center gap-3 border-primary-500/30 bg-navy-900/60 px-4 py-3 shadow-glow ${position}`}
            >
              <Icon className="h-7 w-7 text-primary-300 drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" aria-hidden="true" />
              <div className="text-xs leading-tight">
                <p className="font-semibold text-white">{title}</p>
                {lines.map((line) => (
                  <p key={line} className="text-slate-400">
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Text stages */}
        <div className="relative mx-auto flex h-full max-w-7xl items-end px-4 pb-28 sm:px-6 lg:items-center lg:px-8 lg:pb-0">
          <div className="relative w-full max-w-xl">
            <motion.div style={intro} className="absolute bottom-0 left-0 w-full lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Available for Opportunities
              </span>
              <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                <span className="text-white">Hi, I&apos;m</span>
                <br />
                <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-primary-300 bg-clip-text text-transparent">
                  {profile.name}
                </span>
              </h1>
              <p className="mt-5 text-xl font-medium text-slate-100 sm:text-2xl">{profile.role}</p>
            </motion.div>

            <motion.div style={story} className="absolute bottom-0 left-0 w-full lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-400">What I do</p>
              <p className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                I build modern web apps, AI-powered solutions and scalable systems.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-400">
                4+ years across Python, Django, FastAPI, React and Next.js — from pixel-perfect UIs to cloud-native
                backends on GCP, Docker and Kubernetes.
              </p>
            </motion.div>

            <motion.div style={outro} className="absolute bottom-0 left-0 w-full lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2">
              <p className="font-script text-3xl text-primary-300">Turning ideas into digital solutions</p>
              <p className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">Let&apos;s build something great.</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#projects" className="btn-primary">
                  View My Work
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#contact" className="btn-outline">
                  Get In Touch
                </a>
              </div>
              <div className="mt-8 flex items-center gap-2">
                {socials.map(({ icon: Icon, href, label, external }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="icon-btn"
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          style={{ opacity: hintOpacity }}
          className="pointer-events-none absolute bottom-5 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs text-slate-400"
        >
          <span className="flex h-8 w-5 justify-center rounded-full border border-slate-500 pt-1.5">
            <span className="h-1.5 w-1 animate-scroll-dot rounded-full bg-slate-300" />
          </span>
          Scroll to explore
        </motion.div>

        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-gradient-to-r from-primary-600 to-primary-300 shadow-glow"
        />
      </div>
    </section>
  )
}
