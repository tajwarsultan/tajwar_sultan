import Reveal from './Reveal'
import { education, languages, projects } from '../lib/siteData'

const facts = [
  { value: '2020', label: 'Writing production code since' },
  { value: String(projects.length), label: 'Live products in the work index below' },
  { value: String(languages.length), label: `Languages spoken: ${languages.map((l) => l.name).join(', ')}` },
  { value: education.year, label: `${education.degree}, ${education.school}` },
]

export default function Facts() {
  return (
    <section aria-label="At a glance">
      <Reveal as="dl" className="shell grid grid-cols-2 lg:grid-cols-4">
        {facts.map((fact, i) => (
          <div
            key={fact.label}
            className={`py-8 md:py-10 pr-6 ${i % 2 ? 'pl-6 border-l border-line' : ''} ${
              i > 0 ? 'lg:pl-6 lg:border-l lg:border-line' : ''
            } ${i > 1 ? 'border-t border-line lg:border-t-0' : ''}`}
          >
            <dd className="font-display text-4xl md:text-5xl font-semibold tracking-tight">{fact.value}</dd>
            <dt className="mt-2 text-sm text-muted leading-snug max-w-[15rem]">{fact.label}</dt>
          </div>
        ))}
      </Reveal>
    </section>
  )
}
