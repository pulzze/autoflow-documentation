// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Interactor API AutoFlow',
  tagline: 'Interactor API AutoFlow Official Documentations',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.interactor.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/apiautoflow',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Interactor', // Usually your GitHub org/user name.
  projectName: 'Interactor API AutoFlow', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/api-autoflow-logo.png',
      navbar: {
        // title: 'API AutoFlow',
        logo: {
          alt: 'Interactor API AutoFlow Logo',
          src: 'img/api-autoflow-logo.png',
          srcDark: 'img/api-autoflow-logo-white.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'documentation',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorial',
            position: 'left',
            label: 'Tutorial',
          },
          {
            position: 'left',
            label: 'Quick Demo',
            to: 'docs/quick-demo'
          },
          {
            type: 'docSidebar',
            sidebarId: 'support',
            position: 'left',
            label: 'Support',
          },
          {
            position: 'left',
            label: 'Templates',
            to: 'docs/templates'
          },
          {
            position: 'left',
            label: 'Release Notes',
            to: 'docs/release-note'
          },
          {
            type: 'docSidebar',
            sidebarId: 'community',
            position: 'left',
            label: 'Community',
          },
          {
            position: 'right',
            label: 'interactor.com',
            to: 'https://www.interactor.com'
          },
        ],
      },
      // footer: {
      //   style: 'dark',
      //   links: [
      //     // {
      //     //   title: 'Docs',
      //     //   items: [
      //     //     {
      //     //       label: 'Tutorial',
      //     //       to: '/docs/intro',
      //     //     },
      //     //   ],
      //     // },
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
      //         // {
      //         //   label: 'Blog',
      //         //   to: '/blog',
      //         // },
      //         {
      //           label: 'GitHub',
      //           href: 'https://github.com/facebook/docusaurus',
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
