// Builds the site's logo assets from the English Jamanvar logo.
//
//   node scripts/prepare-logo.mjs [source]   (default: public/english-logo.png)
//
// The source has a flat off-white background. This keys that background out
// to transparency (with colour decontamination on soft edges, so there is no
// light halo), trims the margins, and writes:
//   public/images/jamanvar/brand/logo-en.png         full-size transparent master
//   public/images/jamanvar/brand/logo-en-480.webp    header / footer
//   public/images/jamanvar/brand/logo-en-1200.webp   large placements
//   public/images/jamanvar/brand/og-image.png        1200×630 social share card
//   public/images/jamanvar/brand/mark.png             cloche mark, transparent
//   src/app/icon.png, src/app/apple-icon.png         cloche mark favicon
import sharp from "sharp";
import { mkdirSync } from "node:fs";

const SOURCE = process.argv[2] ?? "public/english-logo.png";
const OUT = "public/images/jamanvar/brand";
const IVORY = { r: 255, g: 248, b: 240 };

// Distance from the background below which a pixel is fully transparent, and
// above which it is fully opaque; in between, alpha ramps smoothly.
const CLEAR = 14;
const SOLID = 60;

mkdirSync(OUT, { recursive: true });

const { data, info } = await sharp(SOURCE).removeAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height } = info;

// Estimate the background from the four corners.
const sample = (x, y) => {
  const i = (y * width + x) * 3;
  return [data[i], data[i + 1], data[i + 2]];
};
const corners = [sample(2, 2), sample(width - 3, 2), sample(2, height - 3), sample(width - 3, height - 3)];
const bg = [0, 1, 2].map((c) => corners.reduce((s, p) => s + p[c], 0) / corners.length);

const rgba = Buffer.alloc(width * height * 4);
for (let p = 0; p < width * height; p++) {
  const r = data[p * 3];
  const g = data[p * 3 + 1];
  const b = data[p * 3 + 2];
  const dist = Math.hypot(r - bg[0], g - bg[1], b - bg[2]);
  const t = Math.min(1, Math.max(0, (dist - CLEAR) / (SOLID - CLEAR)));
  const a = t * t * (3 - 2 * t);
  // Remove the background's contribution from partially transparent pixels.
  const un = (c, k) => (a > 0 ? Math.min(255, Math.max(0, Math.round((c - bg[k] * (1 - a)) / a))) : 0);
  rgba[p * 4] = un(r, 0);
  rgba[p * 4 + 1] = un(g, 1);
  rgba[p * 4 + 2] = un(b, 2);
  rgba[p * 4 + 3] = Math.round(a * 255);
}

const keyed = await sharp(rgba, { raw: { width, height, channels: 4 } }).png().toBuffer();
const master = await sharp(keyed).trim({ threshold: 1 }).png({ compressionLevel: 9, palette: false }).toBuffer();
const meta = await sharp(master).metadata();

await sharp(master).toFile(`${OUT}/logo-en.png`);
await sharp(master).resize({ width: 480 }).webp({ quality: 90, alphaQuality: 100 }).toFile(`${OUT}/logo-en-480.webp`);
await sharp(master).resize({ width: 1200 }).webp({ quality: 90, alphaQuality: 100 }).toFile(`${OUT}/logo-en-1200.webp`);

// Social share card: the logo centred on brand ivory.
const ogLogo = await sharp(master).resize({ width: 860 }).toBuffer();
const ogMeta = await sharp(ogLogo).metadata();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: { ...IVORY, alpha: 1 } } })
  .composite([{ input: ogLogo, left: Math.round((1200 - ogMeta.width) / 2), top: Math.round((630 - ogMeta.height) / 2) }])
  .png()
  .toFile(`${OUT}/og-image.png`);

// Favicon: the steaming cloche on its tray, which sits above the wordmark in
// the middle of the logo. Found by scanning the top band of the trimmed master
// (the tray line is at about 41% of the logo's height).
const { data: m, info: mi } = await sharp(master).raw().toBuffer({ resolveWithObject: true });
const markBottom = Math.round(mi.height * 0.41);
let left = mi.width;
let right = 0;
let top = mi.height;
let bottom = 0;
for (let y = 0; y < markBottom; y++) {
  for (let x = Math.round(mi.width * 0.3); x < Math.round(mi.width * 0.75); x++) {
    if (m[(y * mi.width + x) * 4 + 3] > 128) {
      left = Math.min(left, x);
      right = Math.max(right, x);
      top = Math.min(top, y);
      bottom = Math.max(bottom, y);
    }
  }
}
const mark = await sharp(master)
  .extract({ left, top, width: right - left + 1, height: bottom - top + 1 })
  .png()
  .toBuffer();
// sharp applies flatten before resize inside one pipeline, so the mark is
// sized and padded first, then flattened onto ivory in a second pass.
async function iconFor(size) {
  const inner = Math.round(size * 0.8);
  const padded = await sharp(mark)
    .resize({ width: inner, height: inner, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({
      top: Math.floor((size - inner) / 2),
      bottom: Math.ceil((size - inner) / 2),
      left: Math.floor((size - inner) / 2),
      right: Math.ceil((size - inner) / 2),
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();
  return sharp(padded).flatten({ background: IVORY }).png();
}
await sharp(mark).resize({ width: 256, height: 256, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(`${OUT}/mark.png`);
await (await iconFor(512)).toFile("src/app/icon.png");
await (await iconFor(180)).toFile("src/app/apple-icon.png");

console.log(`logo ${meta.width}×${meta.height}, background ≈ rgb(${bg.map(Math.round).join(", ")}), mark ${right - left + 1}×${bottom - top + 1}`);
