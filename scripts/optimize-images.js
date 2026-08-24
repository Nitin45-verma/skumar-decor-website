import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

async function optimizeImages() {
  console.log('Starting comprehensive image optimization...');

  // 1. Logo PNG -> WebP in src/assets/logo.png & logo.webp
  const srcLogo = path.join(projectRoot, 'src/assets/logo.png');
  const srcLogoWebp = path.join(projectRoot, 'src/assets/logo.webp');
  if (fs.existsSync(srcLogo)) {
    const buf = fs.readFileSync(srcLogo);
    const optLogo = await sharp(buf)
      .resize({ width: 600, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toBuffer();
    fs.writeFileSync(srcLogoWebp, optLogo);
    console.log(`Optimized ${srcLogoWebp} (${fs.statSync(srcLogoWebp).size} bytes)`);
  }

  // 2. Logo Clean PNG -> WebP
  const logoClean = path.join(projectRoot, 'src/assets/logo_clean.png');
  const logoCleanWebp = path.join(projectRoot, 'src/assets/logo_clean.webp');
  if (fs.existsSync(logoClean)) {
    const buf = fs.readFileSync(logoClean);
    const optClean = await sharp(buf)
      .resize({ width: 500, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 78, effort: 6 })
      .toBuffer();
    fs.writeFileSync(logoCleanWebp, optClean);
    console.log(`Optimized ${logoCleanWebp} (${fs.statSync(logoCleanWebp).size} bytes)`);
  }

  // 3. Public Logo PNG & WebP
  const pubLogo = path.join(projectRoot, 'public/logo.png');
  const pubLogoWebp = path.join(projectRoot, 'public/logo.webp');
  if (fs.existsSync(pubLogo)) {
    const buf = fs.readFileSync(pubLogo);
    const optPubWebp = await sharp(buf)
      .resize({ width: 400, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 75, effort: 6 })
      .toBuffer();
    fs.writeFileSync(pubLogoWebp, optPubWebp);
    
    // Also compress public/logo.png itself so it isn't 549 KB!
    const optPubPng = await sharp(buf)
      .resize({ width: 400, fit: 'inside', withoutEnlargement: true })
      .png({ quality: 80, compressionLevel: 9 })
      .toBuffer();
    fs.writeFileSync(pubLogo, optPubPng);
    console.log(`Optimized public/logo.png (${fs.statSync(pubLogo).size} bytes) & logo.webp (${fs.statSync(pubLogoWebp).size} bytes)`);
  }

  // 4. Public og-image.jpg
  const ogImage = path.join(projectRoot, 'public/og-image.jpg');
  if (fs.existsSync(ogImage)) {
    const buf = fs.readFileSync(ogImage);
    const optOg = await sharp(buf)
      .resize({ width: 1200, height: 630, fit: 'cover' })
      .jpeg({ quality: 75, mozjpeg: true })
      .toBuffer();
    fs.writeFileSync(ogImage, optOg);
    console.log(`Optimized public/og-image.jpg (${fs.statSync(ogImage).size} bytes)`);
  }

  // 5. Public favicon.png
  const favPng = path.join(projectRoot, 'public/favicon.png');
  if (fs.existsSync(favPng)) {
    const buf = fs.readFileSync(favPng);
    const optFav = await sharp(buf)
      .resize({ width: 128, height: 128, fit: 'contain' })
      .png({ compressionLevel: 9 })
      .toBuffer();
    fs.writeFileSync(favPng, optFav);
    console.log(`Optimized public/favicon.png (${fs.statSync(favPng).size} bytes)`);
  }

  // 6. Hero PNG -> WebP
  const heroPng = path.join(projectRoot, 'src/assets/hero.png');
  const heroWebp = path.join(projectRoot, 'src/assets/hero.webp');
  if (fs.existsSync(heroPng)) {
    const buf = fs.readFileSync(heroPng);
    const optHero = await sharp(buf)
      .resize({ width: 1000, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 75, effort: 6 })
      .toBuffer();
    fs.writeFileSync(heroWebp, optHero);
    console.log(`Optimized ${heroWebp} (${fs.statSync(heroWebp).size} bytes)`);
  }

  // 7. Compress Banner WebP
  const banner = path.join(projectRoot, 'src/assets/banner.webp');
  if (fs.existsSync(banner)) {
    const bannerBuf = fs.readFileSync(banner);
    const optBanner = await sharp(bannerBuf)
      .resize({ width: 1000, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 70, effort: 6 })
      .toBuffer();
    fs.writeFileSync(banner, optBanner);
    console.log(`Optimized banner.webp (${fs.statSync(banner).size} bytes)`);
  }

  // 8. Compress Gallery Images (including lights_real.webp)
  const galleryDir = path.join(projectRoot, 'src/assets/gallery');
  const files = fs.readdirSync(galleryDir);
  for (const file of files) {
    if (file.endsWith('.webp')) {
      const filePath = path.join(galleryDir, file);
      const fileBuf = fs.readFileSync(filePath);
      const isHeroBg = file === 'lights_real.webp';
      const optBuf = await sharp(fileBuf)
        .resize({ width: isHeroBg ? 1200 : 900, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: isHeroBg ? 72 : 70, effort: 6 })
        .toBuffer();
      fs.writeFileSync(filePath, optBuf);
      console.log(`Optimized ${file} (${fs.statSync(filePath).size} bytes)`);
    }
  }

  console.log('Comprehensive image optimization complete!');
}

optimizeImages().catch(err => console.error(err));
