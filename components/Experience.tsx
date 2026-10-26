'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar } from 'lucide-react'
import { TechBadge } from './TechBadge'

type ExperienceItem = {
  company: string
  location: string
  position: string
  period: string
  type?: string
  summary: string
  description: string[]
  technologies: string[]
}

const experiences: ExperienceItem[] = [
  {
    company: 'DevFio',
    location: 'Self-Initiated SaaS Product',
    position: 'Founder & Full Stack Developer',
    period: 'April 2026 – Present',
    type: 'Founder',
    summary:
      'Built, launched, and currently maintain DevFio, an AI-powered freemium SaaS platform enabling professionals across IT, healthcare, electronics engineering, and finance to create, publish, and share portfolio profiles. Live in production at www.devfio.com.',
    description: [
      'Led MVP development end-to-end, from market analysis and product scoping through to production launch, and continue to own the roadmap, releases, and ongoing improvements as the founder.',
      'Architected the full stack using Next.js (frontend) and Django REST Framework (backend) with PostgreSQL as the primary database, deployed via Docker and GitHub Actions CI/CD pipelines.',
      "Built a portfolio template system with subdomain hosting, publishing each user's portfolio on a unique subdomain (e.g. username.devfio.com) so users get a professional web presence without any technical setup.",
      'Developed an in-platform resume builder that generates and downloads formatted CVs directly from profile data, with field-specific templates for each professional vertical.',
      "Integrated an AI-powered cover letter generator that parses the user's profile and a job description to produce a tailored, role-specific cover letter in seconds.",
      'Built an AI-driven ATS checker that analyses a CV against a job description, scoring keyword alignment and suggesting targeted improvements to increase shortlisting chances.',
      "Developed a Job Hub aggregating job listings matched to the user's profile and skills, letting users discover and apply to opportunities without leaving the platform.",
      'Implemented real-time messaging between professionals and recruiters/employers using Django Channels and WebSockets.',
      'Built secure JWT-based authentication with RBAC, freemium tier enforcement, and RESTful APIs powering all platform features.',
      'Managed production deployment, hosting, maintenance, and ongoing feature development, keeping the platform live at www.devfio.com.',
    ],
    technologies: ['Next.js', 'React', 'Django REST Framework', 'PostgreSQL', 'Django Channels', 'WebSockets', 'AI/LLM', 'Docker', 'GitHub Actions'],
  },
  {
    company: 'Readymade AB',
    location: 'Sweden',
    position: 'Full Stack Developer',
    period: 'September 2025 – March 2026',
    type: 'Onsite',
    summary:
      'Responsible for building and maintaining company websites and internal business platforms, owning the full stack from UI to database with a focus on performance, security, and code quality.',
    description: [
      'Built and maintained scalable web platforms using Next.js 14 and React, implementing component-level code splitting and lazy loading to meet Core Web Vitals targets.',
      'Developed SSR and SSG pages with Next.js to improve SEO and reduce initial load times across all products.',
      'Engineered RESTful backend APIs using Django (Python), structuring endpoints with clear validation and error handling.',
      'Designed and maintained PostgreSQL schemas with ACID-compliant transactions, optimised queries, and targeted indexing to avoid slow full-table scans.',
      'Implemented enterprise-grade authentication using JWT and OAuth 2.0, including RBAC and session management across multiple services.',
      'Applied React/Next.js security best practices to prevent XSS, CSRF, and data exposure vulnerabilities.',
      'Built reusable TypeScript and Tailwind CSS component libraries, establishing shared design tokens to maintain visual consistency across teams.',
      'Monitored production health using structured logging and performance profiling tools, triaging incidents to maintain service reliability.',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Python', 'Django', 'PostgreSQL'],
  },
  {
    company: 'Silvis AB',
    location: 'Göteborg, Sweden',
    position: 'Web Developer',
    period: 'September 2024 – August 2025',
    summary:
      'Maintained and updated the company website, built and launched the new website for Meze Street (mezestreet.se), part of the Silvis business, and developed internal employee-management systems to support staff administration and day-to-day operations.',
    description: [
      'Maintained and regularly updated the company website, including content, features, and design improvements.',
      'Designed, built, and launched the new website for Meze Street (mezestreet.se), part of the Silvis business, using Next.js, React, and ShadCN UI, and continue to maintain and update it.',
      'Built responsive, mobile-friendly pages with React, HTML, and CSS, keeping a consistent brand look across the Silvis websites.',
      'Developed internal employee-management features with Python and Django for staff records, attendance, scheduling, and administrative workflows.',
      'Built Django backend APIs connecting the internal systems to Next.js frontends, with role-based access for management and staff.',
      'Deployed and hosted the websites and internal systems on Google Cloud Platform, managing environments and releases.',
      'Set up CI/CD pipelines with GitHub to automate builds and deployments, and managed version control and code reviews on GitHub.',
      'Improved website security, performance, and functionality while troubleshooting and resolving technical issues.',
      'Implemented website enhancements based on business requirements and management feedback.',
      'Collaborated with management to understand requirements and deliver practical technical solutions.',
      'Provided ongoing technical support for the websites and internal systems.',
    ],
    technologies: ['Next.js', 'React', 'ShadCN UI', 'HTML', 'CSS', 'Python', 'Django', 'CI/CD', 'GitHub', 'GCP'],
  },
  {
    company: 'LymData Labs Pvt. Ltd.',
    location: 'Kerala, India',
    position: 'Full Stack Developer',
    period: 'July 2023 – September 2024',
    type: 'Remote',
    summary:
      'Worked as a full stack engineer on a cloud-native product team, responsible for frontend delivery and backend API development, while leading infrastructure and DevOps initiatives on GCP.',
    description: [
      'Designed responsive UI components using React and Next.js with Tailwind CSS and ShadCN UI, ensuring cross-browser compatibility and accessibility compliance.',
      'Built and maintained RESTful APIs with FastAPI (Python), integrating Pydantic validation and structured logging to improve reliability and debuggability.',
      'Architected microservice infrastructure on GCP using Docker and Kubernetes, enabling horizontal scalability and zero-downtime deployments.',
      'Led Infrastructure as Code using Terraform to automate provisioning of GCP resources including Cloud Run, Cloud SQL, and VPC networking.',
      'Established CI/CD pipelines with GitHub Actions, automating tests and deployments to GCP staging and production environments.',
      'Integrated Django backend services with React frontends via REST APIs, using JWT for secure stateless authentication across microservices.',
      "Improved API reliability with automated smoke tests and request/response validation using FastAPI's Pydantic models.",
    ],
    technologies: ['React', 'Next.js', 'FastAPI', 'Django', 'Kubernetes', 'GCP', 'Terraform'],
  },
  {
    company: 'Softroniics Solutions',
    location: 'Palakkad, Kerala, India',
    position: 'Junior Full Stack Developer',
    period: 'December 2019 – December 2021',
    summary:
      'Contributed to internal web products including an Inventory Management System, a CRM platform, and a secure e-voting system, working across frontend, backend, and cloud infrastructure under senior guidance.',
    description: [
      'Built dynamic, responsive frontend interfaces using React.js and TypeScript, implementing reusable UI patterns and improving accessibility across core pages.',
      'Developed CRUD-heavy features for an Inventory Management System and CRM using React and Django REST Framework, connected via REST APIs.',
      'Engineered a secure e-voting system in React and Django with real-time vote encryption, tamper-proof integrity checks, and duplicate vote prevention client- and server-side.',
      'Built React admin dashboards for election management covering election setup, voter list management, and live turnout reporting via Django REST endpoints.',
      'Integrated FastAPI services for performance-sensitive endpoints, using Pydantic models for strict request validation.',
      'Provisioned AWS infrastructure using Terraform, creating EC2 instances, S3 buckets, and configuring IAM roles for application-level access control.',
      'Supported GCP deployments using Docker to containerise Django and FastAPI services for consistent staging and production parity.',
    ],
    technologies: ['React', 'Django REST Framework', 'FastAPI', 'PostgreSQL', 'MongoDB', 'AWS', 'GCP'],
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
                  {exp.type && (
                    <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">
                      {exp.type}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-200 mb-4 leading-relaxed">
                {exp.summary}
              </p>

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
                  <TechBadge
                    key={tech}
                    label={tech}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
