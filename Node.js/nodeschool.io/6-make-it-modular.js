// List the files of a directory filtered by extension
// the first command-line parameter is the file's path
// the second is extension, without '.'
// use a idiomatic convention module with callback function

var filter = require('./6-make-it-modular-module.js');

filter(process.argv[2], process.argv[3], function(err, list){
	if(err){
		return console.error('error: ', err);
	} else {
		list.forEach(function(file){
			console.log(file);
		});
	}
})