
# Mulenga Corps Website

**Course:** Interactive Web Development (IWD)
**Student Name:** Christopher Mulenga
**SIN:** 2510521860
**Institution:** Information and Communications University (ICU)
**Project:** Mulenga Corps Website
**Inspiration:** Zambia Library, Cultural and Skills Centre for the Visually Impaired (ZLCSCVI), Chilenje, Lusaka

---

## A Note to the Marker

I have written this README in the first person so you can follow exactly what I built, why I built it that way, and where to find each piece in the code. Every section names the file to open and the block to look for.

If you have limited time, these four sections will give you the clearest picture:

| If you want to see…                      | Read       |
| ----------------------------------------- | ---------- |
| What the project is and who it serves     | Section 1  |
| The design system (colour, type, spacing) | Section 5  |
| The statistics and milestones treatment   | Section 9  |
| The navigation and header design          | Section 10 |

The code comments in `style.css` and `main.js` follow the same numbering as this document, so you can move between the two without searching.

---

## 1. Project Overview

I built the **Mulenga Corps Website** as the practical project for my **Interactive Web Development (IWD)** course at the Information and Communications University (ICU).

I used **HTML5, CSS3 and Vanilla JavaScript** — no frameworks, no build tools — to produce a responsive, accessible and interactive multi-page institutional website.

I took the organisation's role as my subject from the **Zambia Library, Cultural and Skills Centre for the Visually Impaired (ZLCSCVI)** in Chilenje, Lusaka. I chose this subject deliberately, because it forced me to treat accessibility as a design requirement rather than an afterthought. Every decision in the stylesheet, from contrast ratios to reduced-motion support, comes back to that choice.

---

## 2. What I Set Out to Demonstrate

I wanted this project to show that I can:

* Write semantic HTML5 rather than generic containers.
* Apply CSS3 for visual design and responsive layout.
* Use JavaScript to add interaction without leaning on libraries.
* Build layouts that hold up on desktop, tablet and mobile.
* Apply web accessibility principles in practice, not just in theory.
* Provide keyboard-accessible navigation and controls.
* Validate a contact form on the client side.
* Integrate a third-party form service into a static site.
* Organise a multi-page website into a sensible file structure.
* Use Git and GitHub for version control and hosting.

---

## 3. Technologies I Used

| Technology / Service                | Why I used it                                       |
| ----------------------------------- | --------------------------------------------------- |
| **HTML5**                     | Structure and semantic markup                       |
| **CSS3**                      | Styling, layout, colour, typography, responsiveness |
| **Vanilla JavaScript (ES6+)** | Interactivity and dynamic behaviour                 |
| **CSS Grid**                  | Multi-column responsive layouts                     |
| **Flexbox**                   | Navigation and component alignment                  |
| **Intersection Observer API** | Scroll-triggered reveals and lazy image fades       |
| **Fetch API**                 | Async form submission without a page reload         |
| **Formspree**                 | Server-side form handling for a static site         |
| **Google Fonts**              | EB Garamond, Roboto and Roboto Mono                 |
| **Git**                       | Version control during development                  |
| **GitHub**                    | Repository hosting and publishing                   |
| **Adobe Illustrator**         | Logo and brand identity artwork (see Section 19)    |

---

## 4. Website Structure

I split the site across six pages so each one has a clear job.

### Home — `index.html`

The homepage is the entry point. It contains the header and navigation, the hero, the organisational introduction, the **Statistics** band, department previews, featured work, calls to action, and the footer.

### About Us — `about.html`

History, background, mission, vision, objectives, **Milestones**, leadership, governance and partnership opportunities. I identified **Mr. Frederick C. Lungu** as Executive Director within the organisational content.

### Services — `services.html`

The four operational departments:

* Braille Transcription and Library Services
* Community Radio and Public Broadcasting
* Rehabilitation and Vocational Skills
* Business Development and Community Outreach

### Articles — `articles.html`

Three long-form pieces:

1. *The Enduring Power of Braille Literacy*
2. *Broadcasting Inclusion*
3. *From Training to Independence*

### Portfolio — `portfolio.html`

A visual gallery of selected work with an interactive lightbox.

### Contact — `contact.html`

Address, telephone, email, WhatsApp links, a validated contact form, and volunteer, donation and partnership information.

**Physical Address:** Plot No. 4225, Chibululu Road, Chilenje, Lusaka, Zambia.

---

## 5. CSS Design System

The stylesheet lives at:

```text
assets/css/style.css
```

Everything at the top of the file is my **design-token block** inside `:root`. I put it there so a colour or a size can be changed once and ripple through the whole site. Please read that block first — it is the map to everything else.

### 5.1 Colour Tokens

I aligned the CSS to the logo artwork (see Section 19), which pairs a deep blue with a warm brown.

| Token            | Hex Value   | What I use it for                           |
| ---------------- | ----------- | ------------------------------------------- |
| `--blue`       | `#0A3D62` | Primary brand colour, navigation, headings  |
| `--blue-dark`  | `#072B46` | Dark backgrounds, hero, footer, page heroes |
| `--blue-tint`  | `#E7EEF3` | Soft tinted panels and icon discs           |
| `--brown`      | `#8B5A2B` | Secondary accent, hover states, focus rings |
| `--brown-dark` | `#5C4033` | Deep brown for pressed and hover accents    |
| `--brown-tint` | `#F1E7DB` | Warm tinted panels                          |
| `--off-white`  | `#F7F4EE` | Page background                             |
| `--white`      | `#FFFFFF` | Cards, statistics band, milestones          |
| `--grey`       | `#DDD7CC` | Borders and dividers                        |
| `--text`       | `#211C17` | Body text                                   |
| `--text-soft`  | `#55524C` | Paragraph text                              |

The blue and brown pairing runs through the entire site: blue carries the institutional weight, brown carries the warmth and the interactive cues.

### 5.2 Typography

I used three faces, each with a specific role:

| Face                  | Role                                                   |
| --------------------- | ------------------------------------------------------ |
| **EB Garamond** | Display headings —`h1`, `h2`, `h3`, `h4`      |
| **Roboto**      | All body copy, navigation, controls and interface text |
| **Roboto Mono** | Numeric data, technical identifiers and code snippets  |

EB Garamond gives the headings an institutional, editorial character that suits a library and cultural organisation. Roboto keeps the body text neutral and highly legible. Roboto Mono is reserved for places where a monospace style genuinely improves clarity — the statistics and milestone numerals, for example.

The type scale is built on a 16px root and a **1.25 Major Third ratio**:

| Role                    | Size     | Line-height | Weight   |
| ----------------------- | -------- | ----------- | -------- |
| Small labels / captions | 12–14px | 1.4         | 400–500 |
| Body                    | 16px     | 1.6         | 400      |
| Lead / intro            | 20px     | 1.5         | 400      |
| H4                      | 20px     | 1.35        | 600      |
| H3                      | 25px     | 1.3         | 600      |
| H2                      | 31px     | 1.22        | 700      |
| H1                      | 39px     | 1.15        | 700      |
| Hero headline           | 48–72px | 1.1         | 700      |

I used `clamp()` throughout so headings and spacing scale smoothly between mobile and desktop rather than snapping between fixed sizes. Heading letter-spacing is slightly tightened because EB Garamond benefits from a touch of negative tracking at display sizes. Body paragraphs stay within a 45–75 character measure for comfortable reading.

Weights are restrained: **400** for body copy, **500** for emphasis and controls, **600–700** for headings.

### 5.3 Spacing and Layout Tokens

```text
--radius:              6px
--container:           1200px
--header-h:            56px desktop / 52px mobile
--space-section:       72px desktop / 56px mobile
--space-section-tight: 48px desktop / 40px mobile
```

### 5.4 Breakpoints

I built responsiveness in three layers so the layout never depends on a single trick:

1. **Fluid typography** — `clamp()` on every heading.
2. **Fluid layout** — CSS Grid for repeating card grids, Flexbox for navigation and component alignment.
3. **Explicit breakpoints** — media queries at `1024px`, `900px` and `760px`.

| Breakpoint | What changes                                             |
| ---------- | -------------------------------------------------------- |
| `1024px` | 4-column grids collapse to 2; footer goes 2-column       |
| `900px`  | 3-column grids collapse to 2; contact and grid-2 stack   |
| `760px`  | Mobile nav drawer activates; all grids stack to 1 column |

When reviewing the site, I suggest resizing slowly from roughly 1440px down to 360px. The statistics and milestones bands (Section 9) and the header (Section 10) are the two places where the responsive behaviour is most visible.

---

## 6. Image System

I set out one consistent image treatment per component type, so no grid ever looks mismatched.

| Component type                   | Ratio | Fit         | Notes                                               |
| -------------------------------- | ----- | ----------- | --------------------------------------------------- |
| Hero imagery                     | 16:9  | `cover`   | `object-position` tuned so subjects stay in frame |
| Repeated service / feature cards | 4:3   | `cover`   | One crop, one corner radius across every grid       |
| Portfolio thumbnails             | 3:2   | `cover`   | Shared radius, spacing and hover treatment          |
| Standalone feature images        | Free  | `cover`   | Allowed a larger size when the layout supports it   |
| Diagrams, logos, screenshots     | Free  | `contain` | Never cropped — the whole visual must stay visible |

Lazy-loaded images fade in through a `.loaded` class toggled by JavaScript, so long pages do not flash while assets arrive. Informative images carry descriptive `alt` text; purely decorative ones carry an empty `alt=""` so screen readers skip them.

---

## 7. Accessibility

Because the subject of the site serves people with visual impairments, I treated accessibility as non-negotiable. Here is what I implemented:

* **Semantic HTML** — real `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` and `<footer>` elements.
* **Skip-to-content link** — the first focusable element on every page.
* **Visible focus indicators** — a `:focus-visible` rule with a `#8B5A2B` outline and a 2px offset, applied to every interactive element.
* **Keyboard navigation** — the mobile menu, the lightbox and the back-to-top button are all fully keyboard-operable. The lightbox closes on `Escape` and moves between images with `ArrowLeft` / `ArrowRight`.
* **Reduced-motion support** — I honoured `@media (prefers-reduced-motion: reduce)` globally, collapsing animation durations rather than hiding content.
* **Descriptive alt text** on every informative image.
* **Clear heading hierarchy** — one `<h1>` per page, no skipped levels.
* **Braille motif** — the design language uses braille-cell dividers and badges as a nod to the subject matter, all marked `aria-hidden="true"` so they never confuse a screen reader.
* **Announced statistics** — the static stat values carry `aria-label` attributes so they are read with their full context, such as "Year Established: 1993", rather than as bare numbers.

---

## 8. JavaScript Functionality

The main script is at:

```text
assets/js/main.js
```

I wrote it in **Vanilla JavaScript (ES6+)** with no framework. Each feature is isolated in its own block so one failure never brings down the rest.

### 8.1 Page-Load Animation

A short fade is applied to `body` once the DOM is ready, giving the site a calm arrival rather than a hard flash.

### 8.2 Mobile Navigation

The hamburger toggles an `.open` class on the nav drawer. When open, body scroll is locked, the hamburger becomes an X, and the drawer closes on outside click or `Escape`.

### 8.3 Active Navigation

The script reads `window.location.pathname`, matches it to the current page, and applies `.active` to the corresponding nav link. This means the navigation markup is written once and shared across all six pages.

### 8.4 Smooth Scrolling

Internal anchor links scroll smoothly to their target while offsetting for the fixed header, so headings never hide underneath the navigation.

### 8.5 Scroll Reveal

Elements marked `.reveal` fade and lift in when they enter the viewport, using the **Intersection Observer API**. Each item un-observes itself after firing, so the animation runs once.

### 8.6 Header Scroll State

The header listens for scroll events and toggles a `.scrolled` class. All of the visual transition is handled in CSS, so the appearance can be tuned without touching JavaScript.

### 8.7 Image Lightbox

Images marked `[data-lightbox]` open in a lightbox that supports previous and next navigation, arrow keys, `Escape` to close, and focus trapping.

### 8.8 Contact Form Validation

Before submission, the script validates **name, email, subject and message**. Field-level errors appear inline, and a form-level success or error banner appears after submission. The form posts to Formspree through the Fetch API and shows the result without a page reload.

---

## 9. Statistics and Milestones — Assistive-Tech Telemetry Cards

This is the section I would most like you to look at, because it carries the most deliberate design thinking.

### 9.1 What the Statistics Band Displays

The homepage statistics band, headed **"Three Decades of Impact, By the Numbers"**, presents four figures:

| Value | Meaning          | Telemetry tag |
| ----- | ---------------- | ------------- |
| 1,993 | Year Established | `EST.1993`  |
| 8     | Departments      | `DIV.08`    |
| 110+  | Staff Positions  | `TEAM.110+` |
| 6     | Compounds Served | `REACH.06`  |

### 9.2 Why the Values Are Static

I deliberately chose **static values** rather than an animated count-up. The count-up is the most common statistic animation on the web, and it reads as a template rather than as a considered choice. More importantly, a number that animates is a number that cannot be read at a glance — and for a site serving people with visual impairments, instant legibility matters more than motion.

The values are written directly into the markup with `aria-label` attributes so screen readers announce them with full context.

### 9.3 How the Cards Are Built

Each card is designed to read as a piece of **assistive-technology telemetry equipment**:

* **Outer section background** — a clean `#ffffff` with a subtle top and bottom border, so the band feels like a calibrated instrument panel rather than a decorated section.
* **Status header** — a telemetry tag (`EST.1993`, `DIV.08`, `TEAM.110+`, `REACH.06`) in Roboto Mono, paired with a small braille tactile badge and a green status indicator dot.
* **Numerals** — rendered in **Roboto Mono with `font-variant-numeric: tabular-nums`**, so digits align in a fixed grid the way they would on a real measuring device.
* **Card geometry** — clean bordered cards with a subtle top accent bar that sits at `var(--blue)` and shifts to `var(--brown)` on hover, plus a refined shadow on elevation.
* **Braille badge** — decorative only, marked `aria-hidden="true"`, echoing the organisation's braille and literacy work.

### 9.4 The Milestones Band

The Milestones section on `about.html` uses the **same card pattern** — the same geometry, the same telemetry header, the same monospace numerals and the same top accent bar. I did this so the two bands read as the same instrument, which reinforces the institutional identity rather than fragmenting it.

### 9.5 Where to Look

* Statistics markup — `index.html`, the section headed "Three Decades of Impact, By the Numbers"
* Milestones markup — `about.html`, the Milestones block
* Styling — `.stat-card`, `.stat-num`, `.stat-label` and their milestone counterparts in `style.css`

---

## 10. Navigation and Header

The header is a slim, frosted-glass bar designed to feel modern and trustworthy without being decorative.

### 10.1 Dimensions and Type

| Element          | Value                      |
| ---------------- | -------------------------- |
| Header height    | 56px desktop / 52px mobile |
| Logo height      | 36px                       |
| Nav link size    | 0.88rem                    |
| Nav link gap     | 22px                       |
| Nav link padding | 4px vertical               |

### 10.2 The Glass Effect

At the top of the page the header sits at `rgba(255,255,255,0.12)` with:

```css
backdrop-filter: blur(18px) saturate(1.6);
border-bottom: 1px solid rgba(255,255,255,0.25);
```

This lets the hero imagery show through while keeping the navigation legible.

### 10.3 The Scrolled State

Once the visitor scrolls, a `.scrolled` class transitions the header to `rgba(255,255,255,0.72)` with a stronger shadow. This keeps text readable when dense content slides underneath.

The transition between the two states is entirely CSS-driven. JavaScript only toggles the class — it never sets inline styles — so the appearance can be adjusted from the stylesheet alone.

### 10.4 Mobile Drawer

Below 760px the navigation becomes a slide-down drawer using the same glass treatment. Links stack vertically, the active link picks up a brown left border and a warm tint, and the hamburger animates into a close icon.

### 10.5 Where to Look

`.site-header` and `.site-header.scrolled` in `style.css`; the scroll handler and hamburger logic in `main.js`.

---

## 11. Contact Form and Formspree Integration

I integrated **Formspree** so the static site can receive form submissions without a server of its own. This matters because GitHub Pages does not provide server-side form processing.

Here is the flow I built:

```text
Visitor
   ↓
Contact Form (contact.html)
   ↓
Client-side JS validation (main.js)
   ↓
Formspree endpoint
   ↓
Submission received and routed
   ↓
Configured recipient (Formspree dashboard)
```

A simplified version of the form tag:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

The live endpoint remains in the HTML source.

---

## 12. Interactive Components Checklist

Here is every interactive piece I built, so each one can be verified:

- [ ] Mobile navigation drawer (open, close, keyboard)
- [ ] Active navigation indicator
- [ ] Smooth anchor scrolling with header offset
- [ ] Scroll-reveal animations
- [ ] Glassmorphism header with scroll state
- [ ] Image lightbox (arrows, escape, focus trap)
- [ ] WhatsApp floating button with pulse
- [ ] Back-to-top button
- [ ] Contact form validation and submission
- [ ] Responsive service, department and portfolio grids
- [ ] Static telemetry-styled Statistics and Milestones cards
- [ ] Lazy image fade-in

---

## 13. File Structure

```text
Mulenga-Corps/
│
├── index.html
├── about.html
├── services.html
├── articles.html
├── portfolio.html
├── contact.html
│
├── assets/
│   │
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│       └── main.js
│   
│── images/
│
└── README.md
```

I separated CSS, JavaScript and images so each concern lives in one place. To change a colour, open `style.css`. To change behaviour, open `main.js`. Nothing is hidden elsewhere.

---

## 14. How the Three Technologies Fit Together

```text
HTML
  │  structure and content
  ↓
CSS
  │  appearance and responsive layout
  ↓
JavaScript
  │  interaction and dynamic behaviour
  ↓
Interactive Web Application
```

I tried to keep each layer honest: HTML for meaning, CSS for presentation, JavaScript only for behaviour that CSS genuinely cannot handle.

---

## 15. Academic Relevance

Every concept below is demonstrated in the project, so each one can be traced directly to the code:

* Semantic HTML5 structure
* CSS selectors, specificity and cascade
* CSS custom properties (design tokens)
* Typography systems and fluid type scales
* Box model, Flexbox and CSS Grid
* Responsive design and media queries
* JavaScript events and DOM manipulation
* Intersection Observer API
* Fetch API
* Client-side form validation
* Third-party service integration
* Accessibility — focus management, semantics, reduced motion
* Visual identity and brand consistency
* Version control with Git

---

## 16. Development Approach

I worked component-first. I designed the navigation, footer, buttons, cards and grid systems once, then reused them across every page. Tokens in `:root` drive colour, type, spacing and radius, which means a single change propagates everywhere.

The same principle applies to the statistics and milestones bands — I defined one shared card pattern so both read as the same instrument.

---

## 17. External Services

| Service                | Purpose                          |
| ---------------------- | -------------------------------- |
| **Formspree**    | Contact form submissions         |
| **Google Fonts** | EB Garamond, Roboto, Roboto Mono |

The site itself remains pure HTML, CSS and Vanilla JavaScript.

---

## 18. Project Author

**Christopher Mulenga**
SIN: 2510521860
Interactive Web Development (IWD)
Information and Communications University (ICU)

---

## 19. Brand Identity and Logo Design

I designed the Mulenga Corps logo and brand identity in **Adobe Illustrator**. The editable master artwork contains multiple variations for different backgrounds, and I keep it as the source design for all exports.

The identity carries the mark, the wordmark and the tagline:

> **MULENGA CORPS**
> **Library • Culture • Skills**

### 19.1 Logo Variations

The Illustrator file contains:

* Primary coloured logo
* Blue variation
* Brown variation
* Black monochrome
* Light / off-white variation
* Full horizontal lockup with name and tagline

### 19.2 Brand Colours

| Colour         | Hex Value   | Where it lives                          |
| -------------- | ----------- | --------------------------------------- |
| Logo Blue      | `#0C3D62` | Primary wordmark colour                 |
| Logo Brown     | `#8B5A2B` | Secondary accent                        |
| Logo Off-White | `#DDD7CC` | Light variation and supporting elements |
| Black          | `#000000` | Monochrome variation                    |
| White          | `#FFFFFF` | Reversed logo on dark backgrounds       |

### 19.3 Website Colour Relationship

The website's `--blue` token is `#0A3D62` — very close to the logo's `#0C3D62`, but tuned for on-screen contrast against the off-white page background. I documented the two separately so the logo artwork can retain its own identity without being redrawn for the web.

### 19.4 Design Software

The logo was built in **Adobe Illustrator** as vector artwork, then exported to SVG for web use. Vector means the mark scales from a favicon to a poster without losing edge definition.

### 19.5 File Format

The project ships the logo as **SVG**, with the Illustrator master retained as the editable source. Vector is the right choice for website branding, favicons, business documents, social media, posters and large-format print.

### 19.6 Design Considerations

I developed the logo and the website interface side by side so the two would feel like one identity. The mark reflects the organisation's focus on:

* Library and information access
* Braille and accessible literacy
* Culture
* Skills development
* Visual accessibility
* Community participation
* Institutional service

---

## 20. Assumptions I Made

* I treated the logo colours as the brand authority and aligned the website tokens to them — `#0A3D62` for the interface blue and `#8B5A2B` for brown.
* I assumed the site would be reviewed at **360px**, **768px**, **1024px** and **1440px**. I checked all four widths before finalising, and corrected any overflow, image crop or heading hierarchy issues I found.
* I assumed the marker would want the design rationale documented in the README, so I explained the reasoning behind the statistics treatment and the header rather than only describing what they look like.
* I kept all existing content, navigation and functionality intact, and treated the brand identity as fixed unless a change was necessary for a coherent design.

---

## 21. Conclusion

The Mulenga Corps Website demonstrates how semantic HTML5, CSS3, Vanilla JavaScript and a well-chosen external service can combine into a responsive, accessible institutional website.

I paid particular attention to accessibility and responsive design because the site is inspired by the ZLCSCVI and its role in education, rehabilitation, skills development and community service for people with visual impairments. Every interactive element is keyboard-operable, every colour choice clears readable contrast, and every animation respects the user's reduced-motion preference.

**Suggested review path:** open `index.html` first, then `about.html`, then resize slowly down to 760px. That single pass will show you the header treatment, the statistics and milestones design, and the responsive behaviour together.

---

**End of README.**
