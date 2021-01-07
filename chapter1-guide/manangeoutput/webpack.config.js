const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry:{
    index:"./src/index.js",
    print:"./src/print.js"
  },  
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '管理输ass出',
      filename:"index1.html"
    }),
    new HtmlWebpackPlugin({
      title: '管理输assas 出',
      filename:"index2.html"
    }),
  ],
};