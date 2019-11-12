// var name = 'tahmida lima';
// console.log(name);
 var http = require('http');
 //var port = 3000;
 var myFunction = function (request, response) {
 	response.writeHead(200,{'content-type':'text/html'});
 	response.write("<h1>HI!I am Lima....!$#%!</h1>");
 	response.end();
 }
 var server = http.createServer(myFunction);
 // var server = http.createServer(function (request, response) {
 // 	response.writeHead(200,{'content-type':'text/plain'});
 // 	response.write("HI!I am Lima....");
 // 	response.end();
 // });
// server.listen(port);
 server.listen(4000);
 console.log("server is runing:"+4000);
