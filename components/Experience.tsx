'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar, ExternalLink } from 'lucide-react'

const experiences = [
  {
    company: 'Readymade AB',
    location: 'Skene, Sweden',
    position: 'Fullstack Developer',
    period: 'September 2025 – Present',
    type: 'Onsite',
    description: [
      'Build high-converting websites with WordPress and Elementor Pro, creating reusable design systems, global styles, and responsive layouts.',
      'Develop custom WordPress plugins and theme functions in PHP (hooks/actions, shortcodes, custom widgets) to extend Elementor beyond out-of-the-box capabilities.',
      'Model content with Custom Post Types and Advanced Custom Fields (ACF), surface data via WP REST API for dynamic components.',
      'Optimize performance and SEO: image compression, lazy loading, preloading key assets, caching (page/object/opcode), and structured data - improving Core Web Vitals.',
      'Implement WooCommerce customizations (templates, checkout, hooks) and payment/shipping integrations, configure product data and automation.',
      'Set up CI/CD with GitHub Actions (lint/test/build → SFTP/SSH deploy), versioning themes/plugins and running backups/db migrations.',
      'Collaborate with designers to translate Figma/briefs into pixel-perfect Elementor components with accessibility (WCAG 2.1 AA) in mind.',
    ],
    technologies: ['WordPress', 'Elementor Pro', 'PHP', 'JavaScript (ES6)', 'jQuery', 'WooCommerce', 'ACF', 'WP REST API', 'MySQL', 'Nginx/Apache', 'Git', 'GitHub Actions', 'Docker', 'CSS/SASS'],
  },
  {
    company: 'LymData Labs Pvt. Ltd.',
    location: 'Kerala, India',
    position: 'Fullstack Developer',
    period: 'April 2024 – March 2025',
    type: 'Remote',
    description: [
      'Designed and implemented user interfaces using React and Next.js with component libraries like Tailwind CSS and ShadCN UI.',
      'Integrated dynamic and RESTful APIs using FastAPI and Django, ensuring smooth communication between frontend and backend.',
      'Developed interactive features using TypeScript, enhancing frontend reliability and scalability.',
      'Built SSR and SSG pages in Next.js for performance optimization and SEO.',
      'Implemented microservice architecture with Docker and Kubernetes for scalable deployment on GCP.',
      'Established CI/CD pipelines using GitHub Actions to automate test and deployment cycles.',
      'Led Infrastructure as Code initiatives using Terraform to automate GCP provisioning.',
    ],
    technologies: ['React', 'Next.js', 'FastAPI', 'Django', 'TypeScript', 'JavaScript', 'Docker', 'Kubernetes', 'GCP', 'Terraform', 'GitHub Actions', 'Git'],
  },
  {
    company: 'Softroniics Solutions',
    location: 'Calicut, Kerala, India',
    position: 'Fullstack Developer',
    period: 'July 2023 – March 2024',
    type: 'Onsite',
    description: [
      'Developed and maintained user-friendly frontend interfaces for e-commerce platforms using Python Django, React and Next.js.',
      'Integrated secure backend services using Django & FastAPI with JWT OAuth authentication.',
      'Improved frontend performance and accessibility with optimized code and lazy loading techniques.',
      'Implemented secure authentication & authorization mechanisms (JWT, OAuth) for API security.',
      'Optimized database queries & indexing in PostgreSQL & MongoDB, reducing response times by 40%.',
      'Developed CI/CD pipelines to automate deployment processes.',
      'Implemented API monitoring & logging for enhanced observability and debugging.',
    ],
    technologies: ['Python', 'React', 'Next.js', 'FastAPI', 'Django', 'Flask', 'PostgreSQL', 'MongoDB', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'GitHub'],
  },
  {
    company: 'Softroniics Solutions',
    location: 'Palakkad, Kerala, India',
    position: 'Junior Fullstack Developer',
    period: 'December 2019 – December 2021',
    type: 'Onsite',
    description: [
      'Developed dynamic and responsive frontend applications using React.js, TypeScript and JavaScript, integrating them with robust RESTful APIs from Django REST Framework and FastAPI.',
      'Designed and implemented user-friendly dashboards and forms, following component-driven development.',
      'Built full-fledged Inventory Management System and Customer Relationship Management (CRM) platform, with CRUD operations, data validation, and role-based access control.',
      'Implemented form validations, conditional rendering, and state management (React Context API), ensuring seamless frontend-backend integration.',
      'Created reusable React Components and styled them with CSS3 and utility frameworks.',
      'Engineered an E-voting system with real-time encryption and secure frontend interactions.',
      'Participated in code reviews and sprint planning, actively contributing to a collaborative and iterative development cycle.',
      'Gained hands-on experience in deploying cloud-based applications and optimizing backend infrastructure.',
      'Assisted in cloud deployments and infrastructure provisioning using Terraform and Docker.',
    ],
    technologies: ['Python', 'React', 'SQLite', 'MongoDB', 'PostgreSQL', 'Django REST Framework (DRF)', 'FastAPI', 'Flask', 'Docker', 'Terraform', 'AWS', 'GCP', 'GitHub Actions'],
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
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
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {exp.position}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-lg text-primary-600 dark:text-primary-400 font-semibold mb-2">
                    <span>{exp.company}</span>
                    <span className="text-gray-400">•</span>
                    <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end gap-2">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">
                    {exp.type}
                  </span>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-gray-600 dark:text-gray-300 flex items-start">
                    <span className="text-primary-600 dark:text-primary-400 mr-2 mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

