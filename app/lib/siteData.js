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
  coords: '35.9208° N, 74.3100° E',
  timeZone: 'Asia/Karachi',
  whatsapp: '923109450550',
  whatsappDisplay: '+92 310 9450550',
  cv: '/Tajwar_Sultan_CV_(fullstack).pdf',
}

export const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#contact', label: 'Contact' },
]

export const socials = [
  { label: 'GitHub', handle: 'tajwarsultan', href: 'https://github.com/tajwarsultan', icon: 'github' },
  { label: 'LinkedIn', handle: 'in/tajwar-sultan', href: 'https://www.linkedin.com/in/tajwar-sultan/', icon: 'linkedin' },
  { label: 'Upwork', handle: 'tajwarsultan', href: 'https://www.upwork.com/freelancers/tajwarsultan', icon: 'arrow' },
  { label: 'Fiverr', handle: 'tajwarsultan', href: 'https://www.fiverr.com/tajwarsultan', icon: 'arrow' },
]

export const projects = [
  {
    title: 'Arcadian',
    kind: 'AI surveillance',
    href: 'https://app.ourarcadian.com/#/',
    host: 'app.ourarcadian.com',
    description: 'AI-powered surveillance dashboard with real-time video analytics and threat detection.',
    tags: ['Vue 3', 'Node.js', 'AI'],
    featured: true,
  },
  {
    title: 'CARLA',
    kind: 'Automotive',
    href: 'https://dev.usecarla.de/',
    host: 'dev.usecarla.de',
    description: 'Automotive technology platform with digital interfaces for connected mobility.',
    tags: ['React', 'TypeScript', 'Node.js'],
    featured: true,
  },
  {
    title: 'Eldrin AI',
    kind: 'AI assistant',
    href: 'https://www.eldrin.ai/',
    host: 'eldrin.ai',
    description: 'Intelligent assistant with conversational interfaces and workflow automation.',
    tags: ['Next.js', 'TypeScript', 'AI'],
    featured: true,
  },
  {
    title: 'GreatCoops',
    kind: 'Collaboration',
    href: 'https://ai.greatcoops.com/',
    host: 'ai.greatcoops.com',
    description: 'AI-driven platform for cooperative businesses, with intelligent workflows and team collaboration.',
    tags: ['React', 'Node.js', 'AI'],
    featured: true,
  },
  {
    title: 'IntellQuery AI',
    kind: 'RAG chatbot',
    href: 'https://airagchatbot.vercel.app/',
    host: 'airagchatbot.vercel.app',
    description: 'Retrieval-augmented chatbot that answers questions from your own documents.',
    tags: ['Next.js', 'RAG', 'Vector DB'],
  },
  {
    title: 'SteriPilotAI',
    kind: 'Healthcare',
    href: 'https://steripilot-frontend-m4xtfatkmq-uc.a.run.app/login',
    host: 'steripilot · cloud run',
    description: 'Healthcare platform for tracking medical sterilization compliance.',
    tags: ['React', 'Node.js', 'GCP'],
  },
  {
    title: 'Velnix',
    kind: 'SaaS platform',
    href: 'https://velnix-platform.vercel.app/en/login',
    host: 'velnix-platform.vercel.app',
    description: 'Multi-tenant SaaS platform with cloud-native deployment.',
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
    description: 'IELTS preparation platform with AI-driven assessment and scoring.',
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
    description: 'Digital platform connecting local businesses and communities in Gilgit.',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
  },
]

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
      'GitHub Actions', 'Strapi', 'Sanity', 'Contentful',
    ],
  },
  {
    title: 'Testing & quality',
    items: ['Jest', 'React Testing Library', 'Cypress', 'Playwright', 'ESLint', 'Prettier', 'Husky'],
  },
]
