// to create a http server that serves the same text for each request it receives

var http = require('http'),
	fs = require('fs');

var server = http.createServer(function(request, response){
	// piping data from source file stream to response server stream
	fs.createReadStream(process.argv[3]).pipe(response);
});

// listen server on the port passed as first command-line parameter
server.listen(process.argv[2]);