/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'tDCS',
  tagline: 'tDCS',
  url: 'https://help.xzytdcs.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'entertech', // Usually your GitHub org/user name.
  projectName: 'tDCS', // Usually your repo name.
  themeConfig: {
    algolia: {
      apiKey: "8f5905d5450125399704a4b158628c01",
      indexName: "amphoradata",

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
    navbar: {
      title: 'tDCS Help',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'Docs',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/Entertech/tDCS-Documents/tree/master/tDCS',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Entertech',
          items: [
            {
              label: 'Entertech',
              href: 'https://www.entertech.cn/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'FAQ',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Entertech/tDCS-Documents/tree/master/tDCS',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} tDCS, Inc. Built with Entertech.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
