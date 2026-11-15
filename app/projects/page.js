import ProjectGrid from '../components/ProjectGrid'
import { projectCategories, projects } from '../lib/siteData'
import { projectsJsonLd, toJsonLd } from '../lib/structuredData'

const description = `All ${projects.length} projects by Tajwar Sultan: AI products, SaaS platforms, dashboards and websites, each with a screenshot and a link to the live site.`

export const metadata = {
  title: 'Projects: SaaS platforms, AI products and websites',
  description,
  alternates: { canonical: '/projects' },
  openGraph: {
    type: 'website',
    url: '/projects',
    title: 'Projects by Tajwar Sultan',
    description,
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/opengraph-image'] },
}

export default function Projects() {
  return (
    <div className="shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(projectsJsonLd) }} />
      <header className="max-w-3xl">
        <p className="label">Projects</p>
        <h1 className="display mt-4 text-[clamp(2.6rem,6.5vw,5rem)] leading-[0.98]">Everything I&apos;ve shipped</h1>
        <p className="mt-6 text-lg md:text-xl leading-relaxed text-muted">
          {projects.length} projects, from AI products and SaaS platforms to company websites. Every card opens the
          live site.
        </p>
      </header>

      <div className="mt-12 pt-10 border-t border-line">
        <ProjectGrid projects={projects} categories={projectCategories} />
      </div>
    </div>
  )
}
