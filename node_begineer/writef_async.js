var fs = require('fs');
console.log('step-1');
fs.writeFile('mytext.txt','hi!I am writting',function () {
	console.log('yes its working');
});
console.log('step-2');
