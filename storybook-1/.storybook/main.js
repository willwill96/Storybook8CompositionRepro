/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  refs: {
    'otherstorybook': {
      title: 'other storybook',
      url: 'http://localhost:3003/other-storybook',
    },
    'otherstorybooktwo': {
      title: 'other storybook 2',
      url: 'http://localhost:3003/other-storybook-2',
    },
    'otherstorybookthree': {
      title: 'other storybook 3',
      url: 'http://localhost:3003/other-storybook-3',
    },

  },
};
export default config;
