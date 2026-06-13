const el = document.getElementById('mouse-light');
if (!el) throw new Error('[mouseLightEffect] #mouse-light element not found');

document.addEventListener('mousemove', (e: MouseEvent) => {
  el.style.setProperty('--mouse-x', `${e.clientX}px`);
  el.style.setProperty('--mouse-y', `${e.clientY}px`);
});
