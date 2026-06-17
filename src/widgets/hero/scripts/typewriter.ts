import { cycleTypewriter } from '../utils/cycleTypewriter';

const el = document.querySelector<HTMLElement>('[data-typewriter]');
if (el) {
  const text = el.dataset.text ?? '';
  el.textContent = '';

  const textNode = document.createTextNode('');
  const cursor = document.createElement('span');
  cursor.className = 'typewriter-cursor';
  cursor.textContent = '_';
  el.append(textNode, cursor);

  setTimeout(() => cycleTypewriter(textNode, [text]), 700);
}
