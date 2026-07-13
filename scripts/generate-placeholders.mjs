/**
 * Generates solid-tone placeholder PNGs for every image the site references,
 * in the site's palette. They are converted to .jpg by the caller (sips).
 * Replace the resulting /public/images/*.jpg files with real photos —
 * same filenames, and the site picks them up automatically.
 *
 * Run: node scripts/generate-placeholders.mjs
 */
import { deflateSync } from "node:zlib";
import { writeFileSync, mkdirSync } from "node:fs";

const W = 1600;
const H = 1000;

const images = {
  "hero": [59, 42, 32], // molasses
  "house-facade": [156, 107, 74], // copper
  "house-living": [184, 118, 62], // caramel
  "house-billiards": [92, 71, 54],
  "house-kitchen": [154, 95, 47],
  "house-veranda": [190, 140, 90],
  "house-terrace": [138, 155, 132], // sage — outdoors
  "house-garden": [111, 129, 104], // sage deep — outdoors
  "room-la-sucrerie": [196, 148, 105],
  "room-les-jumeaux": [172, 122, 78],
  "room-capucine": [205, 170, 135],
  "room-marie-lys": [186, 138, 96],
  "room-valerie-anne": [163, 113, 72],
  "room-attic": [128, 96, 70],
  "location-chavenay": [138, 155, 132], // sage — countryside
};

function crc32(buf) {
  let table = crc32.table;
  if (!table) {
    table = crc32.table = new Int32Array(256).map((_, n) => {
      let c = n;
      for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      return c;
    });
  }
  let crc = -1;
  for (const b of buf) crc = (crc >>> 8) ^ table[(crc ^ b) & 0xff];
  return (crc ^ -1) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
}

function solidPng([r, g, b]) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(W, 0);
  ihdr.writeUInt32BE(H, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 2; // colour type: truecolour
  const row = Buffer.alloc(1 + W * 3);
  for (let x = 0; x < W; x++) {
    row[1 + x * 3] = r;
    row[2 + x * 3] = g;
    row[3 + x * 3] = b;
  }
  const raw = Buffer.concat(Array.from({ length: H }, () => row));
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(raw)),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

mkdirSync("public/images", { recursive: true });
for (const [name, color] of Object.entries(images)) {
  writeFileSync(`public/images/${name}.png`, solidPng(color));
  console.log(`public/images/${name}.png`);
}
