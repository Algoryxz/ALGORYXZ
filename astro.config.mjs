import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Canonical production domain requires human confirmation by Smarak before live cutover
  site: process.env.SITE_URL || undefined,
  output: 'static',
  build: {
    format: 'directory'
  }
});
