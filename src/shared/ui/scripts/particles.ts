import { tsParticles } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

await loadSlim(tsParticles);

await tsParticles.load({
  id: 'tsparticles',
  options: {
    background: { color: 'transparent' },
    fpsLimit: 60,
    particles: {
      number: { value: 15 },
      color: { value: ['#60a5fa', '#34d399', '#818cf8'] },
      shape: { type: 'circle' },
      opacity: {
        value: { min: 0.02, max: 0.11 },
        animation: {
          enable: true,
          speed: 0.05,
          sync: false,
        },
      },
      size: {
        value: { min: 20, max: 40 },
        animation: {
          enable: true,
          speed: 1,
          sync: false,
        },
      },
      move: {
        enable: true,
        speed: 0.1,
        direction: 'none',
        random: true,
        straight: false,
        outModes: 'out',
      },
      links: { enable: false },
    },
    interactivity: {
      events: {
        onHover: { enable: false },
        onClick: { enable: false },
      },
    },
    detectRetina: true,
  },
});
