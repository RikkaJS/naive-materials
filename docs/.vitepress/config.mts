import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Rikka Naive',
  description: '基于 Naive UI 的二次封装',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: '组件',
        items: [
          { text: 'Form 表单', link: '/components/form.md' },
          { text: 'Table 表格', link: '/components/table.md' },
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Mikasa33/rikka-naive' },
    ],
  },
})