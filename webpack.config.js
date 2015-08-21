module.exports = {
  entry: {'bundle': './index.jsx'},
  output: {
      path: 'build',
      publicPath: '',
      filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/,  loader: "babel-loader" },
      { test: /\.css$/, loader: "style-loader!css-loader!postcss-loader" },
    ]
  }
}