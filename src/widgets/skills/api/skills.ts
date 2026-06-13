export interface SkillCategory {
  label: string;
  accent: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: 'Frontend',
    accent: 'text-emerald-400',
    skills: ['React', 'TypeScript', 'TanStack', 'React Router 7', 'Remix', 'Next.js', 'Vue.js', 'JavaScript', 'Tailwind CSS', 'SASS', 'Astro'],
  },
  {
    label: 'Backend',
    accent: 'text-blue-400',
    skills: ['Node.js', 'PHP', 'Laravel', 'Kafka', 'Microservices'],
  },
  {
    label: 'Database & Infra',
    accent: 'text-orange-400',
    skills: ['PostgreSQL', 'Supabase'],
  },
  {
    label: 'Tools & Workflow',
    accent: 'text-purple-400',
    skills: ['Git', 'Claude AI', 'GitHub Copilot'],
  },
];
