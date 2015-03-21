var http = require('http'); 

var requests = [{url:process.argv[2], str:''},{url:process.argv[3], str:''},{url:process.argv[4], str:''}];
var count = 0; 

function doGet(index) {
	http.get(requests[index].url, function(response) {
		var str = ''; 
		response.on('data', function(chunk) {
			str += chunk; 
		}); 
		response.on('end', function(){ 
			requests[index].str = str; 
			count++; 
			if (count == 3) 
				print_requests(); 
		});  
	});
} 

function print_requests() {
	for (var i=0; i<requests.length;i++) 
		console.log(requests[i].str); 
} 

for (var i=0; i<requests.length;i++) {
	doGet(i); 
}


