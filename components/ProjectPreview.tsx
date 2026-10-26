import { ShieldCheck, ShoppingCart, Sparkles, Vote } from 'lucide-react'
import type { ProjectPreviewKind } from '@/lib/data'

// Stylised mini app screens for the project cards.
export default function ProjectPreview({ kind, label }: { kind: ProjectPreviewKind; label: string }) {
  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-white shadow-lg" aria-hidden="true">
      <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
        <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        <span className="ml-2 truncate text-[8px] font-medium text-slate-500">{label}</span>
      </div>
      <div className="h-32">{screens[kind]}</div>
    </div>
  )
}

const line = (w: string, tone = 'bg-slate-200') => <span className={`block h-1.5 rounded ${tone}`} style={{ width: w }} />

const screens: Record<ProjectPreviewKind, React.ReactNode> = {
  cv: (
    <div className="flex h-full gap-3 p-3">
      <div className="flex flex-1 flex-col gap-1.5">
        <p className="text-[9px] font-bold text-slate-800">Create Your Professional CV</p>
        {line('90%')}
        {line('70%')}
        <div className="mt-1 grid grid-cols-2 gap-1.5">
          <span className="h-4 rounded border border-slate-200" />
          <span className="h-4 rounded border border-slate-200" />
          <span className="h-4 rounded border border-slate-200" />
          <span className="h-4 rounded border border-slate-200" />
        </div>
        <span className="mt-auto flex h-4 w-16 items-center justify-center rounded bg-blue-600 text-[7px] font-semibold text-white">
          Generate
        </span>
      </div>
      <div className="flex w-[42%] flex-col gap-1 rounded border border-slate-200 p-2 shadow-sm">
        <span className="h-4 w-4 rounded-full bg-blue-200" />
        {line('80%', 'bg-slate-700')}
        {line('60%')}
        <span className="my-0.5 h-px bg-slate-200" />
        {line('90%')}
        {line('75%')}
        {line('85%')}
        {line('50%', 'bg-blue-200')}
      </div>
    </div>
  ),
  quote: (
    <div className="flex h-full">
      <div className="flex w-10 flex-col gap-2 bg-slate-800 p-2">
        <Sparkles className="h-3 w-3 text-blue-400" />
        {line('100%', 'bg-slate-600')}
        {line('100%', 'bg-slate-600')}
        {line('100%', 'bg-blue-500')}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-2.5">
        <div className="grid grid-cols-3 gap-1.5">
          {['Quotes', 'Accuracy', 'Saved'].map((stat) => (
            <div key={stat} className="rounded border border-slate-200 p-1">
              <p className="text-[6px] text-slate-500">{stat}</p>
              {line('60%', 'bg-slate-700')}
            </div>
          ))}
        </div>
        <div className="flex flex-1 items-end gap-1 rounded border border-slate-200 p-1.5">
          {[40, 65, 50, 80, 60, 90, 75].map((h, i) => (
            <span key={i} className="flex-1 rounded-sm bg-blue-500/80" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </div>
  ),
  vote: (
    <div className="flex h-full items-center justify-between bg-gradient-to-br from-[#0b1a4a] to-[#1e3a8a] p-3">
      <div className="flex flex-col gap-1.5">
        <span className="flex items-center gap-1 text-[7px] text-blue-200">
          <ShieldCheck className="h-2.5 w-2.5" /> Encrypted
        </span>
        <p className="text-[10px] font-bold leading-tight text-white">
          Secure Digital Voting
          <br />
          for a Better Tomorrow
        </p>
        <span className="mt-1 flex h-4 w-14 items-center justify-center rounded bg-blue-500 text-[7px] font-semibold text-white">
          Cast vote
        </span>
      </div>
      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-blue-400/20 shadow-[0_0_24px_rgba(96,165,250,0.6)]">
        <Vote className="h-9 w-9 text-blue-100" />
      </div>
    </div>
  ),
  shop: (
    <div className="flex h-full flex-col gap-2 p-2.5">
      <div className="flex items-center justify-between">
        {line('35%', 'bg-slate-700')}
        <ShoppingCart className="h-3 w-3 text-blue-600" />
      </div>
      <div className="grid flex-1 grid-cols-3 gap-1.5">
        {['bg-blue-100', 'bg-amber-100', 'bg-emerald-100', 'bg-rose-100', 'bg-violet-100', 'bg-sky-100'].map((tone) => (
          <div key={tone} className="flex flex-col gap-0.5 rounded border border-slate-200 p-1">
            <span className={`flex-1 rounded-sm ${tone}`} />
            {line('70%')}
          </div>
        ))}
      </div>
    </div>
  ),
}
