var webpack = require('webpack'),
    path = require("path");

module.exports = {
  entry:[  'webpack-hot-middleware/client',
      "./index.js"
  ] ,
  output:{
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins:[
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module:{
    loaders:[
      {
        test: /\.js|\.jsx$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.css?$/,
        loaders: [ 'style', 'raw' ],
        include: __dirname
      },
      {
        test:/\.scss$/,
        loaders:['style',"css","sass"]
      },{
            test: /\.json$/,
            loader: 'json'
        }
    ]
  }
}
