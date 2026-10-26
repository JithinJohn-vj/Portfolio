'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Github } from 'lucide-react'
import { profile, projects } from '@/lib/data'
import ProjectPreview from './ProjectPreview'
import SectionHeading from './SectionHeading'

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Featured Projects" title="Projects I've Built" />
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-medium text-primary-400 hover:text-primary-300"
          >
            View All Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass glass-hover flex flex-col p-3"
            >
              <ProjectPreview kind={project.preview} label={project.live?.replace('https://', '') ?? project.title} />

              <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
                <span className="w-fit rounded-md bg-primary-500/15 px-2 py-0.5 text-[11px] font-medium text-primary-300">
                  {project.category}
                </span>
                <h3 className="mt-2 text-lg font-bold text-white">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[11px] text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-3 pt-5">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-primary-500/50 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-primary-500/15"
                    >
                      Live Demo
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-1 py-1.5 text-sm font-medium text-slate-300 transition hover:text-primary-300"
                  >
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
