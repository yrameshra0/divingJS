var setFeatures = function setFeatures() {
    setFlags(getParamFeatures());
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
  getParams = function getParams() {
    var params = {},
      queryParams = exportVar.locationSearch();

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
  locationSearch = function locationSearch() {
    return window.location.search;
  },
  exportVar = {
    getParams: getParams,
    locationSearch: locationSearch,
    getParamFeatures: getParamFeatures,
    setFlags: setFlags,
    setFeatures: setFeatures
  };

module.exports = exportVar;