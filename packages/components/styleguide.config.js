module.exports = {
  title: "GoodGame Style Guide",
  components: "./src/**/*.tsx",
  require: [
    "@goodgame/styles/dist/index.css"
  ],
  webpackConfig: require('react-scripts/config/webpack.config'),
  propsParser: require('react-docgen-typescript').parse,
  dangerouslyUpdateWebpackConfig: (c) => {
    c.cache = false
    return c
  },
}