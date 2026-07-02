# Waves of Worship 3.0 — Event Website

Official event site for **Waves of Worship 3.0 · Throne Room**
RCCG Hope Centre, Crewe · Saturday 15 August 2026 · 3:00 PM · Nantwich Civic Hall.

This is a fully self-contained static website. Everything (markup, styles, fonts,
images and scripts) is inlined into a single `index.html` — no build step required.

## What's inside
```
WOW3-Website/
├── index.html      ← the entire website (self-contained, deployable as-is)
├── vercel.json     ← optional static-hosting config
└── README.md
```

## Deploy to Vercel (fastest)
**Option B — from GitHub (what you're using)**
1. Push this folder's contents to your repo (already done).
2. In Vercel: **Add New… → Project → Import** the repo.
3. **IMPORTANT — set Framework Preset to "Other"** (not Preact / any framework).
   Leave Build Command **empty** and Output Directory as **`.`** (root).
   The included `vercel.json` also forces this, but set it in the UI too.
4. Click **Deploy**. Done.

### Already got the `preact build ... command not found` error?
Vercel wrongly auto-detected a framework. Fix it once:
- Vercel dashboard → your project → **Settings → Build & Deployment** (a.k.a. General)
- **Framework Preset → change to "Other"**
- Make sure **Build Command** is empty (toggle off any override) and
  **Output Directory** is `.`
- Go to **Deployments → ⋯ on the latest → Redeploy**.
The updated `vercel.json` in this folder prevents it from happening again.

**Option A — drag & drop (no GitHub)**
1. Go to https://vercel.com/new
2. Drag this `WOW3-Website` folder onto the page.
3. Framework preset: **Other**. Click **Deploy**.

## Features
- Light + dark mode (follows the visitor's device setting, with a manual toggle).
- Live countdown to the event start.
- Hero, Vision (Throne Room), minister lineup, Reserve (Eventbrite), Volunteer
  sign-up form, Venue + embedded map & directions, Give/Partner, newsletter.
- Fully responsive (mobile → desktop).

## Volunteer sign-ups
The volunteer form validates and **stores each submission in the browser
(`localStorage`)**. To also push submissions to your Google Sheet, deploy a Google
Apps Script Web App and paste its URL into the `ENDPOINT` constant in the source
component, then re-export. (Ask your developer, or send the Apps Script URL back
and it can be wired in.)

## Editing later
`index.html` is a compiled bundle — don't hand-edit it. Content changes should be
made in the source design component and re-exported.
