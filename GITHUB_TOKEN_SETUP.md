# How to Push to GitHub - Personal Access Token Setup

## Step 1: Create a Personal Access Token

1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Give it a name: `Portfolio Push Token`
4. Select expiration: Choose how long you want it to work (90 days, 1 year, or no expiration)
5. **Check the `repo` checkbox** (this gives access to repositories)
6. Scroll down and click **"Generate token"**
7. **COPY THE TOKEN IMMEDIATELY** - it starts with `ghp_` and you won't see it again!

## Step 2: Use the Token to Push

Run this command:
```bash
cd /Users/readymadeab/Desktop/Portfolio
git push origin main
```

When prompted:
- **Username**: `JithinJohn-vj` (your GitHub username, NOT your email)
- **Password**: Paste the token you copied (the one starting with `ghp_`)

## Alternative: Use SSH (No Token Needed)

If you prefer SSH authentication:

1. Generate SSH key (if you don't have one):
```bash
ssh-keygen -t ed25519 -C "jithinjohn0911@gmail.com"
```

2. Add SSH key to GitHub:
```bash
cat ~/.ssh/id_ed25519.pub
```
Copy the output and add it at: https://github.com/settings/keys

3. Change remote to SSH:
```bash
cd /Users/readymadeab/Desktop/Portfolio
git remote set-url origin git@github.com:JithinJohn-vj/Portfolio.git
git push origin main
```

