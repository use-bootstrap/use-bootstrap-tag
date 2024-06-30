import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import { generate } from 'fast-dts'
import solid from 'vite-plugin-solid'
import pkg from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
    minify: false,
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, pkg.source),
      name: pkg.libName,
      formats: ['es', 'iife'],
      fileName: format => `${pkg.name}.${format === 'es' ? 'esm.js' : 'js'}`,
    },
  },
  plugins: [
    solid(),
    {
      name: 'dts',
      async closeBundle() {
        await generate(pkg.source, pkg.types)
      },
    },
  ],
})
