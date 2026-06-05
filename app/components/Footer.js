import { navLinks } from '../lib/siteData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-foreground-950 text-background-50" aria-label="Site footer">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <a href="#" className="font-heading font-bold text-3xl text-background-50 tracking-tight">
              Tajwar<span className="text-primary-400">.</span>
            </a>
            <p className="mt-4 text-sm text-foreground-200 leading-relaxed max-w-xs">
              Senior Full Stack Developer &amp; AI Engineer building the future through code. Available for
              freelance and full-time opportunities worldwide.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://github.com/tajwarsultan"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-9 h-9 rounded-full border border-foreground-700 flex items-center justify-center text-foreground-300 hover:text-background-50 hover:border-background-50 transition-colors"
                aria-label="GitHub"
              >
                <i className="ri-github-fill" aria-hidden />
              </a>
              <a
                href="https://www.linkedin.com/in/tajwar-sultan/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-9 h-9 rounded-full border border-foreground-700 flex items-center justify-center text-foreground-300 hover:text-background-50 hover:border-background-50 transition-colors"
                aria-label="LinkedIn"
              >
                <i className="ri-linkedin-fill" aria-hidden />
              </a>
              <a
                href="https://www.upwork.com/freelancers/tajwarsultan"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-9 h-9 rounded-full border border-foreground-700 flex items-center justify-center text-foreground-300 hover:text-background-50 hover:border-background-50 transition-colors"
                aria-label="Upwork"
              >
                <i className="ri-briefcase-4-line" aria-hidden />
              </a>
              <a
                href="https://www.fiverr.com/tajwarsultan"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-9 h-9 rounded-full border border-foreground-700 flex items-center justify-center text-foreground-300 hover:text-background-50 hover:border-background-50 transition-colors"
                aria-label="Fiverr"
              >
                <i className="ri-store-2-line" aria-hidden />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-xs text-foreground-400 uppercase tracking-widest mb-5">
              Contact
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-foreground-400 mb-1">Email</p>
                <a href="mailto:tajwar.sultan00@gmail.com" className="text-sm text-background-50 hover:text-primary-300 transition-colors">
                  tajwar.sultan00@gmail.com
                </a>
              </div>
              <div>
                <p className="text-xs text-foreground-400 mb-1">Phone</p>
                <a href="tel:+923436140308" className="text-sm text-background-50 hover:text-primary-300 transition-colors">
                  +92 343 6140308
                </a>
              </div>
              <div>
                <p className="text-xs text-foreground-400 mb-1">Location</p>
                <p className="text-sm text-background-50">Gilgit-Baltistan, Pakistan</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-xs text-foreground-400 uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <div className="space-y-2.5">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <a href={link.href} className="text-sm text-foreground-300 hover:text-background-50 transition-colors">
                    {link.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-foreground-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-foreground-400">© {year} Tajwar Sultan. All rights reserved.</p>
          <p className="text-xs text-foreground-500">Built with passion in Gilgit-Baltistan, Pakistan</p>
        </div>
      </div>
    </footer>
  )
}
