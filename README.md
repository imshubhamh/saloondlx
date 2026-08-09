# SaloonDlx — Landing Page

A premium, SaaS-style landing page for a Salon & Barber Appointment Booking
System, built with React, Tailwind CSS, React Router, and Framer Motion.

> This deliverable covers **only the landing page** (homepage), as scoped.
> Booking flow, salon dashboard, and auth are not implemented yet — the
> router is already structured so those pages can be added later without
> restructuring anything.

## Tech Stack

- **React 18** — functional components + hooks only
- **Vite** — dev server & build tooling
- **Tailwind CSS** — utility-first styling, dark mode via `class` strategy
- **React Router v6** — routing, ready for future pages
- **Framer Motion** — scroll reveals, hover interactions, animated accordion
- **lucide-react** — icon set

## Getting Started

```bash
npm install
npm run dev
```

Open the printed local URL (defaults to `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

## Project Structure

```
src/
├── assets/            # (empty — reserved for images/illustrations)
├── components/        # reusable, presentational components
│   ├── Button.jsx
│   ├── Eyebrow.jsx
│   ├── SectionTitle.jsx
│   ├── FeatureCard.jsx
│   ├── GradientBackground.jsx
│   ├── Logo.jsx
│   ├── QueueWidget.jsx      # signature "live queue" animated widget
│   ├── FloatingChip.jsx
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Stats.jsx
│   ├── WhyUs.jsx
│   ├── Timeline.jsx         # "How It Works"
│   ├── Features.jsx
│   ├── DashboardPreview.jsx
│   ├── Benefits.jsx         # BarberBenefits + CustomerBenefits
│   ├── Testimonials.jsx
│   ├── Pricing.jsx
│   ├── FAQ.jsx
│   ├── CTA.jsx
│   └── Footer.jsx
├── constants/          # nav links, theme/site constants
├── data/                # static content for each section (easy to edit/replace with an API later)
├── hooks/               # useReveal, useCountUp, useDarkMode
├── layouts/
│   └── MainLayout.jsx    # Navbar + <Outlet /> + Footer
├── pages/
│   ├── Home.jsx          # composes all landing-page sections
│   └── NotFound.jsx
├── routes/
│   └── router.jsx        # React Router route table
├── App.jsx
├── index.css             # Tailwind directives + CSS variables + global animation classes
└── main.jsx               # app entry, mounts <BrowserRouter>
```

## Design System

| Token       | Value      |
|-------------|-----------|
| Primary     | `#2563EB` |
| Secondary   | `#0F172A` |
| Accent      | `#38BDF8` |
| Display font | Space Grotesk |
| Body font    | Inter |

Colors are exposed as CSS custom properties in `src/index.css`
(`--c-primary`, `--c-secondary`, `--c-accent`, `--c-bg`, `--c-surface`,
`--c-ink`, `--c-muted`, `--c-border`) and swapped automatically when the
`dark` class is applied to `<html>`, so every component that references
`bg-[--c-primary]`, `text-[--c-ink]`, etc. stays theme-aware without any
extra logic. Dark mode preference is persisted to `localStorage` and
respects the OS preference on first load.

## Hero Section — Illustrated "SaloonDlx Radio"

The homepage hero is now a full-bleed illustrated scene (original,
hand-coded SVG — see `src/components/HeroIllustration.jsx`) in warm
yellow/amber/orange tones: sky gradient, rooftop skyline, palm trees, a
barber-pole-fronted shop with an awning, and small cartoon figures (a
barber mid-cut, a waiting customer, a street vendor). No external image
file — it's inline vector, so it scales crisply and ships with zero extra
assets.

Overlaid on it:

- **Top bar** — a live clock (`src/hooks/useLiveClock.js`), the simulated
  "X online" listener badge, and Spotify / YT Music links, same as the
  reference layout.
- **Center wordmark** — "सैलून डीलक्स" set in **Baloo 2**, the Devanagari
  member of the same font family used for the reference site's display
  type (bold, rounded, high-contrast). Registered as `font-hindi` in
  `tailwind.config.js`.
- **Booking CTA** — tagline + "Book Appointment" / "Explore Salons"
  buttons, kept front and center since this is still a booking product,
  not just a radio microsite.
- **Bottom floating pill** — `src/components/RadioBar.jsx`, a horizontal
  "now playing" bar (album art, title/artist, prev/play/next, progress +
  `mm:ss / mm:ss`) pinned to the bottom of the hero, matching the
  reference's floating player.

## Music / Radio — in the Hero, and at `/music`

A `saloon.wtf`-style "shop radio" experience: a live-feeling "X online"
counter, Spotify / YT Music links, and an always-on player. It now lives
**directly in the homepage hero** (right column, warm red/yellow "on air"
card) and again as a full page at `/music` with a browsable queue.

Unlike a typical demo that only plays 30-second previews, this plays
**complete songs**, using the **YouTube IFrame Player API** (free, no key,
no OAuth):

- `src/data/oldSongs.js` — a curated queue of 8 golden-era Bollywood
  classics (Lata Mangeshkar, Kishore Kumar, Mohammed Rafi, Mukesh, Manna
  Dey), each pinned to a verified, currently-live YouTube video ID so
  playback is full-length, not a clip.
- `src/hooks/useYouTubePlayer.js` — loads the YouTube IFrame API once,
  creates a single hidden player instance, and exposes
  `play/pause/toggle/seek/loadVideo` plus live `currentTime`/`duration`.
  Autoplay is intentionally off until the person taps play once (browsers
  block unmuted autoplay anyway); after that first tap, next/prev/track-end
  continue playing automatically, just like a radio.
- `src/components/RadioPlayer.jsx` — the actual UI: album art (pulled from
  YouTube's thumbnail CDN for the same video), title/artist/movie/year,
  seek bar with live time, play/pause/next/prev, mute.
- `src/components/RadioCard.jsx` — the "on air" panel used in the hero:
  live listener badge, Spotify/YT Music links, the player, and a link to
  the full `/music` page.
- `src/components/RadioQueue.jsx` — the "Up Next" list on `/music` for
  jumping to any track directly.
- `src/components/GradientBackground.jsx` (`variant="radioWarm"`) — the
  red/yellow radial-gradient + concentric sunburst background behind the
  player, kept as a lightweight inline SVG/CSS effect (no external image
  file, no licensing concerns, renders instantly).
- `src/hooks/useLiveListeners.js` — simulates the fluctuating "online"
  count from the reference site (presentational only — there's no real
  presence server behind it).

**Why YouTube instead of a preview API:** free audio APIs (iTunes, Deezer)
only return ~30-second clips — that's a licensing limitation, not a demo
shortcut. Embedding via YouTube's official IFrame Player plays the actual
full song while staying within YouTube's normal embedding terms (no
downloading or re-hosting of audio). The "Spotify" / "YT Music" links at
the top still point to full playlists for people who want to keep
listening after they leave the site.

## Signature Element

The **Live Queue widget** (`components/QueueWidget.jsx`) is the visual
thesis of the page: an animated counter that ticks `#3 → #2 → #1 → You're
up`, making the core promise — "you stop waiting the moment you book" —
something you can watch happen, rather than just read in a headline. It
appears in the hero and again in the dashboard preview.

## Extending the Project

- Add new routes in `src/routes/router.jsx` inside the `<Route element={<MainLayout />}>` block.
- Add new static content by dropping a file in `src/data/` and importing it where needed.
- Real data (salons, barbers, slots) can replace the `src/data/*.js` files with API calls without touching component code, since components only consume the shape of that data.

## Accessibility & Quality Notes

- Semantic HTML landmarks (`header`, `main`, `nav`, `footer`)
- Visible focus states on interactive elements
- `prefers-reduced-motion` respected globally (see `index.css`)
- Fully responsive from small mobile widths up
- No inline styles; Tailwind utility classes throughout
