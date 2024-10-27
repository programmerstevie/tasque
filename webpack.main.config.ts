// const path = require("path");

import path from 'path';
import { Configuration } from 'webpack';

const mainConfig: Configuration = {
  entry: './src/main/main.ts',
  devtool: 'eval-source-map',
  target: 'electron-main',
  module: {
    rules: [
      {
        // We're specifying native_modules in the test because the asset
        // relocator loader generates a "fake" .node file which is really
        // a cjs file.
        test: /native_modules[/\\].+\.node$/,
        use: 'node-loader',
      },
      {
        test: /\.(m?js|node)$/,
        parser: { amd: false },
        use: {
          loader: '@vercel/webpack-asset-relocator-loader',
          options: {
            outputAssetBase: 'native_modules',
          },
        },
      },
      {
        test: /\.ts$/,
        exclude: /(node_modules|\.webpack)/,
        use: {
          loader: 'ts-loader',
          options: {
            // transpileOnly: true,
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      '@api': path.resolve(__dirname, 'src/api'),
    },
    extensions: ['.ts', '.js'],
  },
};

export default mainConfig;
