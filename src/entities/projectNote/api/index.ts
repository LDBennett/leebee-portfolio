import { getCollection, getEntry } from 'astro:content';

export async function getProjectNotes() {
  return getCollection('projectNotes').catch(() => []);
}

export async function getProjectNoteSlugs(): Promise<Set<string>> {
  const notes = await getProjectNotes();
  return new Set(notes.map((n) => n.id));
}

export async function getProjectNote(slug: string) {
  return getEntry('projectNotes', slug);
}
