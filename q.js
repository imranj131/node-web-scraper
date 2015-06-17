var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var print = console.log


url = 'https://www.bluetooth.org/en-us/specification/assigned-numbers/company-identifiers';

print('making request')

request(url, function(error, response, html){

	print('no errors occured, loading jquery')

	var $ = cheerio.load(html);

	print('parsing data')

	var data = $('.ms-rtestate-field').find('tr').find('td').text();

	print(data);

});
