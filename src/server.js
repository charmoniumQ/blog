var express = require('express');

// TODO:
//   Error handling
//   Logging
//   Favicon

var app = express();

require('./routing')(app);

var port = Number(process.env.PORT || 5000);
var server = app.listen(port, function() {
	log.info('Listening on port ' + port);

});
