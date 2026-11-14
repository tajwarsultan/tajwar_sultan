import Reveal from './Reveal'
import Section from './Section'
import { education } from '../lib/siteData'

export default function Education() {
  return (
    <Section
      id="education"
      index="04"
      label="Education"
      title="Where I studied"
      intro="A computer science degree from Karakoram International University in Gilgit."
    >
      <Reveal as="article" className="relative rounded-2xl border border-line bg-surface p-7 md:p-10 overflow-hidden">
        <svg
          viewBox="0 0 120 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="absolute -right-4 -top-4 w-40 md:w-52 text-accent opacity-25"
        >
          <path d="M60 28 16 48l44 20 44-20Z" />
          <path d="M34 57v22c0 8 12 14 26 14s26-6 26-14V57" />
          <path d="M104 48v26" />
          <circle cx="104" cy="80" r="4" />
        </svg>

        <p className="label">
          <span className="!text-accent-text">Graduated {education.year}</span>
        </p>
        <h3 className="mt-4 font-display text-3xl md:text-4xl font-semibold tracking-tight leading-[1.08] max-w-xl">
          {education.degreeLong}
        </h3>
        <p className="mt-3 text-lg md:text-xl text-muted">{education.school}</p>

        <dl className="mt-8 pt-6 border-t border-line grid sm:grid-cols-3 gap-x-8 gap-y-5">
          <div>
            <dt className="label">Degree</dt>
            <dd className="mt-1.5 font-medium">{education.degree}</dd>
          </div>
          <div>
            <dt className="label">Campus</dt>
            <dd className="mt-1.5 font-medium">{education.location}</dd>
          </div>
          <div>
            <dt className="label">Completed</dt>
            <dd className="mt-1.5 font-medium">{education.year}</dd>
          </div>
        </dl>
      </Reveal>
    </Section>
  )
}
