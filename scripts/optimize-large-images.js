import { readdirSync, statSync } from 'fs';
import { join } from 'path';
import sharp from 'sharp';

const MOVIES_DIR = 'public/movies';
const MAX_SIZE = 1024 * 1024; // 1MB threshold

async function optimizeImage(inputPath, quality = 70, maxWidth = 400) {
  try {
    const originalStats = statSync(inputPath);
    
    if (originalStats.size <= MAX_SIZE) {
      console.log(`⏩ Skipping ${inputPath} (${(originalStats.size / 1024).toFixed(0)}KB - already small enough)`);
      return;
    }

    console.log(`🔄 Optimizing ${inputPath} (${(originalStats.size / 1024 / 1024).toFixed(1)}MB)`);
    
    // Create a backup first
    const backupPath = inputPath.replace('.webp', '_original.webp');
    
    await sharp(inputPath)
      .resize(maxWidth, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ 
        quality: quality,
        effort: 6
      })
      .toFile(backupPath);
    
    const optimizedStats = statSync(backupPath);
    
    // If optimization was successful and reduced size significantly, replace original
    if (optimizedStats.size < originalStats.size * 0.8) {
      await sharp(backupPath).toFile(inputPath);
      
      const finalStats = statSync(inputPath);
      const reduction = (((originalStats.size - finalStats.size) / originalStats.size) * 100).toFixed(1);
      
      console.log(`✅ Optimized: ${(originalStats.size / 1024 / 1024).toFixed(1)}MB → ${(finalStats.size / 1024).toFixed(0)}KB (${reduction}% reduction)`);
      
      // Remove backup
      await import('fs').then(fs => fs.promises.unlink(backupPath));
    } else {
      console.log(`❌ Optimization didn't help much, keeping original`);
      await import('fs').then(fs => fs.promises.unlink(backupPath));
    }
    
  } catch (error) {
    console.error(`❌ Failed to optimize ${inputPath}:`, error.message);
  }
}

async function main() {
  try {
    const files = readdirSync(MOVIES_DIR);
    const webpFiles = files.filter(file => file.endsWith('.webp'));

    console.log(`🎬 Checking ${webpFiles.length} movie posters for optimization...`);
    
    for (const file of webpFiles) {
      const inputPath = join(MOVIES_DIR, file);
      await optimizeImage(inputPath);
    }
    
    console.log('\n🎉 Optimization complete!');
    
  } catch (error) {
    console.error('❌ Script failed:', error);
  }
}

main();