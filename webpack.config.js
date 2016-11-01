var webpack = require('webpack'),
    path = require("path"),
    OpenBrowserPlugin = require('open-browser-webpack-plugin');

 // 开发环境
var isDev = function() {
  return process.env.NODE_ENV.trim() === 'development';
};

// 生产环境
var isProd = function() {
  return process.env.NODE_ENV.trim() === 'production';
};

var setting = {
  entry:{
      client:['webpack-hot-middleware/client'],
      index:["./index.js"],
      vendor: [
        'react',
        'react-dom',
        'react-router',
        'react-redux',
        'redux'
      ]
  } ,
  output:{
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/static/'
  },
  plugins:getPlugins(),
  module:{
    loaders:[
      {
        test: /\.js|\.jsx$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/
      },
      {
        test: /\.css?$/,
        loaders: [ 'style', 'raw' ],
        include: __dirname
      },
      {
        test:/\.scss$/,
        loaders:['style',"css?sourceMap", "sass?sourceMap"]
      },{
        test: /\.json$/,
        loader: 'json'
      },{
        test: /\.(jpe?g|png|gif)$/i, 
        loader: 'url-loader?limit=99999'
      }
    ]
  },
  devtool: 'eval-source-map'
}



function getPlugins(){
 var plugins = [
    new webpack.DefinePlugin({
      __DEV__ : isDev(),
      __PROD__: isProd(),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV.trim())
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({name:['vendor','client'],minChunks:Infinity})
  ]
  /*if(isDev()){
    plugins.push(new OpenBrowserPlugin({ url: 'http://localhost:3000/' }));
  }*/
  return plugins;
}


module.exports = setting;