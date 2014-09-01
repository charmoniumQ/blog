var fs = require("fs");
var path = require('path');

module.exports.sendFrontPage = function (res) {
    fs.readFile('./views/main_template.html', 'utf8', function(err, text){
		if (!err) {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(text);
		} else {
			console.log(err);
			res.writeHead(404, {'Content-Type': 'text/html'});
			res.end('<h1>Sorry, the page you are looking for cannot be found.</h1>');
		}
    });
}
