import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const source = resolve('.output/public/404/index.html')
const target = resolve('.output/public/404.html')

if (!existsSync(source)) {
  console.error(`Custom 404 source was not generated: ${source}`)
  process.exit(1)
}

copyFileSync(source, target)
console.log(`Copied custom 404 page to ${target}`)