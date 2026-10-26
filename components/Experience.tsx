'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Briefcase, Calendar, GraduationCap, MapPin, Plane } from 'lucide-react'
import { education, experiences } from '@/lib/data'
import SectionHeading from './SectionHeading'
import { TechBadge } from './TechBadge'

// Node positions on the journey scene, in % of its width/height (oldest → newest).
const nodes = [
  { x: 8, y: 80 },
  { x: 29, y: 68 },
  { x: 50, y: 60 },
  { x: 71, y: 48 },
  { x: 91, y: 36 },
]

// Catmull-Rom spline through the nodes, in a 1000×100 viewBox.
function journeyPath() {
  const pts = [{ x: 0, y: 88 }, ...nodes, { x: 100, y: 30 }].map((p) => ({ x: p.x * 10, y: p.y }))
  let d = `M${pts[0].x},${pts[0].y}`
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i]
    const p1 = pts[i]
    const p2 = pts[i + 1]
    const p3 = pts[i + 2] ?? p2
    const c1 = { x: p1.x + (p2.x - p0.x) / 6, y: p1.y + (p2.y - p0.y) / 6 }
    const c2 = { x: p2.x - (p3.x - p1.x) / 6, y: p2.y - (p3.y - p1.y) / 6 }
    d += ` C${c1.x},${c1.y} ${c2.x},${c2.y} ${p2.x},${p2.y}`
  }
  return d
}

const path = journeyPath()

function labelTransform(index: number) {
  if (index === 0) return 'translate(-14px, calc(-100% - 20px))'
  if (index === nodes.length - 1) return 'translate(calc(-100% + 14px), calc(-100% - 20px))'
  return 'translate(-50%, calc(-100% - 20px))'
}

export default function Experience() {
  const [selected, setSelected] = useState(experiences.length - 1)
  const exp = experiences[selected]

  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="My Journey" pill="Where I've worked" title="Professional Experience" />
        <p className="mt-3 text-sm text-slate-400">Select a stop on the journey to see the details.</p>

        {/* Journey scene (md and up) */}
        <div className="relative mt-10 hidden h-[400px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-navy-900 to-navy-950 md:block">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 100" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="mountain-back" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#14214a" />
                <stop offset="100%" stopColor="#060d22" />
              </linearGradient>
              <linearGradient id="mountain-front" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0b1530" />
                <stop offset="100%" stopColor="#030816" />
              </linearGradient>
              <linearGradient id="journey-line" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#1d4ed8" />
                <stop offset="50%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#93c5fd" />
              </linearGradient>
            </defs>
            <path
              d="M0 68 L60 52 L120 60 L200 38 L280 54 L360 30 L440 50 L520 28 L600 46 L680 22 L760 40 L840 18 L920 36 L1000 24 L1000 100 L0 100Z"
              fill="url(#mountain-back)"
              opacity="0.8"
            />
            <path
              d="M0 86 L90 72 L170 80 L260 66 L350 77 L450 62 L540 73 L640 57 L740 67 L840 52 L930 61 L1000 54 L1000 100 L0 100Z"
              fill="url(#mountain-front)"
            />
            <path d={path} fill="none" stroke="#3b82f6" strokeWidth="10" strokeOpacity="0.18" vectorEffect="non-scaling-stroke" />
            <path d={path} fill="none" stroke="url(#journey-line)" strokeWidth="3" vectorEffect="non-scaling-stroke" />
          </svg>

          <motion.div
            className="absolute text-primary-200 drop-shadow-[0_0_10px_rgba(147,197,253,0.9)]"
            style={{ left: '39%', top: '44%' }}
            animate={{ y: [0, -8, 0], x: [0, 6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden="true"
          >
            <Plane className="h-7 w-7" />
          </motion.div>

          {experiences.map((item, index) => {
            const node = nodes[index]
            const isActive = index === selected
            return (
              <div key={item.company + item.short}>
                <button
                  onClick={() => setSelected(index)}
                  aria-pressed={isActive}
                  aria-label={`${item.position} at ${item.company}, ${item.period}`}
                  className="absolute z-10 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                >
                  <span
                    className={`absolute inset-0 rounded-full transition ${
                      isActive ? 'animate-ping bg-emerald-400/40' : 'bg-primary-500/20'
                    }`}
                  />
                  <span
                    className={`relative h-4 w-4 rounded-full border-2 border-white transition ${
                      isActive
                        ? 'scale-125 bg-emerald-400 shadow-[0_0_16px_4px_rgba(52,211,153,0.6)]'
                        : 'bg-primary-500 shadow-glow'
                    }`}
                  />
                </button>
                <button
                  onClick={() => setSelected(index)}
                  tabIndex={-1}
                  className={`absolute w-44 text-left transition ${index === nodes.length - 1 ? 'text-right' : ''} ${
                    isActive ? 'opacity-100' : 'opacity-70 hover:opacity-100'
                  }`}
                  style={{ left: `${node.x}%`, top: `${node.y}%`, transform: labelTransform(index) }}
                >
                  <span className={`block text-xs ${isActive ? 'text-emerald-300' : 'text-primary-300'}`}>{item.short}</span>
                  <span className="block text-sm font-bold leading-snug text-white">{item.company}</span>
                  <span className="block text-xs text-slate-400">{item.position}</span>
                  <span className={`mt-0.5 flex items-center gap-1 text-xs text-slate-500 ${index === nodes.length - 1 ? 'justify-end' : ''}`}>
                    <MapPin className="h-3 w-3" />
                    {item.location}
                  </span>
                </button>
              </div>
            )
          })}

          <div className="glass absolute bottom-5 right-5 flex items-center gap-3 bg-navy-900/70 px-4 py-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500/15">
              <Briefcase className="h-5 w-5 text-primary-300" />
            </span>
            <div className="text-sm leading-tight">
              <p className="font-semibold text-white">4+ Years of Experience</p>
              <p className="text-primary-300">Across India and Sweden</p>
            </div>
          </div>
        </div>

        {/* Stop picker (mobile) */}
        <div className="mt-8 flex gap-2 overflow-x-auto pb-2 md:hidden">
          {experiences.map((item, index) => (
            <button
              key={item.company + item.short}
              onClick={() => setSelected(index)}
              aria-pressed={index === selected}
              className={`shrink-0 rounded-xl border px-4 py-2 text-left text-xs transition ${
                index === selected
                  ? 'border-primary-500 bg-primary-500/15 text-white shadow-glow'
                  : 'border-white/10 bg-white/[0.03] text-slate-400'
              }`}
            >
              <span className="block text-primary-300">{item.short}</span>
              <span className="block font-semibold">{item.company}</span>
            </button>
          ))}
        </div>

        {/* Details for the selected stop */}
        <AnimatePresence mode="wait">
          <motion.article
            key={selected}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="glass mt-6 p-6 md:p-8"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white">{exp.position}</h3>
                <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-primary-300">
                  <span className="text-lg font-semibold">{exp.company}</span>
                  <span className="text-slate-600">•</span>
                  <span className="flex items-center gap-1 text-sm text-slate-400">
                    <MapPin className="h-4 w-4" />
                    {exp.location}
                  </span>
                </div>
              </div>
              <div className="flex flex-row items-center gap-3 md:flex-col md:items-end">
                <span className="flex items-center gap-2 text-sm font-medium text-slate-300">
                  <Calendar className="h-4 w-4" />
                  {exp.period}
                </span>
                {exp.type && (
                  <span className="rounded-full border border-primary-500/40 bg-primary-500/10 px-3 py-0.5 text-xs font-medium text-primary-200">
                    {exp.type}
                  </span>
                )}
              </div>
            </div>

            <p className="mt-5 leading-relaxed text-slate-300">{exp.summary}</p>

            <ul className="mt-5 grid gap-x-8 gap-y-2.5 lg:grid-cols-2">
              {exp.description.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-400">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-400 shadow-glow" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5">
              {exp.technologies.map((tech) => (
                <TechBadge key={tech} label={tech} />
              ))}
            </div>
          </motion.article>
        </AnimatePresence>

        {/* Education */}
        <div className="mt-14">
          <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary-400">
            <GraduationCap className="h-4 w-4" />
            Education
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass glass-hover p-5"
              >
                <p className="text-xs text-primary-300">{edu.period}</p>
                <p className="mt-1 font-semibold text-white">{edu.degree}</p>
                <p className="mt-1 text-sm text-slate-400">
                  {edu.institution} · {edu.location}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
