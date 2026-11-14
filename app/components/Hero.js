import Image from 'next/image'
import Link from 'next/link'
import Icon from './Icons'
import LocalTime from './LocalTime'
import ToolMarquee from './ToolMarquee'
import { TopoArt } from './Topo'
import { site, socials } from '../lib/siteData'

/* Slim contact bar above the navigation; it scrolls away with the page. */
function TopBar() {
  return (
    <div className="hidden md:block border-b border-line">
      <div className="shell h-10 flex items-center justify-between text-[0.85rem] text-muted">
        <ul className="flex items-center gap-7">
          <li>
            <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="topbar-link">
              <Icon name="whatsapp" size={14} className="text-accent" />
              {site.whatsappDisplay}
            </a>
          </li>
          <li>
            <a href={`mailto:${site.email}`} className="topbar-link">
              <Icon name="mail" size={15} className="text-accent" />
              {site.email}
            </a>
          </li>
        </ul>
        <ul className="flex items-center gap-6">
          <li>
            <Link href="/blog" className="topbar-link">
              Articles
            </Link>
          </li>
          <li>
            <Link href="/cv" className="topbar-link">
              CV
            </Link>
          </li>
          <li>
            <a href={site.cv} target="_blank" rel="noopener noreferrer" className="topbar-link">
              Résumé PDF
            </a>
          </li>
          <li className="flex items-center gap-4 pl-6 border-l border-line h-5">
            {socials
              .filter((s) => ['linkedin', 'github', 'x', 'instagram', 'facebook', 'youtube'].includes(s.icon))
              .map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="me noopener noreferrer"
                  aria-label={social.label}
                  className="topbar-link"
                >
                  <Icon name={social.icon} size={16} />
                </a>
              ))}
          </li>
        </ul>
      </div>
    </div>
  )
}

const K = ({ children }) => <span className="text-[#8fb8a8]">{children}</span>
const S = ({ children }) => <span className="text-accent">{children}</span>
const N = ({ children }) => <span className="text-[#e6c07b]">{children}</span>

const codeLines = [
  <>
    <span className="text-muted">{'// who you are about to work with'}</span>
  </>,
  <>
    <K>export const</K> tajwar = {'{'}
  </>,
  <>
    {'  '}role: <S>&apos;Senior Full-Stack Developer&apos;</S>,
  </>,
  <>
    {'  '}based: <S>&apos;Gilgit, Pakistan&apos;</S>,
  </>,
  <>
    {'  '}since: <N>2020</N>,
  </>,
  <>
    {'  '}builds: [<S>&apos;SaaS platforms&apos;</S>, <S>&apos;dashboards&apos;</S>, <S>&apos;AI features&apos;</S>],
  </>,
  <>
    {'  '}stack: [<S>&apos;React&apos;</S>, <S>&apos;Next.js&apos;</S>, <S>&apos;Vue&apos;</S>, <S>&apos;Node.js&apos;</S>],
  </>,
  <>
    {'  '}remote: <N>true</N>,
  </>,
  <>
    {'  '}openToWork: <N>true</N>,
  </>,
  <>{'}'}</>,
]

const files = ['about.js', 'work.js', 'stack.js', 'writing.md', 'contact.js']

/* An editor window standing in for a product screenshot: it says who I am in the language I work in. */
function EditorWindow() {
  return (
    <div className="hero-window" aria-hidden="true">
      <div className="flex items-center gap-3 h-11 px-4 border-b border-line bg-raised/60">
        <span className="flex gap-1.5">
          <i className="w-2.5 h-2.5 rounded-full bg-line-strong" />
          <i className="w-2.5 h-2.5 rounded-full bg-line-strong" />
          <i className="w-2.5 h-2.5 rounded-full bg-line-strong" />
        </span>
        <span className="font-mono text-xs text-muted">tajwarsultan.dev</span>
        <span className="ml-auto font-mono text-[0.65rem] uppercase tracking-wider px-2 py-0.5 rounded border border-accent/50 text-accent">
          Open to work
        </span>
      </div>

      <div className="grid grid-cols-[auto_1fr]">
        <ul className="hidden sm:block w-40 py-4 border-r border-line font-mono text-xs text-muted">
          <li className="px-4 pb-2 text-[0.62rem] uppercase tracking-widest opacity-70">Portfolio</li>
          {files.map((file, i) => (
            <li key={file} className={`px-4 py-1.5 ${i === 0 ? 'bg-accent/15 text-ink border-l-2 border-accent' : ''}`}>
              {file}
            </li>
          ))}
        </ul>

        <pre className="py-5 pl-4 pr-6 font-mono text-[0.8rem] md:text-[0.85rem] leading-[1.75] overflow-hidden">
          {codeLines.map((line, i) => (
            <div key={i} className="flex">
              <span className="w-7 shrink-0 text-right pr-3 text-muted opacity-50 select-none">{i + 1}</span>
              <code className="whitespace-pre">{line}</code>
            </div>
          ))}
        </pre>
      </div>

      <div className="flex items-center gap-4 h-9 px-4 border-t border-line font-mono text-[0.68rem] text-muted">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2fa562]" />
          main
        </span>
        <span>JavaScript</span>
        <span className="ml-auto">UTF-8 · UTC+5</span>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <div id="top" className="on-dark hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="absolute inset-0 text-ink opacity-[0.09] pointer-events-none" aria-hidden="true">
        <TopoArt className="w-full h-full" drift />
      </div>

      <TopBar />

      <section className="relative flex-1 flex items-center pt-28 md:pt-32 pb-24 md:pb-28" aria-label="Introduction">
        <div className="shell grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] gap-x-12 gap-y-14 items-center">
          <div>
            <p className="rise flex items-center gap-2.5 text-[0.95rem] text-muted" style={{ '--i': 0 }}>
              <span className="pulse" />
              Full-stack developer · open to remote roles &amp; freelance projects
            </p>

            <h1
              className="rise display mt-6 !font-medium text-[clamp(2.5rem,5.4vw,4.4rem)] leading-[1.02]"
              style={{ '--i': 1 }}
            >
              I build SaaS products and <span className="text-accent">AI features</span> that ship.
            </h1>

            <p className="rise mt-7 max-w-[34rem] text-lg md:text-xl leading-relaxed text-muted" style={{ '--i': 2 }}>
              I&apos;m Tajwar Sultan, a senior JavaScript developer in Gilgit, up in the Karakoram mountains of
              northern Pakistan. React, Next.js, Vue and Node.js, for teams a long way from here.
            </p>

            <div className="rise mt-9 flex flex-wrap items-center gap-x-8 gap-y-4" style={{ '--i': 3 }}>
              <a href="#contact" className="btn btn-accent btn-sharp">
                Start a project
                <Icon name="send" size={16} className="arrow-x" />
              </a>
              <a href="#work" className="hero-link">
                See selected work
                <Icon name="send" size={16} className="arrow-x" />
              </a>
            </div>
          </div>

          <div className="rise relative lg:mr-[-9rem] xl:mr-[-14rem]" style={{ '--i': 4 }}>
            <EditorWindow />
            <figure className="hero-portrait">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-line-strong bg-surface">
                <Image
                  src="/tajwar-portrait.jpg"
                  alt="Tajwar Sultan, full-stack developer, in Gilgit, Pakistan"
                  fill
                  priority
                  sizes="(max-width: 640px) 120px, 176px"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2 label !text-[0.62rem] flex items-center gap-1.5 whitespace-nowrap">
                <Icon name="pin" size={11} />
                Gilgit · <LocalTime timeZone={site.timeZone} /> PKT
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <div className="relative">
        <ToolMarquee />
      </div>
    </div>
  )
}
