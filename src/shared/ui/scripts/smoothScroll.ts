function easeInOutQuart(t: number): number {
  return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
}

function smoothScrollTo(targetY: number, duration = 900): void {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  function step(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + distance * easeInOutQuart(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const hash = link.getAttribute('href');
    if (!hash) return;

    if (hash === '#') {
      e.preventDefault();
      smoothScrollTo(0);
      return;
    }

    const target = document.querySelector(hash);
    if (!target) return;

    e.preventDefault();
    const targetY = target.getBoundingClientRect().top + window.scrollY;
    smoothScrollTo(targetY);
  });
});
