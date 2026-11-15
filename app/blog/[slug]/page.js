import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ArticleArt from '../../components/ArticleArt'
import Icon from '../../components/Icons'
import Markdown from '../../components/Markdown'
import { formatDate, getPost, posts } from '../../lib/posts'
import { site } from '../../lib/siteData'
import { postJsonLd, toJsonLd } from '../../lib/structuredData'

export const dynamicParams = false

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    authors: [{ name: site.name, url: site.url }],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [site.name],
      tags: post.tags,
    },
    twitter: { card: 'summary_large_image', title: post.title, description: post.description },
  }
}

export default async function Post({ params }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const index = posts.indexOf(post)
  const next = posts[(index + 1) % posts.length]

  return (
    <article className="shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(postJsonLd(post)) }} />

      <div className="max-w-[44rem] mx-auto">
        <Link href="/blog" className="label inline-flex items-center gap-1.5 hover:text-ink transition-colors">
          <Icon name="down" size={13} className="rotate-90" />
          All articles
        </Link>

        <header className="mt-8">
          <h1 className="display text-[clamp(2.1rem,5vw,3.5rem)] leading-[1.04]">{post.title}</h1>
          <p className="mt-5 text-lg md:text-xl leading-relaxed text-muted">{post.description}</p>
          <p className="mt-6 pb-6 border-b border-line label flex flex-wrap items-center gap-x-2.5 gap-y-1">
            <span className="!text-ink">{site.name}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true">·</span>
            {post.minutes} min read
          </p>
        </header>

        <ArticleArt name={post.art} className="mt-8" />

        <div className="mt-10">
          <Markdown source={post.body} />
        </div>

        <footer className="mt-14 pt-8 border-t border-line">
          <div className="flex items-start gap-4">
            <Image
              src="/tajwar-portrait.jpg"
              alt=""
              width={56}
              height={56}
              className="w-14 h-14 rounded-full object-cover object-[50%_30%] border border-line shrink-0"
            />
            <div>
              <p className="label">Written by</p>
              <p className="mt-1 font-display text-xl font-semibold tracking-tight">{site.name}</p>
              <p className="mt-1.5 text-muted leading-relaxed">
                Full-stack developer in {site.location}. I build SaaS products and AI features with React, Next.js
                and Node.js.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="/#contact" className="btn btn-primary !min-h-10 !px-4 text-sm">
                  Work with me
                  <Icon name="arrow" size={14} className="arrow" />
                </Link>
                <Link href="/" className="btn btn-ghost !min-h-10 !px-4 text-sm">
                  About me
                </Link>
              </div>
            </div>
          </div>

          <Link
            href={`/blog/${next.slug}`}
            className="group mt-12 block rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-line-strong"
          >
            <div className="sm:flex sm:items-center sm:gap-6">
              <ArticleArt name={next.art} className="sm:w-44 shrink-0 !bg-bg" />
              <div className="mt-4 sm:mt-0">
                <p className="label">Read next</p>
                <p className="mt-2 font-display text-xl md:text-2xl font-semibold tracking-tight leading-snug group-hover:text-accent-text transition-colors">
                  {next.title}
                </p>
              </div>
            </div>
          </Link>
        </footer>
      </div>
    </article>
  )
}
