var fs = require("fs");
var bunyan = require('bunyan');

var log = bunyan.createLogger({name: 'myapp', src: true});
log.level('debug');

Array.prototype.contains = function(element){
    return this.indexOf(element) > -1;
};

Object.prototype.clone = function() {
	return JSON.parse(JSON.stringify(this));
}

var articleInfos = {
	  "titles": []
	, "dates": []
	, "authors": []
	, "tags": []
	, "bodies": []
}
articles = []

var fileList = fs.readdirSync('./data/');
for (var i = 0; i < fileList.length; i++) {
	var articleString = fs.readFileSync('./data/' + fileList[i], 'utf8');
	var articleJSON = JSON.parse(articleString);
	articles.push(articleJSON);

	articleInfos.titles.push(articleJSON.title);
	articleInfos.dates.push(articleJSON.date);
	articleInfos.authors.push(articleJSON.author);
	articleInfos.tags.push(articleJSON.tags);
	articleInfos.bodies.push(articleJSON.body);
}

function test() {
	thing = {
		  'articleInfos': articleInfos
		, 'articles': articles
	};
	return thing.clone();
}

module.exports.test = test;

module.exports.getTags = function () {
	uniqueTags = []
	for (var i = 0; i < articleInfos.tags.length; i++) {
		for (var j = 0; j < articleInfos.tags[i].length; j++) {
			if (! uniqueTags.contains(articleInfos.tags[i][j])) {
				uniqueTags.push(articleInfos.tags[i][j]);
			}
		}
	}
	log.debug('database state', test());
	return uniqueTags.clone();
};

module.exports.getAll = function() {
	log.debug('database state', test());
	return articles.clone();
};

module.exports.getTag = function(tag) {
	log.debug('database state', test());
	articlesWithTag = []
	for (var i = 0; i < articleInfos.tags.length; i++) {
		if (articleInfos.tags[i].contains(tag)) {
			articlesWithTag.push(articles[i]);
		}
	}
	log.debug('database state', test());
	return articlesWithTag.clone();
};
