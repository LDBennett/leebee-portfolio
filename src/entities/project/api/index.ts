import { getCollection, getEntry } from 'astro:content';

export async function getProjects() {
  const projects = await getCollection('projects');
  return projects.sort((a, b) => {
    if (a.data.featured && !b.data.featured) return -1;
    if (!a.data.featured && b.data.featured) return 1;
    return b.data.startDate.getTime() - a.data.startDate.getTime();
  });
}

export async function getProject(slug: string) {
  return getEntry('projects', slug);
}
