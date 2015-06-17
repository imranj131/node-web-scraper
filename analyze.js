var cheerio = require('cheerio');
var fs = require('fs');


fs.readFile( 'webdata.html' , function( err, html ) {

	var $ = cheerio.load(html)
	console.log('file opened')


	companyIdenfierCodes = {}
		
	$('table').find('tr').each(function(index, element){ 


		console.log('company identifier:'+$(this).children('td').eq(1).text())
		console.log('company name:'+$(this).children('td').eq(2).text())

		companyIdenfierCodes[ $(this).children('td').eq(1).text().split('x')[1] ] = $(this).children('td').eq(2).text()

	}); 

	fs.writeFile('output.json', JSON.stringify(companyIdenfierCodes, null, 4), function(err){
	console.log('File successfully written! - Check your project directory for the output.json file'); })

});
