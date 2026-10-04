<div align="center">

# ✦ Aniket Padyal ✦

### Frontend Developer · Creative Web · Motion-Driven Interfaces

*A cinematic, scroll-driven portfolio where every section is part of the story.*

<br />

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-0F172A?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8)
![GSAP](https://img.shields.io/badge/GSAP-0AE448?style=for-the-badge&logo=greensock&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Status](https://img.shields.io/badge/status-in_progress-orange?style=for-the-badge)

[**🌐 Live Demo**](#) · [**🐛 Report Bug**](https://github.com/aniket-padyal/portfolio/issues) · [**💡 Request Feature**](https://github.com/aniket-padyal/portfolio/issues)

</div>

<br />

---

## 📸 Preview

> Add a screenshot or GIF of your hero animation here. It is the single best thing you can put in this README.

```md
![Portfolio Preview](./public/preview.gif)
```

---

## ✨ Highlights

| | Feature | Details |
|---|---|---|
| 🎬 | **Cinematic hero reveal** | Sticky scroll wrapper with an SVG zoom-through effect, driven by a GSAP timeline |
| 🪪 | **Floating ID-style intro card** | An interactive introduction card that moves with the scroll |
| 📝 | **Word-by-word text reveal** | Hero copy lights up as you scroll |
| 🔁 | **Scroll-linked marquee** | Horizontal text that travels with your scroll |
| 🧈 | **Buttery smooth scrolling** | Lenis smooth scroll synced with GSAP ScrollTrigger |
| 📱 | **Responsive** | Built mobile-first with Tailwind CSS |

---

## 🛠️ Tech Stack

**Frontend**
- [React](https://react.dev/): component-driven UI
- [Tailwind CSS](https://tailwindcss.com/): utility-first styling

**Animation**
- [GSAP](https://gsap.com/) + [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/): timelines and scroll-based motion
- [Lenis](https://lenis.darkroom.engineering/): smooth scrolling

**Tooling**
- Vite, ESLint, Git & GitHub

---

## 🗂️ Page Structure

```
Navbar
 └─ Hero
     ├─ Introduction card  (floating, scroll-aware)
     ├─ HeroText           (word-by-word scroll reveal)
     └─ ScrollMarquee      (horizontal GSAP text)
 └─ What I Have Done
 └─ Expertise
 └─ Projects
 └─ Footer
```

> Some sections are still in progress. See the [roadmap](#-roadmap).

---

## 📁 Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Introduction.jsx
│   │   ├── HeroText.jsx
│   │   ├── ScrollMarquee.jsx
│   │   └── SmoothScroll.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/aniket-padyal/portfolio.git

# 2. Move into the project
cd portfolio

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

Open **http://localhost:5173** in your browser.

### Build for production

```bash
npm run build
npm run preview
```

---

## 🧠 How the Hero Animation Works

1. A **sticky wrapper** pins the hero while the user scrolls through a taller container.
2. **ScrollTrigger** maps scroll progress to the progress of a **GSAP timeline**.
3. An **SVG mask** scales up, zooming the viewer *through* a letter to reveal the next layer.
4. **Lenis** smooths the scroll input so the animation feels fluid, not steppy.

---

## 🗺️ Roadmap

- [x] Navbar
- [x] Introduction card
- [x] HeroText scroll reveal
- [x] ScrollMarquee
- [x] Smooth scroll setup
- [ ] Merge Introduction card into HeroText on scroll
- [ ] What I Have Done section
- [ ] Expertise section
- [ ] Projects showcase
- [ ] Footer and contact
- [ ] Deploy (Vercel / Netlify)

---

## 🤝 Contributing

This is a personal portfolio, but suggestions are welcome. Feel free to open an [issue](https://github.com/aniket-padyal/portfolio/issues) if you spot a bug or have an idea.

---

## 📬 Contact

<div align="center">

**Aniket Padyal** · Mumbai, India

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/aniket-padyal)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](#)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:your-email@example.com)

<br />

*Designed and built with ❤️ and a lot of `gsap.timeline()`*

</div>