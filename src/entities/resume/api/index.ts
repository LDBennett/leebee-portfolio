import { getCollection, getEntry } from 'astro:content';

export async function getResumeEntries() {
  const entries = await getCollection('resume');
  return entries.sort((a, b) => b.data.startDate.localeCompare(a.data.startDate));
}

export async function getResumeEntry(id: string) {
  return getEntry('resume', id);
}
