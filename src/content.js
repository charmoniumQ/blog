var fs = require('fs');
var handlebars = require('handlebars');
var database = require('./database');

handlebars.registerHelper('url_encode', function (text) {
	return encodeURI(text).replace(/%5B/g, '[').replace(/%5D/g, ']');
});

var mainSource = fs.readFileSync('./views/main_template.html', 'utf8');
var mainTemplate = handlebars.compile(mainSource);

module.exports.frontPage = function (res) {
	articles = database.getAll();
	templateData = {
		  'page_title': 'My blog'
		, 'articles': articles
	}
	mainRendered = mainTemplate(templateData);

	res.writeHeader(200, {"Content-Type": "text/html"});
	res.write(mainRendered);
	res.end();
};

module.exports.about = function (res) {

};

module.exports.tag = function (res, tag) {

};

module.exports.helpTag = function(res) {

};

module.exports.title = function (res, title) {

};

module.exports.helpTitle = function(res) {

};

module.exports.author = function (res, author) {

};

module.exports.helpAuthor = function(res) {

};
