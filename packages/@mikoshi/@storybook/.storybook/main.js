module.exports = {
  stories: ["../src/stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-themes"
  ],
  core: {
    builder: "webpack5",
    options: {
      lazyCompilation: true,
    }
  },
  framework: "@storybook/react",
}
