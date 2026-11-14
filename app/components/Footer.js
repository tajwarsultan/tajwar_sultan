import Link from 'next/link'
import Icon from './Icons'
import LocalTime from './LocalTime'
import Logo from './Logo'
import { TopoArt } from './Topo'
import { posts } from '../lib/posts'
import { navLinks, site, socials } from '../lib/siteData'

const connect = [
  { label: 'WhatsApp', href: `https://wa.me/${site.whatsapp}`, icon: 'whatsapp', rel: 'noopener noreferrer' },
  ...socials.map((social) => ({ ...social, rel: 'me noopener noreferrer' })),
]

export default function Footer() {
  return (
    <footer className="relative border-t border-line overflow-hidden">
      <div
        className="absolute inset-0 text-ink opacity-[0.07] pointer-events-none"
        style={{ maskImage: 'radial-gradient(80% 90% at 100% 0%, #000 10%, transparent 70%)' }}
      >
        <TopoArt x={300} y={0} w={900} className="w-full h-full" />
      </div>

      <div className="shell relative">
        {/* Closing call to action */}
        <div className="py-14 md:py-16 grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-end border-b border-line">
          <div>
            <p className="label flex items-center gap-2.5 !text-ink">
              <span className="pulse" />
              Open to remote roles &amp; freelance projects
            </p>
            <p className="display mt-5 text-[clamp(2rem,5vw,3.75rem)] leading-[1.02] max-w-2xl">
              Got something to build? I&apos;m one message away.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
              <Icon name="whatsapp" size={17} />
              WhatsApp me
            </a>
            <a href={`mailto:${site.email}`} className="btn btn-ghost">
              Email me
              <Icon name="arrow" size={15} className="arrow" />
            </a>
          </div>
        </div>

        {/* Link columns */}
        <div className="py-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1.5fr_1fr]">
          <div>
            <Link href="/#top" className="inline-flex items-center gap-2 font-display font-semibold text-xl tracking-tight">
              <Logo size={28} />
              {site.name}
            </Link>
            <p className="mt-3 text-muted leading-relaxed max-w-[19rem]">
              Full-stack developer building SaaS products and AI features for teams around the world.
            </p>
            <ul className="mt-5 space-y-1.5 label">
              <li className="flex items-center gap-1.5">
                <Icon name="pin" size={13} />
                {site.location}
              </li>
              <li>
                <LocalTime timeZone={site.timeZone} /> PKT · UTC+5
              </li>
            </ul>
          </div>

          <nav aria-label="Footer">
            <h2 className="label">Explore</h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="link text-muted hover:text-ink">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/cv" className="link text-muted hover:text-ink">
                  CV
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="label">Latest writing</h2>
            <ul className="mt-4 space-y-3">
              {posts.slice(0, 4).map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="link text-muted hover:text-ink leading-snug">
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="label">Get in touch</h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href={`mailto:${site.email}`} className="link break-all">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className="link text-muted hover:text-ink">
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link text-muted hover:text-ink"
                >
                  {site.whatsappDisplay} (WhatsApp)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social profiles */}
        <div className="py-7 border-t border-line flex flex-col md:flex-row md:items-center justify-between gap-5">
          <h2 className="label">Find me on</h2>
          <ul className="flex flex-wrap gap-2.5">
            {connect.map((item) => (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel={item.rel} className="social-chip">
                  <Icon name={item.icon} size={17} />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-6 pb-24 border-t border-line flex flex-col sm:flex-row sm:items-center justify-between gap-3 label">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>
            {site.coords} · {site.region}
          </p>
          <a href="#" className="flex items-center gap-1.5 hover:text-ink transition-colors">
            Back to top
            <Icon name="down" size={13} className="rotate-180" />
          </a>
        </div>
      </div>
    </footer>
  )
}
