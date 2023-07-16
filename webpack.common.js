const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss|less$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jpe?g|ico|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].bundle.css',
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'src/assets/images', to: 'images' }],
    }),
  ],
  resolve: {
    extensions: ['.js'],
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@': path.resolve(__dirname, 'src/'),
    },
  },
};
