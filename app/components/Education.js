import RevealOnScroll from './RevealOnScroll'
import { certifications } from '../lib/siteData'

export default function Education() {
  return (
    <RevealOnScroll>
      <section
        id="education"
        className="py-16 md:py-20 bg-background-100"
        aria-label="Education and certifications"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold mb-4">
              Credentials
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-950">
              Education &amp; Certifications
            </h2>
            <p className="mt-3 text-base text-foreground-500 max-w-lg mx-auto">
              Academic foundation and industry-recognized credentials
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            <article className="lg:col-span-5 flex flex-col">
              <div className="relative flex-1 rounded-2xl border border-primary-200/80 bg-gradient-to-br from-primary-50 via-background-50 to-background-50 p-6 md:p-8 shadow-sm overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 text-primary-700 text-xs font-semibold uppercase tracking-wider mb-6">
                    <i className="ri-graduation-cap-line text-lg" aria-hidden />
                    Education
                  </div>
                  <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground-950 leading-tight">
                    Bachelor&apos;s Degree
                  </h3>
                  <p className="mt-3 text-base font-medium text-foreground-700">
                    Karakoram International University
                  </p>
                  <dl className="mt-6 space-y-3">
                    <div className="flex items-center gap-3 text-sm text-foreground-600">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-100 text-primary-600 shrink-0">
                        <i className="ri-calendar-check-line" aria-hidden />
                      </span>
                      <div>
                        <dt className="text-xs text-foreground-400 font-medium">Graduation</dt>
                        <dd className="font-medium text-foreground-800">2025</dd>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-foreground-600">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-100 text-primary-600 shrink-0">
                        <i className="ri-map-pin-line" aria-hidden />
                      </span>
                      <div>
                        <dt className="text-xs text-foreground-400 font-medium">Location</dt>
                        <dd className="font-medium text-foreground-800">Gilgit-Baltistan, Pakistan</dd>
                      </div>
                    </div>
                  </dl>
                </div>
              </div>
            </article>

            <div className="lg:col-span-7 flex flex-col">
              <div className="flex items-center justify-between gap-4 mb-4 px-1">
                <h3 className="font-heading font-bold text-lg text-foreground-950 flex items-center gap-2">
                  <i className="ri-award-line text-primary-600" aria-hidden />
                  Certifications
                </h3>
                <span className="text-xs font-medium text-foreground-500 bg-background-50 border border-background-200/60 px-2.5 py-1 rounded-full">
                  {certifications.length} credentials
                </span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
                {certifications.map((cert) => (
                  <li key={cert}>
                    <div className="group h-full rounded-xl border border-background-200/60 bg-background-50 px-4 py-4 flex gap-3 items-start transition-all hover:border-primary-200 hover:shadow-sm hover:bg-white">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-600 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                        <i className="ri-verified-badge-line text-base" aria-hidden />
                      </span>
                      <p className="text-sm font-medium text-foreground-800 leading-snug pt-0.5">{cert}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  )
}
