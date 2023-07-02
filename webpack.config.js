const path = require('path');

module.exports = {
  mode:'production',
  target: 'web',
  entry: './static/css/styles.scss',
  output: {
    filename: 'styles.css',
    path: path.resolve(__dirname, 'static/dist'),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
};

