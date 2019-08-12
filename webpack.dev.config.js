// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    'home': ['babel-polyfill', path.resolve(__dirname, 'src/entries/home.js')],
    'redux': ['babel-polyfill', path.resolve(__dirname, 'src/entries/redux.js')],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  devServer: {
    port: 9000,
    publicPath: path.resolve(__dirname, '/dist/'),
    contentBase: path.join(__dirname, '/'),
    open: true,
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: [
            "@babel/plugin-proposal-object-rest-spread", 
            "@babel/plugin-proposal-class-properties",
            "emotion"
          ]
        }
      },
      // Solo para desarrollo
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
            name: 'images/[name].[hash].[ext]'
          }
        }
      }
    ]
  },
  // plugins: [
  //   new ExtractTextPlugin("css/[name][hash].css"),
  // ]
}