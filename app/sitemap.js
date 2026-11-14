import { site } from './lib/siteData'

export default function sitemap() {
  const lastModified = new Date()
  return [
    { url: site.url, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${site.url}/cv`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
  ]
}
