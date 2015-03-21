var http = require('http'); 
var objUrl = require('url'); 

var postData = ""; 
var httpServer = http.createServer(function(request, response){
	if (request.method=="GET") { 
		doAsync(request,function(responseData){
			response.writeHead(200, { 'Content-Type': 'application/json' })
			response.end(JSON.stringify(responseData)); 
		}); 
	} else { 
		response.end("Not implemented"); 
	} 
}).listen(Number(process.argv[2])); 


function doAsync(request,cb) {
	var url = parseUrl(request.url); 
	var responseData = checkURL(url); 
	cb(responseData); 
}

function parseUrl(url) {
	return objUrl.parse(url); 
} 

function checkURL(url) {
	if ((url.pathname.indexOf("/api/parsetime")>-1) && url.query.indexOf("iso")>-1) {
		var isoQueryParam = url.query.substring(url.query.indexOf("=")+1,url.query.length); 
		return parseTime(isoQueryParam); 
	} else if (url.pathname.indexOf("/api/unixtime")>-1) {
		return unixTime(); 
	} else {
		return {error:"Not implemented"}; 
	} 
} 

function parseTime(date) { 
	var date = new Date(date); 
	var responseData = {hour:'',minute:'',second:''};  
	responseData.hour = date.getHours(); 
	responseData.minute = date.getMinutes(); 
	responseData.second = date.getSeconds(); 
	return responseData; 
} 

function unixTime() {
	return {unixtime:new Date().getTime()}; 
} 

