# GRAVITY 2K26 - The Ultimate Techfest of KJEI

A stunning, interactive website built with React, Three.js, and Tailwind CSS featuring a 3D space-themed design.

## Features

- 🌍 **3D Earth Model** - Rotating planet with glowing ring
- ⭐ **Star Field Background** - Dynamic star field animation
- 🎨 **Glassmorphic UI** - Modern glass-like design elements
- 🎯 **Event Categories** - Four main event quadrants:
  - **The Quadrant** - Engineering events (Cyan theme)
  - **Pitch Perfect** - Startup pitch competition (Gold theme)
  - **CineClash** - Short film competition (Red theme)
  - **Nexus** - Gaming tournaments (Purple theme)
- 📱 **Responsive Design** - Works on all devices
- 🎭 **Smooth Animations** - Powered by Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
techfest/
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   │   ├── canvas/  # Three.js 3D components
│   │   ├── common/  # Reusable UI components
│   │   ├── events/  # Event-related components
│   │   ├── hero/    # Hero section
│   │   └── sections/# Content sections
│   ├── data/        # Event data and configuration
│   ├── styles/      # Global CSS and Tailwind
│   ├── App.jsx      # Main app component
│   └── main.jsx     # Entry point
└── package.json
```

## Customization

### Adding Assets

- **Sponsor Logos**: Place in `public/assets/images/sponsors/`
- **Textures**: Place in `public/assets/textures/`
- Update the `Sponsors.jsx` component to reference your logos

### Modifying Event Data

Edit `src/data/index.js` to update event information, prizes, rules, etc.

### Theme Colors

Modify colors in `tailwind.config.js` and `src/styles/globals.css` to change the color scheme.

## Technologies Used

- **React 18** - UI framework
- **Three.js / React Three Fiber** - 3D graphics
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Scroll** - Smooth scrolling
- **Lucide React** - Icons
- **Vite** - Build tool

## License

© 2026 KJEI Techfest. All rights reserved.
