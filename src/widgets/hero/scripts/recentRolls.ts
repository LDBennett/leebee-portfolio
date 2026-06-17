const URL = `${import.meta.env.PUBLIC_ROLLS_API_URL}/api/public/recent`;

interface Roll {
  dieType: number;
  value: number;
}

interface RecentSession {
  rolls: Roll[];
}

async function updateRecentRolls() {
  const container = document.querySelector('[data-recent-rolls]');
  if (!container) return;
  try {
    const res = await fetch(URL);
    if (!res.ok) return;
    const { recentSession }: { recentSession: RecentSession } = await res.json();
    if (!recentSession?.rolls?.length) return;

    const isMobile = window.matchMedia('(max-width: 639px)').matches;
    const count = isMobile ? 2 : 3;
    container.innerHTML = '';
    recentSession.rolls.slice(0, count).forEach((roll, i) => {
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

updateRecentRolls();
