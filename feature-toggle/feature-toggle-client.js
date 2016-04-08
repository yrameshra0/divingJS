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
        return !className.match(/ˆft/);
      });

    document.getElementsByTagName('body')[0].className = classNames.join(' ') + ' ' + featureClasses;
  },
  setFeatures = function setFeatures(baseFeatures) {
    var paramFeatures = getParamFeatures(),
      activeFeatures = getActiveFeatures(baseFeatures, paramFeatures),
      methods = {
        active: function active(feature) {
          var testFeature = feature && feature.trim && feature.trim();
          return contains(activeFeatures, testFeature);
        },
        activate: function activate(features) {
          activeFeatures = union(activeFeatures, features);
          setFlags(activeFeatures);
          this.emit('activated', features);
          return this;
        },
        deactivate: function deactivate(features) {
          activeFeatures = activeFeatures.filter(function(feature) {
            return !contains(features, feature);
          });
          setFlags(activeFeatures);
          this.emit('deactivated', features);
          return this;
        },
      },
      ft = stampit.compose(
        stampit.convertConstructor(EventEmitter),
        stampit(methods))
      .create();

    setFlags(activeFeatures);
    return ft;
  },
  exportVar = {
    getParams: getParams,
    locationSearch: function locationSearch() {
      return window.location.search;
    },
    getParamFeatures: getParamFeatures,
    getActiveFeatures: getActiveFeatures,
    setFlags: setFlags,
    setFeatures: setFeatures
  };

module.exports = exportVar;