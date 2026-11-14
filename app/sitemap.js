const siteUrl = 'https://tajwarsultan.dev'

export default function sitemap() {
  return [
    { url: `${siteUrl}/cv`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
