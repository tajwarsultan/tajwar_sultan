import { Outfit, Inter } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

const siteUrl = 'https://tajwarsultan.dev/'
const siteName = 'Tajwar Sultan'
const defaultTitle = 'Tajwar Sultan — Senior Full Stack Developer & AI Engineer | CV Portfolio'
const defaultDescription =
  'Tajwar Sultan is a Senior Full Stack Developer and AI Engineer with 6+ years of experience building scalable SaaS platforms, AI-powered applications, and cloud-native products. Based in Gilgit-Baltistan, Pakistan. Specialized in React, Next.js, Vue.js, TypeScript, Node.js, and AI integrations.'

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
    title: 'Tajwar Sultan — Senior Full Stack Developer & AI Engineer',
    description:
      '6+ years building scalable SaaS, AI-powered apps, and cloud-native products. React, Next.js, Vue.js, TypeScript, Node.js specialist.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tajwar Sultan — Senior Full Stack Developer & AI Engineer',
    description:
      '6+ years building scalable SaaS, AI-powered apps, and cloud-native products. React, Next.js, Vue.js, TypeScript, Node.js specialist.',
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
    { media: '(prefers-color-scheme: light)', color: '#00753e' },
    { media: '(prefers-color-scheme: dark)', color: '#004f2b' },
  ],
  width: 'device-width',
  initialScale: 1,
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Tajwar Sultan',
  jobTitle: 'Senior Full Stack Developer & AI Engineer',
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
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-background-50 text-foreground-600" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
