import Link from 'next/link'
import Icon from './Icons'
import Reveal from './Reveal'
import ReviewCard from './ReviewCard'
import Section from './Section'
import { testimonials } from '../lib/siteData'

const SHOWN = 2

/* Home page: the first two client reviews. All of them are on /reviews. */
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
        {testimonials.slice(0, SHOWN).map((item, i) => (
          <Reveal as="li" key={item.name} delay={(i % 2) * 90}>
            <ReviewCard item={item} />
          </Reveal>
        ))}
      </ul>

      {testimonials.length > SHOWN && (
        <Reveal className="mt-8">
          <Link href="/reviews" className="btn btn-ghost">
            Read all reviews
            <Icon name="arrow" size={15} className="arrow" />
          </Link>
        </Reveal>
      )}
    </Section>
  )
}
