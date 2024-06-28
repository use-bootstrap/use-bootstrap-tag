import { resolve } from 'node:path'
import { readFile, writeFile } from 'node:fs/promises'
import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import oxc from 'oxc-transform'
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
        const file = pkg.source
        const text = await readFile(file, 'utf8')
        const code = oxc.isolatedDeclaration(file, text)
        await writeFile(pkg.types, code.sourceText)
      },
    },
  ],
})
