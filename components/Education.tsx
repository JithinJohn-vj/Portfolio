'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'

const education = [
  {
    degree: 'Information Technology',
    institution: 'Halmstad University',
    location: 'Sweden',
    period: '2021 – 2023',
    description:
      'Studies in Information Technology with focus on modern software development practices.',
  },
  {
    degree: 'Master of Computer Applications (MCA)',
    status: 'Completed',
    institution: 'University of Calicut',
    location: 'India',
    period: '2016 – 2019',
    description:
      "Master's degree in Computer Applications covering advanced programming, software engineering, database management, and system design.",
  },
  {
    degree: 'Bachelor of Computer Science (BSc)',
    status: 'Completed',
    institution: 'University of Calicut',
    location: 'India',
    period: '2013 – 2016',
    description:
      "Bachelor's degree in Computer Science with comprehensive foundation in programming, algorithms, data structures, and computer fundamentals.",
  },
]

export default function Education() {
  return (
    <section
      id="education"
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
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={`${edu.institution}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-4">
                  <GraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="font-semibold mr-2">{edu.institution}</span>
                </div>
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{edu.location}</span>
                </div>
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{edu.period}</span>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

