# Fix Netflix Project 404 Error on Vercel

## Common Causes & Solutions

### Issue: 404 NOT_FOUND Error

This usually happens when Vercel can't find the built files or the routing is incorrect.

## Solution 1: Check Build Settings in Vercel

1. Go to your Vercel dashboard
2. Click on your Netflix project
3. Go to **Settings** → **General**
4. Check these settings:

**For React Apps (Create React App):**
- **Build Command**: `npm run build`
- **Output Directory**: `build`
- **Install Command**: `npm install`

**For Next.js Apps:**
- **Framework Preset**: Next.js (should auto-detect)
- **Build Command**: `npm run build` (auto)
- **Output Directory**: `.next` (auto)

**For Vite React Apps:**
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## Solution 2: Check Your Package.json

Make sure your `package.json` has a build script:
```json
{
  "scripts": {
    "build": "react-scripts build"  // or "next build" or "vite build"
  }
}
```

## Solution 3: Add vercel.json (if needed)

If it's a React SPA (Single Page App), create a `vercel.json` in your Netflix project root:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This ensures all routes go to `index.html` for client-side routing.

## Solution 4: Redeploy

1. In Vercel dashboard → Your project → **Deployments**
2. Click the **"..."** menu on the latest deployment
3. Click **"Redeploy"**

## Solution 5: Check Build Logs

1. In Vercel dashboard → Your project → **Deployments**
2. Click on the failed deployment
3. Check the **Build Logs** for errors
4. Fix any errors shown in the logs

## Quick Fix Steps:

1. **Go to Vercel Dashboard** → Your Netflix project
2. **Settings** → **General**
3. **Verify Build Settings**:
   - Framework: Auto-detect or select correct one
   - Build Command: `npm run build`
   - Output Directory: `build` (React) or `dist` (Vite) or `.next` (Next.js)
4. **Save** and **Redeploy**

If it's a React SPA, also add the `vercel.json` file mentioned above to handle routing.





