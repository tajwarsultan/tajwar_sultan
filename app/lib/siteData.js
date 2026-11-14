// Single source of truth for site content.
// Employment history, education, skills and languages mirror the CV in /public.

export const site = {
  name: 'Tajwar Sultan',
  role: 'Senior Full-Stack Developer',
  url: 'https://tajwarsultan.dev',
  email: 'tajwar.sultan00@gmail.com',
  phone: '+92 343 6140308',
  phoneHref: 'tel:+923436140308',
  location: 'Gilgit, Pakistan',
  region: 'Gilgit-Baltistan',
  description:
    'Tajwar Sultan is a senior full-stack developer in Gilgit, Pakistan. He builds SaaS platforms, dashboards and AI features with React, Next.js, Vue and Node.js.',
  coords: '35.9208° N, 74.3100° E',
  timeZone: 'Asia/Karachi',
  whatsapp: '923109450550',
  whatsappDisplay: '+92 310 9450550',
  cv: '/Tajwar-Sultan-CV.pdf',
}

export const navLinks = [
  { href: '/#work', label: 'Work' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#about', label: 'About' },
  { href: '/#stack', label: 'Stack' },
  { href: '/blog', label: 'Blog' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/#contact', label: 'Contact' },
]

// Every profile the footer can show. Paste the full profile URL into `href`;
// an entry with an empty `href` stays hidden, so no link ever points at the wrong account.
const profiles = [
  { label: 'LinkedIn', handle: 'in/tajwar-sultan', href: 'https://www.linkedin.com/in/tajwar-sultan/', icon: 'linkedin' },
  { label: 'GitHub', handle: 'tajwarsultan', href: 'https://github.com/tajwarsultan', icon: 'github' },
  { label: 'X', handle: '', href: '', icon: 'x' },
  { label: 'Instagram', handle: '', href: '', icon: 'instagram' },
  { label: 'Facebook', handle: '', href: '', icon: 'facebook' },
  { label: 'YouTube', handle: '', href: '', icon: 'youtube' },
  { label: 'Upwork', handle: 'tajwarsultan', href: 'https://www.upwork.com/freelancers/tajwarsultan', icon: 'upwork' },
  { label: 'Fiverr', handle: 'tajwarsultan', href: 'https://www.fiverr.com/tajwarsultan', icon: 'fiverr' },
]

export const socials = profiles.filter((profile) => profile.href)

export const projects = [
  {
    title: 'CareFirst Billing',
    kind: 'Medical billing',
    href: 'https://carefirstbillingsolutions.com/',
    host: 'carefirstbillingsolutions.com',
    description: 'Company website for a medical billing provider. I designed and built it for the client.',
    tags: ['Client website', 'Design', 'Development'],
    featured: true,
    isNew: true,
  },
  {
    title: 'Arcadian',
    kind: 'AI surveillance',
    href: 'https://app.ourarcadian.com/#/',
    host: 'app.ourarcadian.com',
    description: 'Security camera dashboard that analyses live video and flags threats as they happen.',
    tags: ['Vue 3', 'Node.js', 'AI'],
    featured: true,
  },
  {
    title: 'CARLA',
    kind: 'Automotive',
    href: 'https://dev.usecarla.de/',
    host: 'dev.usecarla.de',
    description: 'Web interfaces for an automotive platform built around connected mobility.',
    tags: ['React', 'TypeScript', 'Node.js'],
    featured: true,
  },
  {
    title: 'Eldrin AI',
    kind: 'AI assistant',
    href: 'https://www.eldrin.ai/',
    host: 'eldrin.ai',
    description: 'A conversational assistant that takes routine workflows off your hands.',
    tags: ['Next.js', 'TypeScript', 'AI'],
    featured: true,
  },
  {
    title: 'GreatCoops',
    kind: 'Collaboration',
    href: 'https://ai.greatcoops.com/',
    host: 'ai.greatcoops.com',
    description: 'Where cooperative businesses run their workflows and work together, with AI built in.',
    tags: ['React', 'Node.js', 'AI'],
    featured: true,
  },
  {
    title: 'IntellQuery AI',
    kind: 'RAG chatbot',
    href: 'https://airagchatbot.vercel.app/',
    host: 'airagchatbot.vercel.app',
    description: 'A chatbot that answers questions from your own documents, using retrieval-augmented generation.',
    tags: ['Next.js', 'RAG', 'Vector DB'],
    featured: true,
  },
  {
    title: 'SteriPilotAI',
    kind: 'Healthcare',
    href: 'https://steripilot-frontend-m4xtfatkmq-uc.a.run.app/login',
    host: 'steripilot · cloud run',
    description: 'Helps medical teams track sterilization compliance.',
    tags: ['React', 'Node.js', 'GCP'],
  },
  {
    title: 'Velnix',
    kind: 'SaaS platform',
    href: 'https://velnix-platform.vercel.app/en/login',
    host: 'velnix-platform.vercel.app',
    description: 'Multi-tenant SaaS platform, deployed on AWS.',
    tags: ['Next.js', 'TypeScript', 'AWS'],
  },
  {
    title: 'QuoHR',
    kind: 'HR software',
    href: 'https://cloud.quohr.com/login',
    host: 'cloud.quohr.com',
    description: 'HR management system that automates the employee lifecycle.',
    tags: ['React', 'TypeScript', 'Node.js'],
  },
  {
    title: 'Cathoven',
    kind: 'EdTech',
    href: 'https://ielts.cathoven.com/ielts/register',
    host: 'ielts.cathoven.com',
    description: 'IELTS preparation platform that scores practice answers with AI.',
    tags: ['React', 'TypeScript', 'AI'],
  },
  {
    title: 'BBR Boat Rentals',
    kind: 'Booking',
    href: 'https://bbrboatrentals.com/',
    host: 'bbrboatrentals.com',
    description: 'Boat rental booking with real-time availability and online payments.',
    tags: ['React', 'TypeScript', 'Firebase'],
  },
  {
    title: 'GilgitApp',
    kind: 'Community',
    href: 'https://gilgit.app/',
    host: 'gilgit.app',
    description: 'Connects local businesses and communities in Gilgit.',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
  },
]

export const summary =
  'Senior full-stack JavaScript developer with six years of professional experience building web applications and SaaS platforms. I work across React, Next.js, Vue and Node.js, with the APIs, databases and cloud deployments behind them, and I add AI features to production products for startups and clients worldwide.'

export const experiences = [
  {
    company: 'ArcadianAI',
    role: 'Senior Full-Stack / Front-End Developer',
    period: '2024 — Present',
    mode: 'Remote',
    bullets: [
      'Develop scalable SaaS applications with Next.js, React, Node.js and modern API architectures.',
      'Integrate OpenAI APIs to power AI-driven features and automation workflows.',
      'Improve front-end performance, SEO and application stability.',
    ],
    tech: ['Next.js', 'React', 'Node.js', 'OpenAI APIs'],
  },
  {
    company: 'Xensam · FieldPulse',
    role: 'Front-End Developer',
    period: '2024 — 2025',
    mode: 'Remote',
    bullets: [
      'Built responsive dashboards and complex user interfaces with React, Vue.js and Tailwind CSS.',
      'Turned Figma designs into high-quality, reusable components.',
      'Integrated APIs and optimized data-heavy views for performance.',
    ],
    tech: ['React', 'Vue.js', 'Tailwind CSS', 'Figma'],
  },
  {
    company: 'uConnect Technologies Pvt Ltd',
    role: 'Front-End Developer',
    period: '2020 — 2024',
    mode: 'On-site',
    bullets: [
      'Delivered multiple production web applications using JavaScript frameworks.',
      'Worked closely with back-end teams to integrate REST APIs.',
      'Refactored legacy codebases for maintainability and scalability.',
    ],
    tech: ['JavaScript', 'React', 'Vue.js', 'REST APIs'],
  },
]

export const education = {
  school: 'Karakoram International University',
  degree: 'BS, Computer Science',
  year: '2025',
}

export const languages = [
  { name: 'English', level: 'Professional' },
  { name: 'Urdu', level: 'Native' },
  { name: 'Burushaski', level: 'Native' },
]

export const interests = [
  'Technology & AI innovation',
  'Teaching & mentorship',
  'Community development',
  'Open-source contributions',
]

export const stack = [
  {
    title: 'Front end',
    items: [
      'React', 'Next.js', 'Vue.js', 'Svelte / SvelteKit', 'Angular', 'TypeScript',
      'Tailwind CSS', 'Chakra UI', 'Material UI', 'Framer Motion', 'GSAP', 'Three.js',
    ],
  },
  {
    title: 'Back end & data',
    items: [
      'Node.js', 'Express', 'Fastify', 'REST APIs', 'GraphQL', 'WebSockets',
      'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Firebase', 'Supabase',
    ],
  },
  {
    title: 'AI',
    items: ['OpenAI APIs', 'RAG pipelines', 'Vector databases', 'AI agents', 'Prompt engineering'],
  },
  {
    title: 'Cloud & CMS',
    items: [
      'AWS (S3, Lambda)', 'Vercel', 'Netlify', 'Docker', 'Nginx', 'PM2',
      'GitHub Actions', 'WordPress', 'HubSpot', 'Strapi', 'Sanity', 'Contentful',
    ],
  },
  {
    title: 'Testing & quality',
    items: ['Jest', 'React Testing Library', 'Cypress', 'Playwright', 'ESLint', 'Prettier', 'Husky'],
  },
  {
    title: 'Workflow',
    items: ['Git & GitHub', 'Figma', 'Trello'],
  },
]

// Shown on the page and published as FAQ structured data, so the answers
// search engines and AI assistants quote are the ones written here.
export const faqs = [
  {
    q: 'What kind of work does Tajwar Sultan take on?',
    a: 'Web applications, mostly: SaaS platforms, dashboards, booking and HR systems, company websites, and AI features such as chatbots and document search. I can build a product end to end or join a team that already has one.',
  },
  {
    q: 'Is Tajwar available for hire?',
    a: 'Yes. I take remote full-time roles, contracts and freelance projects. Message me on WhatsApp or by email and I usually reply within a day.',
  },
  {
    q: 'Where is Tajwar based, and does he work remotely?',
    a: 'I live in Gilgit, in Gilgit-Baltistan, northern Pakistan, on Pakistan Standard Time (UTC+5). I work remotely with teams and clients in other countries.',
  },
  {
    q: 'Which technologies does Tajwar work with?',
    a: 'On the front end: React, Next.js, Vue.js, Svelte and TypeScript, usually with Tailwind CSS. On the back end: Node.js with Express or Fastify, REST and GraphQL APIs, and PostgreSQL, MySQL or MongoDB. I deploy on AWS and Vercel.',
  },
  {
    q: 'Does Tajwar build AI features?',
    a: 'Yes. I integrate OpenAI APIs into products and build retrieval-augmented (RAG) chatbots that answer from your own documents. IntellQuery AI, in the work section, is a public example.',
  },
  {
    q: 'How do I start a project with Tajwar?',
    a: 'Send a short note about what you are building, your timeline and any links. We talk it through, and I come back with the scope and next steps.',
  },
]

// Logos in the hero slider, one array per row. `icon` is the logo's name in simple-icons.
// After changing this list, run `npm run sprite` to rebuild public/tools.svg.
export const toolRows = [
  [
    { name: 'React', icon: 'react' },
    { name: 'Next.js', icon: 'nextdotjs' },
    { name: 'Vue.js', icon: 'vuedotjs' },
    { name: 'Svelte', icon: 'svelte' },
    { name: 'Angular', icon: 'angular' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'Tailwind CSS', icon: 'tailwindcss' },
    { name: 'Three.js', icon: 'threedotjs' },
    { name: 'Node.js', icon: 'nodedotjs' },
    { name: 'Express', icon: 'express' },
    { name: 'Fastify', icon: 'fastify' },
    { name: 'GraphQL', icon: 'graphql' },
    { name: 'PostgreSQL', icon: 'postgresql' },
    { name: 'MySQL', icon: 'mysql' },
    { name: 'MongoDB', icon: 'mongodb' },
    { name: 'Redis', icon: 'redis' },
  ],
  [
    { name: 'WordPress', icon: 'wordpress' },
    { name: 'HubSpot', icon: 'hubspot' },
    { name: 'Strapi', icon: 'strapi' },
    { name: 'Sanity', icon: 'sanity' },
    { name: 'Contentful', icon: 'contentful' },
    { name: 'Firebase', icon: 'firebase' },
    { name: 'Supabase', icon: 'supabase' },
    { name: 'Docker', icon: 'docker' },
    { name: 'Nginx', icon: 'nginx' },
    { name: 'Vercel', icon: 'vercel' },
    { name: 'Netlify', icon: 'netlify' },
    { name: 'GitHub', icon: 'github' },
    { name: 'GitHub Actions', icon: 'githubactions' },
    { name: 'Figma', icon: 'figma' },
    { name: 'Trello', icon: 'trello' },
    { name: 'Jest', icon: 'jest' },
    { name: 'Cypress', icon: 'cypress' },
  ],
]
