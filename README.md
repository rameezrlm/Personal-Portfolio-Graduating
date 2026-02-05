# Rameez Ali — Developer Portfolio

A high-end, modern developer portfolio built with **React 19**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**. Features dark/light mode, glassmorphism, smooth animations, and a recruiter-friendly layout.

## Tech Stack

- **React 19** — UI
- **JavaScript** — No TypeScript
- **Vite** — Build tool
- **Tailwind CSS** — Styling
- **Framer Motion** — Animations
- **Lucide React** — Icons
- **next-themes style** — Theme context (class + system preference)

## Prerequisites

- **Node.js** 18+ (recommended: 20 LTS)
- **npm** or **yarn** or **pnpm**

## Installation

1. **Clone and enter the project**
   ```bash
   cd "e:\University\Personal Porfolio"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173).

## Environment Setup

This app does not require environment variables for basic run. Optional:

- For a future **contact form backend**, add:
  - `VITE_CONTACT_API_URL` — API endpoint for form submission
- For **GitHub contribution graph** (replace placeholder):
  - Use GitHub API with a token, or a serverless function that fetches contributions.

## Scripts

| Command       | Description                |
|---------------|----------------------------|
| `npm run dev` | Start dev server           |
| `npm run build` | Production build         |
| `npm run preview` | Preview production build |

## Project Structure

```
src/
├── components/     # Reusable UI and sections
│   ├── ui/        # ShadCN-style primitives
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── ProjectCard.jsx
│   ├── Experience.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── ScrollProgress.jsx
│   ├── Loading.jsx
│   └── GitHubGraph.jsx
├── context/       # Theme provider
├── data/          # Projects, skills, experience
├── lib/           # Utils (e.g. cn)
├── App.jsx
├── main.jsx
└── index.css
```

## Deployment (Vercel)

### Option A: Vercel CLI

1. Install Vercel CLI (optional):
   ```bash
   npm i -g vercel
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Deploy:
   ```bash
   vercel
   ```
   Follow prompts and link to your Git repo if desired.

### Option B: Vercel Dashboard (Git integration)

1. Push this repo to **GitHub** / **GitLab** / **Bitbucket**.

2. Go to [vercel.com](https://vercel.com) → **Add New Project** → Import your repository.

3. Configure:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

4. Deploy. Vercel will auto-detect Vite and use the correct settings.

### Post-deploy

- Add your **production URL** to the portfolio (e.g. in Hero, Contact, or README).
- Replace placeholder links (GitHub, LinkedIn, email) in `src/data/projects.js`, `src/components/Hero.jsx`, and `src/components/Contact.jsx` with your real profiles and email.

## Customization

- **Personal info:** Edit `src/components/Hero.jsx` (name, titles, social links), `src/components/About.jsx` (bio, education), `src/data/experience.js`, `src/data/skills.js`, `src/data/projects.js`.
- **Contact email:** Update `EMAIL` in `src/components/Contact.jsx`.
- **Theme:** Tweak CSS variables in `src/index.css` (`:root` and `.dark`).
- **Meta / SEO:** Update `index.html` (title, description, og tags).

## License

Private / Portfolio use. All rights reserved.
