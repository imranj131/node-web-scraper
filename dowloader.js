var request = require('request');
var fs = require('fs');

url = 'https://www.bluetooth.org/en-us/specification/assigned-numbers/company-identifiers';

console.log('making request')

// ping the server and get the information to be passed into the callback funciton

request(url, function(error, response, html){

	// write the data into a file called 'webdata.html'

	fs.writeFile('webdata.html', html);
	console.log('saved information')
});
