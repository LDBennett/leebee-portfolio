const DEFAULT_TILT = 10;

function setupTilt(el: HTMLElement): void {
  const maxTilt = parseFloat(el.dataset.tilt || '') || DEFAULT_TILT;

  const glare = document.createElement('div');
  glare.className = 'card-glare';
  el.appendChild(glare);

  el.addEventListener('mouseenter', () => {
    el.style.transition = 'box-shadow 0.3s ease-out, translate 0.3s ease-out';
  });

  el.addEventListener('mousemove', (e: MouseEvent) => {
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const tiltX = (y - 0.5) * -maxTilt;
    const tiltY = (x - 0.5) * maxTilt;

    el.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    glare.style.setProperty('--glare-x', `${x * 100}%`);
    glare.style.setProperty('--glare-y', `${y * 100}%`);
  });

  el.addEventListener('mouseleave', () => {
    el.style.transition = 'transform 0.4s ease-out, box-shadow 0.3s ease-out, translate 0.3s ease-out';
    el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)';
  });
}

document.querySelectorAll<HTMLElement>('[data-tilt]').forEach(setupTilt);
