var net = require('net'); 

var portToListen = process.argv[2]; 
var server = net.createServer(function(socket){ 
	var date = new Date(); 
	var year = date.getFullYear(); 
	var month = zeroFill(date.getMonth()+1); 
	var dayOfMonth = zeroFill(date.getDate()); 
	var hours = zeroFill(date.getHours()); 
	var minutes = zeroFill(date.getMinutes()); 
	var formattedDate =  year + '-' + month + '-' + dayOfMonth  + ' ' + hours  + ':' +  minutes; 
	socket.end(formattedDate.toString()); 
}); 

server.listen(portToListen); 

function zeroFill(val) {
	return (val<10?'0'+val:val); 
} 

