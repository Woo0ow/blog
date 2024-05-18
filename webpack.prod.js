const TerserWebpackPlugin = require('terser-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'none',
  entry: './src/index.js',
  output: {
    filename: 'js/[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          presets: [
            ['default', { css: false }],
            'env',
          ],
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images',
          esModule: false
        },
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts',
        },
      },
      {
        test: /\.md$/,
        use: 'raw-loader'
      }
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon:'./public/favicon.ico',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        useShortDoctype: true,
      },
      inject:true,
      scriptLoading:'blocking',
      vueVersion:'https://cdn.jsdelivr.net/npm/vue@2'
    }),
    new OptimizeCssAssetsWebpackPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 2,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
    },
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
  externals:{
    vue:'Vue',
    'vue-router':'VueRouter',
    'highlight.js':'hljs',
    vuex:'Vuex',
    'mock.js': 'mock'
  }
};
