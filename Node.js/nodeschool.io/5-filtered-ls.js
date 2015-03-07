// List the files of a directory filtered by extension
// the first command-line parameter is the file's path
// the second is extension, without '.'

var fs = require('fs'),
	path = require('path'),
	directory = process.argv[2],
	extension = '.' + process.argv[3];

fs.readdir(directory, function(error, list){
	for(var i=0; i<list.length; i++){
		if(path.extname(list[i]) == extension){
			console.log(list[i]);
		}
	}
});