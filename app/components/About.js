import Reveal from './Reveal'
import Section from './Section'
import { education, interests, languages } from '../lib/siteData'

export default function About() {
  return (
    <Section id="about" index="03" label="About" title="A developer from the mountains">
      <Reveal className="space-y-6 text-xl md:text-2xl leading-[1.5] tracking-[-0.01em] max-w-3xl">
        <p>
          I&apos;ve been building for the web since 2020 — first as a front-end developer turning designs into
          fast, accessible interfaces, and today across the whole stack: APIs, databases, cloud deployments and
          the AI integrations that sit on top of them.
        </p>
        <p className="text-muted">
          Most of my work is remote, for startups and product teams far from home. That has taught me to
          communicate clearly and write code the next developer can pick up.
          Away from client work I care about teaching and mentoring, open source, and community development here
          in Gilgit.
        </p>
      </Reveal>

      <Reveal className="mt-14 grid sm:grid-cols-3 gap-x-8 gap-y-10 pt-8 border-t border-line">
        <div>
          <h3 className="label">Education</h3>
          <p className="mt-4 font-medium">{education.degree}</p>
          <p className="mt-1 text-muted leading-relaxed">
            {education.school}
            <br />
            Graduated {education.year}
          </p>
        </div>
        <div>
          <h3 className="label">Languages</h3>
          <ul className="mt-4 space-y-2">
            {languages.map((lang) => (
              <li key={lang.name} className="flex items-baseline justify-between gap-4 max-w-[14rem]">
                <span className="font-medium">{lang.name}</span>
                <span className="text-sm text-muted">{lang.level}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="label">Interests</h3>
          <ul className="mt-4 space-y-2">
            {interests.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  )
}
