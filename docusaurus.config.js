// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const  rehypKatex = require('rehype-katex');
const math = require('remark-math');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CS自学社区',
  tagline: '回溯学习本质，重新思考该怎么学习',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.learncs.site',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'zhangrui231', // Usually your GitHub org/user name.
  projectName: 'learncs.site', // Usually your repo name.
  trailingSlash: false,
  
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
          remarkPlugins: [math],
          rehypePlugins: [rehypKatex],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: '/katex/katex.min.css',
      type: 'text/css',
      
    },
  ],

  plugins: [
    // With options object (babel style)
    // [
    //   './src/plugins/plugin-baidu-analytics',
    //   {
    //     trackingID: 'c106b2729592653e5e0c26db5e5d3142',
    //   },
    // ],
    // ['./src/plugins/plugin-coze-bot',
    //   {
        
    //   }
    // ],
    [
        '@cookbookdev/docusaurus-jsx-runtime-fallback-plugin',
        {
          alias: {
            'react/jsx-runtime': 'react/jsx-runtime.js',
          },
        },
      ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // giscus 评论功能
      giscus: {
        repo: 'zhangrui231/learcs.site',
        repoId: 'R_kgDOKlNXwg',
        category: 'Q&A',
        categoryId: 'DIC_kwDOKlNXws4CmDyH',
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      metadata: [{ name: 'baidu-site-verification', content: 'codeva-hJyfN2UKgo' }],
      navbar: {
        title: 'TeachYourselfCS',
        logo: {
          alt: 'TeachYourselfCS',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/docs/roadmap',
            position: 'left',
            label: '路线图',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '课程资源',
          },
          {to: '/blog', label: '博客', position: 'left'},
          {to:'/community', label: '社区', position: 'left'}
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'CS学习社区',
            items: [
              {
                label: '路线图',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '社区',
            items: [
              // {
              //   label: 'Stack Overflow',
              //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              // },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              // {
              //   label: 'Twitter',
              //   href: 'https://twitter.com/docusaurus',
              // },
            ],
          },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyleft © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      announcementBar: {
        id: 'support_us',
        content:
          '🎉️🎉️🎉️课程文档汉化工作正在进行中 🎉️🎉️ 学习交流群请到 <a  href="/community">社区页面</a> 查看入群方式 🎉️🎉️🎉️',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      },
    }),
};

module.exports = config;
