import { URL, fileURLToPath } from 'node:url'
import { defineConfig, postcssIsolateStyles } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url)),
      },
    },
    css: {
      postcss: {
        plugins: [
          postcssIsolateStyles({
            includeFiles: [/vp-doc\.css/],
          }),
        ],
      },
    },
  },
  title: 'Naive Materials',
  description: '基于 Naive UI 的二次封装',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components/form/index.md' },
    ],

    sidebar: [
      {
        text: '组件',
        items: [
          { text: 'Form 表单', link: '/components/form/index.md' },
          { text: 'Table 表格', link: '/components/table/index.md' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/RikkaJS/naive-materials' },
    ],
  },
})
