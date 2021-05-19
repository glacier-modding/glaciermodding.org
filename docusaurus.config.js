/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'wiki.notex.app',
  tagline: '',
  url: 'https://wiki.notex.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'notexe', // Usually your GitHub org/user name.
  projectName: 'wiki.notex.app', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'wiki.notex.app',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/Notexe/wiki.notex.app',
          label: 'GitHub',
          position: 'right',
        },
      ],
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
          editUrl:
            'https://github.com/Notexe/wiki.notex.app',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
