<div align="center">

# ⚡ VoltEra Nexus
### The Energy Consciousness Protocol

*Decentralized infrastructure connecting clean energy, blockchain, and conscious computing.*

<br/>

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff69b4?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com/)

[![Website](https://img.shields.io/badge/🌐_Live-voltera--nexus.vercel.app-blue?style=flat-square)](https://voltera-nexus.vercel.app/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)](CONTRIBUTING.md)

</div>

---

## 🚀 Overview

VoltEra Nexus is a **premium NFT collection landing page** showcasing 13 unique energy-themed digital artworks that represent the genesis, expansion, and shadow phases of a decentralized energy network. Built with cutting-edge web technologies and modern design patterns.

### ✨ Key Features

- **🎨 13 Unique NFT Artworks** - Three phases: Light, Network, Subnet
- **🔍 Advanced Search & Filtering** - Real-time search with phase-based filters
- **❤️ Favorites System** - Persistent local storage for user preferences
- **📱 Fully Responsive** - Optimized for all device sizes
- **🎭 Interactive Modals** - Detailed NFT viewing experience
- **⚡ Modern Animations** - Framer Motion powered micro-interactions
- **🌙 Dark Theme** - Professional glassmorphism design
- **🔗 Web3 Integration** - Direct OpenSea collection links

---

## 🛠️ Tech Stack

### Frontend
```
Next.js 14       │ React framework with App Router
TypeScript 5     │ Type-safe development
Tailwind CSS 3   │ Utility-first styling
Framer Motion 11 │ Advanced animations
Lucide React     │ Modern SVG icon system
```

### Development
```
ESLint          │ Code linting and formatting
Autoprefixer    │ CSS vendor prefixes
PostCSS         │ CSS processing pipeline
```

### Deployment
```
Vercel          │ Edge deployment platform
Next.js Image   │ Optimized image delivery
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ 
- **npm/yarn/pnpm** package manager
- **Git** version control

### Installation

```bash
# Clone the repository
git clone https://github.com/Samurai33/VoltEra-Nexus-The-Energy-Consciousness-Protocol.git

# Navigate to project directory
cd VoltEra-Nexus-The-Energy-Consciousness-Protocol

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Setup

```bash
# Copy environment template
cp .env.example .env.local

# Configure your variables
NEXT_PUBLIC_OPENSEA_COLLECTION_URL=https://opensea.io/collection/your-collection
NEXT_PUBLIC_DASHBOARD_URL=https://your-dashboard.vercel.app
NEXT_PUBLIC_IMAGE_BASE=https://ipfs.io/ipfs/your-cid
```

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles & Tailwind
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main landing page
├── components/            # Reusable UI components
│   ├── Header.tsx         # Navigation header
│   ├── NFTCard.tsx        # NFT display cards
│   ├── NFTModal.tsx       # Detailed NFT modal
│   └── Filters.tsx        # Search & filter controls
├── hooks/                 # Custom React hooks
│   └── useFavorites.ts    # Favorites management
└── lib/                   # Utility functions
    └── utils.ts           # Helper functions

public/                    # Static assets
├── nft_art/              # NFT artwork files
├── voltera_logo.png      # Project logo
└── favicon.ico           # Site icon

config/                    # Configuration files
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS config
├── tsconfig.json         # TypeScript config
└── postcss.config.js     # PostCSS config
```

---

## 🎨 Features Deep Dive

### NFT Collection System
- **13 Unique Artworks** organized in 3 thematic phases
- **Dynamic Metadata** with energy types and phases
- **Optimized Images** with Next.js Image component
- **Error Handling** for missing or broken images

### Interactive Components
- **Search & Filter** with real-time updates
- **Favorites System** with localStorage persistence
- **Modal System** with keyboard navigation
- **Responsive Grid** adapting to screen sizes

### Modern UX Patterns
- **Glassmorphism** cards with backdrop blur effects
- **Micro-animations** on hover and interaction
- **Progressive Loading** with skeleton states
- **Accessibility** compliant with WCAG guidelines

### Performance Optimizations
- **Image Optimization** with lazy loading
- **Code Splitting** with Next.js automatic bundling
- **SEO Optimized** with dynamic meta tags
- **Web Vitals** optimized for Core Web Vitals

---

## 🎯 Customization Guide

### Adding New NFTs

1. **Add artwork** to `public/nft_art/` directory
2. **Update metadata** in `src/app/page.tsx`:

```typescript
const METADATA = [
  {
    id: 14,
    slug: "New_NFT",
    title: "New NFT Title",
    phase: "Light", // Light | Network | Subnet
    energy: "Solar",
    file: "new_nft.png"
  },
  // ... existing NFTs
];
```

### Customizing Design

**Colors & Themes:**
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#10b981', // Your primary color
        secondary: '#06b6d4', // Your secondary color
      }
    }
  }
}
```

**Typography:**
```javascript
// tailwind.config.js
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  display: ['YourCustomFont', 'Inter', 'sans-serif'],
}
```

### Environment Configuration

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_OPENSEA_COLLECTION_URL` | OpenSea collection link | `https://opensea.io/collection/...` |
| `NEXT_PUBLIC_DASHBOARD_URL` | VoltEra dashboard URL | `https://dashboard.voltera.app` |
| `NEXT_PUBLIC_IMAGE_BASE` | IPFS or CDN base URL | `https://ipfs.io/ipfs/Qm...` |

---

## 📦 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint checks |
| `npm run type-check` | Run TypeScript checks |

---

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Custom domain (optional)
vercel --prod --alias your-domain.com
```

### Other Platforms

**Netlify:**
```bash
npm run build
# Deploy ./out directory
```

**Docker:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** changes: `git commit -m 'Add amazing feature'`
4. **Push** to branch: `git push origin feature/amazing-feature`
5. **Create** a Pull Request

### Code Standards

- **TypeScript** for type safety
- **ESLint** for code quality
- **Prettier** for formatting
- **Conventional Commits** for commit messages

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Tailwind Labs** for the CSS framework
- **Framer** for the motion library
- **Lucide** for the icon system
- **Vercel** for deployment platform

---

## 📞 Support

- **Website:** [voltera-nexus.vercel.app](https://voltera-nexus.vercel.app)
- **Issues:** [GitHub Issues](https://github.com/Samurai33/VoltEra-Nexus-The-Energy-Consciousness-Protocol/issues)
- **Discussions:** [GitHub Discussions](https://github.com/Samurai33/VoltEra-Nexus-The-Energy-Consciousness-Protocol/discussions)

---

<div align="center">

**Made with ⚡ by VoltEra Technologies**

[Website](https://voltera-nexus.vercel.app) • [Twitter](https://twitter.com/VolteraTech) • [Discord](https://discord.gg/voltera)

</div>