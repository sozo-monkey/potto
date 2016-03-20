var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/main/coffee/app.coffee',
  output: {
    path: __dirname + '/build/resources/main/static/js',
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  resolve: {
    root: [path.join(__dirname, "bower_components")],
    extensions: ['', '.ts']
  },
  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
    ),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      { test: /\.coffee$/, loader: "coffee-loader" },
      { test: /\.(coffee\.md|litcoffee)$/, loader: "coffee-loader?literate" }
    ]
  }
};
