'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Code2 } from 'lucide-react'
import { skillCategories, skills, type SkillCategory } from '@/lib/data'
import { getTech } from '@/lib/tech'
import SectionHeading from './SectionHeading'

type Filter = 'All' | SkillCategory

export default function Skills() {
  const [filter, setFilter] = useState<Filter>('All')
  const visible = filter === 'All' ? skills : skills.filter((skill) => skill.category === filter)

  return (
    <section id="skills" className="relative py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-[700px] -translate-x-1/2 rounded-full bg-primary-700/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <SectionHeading eyebrow="My Skills" pill="Technologies I work with" title="Tools & Technologies" />
          <p className="hidden rotate-[-6deg] font-script text-2xl leading-tight text-primary-300 md:block">
            Hover to explore
            <br />
            my skills ↓
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter skills">
          {(['All', ...skillCategories] as Filter[]).map((category) => (
            <button
              key={category}
              role="tab"
              aria-selected={filter === category}
              onClick={() => setFilter(category)}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                filter === category ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {filter === category && (
                <motion.span
                  layoutId="skill-filter"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 shadow-glow"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative">{category}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          <AnimatePresence mode="popLayout">
            {visible.map((skill) => {
              const tech = getTech(skill.name)
              const Icon = tech?.icon
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.25 }}
                  className="glass glass-hover group flex h-24 flex-col items-center justify-center gap-2.5 p-2 text-center"
                >
                  {Icon ? (
                    <Icon
                      className="h-8 w-8 transition-transform duration-300 group-hover:scale-110"
                      color={tech.color}
                      aria-hidden="true"
                    />
                  ) : (
                    <Code2 className="h-8 w-8 text-primary-300" aria-hidden="true" />
                  )}
                  <span className="text-xs font-medium text-slate-300">{skill.name}</span>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
