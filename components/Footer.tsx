import { Linkedin, Github, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center gap-6 mb-4">
            <a
              href="https://www.linkedin.com/in/jithin-john-dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full text-gray-300 hover:text-primary-400 hover:bg-gray-700 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/JithinJohn-vj"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full text-gray-300 hover:text-primary-400 hover:bg-gray-700 transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:jithinjohnptr@gmail.com"
              aria-label="Email"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full text-gray-300 hover:text-primary-400 hover:bg-gray-700 transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} Jithin John. All rights reserved.
          </p>
          <p className="text-sm mt-2 text-gray-500">
            Built with Next.js, React, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

