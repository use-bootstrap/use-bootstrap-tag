import { defineConfig } from 'astro/config'
import solidJs from '@astrojs/solid-js'

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs()],
  devToolbar: {
    enabled: false,
  },
  build: {
    format: 'file',
    assets: 'assets',
  },
  outDir: 'docs',
  server: {
    port: 3000,
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
})
