module.exports = {
  title: "Kenve's Blog",
  tagline: 'The tagline of my site',
  url: 'https://kenve.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'kenve',
  projectName: 'kenve.github.io',
  themeConfig: {
    announcementBar: {
      id: 'supportus',
      content:
        '<b>⭐️ Welcome to star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/kenve/kenve.github.io">GitHub</a> ⭐️</b>',
      textColor: '#fff',
    },
    sidebarCollapsible: false,
    algolia: {
      apiKey: '7141d77dc6dacb0119d037bc03ec91df',
      indexName: 'kenve',
    },
    navbar: {
      title: "Kenve's Blog",
      links: [
        {
          to: 'docs/interview/introduction',
          activeBasePath: 'interview',
          label: '进阶 & 面试',
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
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/kenve/kenve.github.io/edit/docusaurus/',
        },
        blog: {
          path: './blog',
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
