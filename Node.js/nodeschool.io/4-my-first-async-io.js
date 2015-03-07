// Count the number of new lines of an archive using fs module ASYNCRONOUSLY
// the first command-line parameter is the file's path

var fs = require('fs'),
	pathToFile = process.argv[2];

fs.readFile(pathToFile, 'utf-8', function(error, response){
	newLines = response.split('\n').length - 1;
	console.log(newLines);
});