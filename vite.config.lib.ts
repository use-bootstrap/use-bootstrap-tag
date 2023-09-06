import { resolve } from 'node:path'
import { rename } from 'node:fs/promises'
import { defineConfig } from 'vite'
import { pascalCase } from 'scule'
import dts from 'vite-plugin-dts'
import pkg from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, pkg.source),
      name: pascalCase(pkg.name),
      formats: ['es', 'iife'],
      fileName: format => `${pkg.name}.${format === 'es' ? 'esm.js' : 'js'}`,
    },
  },
  plugins: [
    dts({
      include: pkg.source,
      insertTypesEntry: true,
      afterBuild: () => rename('dist/use-bootstrap-tag.d.ts', pkg.types),
    }),
  ],
})
