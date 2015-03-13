// create a json api server for urls '/api/parsetime' and '/api/unixtime' that returns different json for each one

var http = require('http'),
	url = require('url');

var server = http.createServer(function(request, response){
	var urlParsed = url.parse(request.url, true),
		pathname = urlParsed.pathname,
		isoDate = urlParsed.query.iso,
		out = null;

	if(pathname === '/api/parsetime'){
		out = {
			'hour' : new Date(isoDate).getHours(),
			'minute' : new Date(isoDate).getMinutes(),
			'second' : new Date(isoDate).getSeconds()
		}
	} else if (pathname === '/api/unixtime'){
		out = { 'unixtime' : new Date(isoDate).getTime() }
	}

	if(out){
		response.writeHead(200, {'Content-Type':'application/json'});
		response.end(JSON.stringify(out));
	} else {
		response.writeHead(404);
		response.end();
	}
});

server.listen(process.argv[2]);