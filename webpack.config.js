var autoprefixer = require('autoprefixer-core');
var postcssNested = require("postcss-nested");
var postcssSimpleVars = require("postcss-simple-vars");
var postcssimport = require("postcss-import");
var postcsscolor = require("postcss-color-function");

module.exports = {
  entry: {'bundle': './index.jsx'},
  output: {
      path: 'build',
      publicPath: '',
      filename: 'bundle.js'
  },
  resolve: {
    alias: { data: __dirname+'/data' },
    extensions: ['', '.js', '.jsx']
  },
  postcss: function(){
    return [
      postcssimport({
        onImport: function(files){
          files.forEach(this.addDependency);
        }.bind(this)
      }),
      autoprefixer,
      postcssNested,
      postcssSimpleVars,
      postcsscolor
    ];
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/,  loader: "babel-loader" },
      { test: /\.css$/, loader: "style-loader!css-loader!postcss-loader" },
    ]
  }
}