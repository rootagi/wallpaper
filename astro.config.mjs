import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://mylinuxforwork.github.io',
  base: '/wallpaper',
  integrations: [tailwind()],
  build: {
    format: 'directory'
  }
});
