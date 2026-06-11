// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://suatbalamir.com',
  integrations: [sitemap()],
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  redirects: {
    '/admin': '/admin/index.html',
  },
});
