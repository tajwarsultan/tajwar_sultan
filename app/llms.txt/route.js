import { posts } from '../lib/posts'
import { education, experiences, faqs, languages, projects, site, socials, stack } from '../lib/siteData'

export const dynamic = 'force-static'

// A plain-text summary of the site for AI assistants (the llms.txt convention).
export function GET() {
  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.description} Open to remote roles and freelance projects.`,
    '',
    '## About',
    '',
    `- Role: ${site.role}`,
    `- Location: ${site.location} (${site.region}), UTC+5`,
    `- Currently: ${experiences[0].role} at ${experiences[0].company}`,
    `- Education: ${education.degree}, ${education.school} (${education.year})`,
    `- Languages: ${languages.map((l) => `${l.name} (${l.level.toLowerCase()})`).join(', ')}`,
    '',
    '## Contact',
    '',
    `- Website: ${site.url}`,
    `- Email: ${site.email}`,
    `- WhatsApp: https://wa.me/${site.whatsapp}`,
    ...socials.map((s) => `- ${s.label}: ${s.href}`),
    `- All projects: ${site.url}/projects`,
    `- CV: ${site.url}/cv`,
    '',
    '## Projects',
    '',
    ...projects.map((p) => `- [${p.title}](${p.href}): ${p.description} (${p.tags.join(', ')})`),
    '',
    '## Articles',
    '',
    ...posts.map((p) => `- [${p.title}](${site.url}/blog/${p.slug}): ${p.description}`),
    '',
    '## Experience',
    '',
    ...experiences.map((e) => `- ${e.company}, ${e.role}, ${e.period.replace(' — ', ' to ')} (${e.mode})`),
    '',
    '## Skills',
    '',
    ...stack.map((g) => `- ${g.title}: ${g.items.join(', ')}`),
    '',
    '## FAQ',
    '',
    ...faqs.flatMap((f) => [`### ${f.q}`, '', f.a, '']),
  ]

  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
