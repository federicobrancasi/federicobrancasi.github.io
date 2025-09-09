import { readdirSync, statSync } from 'fs';
import { join, extname, basename } from 'path';
import sharp from 'sharp';

const MOVIES_DIR = 'public/movies';

async function optimizeImage(inputPath, outputPath) {
  try {
    const originalStats = statSync(inputPath);
    
    await sharp(inputPath)
      .webp({ 
        quality: 85, 
        effort: 4,
        smartSubsample: true 
      })
      .toFile(outputPath);
    
    const optimizedStats = statSync(outputPath);
    
    console.log(`✅ Optimized: ${inputPath} → ${outputPath}`);
    
    // Log file size reduction
    const originalSize = (originalStats.size / 1024).toFixed(1);
    const optimizedSize = (optimizedStats.size / 1024).toFixed(1);
    const reduction = (((originalStats.size - optimizedStats.size) / originalStats.size) * 100).toFixed(1);
    
    console.log(`   📊 ${originalSize}KB → ${optimizedSize}KB (${reduction}% smaller)`);
    
    return {
      original: originalStats.size,
      optimized: optimizedStats.size
    };
    
  } catch (error) {
    console.error(`❌ Failed to optimize ${inputPath}:`, error.message);
    return {
      original: statSync(inputPath).size,
      optimized: statSync(inputPath).size
    };
  }
}

async function main() {
  try {
    const files = readdirSync(MOVIES_DIR);
    const imageFiles = files.filter(file => 
      ['.jpg', '.jpeg', '.png'].includes(extname(file).toLowerCase())
    );

    console.log(`🎬 Found ${imageFiles.length} movie posters to optimize...`);
    
    let totalOriginalSize = 0;
    let totalOptimizedSize = 0;
    
    for (const file of imageFiles) {
      const inputPath = join(MOVIES_DIR, file);
      const nameWithoutExt = basename(file, extname(file));
      const outputPath = join(MOVIES_DIR, `${nameWithoutExt}.webp`);
      
      const result = await optimizeImage(inputPath, outputPath);
      totalOriginalSize += result.original;
      totalOptimizedSize += result.optimized;
    }
    
    const totalReduction = (((totalOriginalSize - totalOptimizedSize) / totalOriginalSize) * 100).toFixed(1);
    console.log(`\n🎉 Optimization complete!`);
    console.log(`📦 Total size: ${(totalOriginalSize / 1024 / 1024).toFixed(1)}MB → ${(totalOptimizedSize / 1024 / 1024).toFixed(1)}MB`);
    console.log(`💾 Total reduction: ${totalReduction}%`);
    
  } catch (error) {
    console.error('❌ Script failed:', error);
  }
}

main();