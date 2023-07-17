const { description } = require('../../package')

module.exports = {
  title: 'Tsuion.dev',
  description: 'wowane公式サイト',
  
  
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['link', { rel: 'stylesheet', href: `https://fonts.googleapis.com/css?family=M+PLUS+1p` }],
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ['meta', { name: 'theme-color', content: '#1e2554' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: 'wowane.png',
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: '最終更新日',
    nav: [
      {
        text: 'About',
        link: '/about/',
      },
      {
        text: 'Blog',
        link: '/blog/'
      },
      {
        text: 'Project',
        link: '/project/'
      },
      {
        text: 'Special',
        link: '/special/'
      }
    ],
    sidebar: {
      '/blog/': [
        {
          title: 'Blog',
          collapsable: false,
          children: [
            '',
            '20220611',
            '20220701',
            '20221005',
            '20221023',
            '20221114',
            '20230109',
            '20230606',
            '20230716',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    [
      '@vuepress/google-analytics',
      {
        'ga': 'G-CW7DPCKYWP' // UA-00000000-0
      }
    ]
  ]
}
