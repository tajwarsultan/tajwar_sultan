import Image from 'next/image'
import Icon from './Icons'
import LocalTime from './LocalTime'
import ToolMarquee from './ToolMarquee'
import { TopoArt } from './Topo'
import { site, projects, languages, education } from '../lib/siteData'

const facts = [
  { value: '2020', label: 'Writing production code since' },
  { value: String(projects.length), label: 'Live products in the work index below' },
  { value: String(languages.length), label: `Languages spoken: ${languages.map((l) => l.name).join(', ')}` },
  { value: education.year, label: `${education.degree}, ${education.school}` },
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36" aria-label="Introduction">
      <div
        className="absolute inset-0 text-ink opacity-[0.13] pointer-events-none"
        style={{ maskImage: 'radial-gradient(120% 90% at 85% 20%, #000 20%, transparent 72%)' }}
      >
        <TopoArt className="w-full h-full" drift />
      </div>

      <div className="shell relative">
        <div className="grid lg:grid-cols-12 gap-x-10 gap-y-12 items-end">
          <div className="lg:col-span-8">
            <p className="rise label flex items-center gap-2.5 !text-ink" style={{ '--i': 0 }}>
              <span className="pulse" />
              Open to remote roles &amp; freelance projects
            </p>

            <h1
              className="rise display mt-6 text-[clamp(2.6rem,6.5vw,5.25rem)] leading-[0.98]"
              style={{ '--i': 1 }}
            >
              Full-stack developer building SaaS products and{' '}
              <span className="text-accent">AI features</span> that ship.
            </h1>

            <p className="rise mt-7 max-w-[38rem] text-lg md:text-xl leading-relaxed text-muted" style={{ '--i': 2 }}>
              I&apos;m Tajwar Sultan, a senior JavaScript developer in Gilgit, up in the Karakoram mountains of
              northern Pakistan. I build web apps with React, Next.js, Vue and Node.js for startups and product
              teams, most of them a long way from here.
            </p>

            <div className="rise mt-9 flex flex-wrap gap-3" style={{ '--i': 3 }}>
              <a href="#contact" className="btn btn-primary">
                Start a project
                <Icon name="arrow" size={15} className="arrow" />
              </a>
              <a href="#work" className="btn btn-ghost">
                See selected work
                <Icon name="down" size={15} />
              </a>
            </div>
          </div>

          <div className="rise lg:col-span-4 lg:justify-self-end w-full max-w-[19rem]" style={{ '--i': 4 }}>
            <figure className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-surface border border-line">
                <Image
                  src="/tajwar-portrait.jpg"
                  alt="Tajwar Sultan, full-stack developer, in Gilgit, Pakistan"
                  fill
                  priority
                  sizes="(max-width: 1024px) 304px, 304px"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 flex items-start justify-between gap-4 label">
                <span className="flex items-center gap-1.5">
                  <Icon name="pin" size={13} />
                  {site.location}
                </span>
                <span className="text-right">
                  <LocalTime timeZone={site.timeZone} /> PKT
                </span>
              </figcaption>
            </figure>
          </div>
        </div>

        <dl className="mt-16 md:mt-24 grid grid-cols-2 lg:grid-cols-4 border-t border-line">
          {facts.map((fact, i) => (
            <div
              key={fact.label}
              className={`py-6 pr-6 ${i % 2 ? 'pl-6 border-l border-line' : ''} ${
                i > 0 ? 'lg:pl-6 lg:border-l lg:border-line' : ''
              } ${i > 1 ? 'border-t border-line lg:border-t-0' : ''}`}
            >
              <dd className="font-display text-4xl md:text-5xl font-semibold tracking-tight">{fact.value}</dd>
              <dt className="mt-2 text-sm text-muted leading-snug max-w-[15rem]">{fact.label}</dt>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative">
        <ToolMarquee />
      </div>
    </section>
  )
}
