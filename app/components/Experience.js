'use client'

import { useState } from 'react'
import RevealOnScroll from './RevealOnScroll'
import { experiences } from '../lib/siteData'

function ModeBadge({ mode, modeClass }) {
  const classes =
    modeClass === 'accent'
      ? 'bg-accent-100 text-accent-700'
      : 'bg-secondary-100 text-secondary-700'
  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${classes}`}>{mode}</span>
  )
}

export default function Experience() {
  const defaultOpen = experiences.findIndex((e) => e.defaultOpen)
  const [openIndex, setOpenIndex] = useState(defaultOpen >= 0 ? defaultOpen : 0)

  return (
    <RevealOnScroll>
      <section id="experience" className="py-16 md:py-20 bg-background-100" aria-label="Professional experience">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent-100 text-accent-700 text-xs font-semibold mb-4">
              Career Path
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground-950">Professional Experience</h2>
            <p className="mt-3 text-base text-foreground-500 max-w-lg mx-auto">
              6+ years of delivering impact across on-site and remote roles worldwide
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-background-300" />
            <div className="space-y-6">
              {experiences.map((exp, idx) => {
                const isOpen = openIndex === idx
                return (
                  <div key={`${exp.company}-${exp.period}`} className="relative pl-12 md:pl-20">
                    <div
                      className={`absolute left-2 md:left-6 top-6 w-5 h-5 rounded-full border-4 transition-colors ${
                        isOpen ? 'border-primary-500 bg-primary-100' : 'border-background-300 bg-background-50'
                      }`}
                    />
                    <div
                      className={`bg-background-50 rounded-2xl border transition-all cursor-pointer ${
                        isOpen ? 'border-primary-200 shadow-sm' : 'border-background-200/60 hover:border-background-300'
                      }`}
                      onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          setOpenIndex(isOpen ? -1 : idx)
                        }
                      }}
                      role="button"
                      tabIndex={0}
                    >
                      <div className="p-5 md:p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <h3 className="font-heading font-bold text-lg text-foreground-950">{exp.role}</h3>
                              <ModeBadge mode={exp.mode} modeClass={exp.modeClass} />
                            </div>
                            <p className="text-sm text-foreground-600 mt-0.5">
                              {exp.company} · {exp.period}
                            </p>
                          </div>
                          <button
                            type="button"
                            className="flex-shrink-0 w-8 h-8 rounded-full bg-background-100 flex items-center justify-center text-foreground-500 hover:text-foreground-700 transition-colors"
                            aria-label={isOpen ? 'Collapse details' : 'Expand details'}
                            onClick={(e) => {
                              e.stopPropagation()
                              setOpenIndex(isOpen ? -1 : idx)
                            }}
                          >
                            <i className={isOpen ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'} aria-hidden />
                          </button>
                        </div>
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {exp.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2 py-0.5 rounded-md bg-background-100 text-foreground-500 text-xs font-medium"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        {isOpen && exp.bullets?.length > 0 && (
                          <ul className="mt-4 space-y-2 border-t border-background-200/60 pt-4">
                            {exp.bullets.map((bullet) => (
                              <li
                                key={bullet}
                                className="flex items-start gap-2 text-sm text-foreground-600 leading-relaxed"
                              >
                                <i className="ri-check-double-line text-primary-500 mt-0.5 flex-shrink-0" aria-hidden />
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  )
}
