import Link from 'next/link'
import ArticleArt from './ArticleArt'
import Icon from './Icons'
import { formatDate } from '../lib/posts'

export default function PostCard({ post, headingLevel: Heading = 'h3', wide = false }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`post-card group h-full ${wide ? 'md:grid md:grid-cols-2 md:gap-8 md:items-center' : 'flex flex-col'}`}
    >
      <ArticleArt name={post.art} />
      <div className={`flex flex-col flex-1 ${wide ? 'mt-5 md:mt-0' : 'mt-5'}`}>
        <p className="label">{post.tags.join('  ·  ')}</p>
        <Heading
          className={`mt-3 font-display font-semibold tracking-tight leading-[1.15] group-hover:text-accent-text transition-colors ${
            wide ? 'text-2xl md:text-4xl' : 'text-xl md:text-[1.4rem]'
          }`}
        >
          {post.title}
        </Heading>
        <p className={`mt-3 text-muted leading-relaxed ${wide ? 'md:text-lg' : ''}`}>{post.description}</p>
        <p className="mt-auto pt-5 label flex items-center gap-2">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true">·</span>
          {post.minutes} min read
          <span className="ml-auto flex items-center gap-1.5 !text-ink">
            Read
            <Icon name="arrow" size={14} className="arrow" />
          </span>
        </p>
      </div>
    </Link>
  )
}
