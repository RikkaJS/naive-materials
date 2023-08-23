import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    UnoCSS(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    target: 'modules',
    minify: true,
    rollupOptions: {
      external: ['vue', 'naive-ui', 'lodash-es'],
    },
    lib: {
      entry: './src/components/index.ts',
      name: 'rikka-naive',
      fileName: 'rikka-naive',
    },
  },
})
