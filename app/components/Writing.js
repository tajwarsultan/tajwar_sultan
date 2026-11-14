import Link from 'next/link'
import Icon from './Icons'
import PostList from './PostList'
import Reveal from './Reveal'
import Section from './Section'
import { posts } from '../lib/posts'

export default function Writing() {
  return (
    <Section
      id="writing"
      index="05"
      label="Writing"
      title="Notes on AI engineering"
      intro="Plain-language articles on RAG, LLMs, agents and the parts of AI features that are harder than they look."
    >
      <Reveal>
        <PostList posts={posts.slice(0, 4)} />
        <Link href="/blog" className="btn btn-ghost mt-8">
          All {posts.length} articles
          <Icon name="arrow" size={15} className="arrow" />
        </Link>
      </Reveal>
    </Section>
  )
}
