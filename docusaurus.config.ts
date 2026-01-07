import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Rolas in Python',
  tagline: 'Master Python with Rolas',
  favicon: 'img/favicon.ico',

  url: 'https://rolasnajera.github.io',
  baseUrl: '/rolas-in-python/',

  organizationName: 'rolasnajera',
  projectName: 'rolas-in-python',

  onBrokenLinks: 'throw',
  markdown: {
    format: 'mdx',
    mermaid: true,
    preprocessor: ({ filePath, fileContent }) => {
      return fileContent;
    },
    mdx1Compat: {
      comments: true,
      admonitions: true,
      headingIds: true,
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/rolasnajera/rolas-in-python/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/rolasnajera/rolas-in-python/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Rolas in Python',
      logo: {
        alt: 'Rolas in Python Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Modules',
          position: 'left',
          items: [
            {
              label: 'Fundamentals',
              to: '/docs/fundamentals/intro',
            },
            {
              label: 'Interviews',
              to: '/docs/interviews/intro',
            },
          ],
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/rolasnajera/rolas-in-python',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Modules',
          items: [
            {
              label: 'Fundamentals',
              to: '/docs/fundamentals/intro',
            },
            {
              label: 'Interviews',
              to: '/docs/interviews/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/python',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/rolasnajera/rolas-in-python',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Rolas in Python. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
