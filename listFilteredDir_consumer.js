var readFilteredFiles = require('./listFilteredDir_module.js'); 
// console.log(process.argv[2]); 
// console.log(process.argv[3]); 
var filteredFiles = readFilteredFiles(process.argv[2],process.argv[3],function(err,data) {
	if (err) 
		return console.log("Something gone wrong " + err); 
	data.forEach(function(item) {
		console.log(item); 
	}); 
	// console.log(data);
	// console.log(process.argv[2]);
	// console.log(process.argv[3]);
 
}); 
