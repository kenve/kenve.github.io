module.exports = {
  title: "Kenve's Blog",
  tagline: 'The tagline of my site',
  url: 'https://kenve.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'kenve',
  projectName: 'kenve.github.io',
  themeConfig: {
    navbar: {
      title: "Kenve's Blog",
      links: [
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
        blog: {
          path: './blog',
          routeBasePath: '/',
        },
      },
    ],
  ],
};
