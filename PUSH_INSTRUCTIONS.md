# How to Push Successfully

## The Issue
You're getting a 403 error because GitHub needs a Personal Access Token, not your password.

## Solution: Use Token in URL

Instead of entering username/password when prompted, use the token directly in the URL:

### Step 1: Create Token
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Name: `Portfolio Push`
4. Check `repo` checkbox
5. Generate and COPY the token (starts with `ghp_`)

### Step 2: Push Using Token

Run this command (replace `YOUR_TOKEN` with the actual token):

```bash
cd /Users/readymadeab/Desktop/Portfolio
git push https://YOUR_TOKEN@github.com/JithinJohn-vj/Portfolio.git main
```

**Example:**
```bash
git push https://ghp_abc123xyz789@github.com/JithinJohn-vj/Portfolio.git main
```

### Alternative: Use SSH (Easier for Future)

1. Generate SSH key:
```bash
ssh-keygen -t ed25519 -C "jithinjohn0911@gmail.com"
# Press Enter for all prompts
```

2. Copy your public key:
```bash
cat ~/.ssh/id_ed25519.pub
```

3. Add to GitHub:
   - Go to: https://github.com/settings/keys
   - Click "New SSH key"
   - Paste the key and save

4. Change remote to SSH:
```bash
cd /Users/readymadeab/Desktop/Portfolio
git remote set-url origin git@github.com:JithinJohn-vj/Portfolio.git
git push origin main
```





