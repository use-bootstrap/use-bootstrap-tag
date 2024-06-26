import { parse, resolve } from 'node:path'
import { rename } from 'node:fs/promises'
import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import dts from 'vite-plugin-dts'
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
    dts({
      // library source only.
      include: pkg.source,

      // fix the generated declaration files following the source structure.
      entryRoot: parse(pkg.source).dir,

      // follow package.json "types" property.
      afterBuild: () => rename(`dist/${parse(pkg.source).name}.d.ts`, pkg.types),
    }),
  ],
})
