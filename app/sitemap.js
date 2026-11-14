import { posts } from './lib/posts'
import { site } from './lib/siteData'

export default function sitemap() {
  const lastModified = new Date()
  return [
    { url: site.url, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${site.url}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    ...posts.map((post) => ({
      url: `${site.url}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'yearly',
      priority: 0.7,
    })),
    { url: `${site.url}/cv`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
  ]
}
