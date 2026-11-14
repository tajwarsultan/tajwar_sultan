import PostList from '../components/PostList'
import { posts } from '../lib/posts'
import { blogJsonLd, toJsonLd } from '../lib/structuredData'

export const metadata = {
  title: 'Blog: AI engineering, RAG and LLMs',
  description:
    'Articles by Tajwar Sultan on building AI features: retrieval-augmented generation, embeddings, evals, agents, MCP, streaming and LLM security.',
  alternates: { canonical: '/blog' },
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
      <div className="mt-14">
        <PostList posts={posts} headingLevel="h2" />
      </div>
    </div>
  )
}
