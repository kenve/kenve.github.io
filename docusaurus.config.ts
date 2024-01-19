import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
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
      {
        docs: {
          sidebarCollapsed: false,
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/kenve/kenve.github.io/edit/docusaurus/',
        },
        blog: {
          showReadingTime: true,
          path: 'blog',
          routeBasePath: '/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'UA-164590421-1',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    announcementBar: {
      id: 'supportus',
      content:
        '<b>⭐️ Welcome to star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/kenve/kenve.github.io">GitHub</a> ⭐️</b>',
      backgroundColor: 'var(--ifm-color-primary)',
      textColor: '#fff',
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
          to: 'docs/knowledge/data-structure/stack',
          label: '数据结构 & 算法',
          activeBaseRegex: 'docs/knowledge/(data-structure|algorithms)',
          position: 'right',
        },
        {
          to: 'docs/knowledge/introduction',
          label: '基础 & 进阶',
          activeBaseRegex: 'docs/knowledge/(js|browser|system|introduction)',
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
  } satisfies Preset.ThemeConfig,
};

export default config;
