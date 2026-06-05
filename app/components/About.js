import RevealOnScroll from './RevealOnScroll'
import { aboutTags, achievements } from '../lib/siteData'

export default function About() {
  return (
    <RevealOnScroll>
      <section id="about" className="relative py-16 md:py-20 bg-secondary-50" aria-label="About and key achievements">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            <div className="flex-1">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-100 text-secondary-700 text-xs font-semibold mb-5">
                About Me
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-950 leading-tight">
                Building the future,
                <br />
                one line of code at a time
              </h2>
              <p className="mt-5 text-base text-foreground-600 leading-relaxed max-w-lg">
                I am a passionate software engineer who thrives at the intersection of frontend craftsmanship
                and backend engineering. From architecting micro-frontend systems to deploying AI-powered
                applications on the cloud, I bring ideas to life with clean, scalable, and performant code. My
                work spans SaaS platforms, enterprise dashboards, and AI-driven products serving users worldwide.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {aboutTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full bg-background-50 text-foreground-600 text-xs font-medium border border-background-200/60 hover:bg-secondary-100 hover:text-secondary-700 hover:border-secondary-300 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <h3 className="font-heading font-bold text-lg text-foreground-950 mb-5 flex items-center gap-2">
                <i className="ri-trophy-line text-accent-500" aria-hidden />
                Key Achievements
              </h3>
              <div className="space-y-3">
                {achievements.map((text, i) => (
                  <div
                    key={text}
                    className="flex items-start gap-3 bg-background-50 rounded-xl p-4 border border-background-200/60"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center text-xs font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-sm text-foreground-700 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  )
}
