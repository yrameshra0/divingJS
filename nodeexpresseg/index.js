var express = require('express'),

    // Create an application instance
    app = express(),
    port = process.env.PORT || 44444;

app.get('/', function(req, res) {
    res.set('Content-Type', 'text/plain');

    res.end('Hello World from Express \n');
});

app.listen(port, function() {
    console.log('Listening on port ==> ' + port);
});

module.exports = app;