# Federico Brancasi - Portfolio

A modern, responsive portfolio website. Built with React, TypeScript, and Vite.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/federicobrancasi/federicobrancasi.github.io.git
   cd federicobrancasi.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:8080`

### Build Scripts

- **`npm run dev`** - Start development server
- **`npm run build`** - Build for production and deploy to root (for GitHub Pages)
- **`npm run build:dev`** - Development build and deploy to root
- **`npm run build:only`** - Build only (output to `dist/`)
- **`npm run deploy`** - Copy built files from `dist/` to root directory
- **`npm run lint`** - Run ESLint
- **`npm run preview`** - Preview production build locally

## 🌐 GitHub Pages Deployment

This project is configured for GitHub Pages deployment:

### Automatic Deployment

The site automatically deploys when you push to the `main` branch. The build process:

1. GitHub Actions runs the build
2. Built files are served from the repository root
3. The site is available at `https://federicobrancasi.github.io` or `https://branca.si`

### Manual Deployment

To manually deploy:

1. Build the project:
   ```bash
   npm run build
   ```

2. Commit and push the built files:
   ```bash
   git add .
   git commit -m "Deploy: Update site"
   git push origin main
   ```

### Build Process

The automated build system:
- Builds the React app with Vite
- Generates hashed asset filenames for cache-busting
- Automatically updates `index.html` with correct asset references
- Copies all files to the repository root for GitHub Pages

## 📝 License

This project is personal portfolio code. Feel free to use as inspiration.

## 📧 Contact

- **Email**: federicobrancasi@gmail.com
- **LinkedIn**: [linkedin.com/in/federicobrancasi](https://linkedin.com/in/federicobrancasi)
- **X/Twitter**: [@brancasi](https://x.com/brancasi)

---

Built with ❤️ by Federico Brancasi
