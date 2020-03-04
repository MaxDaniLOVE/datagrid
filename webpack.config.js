const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader' 
      },
      {
        test: /\.(png|gif|jpg|ico|svg|pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: '[name]-[sha1:hash:7].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.css$/, 
        use: [
          MiniCssExtractPlugin.loader ,
          'css-loader' ,
        ] 
      },
      {
        test: /\.s[ca]ss$/,
        use: [
          MiniCssExtractPlugin.loader ,
          'css-loader' ,
          'sass-loader' ,
        ] 
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'main-[hash].css'
    })
  ],
  devServer: {
    open: true,
    historyApiFallback: true,
  }
};