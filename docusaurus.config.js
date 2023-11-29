// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Interactor ',
  tagline: 'API Autoflow Official Documentations',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.interactor.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/ent',
  
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
  plugins: [
    [
      "docusaurus2-dotenv",
      {
        systemvars: true,
      },
    ],
  ],

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
          alt: 'Interactor API AutoFlow',
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
          // {
          //   position: 'left',
          //   label: 'Quick Demo',
          //   to: 'docs/quick-demo'
          // },
          {
            type: 'docSidebar',
            sidebarId: 'support',
            position: 'left',
            label: 'Support',
          },
          // {
          //   position: 'left',
          //   label: 'Templates',
          //   to: 'docs/templates'
          // },
          // {
          //   position: 'left',
          //   label: 'Release Notes',
          //   to: 'release-note'
          // },
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
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/Documentation/Overview/',
              },
              {
                label: 'Tutorial',
                to: '/docs/Tutorial',
              },
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'Maintenance Services',
                to: '/docs/Support/professional-services',
              },
              {
                label: 'Live Training',
                to: '/docs/Support/live-training',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://join.slack.com/t/interactorteam/shared_invite/zt-eqx0mnh0-BkZWPzmh3DUJSTYxAJHmqw',
              },
              {
                label: 'Interactor Online Forum',
                href: 'https://www.interactor.com/support/forum',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Interactor.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: 'DPF7QMWM4V',
        apiKey: '9fc86bff4caee021f5158c1fce157447', // 여기에 Algolia API 키를 입력하세요.
        indexName: 'interactor', // 여기에 Algolia 인덱스 이름을 입력하세요.
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
    }),
};

module.exports = config;



