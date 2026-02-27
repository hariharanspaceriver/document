// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },

    {
      type: 'category',
      label: 'Web Application',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'web/overview',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'web/modules',
          label: 'Modules & Features',
        },
        {
          type: 'doc',
          id: 'web/demo',
          label: 'Demo Video',
        },
      ],
    },

    {
      type: 'category',
      label: 'Mobile Application',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'mobile/overview',
          label: 'Overview',
        },
      ],
    },

    {
      type: 'category',
      label: 'Desktop (EXE)',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'desktop/overview',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'desktop/schedule',
          label: 'Schedule',
        },
      ],
    },
  ],
};

export default sidebars;
