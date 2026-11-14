import Reveal from './Reveal'
import Section from './Section'
import { testimonials } from '../lib/siteData'

/* Client reviews. The section only renders when `testimonials` in siteData has entries. */
export default function Testimonials() {
  if (!testimonials.length) return null

  return (
    <Section
      id="reviews"
      index="02"
      label="Reviews"
      title="What clients say"
      intro="From people I have built products for."
    >
      <ul className="grid sm:grid-cols-2 gap-6">
        {testimonials.map((item, i) => (
          <Reveal as="li" key={item.name} delay={(i % 2) * 90}>
            <figure className="h-full flex flex-col rounded-2xl border border-line bg-surface p-6 md:p-7">
              <svg width="28" height="22" viewBox="0 0 28 22" fill="currentColor" aria-hidden="true" className="text-accent">
                <path d="M0 22V13C0 5.5 4.2 1 11 0l1 3.2C8.2 4.3 6.3 6.8 6.2 10H12v12Zm16 0V13c0-7.5 4.2-12 11-13l1 3.2c-3.8 1.1-5.7 3.6-5.8 6.8H28v12Z" />
              </svg>
              <blockquote className="mt-5 text-lg leading-relaxed">{item.quote}</blockquote>
              <figcaption className="mt-auto pt-6 flex items-center gap-3">
                <span className="grid place-items-center w-11 h-11 rounded-full bg-ink text-bg font-display font-semibold">
                  {item.name.replace(/^(Dr|Mr|Mrs|Ms|Prof)\.?\s+/i, '')[0]}
                </span>
                <span>
                  <span className="block font-medium">{item.name}</span>
                  <span className="block text-sm text-muted">
                    {item.role}
                    {item.location ? ` · ${item.location}` : ''}
                  </span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
