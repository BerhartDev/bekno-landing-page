// Converts the original photos in originals/ to WebP in public/ (max 1600px wide, quality 80).
// originals/ stays out of the build and out of git; rerun this script after adding a photo there.
import { mkdir, readdir, stat } from 'node:fs/promises';
import { dirname, extname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const sourceDir = join(root, 'originals');
const targetDir = join(root, 'public');
const folders = ['services', 'portfolio'];
const MAX_WIDTH = 1600;
const QUALITY = 80;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else if (/\.(jpe?g|png)$/i.test(entry.name)) yield path;
  }
}

const kb = (bytes) => `${Math.round(bytes / 1024)} KB`;
let before = 0;
let after = 0;

for (const folder of folders) {
  for await (const source of walk(join(sourceDir, folder))) {
    const rel = relative(sourceDir, source);
    const target = join(targetDir, rel.slice(0, -extname(rel).length) + '.webp');
    await mkdir(dirname(target), { recursive: true });
    await sharp(source)
      .rotate()
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(target);

    const [{ size: from }, { size: to }] = await Promise.all([stat(source), stat(target)]);
    before += from;
    after += to;
    console.log(`${rel}: ${kb(from)} → ${kb(to)}`);
  }
}

// Logo for structured data: Google wants a raster image, so the SVG icon becomes a 512px PNG.
const logo = join(targetDir, 'logo.png');
await sharp(join(root, 'src', 'app', 'icon.svg'), { density: 384 }).resize(512, 512).png().toFile(logo);
console.log(`logo.png: ${kb((await stat(logo)).size)}`);

console.log(`\nTotal: ${kb(before)} → ${kb(after)}`);
