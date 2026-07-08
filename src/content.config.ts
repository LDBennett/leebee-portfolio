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
    type: z.string().optional(),
    status: z.string().optional(),
    note: z.string().optional(),
    liveUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    highlights: z.array(z.string()).optional(),
    previewImage: z.string().optional(),
  }),
});

const projectNotes = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projectNotes' }),
  schema: z.object({}),
});

const resumeNotes = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/resumeNotes' }),
  schema: z.object({
    keyWins: z.array(z.string()).optional(),
    introduced: z.array(z.string()).optional(),
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

const education = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/education' }),
  schema: z.object({
    institution: z.string(),
    degree: z.string(),
    field: z.string(),
    startYear: z.number(),
    endYear: z.number(),
    honors: z.string().optional(),
    minor: z.string().optional(),
    focus: z.string().optional(),
    courses: z.array(z.string()).optional(),
  }),
});

export const collections = { projects, projectNotes, resume, resumeNotes, education };
