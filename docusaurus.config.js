/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: "wiki.glaciermodding.org",
    tagline: "",
    url: "https://wiki.glaciermodding.org",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "glacier-modding",
    projectName: "wiki.glaciermodding.org",
    themeConfig: {
        metadata: [
            { name: "keywords", content: "hitman, glacier, modding, 007" },
        ],
        navbar: {
            title: "wiki.glaciermodding.org",
            logo: {
                alt: "Glacier Engine 2 Modding Logo",
                src: "img/logo.png",
            },
            items: [
                {
                    href: "https://github.com/glacier-modding/wiki.glaciermodding.org",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        colorMode: {
            defaultMode: "dark",
        },
    },
    themes: [
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            {
                // ... Your options.
                // `hashed` is recommended as long-term-cache of index file is possible.
                hashed: true,
                indexBlog: false,
                docsRouteBasePath: "/",
                // For Docs using Chinese, The `language` is recommended to set to:
                // ```
                // language: ["en", "zh"],
                // ```
            },
        ],
    ],
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    routeBasePath: "/",
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    editUrl:
                        "https://github.com/glacier-modding/wiki.glaciermodding.org/blob/main/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
    plugins: [
        [
            "@docusaurus/plugin-client-redirects",
            {
                redirects: [
                    {
                        to: "/npc_swap_tutorial",
                        from: "/npc-swap-tutorial",
                    },
                ],
            },
        ],
    ],
}
