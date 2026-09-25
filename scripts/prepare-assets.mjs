import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.argv[2];
if (!root) throw new Error('Provide the local brand assets directory.');
const images = [
  ['happy-run', 'Hình ảnh chọn lọc/Giải chạy ROX Living Happy Run 2024.jpg'],
  ['ocean-city', 'Hình ảnh chọn lọc/Giải bơi Kình ngư Quận biển Ocean City 2023.JPG'],
  ['swim-vinhomes', 'Hình ảnh chọn lọc/Lớp học bơi cư dân Vinhomes.jpg'],
  ['di-de-lon', 'Hình ảnh chọn lọc/Đi để lớn - ROX Living 2025.JPG'],
  ['sports-day', 'Hình ảnh chọn lọc/Ngày hội thể thao Diễn Châu, Nghệ An.jpg'],
  ['fireball', 'Hình ảnh chọn lọc/Lớp học bóng đá trẻ em Fireball.jpg'],
  ['swim-grand-park', 'Hình ảnh chọn lọc/Lớp học bơi miễn phí Vinhomes Grand park (1).jpg'],
  ['swim-times-city', 'Hình ảnh chọn lọc/Lớp học bơi miễn phí Vinhomes Times City (1).jpg'],
  ['your-dreams-logo', 'Your dreamss - Logo file goc/Your dream - Logo ngang.png'],
  ['your-dreams-mark', 'Your dreamss - Logo file goc/Your dream - Logo file goc-01.png'],
  ['vinhomes-logo', 'Hình ảnh chọn lọc/Vinhomes-logo.png'],
  ['rox-logo', 'Hình ảnh chọn lọc/logo ROX Living.png'],
];
await mkdir('public/images', { recursive: true });
await mkdir('.qa', { recursive: true });
const manifest = [];
for (const [name, source] of images) {
  const logo = name.includes('logo') || name.includes('mark');
  const target = `public/images/${name}.webp`;
  const info = await sharp(path.join(root, source)).rotate().resize({ width: logo ? 720 : 1800, withoutEnlargement: true }).webp({ quality: logo ? 90 : 82 }).toFile(target);
  manifest.push({ file: target, source, width: info.width, height: info.height, bytes: info.size });
}
await writeFile('docs/asset-manifest.json', JSON.stringify(manifest, null, 2) + '\n');
const thumbnails = await Promise.all(images.map(async ([name], i) => ({ input: await sharp(`public/images/${name}.webp`).resize(400, 260, { fit: 'contain', background: '#f1f1f1' }).png().toBuffer(), left: (i % 3) * 400, top: Math.floor(i / 3) * 260 })));
await sharp({ create: { width: 1200, height: Math.ceil(images.length / 3) * 260, channels: 3, background: '#f1f1f1' } }).composite(thumbnails).jpeg().toFile('.qa/contact-sheet.jpg');
console.log(manifest.map(x => `${x.file}: ${Math.round(x.bytes / 1024)} KB`).join('\n'));
