module.exports = {
  base: '/',
  title: 'MSRebirth',
  description: 'The rebirth of the Half-Life mod Master Sword Continued.',

  plugins: [
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }],
    ['vuepress-plugin-container', {
      type: 'warning',
    }],
    ['vuepress-plugin-container', {
      type: 'tip',
    }],
    ['vuepress-plugin-container', {
      type: 'danger',
    }],
  ],

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/icon-16x16.png', sizes: '16x16' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/icon-32x32.png', sizes: '32x32' }],
    ['link', { rel: 'shortcut icon', href: '/icon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],

  themeConfig: {
    repo: 'https://github.com/MSRevive',
    docsRepo: 'MSRevive/website',
    editLinks: true,
    editLinkText: 'Help us improve this page.',
    lastUpdated: true,
    logo: '/icon.png',
    nav: [
      {
        text: 'Documentation',
        link: '/project/intro.md',
      },
      {
        text: 'Discord',
        link: 'https://discord.gg/nwJB9EhAN6'
      },
      {
        text: 'Dev',
        link: '/dev/game/intro.md'
      },
    ],
    sidebar: {
      '/dev/': [
        {
          title: 'Contributing',
          collapsable: false,
          children: [
            '/dev/game/intro.md',
            '/dev/game/game_code.md',
            '/dev/game/mapping.md'
          ]
        },
        {
          title: 'Scripts',
          collapsable: false,
          children: [
            '/dev/scripts/intro.md',
            '/dev/scripts/server.md',
            '/dev/scripts/shared.md',
            '/dev/scripts/client.md'
          ]
        },
      ],
      '/': [
        {
          title: 'Information',
          collapsable: false,
          children: [
            '/project/intro.md',
            '/project/about.md',
            '/project/community.md',
            '/project/special-thanks.md',
            '/project/maps.md'
          ]
        },
        {
          title: 'Guides',
          collapsable: false,
          children: [
            '/guides/installing.md'
          ]
        },
      ],
    }
  },
}
