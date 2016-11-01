var express =require("express"),
  webpack = require("webpack"),
  webpackDevMiddleware = require('webpack-dev-middleware'),
  webpackHotMiddleware = require('webpack-hot-middleware'),
  config = require('./webpack.config'),
  path = require('path'),
  logger = require('express-logger');

var app = new express();
var port = 4000;

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use(logger({path: "log.text"}));
app.use(express.static(path.join(__dirname,'styles')))

app.get("/",function(req,res){
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, function(error) {
    if (error) {
        console.error(error)
    } else {
        console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
});
