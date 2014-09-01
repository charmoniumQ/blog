var fs = require("fs");
var encoder = require('node-html-encoder')

Array.prototype.contains = function(element){
    return this.indexOf(element) > -1;
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
	return uniqueTags
};

module.exports.getAll = function() {
	return articles;
};
