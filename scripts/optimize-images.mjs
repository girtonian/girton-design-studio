#!/usr/bin/env node
/**
 * Optimizes PACMOON-VALID PNG images in /public
 * - Converts to WebP (quality 85) for ~70-80% size reduction
 * - Keeps original PNGs as .bak backup
 * - WebP is supported by all modern browsers and Next.js Image
 */

import { readdir, stat, rename, writeFile } from 'fs/promises'
import { join, extname } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const PUBLIC_DIR = join(__dirname, '..', 'public')
const WEBP_QUALITY = 85

async function getFileSize(path) {
  const s = await stat(path)
  return s.size
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

async function optimizeImages() {
  const sharp = (await import('sharp')).default
  const files = await readdir(PUBLIC_DIR)
  const pngFiles = files.filter(
    (f) => f.startsWith('PACMOON-VALID') && extname(f).toLowerCase() === '.png'
  )

  if (pngFiles.length === 0) {
    console.log('No PACMOON-VALID PNG files found in public/')
    return
  }

  console.log(`Optimizing ${pngFiles.length} images to WebP...\n`)

  let totalOriginal = 0
  let totalOptimized = 0

  for (const file of pngFiles) {
    const inputPath = join(PUBLIC_DIR, file)
    const baseName = file.replace(/\.png$/i, '')
    const webpPath = join(PUBLIC_DIR, `${baseName}.webp`)
    const backupPath = join(PUBLIC_DIR, `${file}.bak`)

    const originalSize = await getFileSize(inputPath)

    const buffer = await sharp(inputPath)
      .webp({ quality: WEBP_QUALITY })
      .toBuffer()

    const optimizedSize = buffer.length

    await rename(inputPath, backupPath)
    await writeFile(webpPath, buffer)

    const reduction = ((1 - optimizedSize / originalSize) * 100).toFixed(1)
    console.log(
      `✓ ${file}\n  ${formatBytes(originalSize)} → ${formatBytes(optimizedSize)} (${reduction}% smaller) → ${baseName}.webp`
    )
    totalOriginal += originalSize
    totalOptimized += optimizedSize
  }

  const saved = totalOriginal - totalOptimized
  console.log(`\nTotal saved: ${formatBytes(saved)} (${((saved / totalOriginal) * 100).toFixed(1)}%)`)
  console.log('\nUse .webp paths in your code (e.g. /PACMOON-VALID_Hoodie_V6.webp)')
  console.log('Original PNGs backed up as *.png.bak - delete when satisfied.')
}

optimizeImages().catch((err) => {
  console.error('Optimization failed:', err)
  process.exit(1)
})
