import solidJs from '@astrojs/solid-js'
import { defineConfig } from 'astro/config'
import FullReload from 'vite-plugin-full-reload'

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
  vite: {
    plugins: [
      FullReload('src/lib/**/*'),
    ],
  },
})
