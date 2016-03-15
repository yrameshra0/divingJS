var bunyan = require('bunyan'), // Ligthweight logging library
  cuid = require('cuid'), // for creaing request id
  assign = require('lodash/object/assign'), //for object property overrides

  getFullStack = function getFullStack(err) {
    var returnCause = err.stack || err.toString(),
      cause;

    if (err.cause && typeof(err.cause) === 'function') {
      cause = err.cause();
      if (cause)
        returnCause += '\nCaused by: ' + getFullStack(cause);
    }

    return returnCause;
  },
  serializers = {
    req: function reqSerializer(req) {
      if (!req || !req.connection)
        return req;

      return {
        url: req.url,
        method: req.method,
        protocol: req.protocol,
        requestId: req.requestId,
        // In case there's a proxy server:
        ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
        headers: req.headers
      };
    },

    res: function resSerializer(res) {
      if (!res)
        return res;

      return {
        statusCode: res.statusCode,
        headers: res._headers,
        requestId: res.requestId,
        responseTime: res.responseTime
      };
    },

    err: function errSerializer(err) {
      if (!err || !err.stack)
        return err;

      return {
        message: err.message,
        name: err.name,
        stack: getFullStack(err),
        code: err.code,
        signal: err.signal,
        requestId: err.requestId
      };
    }
  },

  defaults = {
    name: "unnames app",
    serializers: assign({}, bunyan.stdSerializers, serializers)
  },

  createLogger = function(options) {
    var settings = assign({}, defaults, options),
      log = bunyan.createLogger(settings);

    log.requestLogger = function createRequestLogger() {

      return function requestLogger(req, res, next) {
        // Used to calculate response times
        var startTime = Date.now();
        // Add a unique identifier to the request
        req.requestId = cuid();
        // Log the request
        log.info({
          req: req
        });
        // Make sure response get logged, too
        req.on('end', function() {
          res.responseTime = Date.now() - startTime;
          res.requestId = req.requestId;
          log.info({
            res: res
          });
        });

        next();
      };
    };

    log.errorLogger = function createErrorLogger() {

      return function errorLogger(err, req, res, next) {
        // Add the requestId so we can link the error back to the orginating request
        err.requestId = req.requestId;
        log.error({
          err: err
        });
        next(err);
      };
    };

    log.route = function route() {
      return function pixel(req, res) {
        var data;

        if (settings.logParams && req.params) {
          data = assign({}, req.params, {
            requestId: req.requestId
          });
          log.info(data);
        }

        res.header('content-type', 'image/gif');
        // GIF images can be so small, it's
        // easy to just inline it instead of
        // loading from a file:
        res.send("R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=");
      };
    };
    return log;
  };

module.exports = createLogger;