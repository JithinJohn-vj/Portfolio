'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CalendarCheck, Mail, MapPin, Phone, Send } from 'lucide-react'
import { profile } from '@/lib/data'
import SectionHeading from './SectionHeading'

const cards = [
  { icon: Mail, title: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, title: 'Phone', value: profile.phone, href: profile.phoneHref },
  { icon: MapPin, title: 'Location', value: profile.location },
  { icon: CalendarCheck, title: 'Availability', value: 'Open to Opportunities' },
]

// Orthographic dot globe, precomputed so server and client render the same markup.
const globeDots = (() => {
  const dots: { x: number; y: number; r: number; o: number }[] = []
  const radius = 170
  for (let lat = -78; lat <= 78; lat += 6) {
    for (let lon = -180; lon < 180; lon += 6) {
      const la = (lat * Math.PI) / 180
      const lo = ((lon + 20) * Math.PI) / 180
      const z = Math.cos(la) * Math.cos(lo)
      if (z <= 0.05) continue
      const land = Math.sin(lat / 11) + Math.cos(lon / 17) + Math.sin((lat + lon) / 23) > 0.6
      dots.push({
        x: Math.round((200 + radius * Math.cos(la) * Math.sin(lo)) * 10) / 10,
        y: Math.round((200 - radius * Math.sin(la)) * 10) / 10,
        r: land ? 1.9 : 1,
        o: Math.round((land ? 0.35 + z * 0.65 : 0.12 + z * 0.2) * 100) / 100,
      })
    }
  }
  return dots
})()

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute -right-32 top-10 h-[480px] w-[480px] rounded-full bg-primary-600/15 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:px-8">
        <div>
          <SectionHeading eyebrow="Let's Connect" title="Let's Build Something Great" />
          <p className="mt-4 max-w-xl leading-relaxed text-slate-400">
            I&apos;m always open to discussing new opportunities, interesting projects or just a friendly chat about
            technology. Drop me a message and I&apos;ll get back to you.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {cards.map(({ icon: Icon, title, value, href }, index) => {
              const content = (
                <>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary-500/40 bg-primary-500/10">
                    <Icon className="h-5 w-5 text-primary-300" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-white">{title}</span>
                    <span className="block truncate text-sm text-slate-400">{value}</span>
                  </span>
                </>
              )
              return (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  {href ? (
                    <a href={href} className="glass glass-hover flex items-center gap-4 p-4">
                      {content}
                    </a>
                  ) : (
                    <div className="glass flex items-center gap-4 p-4">{content}</div>
                  )}
                </motion.div>
              )
            })}
          </div>

          <a href={`mailto:${profile.email}`} className="btn-primary mt-8">
            Get In Touch
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto aspect-square w-full max-w-md"
          aria-hidden="true"
        >
          <div className="absolute inset-[15%] rounded-full bg-primary-600/25 blur-3xl" />
          <svg viewBox="0 0 400 400" className="relative h-full w-full">
            <circle cx="200" cy="200" r="172" fill="none" stroke="#3b82f6" strokeOpacity="0.35" />
            {globeDots.map((dot, i) => (
              <circle key={i} cx={dot.x} cy={dot.y} r={dot.r} fill="#60a5fa" opacity={dot.o} />
            ))}
            <path
              d="M30 300 Q 200 120 360 90"
              fill="none"
              stroke="#93c5fd"
              strokeOpacity="0.6"
              strokeDasharray="4 6"
            />
          </svg>
          <motion.div
            className="absolute right-[6%] top-[14%] text-primary-200 drop-shadow-[0_0_14px_rgba(147,197,253,0.9)]"
            animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Send className="h-12 w-12" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
