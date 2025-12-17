# Portfolio Website

A modern, responsive portfolio website built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and beautiful UI design
- 📱 Fully responsive layout
- 🌙 Dark mode support
- ✨ Smooth animations with Framer Motion
- 🚀 Fast performance with Next.js
- 📧 Contact form section
- 🎯 Smooth scrolling navigation

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

### Personal Information

1. **Hero Section** (`components/Hero.tsx`):
   - Update your name and title
   - Modify the description text

2. **About Section** (`components/About.tsx`):
   - Add your photo (replace the placeholder)
   - Update the about text
   - Modify the tags/attributes

3. **Skills Section** (`components/Skills.tsx`):
   - Update skill categories and proficiency levels
   - Add or remove skills as needed

4. **Projects Section** (`components/Projects.tsx`):
   - Replace project data with your actual projects
   - Add project images
   - Update GitHub and live demo links

5. **Contact Section** (`components/Contact.tsx`):
   - Update email address
   - Add your social media links (LinkedIn, GitHub, Twitter, etc.)

6. **Metadata** (`app/layout.tsx`):
   - Update the page title and description

### Styling

- Colors can be customized in `tailwind.config.js`
- Global styles are in `app/globals.css`
- Component-specific styles use Tailwind CSS classes

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
Portfolio/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Navigation.tsx  # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills section
│   ├── Projects.tsx    # Projects section
│   ├── Contact.tsx     # Contact section
│   └── Footer.tsx      # Footer
└── public/             # Static assets (images, etc.)
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## License

This project is open source and available under the MIT License.

