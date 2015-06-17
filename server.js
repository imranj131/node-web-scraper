var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){
	// Let's scrape Anchorman 2
	url = 'https://www.bluetooth.org/en-us/specification/assigned-numbers/company-identifiers';

	request(url, function(error, response, html){
		if(!error){
			var $ = cheerio.load(html);

			var Hexadecimal, Company;
			var json = { Hexadecimal : "", Company : ""};

			$('.ms-rtestate-field').filter(function(){
		        var data = $(this);
		        Hexadecimal = data.children().first().text();
		        Company = data.find('tr').find('td').text();

		        json.Hexadecimal = Hexadecimal;
		        json.Company = Company;
	        })
		}

		fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){
        	console.log('File successfully written! - Check your project directory for the output.json file');
        })

        res.send('Check your console!')
	})
})

app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app; 	