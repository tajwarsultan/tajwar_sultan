import { toolRows } from '../lib/siteData'

/* Two rows of tool logos that drift in opposite directions.
   Logos come from the /tools.svg sprite, so they add nothing to the page's HTML. */
function Row({ tools, reverse }) {
  // The list is rendered twice so the loop has no visible seam; the copy is hidden from screen readers.
  return (
    <div className="marquee" data-reverse={reverse || undefined}>
      {[0, 1].map((copy) => (
        <ul key={copy} className="marquee-track" aria-hidden={copy === 1 || undefined}>
          {tools.map((tool) => (
            <li key={tool.name} className="marquee-item">
              <svg width="22" height="22" fill="currentColor" aria-hidden="true" focusable="false">
                <use href={`/tools.svg#${tool.icon}`} />
              </svg>
              {tool.name}
            </li>
          ))}
        </ul>
      ))}
    </div>
  )
}

export default function ToolMarquee() {
  return (
    <section aria-label="Tools and technologies I work with" className="marquee-wrap">
      {toolRows.map((tools, i) => (
        <Row key={i} tools={tools} reverse={i % 2 === 1} />
      ))}
    </section>
  )
}
