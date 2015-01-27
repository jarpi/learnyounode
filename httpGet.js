var http = require('http'); 

var url = process.argv[2];
// console.log(url);  
if (url) {
	http.get(url, function(response) {
		response.setEncoding('utf8'); 
		response.on('data', function(chunk){
			console.log(chunk);
		}); 
		response.on('end', function(){});
		response.on('error', function(error){console.log(error);});     
	}); 
} 

