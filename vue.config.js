const PurgecssPlugin = require('purgecss-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const glob = require('glob-all')
const path = require('path')
const PATHS = {
  src: path.join(__dirname, 'src')
}
module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#5867dd',
          'link-color': '#5867dd',
          'border-radius-base': '4px',
        },
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: {
    // Merged into the final Webpack config
    resolve: {
      alias: {
        moment: 'dayjs',
      }
    },
    plugins: [
      new PurgecssPlugin({
        keyframes: true,
        minify: true,
        whitelist: ['html', 'body'],
        paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
        whitelistPatterns: [/^ant/],
        whitelistPatternsChildren: [/^ant/]
      }),
      new AntdDayjsWebpackPlugin(),
      new BundleAnalyzerPlugin()
    ]
  }
}
