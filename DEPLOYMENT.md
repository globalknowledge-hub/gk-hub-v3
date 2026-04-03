# 🚀 DEPLOYMENT GUIDE

## Quick Deploy to Vercel (Recommended)

### Method 1: Vercel CLI (Fastest)

1. Install dependencies:
```bash
npm install
```

2. Install Vercel CLI globally:
```bash
npm i -g vercel
```

3. Login to Vercel:
```bash
vercel login
```

4. Deploy:
```bash
vercel
```

5. Follow prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - What's your project's name? **global-education-hub**
   - In which directory is your code located? **./**
   - Want to override settings? **N**

6. Done! Your site is live at the provided URL.

For production:
```bash
vercel --prod
```

---

### Method 2: GitHub + Vercel (Automatic)

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit - Global Education Hub"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"
   - Done! Auto-deploys on every push.

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open http://localhost:3000
```

---

## Build & Preview

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

---

## PWA Installation on Mobile

### iOS (iPhone/iPad):
1. Open the deployed site in Safari
2. Tap the Share button (box with arrow)
3. Scroll down and tap "Add to Home Screen"
4. Tap "Add" in the top right
5. App icon appears on home screen!

### Android:
1. Open the deployed site in Chrome
2. Tap the menu (3 dots)
3. Tap "Add to Home Screen" or "Install App"
4. Confirm installation
5. App icon appears on home screen!

---

## Project Structure

```
global-education-hub/
├── public/
│   ├── manifest.json       # PWA manifest
│   ├── sw.js              # Service worker for offline support
│   └── icon.svg           # App icon
├── src/
│   ├── App.tsx            # Main component (all features)
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles + responsive
├── index.html             # HTML with PWA meta tags
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── vite.config.ts         # Vite config
├── vercel.json           # Vercel deployment settings
└── README.md             # Documentation
```

---

## Features Checklist

✅ Fully responsive (mobile/tablet/desktop)
✅ PWA-ready (installable on mobile)
✅ Apple-level design quality
✅ Bilingual (English/Assamese)
✅ Reader Mode (E-ink optimized)
✅ News filtering by region
✅ Scholarship tracking with deadlines
✅ Exam countdown timers
✅ Top institutes directory
✅ Zero broken links
✅ Perfect margins/padding
✅ Smooth animations
✅ Optimized images
✅ Service worker caching
✅ SEO meta tags
✅ Social media cards

---

## Customization

### Update Mock Data:
Edit `src/App.tsx` → `MOCK_DATA` object

### Change Colors:
Edit `src/index.css` → Color variables

### Modify Content:
Edit `src/App.tsx` → Component sections

---

## Troubleshooting

**Build fails?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Port 3000 in use?**
```bash
npm run dev -- --port 3001
```

**Vercel deployment issues?**
- Check `vercel.json` is present
- Ensure `package.json` has correct scripts
- Verify Node.js version (18+)

---

## Performance Tips

- Images load from Unsplash CDN (fast)
- Service worker caches assets
- Code splitting enabled
- Lazy loading implemented
- Optimized fonts (system fonts)

---

## Support

Built with ❤️ by Javed Bhai
Horaizon Tech | Guwahati, Assam

For issues: Check console logs or rebuild

---

## Next Steps After Deployment

1. ✅ Test on mobile devices
2. ✅ Install as PWA
3. ✅ Check all links work
4. ✅ Test reader mode
5. ✅ Try language toggle
6. ✅ Verify responsiveness
7. 🎉 Share your deployed URL!

**Your site will be live at:**
- Development: `http://localhost:3000`
- Production: `https://your-project.vercel.app`

---

**Ready to deploy? Run:** `vercel`
