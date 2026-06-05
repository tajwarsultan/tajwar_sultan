import { projectImageUrls } from './projectImages'

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export const heroStats = [
  { value: '6+', label: 'Years Experience' },
  { value: '25+', label: 'Projects Delivered' },
  { value: '15+', label: 'International Clients' },
  { value: '8+', label: 'Technologies Mastered' },
]

export const aboutTags = [
  'Problem Solver',
  'Clean Code Advocate',
  'AI Enthusiast',
  'Team Player',
  'Lifelong Learner',
]

export const achievements = [
  'Delivered 25+ production applications for clients across North America, Europe, and Asia',
  'Architected micro-frontend system reducing cross-team development conflicts by 70%',
  'Built AI-powered RAG chatbot processing 10,000+ document queries per day',
  'Led migration of legacy monolith to cloud-native microservices with zero downtime',
  'Mentored 15+ junior developers through structured code review and pair programming',
]

export const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'ri-layout-4-line',
    skills: [
      'React.js',
      'Next.js',
      'Vue.js',
      'Vue 3',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'Svelte',
      'SvelteKit',
      'HTML5',
      'CSS3',
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'ri-server-line',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'NestJS', 'GraphQL'],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: 'ri-database-2-line',
    skills: ['PostgreSQL', 'MySQL', 'Firebase', 'MongoDB'],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    icon: 'ri-cloud-line',
    skills: ['Vercel', 'AWS', 'Docker', 'CI/CD', 'Google Cloud Run'],
  },
  {
    id: 'ai',
    title: 'AI Engineering',
    icon: 'ri-brain-line',
    skills: [
      'Prompt Engineering',
      'OpenAI APIs',
      'AI Agents',
      'RAG Systems',
      'Chatbots',
      'Vector Databases',
    ],
  },
]

export const allTechnologies = skillCategories.flatMap((c) => c.skills)

export const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Velnix',
    period: '2026',
    mode: 'Remote',
    modeClass: 'secondary',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'AWS'],
    bullets: [
      'Developed multi-tenant SaaS platform with cloud-native deployment',
    ],
    defaultOpen: true,
  },
  {
    role: 'Full Stack Developer',
    company: 'SteriPilotAI',
    period: '2026',
    mode: 'Remote',
    modeClass: 'secondary',
    tech: ['React', 'Node.js', 'AI Integration'],
    bullets: [
      'Integrated AI compliance workflows for healthcare sterilization tracking',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'BBR Boat Rentals',
    period: '2025 – 2026',
    mode: 'Remote',
    modeClass: 'secondary',
    tech: ['React', 'TypeScript', 'Firebase'],
    bullets: [
      'Built booking platform with real-time availability and payments',
      'Launched on schedule with stable production operations',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Artilect Solutions Pvt Ltd',
    period: '2024 – 2026',
    mode: 'On-site',
    modeClass: 'accent',
    tech: ['React', 'Vue', 'Svelte', 'Node.js', 'AWS', 'AI Engineering'],
    bullets: [
      'Built scalable SaaS products serving thousands of users across multiple industries',
      'Designed AI-powered workflows that reduced manual processing time by 60%',
      'Developed cloud-native solutions on AWS with auto-scaling and high availability',
      'Implemented enterprise-level frontend architectures using micro-frontend patterns',
      'Created robust backend APIs handling millions of requests per day',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'ArcadianAI',
    period: '2024 – 2025',
    mode: 'Remote',
    modeClass: 'secondary',
    tech: ['Vue 3', 'Node.js'],
    bullets: [
      'Built real-time AI surveillance dashboard features for production users',
      'Architected clean Vue 3 modules adopted quickly by the internal team',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'FieldPulse',
    period: '2023',
    mode: 'Remote',
    modeClass: 'secondary',
    tech: ['Svelte', 'SvelteKit', 'Strapi'],
    bullets: [
      'Shipped field-service scheduling and dispatch experiences for technicians',
      'Integrated mapping and routing workflows into the core product',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Xensam',
    period: '2021 – 2023',
    mode: 'Remote',
    modeClass: 'secondary',
    tech: ['SvelteKit', 'Directus'],
    bullets: [
      'Rebuilt legacy frontend in SvelteKit with major load-time improvements',
      'Delivered complex SAM tooling with scalable data-heavy interfaces',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'uConnect Technologies Pvt Ltd',
    period: '2020 – 2024',
    mode: 'On-site',
    modeClass: 'accent',
    tech: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
    bullets: [
      'Developed responsive customer-facing web applications for regional clients',
      'Improved performance through lazy loading, code splitting, and asset optimization',
      'Collaborated with design teams for pixel-perfect UI implementation',
    ],
  },
]

export const projects = [
  {
    title: 'Arcadian',
    href: 'https://app.ourarcadian.com/#/',
    description: 'AI-powered surveillance dashboard with real-time video analytics and threat detection',
    tags: ['Vue 3', 'Node.js', 'AI'],
    image: projectImageUrls.arcadian,
  },
  {
    title: 'QuoHR',
    href: 'https://cloud.quohr.com/login',
    description: 'Enterprise HR management system with employee lifecycle automation',
    tags: ['React', 'TypeScript', 'Node.js'],
    image: projectImageUrls.quohr,
  },
  {
    title: 'GilgitApp',
    href: 'https://gilgit.app/',
    description: 'Regional digital platform connecting local businesses and communities',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    image: projectImageUrls.gilgit,
  },
  {
    title: 'IntellQuery AI',
    href: 'https://airagchatbot.vercel.app/',
    description: 'AI-powered RAG chatbot with intelligent document querying capabilities',
    tags: ['Next.js', 'AI', 'RAG', 'Vector DB'],
    image: projectImageUrls.intellquery,
  },
  {
    title: 'Cathoven',
    href: 'https://ielts.cathoven.com/ielts/register',
    description: 'IELTS preparation platform with AI-driven assessment and scoring',
    tags: ['React', 'TypeScript', 'AI'],
    image: projectImageUrls.cathoven,
  },
  {
    title: 'BBR Boat Rentals',
    href: 'https://bbrboatrentals.com/',
    description: 'Boat rental booking platform with real-time availability and payments',
    tags: ['React', 'Firebase', 'TypeScript'],
    image: projectImageUrls.bbr,
  },
  {
    title: 'Velnix',
    href: 'https://velnix-platform.vercel.app/en/login',
    description: 'SaaS platform with multi-tenant architecture and cloud-native deployment',
    tags: ['Next.js', 'AWS', 'TypeScript'],
    image: projectImageUrls.velnix,
  },
  {
    title: 'SteriPilotAI',
    href: 'https://steripilot-frontend-m4xtfatkmq-uc.a.run.app/login',
    description: 'AI healthcare platform for medical sterilization compliance tracking',
    tags: ['React', 'Node.js', 'AI', 'GCP'],
    image: projectImageUrls.steripilot,
  },
  {
    title: 'CARLA',
    href: 'https://dev.usecarla.de/',
    description: 'Automotive technology platform with digital interfaces and connected mobility solutions',
    tags: ['React', 'TypeScript', 'Node.js'],
    image: projectImageUrls.carla,
  },
  {
    title: 'Eldrin AI',
    href: 'https://www.eldrin.ai/',
    description: 'AI-powered intelligent assistant with conversational interfaces and workflow automation',
    tags: ['Next.js', 'AI', 'TypeScript'],
    image: projectImageUrls.eldrin,
  },
  {
    title: 'GreatCoops',
    href: 'https://ai.greatcoops.com/',
    description: 'AI-driven cooperative business platform with intelligent workflow and team collaboration',
    tags: ['React', 'AI', 'Node.js'],
    image: projectImageUrls.greatcoops,
  },
]

export const testimonials = [
  {
    quote:
      "Tajwar is hands-down the most technically versatile developer I've worked with. He took our vague SaaS idea and turned it into a production-ready platform in weeks — not months. His AI integration work alone saved us six figures in operational costs.",
    name: 'Marcus Chen',
    role: 'CTO, Velnix Technologies',
    location: 'San Francisco, USA',
    initial: 'M',
  },
  {
    quote:
      'We handed Tajwar a legacy codebase that three previous developers refused to touch. He not only untangled it but rebuilt the entire frontend in SvelteKit with zero downtime. Our page load times dropped from 8 seconds to under 1.5. Absolute wizard.',
    name: 'Erik Johansson',
    role: 'VP of Engineering, Xensam AB',
    location: 'Stockholm, Sweden',
    initial: 'E',
  },
  {
    quote:
      'Hiring Tajwar was the best decision we made for the Arcadian dashboard. His Vue 3 architecture is so clean our internal team picked it up in days. The real-time AI surveillance features he built are now the core selling point of our product.',
    name: 'David Park',
    role: 'Founder & CEO, ArcadianAI',
    location: 'Seoul, South Korea',
    initial: 'D',
  },
  {
    quote:
      "Tajwar built our entire booking platform from scratch — frontend, backend, Firebase integration, the works. Launched on time, under budget, and we've had exactly zero critical bugs in six months. That's unheard of in our industry.",
    name: 'Robert Mitchell',
    role: 'Owner, BBR Boat Rentals',
    location: 'Miami, USA',
    initial: 'R',
  },
  {
    quote:
      "I've managed dozens of offshore developers and Tajwar stands alone at the top. Communication is flawless, deadlines are sacred to him, and the code quality rivals senior engineers at FAANG companies. He doesn't just build features — he thinks about the business.",
    name: 'Priya Sharma',
    role: 'Product Director, FieldPulse Inc',
    location: 'Austin, USA',
    initial: 'P',
  },
  {
    quote:
      "Tajwar's AI engineering skills transformed our healthcare compliance platform. He integrated RAG-based document intelligence that automatically flags sterilization protocol violations. Our audit preparation time dropped by 80%. Simply brilliant work.",
    name: 'Dr. James Wilson',
    role: 'Chief Medical Officer, SteriPilotAI',
    location: 'London, UK',
    initial: 'J',
  },
]

export const certifications = [
  'AWS Certified Developer – Associate',
  'Meta Frontend Developer Professional Certificate',
  'Google Cloud Digital Leader',
  'MongoDB Associate Developer',
]
