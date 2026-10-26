import type { Metadata, Viewport } from 'next'
import { Inter, Caveat } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const caveat = Caveat({ subsets: ['latin'], variable: '--font-caveat' })

export const metadata: Metadata = {
  title: 'Portfolio | Jithin John - Full Stack Developer',
  description: 'Portfolio of Jithin John - Full Stack Developer with 4+ years of experience in Python, FastAPI, Django, React, Next.js, and cloud technologies. Based in Kerala, India.',
}

export const viewport: Viewport = {
  themeColor: '#030816',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${caveat.variable}`}>
      <body className="font-sans">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
