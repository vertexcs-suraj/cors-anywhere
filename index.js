var host = process.env.HOST || '0.0.0.0';
var port = process.env.PORT || '8082';


var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
	originWhiteList:[],
	requireHeader:['origin','x-requested-width'],
	removeHeaders:['cookie','cookie2']
}).listen(port,host,function(){
	console.log('Running CORS anywhere on '+host+':'+port);
});

