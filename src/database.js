var fs = require("fs");

Array.prototype.contains = function(element){
    return this.indexOf(element) > -1;
};

Array.prototype.clone = function() {
	return this.slice(0);
};

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

module.exports.getTags = function () {
	uniqueTags = []
	for (var i = 0; i < articleInfos.tags.length; i++) {
		for (var j = 0; j < articleInfos.tags[i].length; j++) {
			if (! uniqueTags.contains(articleInfos.tags[i][j])) {
				uniqueTags.push(articleInfos.tags[i][j]);
			}
		}
	}
	test();
	return uniqueTags.clone();
};

function test() {
	console.log(articleInfos.titles + ' ' + articles.length);
}

module.exports.test = test;

module.exports.getAll = function() {
	console.log('getAll():');
	test();
	console.log();
	return articles.clone();
};

module.exports.getTag = function(tag) {
	console.log('getTag(' + tag + '):');
	test();
	articlesWithTag = []
	for (var i = 0; i < articleInfos.tags.length; i++) {
		if (articleInfos.tags[i].contains(tag)) {
			articlesWithTag.push(articles[i]);
		}
	}
	test();
	console.log();
	return articlesWithTag.clone();
};
