import Image from 'next/image'
import Icon from './Icons'
import Reveal from './Reveal'
import Section from './Section'
import { TopoArt } from './Topo'
import { projects } from '../lib/siteData'

// Each cover looks at a different part of the same terrain.
const windows = [
  { x: 60, y: 60, w: 520 },
  { x: 560, y: 300, w: 560 },
  { x: 760, y: 0, w: 430 },
  { x: 260, y: 440, w: 560 },
  { x: 0, y: 420, w: 480 },
  { x: 420, y: 0, w: 520 },
]

function Cover({ project, view }) {
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
            <TopoArt {...view} ratio={0.56} className="w-full h-full" />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-surface via-surface/70 to-transparent" />
          <span className="absolute left-5 bottom-5 font-display font-semibold tracking-tight text-[clamp(1.7rem,3.6vw,2.5rem)] leading-none">
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

export default function Work() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <Section
      id="work"
      index="01"
      label="Work"
      title="Selected work"
      intro="Things I've built, or helped build, that are live right now. Click any one and you land on the real product."
    >
      <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-10">
        {featured.map((project, i) => (
          <Reveal as="li" key={project.title} delay={(i % 2) * 90}>
            <a href={project.href} target="_blank" rel="noopener noreferrer" className="group block">
              <Cover project={project} view={windows[i % windows.length]} />
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <h3 className="font-medium">{project.title}</h3>
                <span className="label shrink-0">{project.kind}</span>
              </div>
              <p className="mt-1.5 text-muted leading-relaxed">{project.description}</p>
              <p className="mt-3 font-mono text-xs text-muted">{project.tags.join('  ·  ')}</p>
            </a>
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-16">
        <h3 className="label pb-4 border-b border-line-strong">More projects</h3>
        <ul>
          {rest.map((project) => (
            <li key={project.title} className="border-b border-line">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-[1fr_auto] md:grid-cols-[7.5rem_11rem_1fr_auto] gap-x-6 gap-y-1 items-center py-4 -mx-3 px-3 rounded-lg transition-colors hover:bg-surface"
              >
                <span className="hidden md:block relative aspect-[16/10] rounded-md overflow-hidden border border-line bg-surface">
                  {project.shot ? (
                    <Image src={project.shot} alt="" fill sizes="120px" className="object-cover object-top" />
                  ) : (
                    <span className="absolute inset-0 grid place-items-center font-display font-semibold text-muted">
                      {project.title[0]}
                    </span>
                  )}
                </span>
                <span className="font-display text-xl font-semibold tracking-tight">{project.title}</span>
                <span className="row-start-2 col-span-2 md:row-start-auto md:col-span-1 text-muted leading-relaxed">
                  {project.description}
                  <span className="block mt-1 font-mono text-xs">{project.tags.join('  ·  ')}</span>
                </span>
                <span className="flex items-center gap-2 label group-hover:text-accent-text transition-colors">
                  <span className="hidden sm:inline">{project.kind}</span>
                  <Icon name="arrow" size={15} className="arrow" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
