# SafeGuardLondon - Professional Security Services Website

A modern, responsive website for Adam Roszkop Security - professional security solutions in London.

## 🚀 Features

- **Professional Design** - Clean, trustworthy interface for security services
- **Responsive Layout** - Works perfectly on desktop, tablet, and mobile
- **Dark/Light Theme** - Toggle between themes with system preference detection
- **Direct Contact** - Click-to-call and click-to-email functionality
- **Modern Stack** - Built with React 18, TypeScript, and Tailwind CSS
- **Fast Performance** - Static site with optimized loading

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Build Tool**: Vite
- **Routing**: Wouter
- **Icons**: Lucide React
- **Theme**: next-themes

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Development

The development server runs on `http://localhost:3000` with hot module replacement.

## 📁 Project Structure

```
SafeGuardLondon/
├── client/              # React application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page components
│   │   ├── hooks/       # Custom React hooks
│   │   └── lib/         # Utility functions
│   └── index.html       # HTML template
├── attached_assets/     # Images and assets
├── package.json         # Dependencies and scripts
├── vite.config.ts       # Vite configuration
└── tailwind.config.ts   # Tailwind CSS configuration
```

## 🚀 Deployment

This is a static React application that can be deployed to any static hosting service:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Push dist/ to gh-pages branch
```

## 📞 Contact Information

- **Phone**: +44 20 1234 5678
- **Email**: contact@adamroszkopsecurity.com
- **Location**: London, United Kingdom
- **Emergency**: 24/7 Response Available

## 📄 License

MIT License - see LICENSE file for details.
