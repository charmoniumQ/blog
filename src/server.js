var express = require('express');

// TODO:
//   Error handling
//   Logging
//   Favicon

var app = express();

require('./routing')(app)

var server = app.listen(80, function() {
    console.log('Listening on port %d', server.address().port);
});
