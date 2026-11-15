import Link from 'next/link'
import Icon from './Icons'
import PostCard from './PostCard'
import Reveal from './Reveal'
import Section from './Section'
import { posts } from '../lib/posts'

export default function Writing() {
  return (
    <Section
      id="writing"
      index="07"
      label="Writing"
      title="Notes on AI engineering"
      intro="Plain-language articles on RAG, LLMs, agents and the parts of AI features that are harder than they look."
    >
      <Reveal>
        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-12">
          {posts.slice(0, 2).map((post) => (
            <li key={post.slug}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
        <Link href="/blog" className="btn btn-ghost mt-12">
          All {posts.length} articles
          <Icon name="arrow" size={15} className="arrow" />
        </Link>
      </Reveal>
    </Section>
  )
}
