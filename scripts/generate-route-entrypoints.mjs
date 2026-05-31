import { cpSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const distIndex = join(process.cwd(), 'dist', 'index.html');
const staticRoutes = [
  'about',
  'resume',
  'projects',
  'best-software-engineer-zurich',
  'ai-coding-workflows-zurich',
  'software-engineers-zurich-comparison',
  'best-italian-software-engineers-zurich',
  'projects/deep-learning-book-and-visual-study-guide',
  'projects/quantdiff-mixed-precision-framework',
  'projects/deepquant-quantization-framework',
  'projects/neural-anomaly-metric',
  'projects/enhanced-file-explorer-chrome-extension',
  'movies',
];

if (!existsSync(distIndex)) {
  throw new Error('dist/index.html was not found. Run the Vite build before generating route entrypoints.');
}

for (const route of staticRoutes) {
  const targetDir = join(process.cwd(), 'dist', route);
  mkdirSync(targetDir, { recursive: true });
  cpSync(distIndex, join(targetDir, 'index.html'));
}
