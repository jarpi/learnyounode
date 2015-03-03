var http = require('http'); 

var urlToRequest = process.argv[2]; 
requestCallback = function(response) {
	var str = ''; 
	response.on('data', function(chunk) {
		str += chunk; 
	}); 
	response.on('end', function(){
		console.log(str.length); 
		console.log(str.toString()); 
	}); 
} 

http.request(urlToRequest, requestCallback()).end(); 
