var fs = require('fs'); 

var filteredFiles = []; 
fs.readdir(process.argv[2], function readedDirCB(err, files) {
	if (err) throw err; 
	for (var i=0; i<files.length; i++) { 
		var fileNameAndExt = files[i].split('.'); 
		if (fileNameAndExt[1] == process.argv[3])
			// filteredFiles.push(files[i]);
			console.log(files[i]); 
	} 
	// console.log(filteredFiles);   
}); 

