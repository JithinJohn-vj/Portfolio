'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function About() {
  const [imageError, setImageError] = useState(false)
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-800"
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-2xl transform rotate-6"></div>
              <div className="relative bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden h-96 flex items-center justify-center">
                {!imageError ? (
                  <Image
                    src="/me.jpeg"
                    alt="Jithin John - Full Stack Developer"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-gray-500 dark:text-gray-400 text-center px-4">
                      Please add me.jpeg to the /public folder
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Versatile and detail-oriented Full Stack Developer with over 4 years of experience in developing robust
              and scalable web applications. Skilled in Python (FastAPI, Django) for backend development and React,
              Next.js, TypeScript for modern frontend experiences.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Strong expertise in Docker, Kubernetes, GCP, and Terraform for cloud-native deployments. Passionate about
              clean code, system architecture, and DevOps principles. Experienced in building AI/ML-enabled platforms
              with real-time integrations.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                4+ Years Experience
              </span>
              <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                Cloud & DevOps
              </span>
              <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                AI/ML Integration
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

