var express = require('express');
var bunyan = require('bunyan');

var log = bunyan.createLogger({name: 'myapp', src: true});
var app = express();
log.level('info');

// TODO:
//   Error handling

process.on('uncaughtException', function(err) {
    // handle the error safely
	log.error(err);
});

require('./routing')(app)

var port = Number(process.env.PORT || 5000);
var server = app.listen(port, function() {
	log.info('Listening on port ' + port);
});
