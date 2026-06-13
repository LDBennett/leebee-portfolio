import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    featured: z.boolean().default(false),
    liveUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    highlights: z.array(z.string()).optional(),
  }),
});

const resume = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/resume' }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    startDate: z.string(),
    endDate: z.string().optional(),
    description: z.string(),
    highlights: z.array(z.string()),
    tags: z.array(z.string()),
  }),
});

export const collections = { projects, resume };
