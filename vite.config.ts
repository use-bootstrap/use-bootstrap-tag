// import type { PluginOption } from 'vite'
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

const port = 3000

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    outDir: 'docs',
  },
  server: { port },
  preview: { port },
  css: {
    devSourcemap: true,
  },
})
