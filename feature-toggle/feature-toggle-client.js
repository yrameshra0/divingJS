var union = require('mout/array/union'),
  contains = require('mout/array/contains'),
  EventEmitter = require('events').EventEmitter,
  stampit = require('stampit'),
  getParams = function getParams() {
    var params = {},
      queryParams = locationSearch();

    if (queryParams) {
      var parts = queryParams.slice(1).split('&');
      parts.forEach(function(part) {
        var pair = part.split('=');
        pair[0] = decodeURIComponent(pair[0]);
        pair[1] = decodeURIComponent(pair[1]);
        params[pair[0]] = (pair[1] !== 'undefined') ? pair[1] : true;
      });
    }

    return params;
  },
  getParamFeatures = function getParamFeatures() {
    var features = getParams().ft;
    return features ? features.split(',') : 'undefined';
  },
  getActiveFeatures = function getActiveFeatures(basefeature, paramFeatures) {
    return union(basefeature, paramFeatures);
  },
  setFlags = function setFlags(features) {
    var featureClasses = features.map(function(feature) {
        return 'ft-' + feature;
      }).join(' '),
      classNames = document.getElementsByTagName('body')[0]
      .className.split(' ').filter(function(className) {
        console.log(className);
        return !className.match(/ˆft/);
      });

    document.getElementsByTagName('body')[0].className = classNames.join(' ') + ' ' + featureClasses;
  },
  exportVar = {
    getParams: getParams,
    locationSearch: function locationSearch() {
      return window.location.search;
    },
    getParamFeatures: getParamFeatures,
    getActiveFeatures: getActiveFeatures,
    setFlags: setFlags
  };

module.exports = exportVar;