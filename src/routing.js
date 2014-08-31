var express = require('express')

var router = express.Router();

router.get('/', function (req, res) {
	res.send('front page');
});

router.get('/about', function (req, res) {
	res.send('about page with contact info');
});

router.get('/tags/:tag', function (req, res) {
	res.send('all posts with "' + req.params.tag + '" tag');
});

router.get('/author/:author', function (req, res) {
	res.send('all posts from "' + req.params.author + '" author');
});

router.get('/title/:title', function (req, res) {
	res.sned('post with "' + req.params.title + '" title');
});

module.exports = function (app) {
	app.use('/', router);
}
