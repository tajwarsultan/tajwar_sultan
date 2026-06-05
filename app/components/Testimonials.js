import RevealOnScroll from './RevealOnScroll'
import { testimonials } from '../lib/siteData'

export default function Testimonials() {
  return (
    <RevealOnScroll>
      <section id="testimonials" className="py-16 md:py-20 bg-background-100" aria-label="Client testimonials">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent-100 text-accent-700 text-xs font-semibold mb-4">
              Testimonials
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-950">What Clients Say</h2>
            <p className="mt-3 text-base text-foreground-500 max-w-lg mx-auto">
              Feedback from founders, CTOs, and product leaders across three continents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div
                key={t.name + t.location}
                className="group bg-background-50 rounded-2xl border border-background-200/60 p-6 flex flex-col hover:border-accent-200/70 transition-colors"
              >
                <div className="flex gap-1 mb-4" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <i key={i} className="ri-star-fill text-accent-400 text-xs" />
                  ))}
                </div>
                <blockquote className="flex-1">
                  <p className="text-sm text-foreground-600 leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
                </blockquote>
                <div className="mt-5 pt-4 border-t border-background-200/50 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-700 font-bold text-sm font-heading">{t.initial}</span>
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-foreground-900">{t.name}</div>
                    <div className="text-xs text-foreground-500">{t.role}</div>
                    <div className="text-[10px] text-foreground-400 mt-0.5 flex items-center gap-1">
                      <i className="ri-map-pin-line" aria-hidden />
                      {t.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </RevealOnScroll>
  )
}
