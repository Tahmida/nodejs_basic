 var http = require('http');
 var emp = require('./employee.js');
 var myFunction = function (request, response) {
 	response.writeHead(200,{'content-type':'text/html'});
 	response.write(emp.name);
 	emp.myFunction();
 	response.end();
 }
 var server = http.createServer(myFunction);
 server.listen(4000);
 console.log("server is runing:"+4000);