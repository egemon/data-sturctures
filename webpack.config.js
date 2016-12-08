module.exports = {
  context: __dirname + '/src', // path prepend to entry option
  entry: {
    bundle: './app.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  module: {
    preLoaders: [],
    postLoaders: [],
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style','css']
      },{
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel']
      }
    ]
  },
  resolve:{
    alias: {
      stack: '../src/js/stack',
      mainStyles: '../src/css/main.css'
    }
  },
  externals: [
    {
      // mainStyles: true
    }
  ],
  devServer: {
    contentBase: "./dist"
  }
};