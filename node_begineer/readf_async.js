var fs = require('fs');
 console.log('step-1');
 fs.readFile('employee.json',function(error,data){
 	console.log('file info:'+data);
 });
 console.log('step-2');