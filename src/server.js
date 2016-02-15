import express from 'express';

const app = express();
app.use(express.static('public'));

// start a webpack-dev-server
var webpack = require('webpack');
var webpackConfig = require('../webpack.config.js');
var compiler = webpack(webpackConfig);
app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, 
    publicPath: webpackConfig.output.publicPath
}));
app.use(require("webpack-hot-middleware")(compiler));

app.use((req, res) => {
	const HTML = `
		<!DOCTYPE html>
		<html>
		    <head>
		        <meta charset="utf-8">
		        <meta http-equiv="X-UA-Compatible" content="IE=edge">
		        <title></title>
		        <meta name="description" content="">
		        <meta name="viewport" content="width=device-width, initial-scale=1">
		    </head>
		    <body>
				<div id="app"></div>
				<script src="/assets/bundle.js"></script>
		    </body>
		</html>
	`;

	res.send(HTML);

});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
	console.log('Server listening on', PORT);
});