import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'Processador ICMC',
    tagline: 'Ensino de organização e arquitetura de computadores por meio do desenvolvimento de jogos',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://de-abreu.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/Processador-ICMC/',

    // GitHub pages deployment config.
    organizationName: 'de-abreu', // Usually your GitHub org/user name.
    projectName: 'Processador-ICMC', // Usually your repo name.
    trailingSlash: false,

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

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
                    editUrl: 'https://github.com/de-abreu/Processador-ICMC/tree/master/website/'
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
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
                    label: 'Biblioteca',
                    to: '/docs/category/biblioteca',
                },
                {
                    label: 'Guias',
                    to: '/docs/category/guias',
                },
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
        themes: [
            'docusaurus-theme-github-codeblock'
        ],

        themeConfig: {
            codeblock: {
                showGithubLink: true,
                githubLinkLabel: 'View on GitHub',
                showRunmeLink: false,
                runmeLinkLabel: 'Checkout via Runme'
            },
        }
    } satisfies Preset.ThemeConfig,
};

export default config;
