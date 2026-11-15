import { ImageResponse } from 'next/og'
import { getPost, posts } from '../../lib/posts'
import { site } from '../../lib/siteData'

export const alt = `Article by ${site.name}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

// The preview card shown when an article link is shared.
export default async function PostImage({ params }) {
  const { slug } = await params
  const post = getPost(slug)

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: '#0b0d0c',
          backgroundImage: 'radial-gradient(900px 500px at 85% 100%, rgba(255,138,61,0.28), transparent)',
          color: '#f1ede3',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 24, letterSpacing: 4, textTransform: 'uppercase', color: '#ff8a3d' }}>
          {(post?.tags ?? []).join('  ·  ')}
        </div>
        <div style={{ display: 'flex', fontSize: 68, fontWeight: 700, lineHeight: 1.08, letterSpacing: -2 }}>
          {post?.title ?? site.name}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 28, color: '#a8a497' }}>
          <span style={{ color: '#f1ede3' }}>{site.name}</span>
          <span>{site.host}</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
