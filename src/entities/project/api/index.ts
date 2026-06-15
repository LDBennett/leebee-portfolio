import { getCollection, getEntry } from 'astro:content';
import type { Project } from '../types';

export async function getProjects(): Promise<Project[]> {
  return getCollection('projects');
}

export async function getProject(id: string): Promise<Project | undefined> {
  return getEntry('projects', id);
}
