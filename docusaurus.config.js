const config = {
  title: 'Space Rivers',      
  tagline: 'Smart Construction Management Platform',
  favicon: 'img/logo.png',
  url: 'https://hariharanspaceriver.github.io',
  baseUrl: '/document/',
  organizationName: 'hariharanspaceriver',
  projectName: 'document',


  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Space Rivers',
      logo: {
        alt: 'Space Rivers Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} Space Rivers. All rights reserved.`,
    },
  },

  
};

export default config;
