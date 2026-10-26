import { Code2 } from 'lucide-react'
import { getTech } from '@/lib/tech'

export function TechBadge({ label }: { label: string }) {
  const tech = getTech(label)
  const Icon = tech?.icon

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300">
      {Icon ? (
        <Icon className="h-3.5 w-3.5 shrink-0" color={tech.color} aria-hidden="true" />
      ) : (
        <Code2 className="h-3.5 w-3.5 shrink-0 text-primary-300" aria-hidden="true" />
      )}
      {label}
    </span>
  )
}
