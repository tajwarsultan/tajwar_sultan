import { Fragment } from 'react'

/* A small Markdown renderer covering what the articles use:
   ## headings, paragraphs, - lists, fenced code, `code`, **bold** and [links](url). */

function inline(text) {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g)
  return parts.map((part, i) => {
    if (part.startsWith('`')) return <code key={i}>{part.slice(1, -1)}</code>
    if (part.startsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (link) return <a key={i} href={link[2]}>{link[1]}</a>
    return <Fragment key={i}>{part}</Fragment>
  })
}

function toBlocks(source) {
  const lines = source.split('\n')
  const blocks = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith('```')) {
      const lang = line.slice(3).trim()
      const code = []
      i++
      while (i < lines.length && !lines[i].startsWith('```')) code.push(lines[i++])
      i++
      blocks.push({ type: 'code', lang, text: code.join('\n') })
    } else if (line.startsWith('## ')) {
      blocks.push({ type: 'h2', text: line.slice(3) })
      i++
    } else if (line.startsWith('- ')) {
      const items = []
      while (i < lines.length && lines[i].startsWith('- ')) items.push(lines[i++].slice(2))
      blocks.push({ type: 'ul', items })
    } else if (line.trim() === '') {
      i++
    } else {
      const text = []
      while (i < lines.length && lines[i].trim() !== '' && !/^(```|## |- )/.test(lines[i])) text.push(lines[i++])
      blocks.push({ type: 'p', text: text.join(' ') })
    }
  }
  return blocks
}

export default function Markdown({ source }) {
  return (
    <div className="prose">
      {toBlocks(source).map((block, i) => {
        if (block.type === 'h2') return <h2 key={i}>{inline(block.text)}</h2>
        if (block.type === 'ul')
          return (
            <ul key={i}>
              {block.items.map((item, j) => (
                <li key={j}>{inline(item)}</li>
              ))}
            </ul>
          )
        if (block.type === 'code')
          return (
            <pre key={i} data-lang={block.lang || undefined}>
              <code>{block.text}</code>
            </pre>
          )
        return <p key={i}>{inline(block.text)}</p>
      })}
    </div>
  )
}
