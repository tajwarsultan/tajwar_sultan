import { toolRows } from '../lib/siteData'

const tools = toolRows.flat()

/* A single row of tool logos drifting across the foot of the hero.
   Logos come from the /tools.svg sprite, so they add nothing to the page's HTML. */
export default function ToolMarquee() {
  return (
    <section aria-label="Tools and technologies I work with" className="marquee-wrap">
      <p className="text-center text-[0.95rem] text-muted px-5">The tools I build, ship and run products with</p>
      {/* The list is rendered twice so the loop has no visible seam; the copy is hidden from screen readers. */}
      <div className="marquee">
        {[0, 1].map((copy) => (
          <ul key={copy} className="marquee-track" aria-hidden={copy === 1 || undefined}>
            {tools.map((tool) => (
              <li key={tool.name} className="marquee-item">
                <svg width="30" height="30" fill="currentColor" aria-hidden="true" focusable="false">
                  <use href={`/tools.svg#${tool.icon}`} />
                </svg>
                {tool.name}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  )
}
