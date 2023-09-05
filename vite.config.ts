import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

const port = 3000

export default defineConfig({
  plugins: [solid()],
  build: {
    outDir: 'docs',
  },
  server: { port },
  preview: { port },
  css: {
    devSourcemap: true,
  },
})
