var fs = require('fs'); 
fs.readFile(process.argv[2], 'UTF-8', function readedFileCB(err,data) {
	if (err) throw err; 
	console.log(data.split("\n").length-1); 
}); 
