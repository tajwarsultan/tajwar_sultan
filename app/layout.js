import { Bricolage_Grotesque, Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

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

// Runs before paint: applies a saved theme and marks the document as JS-enabled.
const bootScript = `(function(){var d=document.documentElement;try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')d.dataset.theme=t}catch(e){}d.classList.add('js')})()`

const siteUrl = 'https://tajwarsultan.dev/'
const siteName = 'Tajwar Sultan'
const defaultTitle = 'Tajwar Sultan — Senior Full-Stack Developer'
const defaultDescription =
  'Tajwar Sultan is a senior full-stack JavaScript developer based in Gilgit, Pakistan. Since 2020 he has built SaaS platforms, dashboards and AI-powered web apps with React, Next.js, Vue.js and Node.js for startups and product teams worldwide.'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    'Tajwar Sultan',
    'Full Stack Developer',
    'AI Engineer',
    'Frontend Specialist',
    'React Developer',
    'Next.js Developer',
    'Vue.js Developer',
    'TypeScript',
    'Node.js',
    'SaaS Developer',
    'Pakistan Developer',
    'Gilgit-Baltistan',
    'Remote Developer',
    'Freelance Developer',
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: 'technology',
  alternates: {
    canonical: siteUrl,
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
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName,
    title: 'Tajwar Sultan — Senior Full-Stack Developer',
    description:
      'Full-stack developer building SaaS products and AI features with React, Next.js, Vue.js and Node.js. Based in Gilgit, Pakistan — working with teams worldwide.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tajwar Sultan — Senior Full-Stack Developer',
    description:
      'Full-stack developer building SaaS products and AI features with React, Next.js, Vue.js and Node.js. Based in Gilgit, Pakistan — working with teams worldwide.',
    creator: '@tajwarsultan',
  },
  other: {
    'geo.region': 'PK-GB',
    'geo.placename': 'Gilgit-Baltistan',
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

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Tajwar Sultan',
  jobTitle: 'Senior Full-Stack Developer',
  description: defaultDescription,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Gilgit-Baltistan',
    addressCountry: 'PK',
  },
  email: 'tajwar.sultan00@gmail.com',
  telephone: '+92 343 6140308',
  url: siteUrl,
  image: `${siteUrl}opengraph-image`,
  sameAs: [
    'https://www.linkedin.com/in/tajwar-sultan/',
    'https://github.com/tajwarsultan',
    'https://www.upwork.com/freelancers/tajwarsultan',
    'https://www.fiverr.com/tajwarsultan',
  ],
  knowsAbout: [
    'React',
    'Next.js',
    'Vue.js',
    'TypeScript',
    'Node.js',
    'Artificial Intelligence',
    'SaaS',
    'Cloud Computing',
  ],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: defaultTitle,
  url: siteUrl,
  description: defaultDescription,
  inLanguage: 'en',
  publisher: {
    '@type': 'Person',
    name: 'Tajwar Sultan',
  },
}

const professionalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Tajwar Sultan — Full Stack & AI Development',
  url: siteUrl,
  description: 'Freelance and contract full-stack development, AI integration, and SaaS engineering.',
  areaServed: 'Worldwide',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Gilgit-Baltistan',
    addressCountry: 'PK',
  },
}

export default function RootLayout({ children }) {
  const jsonLd = [personJsonLd, websiteJsonLd, professionalServiceJsonLd]

  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
