#!/usr/bin/env node
/**
 * Optimizes animated GIFs by converting to WebP (smaller file size).
 * Usage: node scripts/optimize-gif.mjs [path/to/file.gif]
 *   - With path: optimizes the specified GIF
 *   - No path: optimizes all INK*.gif files in public/
 * Run: npm run optimize:gif
 */
import gif2webp from 'gif2webp-bin'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import { readdir, stat } from 'fs/promises'
import { join, extname, basename, resolve } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const execFileAsync = promisify(execFile)
const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '..', 'public')

const INK_GIF_PATTERNS = [/^INK-/i, /^inked-hero/i, /^Inked-hero/i]

async function getInkGifs() {
  const files = await readdir(publicDir)
  const gifs = []
  for (const file of files) {
    if (!/\.gif$/i.test(file)) continue
    const matches = INK_GIF_PATTERNS.some((p) => p.test(file))
    if (matches) {
      const fullPath = join(publicDir, file)
      const s = await stat(fullPath)
      if (s.isFile()) gifs.push(fullPath)
    }
  }
  return gifs
}

async function optimizeGif(inputPath, quality = 85) {
  const ext = extname(inputPath).toLowerCase()
  const baseName = basename(inputPath, ext)
  const dir = dirname(inputPath)
  const outputPath = join(dir, `${baseName}.webp`)

  await execFileAsync(gif2webp, [
    inputPath,
    '-o', outputPath,
    '-q', String(quality),
    '-m', '6', // max compression
  ])

  const inputStat = await stat(inputPath)
  const outputStat = await stat(outputPath)
  const saved = ((1 - outputStat.size / inputStat.size) * 100).toFixed(1)
  console.log(`  ${baseName}: ${(inputStat.size / 1024).toFixed(1)}KB → ${(outputStat.size / 1024).toFixed(1)}KB (${saved}% smaller)`)
  return outputPath
}

async function main() {
  const argPath = process.argv[2]

  let gifs = []
  if (argPath) {
    const resolved = resolve(process.cwd(), argPath)
    const s = await stat(resolved).catch(() => null)
    if (!s?.isFile() || !/\.gif$/i.test(resolved)) {
      console.error('Usage: node scripts/optimize-gif.mjs [path/to/file.gif]')
      process.exit(1)
    }
    gifs = [resolved]
  } else {
    gifs = await getInkGifs()
  }

  if (gifs.length === 0) {
    console.log('No GIF files found. Add INK*.gif or inked-hero*.gif to public/, or pass a path:')
    console.log('  npm run optimize:gif -- public/INK-Merch.gif')
    return
  }

  console.log(`Optimizing ${gifs.length} GIF(s)...`)
  for (const gif of gifs) {
    await optimizeGif(gif)
  }
  console.log('Done.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
