import Image from 'next/image'
import Icon from './Icons'
import { TopoArt } from './Topo'

// For projects without a screenshot, each cover looks at a different part of the contour map.
const windows = [
  { x: 60, y: 60, w: 520 },
  { x: 560, y: 300, w: 560 },
  { x: 760, y: 0, w: 430 },
  { x: 260, y: 440, w: 560 },
  { x: 0, y: 420, w: 480 },
  { x: 420, y: 0, w: 520 },
]

function Cover({ project, index }) {
  return (
    <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-surface border border-line">
      <div className="absolute inset-x-0 top-0 h-9 px-3.5 flex items-center gap-3 border-b border-line bg-raised/70">
        <span className="flex gap-1.5" aria-hidden="true">
          <i className="w-2 h-2 rounded-full bg-line-strong" />
          <i className="w-2 h-2 rounded-full bg-line-strong" />
          <i className="w-2 h-2 rounded-full bg-line-strong" />
        </span>
        <span className="font-mono text-[0.68rem] text-muted truncate">{project.host}</span>
        {project.isNew && (
          <span className="ml-auto shrink-0 font-mono text-[0.62rem] uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent text-on-accent">
            New
          </span>
        )}
      </div>
      {project.shot ? (
        // A real screenshot of the live product
        <div className="absolute inset-0 top-9 overflow-hidden">
          <Image
            src={project.shot}
            alt={`Screenshot of ${project.title}`}
            fill
            sizes="(max-width: 640px) 100vw, 380px"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        </div>
      ) : (
        <>
          <div className="absolute inset-0 top-9 text-accent opacity-55 transition-transform duration-700 ease-out group-hover:scale-110">
            <TopoArt {...windows[index % windows.length]} ratio={0.56} className="w-full h-full" />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-surface via-surface/70 to-transparent" />
          <span className="absolute left-5 bottom-5 right-16 font-display font-semibold tracking-tight text-[clamp(1.5rem,3vw,2.2rem)] leading-none">
            {project.title}
          </span>
        </>
      )}
      <span className="absolute right-4 bottom-4 grid place-items-center w-10 h-10 rounded-full bg-ink text-bg shadow-lg transition-colors group-hover:bg-accent group-hover:text-on-accent">
        <Icon name="arrow" size={16} className="arrow" />
      </span>
    </div>
  )
}

export default function ProjectCard({ project, index = 0, headingLevel: Heading = 'h3' }) {
  return (
    <a href={project.href} target="_blank" rel="noopener noreferrer" className="group flex flex-col h-full">
      <Cover project={project} index={index} />
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <Heading className="font-medium">{project.title}</Heading>
        <span className="label shrink-0">{project.kind}</span>
      </div>
      <p className="mt-1.5 text-muted leading-relaxed">{project.description}</p>
      <p className="mt-auto pt-3 font-mono text-xs text-muted">{project.tags.join('  ·  ')}</p>
    </a>
  )
}
