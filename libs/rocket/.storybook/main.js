const rootMain = require('../../../.storybook/main');
const { resolve } = require('path');

// Use the following syntax to add addons!
// rootMain.addons.push('');
rootMain.stories.push(
  ...['../src/lib/**/*.stories.mdx', '../src/lib/**/*.stories.@(js|jsx|ts|tsx)']
);
rootMain.webpackFinal = async (config) => {
  // add SCSS support for CSS Modules
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader?modules&importLoaders',
      {
        loader: require.resolve('sass-loader'),
        options: {
          implementation: require('sass'),
          sassOptions: {
            includePaths: ['libs/interstellar-styles/src/lib'],
          },
        },
      },
    ],
    include: resolve(__dirname, '../src'),
  });

  return config;
};

module.exports = rootMain;
