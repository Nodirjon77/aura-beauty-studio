# AURA — Premium Beauty Studio Landing Page

A fully responsive, production-ready landing page built for a fictional premium beauty studio brand. Created as a freelance portfolio showcase piece — demonstrates clean semantic markup, accessible UI patterns, and a reusable design system suitable for real beauty salon clients.

**[Live Demo →](#)** <!-- GitHub Pages / Netlify havolasini shu yerga qo'shing -->

## Tech Stack

- **HTML5** — semantic markup, no framework
- **CSS3** — Vanilla CSS, mobile-first, Flexbox & Grid, BEM methodology
- **JavaScript** — Vanilla JS (ES6+), no libraries or dependencies

No frameworks, no build tools, no dependencies — pure, lightweight, fast-loading code.

## Features

- 🎨 Custom design system (CSS custom properties) — colors, typography, and spacing tokens centralized in `variables.css`
- 📱 Mobile-first responsive design — tested at 375px / 768px / 1024px breakpoints
- ♿ Accessibility — semantic HTML, ARIA attributes, keyboard navigation (Escape closes mobile menu)
- 🍔 Animated burger menu with smooth transitions
- 🖼️ Portfolio gallery with category filtering (Hair / Skin / Nails / Makeup)
- ✅ Client-side booking form validation with error and success states
- ⚡ Performance-conscious: lazy-loaded images, minimal HTTP requests

## Project Structure

```
aura/
├── index.html
├── css/
│   ├── reset.css        # Minimal modern CSS reset
│   ├── variables.css    # Design tokens (colors, typography, spacing)
│   └── style.css        # Component styles, mobile-first
├── js/
│   └── main.js           # Burger menu, portfolio filter, form validation
└── assets/
    └── images/
```

## Sections

1. **Hero** — Full-screen intro with CTA
2. **Philosophy** — Core service principles
3. **Services** — Hair, Skincare & Facials, Nails, Makeup
4. **Portfolio** — Filterable work gallery
5. **Process** — 4-step client journey
6. **Testimonials** — Client reviews
7. **Contact** — Booking form + location/hours

## Running Locally

No build step required — simply open `index.html` in a browser, or serve it with any static server:

```bash
# Python
python3 -m http.server 5500

# Node (with npx)
npx serve .
```

## Design System

| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#FBF6F3` | Background |
| `--color-dark` | `#241E1B` | Text, dark sections |
| `--color-accent` | `#E3B9B2` | Soft pink accent |
| `--color-gold` | `#AD8656` | CTAs, dividers |
| `--color-text-muted` | `#8C8177` | Secondary text |

Typography: **Cormorant Garamond** (headings) + **Inter** (body)

## License

This is a portfolio/demo project. Design and code are free to reference; stock imagery used is subject to its respective source licenses (Unsplash/Pexels).

---

Built by Nodir JON — https://nodirjon77.github.io/portfolio/
