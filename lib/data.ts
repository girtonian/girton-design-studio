/**
 * Sample content data
 * Replace with CMS or MDX files in production
 */

import { Project, TimelineItem, Tool } from './types'

export const projects: Project[] = [
  {
    slug: 'kyzen-design-system',
    title: 'Kyzen Design System',
    role: 'Lead Designer',
    year: 2024,
    client: 'Kyzen',
    tags: ['Design System', 'Web3', 'React', 'Figma'],
    thumbnail: 'https://placehold.co/1200x675/0f172a/fafaf9?text=Kyzen+Design+System',
    featured: true,
    description:
      'Built a comprehensive design system for a Web3 platform, improving development velocity by 35%.',
    href: '/work/kyzen-design-system',
  },
  {
    slug: 'united-airlines',
    title: 'United Airlines Mobile Redesign',
    role: 'Senior UX Designer',
    year: 2023,
    client: 'United Airlines',
    tags: ['Mobile', 'Enterprise', 'iOS', 'Android'],
    thumbnail: 'https://placehold.co/1200x675/1e293b/fafaf9?text=United+Airlines',
    featured: true,
    description:
      'Redesigned the mobile booking experience, resulting in 20% increase in mobile conversions.',
    href: '/work/united-airlines',
  },
  {
    slug: 'boeing-dashboard',
    title: 'Boeing Analytics Dashboard',
    role: 'UX/UI Designer',
    year: 2023,
    client: 'Boeing',
    tags: ['Enterprise', 'Data Viz', 'Dashboard', 'B2B'],
    thumbnail: 'https://placehold.co/600x400/334155/fafaf9?text=Boeing+Dashboard',
    description:
      'Created an analytics dashboard for supply chain management with complex data visualization.',
    href: '/work/boeing-dashboard',
  },
  {
    slug: 'samsung-wearables',
    title: 'Samsung Wearables UI',
    role: 'UI Designer',
    year: 2022,
    client: 'Samsung',
    tags: ['Wearables', 'Mobile', 'Consumer'],
    thumbnail: 'https://placehold.co/600x400/475569/fafaf9?text=Samsung+Wearables',
    description:
      'Designed the user interface for next-generation Samsung smartwatch applications.',
    href: '/work/samsung-wearables',
  },
  {
    slug: 'impact-theory',
    title: 'Impact Theory Platform',
    role: 'Product Designer',
    year: 2021,
    client: 'Impact Theory',
    tags: ['Web3', 'NFT', 'Community', 'Brand'],
    thumbnail: 'https://placehold.co/600x400/64748b/fafaf9?text=Impact+Theory',
    description:
      'Designed the community platform and NFT marketplace for Impact Theory.',
    href: '/work/impact-theory',
  },
  {
    slug: 'fjord-client-work',
    title: 'Enterprise Design at Fjord',
    role: 'Senior Designer',
    year: 2020,
    client: 'Fjord (Accenture)',
    tags: ['Enterprise', 'Service Design', 'B2B'],
    thumbnail: 'https://placehold.co/600x400/94a3b8/171717?text=Fjord+Projects',
    description:
      'Led multiple enterprise design projects for Fortune 500 clients.',
    href: '/work/fjord-client-work',
  },
]

export const timelineItems: TimelineItem[] = [
  {
    year: '2024',
    title: 'Founded Girtonian LLC',
    company: 'Girtonian LLC',
    description:
      'Launched independent design practice focusing on design systems and Web3 interfaces.',
  },
  {
    year: '2021-2024',
    title: 'Lead Designer',
    company: 'Kyzen',
    description:
      'Built design system and led product design for Web3 DeFi platform. Managed team of 3 designers.',
  },
  {
    year: '2019-2021',
    title: 'Senior UX Designer',
    company: 'Impact Theory',
    description:
      'Designed NFT marketplace and community platform. Pioneered Web3 design patterns.',
  },
  {
    year: '2016-2019',
    title: 'Senior Designer',
    company: 'Fjord (Accenture)',
    description:
      'Led enterprise design projects for clients including United Airlines, Boeing, and Samsung.',
  },
  {
    year: '2014-2016',
    title: 'Product Designer',
    company: 'Various Startups',
    description:
      'Freelance and contract work for early-stage startups in fintech and SaaS.',
  },
  {
    year: '2010',
    title: 'Started Design Career',
    description:
      'Began journey in digital design with focus on user-centered design principles.',
  },
]

export const tools: Tool[] = [
  {
    name: 'Figma',
    category: 'Design',
    description: 'Primary design tool for UI/UX and prototyping',
  },
  {
    name: 'Framer',
    category: 'Prototyping',
    description: 'Advanced prototyping and interactive design',
  },
  {
    name: 'React',
    category: 'Development',
    description: 'Component-based design implementation',
  },
  {
    name: 'TypeScript',
    category: 'Development',
    description: 'Type-safe design system development',
  },
  {
    name: 'Tailwind CSS',
    category: 'Development',
    description: 'Utility-first CSS for rapid prototyping',
  },
  {
    name: 'Storybook',
    category: 'Documentation',
    description: 'Component documentation and testing',
  },
  {
    name: 'Adobe Creative Suite',
    category: 'Design',
    description: 'Brand design and visual assets',
  },
  {
    name: 'Principle',
    category: 'Prototyping',
    description: 'Animation and micro-interaction design',
  },
]

export const stats = [
  { value: 14, label: 'Years of experience', suffix: '+' },
  { value: 50, label: 'Projects delivered', suffix: '+' },
  { value: 35, label: 'Faster production time', suffix: '%' },
  { value: 5, label: 'Fortune 500 clients' },
]
