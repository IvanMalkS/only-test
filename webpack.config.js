const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const pkg = require('./package.json');
const webpack = require('webpack');

let publicPath = '/';

const isProduction = process.env.NODE_ENV === 'production';
if (isProduction && pkg.homepage) {
  publicPath = new URL(pkg.homepage).pathname;
}

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    publicPath: publicPath,
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },

      {
        test: /\.module\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                exportLocalsConvention: 'camelCase',
                namedExport: false,
              },
              sourceMap: true,
                url: {
                filter: (url) => {
                  if (url.startsWith('/')) {
                    return false;
                  }
                  return true;
                },
              },
            },
          },
          { 
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: [
          'style-loader', 
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          'resolve-url-loader',
          { 
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                includePaths: [path.resolve(__dirname, 'src/')],
              },
            },
          },
        ],
      },
      
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public'),
          to: path.resolve(__dirname, 'dist'),
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
    new webpack.DefinePlugin({
      'process.env.PUBLIC_URL': JSON.stringify(publicPath.slice(0, -1))
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      app: path.resolve(__dirname, 'src/app/'),
      pages: path.resolve(__dirname, 'src/app/pages/'),
      widgets: path.resolve(__dirname, 'src/app/widgets/'),
      entities: path.resolve(__dirname, 'src/app/entities/'),
      features: path.resolve(__dirname, 'src/app/features/'),
      shared: path.resolve(__dirname, 'src/app/shared/'),
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 5000,
    host: '0.0.0.0',
    allowedHosts: 'all',
    open: false,
    hot: true,
    historyApiFallback: true,
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
    },
  },
  devtool: 'source-map',
};