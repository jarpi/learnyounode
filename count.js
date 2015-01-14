var fs = require('fs'); 
var buff = fs.readFileSync(process.argv[2]); 
var buffText = buff.toString();
var numberLines = buffText.split('\n').length-1; 
console.log(numberLines);  

