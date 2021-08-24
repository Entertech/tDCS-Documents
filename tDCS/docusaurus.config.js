/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '小状元记忆头戴',
  tagline: '快速提高学习记忆力。',
  url: 'https://help.xzytdcs.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Entertech', // Usually your GitHub org/user name.
  projectName: 'tdcs', // Usually your repo name.
  themeConfig: {
    algolia: {
      appId: 'S5563UBO3D',
      apiKey: "8ca5a6454477070fdafd5d2923f9bd35",
      indexName: "tDCS",
    },
    navbar: {
      title: '小状元记忆头戴',
      logo: {
        alt: '小状元记忆头戴',
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
      style: 'light',
      links: [
      //   {
      //     items: [
      //       {
      //         label: '小状元记忆头戴官网',
      //         href: 'https://www.xzytdcs.com',
      //       }
      //     ],
      //   }
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
      copyright: `Copyright © ${new Date().getFullYear()} 童瞳网络。保留所有权利。`,
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
