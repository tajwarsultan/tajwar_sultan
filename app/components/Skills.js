import RevealOnScroll from './RevealOnScroll'
import { skillCategories, allTechnologies } from '../lib/siteData'

export default function Skills() {
  return (
    <RevealOnScroll>
      <section id="skills" className="py-16 md:py-20 bg-background-50" aria-label="Technical skills">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold mb-4">
              Tech Stack
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-950">
              Technical Skills Matrix
            </h2>
            <p className="mt-3 text-base text-foreground-500 max-w-lg mx-auto">
              A comprehensive overview of technologies and tools I work with daily
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((cat) => (
              <div
                key={cat.id}
                className="bg-background-50 border border-background-200/60 rounded-2xl p-6 hover:border-primary-200/60 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                    <i className={`${cat.icon} text-primary-600 text-xl`} aria-hidden />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground-950">{cat.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {cat.skills.map((name) => (
                    <li key={name}>
                      <span className="inline-block px-3 py-1.5 rounded-lg bg-background-100 text-foreground-700 text-xs font-medium border border-background-200/50">
                        {name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 md:p-8 bg-background-50 border border-background-200/60 rounded-2xl">
            <h3 className="font-heading font-bold text-sm text-foreground-500 uppercase tracking-wider mb-4">
              All Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {[...new Set(allTechnologies)].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full bg-background-100 text-foreground-600 text-xs font-medium border border-background-200/40 hover:bg-primary-50 hover:text-primary-700 hover:border-primary-200 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  )
}
