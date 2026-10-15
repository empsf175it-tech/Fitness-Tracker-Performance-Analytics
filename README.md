# PulseForge — Biometric Fitness Tracker & Performance Analytics

> **Fuel. Recover. Perform.**  
> A top-tier, modern static SaaS web application for athletes, sports physiologists, coaches, and longevity clinics.  
> **100% Client-Side Architecture — Zero Backend & Zero Database Required.**

---

## ⚡ Key Architecture & Highlights

* **No Backend & No Database Required:** Pure front-end application built with native web standards. All data persistence, authentication simulation, workout/nutrition/recovery CRUD, and RBAC coach permissions run entirely in the browser via `localStorage` with rich default seed datasets.
* **HTML:** Semantic markup (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`), strict heading hierarchy (single `<h1>` per page, hierarchically nested `<h2>` and `<h3>`), fully accessible form labels and ARIA attributes.
* **CSS:** Centralized design system using CSS variables in `:root` (dark-mode cyber-fitness aesthetic with Electric Lime `#c6ff3d`, Recovery Aqua `#2ef2c2`, Heat Coral `#ff6a4d`, and Deep Teal `#071a1f`). Fully responsive layout and print styles (`@media print`).
* **JavaScript:** Modular ES6+ architecture (`store.js`, `auth.js`, `dashboard.js`, `main.js`, `tilt.js`). **Zero console logs in production.**
* **Performance:** High-performance vector SVGs, clean asset bundling, and pre-minified production assets (`.min.css` and `.min.js`).
* **SEO & Social:** Complete `<head>` metadata on every page including descriptive unique titles, meta descriptions, OpenGraph tags, Twitter cards, canonical tags, and Schema.org JSON-LD structured data.

---

## 🚀 How to Run & Deploy

### Option 1: Direct Browser Launch (No server needed)
Simply open `index.html` directly in any web browser (Chrome, Safari, Edge, Firefox).

### Option 2: Static Local Server
```bash
# Using any static server (e.g. npx serve, live-server, http-server, python, etc.)
npx serve .
# or
npm start
```
Navigate to: **`http://localhost:3000`**

### Option 3: Production Minification Build
```bash
node scripts/build.js
```
This automatically produces minified `.min.css` and `.min.js` files and mirrors the latest static build.

### Option 4: Free One-Click Static Deployment
Deploy to any static hosting provider with zero configuration:
* **GitHub Pages**: Push repository and set source to `main` branch root.
* **Vercel / Netlify / Cloudflare Pages**: Connect repo, set output directory to `./` (root), deploy!

---

## 🔐 1-Click Evaluation Accounts (Seeded via localStorage)

PulseForge comes pre-configured with 3 realistic evaluation perspectives:

| Role | Email | Password | Scope & Permissions |
|------|-------|----------|---------------------|
| **Athlete (Client)** | `athlete@pulseforge.io` | `PulseAthlete123!` | Private telemetry, log workouts & meals, track HRV readiness |
| **Performance Coach** | `coach@pulseforge.io` | `PulseCoach123!` | Manage athlete roster, toggle Edit vs View-Only permissions |
| **Clinic Admin** | `admin@pulseforge.io` | `PulseAdmin123!` | Complete governance, roster audits, system controls |

> **Pro-Tip**: Use the **1-Click Demo Buttons** on the Login page (`login.html`) or the **Role Switcher** inside Dashboard Settings to test all three roles instantly without typing credentials!

---

## 🧭 Site Structure (Strict 4 Navbar Links)

1. **Home (`index.html`)** — 11 rich cinematic sections:
   * Live animated canvas ECG heart-pulse stream
   * Animated biometric trust metric counters
   * 8 3D interactive tilt capability cards
   * 4-stage system timeline (Track, Analyze, Recover, Improve)
   * Live dashboard preview interface
   * Split nutrition & recovery highlights
   * Wearable ecosystem integration marquee
   * Testimonials carousel & pricing teaser
   * Biometric FAQ accordion & instant inquiry form

2. **Nutrition & Recovery (`nutrition-recovery.html`)** — 12 in-depth sections:
   * Interactive SVG Macro & Calorie Ring matrix with real-time phase switcher (Hypertrophy, Endurance, Cutting)
   * Cellular hydration & electrolyte osmolarity widget
   * Clinical micronutrient & ergogenic protocols
   * Circadian sleep staging & neurocardiology HRV explainer (rMSSD)
   * Evidence-based recovery modalities (Sauna, Cold Plunge, Myofascial)
   * 7-day autonomic recovery heatmap & performance chef recipes

3. **Analytics (`analytics.html`)** — 12 sections:
   * Interactive Chart.js telemetry playground (switch metrics between Strain, HRV, and VO2 Max; filter by 7D, 30D, 90D, 1Y)
   * Acute vs Chronic Workload Ratio (ACWR / ATL / CTL / TSB)
   * Goal progress milestones & 12-week supercompensation comparison
   * Client access control matrix
   * Transparent pricing with Monthly / Yearly toggle (20% annual savings)
   * Granular feature comparison matrix & billing FAQ

4. **Dashboard (`dashboard.html`)** — Complete client-side SaaS command center:
   * **Overview Tab**: Live KPI cards, strain vs output Chart.js line graph, morning readiness dial gauge, quick log shortcuts.
   * **Workouts Tab**: Tabular log with real-time category filtering (Running, Strength, Cycling, Swimming, HIIT, Recovery), live search, delete entries, and "+ Log Workout" modal.
   * **Nutrition Tab**: Daily macro targets, macro breakdown donut chart, today's logged meals list with delete actions, "+ Log Food" modal.
   * **Recovery Tab**: Sleep staging metrics, 14-day HRV trend graph vs resting heart rate, recovery state classification.
   * **Reports & Export Tab**:
     - **Instant CSV Download**: Client-side RFC 4180 CSV file generation (`Blob` + `URL.createObjectURL`).
     - **Certified PDF Report**: Formatted printable clinical summary report with `@media print` styling.
     - **Direct Print**: Print-ready command center view.
   * **Clients & Roster Tab**: Coach/Admin roster with RBAC permission toggling (`Full Control`, `Read / Write`, `View Only`), revoke actions, and invite client modal.
   * **Settings Tab**: Athlete profile data, demo account switcher, and "Reset Demo Data" factory reset button.

### Auxiliary Pages
* **Login / Signup (`login.html`)** — Split motivational visual with instant 1-click evaluation buttons and forgot password modal.
* **Contact Us (`contact.html`)** — Global lab headquarters, inquiry form with simulated client-side submission and toast feedback.
* **Privacy Policy (`privacy-policy.html`)** — Biometric data governance, GDPR/HIPAA standards, and zero-sale data pledge.

## 🛠 Tech Stack Summary

* **Structure**: HTML5 (Semantic elements, strict heading hierarchy, ARIA attributes)
* **Styling**: Vanilla CSS3 (Custom design system via CSS variables, BEM methodology optional, dark theme)
* **Logic**: Vanilla JavaScript (ES6+, modular architecture, client-side `localStorage` data store, zero console logs)
* **Visualizations**: Native HTML5 Canvas charting engine (Zero external library dependencies)
* **Assets**: Organized under `assets/` (`assets/css/`, `assets/js/`, `assets/images/`)
* **Graphics**: 100% Local vector SVGs (Zero external image dependencies or hotlinks)
* **SEO**: OpenGraph, Twitter Cards, Canonical tags, Schema.org JSON-LD Structured Data, `robots.txt`, and `sitemap.xml`

---

## 📁 Directory Structure

```
Fitness Tracker & Performance Analytics/
├── assets/
│   ├── css/
│   │   ├── components.css       (and components.min.css)
│   │   ├── dashboard.css        (and dashboard.min.css)
│   │   └── main.css             (and main.min.css)
│   ├── js/
│   │   ├── auth.js              (and auth.min.js)
│   │   ├── charts.js            (and charts.min.js - Native Canvas Engine)
│   │   ├── dashboard.js         (and dashboard.min.js)
│   │   ├── main.js              (and main.min.js)
│   │   ├── store.js             (and store.min.js - Client Storage & Seeding)
│   │   └── tilt.js              (and tilt.min.js)
│   └── images/
│       ├── analytics/
│       ├── avatars/
│       ├── hero/
│       ├── nutrition/
│       ├── recovery/
│       ├── favicon.png
│       └── logo.png
├── index.html                   (Home Overview)
├── nutrition-recovery.html      (Nutrition & Recovery)
├── analytics.html               (Performance Analytics)
├── dashboard.html               (Client SaaS Command Center)
├── login.html                   (Auth & 1-Click Evaluation)
├── contact.html                 (Contact & Support)
├── privacy-policy.html          (Biometric Privacy Policy)
├── robots.txt
├── sitemap.xml
├── package.json
└── README.md
```
