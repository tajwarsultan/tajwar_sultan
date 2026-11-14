import Reveal from './Reveal'

/* Editorial section shell: a sticky label column on the left, content on the right. */
export default function Section({ id, index, label, title, intro, children }) {
  return (
    <section id={id} className="border-t border-line py-20 md:py-28" aria-labelledby={`${id}-title`}>
      <div className="shell grid lg:grid-cols-12 gap-x-10 gap-y-10">
        <Reveal className="lg:col-span-4">
          <div className="lg:sticky lg:top-24">
            <p className="label">
              <span className="text-accent-text">{index}</span> / {label}
            </p>
            <h2 id={`${id}-title`} className="display mt-4 text-4xl md:text-5xl leading-[1.02]">
              {title}
            </h2>
            {intro && <p className="mt-5 text-muted leading-relaxed max-w-sm">{intro}</p>}
          </div>
        </Reveal>
        <div className="lg:col-span-8">{children}</div>
      </div>
    </section>
  )
}
