import Reveal from './Reveal'
import Section from './Section'
import { education, interests, languages } from '../lib/siteData'

export default function About() {
  return (
    <Section id="about" index="03" label="About" title="A developer from the mountains">
      <Reveal className="space-y-6 text-xl md:text-2xl leading-[1.5] tracking-[-0.01em] max-w-3xl">
        <p>
          I started in 2020 as a front-end developer, turning Figma files into interfaces people could actually
          use. These days I work on the whole thing: the API, the database, the deploy, and the AI features that
          sit on top.
        </p>
        <p className="text-muted">
          Most of my recent work is remote, for teams a long way from Gilgit. That taught me to write things
          down, ask early, and leave code the next person can pick up without calling me. Outside client work I
          like teaching and mentoring, I contribute to open source when I can, and I care about what tech can do
          for people here in Gilgit-Baltistan.
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
