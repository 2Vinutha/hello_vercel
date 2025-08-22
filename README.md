# Browser‑Only Web App (Vercel)

Minimal project for internship submission.

## Live URL
Paste your URL here: `https://YOUR-APP.vercel.app`

## Structure
```
/api
  ├─ index.js    -> returns a JSON greeting
  └─ health.js   -> returns 'ok' for health checks
/public
  ├─ index.html  -> simple UI calling /api
  └─ about.html  -> project info
vercel.json      -> routes and builds config
```

## How to deploy (no installs)
1. Go to Vercel → Add New → Project → Import → **Upload** this zip.
2. Wait for green tick → open the URL.
3. Test:
   - `/` (homepage)
   - `/api` (JSON)
   - `/api/health` ('ok')
   - `/about.html`

## Notes
- Edit files and re-upload to redeploy, or connect a GitHub repo for auto-deploys.
- Optional: set env var `NAME` in Vercel → Project Settings → Environment Variables to customize the greeting.
