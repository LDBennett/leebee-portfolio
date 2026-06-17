import { animate, stagger } from 'motion';

animate(
  document.querySelectorAll('[data-hero-card]'),
  { opacity: [0, 1], y: [20, 0] },
  { delay: stagger(0.12), duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
);
