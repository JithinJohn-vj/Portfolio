import { Code2 } from 'lucide-react'
import type { ComponentType } from 'react'
import type { IconType as ReactIconType } from 'react-icons'
import {
  SiAmazonwebservices,
  SiDocker,
  SiDjango,
  SiFastapi,
  SiFigma,
  SiFlask,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGooglecloud,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiKubernetes,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiOpenai,
  SiOllama,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRazorpay,
  SiScikitlearn,
  SiShadcnui,
  SiSqlite,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
  SiVercel,
  SiVscodium,
} from 'react-icons/si'

type TechIcon = ComponentType<{ className?: string; color?: string }>

const iconMap: Record<string, ReactIconType> = {
  // Frontend
  React: SiReact,
  'React.js': SiReact,
  'Next.js': SiNextdotjs,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  'Tailwind CSS': SiTailwindcss,
  Vercel: SiVercel,

  // Backend
  Python: SiPython,
  FastAPI: SiFastapi,
  Django: SiDjango,
  'Django REST': SiDjango,
  'Django REST Framework (DRF)': SiDjango,
  Flask: SiFlask,
  GraphQL: SiGraphql,

  // DevOps / Cloud
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  GCP: SiGooglecloud,
  AWS: SiAmazonwebservices,
  Terraform: SiTerraform,
  'GitHub Actions': SiGithubactions,

  // Databases
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  SQLite: SiSqlite,

  // AI
  'Scikit-learn': SiScikitlearn,
  'OpenAI API': SiOpenai,
  OpenAI: SiOpenai,
  Ollama: SiOllama,
  ShadCN: SiShadcnui,
  'ShadCN UI': SiShadcnui,
  RazorPay: SiRazorpay,

  // Tools
  Git: SiGit,
  GitHub: SiGithub,
  'Git/GitHub': SiGithub,
  'Testing (Jest)': SiJest,
  'Linux/CLI': SiLinux,
  'Figma (handoff)': SiFigma,
  VSCode: SiVscodium,
}

const colorMap: Record<string, string> = {
  React: '#61DAFB',
  'React.js': '#61DAFB',
  'Next.js': '#111111',
  TypeScript: '#3178C6',
  JavaScript: '#F7DF1E',
  'Tailwind CSS': '#06B6D4',
  Vercel: '#000000',

  Python: '#3776AB',
  FastAPI: '#009688',
  Django: '#092E20',
  'Django REST': '#092E20',
  'Django REST Framework (DRF)': '#092E20',
  Flask: '#000000',
  GraphQL: '#E10098',

  Docker: '#2496ED',
  Kubernetes: '#326CE5',
  GCP: '#4285F4',
  AWS: '#FF9900',
  Terraform: '#7B42BC',
  'GitHub Actions': '#2088FF',

  PostgreSQL: '#4169E1',
  MongoDB: '#47A248',
  MySQL: '#4479A1',
  SQLite: '#003B57',

  'Scikit-learn': '#F7931E',
  'OpenAI API': '#10A37F',
  OpenAI: '#10A37F',
  Ollama: '#000000',
  ShadCN: '#111111',
  'ShadCN UI': '#111111',
  RazorPay: '#0C2451',

  Git: '#F05032',
  GitHub: '#181717',
  'Git/GitHub': '#181717',
  'Testing (Jest)': '#C21325',
  'Linux/CLI': '#FCC624',
  'Figma (handoff)': '#F24E1E',
  VSCode: '#2F80ED',
}

export function TechBadge({
  label,
  className = '',
}: {
  label: string
  className?: string
}) {
  const Icon = iconMap[label] as unknown as TechIcon | undefined
  const color = colorMap[label]

  return (
    <span
      className={[
        'px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-700 inline-flex items-center gap-2',
        className,
      ].join(' ')}
    >
      <span className="w-4 h-4 flex items-center justify-center shrink-0">
        {Icon ? (
          <Icon className="w-4 h-4" color={color} aria-hidden="true" />
        ) : (
          <Code2 className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" />
        )}
      </span>
      <span className="truncate">{label}</span>
    </span>
  )
}

