var union = require('mout/array/union'),
  contains = require('mout/array/contains'),
  EventEmitter = require('events').EventEmitter,
  stampit = require('stampit'),
  exportVar = {
    getParams: function getParams() {
      var params = {},
        queryParams = locationSearch();

      if (queryParams) {
        var parts = queryParams.slice(1).split('&');
        parts.forEach(function(part) {
          var pair = part.split('=');
          pair[0] = decodeURIComponent(pair[0]);
          pair[1] = decodeURIComponent(pair[1]);
          console.log(pair[0] + " -- " + pair[1]);
          params[pair[0]] = (pair[1] !== 'undefined') ? pair[1] : true;
        });
      }

      console.log(params);
      return params;
    },
    locationSearch: function locationSearch() {
      return window.location.search;
    }

  };

module.exports = exportVar;