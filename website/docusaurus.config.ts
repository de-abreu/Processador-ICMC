import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const sections = [
    {
        label: 'Sobre',
        to: '/docs/category/sobre',
    },
    {
        label: 'Componentes',
        to: '/docs/category/componentes',
    },
    {
        label: 'Linguagem Assembly',
        to: '/docs/category/linguagem-assembly',
    },
    {
        label: 'Referências',
        to: '/docs/category/referencias',
    },
    {
        label: 'Guias',
        to: '/docs/category/guias',
    },
]

const config: Config = {
    title: 'Processador ICMC',
    tagline: 'Ensino de arquitetura de computadores por meio do desenvolvimento de jogos',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://de-abreu.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/Processador-ICMC/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'de-abreu', // Usually your GitHub org/user name.
    projectName: 'Processador-ICMC', // Usually your repo name.
    trailingSlash: false,

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'pt-br',
        locales: ['pt-br', 'en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'Processador ICMC',
            logo: {
                alt: 'ICMC',
                src: 'img/logo.png',
            },
            items: [
                ...sections,
                {
                    label: 'Blog',
                    to: '/blog',
                    position: 'right',
                },
                {
                    label: 'GitHub',
                    href: 'https://github.com/de-abreu/Processador-ICMC',
                    position: 'right',
                },
                {
                    type: 'localeDropdown',
                    position: 'right'
                }
            ],
        },
        footer: {
            style: 'dark',
            copyright: `Copyright © ${new Date().getFullYear()} Eduardo do Valle Simões. Feito com Docusaurus. Iconografia por Icons8.`,
        },
        prism: {
            theme: prismThemes.oneLight,
            darkTheme: prismThemes.oneDark,
            additionalLanguages: ['bash', 'asmatmel'],
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
