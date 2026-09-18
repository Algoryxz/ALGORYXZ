import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Confirmed Cloudflare Pages production preview URL
  site: process.env.SITE_URL || 'https://algoryxz.pages.dev',
  output: 'static',
  build: {
    format: 'directory'
  }
});
