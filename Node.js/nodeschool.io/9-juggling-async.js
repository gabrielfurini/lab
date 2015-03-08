// get strings from 3 different urls
// show the responses following the original order

var http = require('http'),
	urls = [process.argv[2], process.argv[3], process.argv[4]],
	requestIndex = 0;

function doRequest(indexOfArray){
	// just do requests while url's array has values
	if(indexOfArray < urls.length){
		http.get(urls[indexOfArray], function(response){
			var str = '';
			response.setEncoding('utf-8');
			response.on('data', function(data){
				str += data;
			});
			// on request end, show the string and call doRequest() again passing next index as argument
			response.on('end', function(end){
				console.log(str);
				requestIndex++;
				doRequest(requestIndex);
			});
		})
	}
}

// call the doRequest function for the first time
doRequest(requestIndex);