# Arash Nikzad - Personal Portfolio

A modern, research-oriented portfolio website for Arash Nikzad, built with Next.js, Tailwind CSS, and Framer Motion.

## 🚀 Live Demo

[https://a2l5t8.github.io/JulesGoogleLabTest/](https://a2l5t8.github.io/JulesGoogleLabTest/)

## ✨ Features

- **Modern UI/UX**: Clean, professional design with a dark theme.
- **Responsive**: Fully optimized for mobile, tablet, and desktop.
- **Research Focused**: Dedicated sections for AI research and long-term vision.
- **Interactive**: Smooth animations and transitions using Framer Motion.
- **Modular**: Built with reusable React components.
- **CI/CD**: Automated deployment to GitHub Pages via GitHub Actions.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: GitHub Pages

## 📂 Project Structure

- `src/app/`: Next.js App Router pages and layouts.
- `src/components/`: Reusable UI components.
- `src/data/`: Centralized content management (`portfolio.ts`).
- `src/lib/`: Utility functions.
- `public/`: Static assets (images, favicon).

## 📝 How to Customize

The website content is centralized in `src/data/portfolio.ts`. To update your information, projects, or skills:

1. Open `src/data/portfolio.ts`.
2. Edit the `portfolioData` object with your details.
3. Save the file.

### Adding a Profile Picture
1. Add your image to the `public/` directory (e.g., `public/profile.jpg`).
2. Update the `About` component in `src/components/sections/CoreSections.tsx` to use the image instead of the placeholder.

## 📦 Local Development

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd <repo-name>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚢 Deployment to GitHub Pages

The project is configured to deploy automatically when you push to the `main` branch.

1. Ensure your repository is public or you have GitHub Pages enabled.
2. In your GitHub repository settings, go to **Pages**.
3. Under **Build and deployment > Source**, select **GitHub Actions**.
4. Push your code to the `main` branch.

### Note on Repository Path
If your repository is NOT at the root domain (e.g., `https://username.github.io/repo-name/`), you need to update `next.config.ts`:

```typescript
const nextConfig = {
  output: 'export',
  basePath: '/repo-name', // Add this line
  // ...
};
```

## 📄 License

This project is licensed under the MIT License.
