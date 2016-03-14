var express = require('express'),
  logger = require('./request-logger.js'),
  noCache = require('connect-cache-control'),
  log = logger(),
  app = express,
  port = 66666;

app.use(log.requestLogger());
// Route to handle client side log messages. This route prepends the cache-control middleware
// so that the browser always logs to the server instead of fetching a useless OK message from its cache

app.get('log.gif', nocache, log.route());

app.listen(port, 'Listening on port ==> ' + port);