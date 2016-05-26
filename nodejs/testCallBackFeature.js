/*Testing callback functionality*/

var fs = require('fs');

var readFileCallback = function(err,data)
{
	if(err) return console.error(err);
	console.log(data.toString());
};

fs.readFile('input.txt', readFileCallback);

console.log('Line after the call to the readfile function')

/*Execute this program to test the call back functionality*/
