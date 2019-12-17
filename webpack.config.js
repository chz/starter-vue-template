module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                fiber: require('fibers'),
                includePaths: ['@/assets/css/bulma/sass/bulma'],
              },
            },
          },
        ],
      },
    ],
  },
};
