#!/usr/bin/env node
/**
 * Optimizes INK apparel images: converts PNG to WebP with quality 85
 * Run: node scripts/optimize-ink-images.mjs
 */
import sharp from 'sharp'
import { readdir, stat } from 'fs/promises'
import { join, extname, basename } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '..', 'public')

const INK_PREFIXES = ['INK-ONBTC', 'INK-ORD', 'INK-LEGACY']

async function getInkImages() {
  const files = await readdir(publicDir)
  const images = []
  for (const file of files) {
    const matches = INK_PREFIXES.some((p) => file.startsWith(p))
    if (matches && /\.(png|jpg|jpeg|webp)$/i.test(file)) {
      const fullPath = join(publicDir, file)
      const s = await stat(fullPath)
      if (s.isFile()) images.push(fullPath)
    }
  }
  return images
}

async function optimizeImage(inputPath) {
  const ext = extname(inputPath).toLowerCase()
  const baseName = basename(inputPath, ext)
  const outputPath = join(publicDir, `${baseName}.webp`)

  const meta = await sharp(inputPath).metadata()
  const width = Math.min(meta.width ?? 1920, 1920)

  await sharp(inputPath)
    .resize(width, null, { withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(outputPath)

  const inputStat = await stat(inputPath)
  const outputStat = await stat(outputPath)
  const saved = ((1 - outputStat.size / inputStat.size) * 100).toFixed(1)
  console.log(`  ${baseName}: ${(inputStat.size / 1024).toFixed(1)}KB → ${(outputStat.size / 1024).toFixed(1)}KB (${saved}% smaller)`)
  return outputPath
}

async function main() {
  const images = await getInkImages()
  if (images.length === 0) {
    console.log('No INK images found in public/')
    return
  }
  console.log(`Optimizing ${images.length} INK image(s)...`)
  for (const img of images) {
    await optimizeImage(img)
  }
  console.log('Done.')
}

main().catch(console.error)
