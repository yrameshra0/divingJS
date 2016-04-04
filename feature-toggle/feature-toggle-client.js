var union = require('mout/array/union'),
  contains = require('mout/array/contains'),
  EventEmitter = require('events').EventEmitter,
  stampit = require('stampit'),
  exportVar = {
    getParams: function getParams() {
      return [1, 2, 3];
    }
  };

module.exports = exportVar;