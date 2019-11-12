var fs = require('fs');
console.log('step-1');
fs.writeFileSync('myText.txt','I have a laptop');
var readfile = fs.readFileSync('myText.txt','utf-8');
console.log(readfile);
console.log('step-2');