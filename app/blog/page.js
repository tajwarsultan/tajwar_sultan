import PostCard from '../components/PostCard'
import { posts } from '../lib/posts'
import { blogJsonLd, toJsonLd } from '../lib/structuredData'

export const metadata = {
  title: 'Blog: AI engineering, RAG and LLMs',
  description:
    'Articles by Tajwar Sultan on building AI features: retrieval-augmented generation, embeddings, evals, agents, MCP, streaming and LLM security.',
  alternates: { canonical: '/blog' },
  openGraph: {
    type: 'website',
    url: '/blog',
    title: 'Notes on AI engineering, by Tajwar Sultan',
    description: 'Plain-language articles on RAG, LLMs, agents, evals and the parts of AI features that are harder than they look.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/opengraph-image'] },
}

export default function Blog() {
  return (
    <div className="shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(blogJsonLd(posts)) }} />
      <header className="max-w-3xl">
        <p className="label">Blog</p>
        <h1 className="display mt-4 text-[clamp(2.6rem,6.5vw,5rem)] leading-[0.98]">Notes on AI engineering</h1>
        <p className="mt-6 text-lg md:text-xl leading-relaxed text-muted">
          How retrieval, language models and agents work once you try to ship them. Written for developers who
          build products, in plain language.
        </p>
      </header>
      <div className="mt-14 pt-10 border-t border-line">
        <PostCard post={posts[0]} headingLevel="h2" wide />
      </div>
      <ul className="mt-14 pt-12 border-t border-line grid sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-14">
        {posts.slice(1).map((post) => (
          <li key={post.slug}>
            <PostCard post={post} headingLevel="h2" />
          </li>
        ))}
      </ul>
    </div>
  )
}
