import Link from 'next/link'
import Icon from '../components/Icons'
import ReviewCard from '../components/ReviewCard'
import { testimonials } from '../lib/siteData'

const description = 'What clients and colleagues say about working with Tajwar Sultan, full-stack developer.'

export const metadata = {
  title: 'Client reviews',
  description,
  alternates: { canonical: '/reviews' },
  openGraph: {
    type: 'website',
    url: '/reviews',
    title: 'Client reviews of Tajwar Sultan',
    description,
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/opengraph-image'] },
}

export default function Reviews() {
  return (
    <div className="shell">
      <header className="max-w-3xl">
        <p className="label">Reviews</p>
        <h1 className="display mt-4 text-[clamp(2.6rem,6.5vw,5rem)] leading-[0.98]">What clients say</h1>
        <p className="mt-6 text-lg md:text-xl leading-relaxed text-muted">
          From people I have built products for.
        </p>
      </header>

      <ul className="mt-12 pt-10 border-t border-line grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((item) => (
          <li key={item.name}>
            <ReviewCard item={item} />
          </li>
        ))}
      </ul>

      <div className="mt-14 flex flex-wrap gap-3">
        <Link href="/#contact" className="btn btn-primary">
          Work with me
          <Icon name="arrow" size={15} className="arrow" />
        </Link>
        <Link href="/projects" className="btn btn-ghost">
          See the projects
        </Link>
      </div>
    </div>
  )
}
