import { animate, inView } from 'motion';

const elements = document.querySelectorAll<HTMLElement>('[data-scroll-reveal]');

elements.forEach((el) => {
  inView(
    el,
    () => {
      animate(el, { opacity: [0, 1], y: [24, 0] }, { duration: 0.5, easing: [0.25, 0.1, 0.25, 1] });
    },
    { margin: '-60px 0px' }
  );
});
