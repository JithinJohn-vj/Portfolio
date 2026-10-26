export const profile = {
  name: 'Jithin John',
  role: 'Full Stack Developer',
  location: 'Kerala, India',
  email: 'jithinjohnptr@gmail.com',
  phone: '+91 9961257012',
  phoneHref: 'tel:+919961257012',
  linkedin: 'https://www.linkedin.com/in/jithin-john-dev',
  github: 'https://github.com/JithinJohn-vj',
  cv: '/Jithin_John_CV.pdf',
}

export const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export type SkillCategory = 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'AI/ML' | 'Tools'

export const skillCategories: SkillCategory[] = ['Frontend', 'Backend', 'Database', 'DevOps', 'AI/ML', 'Tools']

export const skills: { name: string; category: SkillCategory }[] = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'ShadCN UI', category: 'Frontend' },
  { name: 'Python', category: 'Backend' },
  { name: 'Django', category: 'Backend' },
  { name: 'FastAPI', category: 'Backend' },
  { name: 'Flask', category: 'Backend' },
  { name: 'GraphQL', category: 'Backend' },
  { name: 'JWT & OAuth 2.0', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'MySQL', category: 'Database' },
  { name: 'SQLite', category: 'Database' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Kubernetes', category: 'DevOps' },
  { name: 'GCP', category: 'DevOps' },
  { name: 'AWS', category: 'DevOps' },
  { name: 'Terraform', category: 'DevOps' },
  { name: 'GitHub Actions', category: 'DevOps' },
  { name: 'OpenAI API', category: 'AI/ML' },
  { name: 'Ollama', category: 'AI/ML' },
  { name: 'Scikit-learn', category: 'AI/ML' },
  { name: 'Git', category: 'Tools' },
  { name: 'GitHub', category: 'Tools' },
  { name: 'Linux', category: 'Tools' },
  { name: 'Figma', category: 'Tools' },
  { name: 'VS Code', category: 'Tools' },
  { name: 'PyCharm', category: 'Tools' },
  { name: 'Vercel', category: 'Tools' },
]

export type Experience = {
  company: string
  location: string
  position: string
  period: string
  short: string
  type?: string
  summary: string
  description: string[]
  technologies: string[]
}

// Oldest first: the journey timeline reads left to right.
export const experiences: Experience[] = [
  {
    company: 'Softroniics Solutions',
    location: 'Palakkad, India',
    position: 'Junior Full Stack Developer',
    period: 'Dec 2019 – Dec 2021',
    short: '2019 – 2021',
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
  {
    company: 'LymData Labs Pvt. Ltd.',
    location: 'Kerala, India',
    position: 'Full Stack Developer',
    period: 'Jul 2023 – Sep 2024',
    short: '2023 – 2024',
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
    company: 'Silvis AB',
    location: 'Göteborg, Sweden',
    position: 'Web Developer',
    period: 'Sep 2024 – Aug 2025',
    short: '2024 – 2025',
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
    technologies: ['Next.js', 'React', 'ShadCN UI', 'HTML', 'CSS', 'Python', 'Django', 'GitHub', 'GCP'],
  },
  {
    company: 'Readymade AB',
    location: 'Sweden',
    position: 'Full Stack Developer',
    period: 'Sep 2025 – Mar 2026',
    short: '2025 – 2026',
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
    company: 'DevFio',
    location: 'Self-initiated SaaS',
    position: 'Founder & Full Stack Developer',
    period: 'Apr 2026 – Present',
    short: '2026 – Present',
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
]

export type ProjectPreviewKind = 'cv' | 'quote' | 'vote' | 'shop'

export const projects: {
  title: string
  category: string
  description: string
  technologies: string[]
  preview: ProjectPreviewKind
  github: string
  live?: string
}[] = [
  {
    title: 'Devfio SaaS Platform',
    category: 'SaaS Platform',
    description:
      'AI-powered freemium platform for building and sharing portfolio profiles, with subdomain hosting, a CV builder, AI cover letters, an ATS checker, a Job Hub and real-time recruiter messaging.',
    technologies: ['Next.js', 'Django REST', 'PostgreSQL', 'WebSockets'],
    preview: 'cv',
    github: profile.github,
    live: 'https://www.devfio.com',
  },
  {
    title: 'AI Quote Automation',
    category: 'AI / Automation',
    description:
      'Production-ready platform automating quotation generation with real-time AI inference via Ollama and OpenAI, plus RBAC, audit logging and rate-limited APIs.',
    technologies: ['Next.js', 'FastAPI', 'Ollama', 'OpenAI'],
    preview: 'quote',
    github: profile.github,
  },
  {
    title: 'Secure E-Voting System',
    category: 'Web Application',
    description:
      'Tamper-proof online elections with encrypted vote casting, duplicate-vote prevention, a tamper-evident audit log and an admin dashboard.',
    technologies: ['React', 'Django REST', 'PostgreSQL', 'Docker'],
    preview: 'vote',
    github: profile.github,
  },
  {
    title: 'E-Commerce Platform',
    category: 'E-Commerce',
    description:
      'Product browsing, cart and checkout journeys with payment integration, transactional emails and fast search on PostgreSQL and MongoDB.',
    technologies: ['Next.js', 'Django REST', 'MongoDB', 'GCP'],
    preview: 'shop',
    github: profile.github,
  },
]

export const education = [
  {
    degree: 'Information Technology',
    institution: 'Halmstad University',
    location: 'Sweden',
    period: '2021 – 2023',
  },
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'University of Calicut',
    location: 'India',
    period: '2016 – 2019',
  },
  {
    degree: 'Bachelor of Computer Science (BSc)',
    institution: 'University of Calicut',
    location: 'India',
    period: '2013 – 2016',
  },
]
