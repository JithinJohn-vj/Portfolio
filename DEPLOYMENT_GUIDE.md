# Deployment Guide for Portfolio Projects

This guide will help you deploy your GitHub repositories as live demos that can be accessed in a browser.

## Quick Deployment Options

### 1. **Vercel** (Recommended for Next.js/React projects)
- **Best for**: Next.js, React, Node.js projects
- **Steps**:
  1. Go to [vercel.com](https://vercel.com)
  2. Sign up with your GitHub account
  3. Click "New Project"
  4. Import your GitHub repository
  5. Vercel auto-detects Next.js/React and deploys automatically
  6. Your site will be live at `your-project.vercel.app`

**Advantages**: Free, automatic deployments on git push, custom domains, SSL certificates

### 2. **Netlify**
- **Best for**: React, Vue, Angular, static sites
- **Steps**:
  1. Go to [netlify.com](https://netlify.com)
  2. Sign up with GitHub
  3. Click "Add new site" → "Import an existing project"
  4. Select your repository
  5. Configure build settings (if needed)
  6. Deploy!

**Advantages**: Free tier, continuous deployment, form handling, serverless functions

### 3. **GitHub Pages** (For static sites)
- **Best for**: Static HTML/CSS/JS sites
- **Steps**:
  1. In your GitHub repo, go to Settings → Pages
  2. Select branch (usually `main` or `gh-pages`)
  3. Select folder (usually `/root` or `/docs`)
  4. Save - your site will be at `username.github.io/repo-name`

**Advantages**: Free, integrated with GitHub, simple setup

### 4. **Render** (For full-stack apps)
- **Best for**: Full-stack apps with backend (Django, FastAPI, etc.)
- **Steps**:
  1. Go to [render.com](https://render.com)
  2. Sign up with GitHub
  3. Create "New Web Service"
  4. Connect your repository
  5. Configure build and start commands
  6. Deploy!

**Advantages**: Free tier, supports databases, auto-deploy from GitHub

## For Your Specific Projects

### AI-Powered Quote Automation System (Next.js + FastAPI)
1. **Frontend (Next.js)**: Deploy to Vercel
   - Connect your Next.js repo
   - Vercel will auto-detect and deploy
   
2. **Backend (FastAPI)**: Deploy to Render or Railway
   - Create a new Web Service on Render
   - Set build command: `pip install -r requirements.txt`
   - Set start command: `uvicorn main:app --host 0.0.0.0 --port $PORT`
   - Update frontend API URLs to point to deployed backend

### E-Voting System (React + Django)
1. **Frontend (React)**: Deploy to Netlify or Vercel
   - Build command: `npm run build`
   - Publish directory: `build` or `dist`
   
2. **Backend (Django)**: Deploy to Render or Railway
   - Set build command: `pip install -r requirements.txt && python manage.py collectstatic --noinput`
   - Set start command: `gunicorn your_project.wsgi:application`
   - Add PostgreSQL database if needed

### E-Commerce System (React/Next.js + Django)
1. **Frontend**: Deploy to Vercel (if Next.js) or Netlify (if React)
2. **Backend**: Deploy to Render with PostgreSQL database
3. **Update environment variables** for API endpoints, database URLs, etc.

## Environment Variables

Don't forget to set environment variables in your deployment platform:
- API keys
- Database URLs
- Secret keys
- Frontend API endpoints

## After Deployment

1. Update your portfolio's `Projects.tsx` with the live demo URLs
2. Test all links to ensure they work
3. Update your resume with live demo links

## Example Update to Projects.tsx

```typescript
{
  title: 'AI-Powered Quote Automation System',
  // ... other fields
  live: 'https://your-project.vercel.app', // Add your deployed URL here
}
```

## Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **Render Docs**: https://render.com/docs

Happy deploying! 🚀

