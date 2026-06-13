import { animate, stagger } from 'motion';

animate(
  '[data-hero-card]',
  { opacity: [0, 1], y: [20, 0] },
  { delay: stagger(0.12), duration: 0.6, easing: [0.25, 0.1, 0.25, 1] }
);
