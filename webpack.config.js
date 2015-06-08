var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');

var config={

	entry:['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.js')],
	//entry:path.resolve(__dirname, 'app/main.js'),
	
	output: {
		path:__dirname,
		filename:"bundle.js"
	},
	module:{
		
		loaders:[
		{test:/\.css$/, loader: "style!css"},
		{test:/\.less$/, loader: "style!css!less"},
		{test: /\.js$/,exclude: node_modules,loader: 'babel?stage=0'}]
	}

};

module.exports=config;