import Icon from './Icons'
import { site } from '../lib/siteData'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="shell py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 label">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>{site.coords} · Gilgit-Baltistan</p>
        <a href="#top" className="flex items-center gap-1.5 hover:text-ink transition-colors">
          Back to top
          <Icon name="down" size={13} className="rotate-180" />
        </a>
      </div>
    </footer>
  )
}
