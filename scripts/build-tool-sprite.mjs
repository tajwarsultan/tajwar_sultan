// Builds public/tools.svg, the logo sprite used by the tools slider in the hero.
// Run with: npm run sprite   (after adding a tool to `toolRows` in app/lib/siteData.js)
import { writeFileSync } from 'node:fs'
import * as icons from 'simple-icons'
import { toolRows } from '../app/lib/siteData.js'

const symbols = toolRows.flat().map(({ name, icon }) => {
  const key = `si${icon[0].toUpperCase()}${icon.slice(1)}`
  const data = icons[key]
  if (!data) throw new Error(`No logo named "${icon}" for ${name} in simple-icons`)
  return `<symbol id="${icon}" viewBox="0 0 24 24"><path d="${data.path}"/></symbol>`
})

writeFileSync(
  new URL('../public/tools.svg', import.meta.url),
  `<svg xmlns="http://www.w3.org/2000/svg">${symbols.join('')}</svg>\n`
)
console.log(`Wrote ${symbols.length} logos to public/tools.svg`)
