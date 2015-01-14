var fs = require('fs'); 

module.exports = function filterFiles(dir,ext,cb) {
	var filteredFiles = [];
	fs.readdir(dir, function readedDirCB(err, files) {
        	if (err) return cb(err); 
        	for (var i=0; i<files.length; i++) {
               	 var fileNameAndExt = files[i].split('.');
          	      if (fileNameAndExt[1] == ext)
                        	filteredFiles.push(files[i]);
                	        // console.log(files[i]);
        	}
		cb(null,filteredFiles); 
        	// console.log(filteredFiles);
	});
}

