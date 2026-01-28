'use client'

import { motion } from 'framer-motion'
import { TechBadge } from './TechBadge'

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'ShadCN UI', level: 85 },
      { name: 'Responsive UI', level: 90 },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'FastAPI', level: 90 },
      { name: 'Django', level: 90 },
      { name: 'Flask', level: 80 },
      { name: 'RESTful APIs', level: 90 },
      { name: 'GraphQL', level: 75 },
      { name: 'JWT & OAuth', level: 85 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'Kubernetes', level: 80 },
      { name: 'GCP', level: 85 },
      { name: 'AWS', level: 75 },
      { name: 'Terraform', level: 80 },
      { name: 'GitHub Actions', level: 85 },
      { name: 'CI/CD', level: 85 },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'SQLite', level: 75 },
      { name: 'Query Optimization', level: 85 },
    ],
  },
  {
    title: 'AI & Machine Learning',
    skills: [
      { name: 'Scikit-learn', level: 75 },
      { name: 'Ollama (LLM)', level: 80 },
      { name: 'OpenAI API', level: 85 },
      { name: 'ML Integration', level: 80 },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'Testing (Jest)', level: 75 },
      { name: 'Linux/CLI', level: 80 },
      { name: 'Figma (handoff)', level: 75 },
      { name: 'VSCode', level: 90 },
    ],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <TechBadge
                        label={skill.name}
                        className="bg-transparent dark:bg-transparent border-0 px-0 py-0 text-sm font-medium"
                      />
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="flex gap-1.5">
                      {Array.from({ length: 10 }).map((_, i) => {
                        const filled = Math.round((skill.level / 100) * 10)
                        const isFilled = i < filled
                        return (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0.3, scaleX: 0.6 }}
                            whileInView={{ opacity: 1, scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.35,
                              delay:
                                categoryIndex * 0.12 +
                                skillIndex * 0.05 +
                                i * 0.02,
                            }}
                            className={[
                              'h-2.5 flex-1 rounded-full origin-left',
                              isFilled
                                ? 'bg-gradient-to-r from-primary-600 to-primary-400 shadow-[0_0_0_1px_rgba(59,130,246,0.12)]'
                                : 'bg-gray-200 dark:bg-gray-700',
                            ].join(' ')}
                          />
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

