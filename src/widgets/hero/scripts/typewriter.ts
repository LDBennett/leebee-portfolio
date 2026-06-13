const el = document.querySelector<HTMLElement>('[data-typewriter]');
if (el) {
  const text = el.dataset.text ?? '';
  el.textContent = '';

  const cursor = document.createElement('span');
  cursor.className = 'typewriter-cursor';
  cursor.textContent = '_';
  el.appendChild(cursor);

  let i = 0;
  function typeNext() {
    if (i < text.length) {
      cursor.insertAdjacentText('beforebegin', text[i]);
      i++;
      setTimeout(typeNext, 80);
    }
  }

  setTimeout(typeNext, 700);
}
