# Hen Benoish - Portfolio Website

A modern, bilingual (English/Hebrew) portfolio website built with React, TypeScript, Tailwind CSS, and Vite. Features a dark theme with cyan accents, full RTL support, and seamless language switching.

## 🌟 Features

- **Bilingual Support**: English (LTR) and Hebrew (RTL) with automatic layout mirroring
- **Dark Theme**: Terminal-inspired aesthetic with cyan/electric blue accents
- **Responsive Design**: Fully responsive across all devices
- **Modern Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **Smooth Animations**: Framer Motion for elegant transitions
- **GitHub Pages Ready**: Configured for automatic deployment

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/HenBeno/MyCVSite.git
cd MyCVSite
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🚢 Deploy to GitHub Pages

### Automatic Deployment (Recommended)

The project includes a GitHub Actions workflow that automatically deploys to GitHub Pages on every push to the `main` branch.

1. Enable GitHub Pages in your repository settings:
   - Go to Settings → Pages
   - Source: GitHub Actions

2. Push to main branch - deployment happens automatically!

### Manual Deployment

```bash
npm run deploy
```

This will build the project and deploy it to the `gh-pages` branch.

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **react-i18next** - Internationalization
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📁 Project Structure

```
MyCVSite/
├── src/
│   ├── components/      # React components
│   ├── locales/         # Translation files (en.json, he.json)
│   ├── hooks/           # Custom React hooks
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
│   └── assets/          # Resume and images
├── .github/
│   └── workflows/       # GitHub Actions
└── package.json
```

## 🌍 Adding Translations

Edit the translation files in `src/locales/`:
- `en.json` - English translations
- `he.json` - Hebrew translations

The language toggle in the navbar switches between languages automatically.

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  primary: {
    DEFAULT: '#00D9FF',  // Cyan accent
    light: '#0EA5E9',
    dark: '#0099CC',
  },
  dark: {
    bg: '#0a0a0a',       // Background
    surface: '#111111',  // Card background
    // ...
  }
}
```

### Content

Update the translation files (`src/locales/en.json` and `src/locales/he.json`) to modify the website content.

## 📝 License

© 2025 Hen Benoish. All rights reserved.

## 🔗 Links

- **GitHub**: [https://github.com/HenBeno](https://github.com/HenBeno)
- **LinkedIn**: [https://www.linkedin.com/in/hen-benoish/](https://www.linkedin.com/in/hen-benoish/)
- **Email**: HenBenHen@gmail.com

---

Built with ❤️ and ☕
