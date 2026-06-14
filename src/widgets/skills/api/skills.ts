export interface SkillCategory {
  label: string;
  accent: string;
  colSpan?: 1 | 2 | 3;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: 'Frontend',
    accent: 'text-emerald-400',
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
      'Zustand',
      'React Bootstrap',
      'Astro',
    ],
  },
  {
    label: 'Backend',
    accent: 'text-blue-400',
    colSpan: 1,
    skills: [
      'Node.js',
      'Express',
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
    colSpan: 2,
    skills: ['Supabase', 'Neon', 'Drizzle ORM', 'Cloudflare Workers', 'Cloudflare Pages', 'Vercel'],
  },
  {
    label: 'Tools & Workflow',
    accent: 'text-purple-400',
    colSpan: 2,
    skills: ['Vite', 'Jest', 'Vitest', 'Git', 'Claude AI', 'GitHub Copilot'],
  },
  {
    label: 'Methodology',
    accent: 'text-pink-400',
    colSpan: 1,
    skills: ['Domain Driven Design', 'Feature-Sliced Design', 'BEM'],
  },
];
