const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    publicPath: '/',
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
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
              sourceMap: true,
            },
          },
          'resolve-url-loader',
          { 
            loader: 'sass-loader',
            options: {
                sourceMap: true,
                webpackImporter: true, 
              sassOptions: {
                includePaths: [path.resolve(__dirname, 'src/')],
              },
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
                webpackImporter: true,
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
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  devtool: 'source-map',
};