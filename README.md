# Professional Services Website Template

A modern, responsive template for professional service businesses. Fully configurable - customize colors, content, and branding for any industry.

## 🚀 Features

- **Fully Configurable** - All content, colors, and branding in one config file
- **Professional Design** - Clean, trustworthy interface
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
- **State Management**: React Context + LocalStorage for theme persistence

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

## ⚙️ Configuration

All site content is defined in `client/src/config/config.ts`. Edit this file to customize:
- Business name, tagline, location
- Colors (automatically applied on load)
- Navigation items
- Hero section content
- Services offered
- About section content
- Contact information
- Footer links

**Example**: To change from Security to Transportation industry, just edit the config file!

## 📁 Project Structure

```
SafeGuardLondon/
├── client/
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── config/      # Site configuration (ONE file to edit!)
│   │   ├── pages/       # Page components
│   │   ├── hooks/       # Custom React hooks (theme, scroll)
│   │   └── lib/         # Utility functions
│   └── index.html
├── attached_assets/     # Images and assets
└── config files...      # Tailwind, Vite, etc.
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

## 💡 Customization Guide

### For New Customers:

1. **Copy the template**
   ```bash
   cp -r SafeGuardLondon CustomerBusiness
   ```

2. **Edit the config**
   ```typescript
   // Edit: CustomerBusiness/client/src/config/config.ts
   // Change business name, colors, services, contact info, etc.
   ```

3. **Replace images**
   - Add customer images to `attached_assets/stock_images/`
   - Update image paths in config

4. **Customize Logo** (IMPORTANT!)
   - Edit `client/src/components/Logo.tsx`
   - Change monogram initials (e.g., "AR" to customer initials)
   - Update business name text if needed
   - **Logo customization is client-specific and should be done for each customer**

5. **Update SEO & Meta Tags** (CRITICAL!)
   - **Edit `client/index.html`** - Update all meta tags:
     - Title, description, keywords
     - Open Graph tags (Facebook/LinkedIn)
     - Twitter Card tags
     - Structured data (JSON-LD) with customer info
     - Canonical URL
     - Phone, email, address
   - **Edit `client/public/sitemap.xml`** - Update URLs
   - **Edit `client/public/robots.txt`** - Update sitemap URL

6. **Build and deploy**
   ```bash
   npm install
   npm run build
   # Deploy dist/ folder
   ```

## 📞 Example Contact Information

All contact details are in `config.ts`. Customize for each customer:
- Phone, email, location
- Business hours
- Services offered
- About section content

## 📄 License

MIT License - see LICENSE file for details.