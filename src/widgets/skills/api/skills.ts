export interface SkillCategory {
  label: string;
  accent: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: 'Frontend',
    accent: 'text-emerald-400',
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
    skills: ['Node.js', 'PHP', 'Laravel', 'Zend Framework', 'Kafka', 'Microservices'],
  },
  {
    label: 'Database & Infra',
    accent: 'text-orange-400',
    skills: ['PostgreSQL', 'mySQL', 'Supabase', 'Neon', 'Drizzle ORM', 'Cloudflare Workers'],
  },
  {
    label: 'Tools & Workflow',
    accent: 'text-purple-400',
    skills: ['Vite', 'Jest', 'Vitest', 'Git', 'Claude AI', 'GitHub Copilot'],
  },
  {
    label: 'Methodology',
    accent: 'text-pink-400',
    skills: ['Domain Driven Design', 'Feature-Sliced Design', 'BEM'],
  },
];
