// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Venture Roleplay",
    tagline: "Dinosaurs are cool",
    favicon: "img/favicon.ico",

    url: "https://docs.venturerp.xyz/",
    baseUrl: "/",
    organizationName: "Venture-Roleplay",
    projectName: "new-docs",

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                },
                blog: {
                    showReadingTime: true,
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: "Venture RP Documentation",
                items: [
                    {
                        type: "docSidebar",
                        sidebarId: "sidebar",
                        position: "left",
                        label: "Docs",
                    },
                    { to: "/blog", label: "Blog", position: "left" },
                    { to: "/changelog", label: "Changelog", position: "left" },
                    {
                        label: "Discord",
                        href: "https://dsc.gg/venturerp",
                        position: "right",
                    },
                    {
                        label: "Website",
                        href: "https://venturerp.xyz",
                        position: "right",
                    },
                ],
            },
            footer: {
                copyright: `Copyright ${new Date().getFullYear()} Venture Roleplay. All rights reserved. Built with ❤️ by Whitigol.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            algolia: {
                appId: "8U9UZ3Q41I",
                apiKey: "010417be3c56508cba6c47e8de3a819d",
                indexName: "venturerp",
                contextualSearch: true,
            },
            colorMode: {
                defaultMode: "dark",
            },
            announcementBar: {
                content:
                    "Applications are now open! <a href='https://lnk.venturerp.xyz/apply' target='_blank'>Apply now!</a>",
                id: "apps-open",
            },
        }),
    plugins: [
        async function tailwind(context, options) {
            return {
                name: "docusaurus-tailwindcss",
                myPlugin(postcssOptions) {
                    postcssOptions.plugins.push(require("tailwindcss"));
                    postcssOptions.plugins.push(require("autoprefixer"));
                    return postcssOptions;
                },
            };
        },
        [
            "@docusaurus/plugin-content-blog",
            {
                id: "changelog",
                routeBasePath: "changelog",
                path: "./changelog",
            },
        ],
    ],
};

module.exports = config;
