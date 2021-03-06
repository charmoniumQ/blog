var express = require('express');
var content = require('./content');
var database = require('./database');
var bunyan = require('bunyan');

var log = bunyan.createLogger({name: 'myapp', src: true});
var router = express.Router();
log.level('info');

router.get('/', function (req, res) {
	log.info('routing to front page');
	log.debug('database state', database.test());
	content.frontPage(res);
});


router.get('/about', function (req, res) {
	content.about(res);
});

router.get('/tags/:tag', function (req, res) {
	log.info('routing ' + req.url + ' to /tags/:tag tag=' + req.params.tag);
	log.debug('database state', database.test());
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
		log.info(req.method + ' ' + req.url);
		log.debug('database state', database.test());
		next();
	});
	app.use(express.static('./public'));
	app.use('/', router);

}
