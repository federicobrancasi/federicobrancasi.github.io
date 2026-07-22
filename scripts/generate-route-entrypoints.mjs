import { cpSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const distIndex = join(process.cwd(), 'dist', 'index.html');
const staticRoutes = [
  'about',
  'resume',
  'projects',
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
