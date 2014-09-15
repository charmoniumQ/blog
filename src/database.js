var fs = require("fs");
var bunyan = require('bunyan');
var _ = require('lodash');

var log = bunyan.createLogger({name: 'myapp', src: true});
log.level('info');

var articleInfos = {
	  "titles": []
	, "dates": []
	, "authors": []
	, "tags": []
	, "bodies": []
};
articles = [];

var fileList = fs.readdirSync('./data/');
_.forEach(fileList, function (file) {
	var articleString = fs.readFileSync('./data/' + file, 'utf8');
	var articleJSON = JSON.parse(articleString);
	articles.push(articleJSON);
});

articles.sort(function (a, b) {
	return a.date < b.date; // lex sort on date puts newest articles first
});

_.forEach(articles, function(article) {
	articleInfos.titles.push(article.title);
	articleInfos.dates.push(article.date);
	articleInfos.authors.push(article.author);
	articleInfos.tags.push(article.tags);
	articleInfos.bodies.push(article.body);
});

function test() {
	thing = {
		  'articleInfos': articleInfos
		, 'articles': articles
	};
	return _.cloneDeep(thing);
}

module.exports.test = test;

module.exports.getTags = function () {
	uniqueTags = [];
	_.forEach(articleInfos.tags, function (tagList) {
		_.forEach(tagList, function (tag) {
			if (_.contains(uniqueTags, tag)) {
				uniqueTags.push(articleInfos.tags[i][j]);
			}
		});
	});
	log.debug('database state', test());
	return uniqueTags.clone();
};

module.exports.getAll = function() {
	log.debug('database state', test());
	return _.cloneDeep(articles);
};

module.exports.getTag = function(tag) {
	log.debug('database state', test());
	articlesWithTag = [];
	for (var i = 0; i < articleInfos.tags.length; i++) {
		if (articleInfos.tags[i].contains(tag)) {
			articlesWithTag.push(articles[i]);
		}
	}
	log.debug('database state', test());
	return articlesWithTag.clone();
};
