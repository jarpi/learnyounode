var http = require('http'); 
var fs = require('fs'); 

var postData = ""; 
var httpServer = http.createServer(function(request, response){
	if (request.method = "POST") {
		processPostData(request,response); 
	} else {
		res.end("Not implemented"); 
	}
}).listen(Number(process.argv[2])); 

function processPostData(request, response) {
	request.on('data', function(data){
		// postData += data; 
		response.write(data.toString().toUpperCase()); 
	}); 
	request.on('end', function(){
		// response.end(postData.toUpperCase()); 
		response.end(); 
	}); 
} 


