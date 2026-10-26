import { Github, Linkedin, Mail } from 'lucide-react'
import { navItems, profile } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:justify-between lg:px-8">
        <a href="#home" className="text-lg font-bold text-white">
          Jithin <span className="text-primary-400">John</span>
        </a>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-sm text-slate-400 transition hover:text-white">
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-btn">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icon-btn">
            <Github className="h-5 w-5" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="icon-btn">
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <p className="text-xs text-slate-500">© {new Date().getFullYear()} Jithin John. All rights reserved.</p>
      </div>
    </footer>
  )
}
