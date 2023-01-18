// const path = require('path')
// const webpack = require('webpack')

// function resolve(dir) {
//   return path.join(__dirname, dir)
// }

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
  ],
  // staticDirs: ['../src/stories/assets', '../public', '../src/assets'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  // webpackFinal: config => {
  //   config.module.rules.push({
  //     test: /\.scss$/,
  //     use: [
  //       'style-loader',
  //       {
  //         loader: 'css-loader',
  //         options: {
  //           importLoaders: 1,
  //           modules: {
  //             localIdentName: '[name]__[local]___[hash:base64:5]',
  //           },
  //         },
  //       },
  //       'resolve-url-loader',
  //       'sass-loader',
  //     ],
  //     include: path.resolve(__dirname, '../src'),
  //   })

  //   // modify storybook's file-loader rule to avoid conflicts with svgr
  //   const fileLoaderRule = config.module.rules.find(rule =>
  //     rule.test.test('.svg')
  //   )
  //   fileLoaderRule.exclude = /\.svg$/

  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     include: path.resolve(__dirname, '../src'),
  //     use: [
  //       {
  //         loader: '@svgr/webpack',
  //         options: {
  //           icon: true,
  //           svgo: false,
  //         },
  //       },
  //       'url-loader',
  //     ],
  //   })
  //   return {
  //     ...config,
  //     resolve: {
  //       ...config.resolve,
  //       alias: {
  //         ...config.resolve?.alias,
  //         ...aliases,
  //       },
  //     },
  //   }
  // },
}
