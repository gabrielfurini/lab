module.exports = function(directory, extension, callback){
	var fs = require('fs'),
		path = require('path');

	fs.readdir(directory, function(err, list){
		if(err){
			return callback(err);
		} else {
			list = list.filter(function(file){
				return path.extname(file) === '.' + extension;
			})
			callback(null, list);
		}
	})
}