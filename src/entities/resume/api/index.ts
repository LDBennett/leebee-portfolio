import { getCollection } from 'astro:content';
import type { ResumeEntryData } from '../types';

export async function getResumeEntries(): Promise<ResumeEntryData[]> {
  return getCollection('resume');
}
