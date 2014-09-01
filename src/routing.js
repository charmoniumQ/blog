var express = require('express');
var content = require('./content');

var router = express.Router();

router.get('/', function (req, res) {
	content.frontPage(res);
});

router.get('/about', function (req, res) {
	content.about(res);
});

router.get('/tags/:tag', function (req, res) {
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
	app.use(express.static('./public'));
	app.use('/', router);
}
