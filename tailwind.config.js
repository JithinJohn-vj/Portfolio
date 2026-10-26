/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#030816',
          900: '#060d22',
          800: '#0b1530',
          700: '#14214a',
        },
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        script: ['var(--font-caveat)', 'cursive'],
      },
      boxShadow: {
        glow: '0 0 24px -4px rgba(59, 130, 246, 0.55)',
        'glow-lg': '0 0 48px -8px rgba(59, 130, 246, 0.6)',
      },
      keyframes: {
        'cube-spin': {
          from: { transform: 'rotateX(-18deg) rotateY(0deg)' },
          to: { transform: 'rotateX(-18deg) rotateY(360deg)' },
        },
        'scroll-dot': {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '80%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '0' },
        },
      },
      animation: {
        'cube-spin': 'cube-spin 18s linear infinite',
        'scroll-dot': 'scroll-dot 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
