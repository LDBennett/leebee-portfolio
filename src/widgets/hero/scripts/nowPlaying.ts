import { cycleTypewriter } from '../utils/cycleTypewriter';

const URL = `${import.meta.env.PUBLIC_GAMES_API_URL}/api/public/now-playing`;

interface Game {
  title: string;
  priority_score: number;
}

async function updateNowPlaying() {
  const el = document.querySelector('[data-now-playing]');
  if (!el) return;
  try {
    const res = await fetch(URL);
    if (!res.ok) return;
    const { games }: { games: Game[] } = await res.json();
    if (!games?.length) return;

    // Persistent text node + sibling cursor span — updating textNode never resets the blink animation
    el.textContent = '';
    const textNode = document.createTextNode('');
    const cursor = document.createElement('span');
    cursor.textContent = '_';
    cursor.className = 'typewriter-cursor text-gaming/60 text-xs';
    cursor.setAttribute('aria-hidden', 'true');
    el.appendChild(textNode);
    el.appendChild(cursor);

    const titles = games.sort((a, b) => b.priority_score - a.priority_score).map((g) => g.title);
    cycleTypewriter(textNode, titles); // intentionally not awaited — runs indefinitely
  } catch {
    // leave placeholder
  }
}

updateNowPlaying();
