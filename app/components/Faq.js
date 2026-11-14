import Reveal from './Reveal'
import Section from './Section'
import { faqs } from '../lib/siteData'

export default function Faq() {
  return (
    <Section
      id="faq"
      index="05"
      label="FAQ"
      title="Questions I get asked"
      intro="Short answers to what people usually want to know before they get in touch."
    >
      <Reveal>
        {faqs.map((item, i) => (
          <details key={item.q} className="faq group border-b border-line first:border-t" open={i === 0}>
            <summary className="flex items-start justify-between gap-6 py-5 cursor-pointer list-none">
              <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight leading-snug">{item.q}</h3>
              <span className="faq-mark mt-1.5 shrink-0" aria-hidden="true" />
            </summary>
            <p className="pb-6 -mt-1 max-w-2xl text-lg leading-relaxed text-muted">{item.a}</p>
          </details>
        ))}
      </Reveal>
    </Section>
  )
}
