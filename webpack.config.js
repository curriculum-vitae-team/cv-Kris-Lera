const { resolve } = require('path');
require('dotenv').config();
const { EnvironmentPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.tsx'
  },
  plugins: [
    new EnvironmentPlugin([]),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new ForkTsCheckerWebpackPlugin(),
    new ESLintPlugin({
      emitError: true,
      emitWarning: true,
      failOnError: true,
      extensions: ['.ts', '.tsx', '.js']
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'esbuild-loader',
        include: [resolve(__dirname, 'src')],
        exclude: /node_modules/,
        options: {
          loader: 'tsx',
          target: 'es2015'
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        include: resolve(__dirname, 'src/assets'),
        type: 'asset/resource'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    symlinks: false,
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@components': resolve(__dirname, 'src/components/'),
      '@graphql': resolve(__dirname, 'src/graphql/'),
      '@interfaces': resolve(__dirname, 'src/graphql/interfaces/'),
      '@hooks': resolve(__dirname, 'src/hooks/'),
      '@pages': resolve(__dirname, 'src/pages/'),
      '@authPages': resolve(__dirname, 'src/pages/auth/'),
      '@route': resolve(__dirname, 'src/route/'),
      '@routeComponents': resolve(__dirname, 'src/route/components/'),
      '@theme': resolve(__dirname, 'src/theme/')
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'async'
    }
  }
};
