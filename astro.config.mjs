// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@shared': fileURLToPath(new URL('./src/shared', import.meta.url)),
        '@entities': fileURLToPath(new URL('./src/entities', import.meta.url)),
        '@features': fileURLToPath(new URL('./src/features', import.meta.url)),
        '@widgets': fileURLToPath(new URL('./src/widgets', import.meta.url)),
      },
    },
  },

  adapter: cloudflare(),
});