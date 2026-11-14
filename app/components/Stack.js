import Reveal from './Reveal'
import Section from './Section'
import { stack } from '../lib/siteData'

export default function Stack() {
  return (
    <Section
      id="stack"
      index="04"
      label="Stack"
      title="Tools I work with"
      intro="What I use most weeks. I pick tools to fit the product, not the other way round."
    >
      <dl>
        {stack.map((group, i) => (
          <Reveal
            key={group.title}
            className={`grid md:grid-cols-[11rem_1fr] gap-x-8 gap-y-3 py-7 ${i === 0 ? 'pt-0' : 'border-t border-line'}`}
          >
            <dt className="label pt-1">{group.title}</dt>
            <dd className="flex flex-wrap gap-x-2.5 gap-y-1.5 text-lg md:text-xl leading-snug">
              {group.items.map((item, j) => (
                <span key={item} className="whitespace-nowrap">
                  {item}
                  {j < group.items.length - 1 && <span className="ml-2.5 text-line-strong" aria-hidden="true">/</span>}
                </span>
              ))}
            </dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  )
}
