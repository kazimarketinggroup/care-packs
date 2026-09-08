import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dir = './public/assets/images';

const imagesToOptimize = [
  { name: 'Copy_of_DSC08711_1_21_1753', maxW: 2400 },
  { name: 'Copy_of_DSC08607_1_21_1659', maxW: 1600 },
  { name: 'DSC08980_1_21_1648', maxW: 1600 },
  { name: 'Rectangle_12_21_1632', maxW: 1200 },
  { name: 'IMG-20251128-WA0014_1_21_1684', maxW: 1200 },
  { name: 'IMG-20251128-WA0012_1_21_1671', maxW: 1200 },
  { name: 'business-team-collaborating-on-a-tablet-outdoors-2026-01-09-01-10-21-utc_1_21_1718', maxW: 1200 },
  { name: 'hero-bg', maxW: 1920 }
];

async function run() {
  for (const item of imagesToOptimize) {
    const inputPath = path.join(dir, `${item.name}.png`);
    const outputPath = path.join(dir, `${item.name}.webp`);
    if (fs.existsSync(inputPath)) {
      const metadata = await sharp(inputPath).metadata();
      const targetWidth = Math.min(metadata.width || item.maxW, item.maxW);
      
      await sharp(inputPath)
        .resize({ width: targetWidth, withoutEnlargement: true })
        .webp({ quality: 85, effort: 6 })
        .toFile(outputPath);
      
      const inStat = fs.statSync(inputPath);
      const outStat = fs.statSync(outputPath);
      console.log(`Optimized ${item.name}: ${(inStat.size / 1024 / 1024).toFixed(2)} MB -> ${(outStat.size / 1024).toFixed(1)} KB`);
    } else {
      console.log(`File not found: ${inputPath}`);
    }
  }
}

run().catch(console.error);
