import { Bricolage_Grotesque, Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { site } from './lib/siteData'
import { siteJsonLd, toJsonLd } from './lib/structuredData'

const display = Bricolage_Grotesque({
  variable: '--ff-display',
  subsets: ['latin'],
  axes: ['opsz'],
  display: 'swap',
})

const sans = Geist({
  variable: '--ff-sans',
  subsets: ['latin'],
  display: 'swap',
})

const mono = Geist_Mono({
  variable: '--ff-mono',
  subsets: ['latin'],
  display: 'swap',
})

// Runs before paint: applies a saved theme.
const bootScript = `(function(){var d=document.documentElement;try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')d.dataset.theme=t}catch(e){}})()`

const title = 'Tajwar Sultan | Full-Stack Developer (React, Next.js, Node.js)'
const shortDescription =
  'Full-stack developer in Gilgit, Pakistan, building SaaS products and AI features with React, Next.js, Vue and Node.js. Open to remote roles and freelance work.'

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [{ url: '/icon', type: 'image/png' }],
    apple: [{ url: '/apple-icon', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: site.url,
    siteName: site.name,
    title,
    description: shortDescription,
    firstName: 'Tajwar',
    lastName: 'Sultan',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@tajwarsultan',
    site: '@tajwarsultan',
    title,
    description: shortDescription,
  },
  other: {
    'geo.region': 'PK-GB',
    'geo.placename': 'Gilgit',
    'geo.position': '35.9208;74.3100',
    ICBM: '35.9208, 74.3100',
  },
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f4f1ea' },
    { media: '(prefers-color-scheme: dark)', color: '#0f100e' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(siteJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
