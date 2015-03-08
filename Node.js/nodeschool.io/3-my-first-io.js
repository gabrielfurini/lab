// Count the number of new lines of an archive using fs module
// the first command-line parameter is the file's path

var fs = require('fs'),
	pathToFile = process.argv[2],
	buffer = fs.readFileSync(pathToFile).toString(),
	newLines = buffer.split('\n').length - 1;

console.log(newLines);
