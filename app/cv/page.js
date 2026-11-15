import Link from 'next/link'
import { education, experiences, interests, languages, projects, site, socials, stack, summary } from '../lib/siteData'

export const metadata = {
  title: 'CV',
  description: 'Curriculum vitae of Tajwar Sultan, senior full-stack developer.',
  alternates: { canonical: '/cv' },
  openGraph: {
    type: 'profile',
    url: '/cv',
    title: 'Tajwar Sultan — CV',
    description: 'Senior full-stack developer: experience, projects, skills and education.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/opengraph-image'] },
}

// The PDF in /public is printed from this page, so the two never drift apart.
const light = {
  '--bg': '#ffffff',
  '--ink': '#171612',
  '--muted': '#5d584e',
  '--line': 'rgba(23,22,18,0.16)',
  '--accent': '#c2530f',
  '--accent-text': '#b0480a',
}

function Heading({ children }) {
  return (
    <h2 className="cv-heading">
      <span>{children}</span>
    </h2>
  )
}

export default function CV() {
  const featured = projects.filter((p) => p.featured)
  const github = socials.find((s) => s.label === 'GitHub')
  const linkedin = socials.find((s) => s.label === 'LinkedIn')

  return (
    <main className="cv-page" style={light}>
      <p className="cv-toolbar">
        <Link href="/" className="link">← Back to site</Link>
        <a href={site.cv} download className="btn btn-primary !min-h-9 !px-4 text-sm">Download PDF</a>
      </p>

      <article className="cv-sheet">
        <header className="cv-header">
          <div>
            <h1 className="cv-name">{site.name}</h1>
            <p className="cv-role">Senior Full-Stack / JavaScript Developer</p>
          </div>
          <ul className="cv-contact">
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><a href={site.phoneHref}>{site.phone}</a></li>
            <li><a href={`https://wa.me/${site.whatsapp}`}>{site.whatsappDisplay} (WhatsApp)</a></li>
            <li>{site.location} · UTC+5</li>
            <li><a href={site.url}>{site.host}</a></li>
            <li><a href={github.href}>github.com/{github.handle}</a></li>
            <li><a href={linkedin.href}>linkedin.com/{linkedin.handle}</a></li>
          </ul>
        </header>

        <section>
          <Heading>Summary</Heading>
          <p>{summary}</p>
        </section>

        <section>
          <Heading>Experience</Heading>
          {experiences.map((job) => (
            <div key={job.company} className="cv-item">
              <div className="cv-row">
                <h3>{job.company}</h3>
                <span className="cv-meta">{job.period} · {job.mode}</span>
              </div>
              <p className="cv-sub">{job.role}</p>
              <ul className="cv-bullets">
                {job.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <Heading>Selected projects</Heading>
          <div className="cv-projects">
            {featured.map((p) => (
              <div key={p.title}>
                <div className="cv-row">
                  <h3>{p.title}</h3>
                  <a href={p.href} className="cv-meta">{p.href.replace(/^https?:\/\/(www\.)?/, '').replace(/\/.*$/, '')}</a>
                </div>
                <p>{p.description.split(/[.:]/)[0]}.</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <Heading>Skills</Heading>
          <dl className="cv-skills">
            {stack.map((group) => (
              <div key={group.title}>
                <dt>{group.title}</dt>
                <dd>{group.items.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </section>

        <div className="cv-columns">
          <section>
            <Heading>Education</Heading>
            <p><strong>{education.degree}</strong></p>
            <p>{education.school}, {education.year}</p>
          </section>
          <section>
            <Heading>Languages</Heading>
            <p>{languages.map((l) => `${l.name} (${l.level.toLowerCase()})`).join(' · ')}</p>
          </section>
          <section>
            <Heading>Interests</Heading>
            <p>{interests.join(' · ')}</p>
          </section>
        </div>
      </article>
    </main>
  )
}
