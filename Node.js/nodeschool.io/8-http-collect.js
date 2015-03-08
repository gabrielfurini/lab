// To collect data from server using http module
// print 2 lines on command line:
// the first line is the total of characters received (integer)
// the second line is the complete string sent by server

var http = require('http'),
	url = process.argv[2];

http.get(url, function(response){
	var charsReceived = 0,
		stringReceived = '';

	response.setEncoding('utf-8');
	response.on('data', function(data){
		charsReceived += data.length;
		stringReceived += data;
	});
	response.on('end', function(end){
		console.log(charsReceived);
		console.log(stringReceived);
	});
});