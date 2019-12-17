const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')
const path = require('path')
const PATHS = {
  src: path.join(__dirname, 'src')
}
module.exports = {
  configureWebpack: {
    // Merged into the final Webpack config
    plugins: [
      new PurgecssPlugin({
        keyframes: true,
        minify: true,
        whitelist: ['html', 'body'],
        paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true })
      })
    ]
  }
}
