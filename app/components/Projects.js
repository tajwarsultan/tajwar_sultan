import RevealOnScroll from './RevealOnScroll'
import { projects } from '../lib/siteData'

export default function Projects() {
  return (
    <RevealOnScroll>
      <section id="projects" className="py-16 md:py-20 bg-background-50" aria-label="Project portfolio">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-100 text-secondary-700 text-xs font-semibold mb-4">
              Portfolio
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-950">Featured Projects</h2>
            <p className="mt-3 text-base text-foreground-500 max-w-lg mx-auto">
              A selection of production applications built for clients worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-background-200/60 bg-background-50 overflow-hidden transition-all hover:-translate-y-1"
              >
                <div className="relative h-44 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/10 transition-colors duration-300" />
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background-50/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                    <i className="ri-arrow-right-up-line text-foreground-700" aria-hidden />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-base text-foreground-950 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-foreground-500 leading-relaxed line-clamp-2">{project.description}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium text-secondary-700 bg-secondary-100/80 px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </RevealOnScroll>
  )
}
