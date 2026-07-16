export interface SkillCategory {
  label: string;
  accent: string;
  color: string;
  colSpan?: 1 | 2 | 3;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: 'Frontend',
    accent: 'text-emerald-400',
    color: 'emerald',
    colSpan: 3,
    skills: [
      'React',
      'TypeScript',
      'TanStack',
      'React Router 7',
      'Remix',
      'Next.js',
      'Vue.js',
      'Svelte',
      'SvelteKit',
      'JavaScript',
      'Tailwind CSS',
      'SASS/SCSS',
      'Framer Motion',
      'GSAP',
      'Zustand',
      'React Bootstrap',
      'Radix UI',
      'Astro',
    ],
  },
  {
    label: 'Backend',
    accent: 'text-blue-400',
    color: 'blue',
    colSpan: 1,
    skills: [
      'Node.js',
      'Express',
      'WebSockets',
      'PHP',
      'Laravel',
      'Zend Framework',
      'PostgreSQL',
      'mySQL',
      'Kafka',
    ],
  },
  {
    label: 'Database & Infra',
    accent: 'text-orange-400',
    color: 'orange',
    colSpan: 2,
    skills: [
      'Supabase',
      'Neon',
      'Drizzle ORM',
      'Cloudflare Workers',
      'Cloudflare Pages',
      'Cloudflare D1',
      'Vercel',
      'Turborepo',
      'Docker',
    ],
  },
  {
    label: 'Tools & Workflow',
    accent: 'text-purple-400',
    color: 'purple',
    colSpan: 2,
    skills: [
      'Vite',
      'Jest',
      'Vitest',
      'Git',
      'Claude AI',
      'GitHub Copilot',
      'Antigravity',
      'Figma',
    ],
  },
  {
    label: 'Methodology',
    accent: 'text-pink-400',
    color: 'pink',
    colSpan: 1,
    skills: [
      'Domain Driven Design',
      'Feature-Sliced Design',
      'BEM Styling',
      'Test-Driven Development',
      'Agile',
      'Scrum',
    ],
  },
];
