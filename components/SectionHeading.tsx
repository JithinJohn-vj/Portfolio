'use client'

import { motion } from 'framer-motion'

export default function SectionHeading({
  eyebrow,
  pill,
  title,
}: {
  eyebrow: string
  pill?: string
  title: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-400">
          {eyebrow}
        </span>
        {pill && (
          <span className="rounded-full border border-white/15 px-3 py-0.5 text-[10px] font-medium uppercase tracking-[0.15em] text-slate-400">
            {pill}
          </span>
        )}
      </div>
      <h2 className="mt-3 text-3xl font-bold leading-tight text-white md:text-4xl">{title}</h2>
    </motion.div>
  )
}
