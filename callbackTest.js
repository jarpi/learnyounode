var http = require('http'); 


var urls = ['http://www.google.es', 'http://www.meneame.net', 'http://www.reddit.com']; 

for (i=urls.length-1;i>=0;i--) 
{
	console.log("Starting... " + urls[i]); 
	doGet(urls[i]); 
} 

function doGet(url) 
{
	http.get(url, function(response){
		response.on('data', function(data){
			// console.log(data); 
		}); 
		response.on('end', function(){
			console.log("Ending... " + url); 
		}); 
	}).on('error', function(error){
		console.dir(error); 
	}); 
} 

