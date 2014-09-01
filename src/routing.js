var express = require('express');
var content = require('./content');

var router = express.Router();

router.get('/', function (req, res) {
	content.sendFrontPage(res);
});

router.get('/about', function (req, res) {
	res.send('about page with contact info');
});

router.get('/tags/:tag', function (req, res) {
	res.send('all posts with "' + req.params.tag + '" tag');
});

router.get('/tags/', function(req, res) {
	res.send('pick a tag from a list');
});

router.get('/author/:author', function (req, res) {
	res.send('all posts from "' + req.params.author + '" author');
});

router.get('/author/', function (req, res) {
	res.send('pick author from a list');
});

router.get('/title/:title', function (req, res) {
	res.send('post with "' + req.params.title + '" title');
});
router.get('/title/', function(req, res) {
	res.send('pick author from a list');
});

module.exports = function (app) {
	app.use(express.static('./public'));
	app.use('/', router);
}
