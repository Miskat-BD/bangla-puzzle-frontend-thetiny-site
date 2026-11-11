# TheTiny.Site — Frontend Developer Internship Assignment

A modern, responsive, and pixel-perfect SaaS landing page recreation of [thetiny.site](https://thetiny.site/) built for the **Bangla Puzzle Limited** Frontend Developer Internship Assessment.

---

## 📌 Project Overview

This project recreates the homepage of **thetiny.site**, a clean and powerful URL shortening and link management SaaS platform. The implementation strictly adheres to modern frontend design principles, semantic HTML, mobile responsiveness, and clean component-driven architecture.

### 🌟 Key Highlights
- **100% Responsive:** Pixel-perfect layout across Mobile (320px–425px), Tablet (768px), and Desktop (1024px–1440px+).
- **Sticky Glassmorphism Navbar:** Stays pinned at the top on scroll with smooth blur effects and mobile drawer support.
- **Interactive UI Components:** Functional one-click URL copying with feedback, interactive QR code generator modal, and responsive mobile menus.
- **Component-Driven Architecture:** Clean, modular, and reusable components organized inside `src/components/`.
- **Zero Bloat:** Lightweight, hand-crafted SVG icon system with no unnecessary third-party package dependencies.

---

## 🚀 Live Demo & Reference

- **Reference Website:** [https://thetiny.site/](https://thetiny.site/)
- **Built For:** Bangla Puzzle Limited (Frontend Developer Internship Task)

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Language:** JavaScript (ES6+ / JSX)
- **Code Quality:** ESLint

---

## 📂 Project Structure

```text
bangla-puzzle-frontend/
├── public/                     # Static assets and icons
├── src/
│   ├── app/
│   │   ├── favicon.ico         # App favicon
│   │   ├── globals.css         # Global Tailwind CSS directives & scrollbar
│   │   ├── layout.jsx          # Root layout with Navbar and Footer wrappers
│   │   └── page.jsx            # Main homepage assembling all section components
│   │
│   └── components/             # Reusable UI section components
│       ├── Navbar.jsx          # Sticky navigation bar with mobile toggle
│       ├── Hero.jsx            # Hero section with headline and action card
│       ├── Stats.jsx           # 4-column metric statistics banner
│       ├── PopularLinks.jsx    # Popular links with click counts, copy & QR modal
│       ├── PremiumSection.jsx  # 2-column feature highlight & analytics dashboard card
│       ├── Pricing.jsx         # 3-tier pricing cards (Free, Pro, Business)
│       ├── Testimonials.jsx    # User review and rating card
│       ├── WhyChooseSection.jsx# 6-card feature grid with custom icons
│       └── Footer.jsx          # Multi-column footer with contact details & socials
│
├── package.json                # Project dependencies and npm scripts
├── next.config.mjs             # Next.js configuration
├── eslint.config.mjs           # ESLint configuration
└── README.md                   # Project documentation
```

---

## 🧩 Sections Implemented

1. **Navbar (`Navbar.jsx`):**
   - Sticky header (`sticky top-0 z-50`) with backdrop blur.
   - Spaced uppercase logo (`THETINY.SITE`).
   - Desktop navigation links (`Home`, `About`, `Blog`, `Terms`).
   - Action buttons (`Log In`, `Get Started Free`).
   - Fully accessible mobile hamburger menu and collapsible drawer.

2. **Hero Section (`Hero.jsx`):**
   - Top pill badge: `"Trusted by thousands of users"` with trending chart icon.
   - Main headline with dual-tone purple styling (`Shorten Your URL in seconds`).
   - Centered action card featuring a circular lock badge, descriptive text, and dual CTAs (`Login to Make URL`, `Sign Up Free →`).

3. **Stats Banner (`Stats.jsx`):**
   - High-contrast solid purple banner (`bg-[#5b4df3]`).
   - 4 metrics: `100K+ Links Created`, `1M+ Total Clicks`, `180+ Countries`, and `99.9% Uptime`.
   - Responsive grid (2 columns on mobile, 4 columns on desktop).

4. **Most Popular Links (`PopularLinks.jsx`):**
   - Displays real-world shortened URLs and destinations.
   - Live click counter with pointer icon (`428 clicks`, `271 clicks`, etc.).
   - Functional **Copy** button (copies URL to clipboard and triggers a `"Copied!"` confirmation state).
   - Functional **QR** button (opens an interactive SVG QR code preview modal).

5. **Premium Tools Section (`PremiumSection.jsx`):**
   - Left side: `PREMIUM` tag, heading, detailed description, and a 5-point checklist with circular badges.
   - Right side: Realistic `Link Analytics Dashboard` card showing live link metrics and proportional volume bars.

6. **Pricing Plans (`Pricing.jsx`):**
   - 3 distinct tiers: `FREE` ($0/forever), `PRO` ($9/month — featured purple card), and `BUSINESS` ($29/month).
   - Comprehensive feature checklists and call-to-action buttons.

7. **Testimonials (`Testimonials.jsx`):**
   - Verified feedback card with 5 purple stars, review quote, and user credentials.

8. **Why Choose Our Platform (`WhyChooseSection.jsx`):**
   - 6-card grid highlighting platform advantages: `Lightning Fast`, `Detailed Analytics`, `Global CDN`, `QR Codes`, `Secure`, and `Expiration Control`.

9. **Footer (`Footer.jsx`):**
   - Left: Brand statement, social icons (Facebook, LinkedIn, YouTube, WhatsApp), and contact details (`banglapuzzle@gmail.com`, `+880 1880-811048`).
   - Center & Right: `PRODUCT` and `COMPANY` link columns.
   - Bottom bar: Copyright notice attributing **Bangla Puzzle Limited** and quick legal links.

---

## 💻 Getting Started Locally

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (version 18.17+ or 20+ recommended).

### 1. Clone the repository
```bash
git clone <repository-url>
cd bangla-puzzle-frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build for production
```bash
npm run build
```

### 5. Run ESLint check
```bash
npm run lint
```

---

## 📱 Responsive Breakpoints Tested

| Device | Breakpoint Range | Test Status |
|---|---|---|
| **Mobile** | 320px – 425px | ✅ Verified (Fluid layout, responsive nav drawer) |
| **Tablet** | 768px – 1023px | ✅ Verified (Balanced 2-column grids) |
| **Laptop / Desktop** | 1024px – 1440px+ | ✅ Verified (Multi-column grids, max-width containers) |

---

## 📄 Submission Note

This project was built as part of the **Frontend Developer Internship Assignment** for **Bangla Puzzle Limited**. All components, layout structures, and interactions have been authored with clean code and best practices.
