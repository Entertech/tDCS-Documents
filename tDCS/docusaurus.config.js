/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'tDCS',
  tagline: 'tDCS are cool',
  url: 'https://help.xzytdcs.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'entertech', // Usually your GitHub org/user name.
  projectName: 'tdcs', // Usually your repo name.
  themeConfig: {
    algolia: {
      appId: 'S5563UBO3D',
      apiKey: "8ca5a6454477070fdafd5d2923f9bd35",
      indexName: "tDCS",
    },
    navbar: {
      title: 'tDCS',
      logo: {
        alt: 'tDCS',
        src: 'img/logo.svg',
      },
      items: [
        // {
        //   type: 'doc',
        //   docId: 'Docs',
        //   position: 'left',
        //   label: 'Docs',
        // },
        // {to: '/blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/Entertech/tDCS-Documents/tree/master/tDCS',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
    //     {
    //       title: 'Docs',
    //       items: [
    //         {
    //           label: 'Docs',
    //           to: '/docs/intro',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Community',
    //       items: [
    //         {
    //           label: 'Stack Overflow',
    //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
    //         },
    //         {
    //           label: 'Discord',
    //           href: 'https://discordapp.com/invite/docusaurus',
    //         },
    //         {
    //           label: 'Twitter',
    //           href: 'https://twitter.com/docusaurus',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'More',
    //       items: [
    //         {
    //           label: 'Blog',
    //           to: '/blog',
    //         },
    //         {
    //           label: 'GitHub',
    //           href: 'https://github.com/facebook/docusaurus',
    //         },
    //       ],
    //     },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} tDCS, Inc. Built with Docusaurus.`,
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
        //   editUrl:
        //     'https://github.com/Entertech/tDCS-Documents/tree/master/edit/master/tDCS/',
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
        sitemap: {
          changefreq: 'hourly',
          priority: 1.0,
          trailingSlash: false,
        },
      },
    ],
  ],
};
