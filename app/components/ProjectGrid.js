'use client'

import { useState } from 'react'
import ProjectCard from './ProjectCard'

/* The full project list with category filters. */
export default function ProjectGrid({ projects, categories }) {
  const [active, setActive] = useState('All')
  const shown = active === 'All' ? projects : projects.filter((p) => p.category === active)
  const count = (name) => (name === 'All' ? projects.length : projects.filter((p) => p.category === name).length)

  return (
    <>
      <div role="group" aria-label="Filter projects by type" className="flex flex-wrap gap-2.5">
        {['All', ...categories].map((name) => (
          <button
            key={name}
            type="button"
            aria-pressed={active === name}
            onClick={() => setActive(name)}
            className="filter-chip"
          >
            {name}
            <span className="filter-count">{count(name)}</span>
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {shown.length} projects
      </p>

      <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-12">
        {shown.map((project, i) => (
          <li key={project.title} className="chat-bubble">
            <ProjectCard project={project} index={i} headingLevel="h2" />
          </li>
        ))}
      </ul>
    </>
  )
}
