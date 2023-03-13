// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Kenve's Blog",
  tagline: 'Front-end are cool',
  favicon: 'img/favicon.png',
  url: 'https://kenve.github.io',
  baseUrl: '/',
  organizationName: 'kenve',
  projectName: 'kenve.github.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarCollapsed: false,
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/kenve/kenve.github.io/edit/docusaurus/',
        },
        blog: {
          showReadingTime: true,
          path: 'blog',
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'UA-164590421-1',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'supportus',
        content:
          '<b>⭐️ Welcome to star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/kenve/kenve.github.io">GitHub</a> ⭐️</b>',
        backgroundColor: 'var(--ifm-color-primary)',
        textColor: '#fff',
      },
      algolia: {
        appId: '2BX4JB1G3V',
        apiKey: 'b27791f9b673937c56b09390485e1627',
        indexName: 'blog',
      },
      navbar: {
        title: "Kenve's Blog",
        items: [
          {
            to: '/',
            label: '博客',
            position: 'right',
          },
          {
            to: 'docs/knowledge/introduction',
            activeBasePath: 'knowledge',
            label: '基础 & 进阶',
            position: 'right',
          },
          {
            to: 'docs/knowledge/data-structure/stack',
            label: '数据结构 & 算法',
            position: 'right',
          },
          {
            href: 'https://github.com/kenve/leetcode',
            label: 'LeetCode 题解',
            position: 'right',
          },
          {
            href: 'https://github.com/kenve',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} kenve. Built with Docusaurus.`,
      },
    }),
};

module.exports = config;
