import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import dts from 'vite-plugin-dts'
import UnoCSS from 'unocss/vite'

const outDir = 'es'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    UnoCSS(),
    // dts({
    //   include: ['src/components'],
    //   exclude: ['node_modules', 'src/components/*/demos'],
    //   outDir,
    //   compilerOptions: {
    //     sourceMap: false,
    //     declarationMap: true,
    //     paths: {
    //       '@/*': ['src/*'],
    //       'naive-ui': ['node_modules/naive-ui'],
    //       vue: ['node_modules/vue'],
    //       'lodash-es': ['node_modules/lodash-es'],
    //     }
    //   },
    //   copyDtsFiles: true,
    //   tsconfigPath: 'tsconfig.json',
    // }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir,
    sourcemap: true,
    rollupOptions: {
      external: ['vue', 'naive-ui', 'lodash-es'],
      output: [
        {
          format: 'cjs',
          preserveModules: true,
          preserveModulesRoot: __dirname,
          dir: 'lib',
          entryFileNames: '[name].cjs'
        },
        {
          format: 'es',
          preserveModules: true,
          preserveModulesRoot: __dirname,
          dir: 'es',
          entryFileNames: '[name].mjs'
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
