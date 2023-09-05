import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'

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
    outDir: 'es',
    rollupOptions: {
      external: ['vue', '@vueuse/core', 'naive-ui', 'lodash-es'],
      output: [
        {
          format: 'cjs',
          preserveModules: true,
          preserveModulesRoot: 'src',
          dir: 'lib',
          entryFileNames: '[name].cjs'
        },
        {
          format: 'es',
          preserveModules: true,
          preserveModulesRoot: 'src',
          dir: 'es',
          entryFileNames: '[name].js'
          // entryFileNames: (chunkInfo: any) => {
          //   return chunkInfo.name.replace(/\.vue/g, '') + '.js'
          // }
        },
      ],
    },
    lib: {
      entry: './src/index.ts',
      name: 'naive-materials',
      fileName: 'naive-materials',
      formats: ['es', 'cjs'],
    },
  },
})
