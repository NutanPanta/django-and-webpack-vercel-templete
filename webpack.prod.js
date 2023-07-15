const path = require('path');

const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  target: 'web',
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  optimization: {
    chunkIds: 'deterministic',
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        // vendor chunk
        vendor: {
          name: 'vendor',
          // async + async chunks
          chunks: 'all',
          // import file path containing node_modules
          test: /node_modules/,
          priority: 20,
        },
      },
    },
  },
  output: {
    filename: '[name].bundle.js',
    assetModuleFilename: 'images/[hash][ext][query]',
    path: path.resolve(__dirname, 'staticfiles'),
    // clean: true,
  },
});
