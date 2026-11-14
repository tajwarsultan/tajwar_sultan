import Icon from './Icons'
import Reveal from './Reveal'
import Section from './Section'
import { experiences, site } from '../lib/siteData'

export default function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      label="Experience"
      title="Where I've worked"
      intro="From front-end specialist to full-stack and AI work, on product teams since 2020."
    >
      <ol>
        {experiences.map((job, i) => (
          <Reveal
            as="li"
            key={job.company}
            className={`grid md:grid-cols-[9.5rem_1fr] gap-x-8 gap-y-3 py-9 ${
              i === 0 ? 'pt-0' : 'border-t border-line'
            }`}
          >
            <div className="label pt-1.5 flex md:flex-col gap-x-3 gap-y-1.5">
              <span className={i === 0 ? '!text-accent-text' : ''}>{job.period}</span>
              <span>{job.mode}</span>
            </div>
            <div>
              <h3 className="font-display text-2xl md:text-[1.75rem] font-semibold tracking-tight leading-tight">
                {job.company}
              </h3>
              <p className="mt-1 text-muted">{job.role}</p>
              <ul className="mt-5 space-y-2.5 max-w-2xl">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="relative pl-5 leading-relaxed">
                    <span className="absolute left-0 top-[0.7em] w-2 h-px bg-accent" aria-hidden="true" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <p className="mt-5 font-mono text-xs text-muted">{job.tech.join('  ·  ')}</p>
            </div>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-4 pt-8 border-t border-line">
        <a href={site.cv} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
          Download full résumé (PDF)
          <Icon name="arrow" size={15} className="arrow" />
        </a>
      </Reveal>
    </Section>
  )
}
