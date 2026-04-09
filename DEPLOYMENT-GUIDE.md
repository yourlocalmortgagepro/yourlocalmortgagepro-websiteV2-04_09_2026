# 🚀 DEPLOYMENT GUIDE - Step by Step

## Dennis, follow these EXACT steps to get your site live for FREE

---

## ⏱️ Time Estimate: 15-20 minutes

---

## 📋 BEFORE YOU START - What You Need

✅ A GitHub account (free - we'll create one if you don't have it)
✅ This website folder (you have it!)
✅ 15 minutes of uninterrupted time

That's it. Let's go.

---

## PART 1: Get Your Code on GitHub (5 minutes)

### Step 1.1: Create a GitHub Account (if you don't have one)

1. Go to: **https://github.com**
2. Click **"Sign up"** (top right corner)
3. Enter your email address
4. Create a password
5. Choose a username (can be anything - e.g., "dennisfields" or "yourlocalmortgagepro")
6. Complete the verification puzzle
7. Click **"Create account"**
8. Verify your email (check your inbox)

**✓ You now have a GitHub account!**

---

### Step 1.2: Create a New Repository

1. Once logged in to GitHub, click the **"+"** button (top right corner)
2. Click **"New repository"**
3. **Repository name:** Type `yourlocalmortgagepro-website` (exactly like that)
4. **Description:** (optional) Type "My professional mortgage website"
5. Make sure **"Public"** is selected (it's free)
6. **DO NOT** check "Add a README file"
7. Click the green **"Create repository"** button

**✓ You now have an empty repository!**

---

### Step 1.3: Upload Your Website Files

**GitHub will show you a page with instructions. Ignore them. Do this instead:**

1. Look for the text that says **"uploading an existing file"** - click that link
   - (It's in a sentence like "...or upload an existing file")

2. You'll see a box that says "Drag files here to add them to your repository"

3. **Open the folder** `yourlocalmortgagepro-website` on your computer

4. **Select ALL files and folders:**
   - On Windows: Press `Ctrl + A`
   - On Mac: Press `Cmd + A`

5. **Drag everything** into the GitHub upload box
   - You should see files like: `package.json`, `astro.config.mjs`, folders like `src`, `public`, etc.

6. Wait for all files to upload (you'll see a progress bar)

7. Scroll down and click the green **"Commit changes"** button

**✓ Your code is now on GitHub!**

---

## PART 2: Deploy to Vercel (FREE Hosting) (5 minutes)

### Step 2.1: Create a Vercel Account

1. Go to: **https://vercel.com**
2. Click **"Sign Up"** (top right)
3. Click **"Continue with GitHub"**
4. Click **"Authorize Vercel"** (green button)
5. You'll be redirected back to Vercel

**✓ You're now logged in to Vercel!**

---

### Step 2.2: Deploy Your Website

1. You'll see a page with **"Let's build something new"**
2. Click **"Add New..."** dropdown → **"Project"**
3. You'll see a list of your GitHub repositories
4. Find **"yourlocalmortgagepro-website"** in the list
5. Click the **"Import"** button next to it

6. **Configure Project** screen appears:
   - **Framework Preset:** Should say "Astro" (if not, select it from dropdown)
   - **Root Directory:** Leave as `./ ` (default)
   - **Build Command:** Leave as `npm run build` (default)
   - **Output Directory:** Leave as `dist` (default)
   
7. Click the blue **"Deploy"** button

8. **Wait 2-3 minutes** while Vercel builds your site
   - You'll see a loading animation
   - Progress logs will show (this is normal)

9. When you see **"Congratulations!"** and confetti 🎉, you're done!

**✓ Your website is LIVE!**

---

### Step 2.3: View Your Live Website

1. Vercel will show you a screenshot of your site
2. Click **"Visit"** button or the URL shown (looks like `yourlocalmortgagepro-xxx.vercel.app`)
3. **Your website is live!** Share this URL with anyone

**✓ You now have a free, live website!**

---

## PART 3: Connect Your Custom Domain (Optional - 10 minutes)

**Only do this if you own yourlocalmortgagepro.com**

### Step 3.1: Add Domain to Vercel

1. In Vercel, click on your project name
2. Click **"Settings"** (top menu)
3. Click **"Domains"** (left sidebar)
4. Type your domain: `yourlocalmortgagepro.com`
5. Click **"Add"**

### Step 3.2: Configure DNS

Vercel will show you DNS records like this:

```
Type: A
Name: @
Value: 76.76.21.21
```

```
Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

**Now go to where you bought your domain:**

- **GoDaddy:**
  1. Log in to GoDaddy.com
  2. Click "My Products"
  3. Find your domain → Click "DNS"
  4. Add the A record and CNAME record Vercel gave you
  5. Save changes

- **Namecheap:**
  1. Log in to Namecheap.com
  2. Click "Domain List"
  3. Click "Manage" next to your domain
  4. Click "Advanced DNS"
  5. Add the records Vercel gave you
  6. Save changes

**Wait 24-48 hours** for DNS changes to take effect.

**✓ Your site will be live at yourlocalmortgagepro.com!**

---

## 🎉 YOU'RE DONE!

Your website is now:
- ✅ Live on the internet
- ✅ Free to host (forever)
- ✅ Fast and secure
- ✅ Mobile-friendly
- ✅ Yours to control

---

## 📝 How to Update Your Website Later

Whenever you want to change something:

1. Go to **GitHub.com** and log in
2. Click on your **"yourlocalmortgagepro-website"** repository
3. Navigate to the file you want to edit (e.g., `src/pages/index.astro`)
4. Click the **pencil icon** ("Edit this file")
5. Make your changes
6. Scroll down and click **"Commit changes"**
7. **Vercel automatically rebuilds your site in 2 minutes!**

---

## ❓ Troubleshooting

### "Build failed" error on Vercel?

1. Check that ALL files were uploaded to GitHub
2. Make sure `package.json` is in the ROOT folder (not inside another folder)
3. Try clicking **"Redeploy"** in Vercel

### Website looks weird?

1. Clear your browser cache: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
2. Wait 2-3 minutes and refresh again

### Images not showing?

1. Check that `dennis-headshot.png` and `logo.png` are in the `public/` folder on GitHub
2. File names are case-sensitive: make sure they match exactly

---

## 🆘 Need Help?

1. **Check Vercel's deployment logs** (click on your project → "Deployments" → latest deployment)
2. **Search the error message** on Google
3. **Ask me (Claude)** - paste the error and I'll help you fix it

---

## 🎯 Next Steps After Deployment

1. **Test on your phone** - Does it look good?
2. **Share the link** with friends/family for feedback
3. **Submit to Google** - Google Search Console
4. **Add Google Analytics** - Track your visitors
5. **Start blogging** - Add mortgage tips to /resources

---

## 💰 Cost Summary

| Item | Cost |
|------|------|
| GitHub | FREE |
| Vercel Hosting | FREE |
| SSL Certificate | FREE (included) |
| Custom Domain | $12/year (if you don't own one) |

**Total: $0-12/year**

Compare to:
- Wix: $192-324/year
- Squarespace: $192-588/year
- WordPress: $120-360/year

**You're saving $180-576/year!** 💰

---

**That's it, Dennis! Your website is live and costing you ZERO per month.**

Go forth and dominate the NC/SC/VA mortgage market! 🚀

---

**All loans subject to approval. Equal Housing Lender.**
