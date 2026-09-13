# 🧱 Dev Stack Builder

A sleek, responsive website where developers can explore modern web technologies and build their own personalized tech stack — pick tools, add them to your stack, and manage your selections in real time.

Built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**.

![Made with React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

---

## ✨ Features

- **Sticky navbar** with a fully functional mobile hamburger menu
- **Gradient hero section** with a two-tone heading and call-to-action buttons
- **10–15 technology cards** loaded dynamically from a local JSON file
- **Responsive technology grid** — 3 columns on desktop, 2 on tablet, 1 on mobile
- **"Your Stack" sidebar** with live empty / populated states
- **Add to Stack** — instantly disables the button and updates the sidebar
- **Duplicate prevention** — trying to add the same technology twice shows a warning toast
- **Remove & Remove All** — clear one item or the entire stack in a click
- **Toast notifications** for every stack action, powered by `react-toastify`
- **Real loading state** — technology data is fetched at runtime, not bundled
- **One-place theming** — the orange → pink → violet brand gradient is defined once and reused everywhere
- Fully **accessible** (semantic HTML, keyboard focus states, ARIA labels) and **responsive** across all breakpoints

---

## 🛠️ Tech Stack

| Category | Technology |
| --- | --- |
| Framework | React 19 + Vite |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Notifications | React-Toastify |
| Icons | Lucide React |
| Data | Local JSON (fetched at runtime) |

---

## 📁 Project Structure

```text
dev-stack-builder/
├── public/
│   ├── favicon.svg
│   └── data/
│       └── technologies.json      # Fetched at runtime for a real loading state
│
├── src/
│   ├── assets/
│   │   └── banner-stack.png
│   │
│   ├── components/
│   │   ├── BrandLogo.tsx
│   │   ├── Navbar.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── Hero.tsx
│   │   ├── Loading.tsx
│   │   ├── TechnologyCard.tsx
│   │   ├── TechnologySection.tsx
│   │   ├── StackItem.tsx
│   │   ├── StackSidebar.tsx
│   │   ├── SocialIcons.tsx
│   │   └── Footer.tsx
│   │
│   ├── hooks/
│   │   ├── useTechnologies.ts     # Data fetching + loading/error state
│   │   └── useStack.ts            # Add / remove / remove-all + toasts
│   │
│   ├── types/
│   │   └── technology.ts
│   │
│   ├── data/
│   │   └── technologies.json      # Reference copy of the dataset
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css                  # Centralized brand gradient theme
│
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/dev-stack-builder.git
cd dev-stack-builder

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be running at **http://localhost:5173** 🎉

### Build for Production

```bash
npm run build      # Type-checks and creates an optimized build in /dist
npm run preview    # Preview the production build locally
```

---

## 🎨 Customizing the Brand Theme

The entire brand gradient (used for the logo, hero heading highlight, and primary buttons) is defined **once** in `src/index.css`:

```css
:root {
  --brand-from: #f97316; /* orange */
  --brand-via: #ec4899;  /* pink */
  --brand-to: #8b5cf6;   /* violet */
}
```

Change these three values and the entire site re-themes automatically — no need to touch any component.

---

## 🧩 Adding or Editing Technologies

All technology data lives in [`public/data/technologies.json`](./public/data/technologies.json). Each entry follows this shape:

```ts
interface Technology {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Language" | "Styling" | "DevOps" | "Tools";
  description: string;
  icon: string;       // icon image URL
  rating: number;      // e.g. 4.8
  difficulty: "Beginner-Friendly" | "Intermediate" | "Advanced";
  badge: string;       // e.g. "Popular", "Fast", "Essential"
}
```

Just add, remove, or edit entries in the JSON file — no code changes required.

> 💡 A good source for clean, ready-to-use tech icons: [techicons.dev](https://techicons.dev/)

---

## ♿ Accessibility

- Semantic HTML elements throughout (`<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`, `<aside>`)
- Real `<button>` elements for every interactive action — no clickable `<div>`s
- Visible focus states for keyboard navigation
- ARIA labels on icon-only buttons and live regions for loading/error states

---

## 📄 License

This project is open source and available for personal and educational use.

---

<p align="center">Built with ❤️ using React, Vite, TypeScript & Tailwind CSS</p>
