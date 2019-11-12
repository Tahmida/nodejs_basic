var fs = require('fs');
 console.log('step-1');
 var emp = fs.readFileSync('employee.json','utf8');
 console.log(emp);
 var config= JSON.parse(emp);
 console.log(config.name+" and "+ config.salary);
 console.log('step-2');