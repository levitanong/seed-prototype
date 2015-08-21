module.exports = {
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/,  loader: "babel-loader" },
      { test: /\.css$/, loader: "style-loader!css-loader!postcss-loader" },
    ]
  }
}