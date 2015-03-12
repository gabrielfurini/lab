// make a http server that receives post requests and output
// requires through2-map module as dependecy

var http = require('http'),
	map = require('through2-map');
	
var server = http.createServer(function(request, response){
	// get post stream, converts to string and return it uppercased
	request.pipe(map(function (chunk){
		return chunk.toString().toUpperCase();
	})).pipe(response);
});

server.listen(process.argv[2]);