var http = require('http'); 
var fs = require('fs'); 

var httpServer = http.createServer(function(request, response){
	response.writeHead(200,{'Content-Type':'text/plain'}); 
	var readStream = fs.createReadStream(process.argv[3]); 
	readStream.on('open', function(){
		readStream.pipe(response); 
	}); 
	readStream.on('error', function(err){
		console.dir(err); 
	}); 
}).listen(Number(process.argv[2])); 

