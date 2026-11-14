import Link from 'next/link'
import Icon from './Icons'
import { formatDate } from '../lib/posts'

export default function PostList({ posts, headingLevel: Heading = 'h3' }) {
  return (
    <ul className="border-t border-line">
      {posts.map((post) => (
        <li key={post.slug} className="border-b border-line">
          <Link
            href={`/blog/${post.slug}`}
            className="group grid md:grid-cols-[1fr_auto] gap-x-8 gap-y-2 items-start py-6 -mx-3 px-3 rounded-lg transition-colors hover:bg-surface"
          >
            <div>
              <Heading className="font-display text-xl md:text-2xl font-semibold tracking-tight leading-snug group-hover:text-accent-text transition-colors">
                {post.title}
              </Heading>
              <p className="mt-2 text-muted leading-relaxed max-w-2xl">{post.description}</p>
              <p className="mt-3 font-mono text-xs text-muted">{post.tags.join('  ·  ')}</p>
            </div>
            <p className="label flex items-center gap-2 md:pt-2 whitespace-nowrap">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden="true">·</span>
              {post.minutes} min
              <Icon name="arrow" size={15} className="arrow" />
            </p>
          </Link>
        </li>
      ))}
    </ul>
  )
}
