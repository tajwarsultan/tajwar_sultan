import fs from 'node:fs'
import path from 'node:path'

// Articles are Markdown files in /content/blog, listed newest first by their `date`.
const dir = path.join(process.cwd(), 'content', 'blog')

function parse(file) {
  const raw = fs.readFileSync(path.join(dir, file), 'utf8').replace(/\r\n/g, '\n')
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) throw new Error(`Missing front matter in ${file}`)

  const meta = {}
  for (const line of match[1].split('\n')) {
    const at = line.indexOf(':')
    if (at > 0) meta[line.slice(0, at).trim()] = line.slice(at + 1).trim()
  }

  const body = match[2].trim()
  const words = body.split(/\s+/).length

  return {
    slug: file.replace(/^\d+-/, '').replace(/\.md$/, ''),
    title: meta.title,
    description: meta.description,
    date: meta.date,
    art: meta.art,
    tags: (meta.tags ?? '').split(',').map((t) => t.trim()).filter(Boolean),
    minutes: Math.max(1, Math.round(words / 220)),
    body,
  }
}

export const posts = fs
  .readdirSync(dir)
  .filter((f) => f.endsWith('.md'))
  .sort()
  .map(parse)
  // newest first; the filename number breaks ties
  .sort((a, b) => b.date.localeCompare(a.date))

export const getPost = (slug) => posts.find((p) => p.slug === slug)

export const formatDate = (date) =>
  new Date(`${date}T00:00:00Z`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
