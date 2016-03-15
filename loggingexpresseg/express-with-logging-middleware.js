var express = require('express'),
  logger = require('./request-logger.js'),
  noCache = require('connect-cache-control'),
  log = logger(),
  app = express(),
  port = 66666;

app.use(log.requestLogger());
app.use(log.errorLogger());

// Route to handle client side log messages. This route prepends the cache-control middleware
// so that the browser always logs to the server instead of fetching a useless OK message from its cache
app.get('/log.gif', noCache, log.route());

app.get('/error', function createError(req, res, next) {
  var err = new Error('Sample Error');
  err.status = 500;
  next(err);
});

app.listen(port, function() {
  console.log('Listening on port ==> ' + port);
});

module.exports = app;