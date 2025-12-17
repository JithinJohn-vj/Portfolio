# Deploy Your Portfolio in 3 Steps 🚀

Your portfolio is ready to deploy! Follow these simple steps:

## Step 1: Push to GitHub (if not already done)

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial portfolio commit"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel (Recommended - 2 minutes)

1. **Go to [vercel.com](https://vercel.com)** and sign up/login with GitHub
2. **Click "Add New Project"**
3. **Import your portfolio repository**
4. **Vercel will auto-detect Next.js** - just click "Deploy"
5. **Wait 1-2 minutes** - your site will be live!

Your portfolio will be live at: `your-portfolio.vercel.app`

## Step 3: Update Custom Domain (Optional)

1. In Vercel dashboard, go to your project → Settings → Domains
2. Add your custom domain (e.g., `jithinjohn.dev`)
3. Follow DNS configuration instructions

## Alternative: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com) and sign up with GitHub
2. Click "Add new site" → "Import an existing project"
3. Select your repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Click "Deploy site"

## That's it! 🎉

Your portfolio is now live on the internet!

---

## For Your Other Projects

To deploy your individual projects (AI Quote System, E-Voting, E-Commerce):

1. **Frontend projects (React/Next.js)**: Deploy to Vercel (same process)
2. **Backend projects (FastAPI/Django)**: Deploy to Render.com
   - Create "New Web Service"
   - Connect GitHub repo
   - Set build/start commands
   - Deploy!

Once deployed, update the `live` URLs in `components/Projects.tsx`

