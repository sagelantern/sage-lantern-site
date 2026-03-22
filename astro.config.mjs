import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://sage-lantern.com',
  output: 'static',
  adapter: cloudflare(),
  integrations: [mdx(), tailwind()],
});
