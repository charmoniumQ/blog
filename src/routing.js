var express = require('express');
var content = require('./content');
var database = require('./database');

var router = express.Router();



router.get('/', function (req, res) {
	content.frontPage(res);
});


router.get('/about', function (req, res) {
	content.about(res);
});

router.get('/tags/:tag', function (req, res) {
//	console.log('routing ' + req.url + ' to /tags/:tag');
//	database.test();
//	console.log();
	content.tag(res, req.params.tag);
});


router.get('/tags/', function(req, res) {
	content.helpTag(res);
});

router.get('/author/:author', function (req, res) {
	content.author(res, req.params.author);
});

router.get('/author/', function (req, res) {
	content.helpAuthor(res);
});

router.get('/title/:title', function (req, res) {
	content.title(res, req.params.title);
});

router.get('/title/', function(req, res) {
	content.helpTitle(res);
});

module.exports = function (app) {
	app.use(function(req, res, next){
		console.log('%s %s', req.method, req.url);
		database.test();
		console.log();
		next();
	});
	app.use(express.static('./public'));
	app.use('/', router);

}
