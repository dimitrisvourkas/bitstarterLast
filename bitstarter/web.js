var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
fs.readFile('index.html', function (err, data){
   if (err) throw err;
     
    app.get('/', function(request, response) {
	//var buf= new Buffer(20);
	//buf.write("data","utf-8");
	var dt=data.toString("utf-8",0,27);
	response.send(dt);
 });
});
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
