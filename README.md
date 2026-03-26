<<<<<<< HEAD
# portfolio
Personal portfolio website built using React, Tailwind CSS, and Vite to showcase my projects, skills, and experience.
=======
# Ah Maung Oo — Personal Portfolio

A dark & techy personal portfolio website built with **React**, **Tailwind CSS**, and **Vite** — deployed on **Vercel**.

🔗 **Live Site:** https://portfolio-fe0m6pfc6-ahmaungoos-projects.vercel.app?_vercel_share=LkBjGG5moNkCeiK9beMxkaat0goOxEnX

---

## 🖥️ Preview

> Dark terminal-inspired aesthetic with typewriter animations, scroll-reveal effects, and a monospace design language.

---

## ✨ Features

- **Typewriter hero** — animated role cycling on page load
- **Smooth scroll navigation** — navbar with active link highlighting
- **Scroll-reveal animations** — sections fade in as you scroll
- **Projects showcase** — 5 real projects with RESEARCH & PATENT badges
- **Skills grid** — categorized tech stack with hover effects
- **Education timeline** — degrees and certifications
- **CV download** — one-click PDF download from navbar, hero, and contact section
- **Contact section** — links to Email, LinkedIn, and GitHub
- **Fully responsive** — works on mobile, tablet, and desktop
- **Vercel-ready** — includes `vercel.json` for correct PDF content-type headers

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Styling | Tailwind CSS v3 |
| Build Tool | Vite 5 |
| Fonts | JetBrains Mono + IBM Plex Sans |
| Deployment | Vercel |

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── cv/
│       └── Ah_Maung_Oo_CV.pdf     # Place your CV here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── utils/
│   │   └── downloadCV.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── vercel.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm v9+

### Installation

```bash
# Clone the repository
git clone https://github.com/AndrewMaung/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output goes to the `/dist` folder.

---

## ☁️ Deployment

This project is deployed on **Vercel**. Every push to `main` triggers an automatic deployment.

### Deploy your own

1. Fork this repository
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Vercel auto-detects Vite — no config needed
4. Click **Deploy**

### CV Download Setup

Place your CV PDF at:
```
public/cv/Ah_Maung_Oo_CV.pdf
```
The `vercel.json` ensures it is served with the correct `Content-Type: application/pdf` header.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
>>>>>>> 101a125 (readme)
