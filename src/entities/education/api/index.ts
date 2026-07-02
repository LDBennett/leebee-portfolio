import { getCollection } from 'astro:content';

export async function getEducation() {
  const entries = await getCollection('education');
  return entries.sort((a, b) => b.data.endYear - a.data.endYear);
}
