var express = require('express');

// TODO:
//   Error handling
//   Logging

var app = express();

require('./routing')(app)

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
