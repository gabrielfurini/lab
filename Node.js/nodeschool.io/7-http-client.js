// make a http request to a url provide as first-command line argument
// show the response on command-line

var http = require('http'),
	url = process.argv[2];

http.get(url, function(response){
	response.setEncoding('utf-8');
	response.on('data', function(data){
		console.log(data);
	});
	response.on('error', function(error){
		console.log('error: ', error);
	})
});