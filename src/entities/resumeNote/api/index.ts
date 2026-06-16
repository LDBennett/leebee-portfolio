import { getCollection, getEntry } from 'astro:content';

export async function getResumeNotes() {
  return getCollection('resumeNotes').catch(() => []);
}

export async function getResumeNoteSlugs(): Promise<Set<string>> {
  const notes = await getResumeNotes();
  return new Set(notes.map((n) => n.id));
}

export async function getResumeNote(slug: string) {
  return getEntry('resumeNotes', slug);
}
