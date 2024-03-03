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
      url: '/other-storybook',
    },
    'otherstorybooktwo': {
      title: 'other storybook 2',
      url: '/other-storybook-2',
    },
    'otherstorybookthree': {
      title: 'other storybook 3',
      url: '/other-storybook-3',
    },

  },
};
export default config;
