var fs = require('fs');
var handlebars = require('handlebars');
var database = require('./database');
var bunyan = require('bunyan');

var log = bunyan.createLogger({name: 'myapp', src: true});
log.level('info');

handlebars.registerHelper('url_encode', function (text) {
	return encodeURI(text).replace(/%5B/g, '[').replace(/%5D/g, ']');
});

var mainSource, mainTemplate;
try {
	mainSource = fs.readFileSync('./views/main_template.html', 'utf8');
	mainTemplate = handlebars.compile(mainSource);
} catch (err) {
	log.error(err);
}

function return404(res) {
	log.warn('404 error');
	res.writeHead(404, {"Content-Type": "text/plain"});
	res.write("404 Not Found\n");
	res.end();
}

function returnArticles(res, articles) {
	templateData = {
		  'page_title': 'My blog'
		, 'articles': articles
	};
	mainRendered = mainTemplate(templateData);

	res.writeHeader(200, {"Content-Type": "text/html"});
	res.write(mainRendered);
	res.end();
}

module.exports.frontPage = function (res) {
	articles = database.getAll();
	returnArticles(res, articles);
};

module.exports.about = function (res) {
	return404(res);
};

module.exports.tag = function (res, tag) {
//	articles = database.getTag(tag);
//	returnArticles(res, articles);
	return404(res);
};

module.exports.helpTag = function(res) {
	return404(res);
};

module.exports.title = function (res, title) {
	return404(res);
};

module.exports.helpTitle = function(res) {
	return404(res);
};

module.exports.author = function (res, author) {
	return404(res);
};

module.exports.helpAuthor = function(res) {
	return404(res);
};
