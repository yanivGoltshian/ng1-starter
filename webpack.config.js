var path = require('path');

module.exports = {
  context: path.join(__dirname, '/src'),
  entry: 'index.js',

  resolve: {
    root: path.join(__dirname, '/src')
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {presets: ['es2015'], plugins: ['transform-object-rest-spread']}
      },

      {
        test: /\.css$/,
        loaders: [
          'style',
          'css'
        ]
      }
    ]
  },

  devServer: {
    contentBase: "./src",
    inline: true,
    historyApiFallback: true
  },

  // support source maps
  devtool: "#inline-source-map"
};