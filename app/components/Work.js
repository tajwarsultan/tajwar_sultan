import Link from 'next/link'
import Icon from './Icons'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'
import Section from './Section'
import { projects } from '../lib/siteData'

/* Home page: four featured projects. The full list lives on /projects. */
export default function Work() {
  const featured = projects.filter((p) => p.featured).slice(0, 4)

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
            <ProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-12 pt-8 border-t border-line flex flex-wrap items-center justify-between gap-4">
        <p className="text-muted">More work, with screenshots and links, is on the projects page.</p>
        <Link href="/projects" className="btn btn-primary">
          View all projects
          <Icon name="arrow" size={15} className="arrow" />
        </Link>
      </Reveal>
    </Section>
  )
}
