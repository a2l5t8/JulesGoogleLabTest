# Arash Nikzad - AI Research & Engineering Portfolio

A high-end, research-oriented personal portfolio designed for AI researchers and engineers. Built with a "Scientific Dossier" aesthetic using Next.js, Tailwind CSS v4, and Three.js.

## 🚀 Live Demo
[https://a2l5t8.github.io/JulesGoogleLabTest/](https://a2l5t8.github.io/JulesGoogleLabTest/)

## ✨ Aesthetic & Design
- **Technical Dossier UI**: Monospace typography, grid systems, and coordinate overlays.
- **Neural Visualizations**: 3D interactive neural network background using Three.js and React Three Fiber.
- **Academic Precision**: Layouts inspired by laboratory logs and research papers.
- **Performance**: Static export with optimized assets for fast loading.

## 🛠️ Tech Stack
- **Framework**: [Next.js 15+](https://nextjs.org/)
- **Visuals**: [Three.js](https://threejs.org/) & [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Deployment**: GitHub Pages (via GitHub Actions)

## 📂 Project Structure
- `src/app/`: Core page and layout configuration.
- `src/components/sections/`: Technical UI blocks (Hero, About, Projects, Research, Experience, Contact).
- `src/components/ui/`: 3D and Technical background components.
- `src/data/portfolio.ts`: **Central source of truth for all website content.**

## 📝 Customization Guide

### 1. Update Content (No Coding Required)
To change any text, projects, or skill tags, simply edit `src/data/portfolio.ts`. The UI will update automatically.

### 2. Deployment Settings (Crucial)
If you change the repository name on GitHub, you **must** update the `basePath` in `next.config.ts`:

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/your-new-repo-name', // MUST MATCH REPOSITORY NAME
  assetPrefix: '/your-new-repo-name',
  // ...
};
```

### 3. Local Development
```bash
npm install
npm run dev
```
*Note: The local server will run at `http://localhost:3000/JulesGoogleLabTest` by default due to the `basePath` configuration.*

## 🚢 Deployment
1. Go to your GitHub Repository **Settings** > **Pages**.
2. Set **Build and deployment > Source** to **GitHub Actions**.
3. Push changes to the `main` branch.

## 📄 License
MIT License.
