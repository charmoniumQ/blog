var express = require('express');
var bunyan = require('bunyan');

var log = bunyan.createLogger({name: 'myapp', src: true});
var app = express();
log.level('trace');

// TODO:
//   Error handling

process.on('uncaughtException', function(err) {
    // handle the error safely
	log.error(err);
});

require('./routing')(app)

PORT = 80;
var server = app.listen(PORT, function() {
	log.info('Listening on port ' + PORT);
});
