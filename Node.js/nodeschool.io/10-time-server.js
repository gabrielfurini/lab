// server listens to TCP connections
// for each connection, to write date & 24 hour time in the format "YYYY-MM-DD hh:mm"

var net = require('net');

Number.prototype.fillZero = function(length){
	var string = String(this),
		zero = '0',
		length = length || 2;

	while(string.length < length){
		string = zero + string;
		return string;
	}
}
	
var server = net.createServer(function(socket){
	var date = new Date(),
		output = date.getFullYear()+'-'+(date.getMonth()+1).fillZero()+'-'+date.getDate().fillZero()+' '+date.getHours()+':'+date.getMinutes()+'\n';
	socket.end(output);
});
server.listen(process.argv[2]);
