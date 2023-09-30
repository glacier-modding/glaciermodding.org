/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: "glaciermodding.org",
    tagline: "",
    url: "https://glaciermodding.org",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "glacier-modding",
    projectName: "glaciermodding.org",
    themeConfig: {
        metadata: [
            { name: "keywords", content: "hitman, glacier, modding, 007" },
        ],
        navbar: {
            title: "glaciermodding.org",
            logo: {
                alt: "Glacier Engine 2 Modding Logo",
                src: "img/logo.svg",
            },
            items: [
                {
                    type: "dropdown",
                    label: "Tools",
                    position: "left",
                    items: [
                        {
                            label: "RPKG Tool",
                            to: "/rpkg",
                        },
                        {
                            label: "G2WiseDataTool",
                            to: "/g2wwisedatatool",
                        },
                        {
                            to: "/tools/online/xtea",
                            label: "Online XTEA Tool",
                        },
                    ],
                },
                {
                    type: "dropdown",
                    label: "Mods",
                    position: "left",
                    items: [
                        {
                            label: "Featured Mods",
                            to: "/featured-mods",
                        },
                        {
                            label: "Nexus Mods",
                            href: "https://www.nexusmods.com/hitman3",
                        },
                    ],
                },
                {
                    href: "https://hitmandb.glaciermodding.org",
                    label: "HitmanDB",
                },
                {
                    label: "Hitman Resources",
                    href: "https://hitman-resources.netlify.app/",
                },
                {
                    label: "TonyTools",
                    href: "https://tonytools.win/",
                },
                {
                    label: "Documentation",
                    to: "/docs",
                },
                {
                    href: "https://github.com/glacier-modding",
                    position: "right",
                    className: "header-github-link",
                    "aria-label": "GitHub repository",
                },
            ],
        },
        footer: {
            copyright: `<span class="trademark">All third party trademarks (including logos, icons and text) referenced within this website are the property of their respective owners. Unless otherwise stated as such. Glacier Modding's use of third party trademarks does not indicate any relationship, sponsorship, or endorsement between Glacier Modding and the respective trademark owners.</span>`,
            links: [
                {
                    title: "Links",
                    items: [
                        {
                            label: "GitHub",
                            href: "https://github.com/glacier-modding",
                        },
                        {
                            label: "Discord Server",
                            href: "https://discord.gg/6UDtuYhZP6",
                        },
                    ],
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
                    path: "docs",
                    // routeBasePath: "/",
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    editUrl:
                        "https://github.com/glacier-modding/glaciermodding.org/blob/main/",
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
                        to: "/tools/online/xtea",
                        from: "/xtea",
                    },
                ],
            },
        ],
    ],
}
