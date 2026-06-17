const GAMES_URL = `${import.meta.env.PUBLIC_GAMES_API_URL}/api/public/now-playing`;
const ROLLS_URL = `${import.meta.env.PUBLIC_ROLLS_API_URL}/api/public/recent`;

interface Game {
  title: string;
  priority_score: number;
}

interface Roll {
  dieType: number;
  value: number;
}

interface RecentSession {
  rolls: Roll[];
}

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

async function cycleTypewriter(textNode: Text, titles: string[]) {
  if (titles.length === 1) {
    for (let i = 0; i <= titles[0].length; i++) {
      textNode.textContent = titles[0].slice(0, i);
      await sleep(80);
    }
    return;
  }

  let idx = 0;
  while (true) {
    const title = titles[idx];

    for (let i = 0; i <= title.length; i++) {
      textNode.textContent = title.slice(0, i);
      await sleep(80);
    }

    await sleep(2200);

    for (let i = title.length; i >= 0; i--) {
      textNode.textContent = title.slice(0, i);
      await sleep(40);
    }

    await sleep(300);
    idx = (idx + 1) % titles.length;
  }
}

async function updateNowPlaying() {
  const el = document.querySelector('[data-now-playing]');
  if (!el) return;
  try {
    const res = await fetch(GAMES_URL);
    if (!res.ok) return;
    const { games }: { games: Game[] } = await res.json();
    if (!games?.length) return;

    // Persistent text node + cursor — updating textNode never resets the blink animation
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

async function updateRecentRolls() {
  const container = document.querySelector('[data-recent-rolls]');
  if (!container) return;
  try {
    const res = await fetch(ROLLS_URL);
    if (!res.ok) return;
    const { recentSession }: { recentSession: RecentSession } = await res.json();
    if (!recentSession?.rolls?.length) return;

    container.innerHTML = '';
    recentSession.rolls.slice(0, 3).forEach((roll, i) => {
      if (i > 0) {
        const sep = document.createElement('span');
        sep.textContent = '·';
        sep.className = 'text-muted/40 text-xs';
        container.appendChild(sep);
      }

      const slot = document.createElement('span');
      slot.className = 'flex items-center gap-1';

      const val = document.createElement('span');
      val.textContent = String(roll.value);
      val.className = 'text-secondary font-mono text-xs';
      slot.appendChild(val);

      const slash = document.createElement('span');
      slash.textContent = '/';
      slash.className = 'text-muted/40 text-xs';
      slot.appendChild(slash);

      const iconTemplate = document.querySelector(`[data-die-icon="${roll.dieType}"]`);
      if (iconTemplate) {
        const iconClone = iconTemplate.firstElementChild!.cloneNode(true) as SVGElement;
        slot.appendChild(iconClone);
      }

      container.appendChild(slot);
    });
  } catch {
    // leave placeholder
  }
}

updateNowPlaying();
updateRecentRolls();
