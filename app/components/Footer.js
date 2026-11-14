import Link from 'next/link'
import Icon from './Icons'
import Logo from './Logo'
import { navLinks, site, socials } from '../lib/siteData'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="shell py-12 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="flex items-center gap-2 font-display font-semibold text-lg tracking-tight">
            <Logo size={26} />
            {site.name}
          </p>
          <p className="mt-3 text-muted leading-relaxed max-w-xs">
            Full-stack developer in {site.location}. Open to remote roles and freelance projects.
          </p>
          <a href={`mailto:${site.email}`} className="link inline-block mt-3">
            {site.email}
          </a>
        </div>

        <nav aria-label="Footer">
          <h2 className="label">Site</h2>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="link text-muted hover:text-ink">
                  {link.label}
                </a>
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
          <h2 className="label">Elsewhere</h2>
          <ul className="mt-4 space-y-2">
            {socials.map((social) => (
              <li key={social.label}>
                <a href={social.href} target="_blank" rel="me noopener noreferrer" className="link text-muted hover:text-ink">
                  {social.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="link text-muted hover:text-ink"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="shell pt-6 pb-24 flex flex-col sm:flex-row sm:items-center justify-between gap-3 label">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>
            {site.coords} · {site.region}
          </p>
          <a href="#top" className="flex items-center gap-1.5 hover:text-ink transition-colors">
            Back to top
            <Icon name="down" size={13} className="rotate-180" />
          </a>
        </div>
      </div>
    </footer>
  )
}
