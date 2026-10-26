'use client'

import { motion } from 'framer-motion'
import { Code2, LayoutTemplate, Lightbulb, TrendingUp } from 'lucide-react'
import SectionHeading from './SectionHeading'

const traits = [
  { icon: Code2, label: 'Clean & Scalable Code' },
  { icon: LayoutTemplate, label: 'Modern UI/UX' },
  { icon: Lightbulb, label: 'Problem Solver' },
  { icon: TrendingUp, label: 'Continuous Learner' },
]

const cubeFaces = ['Develop', 'Design', 'Deploy', 'Debug', 'Build', 'Learn']

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
        <div>
          <SectionHeading eyebrow="About Me" pill="Get to know me" title="Passionate about building digital experiences" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 max-w-2xl space-y-4 leading-relaxed text-slate-400"
          >
            <p>
              I&apos;m a Full Stack Developer with 4+ years of experience architecting and deploying scalable web
              applications, AI-powered systems and cloud-native platforms. I work across Python (FastAPI, Django),
              React, Next.js and TypeScript, with Docker, Kubernetes, GCP and Terraform on the infrastructure side.
            </p>
            <p>
              I enjoy optimising database performance, building CI/CD pipelines and shipping AI/ML-enabled
              products — most recently DevFio, the SaaS platform I founded. I love learning new technologies,
              solving complex problems and creating products that make a difference.
            </p>
          </motion.div>

          <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {traits.map(({ icon: Icon, label }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
                className="glass glass-hover flex items-center gap-3 px-4 py-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary-500/40 bg-primary-500/10">
                  <Icon className="h-5 w-5 text-primary-300" />
                </span>
                <span className="text-sm font-semibold text-white">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto flex h-80 w-full max-w-sm items-center justify-center"
          aria-hidden="true"
        >
          <div className="absolute h-56 w-56 rounded-full bg-primary-600/25 blur-3xl" />
          <div className="absolute h-24 w-[110%] rounded-[50%] border border-primary-500/40 shadow-glow [transform:translateY(90px)_rotateX(70deg)]" />
          <div className="absolute h-36 w-[130%] rounded-[50%] border border-primary-500/15 [transform:translateY(90px)_rotateX(70deg)]" />
          <div className="cube-scene">
            <div className="cube animate-cube-spin">
              {cubeFaces.map((face) => (
                <div key={face} className="cube-face text-lg">
                  {face}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
