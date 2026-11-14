import { education, experiences, faqs, languages, projects, site, socials, stack } from './siteData'

const personId = `${site.url}/#person`
const websiteId = `${site.url}/#website`

const person = {
  '@type': 'Person',
  '@id': personId,
  name: site.name,
  givenName: 'Tajwar',
  familyName: 'Sultan',
  jobTitle: site.role,
  description: site.description,
  url: site.url,
  image: `${site.url}/tajwar-portrait.jpg`,
  email: `mailto:${site.email}`,
  telephone: site.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Gilgit',
    addressRegion: site.region,
    addressCountry: 'PK',
  },
  worksFor: { '@type': 'Organization', name: experiences[0].company },
  alumniOf: { '@type': 'CollegeOrUniversity', name: education.school },
  knowsLanguage: languages.map((l) => l.name),
  knowsAbout: [...stack[0].items.slice(0, 6), ...stack[1].items.slice(0, 4), ...stack[2].items.slice(0, 3)],
  sameAs: socials.map((s) => s.href),
}

const website = {
  '@type': 'WebSite',
  '@id': websiteId,
  url: site.url,
  name: site.name,
  description: site.description,
  inLanguage: 'en',
  publisher: { '@id': personId },
}

const service = {
  '@type': 'ProfessionalService',
  '@id': `${site.url}/#service`,
  name: `${site.name}, full-stack web and AI development`,
  url: site.url,
  image: `${site.url}/tajwar-portrait.jpg`,
  description:
    'Freelance and contract full-stack web development: SaaS platforms, dashboards, company websites and AI integrations.',
  areaServed: 'Worldwide',
  founder: { '@id': personId },
  email: `mailto:${site.email}`,
  telephone: site.phone,
  address: person.address,
}

const profilePage = {
  '@type': 'ProfilePage',
  '@id': `${site.url}/#profile`,
  url: site.url,
  name: `${site.name}, ${site.role}`,
  isPartOf: { '@id': websiteId },
  about: { '@id': personId },
  mainEntity: { '@id': personId },
}

const faqPage = {
  '@type': 'FAQPage',
  '@id': `${site.url}/#faq`,
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

const work = {
  '@type': 'ItemList',
  '@id': `${site.url}/#work`,
  name: `Projects by ${site.name}`,
  itemListElement: projects.map((project, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'CreativeWork',
      name: project.title,
      url: project.href,
      description: project.description,
      genre: project.kind,
      creator: { '@id': personId },
    },
  })),
}

export const siteJsonLd = { '@context': 'https://schema.org', '@graph': [person, website, service] }
export const homeJsonLd = { '@context': 'https://schema.org', '@graph': [profilePage, faqPage, work] }

// Escapes "<" so content can never close the surrounding script tag.
export const toJsonLd = (data) => JSON.stringify(data).replace(/</g, '\\u003c')
